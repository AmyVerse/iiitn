'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLayoutEffect, useState } from 'react'
import icon from '../../../../public/logo.svg'
import Sidebar from './sidebar'

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const path = usePathname()

  //scroll control
  useLayoutEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 600)
    }

    // ✅ Check immediately when component mounts or path changes
    setIsScrolled(window.scrollY > 600)

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [path]) // Runs whenever `path` changes

  return (
    <div className='sticky top-0 z-50 w-full'>
      <div className='flex w-full flex-row justify-center text-wrap bg-[#281246] px-3 py-1 text-xs sm:text-sm'>
        <span>Any incorrect/missing info?</span>
        <Link
          target='_blank'
          href='https://forms.gle/FSBg4Bb2SJEpHTux9'
          className='ml-1 text-orange-400 underline'
        >
          Submit the request.
        </Link>
      </div>
      <div className='h-0.5 w-full bg-iio'></div>
      <div
        className={`flex w-full items-center justify-between px-5 py-1 shadow-lg transition-colors duration-300 ease-in-out sm:px-8 ${path !== '/' || isScrolled ? 'bg-white' : 'bg-gradient-to-b from-black via-black/50 via-70% to-transparent'}`}
      >
        <div className='flex w-32 items-center'>
          <Link target='_self' href='http://iiitn-beta.vercel.app'>
            <div>
              <Image
                className='hidden sm:block'
                src={icon}
                alt='IIITN Logo'
                width={68}
                height={30}
              />
            </div>
            <Image className='block sm:hidden' src={icon} alt='IIITN Logo' width={45} height={50} />
          </Link>
        </div>
        <div className='flex items-center gap-6 text-xl text-black sm:gap-8'>
          {(path !== '/' || isScrolled) && (
            <>
              {['About', 'Academics', 'Admission', 'Updates', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.03 }}
                  initial={{ opacity: 1, y: 0 }} // Remove animation delay
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 1, y: 0 }}
                  className='underline_custom'
                >
                  <Link href={`/${item.toLowerCase()}`}>{item}</Link>
                </motion.button>
              ))}
            </>
          )}
        </div>
        <div className='flex w-32 items-center gap-12 sm:gap-8'>
          <button
            onClick={() => setIsSearchOpen(true)}
            className='transition-all duration-100 hover:scale-110'
          >
            <Image
              className='hidden sm:block'
              src={path !== '/' || isScrolled ? '/image.png' : '/search.svg'}
              alt='Search Icon'
              width={38}
              height={20}
            />
            <Image
              className='block sm:hidden'
              src='/search.svg'
              alt='Search Icon'
              width={29}
              height={20}
            />
          </button>
          <motion.button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className='z-50 flex flex-col gap-[6px] p-2'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className='flex flex-col gap-[6px]'
              animate={isSidebarOpen ? { rotate: 90 } : { rotate: 0 }}
            >
              <span
                className={`h-[2px] w-6 rounded-sm transition-transform duration-300 ${path !== '/' || isScrolled ? 'bg-black' : 'bg-white'} sm:h-[3px] sm:w-8 ${isSidebarOpen ? 'translate-y-[9px] rotate-45 bg-white' : ''}`}
              />
              <span
                className={`h-[2px] w-6 rounded-sm transition-opacity duration-300 ${path !== '/' || isScrolled ? 'bg-black' : 'bg-white'} sm:h-[3px] sm:w-8 ${isSidebarOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`h-[2px] w-6 self-end rounded-sm transition-transform duration-300 ${path !== '/' || isScrolled ? 'bg-black' : 'bg-white'} sm:h-[3px] sm:w-8 ${isSidebarOpen ? '-translate-y-[9px] -rotate-45 bg-white' : ''}`}
              />
            </motion.div>
          </motion.button>
        </div>
      </div>

      <Sidebar isOpen={isSidebarOpen} setIsOpenAction={setIsSidebarOpen} />

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
              <motion.div className=''></motion.div>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
                className='px-1 text-3xl text-iio transition-transform hover:scale-110'
                onClick={() => setIsSearchOpen(false)}
              >
                ✕
              </motion.button>
            </motion.div>

            <motion.div
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
                placeholder='Search...'
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
