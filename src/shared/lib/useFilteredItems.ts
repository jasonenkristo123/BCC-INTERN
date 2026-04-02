import { useMemo } from 'react'
import { useInventoryStore } from '../store/food-store'

interface BaseFilterableItem {
  name?: string
  category?: string
  storage_location?: string
  expiry_date?: string | Date
  discarded_date?: string
  risk_score?: number
  total_price?: number
  total_loss?: number
}

export function useFilteredItems<T extends BaseFilterableItem>(allItems: T[]) {
  const { filters, currentPage, itemsPerPage } = useInventoryStore()

  const filteredItems = useMemo(() => {
    let result = [...allItems]

    // Search
    if (filters.search.trim()) {
      const q = filters.search.toLowerCase().trim()
      result = result.filter(
        (item) =>
          item.name?.toLowerCase().includes(q) ||
          item.category?.toLowerCase().includes(q) ||
          item.storage_location?.toLowerCase().includes(q),
      )
    }

    // Category
    if (filters.category !== 'Semua') {
      result = result.filter((item) => item.category === filters.category)
    }

    // Storage Location
    if (filters.storageLocation !== 'Semua') {
      result = result.filter(
        (item) => item.storage_location === filters.storageLocation,
      )
    }

    // Sort
    result.sort((a, b) => {
      let comparison = 0
      switch (filters.sortBy) {
        case 'name':
          comparison = (a.name || '').localeCompare(b.name || '', 'id')
          break
        case 'expiredEstimation': {
          const dateA = new Date(
            a.expiry_date || a.discarded_date || 0,
          ).getTime()
          const dateB = new Date(
            b.expiry_date || b.discarded_date || 0,
          ).getTime()
          comparison = dateA - dateB
          break
        }
        case 'riskScore':
          comparison = (a.risk_score || 0) - (b.risk_score || 0)
          break
        case 'price': {
          const priceA = a.total_price ?? a.total_loss ?? 0
          const priceB = b.total_price ?? b.total_loss ?? 0
          comparison = priceA - priceB
          break
        }
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
