'use client'
import { Calendar } from 'lucide-react'
import { useMemo, useEffect } from 'react'
import FadeIn from '@/shared/animations/Fadein'

import { getAvailableMonths } from '@/shared/utils/utils'
import { useSelectMonth } from '../../../shared/store/food-store'
import WasteTrackerStats from './waste-tracker-stats'
import WasteTrackerTwoGridPanel from './waste-tracker-twogrid-panel'
import WasteTrackerTrend from './waste-tracker-trend'
import WasteTrackerFoodRow from './waste-tracker-foodrow'
import { useGetAllFood } from '@/features/bahan-saya/hooks/bahan-sayahooks'

export default function WasteTrackerPages() {
  const { data: ALL_ITEMS } = useGetAllFood()
  const availableMonths = useMemo(
    () => getAvailableMonths(ALL_ITEMS || []),
    [ALL_ITEMS],
  )
  const selectedMonth = useSelectMonth((s) => s.selectedMonth)
  const setSelectedMonth = useSelectMonth((s) => s.setSelectedMonth)

  useEffect(() => {
    if (availableMonths.length > 0 && !selectedMonth) {
      setSelectedMonth(availableMonths[0].value)
    }
  }, [availableMonths, setSelectedMonth, selectedMonth])

  return (
    <section className="w-full min-h-screen bg-skyblue pt-20 pb-10 lg:pb-0">
      <FadeIn>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-6 lg:py-10 px-4 lg:px-8 gap-6 lg:gap-0">
          <div className="flex flex-col gap-1 lg:gap-2">
            <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-roboto-500">
              Analisis Bahan Terbuang
            </h1>
            <p className="font-roboto-400 text-text-secondary/90 text-sm md:text-base lg:text-lg xl:text-xl">
              Pantau performa pengurangan limbah makanan kamu
            </p>
          </div>
          <div className="w-full lg:w-auto mt-4 lg:mt-0">
            <div className="bg-primaryskyblue flex gap-4 items-center py-[10px] px-4">
              <Calendar />
              <select
                className="bg-transparent border-none focus:ring-0 cursor-pointer pr-4"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
              >
                {availableMonths.map((month) => (
                  <option key={month.value} value={month.value}>
                    {month.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <WasteTrackerStats />
        <WasteTrackerTwoGridPanel />
        <WasteTrackerTrend />
        <WasteTrackerFoodRow />
      </FadeIn>
    </section>
  )
}
