'use client'

// @ts-ignore
import * as PANOLENS from 'panolens'
import { useEffect, useRef } from 'react'

interface PanoramaViewerProps {
  src: string
  onCloseAction: () => void
}

export default function PanoramaViewer({ src, onCloseAction }: PanoramaViewerProps) {
  const panoContainerRef = useRef<HTMLDivElement>(null)
  const viewerRef = useRef<PANOLENS.Viewer | null>(null)

  useEffect(() => {
    if (!panoContainerRef.current) return

    // Create Panorama Viewer only once
    if (!viewerRef.current) {
      viewerRef.current = new PANOLENS.Viewer({ container: panoContainerRef.current })
    }

    const panorama = new PANOLENS.ImagePanorama(src)
    viewerRef.current?.add(panorama)

    return () => {
      viewerRef.current?.remove(panorama) // Remove panorama when component unmounts
      if (panoContainerRef.current) {
        panoContainerRef.current.innerHTML = '' // Clear container to avoid overlapping views
      }
    }
  }, [src])

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-80'>
      <div ref={panoContainerRef} className='h-[80vh] w-[90vw]' />
      <button onClick={onCloseAction} className='absolute right-4 top-4 text-xl text-white'>
        ✖
      </button>
    </div>
  )
}
