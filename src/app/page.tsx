'use client'

import { useEffect, useRef } from 'react'
import styles from './page.module.css'

export default function Splash() {
  const titleVideoRef = useRef<HTMLVideoElement | null>(null)
  const logoVideoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if (titleVideoRef.current) {
      titleVideoRef.current.playbackRate = 1.35
    }
    if (logoVideoRef.current) {
      logoVideoRef.current.playbackRate = 1.35
    }
  }, [])

  return (
    <div className={`content-container`}>
      <div className="page-title-container">
        <video
          ref={titleVideoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="page-title-video"
        >
          <source src="/animations/home_anim.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={`${styles.splashInner} flex flex-col items-center justify-center`}>
        <video
          ref={logoVideoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-auto object-contain h-[26vh] sm:h-[32vh] md:h-[40vh] lg:h-[48vh] xl:h-[52vh]"
        >
          <source src="/animations/MaxwellMartin_anim.mp4" type="video/mp4" />
        </video>
        <p className="mt-auto text-center text-sm sm:text-base text-neutral-200">
          my web portfolio
        </p>
      </div>
    </div>
  )
}
