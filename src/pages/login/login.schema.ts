import { z } from 'zod'

export const LoginDetailsSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, 'EMAIL_IS_REQUIRED')
    .email('EMAIL_IS_INVALID'),

  password: z
    .string()
    .trim()
    .min(1, 'PASSWORD_IS_REQUIRED')
    .refine(
      (value) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g.test(
          value ?? '',
        ),
      'PASSWORD_INVAILD',
    ),
})
export type LoginFormData = z.infer<typeof LoginDetailsSchema>
