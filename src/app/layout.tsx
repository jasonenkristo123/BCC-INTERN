import type { Metadata } from 'next'
import { Roboto, Geist } from 'next/font/google'
import '@/app/globals.css'
import QueryProviders from '@/shared/providers/queryProvider'
import AuthProvider from '@/features/auth/components/auth-provider'
import { cn } from '@/shared/lib/utils'

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Simpanin.id',
  icons: '/assets/logos.webp',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn('scroll-smooth', 'font-sans', geist.variable)}
    >
      <body className={`${roboto.variable} m-0 p-0 overflow-x-hidden`}>
        <QueryProviders>
          <AuthProvider>{children}</AuthProvider>
        </QueryProviders>
      </body>
    </html>
  )
}
