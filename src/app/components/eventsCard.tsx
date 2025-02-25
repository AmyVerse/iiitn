'use client'

import { motion } from 'framer-motion'

const cardsOn = [
  { title: 'Web Dev', color: 'bg-iip/90' },
  { title: 'Demo Days', color: 'bg-iio/90' },
  { title: 'Dance', color: 'bg-iip/90' },
  { title: 'Song', color: 'bg-iio/90' },
  { title: 'Web Dev', color: 'bg-iip/90' },
  { title: 'Demo Days', color: 'bg-iio/90' },
  { title: 'Dance', color: 'bg-iip/90' },
  { title: 'Song', color: 'bg-iio/90' },
]

const cardsUp = [
  { title: 'Abhivyakti', color: 'bg-iip/90' },
  { title: 'MUN', color: 'bg-iio/90' },
  { title: 'Inter IIIT Sports', color: 'bg-iip/90' },
  { title: 'D-trexia Dance', color: 'bg-iio/90' },
  { title: 'Abhivyakti', color: 'bg-iip/90' },
  { title: 'MUN', color: 'bg-iio/90' },
  { title: 'Inter IIIT Sports', color: 'bg-iip/90' },
  { title: 'D-trexia Dance', color: 'bg-iio/90' },
]

function CardSlider({ cards }: { cards: { title: string; color: string }[] }) {
  return (
    <div className='relative flex w-full flex-col items-center overflow-hidden'>
      {/* Card Container */}
      <div className='relative flex w-full justify-center overflow-hidden'>
        <motion.div
          className='flex gap-6'
          animate={{ x: ['0%', '-15%'] }} // Continuous looping animation
          transition={{ ease: 'linear', duration: 8, repeat: Infinity }} // Infinite loop
          style={{ display: 'flex', width: 'max-content' }}
        >
          {[...cards, ...cards].map(
            (
              card,
              i, // Duplicate for seamless loop
            ) => (
              <div
                key={i}
                className={`flex h-80 w-64 items-center justify-center rounded-xl shadow-lg ${card.color}`}
              >
                <h2 className='text-2xl font-bold text-white'>{card.title}</h2>
              </div>
            ),
          )}
        </motion.div>
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
