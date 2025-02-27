'use client'
import React, { useEffect, useState } from 'react'

const FixedContainer: React.FC = () => {
  const totalCards = 6 // Total number of cards
  const visibleCards = 3 // Number of cards visible at a time
  const containerWidth = 900 // Container width (adjust as needed)
  const cardWidth = containerWidth / visibleCards // Each card width

  const [currentIndex, setCurrentIndex] = useState(0) // Track the current card index

  // Handle the card movement logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Loop through the cards, when the last card is reached, go back to the first card
        return (prevIndex + 1) % totalCards
      })
    }, 2000) // Change cards every 2 seconds
    return () => clearInterval(interval) // Cleanup on unmount
  }, [])

  // Function to calculate and apply the correct scale based on card position
  const getCardClasses = (index: number) => {
    // Calculate the card's left position relative to the center
    const cardLeftPosition = (index - 1 - currentIndex) * cardWidth

    let scale = 'scale-90' // Default scale for smaller cards
    let translateX = 'translate-x-0' // Default position for the card

    // Calculate distance from the center of the container
    const centerPosition = containerWidth / 2
    const cardCenterPosition = cardLeftPosition + cardWidth / 2
    const distanceFromCenter = Math.abs(cardCenterPosition - centerPosition)

    // If the card is near the center, apply scaling
    if (distanceFromCenter < cardWidth / 2) {
      scale = 'scale-110' // Scale up the card closest to the center
    }

    // Apply smooth translation based on the current index
    translateX = `${cardLeftPosition}px`

    // Apply smooth transition for both position and scale
    return `${translateX} ${scale} transition-all duration-1000 ease-in-out`
  }

  return (
    <div className='fixed right-5 top-5 z-50 rounded-lg bg-black p-4 text-white shadow-lg'>
      <h2 className='mb-4 text-xl'>Infinite Sliding Cards with Center Scaling</h2>
      <div className='relative overflow-hidden' style={{ width: containerWidth, height: 200 }}>
        <div
          className='absolute left-0 top-0 flex transition-transform duration-1000 ease-in-out'
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`, // Keep the cards moving horizontally
            transitionDuration: '2000ms', // Adjust for smooth infinite loop
          }}
        >
          {Array.from({ length: totalCards }).map((_, index) => (
            <div
              key={index}
              className={`w-[${cardWidth}px] flex h-full flex-shrink-0 items-center justify-center rounded-lg bg-blue-500 p-6 shadow-xl ${getCardClasses(index)}`}
            >
              <div className='font-bold text-white'>Card {index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FixedContainer
