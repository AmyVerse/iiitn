import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Footer from "./components/Footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IIIT Nagpur",
  description: "College website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}

//npx prettier --write .
//npx prisma migrate dev --name init

//rm -rf node_modules package-lock.json
// npm install
// npx prisma generate
// npx prisma db push
// npm run dev
