'use client'

import EventsCard from '@/components/eventsCard'
import GallerySphere from '@/components/gallerySphere'
import Link from 'next/link'
import { useState } from 'react'
import GalleryCarousel from '../components/galleryCarousel'
import RButton from '../components/invertButton'
import SpotlightCarousel from '../components/spotlightCarousel'

export default function Home() {
  const [showOngoing, setShowOngoing] = useState(true) // State to track the selected tab

  return (
    <div className='relative'>
      {/* Fixed Background */}
      <div className="absolute -top-20 left-0 z-[-2] h-screen w-full bg-[url('/campus.png')] bg-cover bg-center" />{' '}
      {/* top minus margin taaki bg upr aaye*/}
      {/* First Viewport (Header Section) */}
      <section
        className={`relative z-10 flex h-[calc(100vh-100px)] flex-col items-center justify-center transition-all duration-500 sm:h-[calc(100vh-79px)]`}
      >
        {/* Subtext - Centered Below */}
        <div className='relative text-center font-[poppins] text-3xl font-semibold text-white sm:text-5xl'>
          Indian Institute of Information Technology, Nagpur
        </div>
        <div className='relative pt-6 text-center font-[mukta] text-xl font-medium text-white sm:pt-7 sm:text-4xl'>
          भारतीय सूचना प्रौद्योगिकी संस्थान, नागपुर
        </div>

        {/* Buttons */}
        <div className='relative mt-24 grid grid-cols-2 justify-center gap-5 px-4 font-[poppins] font-medium text-white sm:mt-52 sm:flex sm:grid-cols-1 sm:gap-28 sm:font-semibold sm:tracking-wider'>
          <RButton
            content='ABOUT US'
            className='w-36 rounded-xl border-[2px] border-iio bg-iio py-2 text-lg sm:w-48 sm:px-6 sm:py-3 sm:text-xl'
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          />{' '}
          <Link href={'/academics'} prefetch>
            <RButton
              content='ACADEMICS'
              className='w-36 rounded-xl border-[2px] border-iio bg-iio py-2 text-lg sm:w-48 sm:px-6 sm:py-3 sm:text-xl'
            />
          </Link>
          <RButton
            content='ADMISSION'
            className='w-36 rounded-xl border-[2px] border-iio bg-iio py-2 text-lg sm:w-48 sm:px-6 sm:py-3 sm:text-xl'
            onClick={() =>
              document.getElementById('admission')?.scrollIntoView({ behavior: 'smooth' })
            }
          />
          <Link href={'/prismatest'} prefetch>
            <RButton
              className='w-36 rounded-xl border-[2px] border-iio bg-iio py-2 text-lg sm:w-48 sm:px-6 sm:py-3 sm:text-xl'
              content='UPDATES'
            />
          </Link>
        </div>
      </section>
      {/* New Content Section */}
      <section className="relative flex aspect-[1708/517] flex-col bg-[url('/blockbg.png')] bg-center">
        {/* About Section */}
        <section
          id='about'
          className='flex w-full flex-col gap-2 px-4 pb-10 pt-20 sm:gap-5 sm:px-40 sm:py-28'
        >
          <div className='mb-2 flex justify-center pb-4 sm:mb-3 sm:py-1'>
            <span className="relative w-fit font-[poppins] text-4xl font-semibold text-black after:mx-auto after:mt-0.5 after:block after:h-[1.5px] after:w-[135px] after:bg-ash after:content-[''] sm:text-[52px] sm:after:mt-2 sm:after:h-[2px] sm:after:w-[170px]">
              About Us
            </span>
          </div>
          <div className='mb-12 flex text-center text-lg font-normal text-black sm:text-[22px] sm:leading-relaxed'>
            IIITN, established in 2016 under the Public-Private Partnership (PPP) model, we take
            pride in being an Institute of National Importance, dedicated to shaping the future of
            technology and education.
            <br />
            <br /> We are here to empower students with the knowledge and skills they need to
            succeed in the world of technology. With a strong focus on academic excellence,
            innovation, and industry collaboration, we create an environment where learning meets
            real-world impact.
          </div>
          <div className='flex justify-center'>
            <Link href={'/about'} prefetch>
              <RButton
                rippleColor='#00000'
                className='w-fit rounded-xl border-[3px] border-iio bg-iio px-2.5 py-1.5 font-[poppins] text-lg font-medium text-white shadow-lg hover:shadow-md active:scale-95 sm:px-4 sm:py-2.5 sm:shadow-xl'
                content='Learn More'
              />
            </Link>
          </div>
        </section>

        {/* Spotlights Section */}
        <section
          id='spotlight'
          className='flex w-full flex-col gap-2 px-4 pb-10 pt-20 sm:gap-5 sm:px-40 sm:py-28'
        >
          <div className='mb-2 flex justify-center pb-4 sm:mb-3 sm:py-1'>
            <span className="relative w-fit font-[poppins] text-4xl font-semibold text-black after:mx-auto after:mt-2 after:block after:h-[1.5px] after:w-[135px] after:bg-ash after:content-[''] sm:text-[52px] sm:after:mt-2 sm:after:h-[2px] sm:after:w-[170px]">
              Spotlight
            </span>
          </div>
          <div>
            <SpotlightCarousel />
          </div>
          <div className='mt-8 flex justify-center'>
            <Link href={'/spotlight'} prefetch>
              <RButton
                className='rounded-xl border-[3px] border-iio bg-iio px-2.5 py-1.5 font-[poppins] text-lg font-medium text-white shadow-lg hover:shadow-md active:scale-95 sm:w-56 sm:px-4 sm:py-2.5 sm:shadow-xl'
                content='View More'
              />
            </Link>
          </div>
        </section>

        {/* Events Section */}
        <section
          id='events'
          className='flex w-full flex-col gap-2 px-4 pb-10 pt-20 sm:gap-5 sm:px-40 sm:py-28'
        >
          <div className='mb-2 flex justify-center pb-4 sm:mb-3 sm:py-1'>
            <span className="relative w-fit font-[poppins] text-4xl font-semibold text-black after:mx-auto after:mt-0.5 after:block after:h-[1.5px] after:w-[100px] after:bg-ash after:content-[''] sm:text-[52px] sm:after:mt-2 sm:after:h-[2px] sm:after:w-[170px]">
              Events
            </span>
          </div>
          <div className='flex justify-center'>
            <EventsCard />
          </div>
          {/* View All Button */}
          <div className='mt-8 flex justify-center sm:hidden'>
            <Link href={'/events'}>
              <button className='rounded-xl border-[3px] border-iio bg-iio px-2.5 py-1.5 font-[poppins] text-lg font-medium text-white shadow-lg hover:shadow-md active:scale-95 sm:w-56 sm:px-4 sm:py-2.5 sm:shadow-xl'>
                View All
              </button>
            </Link>
          </div>
        </section>

        {/* Admission */}
        <section
          id='admission'
          className='flex w-full flex-col gap-2 px-4 pb-10 pt-20 sm:gap-5 sm:px-40 sm:py-28'
        >
          <div className='mb-2 flex justify-center pb-4 sm:mb-3 sm:py-1'>
            <span className="relative w-fit font-[poppins] text-4xl font-semibold text-black after:mx-auto after:mt-0.5 after:block after:h-[1.5px] after:w-[150px] after:bg-ash after:content-[''] sm:text-[52px] sm:after:mt-2 sm:after:h-[2px] sm:after:w-[170px]">
              Admission
            </span>
          </div>
          <div className='mb-12 flex text-center text-lg font-normal text-black sm:text-[22px] sm:leading-relaxed'>
            We strive to bring the best and brightest minds to our campus, fostering a dynamic and
            innovative learning environment.
            <br />
            <br /> Admissions for the first semester of our Bachelor of Technology (B.Tech) programs
            in Computer Science and Engineering (CSE) and Electronics and Communication Engineering
            (ECE) are conducted through JoSAA, starting in August.
          </div>
          <div className='flex justify-center'>
            <Link href={'/about'} prefetch>
              <RButton
                rippleColor='#e8dccb'
                className='w-fit rounded-xl border-[3px] border-iio bg-iio px-2.5 py-1.5 font-[poppins] text-lg font-medium text-white shadow-lg hover:shadow-md active:scale-95 sm:px-4 sm:py-2.5 sm:shadow-xl'
                content='How to Apply'
              />
            </Link>
          </div>
        </section>

        {/* Research */}
        <section
          id='research'
          className='flex w-full flex-col gap-2 px-4 pb-10 pt-20 sm:gap-5 sm:px-40 sm:py-28'
        >
          <div className='mb-2 flex justify-center pb-4 sm:mb-3 sm:py-1'>
            <span className="relative w-fit font-[poppins] text-4xl font-semibold text-black after:mx-auto after:mt-0.5 after:block after:h-[1.5px] after:w-[135px] after:bg-ash after:content-[''] sm:text-[52px] sm:after:mt-2 sm:after:h-[2px] sm:after:w-[170px]">
              Research
            </span>
          </div>

          <div className='mb-12 flex text-center text-lg font-normal text-black sm:text-[22px] sm:leading-relaxed'>
            We are committed to pioneering research that drives innovation and technological
            advancement.
            <br />
            <br />
            Admissions for the first semester of our Bachelor of Technology (B.Tech) programs in
            Computer Science and Engineering (CSE) and Electronics and Communication Engineering
            (ECE) are conducted through JoSAA, starting in August. Our faculty and students actively
            engage in cutting-edge research across various domains, fostering a culture of curiosity
            and discovery.
          </div>
          <div className='flex justify-center'>
            <Link href={'/about'} prefetch>
              <RButton
                rippleColor='bg-sand'
                className='w-fit rounded-xl border-[3px] border-iio bg-iio px-2.5 py-1.5 font-[poppins] text-lg font-medium text-white shadow-lg hover:shadow-md active:scale-95 sm:px-4 sm:py-2.5 sm:shadow-xl'
                content='Read More'
              />
            </Link>
          </div>
        </section>

        {/* Campus Gallery */}
        <section
          id='gallery'
          className='flex w-full flex-col gap-2 px-4 pb-10 pt-20 sm:gap-5 sm:px-40 sm:py-28'
        >
          <div className='mb-2 flex justify-center pb-4 sm:mb-3 sm:py-1'>
            <span className="relative w-fit font-[poppins] text-4xl font-semibold text-black after:mx-auto after:mt-2 after:block after:h-[1.5px] after:w-[220px] after:bg-ash after:content-[''] sm:text-[52px] sm:after:mt-2 sm:after:h-[2px] sm:after:w-[170px]">
              Campus Gallery
            </span>
          </div>
          <div className='flex flex-grow items-center justify-between max-sm:flex-col'>
            <div className='w-[95%] sm:w-[65%]'>
              <GalleryCarousel />
            </div>
            <div className='relative mx-7 hidden h-[80%] w-[10%] rounded-lg sm:block'>
              <div className='absolute bottom-1/2 left-1/2 top-8 h-[500px] w-[1.5px] bg-graphite'></div>
            </div>
            <div className='flex justify-center max-sm:mt-9 max-sm:w-[100%] sm:justify-end'>
              <GallerySphere />
            </div>
          </div>
          <div className='flex justify-center max-sm:mt-9'>
            <Link href={'/about'} prefetch>
              <RButton
                className='w-fit rounded-xl border-[3px] border-iio bg-iio px-2.5 py-1.5 font-[poppins] text-lg font-medium text-white shadow-lg hover:shadow-md active:scale-95 sm:px-4 sm:py-2.5 sm:shadow-xl'
                content='Tour Campus'
              />
            </Link>
          </div>
        </section>

        {/* Thanku */}
        <div className='mb-6 mt-9 flex w-full items-center justify-center pb-5 pt-16 sm:mb-3 sm:px-60 sm:py-[114px]'>
          <span className='relative w-fit font-[poppins] text-3xl font-semibold text-black sm:text-[52px]'>
            Thank you for Visiting!
          </span>
        </div>
      </section>
      <section className='aspect-[2065/924] bg-[url(/prefooter.png)] bg-contain bg-center bg-no-repeat'></section>
    </div>
  )
}
