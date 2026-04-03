import { api } from '@/shared/lib/axios'

export const GetCategoryLoss = async () => {
  const res = await api.get('/waste_tracker/category_loss')
  console.log(res.data)
  return res.data
}

export const GetEfficiencyScore = async () => {
  const res = await api.get('/waste_tracker/efficiency_score')
  return res.data
}

export const GetCategoryLossPerMonth = async () => {
  const res = await api.get('/waste_tracker/category_loss_month')
  return res.data
}

export interface TExpiredFoodRecord {
  name: string
  discarded_date: string
  amount: number
  unit_of_weight: string
  total_loss: number
  category: string
}

export interface TExpiredFoodResponse {
  success: boolean
  message: string
  data: TExpiredFoodRecord[]
}

export const GetAllExpiredFoodByMonth =
  async (): Promise<TExpiredFoodResponse> => {
    const res = await api.get<TExpiredFoodResponse>(
      '/waste_tracker/discard_history',
    )
    return res.data
  }

export const GetRiskRankingPanel = async () => {
  const res = await api.get('/food/risk_ranking_panel')
  return res.data
}
