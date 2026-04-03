import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AddFood, AddFoodPayload } from '../services/api'

export const useAddFood = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: AddFoodPayload) => AddFood(data),
    mutationKey: ['tambah-bahan', 'add-food'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['waste-tracker'] })
      queryClient.invalidateQueries({ queryKey: ['dashboard'] })
      queryClient.invalidateQueries({ queryKey: ['bahan-saya'] })
    },
  })
}
