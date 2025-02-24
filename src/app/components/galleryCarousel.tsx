'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const gridClasses = {
  one: 'col-span-5 row-span-3',
  two: 'col-span-4 row-span-5',
  three: 'col-span-3 row-span-2',
  four: 'col-span-3 row-span-3',
  five: 'col-span-2 row-span-2',
  six: 'col-span-3 row-span-2',
}

type GridArea = keyof typeof gridClasses

const images: { src: string; alt: string; area: GridArea; title: string; description: string }[] = [
  {
    src: '/carousel/camp1.jpg',
    alt: 'Image 1',
    area: 'one',
    title: 'Campus Life',
    description: 'Experience the vibrant atmosphere',
  },
  {
    src: '/carousel/camp2.jpg',
    alt: 'Image 2',
    area: 'two',
    title: 'Research Labs',
    description: 'State-of-the-art facilities',
  },
  {
    src: '/carousel/camp3.jpg',
    alt: 'Image 3',
    area: 'three',
    title: 'Library',
    description: 'Knowledge hub',
  },
  {
    src: '/carousel/camp4.jpg',
    alt: 'Image 4',
    area: 'four',
    title: 'Sports Complex',
    description: 'Stay active and healthy',
  },
  {
    src: '/carousel/camp5.jpg',
    alt: 'Image 5',
    area: 'five',
    title: 'Auditorium',
    description: 'Where ideas come to life',
  },
  {
    src: '/carousel/camp6.jpg',
    alt: 'Image 6',
    area: 'six',
    title: 'Innovation Hub',
    description: 'Create the future',
  },
]

export default function InteractiveGrid() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className='grid h-[360px] grid-cols-12 grid-rows-5 gap-2 sm:mt-10 sm:h-[560px] sm:w-[700px] sm:gap-3 sm:pr-28'>
      {images.map((image, index) => {
        const isHovered = hovered === index

        return (
          <motion.div
            key={index}
            className={`group relative overflow-hidden rounded-xl shadow-lg transition-all ${gridClasses[image.area]}`}
          >
            <Image src={image.src} alt={image.alt} fill className='rounded-xl object-cover' />
            <motion.div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4'>
              {/* <h3 className='text-lg font-bold text-white'>{image.title}</h3>
              <p className='text-sm text-white/90'>{image.description}</p> */}
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}
