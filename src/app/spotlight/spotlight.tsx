// components/SpotlightList.tsx (Server Component)

type Spotlight = {
  title: string
  description: string
  image: string
  date: string
}

const SpotlightList = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/spotlight`, {
      cache: 'no-store', // Ensures fresh data on every request
    })
    if (!response.ok) throw new Error('Failed to fetch news')

    const newsItems: Spotlight[] = await response.json()

    return (
      <div className='mx-auto max-w-6xl px-6 py-8'>
        <h1 className='mb-6 text-center text-3xl font-bold text-gray-800'>Latest Spotlights</h1>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {newsItems.length > 0 ? (
            newsItems.map((news) => (
              <div
                key={news.title}
                className='overflow-hidden rounded-2xl bg-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl'
              >
                <img
                  src={news.image}
                  alt={news.title}
                  width={600}
                  height={400}
                  className='h-52 w-full object-cover'
                />
                <div className='p-5'>
                  <p className='mb-1 text-sm text-gray-500'>
                    {new Date(news.date).toLocaleDateString()}
                  </p>
                  <h2 className='mb-2 text-xl font-semibold text-gray-900'>{news.title}</h2>
                  <p className='text-gray-600'>{news.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className='text-center text-lg text-gray-500'>No news available.</p>
          )}
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error fetching news:', error)
    return <p className='text-center text-red-500'>Failed to load news.</p>
  }
}

export default SpotlightList
