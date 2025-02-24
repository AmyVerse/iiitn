'use client' // ✅ Allows access to usePathname()

import { usePathname } from 'next/navigation'
import Navbar from './navbar'

export default function NavbarWrapper() {
  const pathname = usePathname() // ✅ Get the current URL path

  if (pathname === '/') return null // ❌ Do NOT render Navbar on the home page

  return <Navbar />
}
