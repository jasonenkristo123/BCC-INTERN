import { useMemo } from 'react'
import { Bar } from 'react-chartjs-2'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { useGetAllExpiredFoodByMonth } from '@/features/waste-tracker/hooks/waste-trackerhooks'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function TrendChart() {
  const { data: ExpiredFoodByMonth } = useGetAllExpiredFoodByMonth()

  const processedData = useMemo(() => {
    const rawData = ExpiredFoodByMonth?.data || []
    const aggregation: Record<
      string,
      { month: string; expired_count: number; sortKey: string }
    > = {}

    rawData.forEach((item) => {
      const date = new Date(item.discarded_date)
      if (isNaN(date.getTime())) return

      const monthName = date.toLocaleString('id-ID', { month: 'short' })
      const year = date.getFullYear()
      const sortKey = `${year}-${String(date.getMonth() + 1).padStart(2, '0')}`

      if (!aggregation[sortKey]) {
        aggregation[sortKey] = {
          month: monthName,
          expired_count: 0,
          sortKey,
        }
      }
      aggregation[sortKey].expired_count += 1
    })

    return Object.values(aggregation).sort((a, b) =>
      a.sortKey.localeCompare(b.sortKey),
    )
  }, [ExpiredFoodByMonth])

  const maxCount = Math.max(10, ...processedData.map((d) => d.expired_count))

  return (
    <div className="h-[340px] sm:h-[360px] lg:h-[380px]">
      <Bar
        data={{
          labels: processedData.map((d) => d.month),
          datasets: [
            {
              label: 'Bahan Kedaluwarsa',
              data: processedData.map((d) => d.expired_count),
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
              max: maxCount + 5,
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
          },
        }}
      />
    </div>
  )
}
