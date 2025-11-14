'use client'

import { useState, useEffect } from 'react'
import styles from './page.module.css'

export default function Splash() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className={styles.main}>
      {loading ? null : (

        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', zIndex: 10}}>
          <video
            src="/animations/tv_stanby_flicker.webm"
            autoPlay
            muted
            loop
            playsInline
            style={{width: '60%', maxWidth: 640, height: 'auto'}}
          />
        </div>
      )}
    </main>
  )
}
