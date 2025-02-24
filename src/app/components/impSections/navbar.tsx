'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import icon from '../../../../public/logo.svg'
import Sidebar from './sidebar'

const suggestions = ['Faculty', 'Holidays', 'Events', 'Policy', 'Placement', 'NIRF Detail']

export default function Navbar() {
  //automated suggestion logic
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isDeleting) {
      if (displayText.length === 0) {
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % suggestions.length)
      } else {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50) // Backspace speed
      }
    } else {
      const fullText = suggestions[currentIndex]
      if (displayText === fullText) {
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, 1000) // Wait before deleting
      } else {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1))
        }, 100) // Typing speed
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting])

  //scroll logic
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    if (!isHomePage) return // Don't track scroll on other pages

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 800)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  return (
    <div className='relative z-50 w-full'>
      <div className='h-0.5 w-full bg-iio'></div>
      <div className='w-full'>
        <div
          className={`fixed top-0 flex w-full items-center justify-between px-5 py-3 transition-all duration-500 sm:px-8 ${
            isHomePage
              ? isScrolled
                ? 'bg-black/40 text-white shadow-md'
                : 'bg-gradient-to-b from-black via-black/50 via-70% to-transparent'
              : 'bg-black/40 text-white shadow-md'
          }`}
        >
          <div className='flex items-center'>
            <Link target='_blank' href='https://www.iiitn.ac.in'>
              <Image
                className='hidden sm:block'
                src={icon}
                alt='IIITN Logo'
                width={68}
                height={30}
              />{' '}
              {/* laptop */}
              <Image
                className='block sm:hidden'
                src={icon}
                alt='IIITN Logo'
                width={45}
                height={50}
              />{' '}
              {/* phone */}
            </Link>
          </div>
          <div className='flex items-center gap-6 sm:gap-8'>
            <button
              onClick={() => setIsSearchOpen(true)}
              className='transition-all duration-100 hover:scale-110'
            >
              <Image
                className='hidden sm:block'
                src='/search.svg'
                alt='Search Icon'
                width={45}
                height={20}
              />{' '}
              {/* laptop */}
              <Image
                className='block sm:hidden'
                src='/search.svg'
                alt='Search Icon'
                width={35}
                height={20}
              />{' '}
              {/* phone */}
            </button>
            <div className='z-60 backdrop-blur-none'>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='fixed inset-0 z-50 flex flex-col justify-start backdrop-blur-lg'
          >
            <motion.div className='flex flex-row items-start justify-between px-12 py-8'>
              {/* Left Side */}
              <motion.div className=''></motion.div>

              {/* Cross Button (Right Side) */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
                className='text-3xl text-white transition-transform hover:scale-110'
                onClick={() => setIsSearchOpen(false)}
              >
                ✕
              </motion.button>
            </motion.div>

            <motion.div //card
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className='mx-7 flex-grow flex-col items-center rounded-lg bg-white px-6 py-3 sm:mx-72 sm:p-16'
            >
              <motion.input
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                exit={{ width: '0%' }}
                transition={{ duration: 0.3 }}
                type='text'
                placeholder={`${displayText}${isDeleting ? '' : ''}`}
                className='mb-16 mt-4 border-b-2 border-black px-2 py-1 font-[Poppins] text-2xl font-medium text-black placeholder-black outline-none focus:border-iio sm:py-2 sm:text-4xl'
                autoFocus
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
                className='flex w-full flex-col content-start gap-2'
              >
                <motion.div className='mb-3 w-fit px-2 font-[Poppins] text-xs text-black sm:text-sm'>
                  Helpful Links
                </motion.div>
                <motion.button className='relative mx-2 w-fit font-[Inter] text-sm font-[600] text-iio before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-iio before:opacity-0 before:transition-all before:duration-300 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-full after:bg-iio after:opacity-0 after:transition-all after:duration-300 hover:before:w-full hover:before:opacity-0 hover:after:w-0 hover:after:opacity-100 sm:text-base'>
                  Banner via IIITN
                </motion.button>
                <motion.button className='relative mx-2 w-fit font-[Inter] text-sm font-[600] text-iio before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-iio before:opacity-0 before:transition-all before:duration-300 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-full after:bg-iio after:opacity-0 after:transition-all after:duration-300 hover:before:w-full hover:before:opacity-0 hover:after:w-0 hover:after:opacity-100 sm:text-base'>
                  Office of the Registrar
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div className='mt-[410px] px-4 py-2 sm:mt-96'></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
