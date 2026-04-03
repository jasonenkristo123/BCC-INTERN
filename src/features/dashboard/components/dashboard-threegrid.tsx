import Button from '@/shared/components/ui/button'
import DashboardSmallCard from '@/shared/components/ui/dashboard-smallcard'
import Image from 'next/image'
import {
  useGetConsumedFood,
  useGetExpiredFood,
  useGetFreshFood,
  useGetWarningFood,
} from '../hooks/dashboard-hooks'

import { useGetCategoryLoss } from '@/features/waste-tracker/hooks/waste-trackerhooks'
import CountUp from '@/components/CountUp'

export default function DashBoardTreeGrid() {
  const { data: ConsumedFood, isLoading: isLoadingConsumed } =
    useGetConsumedFood()
  const { data: WarningFood, isLoading: isLoadingWarning } = useGetWarningFood()
  const { data: ExpiredFood, isLoading: isLoadingExpired } = useGetExpiredFood()
  const { data: SafeFood, isLoading: isLoadingSafe } = useGetFreshFood()
  const { data: CategoryLoss } = useGetCategoryLoss()

  if (
    isLoadingConsumed ||
    isLoadingWarning ||
    isLoadingExpired ||
    isLoadingSafe
  ) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-text-primary"></div>
      </div>
    )
  }

  const WarningFoodCount = WarningFood?.data?.[0]?.warning_count ?? 0
  const ExpiredFoodCount = ExpiredFood?.data?.[0]?.expired_count ?? 0

  const WarningFoodTotalPrice = WarningFood?.data?.[0]?.total_price ?? 0
  const SafeFoodTotalPrice = SafeFood?.data?.[0]?.total_price ?? 0
  const TotalPrice = WarningFoodTotalPrice + SafeFoodTotalPrice

  const ConsumeFoodPercentage =
    ConsumedFood?.data?.[0]?.consumed_percentage ?? 0
  const WarningFoodPercentage = WarningFood?.data?.[0]?.warning_percentage ?? 0
  const ExpiredFoodPercentage = ExpiredFood?.data?.[0]?.expired_percentage ?? 0

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-4 lg:px-8">
      <div className="bg-white rounded-xl shadow-lg p-4 lg:p-8">
        <div className="flex justify-between items-center">
          <h2 className="font-roboto-500 text-sm md:text-lg lg:text-xl xl:text-2xl">
            Status Bahan Total
          </h2>
          <Image
            src="/assets/beverages.webp"
            alt="beverage"
            width={32}
            height={32}
          />
        </div>
        <div>
          <h3 className="pt-4 text-xs sm:text-base lg:text-lg xl:text-xl font-roboto-400 mb-2">
            Total Bahan
          </h3>
          <div className="w-full bg-gray-200 rounded-full h-3 flex overflow-hidden">
            {(() => {
              const total =
                ConsumeFoodPercentage +
                WarningFoodPercentage +
                ExpiredFoodPercentage
              if (total === 0) return null

              return (
                <>
                  <div
                    className="bg-text-primary h-full transition-all duration-500"
                    style={{
                      width: `${(ConsumeFoodPercentage / total) * 100}%`,
                    }}
                  ></div>
                  <div
                    className="bg-orange-400 h-full transition-all duration-500"
                    style={{
                      width: `${(WarningFoodPercentage / total) * 100}%`,
                    }}
                  ></div>
                  <div
                    className="bg-red-500 h-full transition-all duration-500"
                    style={{
                      width: `${(ExpiredFoodPercentage / total) * 100}%`,
                    }}
                  ></div>
                </>
              )
            })()}
          </div>
          <div className="mt-2 flex flex-wrap gap-2 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="bg-text-primary rounded-full w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
              <p className="font-roboto-400 text-xs sm:text-base">Terpakai</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="bg-orange-400 rounded-full w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
              <p className="font-roboto-400 text-xs sm:text-base">Mendekati</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="bg-red-500 rounded-full w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
              <p className="font-roboto-400 text-xs sm:text-base">
                Kedaluwarsa
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2 mt-4">
            <DashboardSmallCard className="bg-orange-muda border-orangnormal/40 flex-1">
              <h3 className="font-roboto-600 text-orangnormal text-base sm:text-lg lg:text-xl xl:text-3xl">
                <CountUp
                  from={0}
                  to={WarningFoodCount}
                  direction="up"
                  duration={1}
                />
              </h3>
              <p className="font-roboto-500 text-xs sm:text-sm text-blackprimary">
                Mendekati Kedaluwarsa
              </p>
            </DashboardSmallCard>
            <DashboardSmallCard className="bg-white border-merah/40 flex-1">
              <h3 className="font-roboto-600 text-merah text-base sm:text-lg lg:text-xl xl:text-3xl">
                <CountUp
                  from={0}
                  to={ExpiredFoodCount}
                  direction="up"
                  duration={1}
                />
              </h3>
              <p className="font-roboto-500 text-xs sm:text-sm text-blackprimary">
                Sudah Kedaluwarsa
              </p>
            </DashboardSmallCard>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-4 lg:p-8">
        <div className="flex justify-between items-center">
          <h2 className="font-roboto-500 text-sm md:text-lg lg:text-xl xl:text-2xl">
            Ringkasan Kerugian
          </h2>
          <Image
            src="/assets/dollar.webp"
            alt="dollar"
            width={32}
            height={32}
          />
        </div>
        <div className="flex gap-2 items-center mt-8">
          <p className="font-roboto-500 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">
            Rp
          </p>
          <h3 className="font-roboto-500 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">
            <CountUp
              from={0}
              to={TotalPrice}
              separator="."
              direction="up"
              duration={1}
            />
          </h3>
        </div>
        <div className="flex flex-row gap-2 mt-8">
          <DashboardSmallCard className="bg-orange-muda border-orangnormal/40 flex-1">
            <h3 className="font-roboto-500 text-blackprimary text-xs sm:text-sm">
              Potensi Rugi:
            </h3>
            <div className="flex items-center gap-1 font-roboto-600 text-sm text-orangnormal sm:text-lg lg:text-xl xl:text-2xl">
              <p>Rp</p>
              <p className="font-roboto-600 text-sm text-orangnormal sm:text-lg lg:text-xl xl:text-2xl">
                <CountUp
                  from={0}
                  to={WarningFoodTotalPrice}
                  separator="."
                  direction="up"
                  duration={1}
                />
              </p>
            </div>
          </DashboardSmallCard>
          <DashboardSmallCard className="bg-white border-text-primary flex-1">
            <h3 className="font-roboto-500 text-blackprimary text-xs sm:text-sm">
              Terselamatkan
            </h3>
            <div className="flex items-center gap-1 font-roboto-600 text-sm text-text-primary sm:text-lg lg:text-xl xl:text-2xl">
              <p>Rp</p>
              <p className="font-roboto-600 text-sm text-text-primary sm:text-lg lg:text-xl xl:text-2xl">
                <CountUp
                  from={0}
                  to={SafeFoodTotalPrice}
                  separator="."
                  direction="up"
                  duration={1}
                />
              </p>
            </div>
          </DashboardSmallCard>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-4 lg:p-8">
        <div className="flex justify-between items-center">
          <h2 className="font-roboto-500 text-sm md:text-lg lg:text-xl xl:text-2xl">
            Bahan Paling Banyak Terbuang
          </h2>
          <Image src="/assets/trash.webp" alt="trash" width={32} height={32} />
        </div>

        {/* Dynamic top wasted categories from API */}
        <div className="flex flex-col justify-center mt-4">
          {(() => {
            const lossData: {
              category: string
              total_amount: number
              unit_of_weight: string
            }[] = CategoryLoss?.data || []
            const topCategories = [...lossData]
              .sort((a, b) => b.total_amount - a.total_amount)
              .slice(0, 2)

            if (topCategories.length === 0) {
              return (
                <p className="text-hitamdikit/50 italic text-sm">
                  Belum ada data bahan terbuang
                </p>
              )
            }

            return topCategories.map((cat, index) => (
              <div
                key={cat.category}
                className={`flex gap-4 ${index > 0 ? 'mt-4' : ''}`}
              >
                <div className="bg-redlight rounded-full w-12 h-12 flex items-center justify-center font-roboto-600">
                  {index + 1}
                </div>
                <Image
                  src={`/kategori/${cat.category === 'Sayur-sayuran' ? 'sayur' : cat.category === 'Buah-buahan' ? 'buahbuah' : cat.category === 'Daging' ? 'dagings' : cat.category === 'Seafood' ? 'seafood' : cat.category === 'Umbi-umbian' ? 'umbi' : cat.category === 'Telur' ? 'telur' : cat.category === 'Produk Susu' ? 'milk' : cat.category === 'Rempah-rempah' ? 'rempah' : cat.category === 'Bumbu Dapur' ? 'bumbu' : cat.category === 'Biji-bijian' ? 'biji' : 'kacang'}.webp`}
                  alt={cat.category}
                  width={32}
                  height={32}
                  className="w-14 h-14"
                />
                <div className="font-roboto-500">
                  <h4>{cat.category}</h4>
                  <p>
                    {cat.total_amount} {cat.unit_of_weight}
                  </p>
                </div>
              </div>
            ))
          })()}
        </div>
        <div>
          <Button
            variant="primary"
            size="lg"
            className="w-full mt-4 hover:bg-text-primary border-text-primary hover:text-white"
            href="/waste-tracker"
          >
            Lihat Semua Detail
          </Button>
        </div>
      </div>
    </div>
  )
}
