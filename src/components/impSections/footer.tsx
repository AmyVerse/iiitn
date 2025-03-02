'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const socialLinks = [
  {
    id: 'twitter',
    href: 'https://x.com/IIITN_OFFICIAL',
    src: '/sm/x.svg',
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/iiitnofficial/',
    src: '/sm/ld.svg',
  },
  {
    id: 'instagram',
    href: 'https://instagram.com/iiit_nagpur',
    src: '/sm/ig.svg',
  },
]

export function Footer() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div>
      <footer className='bg-[#0d0827] font-[Poppins] text-white'>
        {/* upper */}
        <div className='relative mx-auto grid h-max grid-cols-1 px-4 pb-4 pt-10 text-center sm:grid-cols-2 sm:pb-12 sm:pl-72 sm:text-left'>
          <img
            src='/loader.gif'
            alt='IIITN Logo'
            className='absolute -top-[53px] left-5 h-16 w-16 sm:-top-20 sm:left-12 sm:h-28 sm:w-28'
          />

          {/* logo div */}
          <div className='mb-7 flex flex-col items-center justify-center sm:items-start sm:px-0'>
            <ul className=''>
              <h3 className='text-xl font-semibold'>Contact Us</h3>
              <li className='mt-8 font-normal sm:mt-5'>
                <div className='mb-5 border-b border-[#403185] pb-4 text-sm font-medium sm:pb-3 sm:text-base'>
                  Waranga, Butibori, Nagpur, Maharashtra - 441108
                </div>
              </li>
              <ul className='mb-5 flex flex-col gap-2 text-white/80 max-sm:items-center max-sm:justify-center'>
                <li className="relative inline-block w-fit items-center no-underline transition-all after:absolute after:bottom-0 after:left-[35px] after:h-[2px] after:w-[calc(100%-35px)] after:origin-bottom-right after:scale-x-0 after:rounded-lg after:bg-gray-100 after:transition-transform after:duration-300 after:ease-in-out after:content-[''] hover:pl-2 hover:text-gray-100 hover:after:origin-bottom-left hover:after:scale-x-100">
                  <a href='tel:+919405215010'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='1rem'
                      height='1rem'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='lucide lucide-phone mt-1 inline-block align-top sm:p-[0.02rem]'
                    >
                      <path d='M22 16.92V21a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 1 4.18 2 2 0 0 1 3 2h4.09a2 2 0 0 1 2 1.72 13 13 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 13 13 0 0 0 2.81.57 2 2 0 0 1 1.72 2z'></path>
                    </svg>
                    <div className='inline-block pl-3 text-sm transition-all sm:text-sm'>Phone</div>
                  </a>
                </li>
                <li className="relative inline-block w-fit no-underline transition-all after:absolute after:bottom-0 after:left-[37px] after:h-[2px] after:w-[calc(100%-37px)] after:origin-bottom-right after:scale-x-0 after:rounded-lg after:bg-gray-100 after:transition-transform after:duration-300 after:ease-in-out after:content-[''] hover:pl-2 hover:text-gray-100 hover:after:origin-bottom-left hover:after:scale-x-100">
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='1rem'
                    height='1rem'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-mail mt-1 inline-block align-top sm:p-[0.02rem]'
                  >
                    <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
                    <polyline points='22,6 12,13 2,6'></polyline>
                  </svg>
                  <div className='inline-block pl-3 text-sm transition-all hover:pl-4 sm:text-sm'>
                    <a href='mailto:registrar@iiitn.ac.in'>E-mail</a>
                  </div>
                </li>
                <li className="relative inline-block w-fit no-underline transition-all after:absolute after:bottom-0 after:left-[39px] after:h-[2px] after:w-[calc(100%-39px)] after:origin-bottom-right after:scale-x-0 after:rounded-lg after:bg-gray-100 after:transition-transform after:duration-300 after:ease-in-out after:content-[''] hover:pl-2 hover:text-gray-100 hover:after:origin-bottom-left hover:after:scale-x-100">
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='1rem'
                    height='1rem'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-send mt-1 inline-block align-top sm:p-[0.02rem]'
                  >
                    <line x1='22' y1='2' x2='11' y2='13'></line>
                    <polygon points='22 2 15 22 11 13 2 9 22 2'></polygon>
                  </svg>
                  <div className='inline-block pl-3 text-sm transition-all hover:pl-4 sm:text-sm'>
                    <a href='../reachUs'>How to reach</a>
                  </div>
                </li>
                <div className='mb-2 mt-4 flex items-center justify-center gap-6 border-t-[1px] border-iip pt-4 sm:justify-start sm:pt-6'>
                  {socialLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='relative h-8 w-7 transition-all duration-300'
                      onMouseEnter={() => setHovered(link.id)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {/* Current Icon - Moves Down */}
                      <motion.img
                        src={link.src}
                        alt={link.id}
                        width={20}
                        height={20}
                        className='absolute h-8 w-7 grayscale'
                        initial={{ y: 0, opacity: 1 }}
                        animate={hovered === link.id ? { y: 20, opacity: 0 } : { y: 0, opacity: 1 }}
                        transition={{
                          y: { duration: 0.3 },
                          opacity: { duration: 0.3 },
                        }}
                      />

                      {/* New Icon - Drops from Top */}
                      <motion.img
                        src={link.src} // This should be the alternative icon
                        alt={`${link.id}-hover`}
                        width={20}
                        height={20}
                        className='absolute h-8 w-7 grayscale-0'
                        initial={{ y: -20, opacity: 0 }}
                        animate={
                          hovered === link.id ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }
                        }
                        transition={{ y: { duration: 0.3 }, opacity: { duration: 0.3 } }}
                      />
                    </a>
                  ))}
                </div>
              </ul>
            </ul>
          </div>

          {/* Quick links div */}
          <div className='flex flex-col items-center sm:items-start sm:pl-36'>
            <h3 className='mb-4 text-lg font-bold sm:text-xl'>Quick Links</h3>
            <ul className='lg:space-x-50 mb-4 flex flex-col gap-2'>
              <li className='text-sm text-gray-500 transition-all hover:px-1 hover:text-[#be6233] md:text-base lg:text-base'>
                <a href='../prismatest' className='underline_custom'>
                  Online Fees Payment
                </a>
              </li>
              <li className='text-sm text-gray-500 transition-all hover:px-1 hover:text-[#be6233] md:text-base lg:text-base'>
                <a href='../prismatest/test2' className='underline_custom'>
                  Academic Calendar
                </a>
              </li>
              <li className='text-sm text-gray-500 transition-all hover:px-1 hover:text-[#be6233] md:text-base lg:text-base'>
                <a href='#' className='underline_custom'>
                  Internships
                </a>
              </li>
              <li className='text-sm text-gray-500 transition-all hover:px-1 hover:text-[#be6233] md:text-base lg:text-base'>
                <a href='#' className='underline_custom'>
                  Annual Report
                </a>
              </li>
              <li className='text-sm text-gray-500 transition-all hover:px-1 hover:text-iio/50 md:text-base lg:text-base'>
                <a href='#' className='underline_custom'>
                  Accommodation
                </a>
              </li>
            </ul>
            <ul className='flex flex-row gap-2'>
              <li>
                <a
                  href='#'
                  className='text-sm text-gray-500 hover:text-[#be6233] md:text-base lg:text-base'
                >
                  ToS
                </a>
              </li>
              <li className='text-gray-400'>|</li>
              <li>
                <a
                  href='#'
                  className='text-sm text-gray-500 hover:text-[#be6233] md:text-base lg:text-base'
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* lower */}
        <div className='border-t border-[#403185] bg-black/80 pb-6 text-center text-sm font-normal sm:text-sm'>
          <div className='flex flex-row items-center justify-center gap-4 pb-2'>
            <Image src='/clean.png' alt='' width={80} height={80} />
            <Image src='/ashoka.png' alt='' width={50} height={50} />
          </div>
          <p>
            © {new Date().getFullYear()} IIIT Nagpur
            <span className='hidden px-2 sm:inline-block'>|</span>
            <br className='sm:hidden' />
            Crafted by{' '}
            <a href='#' className='underline_custom text-iio'>
              Students at IIITN
            </a>
          </p>
        </div>
        <div className='flex w-full flex-row justify-center text-wrap bg-[#281246] px-3 py-1 text-xs text-white sm:text-sm'>
          <span>Any incorrect/missing info?</span>
          <Link
            target='_blank'
            href='https://forms.gle/FSBg4Bb2SJEpHTux9'
            className='ml-1 font-[600] text-[#D4AFFF] underline'
          >
            Submit the request.
          </Link>
        </div>
      </footer>
    </div>
  )
}
