import Fac from './prismatest'

const LinksPage = () => {
  return (
    <div className='flex flex-col items-center justify-start bg-offwhite'>
      {/* Header Section */}
      <div className='relative h-64 w-full'>
        <img
          src='/flowers.jpg'
          alt='Reach Us'
          className='absolute inset-0 h-full w-full object-cover'
        />
        <div className='absolute inset-0 flex items-center justify-center bg-black/40'>
          <h1 className='rounded-lg px-3 py-3 text-5xl font-bold text-white backdrop-blur-lg'>
            Realtime
          </h1>
        </div>
      </div>

      {/* Main Section */}
      <Fac />
    </div>
  )
}

export default LinksPage
