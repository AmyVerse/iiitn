'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const cardsOn = [
  { id: 1, title: 'Card 1', color: 'bg-red-400' },
  { id: 2, title: 'Card 2', color: 'bg-blue-400' },
  { id: 3, title: 'Card 3', color: 'bg-green-400' },
  { id: 4, title: 'Card 4', color: 'bg-yellow-400' },
  { id: 5, title: 'Card 5', color: 'bg-purple-400' },
]

export function CardSliderOn() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cardsOn.length)
    }, 2000) // Auto-slide every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='flex w-full flex-col items-center justify-center'>
      {/* Card Container */}
      <div className='relative w-[90%] max-w-5xl overflow-hidden'>
        <div className='flex gap-6'>
          <AnimatePresence>
            {cardsOn.map((card, index) => {
              const isVisible = index >= activeIndex && index < activeIndex + 3 // Show 3 cards at a time
              return (
                isVisible && (
                  <motion.div
                    key={card.id}
                    className={`relative flex h-80 w-60 items-center justify-center rounded-xl shadow-lg ${card.color}`}
                    initial={{ x: '100%', opacity: 0 }}
                    animate={{ x: '0%', opacity: 1 }}
                    exit={{ x: '-100%', opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className='text-2xl font-bold text-white'>{card.title}</h2>
                  </motion.div>
                )
              )
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Numbered Dot Indicators */}
      <div className='mt-12 flex h-9 flex-row items-center gap-4'>
        {cardsOn.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)} // Enable manual selection
            className={`flex content-center items-center justify-center rounded-full border text-center transition-all duration-300 ${
              activeIndex === index
                ? 'h-8 w-8 bg-white text-lg text-black outline outline-black'
                : 'h-5 w-5 bg-black text-sm text-white'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

const cardsUp = [
  { id: 1, title: 'Card A', color: 'bg-red-400' },
  { id: 2, title: 'Card B', color: 'bg-blue-400' },
  { id: 3, title: 'Card C', color: 'bg-green-400' },
  { id: 4, title: 'Card D', color: 'bg-yellow-400' },
]

export function CardSliderUP() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cardsUp.length)
    }, 2000) // Auto-slide every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='flex w-full flex-col items-center justify-center'>
      {/* Card Container */}
      <div className='relative w-[90%] max-w-5xl overflow-hidden'>
        <div className='flex gap-6'>
          <AnimatePresence>
            {cardsUp.map((card, index) => {
              const isVisible = index >= activeIndex && index < activeIndex + 3 // Show 3 cards at a time
              return (
                isVisible && (
                  <motion.div
                    key={card.id}
                    className={`relative flex h-80 w-60 items-center justify-center rounded-xl shadow-lg ${card.color}`}
                    initial={{ x: '100%', opacity: 0 }}
                    animate={{ x: '0%', opacity: 1 }}
                    exit={{ x: '-100%', opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className='text-2xl font-bold text-white'>{card.title}</h2>
                  </motion.div>
                )
              )
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Numbered Dot Indicators */}
      <div className='mt-12 flex flex-row items-center gap-4'>
        {cardsUp.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)} // Enable manual selection
            className={`flex content-center items-center justify-center rounded-full border text-center transition-all duration-300 ${
              activeIndex === index
                ? 'h-8 w-8 bg-white text-lg text-black outline outline-black'
                : 'h-5 w-5 bg-black text-sm text-white'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}
