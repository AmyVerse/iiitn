const Loader = ({ children, isLoading }: { children: React.ReactNode; isLoading: boolean }) => {
  return (
    <div className='relative'>
      {isLoading && (
        <div className='absolute inset-0 z-50 flex items-center justify-center bg-white/80'>
          <img src='/loader.gif' alt='Loading...' className='h-16 w-16 sm:h-24 sm:w-24' />
        </div>
      )}
      <div className={isLoading ? 'opacity-50' : 'opacity-100'}>{children}</div>
    </div>
  )
}

export default Loader
