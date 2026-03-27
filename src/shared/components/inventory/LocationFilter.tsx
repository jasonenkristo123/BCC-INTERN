'use client'

import { useInventoryStore } from '../../store/food-store'
import { ALL_LOCATIONS } from '@/shared/dummyData/foodData'
import type { StorageLocation } from '@/shared/types/food'

export default function FilterSection() {
  const { storageLocation } = useInventoryStore((s) => s.filters)
  const setStorageLocation = useInventoryStore((s) => s.setStorageLocation)

  const locationOptions = ALL_LOCATIONS as readonly string[]

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Location Filter */}
      <div className="flex items-center gap-2">
        <span className="text-xs lg:text-sm font-roboto-400 text-hitamdikit whitespace-nowrap">
          Lokasi:
        </span>
        <div className="flex items-center gap-1.5">
          {locationOptions.map((loc) => (
            <button
              key={loc}
              onClick={() =>
                setStorageLocation(loc as StorageLocation | 'Semua')
              }
              className={`px-3 py-1.5 rounded-full text-xs font-roboto-500 whitespace-nowrap transition-all duration-200 ${
                storageLocation === loc
                  ? 'bg-text-primary text-white shadow-md '
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-text-primary hover:text-text-primary hover:bg-emerald-50'
              }`}
            >
              {loc}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
