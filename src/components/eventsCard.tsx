import { motion } from 'framer-motion'
import Link from 'next/link'
import { Key, useState } from 'react'

const tabs = [
  { id: 'ongoing', label: 'Ongoing' },
  { id: 'upcoming', label: 'Upcoming' },
]

// Define hover text colors
const textOn = 'text-iip border-iip' // Ongoing events hover color
const textUp = 'text-iio border-iio' // Upcoming events hover color

type EventType = {
  date: string
  month: string
  title: string
  time: string
  location: string
}

const eventsData: { ongoing: EventType[]; upcoming: EventType[] } = {
  ongoing: [
    {
      date: '08',
      month: 'February',
      title: 'Tech Conference 2025',
      time: '5:00PM - 9PM',
      location: '@ Microsoft HQ',
    },
    {
      date: '15',
      month: 'February',
      title: 'AI & ML Summit',
      time: '4:00PM - 8PM',
      location: '@ Google Campus',
    },
    {
      date: '20',
      month: 'February',
      title: 'Blockchain Meetup',
      time: '6:00PM - 10PM',
      location: '@ Ethereum Hub',
    },
    {
      date: '25',
      month: 'February',
      title: 'Startup Innovation Night',
      time: '7:30PM - 11PM',
      location: '@ Algolia Paris',
    },
  ],
  upcoming: [
    {
      date: '02',
      month: 'March',
      title: 'Product Launch Expo',
      time: '10:00AM - 2PM',
      location: '@ Apple Park',
    },
    {
      date: '08',
      month: 'March',
      title: 'E-commerce Tech Talk',
      time: '1:00PM - 5PM',
      location: '@ Amazon HQ',
    },
    {
      date: '14',
      month: 'March',
      title: 'Cybersecurity Webinar',
      time: '3:00PM - 6PM',
      location: '@ Zoom Online',
    },
    {
      date: '22',
      month: 'March',
      title: 'UI/UX Design Workshop',
      time: '11:00AM - 4PM',
      location: '@ Adobe Campus',
    },
  ],
}

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState('ongoing')

  return (
    <div className='flex flex-col items-center justify-center space-y-6 sm:items-start'>
      <div className='flex w-full items-center justify-center sm:justify-between'>
        {/* Tabs */}
        <div className='items-center space-x-6 pb-2 sm:flex-grow'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-xl transition-colors sm:text-4xl ${
                activeTab === tab.id
                  ? "font-bold text-black after:mx-auto after:block after:h-[1px] after:w-[80px] after:bg-black/60 after:content-[''] sm:after:mt-2 sm:after:h-[2px] sm:after:w-[140px]"
                  : 'text-gray-500'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* View All Button */}
        <div className='hidden flex-shrink-0 sm:block'>
          <Link href={'/events'}>
            <button className='rounded-xl border-2 border-iio bg-iio px-3 py-2 font-[poppins] text-lg text-white'>
              View All
            </button>
          </Link>
        </div>
      </div>

      {/* Events Grid */}
      <div className='relative grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-7'>
        {eventsData[activeTab as keyof typeof eventsData].map(
          (event: EventType, index: Key | null | undefined) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`relative flex flex-col rounded-lg border-2 border-black p-5 text-black shadow-lg backdrop-blur-sm sm:h-96 sm:w-72 ${activeTab === 'ongoing' ? 'hover:border-iip hover:bg-iip hover:text-white' : 'hover:border-iio hover:bg-iio hover:text-white'} `}
            >
              {/* Date Section */}
              <div className='text-3xl font-bold sm:text-6xl'>{event.date}</div>
              <div className='text-sm sm:text-base'>{event.month}</div>
              <div className='flex flex-grow'></div>

              {/* Title & Details */}
              <div className='mt-4 text-wrap text-xl font-semibold max-sm:leading-tight sm:mt-1 sm:text-2xl'>
                {event.title}
              </div>
              <div className='mt-3 text-base font-medium sm:mt-3 sm:text-lg'>{event.time}</div>
              <div className='text-sm sm:mt-1 sm:text-base'>{event.location}</div>
            </motion.div>
          ),
        )}
      </div>
    </div>
  )
}
