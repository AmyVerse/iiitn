import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  // Get user session
  const {
    data: { user },
  } = await supabase.auth.getUser()

  console.log('Middleware user:', user) // Debugging

  // If user is NOT logged in and tries to access `/admin`, redirect to `/login`
  if (!user && req.nextUrl.pathname.startsWith('/admin')) {
    console.log('Redirecting to /login') // Debugging
    return NextResponse.redirect(new URL('/login', req.url))
  }

  // If logged-in user tries to visit `/login`, redirect them to `/home`
  if (user && req.nextUrl.pathname.startsWith('/login')) {
    console.log('Redirecting to /') // Debugging
    return NextResponse.redirect(new URL('/', req.url))
  }

  return res
}

// Apply middleware to `/admin`, `/login`, and `/api`
export const config = {
  matcher: ['/admin/:path*', '/login', '/api/:path*'],
}
