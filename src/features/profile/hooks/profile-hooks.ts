import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  CreateUserProfile,
  GetUserById,
  GetUserProfile,
  UpdatePassword,
  UpdateUserProfile,
} from '../services/api'
import { TEditPasswordSchema } from '../schemas/profile-form-schemas'

export const useCreateUserProfile = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: FormData) => CreateUserProfile(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] })
    },
  })
}

export const useUpdateUserProfile = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: FormData) => UpdateUserProfile(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] })
    },
  })
}

export const useGetUserProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: () => GetUserProfile(),
    retry: (
      failureCount,
      error: Error & { response?: { status?: number } },
    ) => {
      if (error?.response?.status === 404) return false
      return failureCount < 3
    },
  })
}

export const useGetUserById = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => GetUserById(),
  })
}

export const useUpdatePassword = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: TEditPasswordSchema) => UpdatePassword(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
  })
}
