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

        <>
    
        </>
      )}
    </main>
  )
}
