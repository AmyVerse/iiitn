'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { IButton1 } from '../invertButton'

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

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({})

  const toggleMenu = (menu: string) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }))
  }

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
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        className='fixed right-0 top-0 z-50 h-screen w-[320px] overflow-y-scroll bg-[#472082] text-white shadow-lg sm:w-[480px] sm:p-5'
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? '2%' : '100%' }}
        exit={{ x: '100%' }}
        transition={{
          type: 'spring',
          stiffness: 260, // Increased stiffness for a snappier effect
          damping: 24, // Adjusted damping for a bouncier feel
        }}
      >
        {/* Close Button */}
        <button onClick={() => setIsOpen(false)} className='absolute right-10 top-6 p-2 text-white'>
          <motion.div
            className='relative h-6 w-6'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className='absolute left-0 top-[11px] h-[2px] w-full rotate-45 bg-white' />
            <span className='absolute left-0 top-[11px] h-[2px] w-full -rotate-45 bg-white' />
          </motion.div>
        </button>

        {/* Navigation */}
        <nav className='mt-24 px-8'>
          <ul className=''>
            <AnimatePresence>
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.05 }}
                  className='border-b-2 border-[#8440e4]/30'
                >
                  <motion.button
                    onClick={() => toggleMenu(item.label)}
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.03, ease: 'easeInOut' }}
                    className='group flex w-full items-center justify-between px-3 py-3 text-left capitalize transition-all duration-100 hover:bg-white/10'
                  >
                    <span className='font-medium sm:text-lg'>{item.label}</span>
                    <motion.span className='border-[1px] px-1.5'>
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
                        className='mb-5 mt-1 overflow-hidden pl-6'
                      >
                        {item.subMenus?.map((subMenu) => (
                          <motion.li
                            key={subMenu}
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -10, opacity: 0 }}
                            transition={{ delay: 0.05 }}
                            className='py-2 text-sm text-white/80 hover:text-white sm:text-sm'
                          >
                            {subMenu}
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
          <ul className='mt-11'>
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
                    className='group flex w-full items-center justify-between px-3 py-1.5 text-left capitalize text-white/70 transition-all duration-100 hover:text-white'
                  >
                    <span className='text-sm font-thin sm:text-base'>{item.label}</span>
                  </motion.button>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
          <IButton1
            onClick={() => setIsOpen(false)}
            className='mt-9 w-full sm:w-full border-white/10 font-normal text-white'
            content='Login'
            className1='bg-transparent'
          />
          <IButton1
            onClick={() => setIsOpen(false)}
            className='mt-2 w-full sm:w-full border-white/10 font-normal text-white'
            content='CLOSE MENU'
            className1='bg-transparent'
          />
        </nav>
      </motion.div>

      {/* Open Sidebar Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className='z-50 flex flex-col gap-[6px] p-2'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className='flex flex-col gap-[6px]'
          animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
        >
          <span className='h-[2px] w-4 rounded-sm bg-white sm:h-[3px] sm:w-6' />
          <span className='h-[2px] w-6 rounded-sm bg-white sm:h-[3px] sm:w-8' />
          <span className='h-[2px] w-4 self-end rounded-sm bg-white sm:h-[3px] sm:w-6' />
        </motion.div>
      </motion.button>
    </div>
  )
}
