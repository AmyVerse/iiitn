'use client'

import { useEffect, useState } from 'react'
import Loader from '../components/loader' // Adjust the import path as needed

type Link = {
  id: number
  name: string
  url: string
}

const LinksPage = () => {
  const [links, setLinks] = useState<Link[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await fetch('/api/auth/link')
        if (!response.ok) {
          throw new Error('Failed to fetch links')
        }
        const data = await response.json()
        setLinks(data)
      } catch (error) {
        console.error('Error fetching links:', error)
        setError('Failed to load links')
      } finally {
        setLoading(false)
      }
    }
    fetchLinks()
  }, [])

  return (
    <Loader isLoading={loading}>
      <div className='flex h-[800px] flex-col items-center justify-center bg-gray-200 p-10'>
        <h1 className='mb-6 text-center text-4xl font-bold text-black'>Realtime fetching</h1>
        <div className='flex flex-row justify-between gap-8 space-y-4'>
          {links.length > 0 ? (
            links.map((link) => (
              <div
                key={link.id}
                className='flex w-80 flex-col rounded-lg bg-white p-4 text-center shadow-lg'
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
        </div>{' '}
      </div>
    </Loader>
  )
}

export default LinksPage
