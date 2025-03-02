'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLayoutEffect, useState } from 'react'
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
      <div className='h-1 w-full bg-iio'></div>
      <div
        className={`flex w-full items-center justify-between px-5 py-1 shadow-xl transition-colors duration-300 ease-in-out sm:px-8 ${
          path !== '/' || isScrolled ? 'bg-white' : 'bg-black/40'
        }`}
      >
        <div className='flex w-40 justify-start sm:pl-8'>
          <Link target='_self' href='http://iiitn-beta.vercel.app'>
            <div>
              <Image
                className={`absolute -top-[6px] left-[38px] hidden transition-opacity duration-150 sm:block ${path !== '/' || isScrolled ? 'opacity-0' : 'opacity-100'}`}
                src='/logobanner.png'
                alt='IIITN Logo'
                width={115}
                height={30}
              ></Image>
              <Image
                className={`absolute -top-[4px] left-[15px] block transition-opacity duration-150 sm:hidden ${path !== '/' || isScrolled ? 'opacity-0' : 'opacity-100'}`}
                src='/logobanner.png'
                alt='IIITN Logo'
                width={75}
                height={30}
              ></Image>
            </div>

            <div>
              <Image
                className={`hidden transition-opacity duration-150 sm:block ${path !== '/' || isScrolled ? 'opacity-100' : 'opacity-0'}`}
                src='/logo.svg'
                alt='IIITN Logo'
                width={68}
                height={30}
              />
            </div>
            <Image
              className={`block transition-opacity duration-150 sm:hidden ${path !== '/' || isScrolled ? 'opacity-100' : 'opacity-0'}`}
              src='/logo.svg'
              alt='IIITN Logo'
              width={45}
              height={50}
            />
          </Link>
        </div>

        <div className='hidden items-center gap-6 font-[poppins] text-xl text-black sm:flex sm:gap-8'>
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
        <div className='flex justify-start gap-8 sm:w-40 sm:gap-11'>
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
              src={path !== '/' || isScrolled ? '/image.png' : '/search.svg'}
              alt='Search Icon'
              width={30}
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
              className={`flex flex-col gap-[6px] ${isSidebarOpen ? '-ml-6 rounded-xl bg-iio px-1 py-2' : ''}`}
              animate={isSidebarOpen ? { rotate: 90 } : { rotate: 0 }}
            >
              <span
                className={`h-[2px] w-6 rounded-sm transition-transform duration-300 ${path !== '/' || isScrolled ? 'bg-black' : 'bg-white shadow-[0_0_5px_rgba(255,255,255,0.7)]'} sm:h-[3px] sm:w-8 ${isSidebarOpen ? 'translate-y-[8px] rotate-45 bg-white sm:translate-y-[9px]' : ''}`}
              />
              <span
                className={`h-[2px] w-6 rounded-sm transition-opacity duration-300 ${path !== '/' || isScrolled ? 'bg-black' : 'bg-white shadow-[0_0_5px_rgba(255,255,255,0.7)]'} sm:h-[3px] sm:w-8 ${isSidebarOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`h-[2px] w-6 self-end rounded-sm transition-transform duration-300 ${path !== '/' || isScrolled ? 'bg-black' : 'bg-white shadow-[0_0_5px_rgba(255,255,255,0.7)]'} sm:h-[3px] sm:w-8 ${isSidebarOpen ? '-translate-y-[8px] -rotate-45 bg-white sm:-translate-y-[9px]' : ''}`}
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
                className='mb-16 mt-4 border-b-2 border-black px-2 py-1 font-[Poppins] text-2xl font-light text-black placeholder-black outline-none focus:border-iio sm:py-2 sm:text-4xl'
                autoFocus
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
                className='flex w-full flex-col content-start'
              >
                <motion.div className='mb-4 w-fit px-2 font-[Poppins] text-xs text-black sm:text-sm'>
                  Helpful Links
                </motion.div>
                <motion.button className='underline_custom mx-2 w-fit font-[Inter] text-sm font-[600] text-iio sm:text-base'>
                  Banner via IIITN
                </motion.button>
                <motion.button className='underline_custom mx-2 w-fit font-[Inter] text-sm font-[600] text-iio sm:text-base'>
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
