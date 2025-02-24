'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const gridClasses: { [key: string]: string } = {
  one: 'col-span-5 row-span-3',
  two: 'col-span-4 row-span-5',
  three: 'col-span-3 row-span-2',
  four: 'col-span-3 row-span-3',
  five: 'col-span-2 row-span-2',
  six: 'col-span-3 row-span-2',
}

const images = [
  {
    src: '/carousel/camp1.jpg',
    alt: 'Image 1',
    area: 'one',
    title: 'Acaedmic Block',
    description: 'Experience the vibrant atmosphere',
  },
  {
    src: '/carousel/camp2.jpg',
    alt: 'Image 2',
    area: 'two',
    title: 'Campus Hostel',
    description: 'Where you feel at home',
  },
  {
    src: '/carousel/camp3.jpg',
    alt: 'Image 3',
    area: 'three',
    title: 'Sports',
    description: 'Unleash your potential',
  },
  {
    src: '/carousel/camp4.jpg',
    alt: 'Image 4',
    area: 'four',
    title: 'Entrance',
    description: 'Welcome to a new world',
  },
  {
    src: '/carousel/camp5.jpg',
    alt: 'Image 5',
    area: 'five',
    title: 'Amphitheatre',
    description: 'Where ideas come to life',
  },
  {
    src: '/carousel/camp6.jpg',
    alt: 'Image 6',
    area: 'six',
    title: 'The Campus',
    description: 'A place to grow',
  },
]

export default function AppleGrid() {
  return (
    <div className='grid h-[360px] grid-cols-12 grid-rows-5 gap-3 sm:h-[560px]'>
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl ${
            gridClasses[image.area]
          }`}
          whileHover={{ scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <Image src={image.src} alt={image.alt} fill className='rounded-xl object-cover' />
          {/* Hidden by default, appears on hover anywhere on the image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0, y: 20 }} // Ensures it's hidden by default
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            //
            className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 opacity-0 group-hover:opacity-100'
          >
            <div className='h-[560px]'></div>
            <h3 className='text-lg font-bold text-white'>{image.title}</h3>
            <p className='text-sm text-white/90'>{image.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
