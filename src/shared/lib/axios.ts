import axios from 'axios'

import { getCookie } from './cookies'

let inMemoryToken: string | null = null

export const api = axios.create({
  baseURL: '/api',
  withCredentials: true,
})

api.interceptors.request.use((config) => {
  const token = getCookie('auth_token') || getCookie('token') || inMemoryToken
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config

    const isRefreshRequest = originalRequest.url?.includes('/auth/refresh')

    if (
      (error.response?.status === 401 || error.response?.status === 403) &&
      isRefreshRequest
    ) {
      const publicRoutes = ['/login', '/register', '/', '/home', '/landing']
      const currentPath =
        typeof window !== 'undefined' ? window.location.pathname : ''

      if (
        typeof window !== 'undefined' &&
        !publicRoutes.some(
          (route) =>
            currentPath === route || currentPath.startsWith(`${route}/`),
        )
      ) {
        window.location.href = '/login'
      }
      inMemoryToken = null
      return Promise.reject(error)
    }

    if (
      (error.response?.status === 401 || error.response?.status === 403) &&
      !originalRequest._retry &&
      !originalRequest.url?.includes('/auth/login')
    ) {
      originalRequest._retry = true
      try {
        const response = await api.post('/auth/refresh')
        const newToken = response.data.accessToken
        if (newToken) {
          inMemoryToken = newToken
          originalRequest.headers.Authorization = `Bearer ${newToken}`
        }
        return api(originalRequest)
      } catch (refreshError) {
        inMemoryToken = null
        return Promise.reject(refreshError)
      }
    }
    return Promise.reject(error)
  },
)
