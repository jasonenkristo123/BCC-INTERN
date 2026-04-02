import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useAuthStore } from '../store/authStore'
import { getMe, loginFn, logoutFn, registerFn } from '../services/api'
import { deleteCookie, setCookie } from '@/shared/lib/cookies'

export const useLogin = () => {
  const setUser = useAuthStore((s) => s.setUser)
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: loginFn,
    onSuccess: async () => {
      const user = await getMe()
      setUser(user)
      // Save user data to cookie for 15 minutes (900 seconds) for middleware access
      setCookie('user_data', JSON.stringify(user), 900)
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
  })
}

export const useRegister = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: registerFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
  })
}

export const useLogout = () => {
  const logout = useAuthStore((s) => s.logout)
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: logoutFn,
    onSuccess: () => {
      logout()
      // Remove user data from cookie on logout
      deleteCookie('user_data')
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
  })
}
