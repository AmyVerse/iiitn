'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import RButton from '../invertButton'

interface MenuItem {
  label: string
  subMenus?: string[]
}

interface LowerItem {
  label: string
}

const menuItems: MenuItem[] = [
  { label: 'ACADEMICS', subMenus: ['Calendar', 'Courses', 'Curriculum', 'Library', 'Research'] },
  { label: 'ADMISSION', subMenus: ['Fees', 'Programs', 'Aids', 'Connect', 'How To Apply'] },
  {
    label: 'DEPARTMENT',
    subMenus: [
      'About',
      'Basic Science',
      'Computer Science & Engineering',
      'Electronic & Communication Engineering',
    ],
  },
  {
    label: 'CAMPUS LIFE',
    subMenus: ['Hostel', 'Mess', 'Clubs & Events', 'Culture', 'Blogs', 'Recreation'],
  },
  { label: 'ALUMNI', subMenus: ['Members', 'Login', 'Donate'] },
  {
    label: 'PLACEMENTS',
    subMenus: ['Why Recruit?', 'T&P Cell', 'Interships', 'Statistics', 'For Companies'],
  },
]

const lowerItems: LowerItem[] = [
  { label: 'Home' },
  { label: 'Events' },
  { label: 'Information' },
  { label: 'Career' },
  { label: 'Parents' },
  { label: 'Visit' },
  { label: 'NIRF Ranking' },
  { label: 'About Us' },
]

interface SidebarProps {
  isOpen: boolean
  setIsOpenAction: (isOpen: boolean) => void
}

export default function Sidebar({ isOpen, setIsOpenAction }: SidebarProps) {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({})

  const toggleMenu = (menu: string) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }))
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <div className='relative'>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='cursor-cross fixed inset-0 z-40 bg-black/50 backdrop-blur-sm'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpenAction(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        className='fixed right-0 top-0 z-40 h-screen w-[320px] overflow-y-scroll bg-[#472082] text-white shadow-lg sm:w-[480px] sm:p-5'
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? '2%' : '100%' }}
        exit={{ x: '100%' }}
        transition={{
          type: 'spring',
          stiffness: 260, // Increased stiffness for a snappier effect
          damping: 24, // Adjusted damping for a bouncier feel
        }}
      >
        {/* Navigation */}
        <nav className='mb-32 mt-24 px-8'>
          <ul className=''>
            <AnimatePresence>
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <motion.button
                    onClick={() => toggleMenu(item.label)}
                    whileHover={{ paddingLeft: '22px' }}
                    transition={{ duration: 0.04, ease: 'easeInOut' }}
                    className='group flex w-full items-center justify-between border-b-2 border-[#8440e4]/30 px-3 py-3 text-left capitalize transition-all duration-100 hover:text-iio'
                  >
                    <span className='font-medium sm:text-lg'>{item.label}</span>
                    <motion.span className='border-[1px] px-1.5 group-hover:border-iio'>
                      {openMenus[item.label] ? '-' : '+'}
                    </motion.span>
                  </motion.button>

                  {/* Submenu */}
                  <AnimatePresence>
                    {openMenus[item.label] && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className='overflow-hidden pl-6'
                      >
                        {item.subMenus?.map((subMenu) => (
                          <motion.button
                            key={subMenu}
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -10, opacity: 0 }}
                            transition={{ delay: 0.05 }}
                            className='w-full py-2 text-left text-sm text-white/80 hover:text-iio sm:text-base'
                          >
                            {subMenu}
                          </motion.button>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
          <ul className='mt-11 space-y-1'>
            <AnimatePresence>
              {lowerItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <motion.button
                    onClick={() => toggleMenu(item.label)}
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.03, ease: 'easeInOut' }}
                    className='group flex w-full items-center justify-between px-3 text-left capitalize text-white/70 transition-all duration-100 hover:text-white'
                  >
                    <span className='text-sm font-thin sm:text-base'>{item.label}</span>
                  </motion.button>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
          <div className='mt-12 h-44 space-y-3'>
            <RButton
              onClick={() => (window.location.href = '../../login')}
              className='w-full border-2 border-white bg-transparent font-normal text-white hover:bg-[#291249] sm:w-full'
              content='Login'
            />
            <RButton
              onClick={() => setIsOpenAction(false)}
              className='w-full border-white bg-transparent font-normal text-white hover:bg-iio sm:w-full'
              content='CLOSE MENU'
            />
          </div>
        </nav>
      </motion.div>
    </div>
  )
}
