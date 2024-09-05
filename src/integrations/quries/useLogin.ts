/* eslint-disable no-return-await */

import { useMutation } from '@tanstack/react-query'
import { loginUser } from 'integrations/api/login'
import Cookies from 'js-cookie'
import { LoginFormData } from 'pages/login/login.schema'
import { GenericObject } from 'types/globals'

export const useLoginMutation = () => {
  const mutate = useMutation({
    mutationFn: async (data: LoginFormData) => await loginUser(data),
    onSuccess: (data: GenericObject) => {
      Cookies.set('token', data.token)
    },
  })

  return mutate
}
