'use client'
import React, { useEffect, useState } from 'react';

const FixedContainer: React.FC = () => {
  const totalCards = 6; // Total number of cards
  const visibleCards = 3; // Number of cards visible at a time
  const containerWidth = 900; // Container width (adjust as needed)
  const cardWidth = containerWidth / visibleCards; // Each card width

  const [currentIndex, setCurrentIndex] = useState(0); // Track the current card index

  // Handle the card movement logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Loop through the cards, when the last card is reached, go back to the first card
        return (prevIndex + 1) % totalCards;
      });
    }, 2000); // Change cards every 2 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Function to calculate and apply the correct scale based on card position
  const getCardClasses = (index: number) => {
    // Calculate the card's left position relative to the center
    const cardLeftPosition = (index-1 - currentIndex) * cardWidth;

    let scale = "scale-90"; // Default scale for smaller cards
    let translateX = "translate-x-0"; // Default position for the card

    // Calculate distance from the center of the container
    const centerPosition = containerWidth / 2;
    const cardCenterPosition = cardLeftPosition + cardWidth / 2;
    const distanceFromCenter = Math.abs(cardCenterPosition - centerPosition);

    // If the card is near the center, apply scaling
    if (distanceFromCenter < cardWidth / 2) {
      scale = "scale-110"; // Scale up the card closest to the center
    }

    // Apply smooth translation based on the current index
    translateX = `${cardLeftPosition}px`;

    // Apply smooth transition for both position and scale
    return `${translateX} ${scale} transition-all duration-1000 ease-in-out`;
  };

  return (
    <div className="fixed top-5 right-5 bg-black text-white p-4 rounded-lg z-50 shadow-lg">
      <h2 className="text-xl mb-4">Infinite Sliding Cards with Center Scaling</h2>
      <div className="relative overflow-hidden" style={{ width: containerWidth, height: 200 }}>
        <div
          className="absolute top-0 left-0 flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * (100 / visibleCards))}%)`, // Keep the cards moving horizontally
            transitionDuration: "2000ms", // Adjust for smooth infinite loop
          }}
        >
          {Array.from({ length: totalCards }).map((_, index) => (
            <div
              key={index}
              className={`w-[${cardWidth}px] flex-shrink-0 h-full flex justify-center items-center bg-blue-500 p-6 rounded-lg shadow-xl ${getCardClasses(index)}`}
            >
              <div className="text-white font-bold">Card {index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FixedContainer;
