import { Configuration } from './generated/configuration'
import { apiClient } from './client'
import config from '../../../config.json'


const rawApiUrl =
  config.VITE_API_URL?.replace(/\/$/, '') ?? 'http://localhost:8000/api/v1'

export const apiHost = rawApiUrl.replace(/\/api\/v1\/?$/i, '')
export const apiBaseUrl = `${apiHost}/api/v1`

export const apiConfiguration = new Configuration({
  basePath: apiHost,
  accessToken: async () => {
    if (typeof window === 'undefined') return ''
    return window.localStorage.getItem('accessToken') ?? ''
  },
  baseOptions: apiClient.defaults,
})
