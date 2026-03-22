import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '@/app/globals.css'
import QueryProviders from '@/shared/providers/queryProvider'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Simpanin.id',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${roboto.variable} m-0 p-0 overflow-x-hidden`}>
        <QueryProviders>{children}</QueryProviders>
      </body>
    </html>
  )
}
