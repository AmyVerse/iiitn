'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const cardsOn = [
  { id: 1, title: 'Web Development Competition', color: 'bg-iip' },
  { id: 2, title: 'Demo Days', color: 'bg-iio' },
  { id: 3, title: 'Card 3', color: 'bg-iip' },
  { id: 4, title: 'Card 4', color: 'bg-iio' },
  { id: 1, title: 'Web Development Competition', color: 'bg-iip' },
  { id: 2, title: 'Demo Days', color: 'bg-iio' },
  { id: 3, title: 'Card 3', color: 'bg-iip' },
  { id: 4, title: 'Card 4', color: 'bg-iio' },
  { id: 1, title: 'Web Development Competition', color: 'bg-iip' },
  { id: 2, title: 'Demo Days', color: 'bg-iio' },
  { id: 3, title: 'Card 3', color: 'bg-iip' },
  { id: 4, title: 'Card 4', color: 'bg-iio' },
  { id: 1, title: 'Web Development Competition', color: 'bg-iip' },
  { id: 2, title: 'Demo Days', color: 'bg-iio' },
  { id: 3, title: 'Card 3', color: 'bg-iip' },
  { id: 4, title: 'Card 4', color: 'bg-iio' },
  { id: 1, title: 'Web Development Competition', color: 'bg-iip' },
  { id: 2, title: 'Demo Days', color: 'bg-iio' },
  { id: 3, title: 'Card 3', color: 'bg-iip' },
  { id: 4, title: 'Card 4', color: 'bg-iio' },
]

const cardsUp = [
  { id: 1, title: 'Abhivyakti', color: 'bg-iip' },
  { id: 2, title: 'MUN', color: 'bg-iio' },
  { id: 3, title: 'Inter IIIT Sports', color: 'bg-iip' },
  { id: 4, title: 'D-trexia Dance', color: 'bg-iio' },
  { id: 1, title: 'Web Development Competition', color: 'bg-iip' },
  { id: 2, title: 'Demo Days', color: 'bg-iio' },
  { id: 3, title: 'Card 3', color: 'bg-iip' },
  { id: 4, title: 'Card 4', color: 'bg-iio' },
  { id: 1, title: 'Web Development Competition', color: 'bg-iip' },
  { id: 2, title: 'Demo Days', color: 'bg-iio' },
  { id: 3, title: 'Card 3', color: 'bg-iip' },
  { id: 4, title: 'Card 4', color: 'bg-iio' },
  { id: 1, title: 'Web Development Competition', color: 'bg-iip' },
  { id: 2, title: 'Demo Days', color: 'bg-iio' },
  { id: 3, title: 'Card 3', color: 'bg-iip' },
  { id: 4, title: 'Card 4', color: 'bg-iio' },
  { id: 1, title: 'Web Development Competition', color: 'bg-iip' },
  { id: 2, title: 'Demo Days', color: 'bg-iio' },
  { id: 3, title: 'Card 3', color: 'bg-iip' },
  { id: 4, title: 'Card 4', color: 'bg-iio' },
]

function CardSlider({ cards }: { cards: { id: number; title: string; color: string }[] }) {
  const [index, setIndex] = useState(0)
  const totalCards = cards.length

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % (totalCards + 1)) // Extra slide for seamless looping
    }, 2000)

    return () => clearInterval(interval)
  }, [totalCards])

  useEffect(() => {
    if (index === totalCards) {
      setTimeout(() => setIndex(0), 500) // Instantly reset when reaching duplicate
    }
  }, [index, totalCards])

  return (
    <div className='relative flex w-full flex-col items-center overflow-hidden'>
      {/* Card Container */}
      <div className='flex w-full justify-center overflow-hidden'>
        <motion.div
          className='flex gap-6'
          animate={{ x: `-${index * 5}%` }}
          transition={{ ease: 'easeInOut', duration: index === totalCards ? 0 : 0.5 }}
          style={{ display: 'flex', width: '500%' }}
        >
          {[...cards, cards[0]].map(
            (
              card,
              i, // Append first card at the end
            ) => (
              <div
                key={i}
                className={`flex h-60 w-60 items-center justify-center rounded-xl shadow-lg ${card.color}`}
              >
                <h2 className='text-2xl font-bold text-white'>{card.title}</h2>
              </div>
            ),
          )}
        </motion.div>
      </div>

      {/* Navigation Dots */}
      <div className='mt-6 flex h-9 gap-3'>
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === i ? 'bg-black outline outline-black' : 'bg-black/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export function CardSliderOn() {
  return <CardSlider cards={cardsOn} />
}

export function CardSliderUP() {
  return <CardSlider cards={cardsUp} />
}
