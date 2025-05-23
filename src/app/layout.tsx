import { Metadata } from 'next'
import { Inter, Mukta, Poppins, Roboto } from 'next/font/google'
import localFont from 'next/font/local'
import { Footer } from '../components/impSections/footer'
import Navbar from '../components/impSections/navbar'
import './globals.css'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const mukta = Mukta({
  variable: '--font-mukta',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
})

const roboto = Roboto({
  variable: '--font-roboto',
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

const funnel = localFont({
  src: '../../public/font/FunnelSans[wght].woff2',
  variable: '--font-funnel',
  weight: '300 800', // Define weight range
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'IIIT Nagpur',
  description: 'College website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${funnel.variable} ${poppins.variable} ${makro.variable} ${inter.variable} ${mukta.variable} ${roboto.variable}`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

//npx prettier --write .
//npx prisma migrate dev --name new

//rm -rf node_modules package-lock.json
// npm install
// npx prisma generate
// npx prisma db push
// npm run dev
