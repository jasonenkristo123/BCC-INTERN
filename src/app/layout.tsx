import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '@/app/globals.css'

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
      <body className={`${roboto.variable} antialiased `}>{children}</body>
    </html>
  )
}
