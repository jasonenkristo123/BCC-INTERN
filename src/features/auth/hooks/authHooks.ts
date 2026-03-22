import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useAuthStore } from '../store/authStore'
import { loginFn, registerFn } from '../services/api'

export const useLogin = () => {
  const setAuth = useAuthStore((s) => s.setAuth)
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: loginFn,
    onSuccess: (data) => {
      setAuth(data.data, data.token)
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
