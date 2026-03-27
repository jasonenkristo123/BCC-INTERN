'use client'
import DashBoardPage from '@/features/dashboard/components/dashboard-page'
import { useAuthStore } from '@/features/auth/store/authStore'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function DashBoardUser() {
  const { user, isLoading } = useAuthStore()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login')
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!user) {
    return null
  }
  return <DashBoardPage />
}
