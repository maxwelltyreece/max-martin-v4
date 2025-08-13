'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import styles from './Navbar.module.css'

export default function Navbar() {
  const pathname = usePathname()

  // Determine text color based on page
  const getTextColor = () => {
    if (pathname === '/gallery' || pathname === '/projects') {
      return '#1F3D2C' // Dark green for light backgrounds
    }
    return '#FAFFFA' // Light cream for darker backgrounds
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.links}>
        <motion.div
          animate={{ color: getTextColor() }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ display: 'inline-block' }}
        >
          <Link
            href="/projects"
            className={pathname === '/projects' ? styles.active : ''}
          >
            projects
          </Link>
        </motion.div>
        
        <motion.div
          animate={{ color: getTextColor() }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ display: 'inline-block' }}
        >
          <Link
            href="/production"
            className={pathname === '/production' ? styles.active : ''}
          >
            production
          </Link>
        </motion.div>

        <motion.div
          animate={{ color: getTextColor() }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ display: 'inline-block' }}
        >
          <Link
            href="/"
            className={pathname === '/' ? styles.active : ''}
          >
            h
          </Link>
        </motion.div>

        <motion.div
          animate={{ color: getTextColor() }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ display: 'inline-block' }}
        >
          <Link
            href="/music"
            className={pathname === '/music' ? styles.active : ''}
          >
            music
          </Link>
        </motion.div>

        <motion.div
          animate={{ color: getTextColor() }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ display: 'inline-block' }}
        >
          <Link
            href="/gallery"
            className={pathname === '/gallery' ? styles.active : ''}
          >
            gallery
          </Link>
        </motion.div>
      </div>
    </nav>
  )
}
