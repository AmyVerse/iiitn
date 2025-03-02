'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const LoginPage = () => {
  const supabase = createClientComponentClient()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault() // 🔥 Prevent page reload on form submit
    setLoading(true)
    setError(null)

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    setLoading(false)

    if (error) {
      setError(error.message)
    } else {
      router.push('/admin') // 🔥 Redirect to /admin properly
    }
  }

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <div className='m-8 w-full rounded-lg bg-white p-8 shadow-lg sm:w-[450px]'>
        <h2 className='mb-6 text-center text-2xl font-bold text-gray-800'>Login</h2>
        {error && <p className='text-center text-red-500'>{error}</p>} {/* 🔥 Show errors */}
        <form onSubmit={handleLogin} className='space-y-4'>
          {/* Email Input */}
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700 sm:text-base'>
              Email
            </label>
            <input
              type='email'
              id='email'
              className='mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-200'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
              Password
            </label>
            <input
              type='password'
              id='password'
              className='mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-200'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            disabled={loading}
            className='w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 sm:text-lg'
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        {/* Signup & Forgot Password Links */}
        <div className='mt-4 text-center text-sm text-gray-600'>
          <a href='/reset-password' className='text-blue-600 hover:underline'>
            Forgot password?
          </a>{' '}
          |{' '}
          <a href='/signup' className='text-blue-600 hover:underline'>
            Create an account
          </a>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
