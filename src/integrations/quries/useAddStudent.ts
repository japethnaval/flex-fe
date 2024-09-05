/* eslint-disable no-return-await */

import { useMutation } from '@tanstack/react-query'
import { addStudent } from 'integrations/api/students'
import { AddStudentFormData } from 'pages/dashboard/schemas/add-student.schema'

export const useAddStudentMutation = () => {
  const mutate = useMutation({
    mutationFn: async (data: AddStudentFormData) => addStudent(data),
    onSuccess: () => {},
  })

  return mutate
}
