'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const images = [
  { src: '/carousel/camp1.jpg', alt: 'Image 1', title: 'Campus Life' },
  { src: '/carousel/camp2.jpg', alt: 'Image 2', title: 'Research Labs' },
  { src: '/carousel/camp3.jpg', alt: 'Image 3', title: 'Library' },
  { src: '/carousel/camp4.jpg', alt: 'Image 4', title: 'Sports Complex' },
  { src: '/carousel/camp5.jpg', alt: 'Image 5', title: 'Auditorium' },
]

export default function GallerySphere() {
  const [index, setIndex] = useState(0)

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length)
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length)

  return (
    <div className='relative flex w-auto items-center gap-4 px-7 sm:ml-[40px] sm:gap-8 sm:border-l-2 sm:border-black sm:pl-24'>
      {/* Image Slider Container */}
      <div className='relative flex flex-col items-center'>
        {/* Navigation Arrows */}
        <button onClick={prevSlide} className='text-black sm:-mt-7'>
          <svg
            className='mb-5 h-8 rotate-180 sm:h-12 sm:w-12'
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
        <div className='relative h-[400px] w-[250px] overflow-hidden rounded-xl shadow-lg sm:h-[560px] sm:w-[300px]'>
          {images.map((image, i) => (
            <motion.div
              key={i}
              className='absolute h-full w-full'
              initial={{ opacity: 0, y: -50 }}
              animate={index === i ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <Image src={image.src} alt={image.alt} fill className='rounded-xl object-cover' />
              <div className='absolute bottom-4 left-4 rounded-lg bg-black/60 px-3 py-1 text-white'>
                {image.title}
              </div>
            </motion.div>
          ))}
        </div>

        <button onClick={nextSlide} className='-mb-7 text-black'>
          <svg
            className='mt-5 h-8 sm:h-12 sm:w-12'
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
      <div className='flex flex-col items-center gap-4'>
        {images.map((_, i) => (
          <div
            key={i}
            className={`flex content-center items-center justify-center rounded-full border text-center transition-all duration-300 ${
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
