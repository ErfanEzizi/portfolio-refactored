import Layouts from '@/components/layouts'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Erfan Ezizi',
  description: "Erfan Ezizi portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Layouts>
      {children}
    </Layouts>

  )
}
