import { z } from 'zod'

export const RemoveStudentSchema = z.object({
  student_id: z.string().trim().min(1, 'Student id is required'),
})
export type RemoveStudentFormData = z.infer<typeof RemoveStudentSchema>
