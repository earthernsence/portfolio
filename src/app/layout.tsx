"use client";

import { Inter } from 'next/font/google'
import "./globals.css"
import { Navbar } from './Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`flex flex-col justify-start items-start w-full text-center ${inter.className}`}>
        <Navbar />
        <br />
        {children}
      </body>
    </html>
  )
}
