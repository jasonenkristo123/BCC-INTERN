import { TLoginSchema, TRegisterSchema } from '../schemas/auth-schema'
import { api } from '@/features/auth/lib/axios'

export const loginFn = async (data: TLoginSchema) => {
  const response = await api.post('/auth/login', data)
  return response.data
}

export const registerFn = async (data: TRegisterSchema) => {
  const response = await api.post('/auth/register', data)
  return response.data
}
