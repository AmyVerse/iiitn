import { useState } from 'react'

interface RButtonProps {
  content: string
  className?: string
  onClick?: () => void
  rippleColor?: string // New prop for custom color
}

export default function RButton({
  content,
  className,
  onClick,
  rippleColor = '#cf5a24',
}: RButtonProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
      className={`ripple ${className}`}
      style={
        {
          '--x': `${coords.x}px`,
          '--y': `${coords.y}px`,
          '--ripple-color': rippleColor, // Dynamically setting the ripple color
        } as React.CSSProperties
      }
    >
      {content}
    </button>
  )
}
