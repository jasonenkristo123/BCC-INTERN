import { create } from 'zustand'
import type { FilterState, FoodCategory, StorageLocation } from '../types/food'

interface InventoryStore {
  filters: FilterState
  currentPage: number
  itemsPerPage: number
  categorySliderIndex: number

  setSearch: (search: string) => void
  setCategory: (category: FoodCategory | 'Semua') => void
  setStorageLocation: (location: StorageLocation | 'Semua') => void
  setRiskLevel: (level: FilterState['riskLevel']) => void
  setSortBy: (sortBy: FilterState['sortBy']) => void
  setSortOrder: (order: FilterState['sortOrder']) => void
  setPage: (page: number) => void
  setCategorySliderIndex: (index: number) => void
}

type useSelectedMonth = {
  selectedMonth: string
  setSelectedMonth: (month: string) => void
}

type ActiveStatusProps = {
  setActive: (isActive: boolean) => void
  isActive: boolean
}

const defaultFilters: FilterState = {
  search: '',
  category: 'Semua',
  storageLocation: 'Semua',
  riskLevel: 'Semua',
  sortBy: 'expiredEstimation',
  sortOrder: 'desc',
}

export const useInventoryStore = create<InventoryStore>((set) => ({
  filters: defaultFilters,
  currentPage: 1,
  itemsPerPage: 4,
  categorySliderIndex: 0,

  setSearch: (search) =>
    set((s) => ({ filters: { ...s.filters, search }, currentPage: 1 })),

  setCategory: (category) =>
    set((s) => ({ filters: { ...s.filters, category }, currentPage: 1 })),

  setStorageLocation: (storageLocation) =>
    set((s) => ({
      filters: { ...s.filters, storageLocation },
      currentPage: 1,
    })),

  setRiskLevel: (riskLevel) =>
    set((s) => ({ filters: { ...s.filters, riskLevel }, currentPage: 1 })),

  setSortBy: (sortBy) =>
    set((s) => ({ filters: { ...s.filters, sortBy }, currentPage: 1 })),

  setSortOrder: (sortOrder) =>
    set((s) => ({ filters: { ...s.filters, sortOrder }, currentPage: 1 })),

  setPage: (currentPage) => set({ currentPage }),

  setCategorySliderIndex: (categorySliderIndex) => set({ categorySliderIndex }),
}))

export const useActiveStatus = create<ActiveStatusProps>((set) => ({
  isActive: false,
  setActive: (isActive) => set(() => ({ isActive })),
}))

export const useSelectMonth = create<useSelectedMonth>((set) => ({
  selectedMonth: '',
  setSelectedMonth: (month) => set(() => ({ selectedMonth: month })),
}))
