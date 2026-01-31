'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
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
        <div className="pb-24">
          <motion.video
            ref={logoVideoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-auto object-contain h-[20vh] sm:h-[26vh] md:h-[32vh] lg:h-[38vh] xl:h-[42vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 1.5, ease: 'easeOut' }}
          >
            <source src="/animations/MaxwellMartin_anim.mp4" type="video/mp4" />
          </motion.video>
        </div>
        <p className="mt-auto text-center text-sm sm:text-base text-neutral-200">
          my web portfolio.
        </p>
      </div>
    </div>
  )
}
