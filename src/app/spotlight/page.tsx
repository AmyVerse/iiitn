// app/spotlight/page.tsx

import SpotlightList from './spotlight'

const News = () => {
  return (
    <div className='flex flex-col items-center justify-start bg-offwhite'>
      {/* Header Section */}
      <div className='relative h-64 w-full'>
        <img
          src='/news.jpg'
          alt='Reach Us'
          className='absolute inset-0 h-full w-full object-cover'
        />
        <div className='absolute inset-0 flex items-center justify-center bg-black/40'>
          <h1 className='rounded-lg px-3 py-3 text-5xl font-bold text-white backdrop-blur-lg'>
            Spotlight
          </h1>
        </div>
      </div>

      {/* News Section */}
      <SpotlightList />
    </div>
  )
}

export default News
