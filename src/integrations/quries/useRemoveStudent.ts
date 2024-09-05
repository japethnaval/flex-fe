/* eslint-disable no-return-await */

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { removeStudent } from 'integrations/api/students'
import { RemoveStudentFormData } from 'pages/dashboard/schemas/remove-student.schema'

export const useRemoveStudentMutation = () => {
  const queryClient = useQueryClient()
  const mutate = useMutation({
    mutationFn: async (data: RemoveStudentFormData) => removeStudent(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['STUDENTS_LIST'] })
    },
  })

  return mutate
}
