/* eslint-disable dot-notation */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable arrow-body-style */

// eslint-disable-next-line import/named, import/no-extraneous-dependencies
import axiosClient, { AxiosError, AxiosResponse } from 'axios'
import Cookies from 'js-cookie'
import { GenericObject } from 'types/globals'
/**
 * Creates an initial 'axios' instance with custom settings.
 * NOTE: THIS IS ONLY USED FOR CLIENT SIDE
 */
const axiosClientInstance = axiosClient.create({
  baseURL: import.meta.env.VITE_MYSCHOOL_BASE_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})

axiosClientInstance.interceptors.request.use((config) => {
  const token = Cookies.get('token')
  config.headers['Authorization'] = `${token}`
  return config
})

/**
 * Handle all responses. It is possible to add handlers
 * for requests, but it is omitted here for brevity.
 */
axiosClientInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    return {
      status: res.status,
      ...res.data,
    }
  },
  (err: AxiosError<GenericObject>) => {
    if (err.response) {
      return Promise.reject({
        ...err.response,
      })
    }

    if (err.request) {
      return Promise.reject({
        ...err.request,
      })
    }

    return Promise.reject(err.response)
  },
)

export default axiosClientInstance
