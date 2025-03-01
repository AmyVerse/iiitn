// components/SpotlightList.tsx (Server Component)
import Image from 'next/image'

type Spotlight = {
  title: string
  description: string
  image: string
}

const SpotlightList = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/spotlight`, {
      cache: 'no-store', // Ensures fresh data on every request
    })
    if (!response.ok) throw new Error('Failed to fetch news')

    const newsItems: Spotlight[] = await response.json()

    return (
      <div className='m-8 grid w-full grid-cols-1 gap-6 px-4 sm:grid-cols-2'>
        {newsItems.length > 0 ? (
          newsItems.map((news) => (
            <div key={news.title} className='overflow-hidden rounded-lg bg-white shadow-lg'>
              <Image
                src={news.image}
                alt={news.title}
                width={600}
                height={400}
                className='h-48 w-full object-cover'
              />
              <div className='p-4'>
                <h2 className='mb-2 text-xl font-bold text-graphite'>{news.title}</h2>
                <p className='text-taupe'>{news.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No news available.</p>
        )}
      </div>
    )
  } catch (error) {
    console.error('Error fetching news:', error)
    return <p className='text-red-500'>Failed to load news.</p>
  }
}

export default SpotlightList
