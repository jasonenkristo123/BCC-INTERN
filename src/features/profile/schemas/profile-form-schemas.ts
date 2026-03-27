import { z } from "zod";


export const EditProfileSchema = z.object({
    namaLengkap: z.string().min(1, "Nama lengkap harus diisi"),
    email: z.email("Email tidak valid"),
    nomorHandphone: z.string().min(1, "Nomor handphone harus diisi"),
    alamat: z.string().min(1, "Alamat harus diisi"),
    jenisKelamin: z.string().min(1, "Jenis kelamin harus diisi"),
})

export type TEditProfileSchema = z.infer<typeof EditProfileSchema>


export const EditPasswordSchema = z.object({
    passwordSekarang: z.string().min(1, "Password sekarang harus diisi"),
    passwordBaru: z.string().min(1, "Password baru harus diisi"),
})

export type TEditPasswordSchema = z.infer<typeof EditPasswordSchema>
