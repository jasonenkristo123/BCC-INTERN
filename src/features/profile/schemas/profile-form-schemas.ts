import { z } from 'zod'

export const EditProfileSchema = z.object({
  name: z.string().min(1, 'Nama lengkap harus diisi'),
  phone_number: z.string().min(1, 'Nomor handphone harus diisi'),
  address: z.string().min(1, 'Alamat harus diisi'),
  gender: z.string().min(1, 'Jenis kelamin harus diisi'),
  profile_picture: z.any().optional(),
})

export type TEditProfileSchema = z.infer<typeof EditProfileSchema>

export const EditPasswordSchema = z
  .object({
    oldPassword: z.string().min(1, 'Password sekarang harus diisi'),
    newPassword: z.string().min(1, 'Password baru harus diisi'),
    confirmPassword: z.string().min(1, 'Konfirmasi password harus diisi'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Password baru dan konfirmasi password tidak cocok',
    path: ['confirmPassword'],
  })

export type TEditPasswordSchema = z.infer<typeof EditPasswordSchema>
