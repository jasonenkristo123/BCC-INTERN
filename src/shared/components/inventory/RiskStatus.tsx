import { useActiveStatus } from '../../store/food-store'
import { TriangleAlert } from 'lucide-react'

export default function RiskStatus() {
  const isActive = useActiveStatus((s) => s.isActive)
  return (
    <>
      {!isActive && (
        <div className="w-full bg-pinks flex py-[10px] px-4 items-center gap-3 mb-8 rounded-lg">
          <TriangleAlert className="text-merah w-6 h-6" />
          <p className="text-merah text-sm lg:text-base font-roboto-500">
            Mode Risk Ranking aktif — bahan diurutkan berdasarkan Risk Score =
            Harga ÷ Sisa Hari. Gunakan bahan dengan skor tertinggi terlebih
            dahulu untuk meminimalkan kerugian.
          </p>
        </div>
      )}
    </>
  )
}
