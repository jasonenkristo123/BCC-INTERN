import { useSelectMonth } from '../../../shared/store/food-store'
import { useMemo } from 'react'
import { getAvailableMonths, formatCurrency } from '@/shared/utils/utils'
import { Doughnut } from 'react-chartjs-2'
import { FoodItem } from '@/shared/types/food'
import 'chart.js/auto'
import RankingPanelCategory from '../../../shared/components/ui/ranking-panel-category'
import { useGetAllFood } from '@/features/bahan-saya/hooks/bahan-sayahooks'
import {
  useGetCategoryLossPerMonth,
  useGetRiskRankingPanel,
} from '../hooks/waste-trackerhooks'

const categoryColorMap: Record<string, string> = {
  'Umbi-umbian': '#F09595',
  'Sayur-sayuran': '#97C459',
  'Buah-buahan': '#ED93B1',
  Daging: '#F0997B',
  Seafood: '#5DCAA5',
  Telur: '#D3D1C7',
  'Produk Susu': '#85B7EB',
  'Rempah-rempah': '#F5C4B3',
  'Bumbu Dapur': '#FAC775',
  'Biji-bijian': '#EF9F27',
  'Kacang-kacangan & Legum': '#C0DD97',
}

export default function WasteTrackerTwoGridPanel() {
  const { data: ALL_ITEMS } = useGetAllFood()
  const availableMonths = useMemo(
    () => getAvailableMonths(ALL_ITEMS || []),
    [ALL_ITEMS],
  )
  const selectedMonth = useSelectMonth((s) => s.selectedMonth)
  const { data: categoryLostPerMonth } = useGetCategoryLossPerMonth()
  const { data: RiskRankingPanel } = useGetRiskRankingPanel()

  const monthLabel = useMemo(() => {
    return (
      availableMonths.find((m) => m.value === selectedMonth)?.label ||
      selectedMonth
    )
  }, [availableMonths, selectedMonth])

  const chartData = useMemo(() => {
    const categoryLostPerMonthData: {
      month: string
      categories: {
        category: string
        total_price: number
        percentage: number
      }[]
    }[] = categoryLostPerMonth?.data || []

    const monthData = categoryLostPerMonthData.find(
      (d) => d.month === selectedMonth,
    )
    const categories = monthData?.categories || []

    const filteredCategories = categories.filter((c) => c.total_price > 0)

    // Sort descending from highest total_price
    const sortedCategories = [...filteredCategories].sort(
      (a, b) => b.total_price - a.total_price,
    )

    const labels = sortedCategories.map((c) => c.category)
    const data = sortedCategories.map((c) => c.total_price)
    const bgColors = labels.map(
      (cat: string) => categoryColorMap[cat] || '#C1C1C1',
    )
    const totalValue = data.reduce((acc: number, curr: number) => acc + curr, 0)

    const rawData = sortedCategories.map(
      (c) => [c.category, c.total_price] as [string, number],
    )

    return {
      labels,
      data,
      bgColors,
      rawData,
      totalValue,
      chartProps: {
        labels,
        datasets: [
          {
            data,
            backgroundColor: bgColors,
            hoverOffset: 4,
            borderWidth: 0,
            circumference: 360,
          },
        ],
      },
    }
  }, [categoryLostPerMonth, selectedMonth])

  const topRiskCategories = useMemo(() => {
    const rankingData: {
      food_name: string
      current_weight: number
      unit_of_weight: string
      price_of_unit: number
      days_left: number
      risk_score: number
    }[] = RiskRankingPanel?.data || []

    const sortedArray = [...rankingData]
      .sort((a, b) => b.risk_score - a.risk_score)
      .slice(0, 5)

    const maxScore = sortedArray.length > 0 ? sortedArray[0].risk_score : 100

    return sortedArray.map((data, index) => {
      const progressScore = (data.risk_score / Math.max(1, maxScore)) * 90

      // Attempt to find the full item from ALL_ITEMS to grab its image
      const matchedItem = ALL_ITEMS?.find(
        (food: FoodItem) =>
          (food.name?.toLowerCase() || '') ===
          (data.food_name?.toLowerCase() || ''),
      )

      // If we found it, use its image. Otherwise default to a placeholder
      const imageSrc = matchedItem?.image?.image || '/kategori/umbi.webp'

      // Calculate the total price based on current weight and price unit
      const totalPrice = data.current_weight * data.price_of_unit

      return {
        rank: index + 1,
        categoryName: data.food_name,
        quantity: `${data.current_weight} ${data.unit_of_weight}`.trim(),
        riskScore: progressScore,
        totalPrice: totalPrice,
        image: imageSrc,
      }
    })
  }, [RiskRankingPanel, ALL_ITEMS])

  return (
    <div className="mt-8 px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white px-6 py-8 rounded-xl shadow-lg border border-gray-100">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 sm:mb-8 gap-2">
          <h2 className="text-lg xl:text-xl font-roboto-500 text-hitamdikit">
            Bahan Terbuang per Kategori
          </h2>
          <p className="text-sm font-roboto-400 text-hitamdikit/50">
            {monthLabel}
          </p>
        </div>

        {chartData.totalValue > 0 ? (
          <>
            <div className="relative h-[240px] flex items-center justify-center">
              <Doughnut
                data={chartData.chartProps}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                    tooltip: {
                      callbacks: {
                        label: (context) => {
                          const label = context.label || ''
                          const value = context.parsed
                          const percentage = (
                            (value / chartData.totalValue) *
                            100
                          ).toFixed(0)
                          return `${label}: ${formatCurrency(value)} (${percentage}%)`
                        },
                      },
                    },
                  },
                  cutout: '65%',
                  circumference: 360,
                  animation: {
                    animateRotate: true,
                    animateScale: false,
                  },
                  animations: {
                    circumference: {
                      from: 0,
                      duration: 10000,
                      easing: 'easeOutCubic',
                    },
                  },
                }}
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-2">
                <span className="text-hitamdikit/50 text-base lg:text-xl font-roboto-500">
                  Total
                </span>
                <span className="text-hitamdikit text-2xl font-bold font-roboto-500">
                  100%
                </span>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {chartData.rawData.map(([cat, value], index) => {
                const percentage = (
                  (value / chartData.totalValue) *
                  100
                ).toFixed(0)
                return (
                  <div
                    key={cat}
                    className="flex items-center justify-between text-sm sm:text-[15px] gap-2"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <div
                        className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full shrink-0"
                        style={{ backgroundColor: chartData.bgColors[index] }}
                      />
                      <span className="text-hitamdikit font-roboto-400 truncate">
                        {cat}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-8 justify-end min-w-max">
                      <span className="text-hitamdikit text-xs sm:text-sm font-roboto-400">
                        {formatCurrency(value)
                          .toUpperCase()
                          .replace('RP', 'RP ')}
                      </span>
                      <span className="text-hitamdikit font-roboto-500 font-bold w-10 sm:w-12 text-right">
                        {percentage}%
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-[200px] text-hitamdikit/30 italic">
            <p>Tidak ada data bahan terbuang</p>
            <p className="text-xs">untuk bulan ini</p>
          </div>
        )}
      </div>

      <div className="bg-white px-6 py-8 rounded-xl shadow-lg border border-gray-100">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-6 sm:mb-8">
          <h2 className="font-roboto-500 text-lg xl:text-xl text-hitamdikit">
            Risk Ranking - Kategori Banyak Terbuang
          </h2>
          <p className="text-hitamdikit/50 font-roboto-400 text-sm">
            Berdasarkan nilai
          </p>
        </div>

        <div className="space-y-2 flex flex-col">
          {topRiskCategories.length > 0 ? (
            topRiskCategories.map((cat) => (
              <RankingPanelCategory
                key={cat.rank}
                rank={cat.rank}
                image={cat.image}
                categoryName={cat.categoryName}
                quantity={cat.quantity}
                riskScore={cat.riskScore}
                totalPrice={cat.totalPrice}
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-[200px] text-hitamdikit/30 italic">
              <p>Tidak ada data ranking</p>
              <p className="text-xs">untuk bulan ini</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
