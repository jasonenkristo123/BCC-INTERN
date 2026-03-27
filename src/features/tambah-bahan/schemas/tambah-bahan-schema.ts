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

export const SatuanBahan = z.enum(['Gram', 'Ikat', 'Ml', 'Pcs'])

export const Penyimpanan = z.enum(['Kulkas', 'Rak / Pantry', 'Freezer'])

export type TPenyimpanan = z.infer<typeof Penyimpanan>

export type TKategoriBahan = z.infer<typeof KategoriBahan>

export const TambahBahanScema = z.object({
    nama: z.string().min(1, 'Nama bahan tidak boleh kosong'),
    tanggalBeli: z.date(),
    kategori: KategoriBahan,
    jumlah: z.number().min(0.5, 'Jumlah tidak boleh kosong'),
    satuan: SatuanBahan,
    harga: z.number().min(1, 'Harga tidak boleh kosong!'),
    penyimpanan: Penyimpanan,
})

export type TTambahBahanScema = z.infer<typeof TambahBahanScema>
