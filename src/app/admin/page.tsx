'use client'

import { createClientComponentClient, User } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
  FiBell,
  FiCalendar,
  FiFileText,
  FiHome,
  FiImage,
  FiLogOut,
  FiMenu,
  FiSettings,
  FiUsers,
  FiX,
} from 'react-icons/fi'
import Loader from '../../components/loader'
import { addProduct, deleteProduct, updateProduct } from '../api/link/actions'
import { addSpotlight, deleteSpotlight, updateSpotlight } from '../api/spotlight/action'

type Link = {
  id: number
  name: string
  url: string
}

type Spotlight = {
  id: number
  title: string
  description: string
  content: string
  image: string
  date: string
}

const menuItems = [
  { name: 'Dashboard', icon: <FiHome />, id: 'dashboard' },
  { name: 'Spotlight', icon: <FiFileText />, id: 'Spotlight' },
  { name: 'Faculty', icon: <FiUsers />, id: 'faculty' },
  { name: 'Events', icon: <FiCalendar />, id: 'events' },
  { name: 'Announcements', icon: <FiBell />, id: 'announcements' },
  { name: 'Campus', icon: <FiImage />, id: 'campus' },
  { name: 'Gallery', icon: <FiImage />, id: 'gallery' },
  { name: 'Settings', icon: <FiSettings />, id: 'settings' },
]

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState<string>('dashboard')

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const cookies = document.cookie.split('; ').find((row) => row.startsWith('activeSection='))
      if (cookies) {
        setActiveSection(cookies.split('=')[1]) // Extract value
      }
    }
  }, [])

  const handleSectionChange = (section: string) => {
    setActiveSection(section)
    document.cookie = `activeSection=${section}; path=/` // Session cookie (expires on browser close)
  }

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const supabase = createClientComponentClient()
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser()
      if (error || !data?.user) {
        router.push('/login')
      } else {
        setUser(data.user)
      }
    }
    getUser()
  }, [supabase, router])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/login')
    window.location.reload() // Ensures a full refresh after logout
    setActiveSection('dashboard') // Reset active section
    document.cookie = 'activeSection=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  }

  return (
    <div className='flex min-h-screen bg-gray-100'>
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-20 w-64 bg-white p-5 shadow-lg transition-transform sm:z-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-64'
        } md:relative md:translate-x-0`}
      >
        <div className='flex items-center justify-center'>
          <h1 className='text-2xl font-bold text-blue-600'>Admin Panel</h1>
          <button className='md:hidden' onClick={() => setIsSidebarOpen(false)}>
            <FiX className='text-xl' />
          </button>
        </div>

        <nav className='mt-6 space-y-2'>
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`flex w-full items-center gap-3 rounded-lg p-3 text-left text-gray-700 hover:bg-blue-100 ${
                activeSection === item.id ? 'bg-blue-600 text-white' : ''
              }`}
              onClick={() => handleSectionChange(item.id)}
            >
              {item.icon} {item.name}
            </button>
          ))}
        </nav>

        {/* Sign Out Button */}
        <button
          onClick={handleSignOut}
          className='mt-10 flex w-full items-center gap-3 rounded-lg bg-red-600 p-3 text-left text-white hover:bg-red-700'
        >
          <FiLogOut /> Sign Out
        </button>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 md:hidden'
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className='flex w-full flex-auto flex-col'>
        {/* Navbar */}
        <header className='flex items-center justify-between bg-white px-6 py-4 shadow-md'>
          <button className='sm:hidden' onClick={() => setIsSidebarOpen(true)}>
            <FiMenu className='text-xl' />
          </button>
          <h2 className='text-xl font-semibold text-gray-800'>
            {menuItems.find((item) => item.id === activeSection)?.name}
          </h2>
          <button onClick={handleSignOut} className='rounded-full bg-gray-200 p-2'>
            <FiLogOut className='text-xl text-red-600' />
          </button>
        </header>

        {/* Dashboard Sections */}
        <main className='p-6'>
          {activeSection === 'dashboard' && <Dashboard />}
          {activeSection === 'Spotlight' && <Spotlight />}
          {activeSection === 'faculty' && <Faculty />}
          {activeSection === 'events' && <Events />}
          {activeSection === 'announcements' && <Announcements />}
          {activeSection === 'campus' && <Campus />}
          {activeSection === 'gallery' && <Gallery />}
          {activeSection === 'settings' && <Settings />}
        </main>
      </div>
    </div>
  )
}

// Placeholder Components for Sections
const Dashboard = () => (
  <div className='text-center text-lg font-semibold text-black'>Welcome to the Dashboard</div>
)
const Spotlight = () => {
  const [operation, setOperation] = useState<'add' | 'update' | 'delete'>('add')
  const [message, setMessage] = useState('')
  const [spotlights, setSpotlights] = useState<Spotlight[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [selectedSpotlight, setSelectedSpotlight] = useState<{
    title: string
    description: string
    content: string
    image: string
  } | null>(null)

  useEffect(() => {
    fetchSpotlights()
  }, [])

  const fetchSpotlights = async () => {
    try {
      const response = await fetch('/api/spotlight')
      if (!response.ok) throw new Error('Failed to fetch spotlights')
      const data = await response.json()
      setSpotlights(data)
    } catch (error) {
      console.error('Error fetching spotlights:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleModify = (spotlight: Spotlight) => {
    setOperation('update')
    setSelectedId(spotlight.id)
    setSelectedSpotlight(spotlight)
  }

  return (
    <div className='rounded-lg bg-white p-6 shadow-md'>
      <h2 className='mb-4 text-2xl font-semibold text-black'>Spotlight Management</h2>
      <p className='text-gray-600'>Use this form to manage spotlight entries.</p>

      <div className='mt-4 flex gap-3'>
        <button
          onClick={() => {
            setOperation('add')
            setSelectedSpotlight(null)
          }}
          className='my-4 rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700'
        >
          Add New Spotlight
        </button>
      </div>

      <div className='overflow-x-auto'>
        {loading ? (
          <p className='text-center text-gray-500'>Loading...</p>
        ) : (
          <table className='w-full border-collapse border border-gray-300 text-black'>
            <thead>
              <tr className='bg-gray-200'>
                <th className='border border-gray-300 p-2'>ID</th>
                <th className='border border-gray-300 p-2'>Title</th>
                <th className='hidden border border-gray-300 p-2 sm:table-cell'>Description</th>
                <th className='border border-gray-300 p-2'>Image</th>
                <th className='border border-gray-300 p-2'>Date</th>
                <th className='border border-gray-300 p-2'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {spotlights.length > 0 ? (
                spotlights.map((spotlight) => (
                  <tr key={spotlight.id} className='hover:bg-gray-100'>
                    <td className='border border-gray-300 p-2 text-center'>{spotlight.id}</td>
                    <td className='border border-gray-300 p-2'>{spotlight.title}</td>
                    <td className='hidden border border-gray-300 p-2 sm:table-cell'>
                      {spotlight.description}
                    </td>
                    <td className='border border-gray-300 p-2'>
                      <img
                        src={spotlight.image}
                        alt={spotlight.title}
                        className='h-12 w-12 rounded-md object-cover'
                      />
                    </td>
                    <td className='border border-gray-300 p-2 text-center'>
                      {new Date(spotlight.date).toLocaleDateString()}
                    </td>
                    <td className='flex flex-col gap-2 border border-gray-300 p-2 text-center sm:flex-row'>
                      <button
                        onClick={() => handleModify(spotlight)}
                        className='rounded bg-yellow-500 px-3 py-1 text-white hover:bg-yellow-600'
                      >
                        Modify
                      </button>
                      <button
                        onClick={() => {
                          setOperation('delete')
                          setSelectedId(spotlight.id)
                        }}
                        className='rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700'
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className='p-4 text-center text-black'>
                    No spotlights available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* Form */}
      <form
        action={async (formData) => {
          if (operation === 'add') {
            await addSpotlight(formData)
            setMessage('Spotlight Added!')
          } else if (operation === 'update') {
            await updateSpotlight(formData)
            setMessage('Spotlight Updated!')
          } else if (operation === 'delete') {
            await deleteSpotlight(formData)
            setMessage('Spotlight Deleted!')
          }
          fetchSpotlights()
        }}
        className='my-12 flex flex-col gap-3 rounded-lg border-2 border-black p-3'
      >
        <h3 className='text-lg font-semibold text-black'>Spotlight Form</h3>

        {(operation === 'update' || operation === 'delete') && (
          <input
            name='id'
            required
            value={selectedId ?? ''}
            readOnly
            className='rounded-md border bg-gray-200 p-2 text-black'
          />
        )}

        {(operation === 'add' || operation === 'update') && (
          <>
            <input
              name='title'
              placeholder='Title'
              required
              value={selectedSpotlight?.title ?? ''}
              onChange={(e) =>
                setSelectedSpotlight((prev) => ({
                  ...(prev ?? { description: '', content: '', image: '' }),
                  title: e.target.value,
                }))
              }
              className='rounded-md border p-2 text-black'
            />
            <textarea
              name='description'
              placeholder='Description'
              required
              value={selectedSpotlight?.description ?? ''}
              onChange={(e) =>
                setSelectedSpotlight((prev) => ({
                  ...(prev ?? { title: '', content: '', image: '' }),
                  description: e.target.value,
                }))
              }
              className='rounded-md border p-2 text-black'
            />
            <textarea
              name='content'
              placeholder='Content'
              value={selectedSpotlight?.content ?? ''}
              onChange={(e) =>
                setSelectedSpotlight((prev) => ({
                  ...(prev ?? { title: '', description: '', image: '' }),
                  content: e.target.value,
                }))
              }
              className='rounded-md border p-2 text-black'
            />
            <input
              name='image'
              placeholder='Image URL'
              required
              value={selectedSpotlight?.image ?? ''}
              onChange={(e) =>
                setSelectedSpotlight((prev) => ({
                  ...(prev ?? { title: '', description: '', content: '' }),
                  image: e.target.value,
                }))
              }
              className='rounded-md border p-2 text-black'
            />
          </>
        )}

        <button type='submit' className='max-w-44 rounded-md bg-blue-500 p-2 text-white'>
          {operation.charAt(0).toUpperCase() + operation.slice(1)} Spotlight
        </button>
      </form>

      {message && <p className='mt-3 text-green-600'>{message}</p>}
    </div>
  )
}

const Faculty = () => {
  const [operation, setOperation] = useState('add')
  const [message, setMessage] = useState('')
  const [links, setLinks] = useState<Link[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [selectedLink, setSelectedLink] = useState<{ name: string; url: string } | null>(null) // Store selected link

  useEffect(() => {
    fetchLinks()
  }, [])

  const fetchLinks = async () => {
    try {
      const response = await fetch('/api/link')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      setLinks(data)
    } catch (error) {
      console.error('Error fetching faculty links:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='rounded-lg bg-white p-6 shadow-md'>
      <h2 className='mb-4 text-2xl font-semibold text-black'>Links</h2>

      <div className='mt-4 flex gap-3'>
        <button
          onClick={() => {
            setOperation('add')
            setSelectedId(null)
            setSelectedLink(null) // Reset fields when adding a new entry
          }}
          className='my-7 rounded bg-green-600 px-4 py-2 text-white hover:bg-blue-700'
        >
          Add New Entry
        </button>
      </div>

      <Loader isLoading={loading}>
        <table className='w-full border-collapse border border-gray-300 text-black'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='border border-gray-300 p-2'>ID</th>
              <th className='border border-gray-300 p-2'>Name</th>
              <th className='border border-gray-300 p-2'>URL</th>
              <th className='border border-gray-300 p-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {links.length > 0 ? (
              links.map((link) => (
                <tr key={link.id} className='hover:bg-gray-100'>
                  <td className='border border-gray-300 p-2 text-center text-black'>{link.id}</td>
                  <td className='border border-gray-300 p-2'>{link.name}</td>
                  <td className='max-w-72 overflow-scroll border border-gray-300 p-2'>
                    <a
                      href={link.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-500 hover:underline'
                    >
                      {link.url}
                    </a>
                  </td>
                  <td className='flex flex-col gap-2 border border-gray-300 p-2 text-center sm:flex-row'>
                    <button
                      onClick={() => {
                        setOperation('update')
                        setSelectedId(link.id)
                        setSelectedLink({ name: link.name, url: link.url }) // Prefill form with link details
                      }}
                      className='rounded bg-yellow-500 px-3 py-1 text-white hover:bg-yellow-600'
                    >
                      Modify
                    </button>
                    <button
                      onClick={() => {
                        setOperation('delete')
                        setSelectedId(link.id)
                        setSelectedLink(null) // No need to store data for delete
                      }}
                      className='rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className='p-4 text-center text-black'>
                  No links available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Loader>

      {/* Form */}
      <form
        action={async (formData) => {
          if (operation === 'add') {
            await addProduct(formData)
            setMessage('Entry Added!')
          } else if (operation === 'update') {
            await updateProduct(formData)
            setMessage('Entry Updated!')
          } else if (operation === 'delete') {
            await deleteProduct(formData)
            setMessage('Entry Deleted!')
          }
          fetchLinks() // Refresh list after operation
        }}
        className='my-12 flex flex-col gap-3 rounded-lg border-2 border-black p-3'
      >
        <h3 className='text-lg font-semibold text-black'>Form</h3>

        {/* ID Field (Auto-filled when Modify/Delete is clicked) */}
        {(operation === 'update' || operation === 'delete') && (
          <input
            name='id'
            placeholder='ID'
            required
            value={selectedId ?? ''}
            readOnly
            className='rounded-md border bg-gray-200 p-2 text-black'
          />
        )}

        {/* Name & URL Fields (Only for Add/Update) */}
        {(operation === 'add' || operation === 'update') && (
          <>
            <input
              name='name'
              placeholder='Name'
              required
              value={selectedLink?.name ?? ''}
              onChange={(e) =>
                setSelectedLink((prev) => ({ ...(prev || { url: '' }), name: e.target.value }))
              }
              className='rounded-md border p-2 text-black'
            />
            <input
              name='url'
              placeholder='URL'
              required
              value={selectedLink?.url ?? ''}
              onChange={(e) =>
                setSelectedLink((prev) => ({ ...(prev || { name: '' }), url: e.target.value }))
              }
              className='rounded-md border p-2 text-black'
            />
          </>
        )}

        {/* Submit Button */}
        <button type='submit' className='max-w-44 rounded-md bg-blue-500 p-2 text-white'>
          {operation.charAt(0).toUpperCase() + operation.slice(1)} Entry
        </button>
      </form>

      {/* Status Message */}
      {message && <p className='mt-3 text-green-600'>{message}</p>}
    </div>
  )
}

const Events = () => (
  <div className='text-center text-lg font-semibold text-black'>Manage Events</div>
)
const Announcements = () => (
  <div className='text-center text-lg font-semibold text-black'>Manage Announcements</div>
)
const Campus = () => (
  <div className='text-center text-lg font-semibold text-black'>Manage Campus Info</div>
)
const Gallery = () => (
  <div className='text-center text-lg font-semibold text-black'>Manage Gallery</div>
)
const Settings = () => (
  <div className='text-center text-lg font-semibold text-black'>Settings Page</div>
)

export default AdminDashboard
export const dynamic = 'force-dynamic'
