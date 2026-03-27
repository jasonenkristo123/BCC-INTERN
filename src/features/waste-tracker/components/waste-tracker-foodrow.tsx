'use client'

import { useMemo } from 'react'
import Image from 'next/image'
import { ALL_ITEMS, ALL_CATEGORIES } from '@/shared/dummyData/foodData'
import {
  filterItemsByMonth,
  getExpiryStatus,
  formatCurrency,
  formatDate,
} from '@/shared/utils/utils'
import { useSelectMonth, useInventoryStore } from '@/shared/store/food-store'
import { useFilteredItems } from '@/shared/lib/useFilteredItems'
import Pagination from '@/shared/components/inventory/Pagination'
import EmptyState from '@/shared/components/inventory/EmptyState'
import type { FoodCategory } from '@/shared/types/food'
import SearchBar from '@/shared/components/ui/searchBar'
import { useState } from 'react'

export default function WasteTrackerFoodRow() {
  const selectedMonth = useSelectMonth((s) => s.selectedMonth)
  const selectedCategory = useInventoryStore((s) => s.filters.category)
  const setCategory = useInventoryStore((s) => s.setCategory)
  const setSearch = useInventoryStore((s) => s.setSearch)
  const currentSearch = useInventoryStore((s) => s.filters.search)
  const [localValue, setLocalValue] = useState(currentSearch)

  // Derived expired items for the selected month
  const expiredItems = useMemo(() => {
    const filteredByMonth = filterItemsByMonth(ALL_ITEMS, selectedMonth)
    return filteredByMonth.filter(
      (item) => getExpiryStatus(item.expiredEstimation).status === 'expired',
    )
  }, [selectedMonth])

  const { paginatedItems, totalItems } = useFilteredItems(expiredItems)

  return (
    <div className="mt-6 md:mt-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-5 mb-6">
        {/* Search Bar */}
        <div className="w-full sm:w-[320px] relative">
          <SearchBar
            localValue={localValue}
            setLocalValue={setLocalValue}
            setSearch={setSearch}
          />
        </div>

        {/* Categories */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <span className="text-sm font-roboto-400 text-hitamdikit hidden sm:block">
            Kategori:
          </span>
          <div className="flex flex-wrap items-center gap-2 lg:gap-3 w-full">
            {ALL_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setCategory(cat as FoodCategory | 'Semua')}
                  className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-roboto-500 whitespace-nowrap transition-all duration-200 shrink-0 ${
                    isSelected
                      ? 'bg-text-primary text-white shadow-md'
                      : 'bg-gray-100/80 text-gray-600 hover:bg-emerald-50 hover:text-text-primary'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-10 w-full">
        {/* Headers */}
        <div className="hidden lg:flex items-center px-7 py-6 border-b-2 border-text-primary/60 bg-white">
          <div className="flex-[1.5] pl-[74px]">
            <ColHeader>Nama Bahan</ColHeader>
          </div>
          <div className="flex-1 text-center pr-8">
            <ColHeader>Tanggal Dibuang</ColHeader>
          </div>
          <div className="flex-1 text-center pr-10">
            <ColHeader>Jumlah</ColHeader>
          </div>
          <div className="flex-1 text-center pr-5">
            <ColHeader>Kerugian</ColHeader>
          </div>
        </div>

        {/* Rows */}
        <div className="flex flex-col w-full divide-y divide-gray-50 lg:divide-y-0">
          {paginatedItems.length > 0 ? (
            paginatedItems.map((item, index) => {
              const getBgColor =
                index % 2 !== 0
                  ? 'bg-linear-to-r from-bg-primaryskyblue to-white'
                  : 'bg-white'
              return (
                <div
                  key={item.id}
                  className={`flex flex-col lg:flex-row lg:items-center px-4 sm:px-6 lg:px-8 py-5 lg:py-6 ${getBgColor} transition-colors duration-200 group`}
                >
                  {/* Mobile labels */}
                  <div className="flex items-center gap-4 lg:flex-[1.5] min-w-0">
                    <div className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] lg:w-[58px] lg:h-[58px] rounded-xl bg-white border border-gray-100 flex items-center justify-center overflow-hidden shrink-0 shadow-sm relative">
                      {item.image ? (
                        <Image
                          src={item.image}
                          width={50}
                          height={36}
                          alt={item.name}
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100" />
                      )}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <p className="font-roboto-600 text-sm sm:text-base text-hitamdikit truncate">
                        {item.name}
                      </p>
                      <p className="font-roboto-400 text-xs sm:text-sm text-hitamdikit/60 truncate">
                        Kategori {item.category}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-4 mt-5 lg:mt-0 lg:flex lg:flex-3 lg:items-center w-full text-sm sm:text-base font-semibold text-hitamdikit">
                    <div className="lg:flex-1 lg:text-center">
                      <span className="lg:hidden text-xs text-hitamdikit/60 block mb-1 font-normal">
                        Tanggal Dibuang
                      </span>
                      {formatDate(item.expiredEstimation)}
                    </div>
                    <div className="lg:flex-1 lg:text-center">
                      <span className="lg:hidden text-xs text-hitamdikit/60 block mb-1 font-normal">
                        Jumlah
                      </span>
                      {item.quantity}
                    </div>
                    <div className="col-span-2 sm:col-span-1 lg:flex-1 lg:text-center">
                      <span className="lg:hidden text-xs text-hitamdikit/60 block mb-1 font-normal">
                        Kerugian
                      </span>
                      <span className="text-red-500 lg:text-hitamdikit">
                        {formatCurrency(item.price)}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <EmptyState />
          )}
        </div>

        {/* Pagination */}
        {totalItems > 0 && (
          <div className="px-5 py-6 border-t border-gray-100">
            <Pagination totalItems={totalItems} />
          </div>
        )}
      </div>
    </div>
  )
}

function ColHeader({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[14px] font-bold font-roboto-600 text-hitamdikit">
      {children}
    </span>
  )
}
