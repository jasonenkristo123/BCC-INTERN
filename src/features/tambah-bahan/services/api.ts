import { api } from '@/shared/lib/axios'

export interface AddFoodPayload {
  food_category_id: number
  food_name: string
  initial_weight: number
  unit_of_weight: string
  storage_location: string
  purchase_date: string
  price: number
}

export const AddFood = async (data: AddFoodPayload) => {
  const res = await api.post('/food', data)
  return res.data
}
