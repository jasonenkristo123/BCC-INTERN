import Image from 'next/image'
import FoodExpiryCard from '@/shared/components/ui/dashboard-cardpriority'
import TrendChart from '@/shared/components/chart/trendChart'
import { useGetAllFood } from '@/features/bahan-saya/hooks/bahan-sayahooks'
import { getExpiryStatus } from '@/shared/utils/utils'

export default function DashBoardTwoGrid() {
  const { data: ALL_ITEMS, isLoading } = useGetAllFood()

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-text-primary"></div>
      </div>
    )
  }

  // Filter items that are warning or expiring, then sort by risk_score
  const sortedItems = [...(ALL_ITEMS || [])]
    .filter((item) => {
      const status = getExpiryStatus(item.expiry_date).status
      return status === 'warning' || status === 'expired'
    })
    .sort((a, b) => b.risk_score - a.risk_score)
    .slice(0, 3)

  const handleUse = () => {}

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-6 lg:py-8 px-4 lg:px-8">
      <div className="bg-white rounded-xl p-5">
        <div className="flex justify-between items-center pb-4 lg:mb-0">
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
          <p className="font-roboto-400 text-base text-hitamdikit">Bulanan</p>
        </div>
        <TrendChart />
      </div>
    </div>
  )
}
