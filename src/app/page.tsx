'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import AppleGrid from './components/imageCarousel'
import { IButton1, IButton2 } from './components/invertButton'
import Navbar from './components/navbar'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.75) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='relative'>
      {/* Fixed Background */}
      <div className="absolute left-0 top-0 z-[-2] h-screen w-full bg-[url('/campus.png')] bg-cover bg-center" />
      <section className='fixed z-10 w-full bg-transparent'>
        <Navbar />
      </section>
      {/* First Viewport (Header Section) */}
      <section
        className={`relative z-0 flex h-[calc(100vh-98px)] flex-col items-center justify-center transition-all duration-500`}
      >
        {/* Main Heading */}
        <h1 className='relative -mb-2 font-[Poppins] text-[15vw] font-[900] text-white sm:text-[15vw] md:-mb-6 md:text-[12vw] lg:text-[180px]'>
          IIITN
        </h1>

        {/* Subtext - Centered Below */}
        <div className='relative block font-[poppins] text-[3vw] font-semibold text-white sm:text-[4vw] md:text-[3vw] lg:text-[24px]'>
          Indian Institute of Information Technology, Nagpur
        </div>
        <div className='relative block font-[mukta] text-[3vw] text-white sm:text-[4vw] md:text-[3vw] lg:text-[24px]'>
          भारतीय सूचना प्रौद्योगिकी संस्थान, नागपुर
        </div>

        {/* Buttons with Negative Z (Still Clickable) */}
        <div className='relative mt-20 grid grid-cols-2 gap-4 px-4 sm:grid-cols-1 lg:flex lg:justify-center lg:gap-28 lg:space-x-0 lg:px-0'>
          <IButton1 content='ABOUT US' onClick={() => window.open('/about', '_self')} />
          <IButton1 content='ACADEMICS' onClick={() => window.open('/about', '_self')} />
          <IButton1 content='ADMISSION' onClick={() => window.open('/about', '_self')} />
          <IButton1 content='PLACEMENT' onClick={() => window.open('/about', '_self')} />
        </div>
      </section>

      {/* Scrolling Strip Section */}
      <div className="flex items-center justify-center bg-[url('/paper.png')] bg-no-repeat max-sm:bg-contain max-sm:bg-center sm:h-[90px]">
        <section className='mt-2 flex text-base text-black sm:mt-8 sm:items-baseline sm:text-xl sm:font-medium'>
          Unveil IIITN
          <svg
            className='ml-2 mt-[5px] h-4 w-4 animate-bounce sm:mt-[4px] sm:h-6 sm:w-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M19 9l-7 7-7-7'
            ></path>
          </svg>
        </section>
      </div>

      {/* New Content Section */}
      <section className="relative flex h-[2500px] flex-col bg-[url('/blockbg.png')] bg-center">
        <div className='flex w-full flex-col gap-2 px-8 py-24 sm:gap-5 sm:px-60'>
          <div className='flex pb-3 font-[makro] text-4xl font-bold text-black sm:text-5xl'>
            What are we?
          </div>
          <div className='flex pb-5 font-[poppins] text-lg font-normal text-black sm:text-xl'>
            We are here to empower students with the knowledge and skills they need to succeed in
            the world of technology. With a strong focus on academic excellence, innovation, and
            industry collaboration, we create an environment where learning meets real-world impact.
            Established in 2016 under the Public-Private Partnership (PPP) model, we take pride in
            being an Institute of National Importance, dedicated to shaping the future of technology
            and education.
          </div>
          <div>
            <IButton2 content='Learn More' onClick={() => window.open('/about', '_self')} />
          </div>
        </div>
        <div className='flex w-full flex-col gap-2 px-8 py-0 sm:gap-5 sm:px-60 sm:py-24'>
          <div className='flex pb-6 font-[makro] text-4xl font-bold text-black sm:text-5xl'>
            Spotlights
          </div>
          <div>
            <AppleGrid />
          </div>
        </div>
        <div className='flex w-full flex-col gap-2 px-8 py-24 sm:gap-5 sm:px-60'>
          <div className='flex pb-3 font-[makro] text-4xl font-bold text-black sm:text-5xl'>
            Events
          </div>
          <div className='flex justify-around pb-5'>
            <Link
              href={'/'}
              className='group relative flex h-8 w-full max-w-[190px] items-center justify-center overflow-hidden rounded-xl border-[2px] border-iio bg-transparent text-iio transition-all duration-200 hover:bg-transparent sm:h-9 sm:max-w-[45%] sm:rounded-2xl sm:px-2 sm:py-2'
            >
              {/* Fluid fill effect */}
              <span className='absolute bottom-0 left-0 h-0 w-full bg-iio transition-all duration-200 ease-out group-hover:h-full' />

              {/* Button Text with Animated Arrow */}
              <span className='relative flex content-baseline items-center text-center font-[poppins] text-[16px] font-black group-hover:text-white sm:text-[18px]'>
                Upcoming
              </span>
            </Link>
            <Link
              href={'/'}
              className='group relative flex h-8 w-full max-w-[190px] items-center justify-center overflow-hidden rounded-xl border-[2px] border-iio bg-transparent px-4 py-2 text-iio transition-all duration-200 hover:bg-transparent sm:h-9 sm:max-w-[45%] sm:rounded-2xl sm:px-2 sm:py-2'
            >
              {/* Fluid fill effect */}
              <span className='absolute bottom-0 left-0 h-0 w-full bg-iio transition-all duration-200 ease-out group-hover:h-full' />

              <span className='relative flex content-baseline items-center text-center font-[poppins] text-[16px] font-black group-hover:text-white sm:text-[18px]'>
                Ongoing
              </span>
            </Link>
          </div>
          <div className='flex-col-1 sm:flex-col-3 flex justify-between gap-4 pb-5'>
            <Link
              href={'/'}
              className='group relative flex h-56 w-full max-w-[190px] items-center justify-center overflow-hidden rounded-xl border-[2px] border-iip bg-transparent px-4 py-2 text-iio transition-all duration-200 hover:bg-transparent sm:h-96 sm:max-w-[25%] sm:rounded-2xl sm:px-2 sm:py-2'
            >
              <span className='relative flex content-baseline items-center text-center font-[poppins] text-[16px] font-black sm:text-[18px]'>
                MUN
              </span>
            </Link>
            <Link
              href={'/'}
              className='group relative flex h-56 w-full max-w-[190px] items-center justify-center overflow-hidden rounded-xl border-[2px] border-iip bg-transparent px-4 py-2 text-iio transition-all duration-200 hover:bg-transparent sm:h-96 sm:max-w-[35%] sm:rounded-2xl sm:px-2 sm:py-2'
            >
              <span className='relative flex content-baseline items-center text-center font-[poppins] text-[16px] font-black sm:text-[18px]'>
                Abhivyakti
              </span>
            </Link>
            <Link
              href={'/'}
              className='group relative flex h-56 w-full max-w-[190px] items-center justify-center overflow-hidden rounded-xl border-[2px] border-iip bg-transparent px-4 py-2 text-iio transition-all duration-200 hover:bg-transparent sm:h-96 sm:max-w-[25%] sm:rounded-2xl sm:px-2 sm:py-2'
            >
              <span className='relative flex content-baseline items-center text-center font-[poppins] text-[16px] font-black sm:text-[18px]'>
                IIIT Sports
              </span>
            </Link>
          </div>
        </div>
      </section>
      <div className='h-[80vh] bg-[url(/prefooter.png)] bg-contain bg-center bg-no-repeat'></div>
    </div>
  )
}
