import axios from 'axios'

export const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

api.interceptors.request.use((config) => {
  return config
})

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config

    const isRefreshRequest = originalRequest.url?.includes('/auth/refresh')

    if (error.response?.status === 401 && isRefreshRequest) {
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
      return Promise.reject(error)
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      try {
        await api.post('/auth/refresh')
        return api(originalRequest)
      } catch (refreshError) {
        return Promise.reject(refreshError)
      }
    }
    return Promise.reject(error)
  },
)
