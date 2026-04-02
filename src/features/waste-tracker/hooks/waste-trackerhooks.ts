import { useQuery } from '@tanstack/react-query'
import {
  GetCategoryLoss,
  GetEfficiencyScore,
  GetAllExpiredFoodByMonth,
  GetCategoryLossPerMonth,
  GetRiskRankingPanel,
} from '../services/api'

export const useGetCategoryLoss = () => {
  return useQuery({
    queryFn: () => GetCategoryLoss(),
    queryKey: ['waste-tracker', 'category-loss'],
  })
}

export const useGetEfficiencyScore = () => {
  return useQuery({
    queryFn: () => GetEfficiencyScore(),
    queryKey: ['waste-tracker', 'efficiency-score'],
  })
}

export const useGetCategoryLossPerMonth = () => {
  return useQuery({
    queryFn: () => GetCategoryLossPerMonth(),
    queryKey: ['waste-tracker', 'category-loss-per-month'],
  })
}

export const useGetAllExpiredFoodByMonth = () => {
  return useQuery({
    queryFn: () => GetAllExpiredFoodByMonth(),
    queryKey: ['waste-tracker', 'all-expired-food-by-month'],
  })
}

export const useGetRiskRankingPanel = () => {
  return useQuery({
    queryFn: () => GetRiskRankingPanel(),
    queryKey: ['waste-tracker', 'risk-ranking-panel'],
  })
}
