import { z } from 'zod'

export const AddStudentSchema = z.object({
  student_id: z.string().trim().min(1, 'Student id is required'),
  first_name: z.string().trim().min(1, 'First name is required'),
  last_name: z.string().trim().min(1, 'Last name is required'),
  DOB: z.string().trim().min(1, 'Date of birth is required'),
})
export type AddStudentFormData = z.infer<typeof AddStudentSchema>
