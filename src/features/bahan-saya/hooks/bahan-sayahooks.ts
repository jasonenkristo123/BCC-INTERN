import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  GetAllCategory,
  GetAllFood,
  PatchDiscardFood,
  getFoodDetail,
  UpdateFoodUsage,
  DeleteFood,
} from '../services/api'
import type { FoodItem, CategoryItem } from '@/shared/types/food'
import {
  TJumlahBahanSchema,
  TJumlahBuangSchema,
} from '@/shared/schemas/modalSchema'

export const useGetAllFood = () => {
  return useQuery<FoodItem[]>({
    queryFn: () => GetAllFood(),
    queryKey: ['bahan-saya', 'all-food'],
  })
}

export const useGetFoodDetail = (id: string) => {
  return useQuery({
    queryFn: () => getFoodDetail(id),
    queryKey: ['bahan-saya', 'food-detail', id],
  })
}

export const useGetAllCategory = () => {
  return useQuery<CategoryItem[]>({
    queryFn: () => GetAllCategory(),
    queryKey: ['bahan-saya', 'all-category'],
  })
}

export const useDiscardFood = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: TJumlahBuangSchema }) =>
      PatchDiscardFood(id, data),
    mutationKey: ['bahan-saya', 'discard-food'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bahan-saya'] })
    },
  })
}

export const useUpdateFoodUsage = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: TJumlahBahanSchema }) =>
      UpdateFoodUsage(id, data),
    mutationKey: ['bahan-saya', 'update-food-usage'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bahan-saya'] })
    },
  })
}

export const useDeleteFood = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) => DeleteFood(id),
    mutationKey: ['bahan-saya', 'delete-food'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bahan-saya'] })
    },
  })
}
