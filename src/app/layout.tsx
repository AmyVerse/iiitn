import { Metadata } from 'next'
import { Inter, Mukta, Poppins } from 'next/font/google'
import localFont from 'next/font/local'
import { Footer } from './components/footer'
import NavbarWrapper from './components/navBarWrapper'
import './globals.css'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: '400',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})
const mukta = Mukta({
  variable: '--font-mukta',
  subsets: ['latin'],
  weight: '400',
})

// Custom font configuration
const makro = localFont({
  src: [
    {
      path: '../../public/makro-font-family/MakroTrial-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/makro-font-family/MakroTrial-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/makro-font-family/MakroTrial-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/makro-font-family/MakroTrial-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/makro-font-family/MakroTrial-Extrabold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/makro-font-family/MakroTrial-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-makro',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'IIIT Nagpur',
  description: 'College website',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable} ${makro.variable} ${inter.variable} ${mukta.variable}`}>
        {/* ✅ Let the client component handle pathname */}
        <NavbarWrapper />
        <main className='flex-1'>{children}</main>
        <Footer /> {/* Common Footer for all pages */}
      </body>
    </html>
  )
}

//npx prettier --write .
//npx prisma migrate dev --name init

//rm -rf node_modules package-lock.json
// npm install
// npx prisma generate
// npx prisma db push
// npm run dev
