import { api } from '@/shared/lib/axios'
import { TTambahBahanScema } from '../schemas/tambah-bahan-schema'

export const AddFood = async (data: TTambahBahanScema) => {
  const res = await api.post('/food', data)
  return res.data
}
