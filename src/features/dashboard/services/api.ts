import { api } from '@/shared/lib/axios'

export const GetConsumedFood = async () => {
  const res = await api.get('/food_status/consumed')
  return res.data
}

export const GetDiscardedFood = async () => {
  const res = await api.get('/food_status/discarded')
  return res.data
}

export const GetWarningFood = async () => {
  const res = await api.get('/food_status/warning')
  return res.data
}

export const GetExpiredFood = async () => {
  const res = await api.get('/food_status/expired')
  return res.data
}

export const GetFreshFood = async () => {
  const res = await api.get('/food_status/fresh')
  return res.data
}
