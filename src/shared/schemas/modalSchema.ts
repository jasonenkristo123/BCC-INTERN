import { z } from 'zod'

export const jumlahBahanSchema = z.object({
  used_weight: z.number().min(0.5, 'Jumlah harus lebih dari 0'),
})

export const jumlahBuangSchema = z.object({
  discarded_weight: z.number().min(0.5, 'Jumlah harus lebih dari 0'),
})

export type TJumlahBahanSchema = z.infer<typeof jumlahBahanSchema>

export type TJumlahBuangSchema = z.infer<typeof jumlahBuangSchema>
