"use client"

import { motion } from "framer-motion"
import { useState } from "react"

type ProjectCardProps = {
  title: string
  description: string
  backgroundVideo: string
  onClick: () => void
}

export default function ProjectCard({
  title,
  description,
  backgroundVideo,
  onClick,
}: ProjectCardProps) {
  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <motion.article
      className={`relative w-[260px] sm:w-[300px] shrink-0 box-border overflow-hidden text-white rounded-2xl p-12 cursor-pointer ${videoLoaded ? "bg-transparent" : "bg-neutral-900"}`}
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
        onLoadedData={() => setVideoLoaded(true)}
        className="pointer-events-none mix-blend-screen absolute inset-0 h-full w-full object-fill"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 " />
      <div className="relative z-10">
        <h3 className="text-xl text-center font-semibold mb-3 ">{title}</h3>
        <p className="text-xs text-center">{description}</p>
      </div>
    </motion.article>
  )
}
