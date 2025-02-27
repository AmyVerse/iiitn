'use client'

interface IButtonProps {
  onClick: Function
  content: string
  className?: string
}

const IButton1: React.FC<IButtonProps> = ({ content, className, onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className={`w-30 relative flex items-center justify-center 
        overflow-hidden rounded-[8px] bg-[#d96027] px-6 py-3 text-center font-[poppins] text-[15px] font-semibold
        text-white transition-all duration-200 ease-in-out hover:bg-[#ff9c6e] sm:w-52 sm:rounded-2xl sm:text-[20px] ${className}`}
    >
      {/* Button Text */}
      <span className='relative'>{content}</span>
    </button>
  )
}

export { IButton1 }
