import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useAuthStore } from '../store/authStore'
import { getMe, loginFn, registerFn } from '../services/api'

export const useLogin = () => {
  const setUser = useAuthStore((s) => s.setUser)
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: loginFn,
    onSuccess: async () => {
      const user = await getMe();
      setUser(user)
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
    onError: (error) => {
      console.log(error)
    },
  })
}

export const useRegister = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: registerFn,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
      console.log(data)
    },
    onError: (error) => {
      console.log(error)
    },
  })
}
