'use client'
import { ReactNode, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function QueryProviders({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient()) // berjalan sekali

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
