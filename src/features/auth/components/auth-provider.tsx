'use client'

import React, { useEffect } from 'react'
import { useAuthStore } from '../store/authStore'
import { getMe } from '../services/api'

// check user login
export default function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const setUser = useAuthStore((state) => state.setUser)
  const setLoading = useAuthStore((state) => state.setIsLoading)

  useEffect(() => {
    let mounted = true
    const fetchUser = async () => {
      try {
        const user = await getMe()
        if (mounted && user) {
          setUser(user)
        }
      } catch {
        if (mounted) setLoading(false)
      }
    }
    fetchUser()

    return () => {
      mounted = false
    }
  }, [setUser, setLoading])

  return <>{children}</>
}
