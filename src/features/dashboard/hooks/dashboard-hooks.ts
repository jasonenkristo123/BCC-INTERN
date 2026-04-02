import { useQuery } from '@tanstack/react-query'
import {
  GetConsumedFood,
  GetDiscardedFood,
  GetExpiredFood,
  GetFreshFood,
  GetWarningFood,
} from '../services/api'

export const useGetConsumedFood = () => {
  return useQuery({
    queryFn: () => GetConsumedFood(),
    queryKey: ['dashboard', 'consumed-food'],
  })
}

export const useGetDiscardedFood = () => {
  return useQuery({
    queryFn: () => GetDiscardedFood(),
    queryKey: ['dashboard', 'discarded-food'],
  })
}

export const useGetExpiredFood = () => {
  return useQuery({
    queryFn: () => GetExpiredFood(),
    queryKey: ['dashboard', 'expired-food'],
  })
}

export const useGetFreshFood = () => {
  return useQuery({
    queryFn: () => GetFreshFood(),
    queryKey: ['dashboard', 'fresh-food'],
  })
}

export const useGetWarningFood = () => {
  return useQuery({
    queryFn: () => GetWarningFood(),
    queryKey: ['dashboard', 'warning-food'],
  })
}
