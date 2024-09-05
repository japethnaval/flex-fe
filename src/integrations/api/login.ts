import axiosClient from '@util/axios'
import { LoginFormData } from 'pages/login/login.schema'

export const loginUser = async (data?: LoginFormData) => {
  const login = await axiosClient.post('/login', {
    data,
  })

  return login.data
}
