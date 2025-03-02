// server component

type Faculty = {
  name: string
  url: string
}

const Fac = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/link`, {
      cache: 'no-store',
    })
    if (!response.ok) throw new Error('Failed to fetch links')

    const links: Faculty[] = await response.json()

    return (
      <div className='flex flex-col items-center justify-center p-10'>
        <h1 className='mb-6 text-center text-4xl font-bold text-black'>Realtime fetching</h1>
        <div className='mb-9 grid grid-cols-2 justify-between gap-4 space-y-4 sm:grid-cols-4'>
          {links.length > 0 ? (
            links.map((link) => (
              <div
                key={link.name}
                className='flex flex-col rounded-lg bg-white p-4 text-center shadow-lg sm:w-80'
              >
                <a
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-xl font-semibold text-blue-600 hover:underline'
                >
                  {link.name}
                </a>
                <img src={link.url} alt={link.name} className='flex flex-row bg-black' />
              </div>
            ))
          ) : (
            <p className='text-center text-gray-600'>No links available.</p>
          )}
        </div>
        <div></div>
      </div>
    )
  } catch (error) {
    return <p className='text-red-500'>Failed</p>
  }
}

export default Fac
