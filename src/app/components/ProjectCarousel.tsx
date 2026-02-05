"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProjectCard from "./ProjectCard"
import type { Project } from "../../lib/projects"

type ProjectCarouselProps = {
  projects: Project[]
}

const CARD_WIDTH = 300
const GAP = 24
const VISIBLE_COUNT = 3

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [index, setIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(VISIBLE_COUNT)
  const [hasMounted, setHasMounted] = useState(false)
  const touchStartXRef = useRef<number | null>(null)
  const touchDeltaXRef = useRef(0)

  const total = projects.length
  const displayCount = Math.min(visibleCount, Math.max(total, 1))
  const cardWidth = visibleCount === 1 ? 260 : CARD_WIDTH
  const step = cardWidth + GAP

  const next = () => {
    setIndex((prev) => (prev + 1) % total)
  }

  const prev = () => {
    setIndex((prev) => (prev - 1 + total) % total)
  }

  // Duplicate projects to allow seamless looping
  const loopedProjects = [...projects, ...projects, ...projects]
  const offsetIndex = index + total

  useEffect(() => {
    setHasMounted(true)
    const updateVisibleCount = () => {
      const width = window.innerWidth
      if (width < 640) {
        setVisibleCount(1)
      } else if (width < 1024) {
        setVisibleCount(2)
      } else {
        setVisibleCount(3)
      }
    }

    updateVisibleCount()
    window.addEventListener("resize", updateVisibleCount)
    return () => window.removeEventListener("resize", updateVisibleCount)
  }, [])

  return (
    <>
      {/* Carousel */}
      <section className="relative mx-auto w-fit">
        <div className="flex items-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="hidden sm:block text-xl text-neutral-400 hover:text-white"
          >
            ←
          </button>

          {/* Viewport */}
          <div
            className="overflow-hidden"
            style={{
              width: displayCount * cardWidth + GAP * (displayCount - 1),
            }}
            onTouchStart={(event) => {
              touchStartXRef.current = event.touches[0]?.clientX ?? null
              touchDeltaXRef.current = 0
            }}
            onTouchMove={(event) => {
              if (touchStartXRef.current === null) return
              touchDeltaXRef.current = (event.touches[0]?.clientX ?? 0) - touchStartXRef.current
            }}
            onTouchEnd={() => {
              const delta = touchDeltaXRef.current
              touchStartXRef.current = null
              touchDeltaXRef.current = 0
              if (Math.abs(delta) < 40) return
              if (delta < 0) {
                next()
              } else {
                prev()
              }
            }}
          >
            <motion.div
              className="flex gap-6"
              initial={false}
              animate={{ x: hasMounted ? -offsetIndex * step : 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {loopedProjects.map((project, i) => (
                <ProjectCard
                  key={`${project.id}-${i}`}
                  title={project.title}
                  description={project.shortDescription}
                  backgroundVideo={["/animations/box1.mp4", "/animations/box2.mp4", "/animations/box3.mp4"][i % 3]}
                  onClick={() => setActiveProject(project)}
                />
              ))}
            </motion.div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="hidden sm:block text-xl text-neutral-400 hover:text-white"
          >
            →
          </button>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="relative overflow-hidden text-white w-full mx-6 rounded-2xl p-12 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl"
              layout
              onClick={(e) => e.stopPropagation()}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-fill"
              >
                <source src="/animations/box2.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 " />
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl md:text-3xl text-center font-semibold mb-3 sm:mb-4 md:mb-6">
                  {activeProject.title}
                </h2>

              <div className="mt-3 sm:mt-4 md:mt-5 max-h-56 sm:max-h-64 md:max-h-72 lg:max-h-80 overflow-y-auto pr-2">
                {activeProject.longDescription.map((paragraph, index) => (
                  <p
                    key={`${activeProject.id}-paragraph-${index}`}
                    className="text-sm sm:text-base md:text-lg leading-relaxed"
                    style={{ fontFamily: '"Times New Roman", Times, serif' }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-center gap-4">
                <button
                  className="text-xs sm:text-sm text-neutral-400 hover:text-white"
                  onClick={() => setActiveProject(null)}
                >
                  Close
                </button>
                {activeProject.repoUrl && (
                  <a
                    href={activeProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-neutral-400 hover:text-white"
                  >
                    Source
                  </a>
                )}
              </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
