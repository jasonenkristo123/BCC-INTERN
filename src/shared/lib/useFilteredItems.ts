import { useMemo } from 'react'
import { useInventoryStore } from '../store/food-store'
import type { FoodItem } from '@/shared/types/food'

export function useFilteredItems(allItems: FoodItem[]) {
  const { filters, currentPage, itemsPerPage } = useInventoryStore()

  const filteredItems = useMemo(() => {
    let result = [...allItems]

    // Search
    if (filters.search.trim()) {
      const q = filters.search.toLowerCase().trim()
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.storageLocation.toLowerCase().includes(q),
      )
    }

    // Category
    if (filters.category !== 'Semua') {
      result = result.filter((item) => item.category === filters.category)
    }

    // Storage Location
    if (filters.storageLocation !== 'Semua') {
      result = result.filter(
        (item) => item.storageLocation === filters.storageLocation,
      )
    }

    // Sort
    result.sort((a, b) => {
      let comparison = 0
      switch (filters.sortBy) {
        case 'name':
          comparison = a.name.localeCompare(b.name, 'id')
          break
        case 'expiredEstimation':
          comparison =
            new Date(a.expiredEstimation).getTime() -
            new Date(b.expiredEstimation).getTime()
          break
        case 'riskScore':
          comparison = a.riskScore - b.riskScore
          break
        case 'price':
          comparison = a.price - b.price
          break
      }
      return filters.sortOrder === 'asc' ? comparison : -comparison
    })

    return result
  }, [allItems, filters])

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
  const safePage = Math.min(currentPage, Math.max(1, totalPages))
  const startIdx = (safePage - 1) * itemsPerPage
  const paginatedItems = filteredItems.slice(startIdx, startIdx + itemsPerPage)

  return {
    filteredItems,
    paginatedItems,
    totalItems: filteredItems.length,
    totalPages,
    currentPage: safePage,
  }
}
