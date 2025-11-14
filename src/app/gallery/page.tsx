import React from 'react'
import GalleryMasonry from '../components/GalleryMasonry/GalleryMasonry'

export default function Gallery() {
    return (
        <main style={{ padding: '2rem', justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>gallery</h1>
            <GalleryMasonry />
        </main>
    )
}