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
    src: '/news.jpg',
    alt: 'Image 1',
    area: 'one',
    title: 'News 1',
    description: 'Latest updates from the campus.',
  },
  {
    src: '/news.jpg',
    alt: 'Image 2',
    area: 'two',
    title: 'News 2',
    description: 'Where you feel at home. College fest coming soon!',
  },
  {
    src: '/news.jpg',
    alt: 'Image 3',
    area: 'three',
    title: 'News 3',
    description: 'Unleash your potential. New courses available.',
  },
  {
    src: '/news.jpg',
    alt: 'Image 4',
    area: 'four',
    title: 'News 4',
    description: 'Welcome to a new world. Join our tech club.',
  },
  {
    src: '/news.jpg',
    alt: 'Image 5',
    area: 'five',
    title: 'News 5',
    description: 'Where ideas come to life. Innovation week starts Monday.',
  },
  {
    src: '/news.jpg',
    alt: 'Image 6',
    area: 'six',
    title: 'News 6',
    description: 'A place to grow. Internship opportunities available.',
  },
]

export default function SpotlightCarousel() {
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 20 }} // Ensures it's hidden by default
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            //
            className='absolute inset-x-0 bottom-0 block bg-gradient-to-t from-black/40 via-transparent to-transparent pb-6 pl-2 sm:pb-8 sm:pl-3'
          >
            <div className='h-[560px]'></div>
            <h3 className='text-wrap text-base font-bold text-white sm:text-xl'>{image.title}</h3>
            <p className='hidden text-base text-white/90 sm:block'>{image.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
