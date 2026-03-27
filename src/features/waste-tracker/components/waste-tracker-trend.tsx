import TrendChart from '@/shared/components/chart/trendChart'
import { ALL_ITEMS } from '@/shared/dummyData/foodData'
import {
  filterItemsByMonth,
  formatCurrency,
  getExpiryStatus,
} from '@/shared/utils/utils'
import { useSelectMonth } from '@/shared/store/food-store'
import Button from '@/shared/components/ui/button'

export default function WasteTrackerTrend() {
  const items = ALL_ITEMS
  const selectedMonth = useSelectMonth((s) => s.selectedMonth)
  const filteredItemMonth = filterItemsByMonth(items, selectedMonth)
  const safe = filteredItemMonth.filter(
    (item) => getExpiryStatus(item.expiredEstimation).status === 'safe',
  )
  const warning = filteredItemMonth.filter(
    (item) => getExpiryStatus(item.expiredEstimation).status === 'warning',
  )

  const safeTotalPrice = safe.reduce((acc, item) => acc + item.price, 0)
  const warningTotalPrice = warning.reduce((acc, item) => acc + item.price, 0)
  const totalPrice = safeTotalPrice + warningTotalPrice

  return (
    <div className="px-4 lg:px-8 my-8 grid grid-cols-1 sm:grid-cols-2 gap-6 grid-rows-5">
      <div className="row-span-5 bg-white rounded-xl p-6 h-[482px] shadow-lg">
        <div className="flex items-center justify-between pb-8">
          <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-roboto-500 text-hitamdikit">
            Trend Bahan Kedaluwarsa Bulanan
          </h4>
          <p className="font-roboto-400 text-hitamdikit text-base">Bulanan</p>
        </div>
        <TrendChart />
      </div>
      <div className="row-span-3 bg-white h-[268px] rounded-xl py-8 px-6">
        <h2 className="font-roboto-500 text-base sm:text-lg lg:text-xl xl:text-2xl text-hitamdikit">
          Potensi penghematan bulanmu
        </h2>
        <p className="font-roboto-600 text-lg sm:text-xl lg:text-2xl xl:text-4xl text-hitamdikit pt-4">
          {formatCurrency(totalPrice)}
        </p>
        <p className="font-roboto-400 text-hitamdikit text-base lg:text-xl pt-4">
          masih bisa diselamatkan dari bahan mendekati kedaluwarsa
        </p>
        <Button
          variant="primary"
          href="/bahan-saya"
          size="lg"
          className="bg-text-primary font-roboto-500 text-white text-base mt-4"
        >
          Lihat Bahan Prioritas
        </Button>
      </div>
      <div className="row-span-2 bg-white h-[182px] rounded-xl py-8 px-6 shadow-lg">
        <h2 className="font-roboto-500 text-base sm:text-lg lg:text-xl xl:text-2xl text-hitamdikit">
          Skor Efisiensi
        </h2>
        <div className="mt-3 flex gap-3">
          <div className="w-[70px] h-[70px] rounded-full border-10 border-text-primary flex items-center justify-center">
            <span className="font-roboto-500 text-base sm:text-lg lg:text-xl xl:text-2xl text-hitamdikit">
              86
            </span>
          </div>
          <div>
            <h5 className="font-roboto-500 text-base sm:text-lg lg:text-xl text-hitamdikit">
              Sangat Baik
            </h5>
            <p className="font-roboto-400 text-hitamdikit text-base pt-3">
              Kamu lebih efisien 86% dari bulan lalu
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
