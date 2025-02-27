import Image from 'next/image'
import { FC } from 'react'

interface LogoProps {
  className?: string
}

const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <div
      className={`flex h-[100%] cursor-pointer flex-row items-center justify-center gap-1 space-x-4 bg-white ${className}`}
    >
      <Image
        src='/X-black.png'
        alt='X'
        className='grayscale transition-all hover:filter-none'
        width={20}
        height={20}
      />
      <Image
        src='/facebook.svg'
        alt='facebook'
        className='grayscale transition-all hover:filter-none'
        width={25}
        height={25}
      />
      <Image
        src='/insta.png'
        alt='insta'
        className='grayscale transition-all hover:filter-none'
        width={30}
        height={30}
      />
      <Image
        src='/linkedin.svg'
        alt='linkedin'
        className='grayscale transition-all hover:filter-none'
        width={35}
        height={35}
      />
    </div>
  )
}

export default Logo
