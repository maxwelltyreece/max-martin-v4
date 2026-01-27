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
    <span className="content-container flex flex-col">
      <div className="mb-2 flex justify-center md:hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-10 w-auto object-contain"
        >
          <source src="/animations/home_anim.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex flex-col items-center gap-4">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-auto object-contain h-[26vh] sm:h-[32vh] md:h-[40vh] lg:h-[48vh] xl:h-[52vh]"
      >
        <source src="/animations/MaxwellMartin_anim.mp4" type="video/mp4" />
      </video>
        <p className="text-center text-sm sm:text-base text-neutral-200">
          my web portfolio
        </p>
      </div>
    </span>
  )
}
