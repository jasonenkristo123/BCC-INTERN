import { api } from '@/shared/lib/axios'
import {
  TJumlahBahanSchema,
  TJumlahBuangSchema,
} from '@/shared/schemas/modalSchema'
import type { ApiFoodItem, CategoryItem, FoodItem } from '@/shared/types/food'
import { categoriesWithImage, mapStorageLocation } from '@/shared/types/food'

export const GetAllCategory = async (): Promise<CategoryItem[]> => {
  const res = await api.get('/category')
  const items: CategoryItem[] = res.data.data ?? []
  return items
}

export const GetAllFood = async (): Promise<FoodItem[]> => {
  const [foodRes, categories] = await Promise.all([
    api.get('/food'),
    GetAllCategory(),
  ])

  const rawItems: ApiFoodItem[] = foodRes.data.data ?? []

  const categoryMap = new Map<number, CategoryItem>()
  for (const cat of categories) {
    categoryMap.set(cat.id, cat)
  }

  return rawItems
    .filter((raw) => raw.current_weight > 0)
    .map((raw) => {
      const cat = categoryMap.get(raw.food_category_id)
      const categoryName = cat?.categoryName ?? 'Lainnya'

      const imageUrl =
        cat?.categoryProfile || categoriesWithImage[categoryName]?.image || null

      return {
        id: String(raw.id),
        name: raw.name,
        category: categoryName,
        food_category_id: raw.food_category_id,
        purchase_date: new Date(raw.purchase_date),
        expiry_date: new Date(raw.expiry_date),
        total_price: raw.total_price,
        days_left: raw.days_left,
        storage_location: mapStorageLocation(raw.storage_location),
        risk_score: raw.risk_score,
        image: imageUrl ? { image: imageUrl } : null,
        unit_weight: raw.unit_weight ?? 'gram',
        current_weight: raw.current_weight,
        used_weight: 0,
        discarded_weight: 0,
      } satisfies FoodItem
    })
}

export const PatchDiscardFood = async (
  id: string,
  data: TJumlahBuangSchema,
) => {
  const res = await api.patch(`/food/${id}/discard`, data)
  return res.data
}

export const getFoodDetail = async (id: string) => {
  const res = await api.get(`/food/${id}`)
  return res.data
}

export const UpdateFoodUsage = async (id: string, data: TJumlahBahanSchema) => {
  const res = await api.patch(`/food/${id}/use`, data)
  return res.data
}

export const DeleteFood = async (id: string) => {
  const res = await api.delete(`/food/${id}`)
  return res.data
}
