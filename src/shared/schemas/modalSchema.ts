import { z } from 'zod'

export const jumlahBahanSchema = z.object({
  jumlah: z.number().min(0.5, 'Jumlah harus lebih dari 0'),
})

export type TJumlahBahanSchema = z.infer<typeof jumlahBahanSchema>
