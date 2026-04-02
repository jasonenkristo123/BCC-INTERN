import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AddFood } from '../services/api'
import { TTambahBahanScema } from '../schemas/tambah-bahan-schema'

export const useAddFood = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: TTambahBahanScema) => AddFood(data),
    mutationKey: ['tambah-bahan', 'add-food'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['waste-tracker'] })
      queryClient.invalidateQueries({ queryKey: ['dashboard'] })
      queryClient.invalidateQueries({ queryKey: ['bahan-saya'] })
    },
  })
}
