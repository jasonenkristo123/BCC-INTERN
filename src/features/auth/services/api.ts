import { TLoginSchema, TRegisterSchema } from '../schemas/auth-schema'
import { api } from '@/shared/lib/axios'

export const loginFn = async (data: TLoginSchema) => {
  const response = await api.post('/auth/login', data)
  return response.data
}

export const registerFn = async (data: TRegisterSchema) => {
  const response = await api.post('/auth/register', data)
  return response.data
}

export const getMe = async () => {
  const res = await api.get('/auth/me')
  return res.data
}

export const logoutFn = async () => {
  const res = await api.post('/auth/logout')
  return res.data
}
