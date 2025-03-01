// server component

type Faculty = {
  name: string
  designation: string
}

const Fac = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/link`, {
      cache: 'no-store',
    })
    if (!response.ok) throw new Error('Failed to fetch links')

    const links: Faculty[] = await response.json()

    return (
      <div className='flex h-[800px] flex-col items-center justify-center bg-gray-200 p-10'>
        <h1 className='mb-6 text-center text-4xl font-bold text-black'>Realtime fetching</h1>
        <div className='flex flex-row justify-between gap-8 space-y-4'>
          {links.length > 0 ? (
            links.map((link) => (
              <div
                key={link.name}
                className='flex w-80 flex-col rounded-lg bg-white p-4 text-center shadow-lg'
              >
                <a
                  href={link.designation}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-xl font-semibold text-blue-600 hover:underline'
                >
                  {link.name}
                </a>
                <img src={link.name} alt={link.name} className='flex flex-row bg-black' />
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
