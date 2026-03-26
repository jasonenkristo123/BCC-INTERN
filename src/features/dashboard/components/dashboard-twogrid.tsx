'use client'
import Image from 'next/image'
import { useState } from 'react'
import { FoodItem, dataDummy, dataDummyTren } from '../dataDummy/dataDummy'
import FoodExpiryCard from '@/shared/components/ui/dashboard-cardpriority'
import { Bar } from 'react-chartjs-2'
import 'chart.js/auto'

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
  const [items, setItems] = useState<FoodItem[]>(dataDummy)

  function handleUse(id: number) {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const sliceItems = items.slice(0, 3)

  const sortedItems = [...sliceItems].sort((a, b) => a.daysLeft - b.daysLeft)

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
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
          <h2 className="font-roboto-500 text-base md:text-lg lg:text-xl xl:text-2xl">
            Trend Bahan Kedaluwarsa Mingguan
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
        <div className="h-[220px] sm:h-[280px] lg:h-[314px]">
          <Bar
            data={{
              labels: dataDummyTren.map((data) => data.days),
              datasets: [
                {
                  label: 'Bahan Kedaluwarsa',
                  data: dataDummyTren.map((data) => data.expired),
                  backgroundColor: '#1c996d',
                  borderRadius: 5,
                  barThickness: 'flex',
                  maxBarThickness: 50,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                  min: 0,
                  max: 60,
                  ticks: {
                    stepSize: 5,
                  },
                },
              },
              animations: {
                y: {
                  duration: 5000,
                  easing: 'easeOutQuart',
                  from: 0,
                },
                opacity: {
                  duration: 5000,
                  from: 1,
                  to: 0,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  )
}
