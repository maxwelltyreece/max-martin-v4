"use client"

import React, {useEffect, useRef, useState} from 'react'
import {createPortal} from 'react-dom'
import styles from './GalleryMasonry.module.css'
import images from '../../../lib/galleryImages'

type ImgMeta = {src: string; w: number; h: number; aspect: number}

export default function GalleryMasonry() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [rows, setRows] = useState<ImgMeta[][]>([])
  const [numRows, setNumRows] = useState(1)
  const [selected, setSelected] = useState<string | null>(null)
  const [rowHeight, setRowHeight] = useState(240)
  const [containerWidth, setContainerWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0)

  // determine number of rows from container width (responsive)
  useEffect(() => {
    function updateRows() {
      const width = containerRef.current?.clientWidth ?? window.innerWidth
      setContainerWidth(width)
      let r = 1
      if (width >= 1024) {
        r = 3
        setRowHeight(380) // larger photos on large screens
      } else if (width >= 640) {
        r = 2
        setRowHeight(300)
      } else {
        r = 1
        setRowHeight(220)
      }
      setNumRows(r)
    }

    updateRows()
    const ro = new ResizeObserver(() => updateRows())
    if (containerRef.current) ro.observe(containerRef.current)
    window.addEventListener('resize', updateRows)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', updateRows)
    }
  }, [])

  // load images to get natural sizes then distribute into balanced rows
  useEffect(() => {
    let mounted = true

    async function loadMeta(): Promise<ImgMeta[]> {
      const metas: ImgMeta[] = []
      await Promise.all(
        images.map((src) =>
          new Promise<void>((res) => {
            const img = new Image()
            img.src = src
            img.onload = () => {
              metas.push({src, w: img.naturalWidth, h: img.naturalHeight, aspect: img.naturalWidth / img.naturalHeight})
              res()
            }
            img.onerror = () => {
              // on error, push a fallback with square aspect
              metas.push({src, w: 1, h: 1, aspect: 1})
              res()
            }
          }),
        ),
      )
      return metas
    }

    function distribute(metas: ImgMeta[], r: number, rowHeightParam = 240) {
      // compute widths at desired rowHeight and place each image into the shortest row (left-to-right balance)
      const rowWidths = new Array(r).fill(0)
      const rowsAcc: ImgMeta[][] = Array.from({length: r}, () => [])

      metas.forEach((m) => {
        const w = m.aspect * rowHeightParam
        // find index of smallest accumulated width
        let idx = 0
        for (let i = 1; i < r; i++) {
          if (rowWidths[i] < rowWidths[idx]) idx = i
        }
        rowWidths[idx] += w
        rowsAcc[idx].push(m)
      })

      return rowsAcc
    }

    loadMeta().then((metas) => {
      if (!mounted) return
      const distributed = distribute(metas, numRows, rowHeight)
      setRows(distributed)
    })

    return () => {
      mounted = false
    }
  }, [numRows, rowHeight])

  // close on Escape key when overlay is open
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setSelected(null)
    }
    if (selected) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected])

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.rows}>
        {rows.map((row, i) => {
          // calculate a row-specific height so the images fill the container width
          const GAP = 16 // px, matches CSS gap
          const totalGap = GAP * (row.length - 1)
          const sumAspect = row.reduce((s, it) => s + it.aspect, 0)
          // determine min/max height based on container width
          let minH = 180
          let maxH = 420
          if (containerWidth >= 1024) {
            minH = 300
            maxH = 520
          } else if (containerWidth >= 640) {
            minH = 240
            maxH = 420
          }
          const availableWidth = Math.max(300, containerWidth - 32) // small padding guard
          const computedHeight = Math.max(minH, Math.min(maxH, (availableWidth - totalGap) / Math.max(0.1, sumAspect)))

          return (
            <div className={styles.row} key={i}>
              {row.map((m) => (
                <div className={styles.item} key={m.src}>
                  <img
                    src={m.src}
                    alt="Gallery image"
                    loading="lazy"
                    className={styles.img}
                    style={{height: computedHeight, width: Math.round(m.aspect * computedHeight), cursor: 'pointer'}}
                    onClick={() => setSelected(m.src)}
                  />
                </div>
              ))}
            </div>
          )
        })}
      </div>
      {selected && typeof document !== 'undefined' &&
        createPortal(
          <div
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            style={{
              position: 'fixed',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0,0,0,0.8)',
              zIndex: 10001,
              cursor: 'zoom-out',
            }}
          >
            <img
              src={selected}
              alt="Full size"
              onClick={() => setSelected(null)}
              style={{maxWidth: '95vw', maxHeight: '95vh', boxShadow: '0 10px 30px rgba(0,0,0,0.6)'}}
            />
          </div>,
          document.body,
        )}
    </div>
  )
}
