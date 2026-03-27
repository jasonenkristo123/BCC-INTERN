'use client'

import { useState } from 'react'
import { useInventoryStore, useActiveStatus } from '../../store/food-store'
import HandleSortByRisk from '../ui/handleSortByRisk'
import SearchBar from '../ui/searchBar'

export default function SearchBarWithRisk() {
  const setSearch = useInventoryStore((s) => s.setSearch)
  const currentSearch = useInventoryStore((s) => s.filters.search)
  const [localValue, setLocalValue] = useState(currentSearch)
  const isActive = useActiveStatus((s) => s.isActive)
  const setActive = useActiveStatus((s) => s.setActive)
  const setSortBy = useInventoryStore((s) => s.setSortBy)
  const setSortOrder = useInventoryStore((s) => s.setSortOrder)

  const handleSortByRisk = () => {
    const nextActive = !isActive
    setActive(nextActive)

    if (nextActive) {
      setSortBy('riskScore')
      setSortOrder('desc')
    } else {
      setSortBy('expiredEstimation')
      setSortOrder('asc')
    }
  }

  
  return (
    <div className="flex-1 min-w-0 w-full flex">
      <div className="flex items-center">
        <SearchBar
          localValue={localValue}
          setLocalValue={setLocalValue}
          setSearch={setSearch}
        />
      </div>
      <HandleSortByRisk 
        handleSortByRisk={handleSortByRisk} 
        isActive={isActive} 
      />
    </div>
  )
}
