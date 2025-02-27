'use client'
import { useState } from 'react'

interface RButton {
  onClick?: Function
  content: string
  className?: string
}

export default function RButton({ content, className, onClick }: RButton) {
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div className=''>
      <button
        onMouseEnter={handleMouseEnter}
        onClick={() => onClick && onClick()}
        className={`ripple relative z-10 w-48 overflow-hidden rounded-2xl border-2 border-iio bg-iio px-6 py-3 text-white hover:border-2 hover:border-iio hover:bg-transparent ${className}`}
      >
        {/* Ripple Effect */}
        {/* <span
          className='absolute h-0 w-0 rounded-full bg-red-600 opacity-50 transition-all duration-500 group-hover:h-[400px] group-hover:w-[400px]'
          style={{ top: coords.y, left: coords.x, transform: 'translate(-50%, -50%)' }}
        /> */}
        <span className='relative text-xl font-bold'>{content}</span>
      </button>
    </div>
  )
}
