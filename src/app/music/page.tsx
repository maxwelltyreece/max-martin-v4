import React from 'react'
import styles from './page.module.css'

export default function Music() {
    return (
        <main className={styles.main}>
            <div>
                <img src="/animations/music_box_playing.gif" alt="Music box playing" className={styles.gif} />
            </div>
        </main>
    )
}