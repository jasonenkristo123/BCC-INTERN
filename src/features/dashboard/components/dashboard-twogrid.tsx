'use client'
import Image from 'next/image'
import { useState } from 'react'
import FoodExpiryCard from '@/shared/components/ui/dashboard-cardpriority'
import TrendChart from '@/shared/components/chart/trendChart'
import { ALL_ITEMS } from '@/shared/dummyData/foodData'

const options = [
  {
    value: 'option1',
    label: 'Harian',
  },
  {
    value: 'option2',
    label: 'Mingguan',
  },
  {
    value: 'option3',
    label: 'Bulanan',
  },
  {
    value: 'option4',
    label: 'Tahunan',
  },
]

export default function DashBoardTwoGrid() {
  const [selectedOption, setSelectedOption] = useState(options[0].value)

  const sortedItems = [...ALL_ITEMS]
    .sort((a, b) => b.riskScore - a.riskScore)
    .slice(0, 3)

  const handleUse = (id: string) => {
    console.log(`Using item with id: ${id}`)
    // Add logic here to remove item or update state
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-6 lg:py-8 px-4 lg:px-8">
      <div className="bg-white rounded-xl p-5">
        <div className="flex justify-between items-center mb-4 lg:mb-0">
          <h2 className="font-roboto-500 text-base md:text-lg lg:text-xl xl:text-2xl">
            Prioritas Penggunaan
          </h2>
          <Image
            src="/assets/lampu.webp"
            alt="lampu"
            width={32}
            height={32}
            className="w-6 h-6"
          />
        </div>
        <div className="flex flex-col gap-3">
          {sortedItems.length === 0 ? (
            <div className="flex items-center justify-center text-xl">
              Tidak ada bahan yang tersedia!
            </div>
          ) : (
            sortedItems.map((item) => (
              <FoodExpiryCard key={item.id} item={item} onUse={handleUse} />
            ))
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl p-5 lg:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 pb-5">
          <h2 className="font-roboto-500 text-base md:text-lg lg:text-xl xl:text-2xl">
            Trend Bahan Kedaluwarsa Bulanan
          </h2>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1 cursor-pointer text-sm sm:text-base w-full sm:w-auto"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <TrendChart />
      </div>
    </div>
  )
}
