import { create } from 'zustand'

type User = {
  id: number
  email: string
  role: string
}

type AuthState = {
  user: User | null
  isLoading: boolean
  setUser: (user: User) => void
  logout: () => void
  setIsLoading: (isLoading: boolean) => void
}

export const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  isLoading: true,

  setUser: (user: User) => {
    set({ user, isLoading: false })
  },

  setIsLoading: (isLoading: boolean) => {
    set({ isLoading })
  },

  logout: () => {
    set({ user: null })
  },
}))
