import { z } from 'zod'

export const loginSchema = z.object({
  email: z.email('Email tidak valid'),
  password: z
    .string()
    .min(6, 'Password setidaknya mengandung 6 huruf')
    .regex(/[A-Z]/, 'Password setidaknya mengandung 1 huruf besar'),
})

export const registerSchema = z.object({
  email: z.email('Email tidak valid'),
  password: z
    .string()
    .min(6, 'Password setidaknya mengandung 6 huruf')
    .regex(/[A-Z]/, 'Password setidaknya mengandung 1 huruf besar'),
})

export type TLoginSchema = z.infer<typeof loginSchema>
export type TRegisterSchema = z.infer<typeof registerSchema>
