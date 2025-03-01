import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bbzdluhdxwrandtrfdug.supabase.co', // Replace with your actual Supabase project ref
      },
    ],
  },
}

export default nextConfig
