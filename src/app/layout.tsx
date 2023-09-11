
import './globals.scss'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ClientOnly } from '@/components/ClientOnly'
import { Model } from '@/components/model'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AirBnB',
  description: 'This is AirBnB Clone Project.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Model actionLabel='Submit' isOpen />
          <Navbar />
        </ClientOnly>
          {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
