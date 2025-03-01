'use client'

import { Viewer } from '@photo-sphere-viewer/core'
import '@photo-sphere-viewer/core/index.css'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const images = [
  { src: '/sphere1.jpg', alt: 'Image 0', title: 'Auditorium' },
  { src: '/sphere3.jpg', alt: 'Image 1', title: 'Academic' },
  { src: '/sphere2.jpg', alt: 'Image 2', title: 'Hostel' },
  { src: '/carousel/camp3.jpg', alt: 'Image 3', title: 'Sports' },
  { src: '/carousel/camp4.jpg', alt: 'Image 4', title: 'Entrance' },
]

export default function GallerySphere() {
  const [index, setIndex] = useState(0)
  const viewerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (viewerRef.current) {
      const viewer = new Viewer({
        container: viewerRef.current,
        panorama: images[index].src,
        defaultZoomLvl: 0, // Adjust this to control zoom level
        fisheye: false, // Set to true if you want a wider view
      })

      return () => {
        viewer.destroy()
      }
    }
  }, [index])

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length)
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length)

  return (
    <div className='relative z-10 flex w-auto flex-col items-center gap-4 sm:flex-row'>
      {/* Image Slider Container */}
      <div className='relative flex items-center sm:flex-col'>

        {/* Navigation Arrows */}
        <button onClick={prevSlide} className='text-black'>
          <svg
            className='mb-3 max-sm:mr-2 h-8 sm:rotate-180 rotate-90 sm:h-12 sm:w-12'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M19 9l-7 7-7-7'
            ></path>
          </svg>
        </button>

        {/* Image Slider */}
        <div className='relative h-[370px] w-[225px] overflow-hidden rounded-xl shadow-lg sm:h-[560px] sm:w-[300px]'>
          {images.map((image, i) => (
            <motion.div
              key={i}
              className='absolute h-full w-full'
              initial={{ opacity: 0, y: 50 }}
              animate={index === i ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              {index === i && <div ref={viewerRef} className='h-full w-full'></div>}
              <div className='absolute bottom-12 right-2 rounded-lg bg-black/60 px-3 py-1 text-white'>
                {image.title}
              </div>
            </motion.div>
          ))}
        </div>

        <button onClick={nextSlide} className='text-black'>
          <svg
            className='mt-3 max-sm:ml-2 h-8 max-sm:-translate-y-3 sm:rotate-0 -rotate-90 sm:h-12 sm:w-12'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M19 9l-7 7-7-7'
            ></path>
          </svg>
        </button>
      </div>

      {/* Number Circle Tracker (Right Side) */}
      <div className='flex max-sm:h-10 items-center gap-4 sm:flex-col'>
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`flex cursor-pointer content-center items-center justify-center rounded-full border text-center transition-all duration-300 ${
              index === i
                ? 'h-9 w-9 bg-white text-lg text-black outline outline-black'
                : 'h-6 w-6 bg-black text-sm text-white'
            }`}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  )
}
