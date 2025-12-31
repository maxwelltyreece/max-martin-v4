"use client"

import { motion } from "framer-motion"

type ProjectCardProps = {
  title: string
  description: string
  onClick: () => void
}

export default function ProjectCard({
  title,
  description,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.article
      className="min-w-[300px] bg-transparent border-2 rounded-2xl p-6 cursor-pointer"
      whileHover={{ scale: 1.03 }}
      onClick={onClick}
      layout
    >
      <h3 className="text-xl text-center font-semibold mb-3">{title}</h3>
      <p className="text-sm">{description}</p>
    </motion.article>
  )
}
