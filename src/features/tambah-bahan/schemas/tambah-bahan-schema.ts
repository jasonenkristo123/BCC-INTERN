import { z } from 'zod'

export const KategoriBahan = z.enum([
  'Umbi-umbian',
  'Sayur-sayuran',
  'Buah-buahan',
  'Daging',
  'Seafood',
  'Telur',
  'Produk Susu',
  'Rempah-rempah',
  'Bumbu Dapur',
  'Biji-bijian',
  'Kacang-kacangan & Legum',
])

export const KateogoriBahanWithId: Record<number, TKategoriBahan> = {
  1: 'Umbi-umbian',
  2: 'Sayur-sayuran',
  3: 'Buah-buahan',
  4: 'Daging',
  5: 'Seafood',
  6: 'Telur',
  7: 'Produk Susu',
  8: 'Rempah-rempah',
  9: 'Bumbu Dapur',
  10: 'Biji-bijian',
  11: 'Kacang-kacangan & Legum',
}

export const SatuanBahan = z.enum(['gram', 'ikat', 'ml', 'pcs'])

export const Penyimpanan = z.enum([
  'refrigerator',
  'room_temperature',
  'freezer',
])

export type TPenyimpanan = z.infer<typeof Penyimpanan>

export type TKategoriBahan = z.infer<typeof KategoriBahan>

export const TambahBahanScema = z.object({
  food_category_id: z.number().min(1, 'Kategori tidak valid'),
  food_name: z.string().min(1, 'Nama bahan tidak boleh kosong'),
  initial_weight: z.number().min(0.1, 'Jumlah harus lebih dari 0'),
  unit_of_weight: SatuanBahan,
  storage_location: Penyimpanan,
  purchase_date: z.date(),
  price: z.number().min(1, 'Harga tidak boleh kosong'),
})
export type TTambahBahanScema = z.infer<typeof TambahBahanScema>
