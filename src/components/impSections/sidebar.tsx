'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import RButton from '../invertButton'

interface MenuItem {
  label: string
  subMenus?: string[]
}

interface LowerItem {
  label: string
  url: string
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
  { label: 'Home', url: '/' },
  { label: 'Events', url: '/events' },
  { label: 'Information', url: '/information' },
  { label: 'Career', url: '/career' },
  { label: 'Parents', url: '/parents' },
  { label: 'Visit', url: '/visit' },
  { label: 'NIRF Ranking', url: '/nirf-ranking' },
  { label: 'About Us', url: '/about-us' },
]

interface SidebarProps {
  isOpen: boolean
  setIsOpenAction: (isOpen: boolean) => void
}

export default function Sidebar({ isOpen, setIsOpenAction }: SidebarProps) {
  // Auth state
  const [user, setUser] = useState<any>(null)
  const supabase = createClientComponentClient()

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user) // ✅ Store user in state
    }
    checkUser()
  }, [])

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
        className='fixed right-0 top-0 z-40 h-screen w-[320px] overflow-y-scroll bg-[#472082] text-white shadow-lg sm:w-[500px] sm:p-8 sm:pr-11'
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
        <nav className='mb-32 mt-20 px-6'>
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
                    <span className='font-[poppins] font-normal sm:text-lg'>{item.label}</span>
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
                            className='w-full py-2 text-left font-[poppins] text-sm font-light text-white/80 hover:text-iio sm:text-base'
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
          <ul className='mt-8 space-y-1'>
            <AnimatePresence>
              {lowerItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={item.url}>
                    <motion.button
                      whileHover={{ x: 6 }}
                      transition={{ duration: 0.03, ease: 'easeInOut' }}
                      className='group flex w-full items-center justify-between px-3 text-left capitalize text-white/70 transition-all duration-100 hover:text-white'
                    >
                      <span className='font-[poppins] text-sm font-light sm:text-base'>
                        {item.label}
                      </span>
                    </motion.button>
                  </Link>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
          <div className='mb-10 mt-12 flex flex-col items-center justify-start space-y-2 sm:space-y-3'>
            <RButton
              onClick={() => (window.location.href = '../../admin')}
              rippleColor='#291249'
              className='w-52 rounded-xl border border-white px-4 py-2 font-[poppins] text-lg font-normal sm:w-72 sm:py-2.5 sm:text-xl'
              content={user ? 'Go to Dashboard' : 'Login'}
            />
            <RButton
              onClick={() => setIsOpenAction(false)}
              rippleColor='#291249'
              className='w-52 rounded-xl border border-white px-4 py-2 font-[poppins] text-lg font-normal sm:w-72 sm:py-2.5 sm:text-xl'
              content='Close Menu'
            />
          </div>
        </nav>
      </motion.div>
    </div>
  )
}
