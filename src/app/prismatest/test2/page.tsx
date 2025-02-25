'use client'

import { useEffect, useState } from 'react'

type FacultyImage = {
  id: number
  url: string
}

const FacultyImagesPage = () => {
  const [fi, fimg] = useState<FacultyImage | null>(null)
  useEffect(() => {
    const fetchImg = async () => {
      try {
        const response = await fetch('/api/auth/faculty')
        if (!response.ok) {
          throw new Error('Failed to fetch links')
        }
        const data = await response.json()
        fimg(data)
      } catch (error) {
        console.error('Error fetching links:', error)
      } finally {
      }
    }
    fetchImg()
  }, [])
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-red-100 p-10'>
      <h1 className='mb-6 text-center text-4xl font-bold text-black'>{fi?.url}</h1>
    </div>
  )
}

export default FacultyImagesPage
