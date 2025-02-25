'use client'
import { motion } from 'framer-motion'

interface IButtonProps {
  onClick: Function
  content: string
  className?: string
  className1?: string
}

const IButton1: React.FC<IButtonProps> = ({ content, className, className1, onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className={`w-30 ${className} group relative flex items-center justify-center overflow-hidden rounded-xl border-[3px] border-iio bg-[#0000001d] px-6 py-2 text-center font-[poppins] text-[15px] font-black text-iio transition-all duration-200 hover:bg-transparent hover:text-white sm:w-52 sm:rounded-2xl sm:text-[20px]`}
    >
      {/* Fluid fill effect */}
      <span
        className={` ${className1} absolute bottom-0 left-0 h-0 w-full bg-iio transition-all duration-200 ease-out group-hover:h-full`}
      />

      {/* Button Text */}
      <span className='relative'>{content}</span>
    </button>
  )
}

export { IButton1 }

const IButton2: React.FC<IButtonProps> = ({ content, onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className='group relative flex w-[155px] items-center justify-center overflow-hidden rounded-xl border-[3px] border-iio bg-transparent px-4 py-2 text-center font-[poppins] text-[16px] font-black text-iio transition-all duration-200 hover:bg-transparent hover:text-white sm:w-48 sm:rounded-2xl sm:px-2 sm:py-2 sm:text-[18px]'
    >
      {/* Fluid fill effect */}
      <span className='absolute bottom-0 left-0 h-0 w-full bg-iio transition-all duration-200 ease-out group-hover:h-full' />

      {/* Button Text with Animated Arrow */}
      <span className='relative flex content-baseline items-center gap-2'>
        {content}
        <motion.span className='inline-block animate-horizontal-bounce text-lg font-bold sm:text-xl'>
          →
        </motion.span>
      </span>
    </button>
  )
}

export { IButton2 }
