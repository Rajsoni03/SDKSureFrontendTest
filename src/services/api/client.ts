import axios from 'axios'
import { useAuthStore } from '@/store/authStore'
import config from '../../../config.json'

const rawApiUrl =
  config.VITE_API_URL?.replace(/\/$/, '') ?? 'http://localhost:8000/api/v1'
const apiHost = rawApiUrl.replace(/\/api\/v1\/?$/i, '')

export const apiClient = axios.create({
  baseURL: apiHost,
  timeout: Number(config.VITE_API_TIMEOUT ?? 30000),
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      const authStore = useAuthStore.getState()
      authStore.clear()
      if (typeof window !== 'undefined' && window.location.pathname !== '/login') {
        window.location.href = '/'
      }
    }
    return Promise.reject(error)
  },
)

apiClient.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = window.localStorage.getItem('accessToken')
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }
  return config
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Surface meaningful error messages; extend with refresh-token handling when auth is wired.
    const message =
      error.response?.data?.detail ||
      error.response?.data?.message ||
      error.message ||
      'Request failed'

    return Promise.reject(new Error(message))
  },
)
