"use client"

import { motion } from "framer-motion"

type ProjectCardProps = {
  title: string
  description: string
  repoUrl?: string
  liveUrl?: string
  backgroundVideo: string
  onClick: () => void
}

export default function ProjectCard({
  title,
  description,
  repoUrl,
  liveUrl,
  backgroundVideo,
  onClick,
}: ProjectCardProps) {
  const hasLinks = Boolean(repoUrl || liveUrl)

  return (
    <motion.article
      className="relative min-w-[300px] overflow-hidden text-white rounded-2xl p-12 cursor-pointer"
      whileHover={{ scale: 1.03 }}
      onClick={onClick}
      layout
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="pointer-events-none mix-blend-screen absolute inset-0 h-full w-full object-fill"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 bg-black/40" />
      <div className="relative z-10">
        <h3 className="font-title text-xl text-center font-semibold mb-3 ">{title}</h3>
        <p className="text-xs text-center">{description}</p>
        {hasLinks && (
          <div className="mt-4 flex items-center justify-center gap-3">
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View GitHub repository"
                className="inline-flex items-center"
                onClick={(event) => event.stopPropagation()}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="h-8 w-auto object-contain mix-blend-screen"
                >
                  <source src="/animations/github_anim.mp4" type="video/mp4" />
                </video>
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live project"
                className="inline-flex items-center"
                onClick={(event) => event.stopPropagation()}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="h-8 w-auto object-contain mix-blend-screen"
                >
                  <source src="/animations/projects_anim.mp4" type="video/mp4" />
                </video>
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  )
}
