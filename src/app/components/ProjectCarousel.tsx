"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProjectCard from "./ProjectCard"
import type { Project } from "@/lib/projects"

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

  const total = projects.length
  const displayCount = Math.min(visibleCount, Math.max(total, 1))
  const step = CARD_WIDTH + GAP

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
            className="text-xl text-neutral-400 hover:text-white"
          >
            ←
          </button>

          {/* Viewport */}
          <div
            className="overflow-hidden"
            style={{
              width: displayCount * CARD_WIDTH + GAP * (displayCount - 1),
            }}
          >
            <motion.div
              className="flex gap-6"
              animate={{ x: -offsetIndex * step }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {loopedProjects.map((project, i) => (
                <ProjectCard
                  key={`${project.id}-${i}`}
                  title={project.title}
                  description={project.shortDescription}
                  repoUrl={project.repoUrl}
                  liveUrl={project.liveUrl}
                  backgroundVideo={["/animations/box1.mp4", "/animations/box2.mp4", "/animations/box3.mp4"][i % 3]}
                  onClick={() => setActiveProject(project)}
                />
              ))}
            </motion.div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="text-xl text-neutral-400 hover:text-white"
          >
            →
          </button>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="bg-neutral-950 text-white max-w-xl w-full mx-6 rounded-2xl p-8"
              layout
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-semibold mb-4">
                {activeProject.title}
              </h2>

              <p className="text-neutral-400 leading-relaxed">
                {activeProject.longDescription}
              </p>

              <button
                className="mt-6 text-sm text-neutral-400 hover:text-white"
                onClick={() => setActiveProject(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
