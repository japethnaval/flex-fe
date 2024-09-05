import { z } from 'zod'

export const LoginDetailsSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, 'Email is required')
    .email('Email format is invalid'),

  password: z
    .string()
    .trim()
    .min(1, 'Password is required')
    .refine(
      (value) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g.test(
          value ?? '',
        ),
      'Password format is invalid',
    ),
})
export type LoginFormData = z.infer<typeof LoginDetailsSchema>
