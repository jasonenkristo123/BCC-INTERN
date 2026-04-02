'use client'

import BahanSayaCard from '../ui/bahan-saya-card'
import Image from 'next/image'
import { useGetAllFood } from '@/features/bahan-saya/hooks/bahan-sayahooks'
import { useGetWarningFood } from '@/features/dashboard/hooks/dashboard-hooks'
import { useGetExpiredFood } from '@/features/dashboard/hooks/dashboard-hooks'

export default function StatsSummary() {
  const { data: ALL_ITEMS } = useGetAllFood()
  const { data: WarningFood } = useGetWarningFood()
  const { data: ExpiredFood } = useGetExpiredFood()
  const warningFoodCount = WarningFood?.data?.[0]?.warning_count ?? 0
  const expiredFoodCount = ExpiredFood?.data?.[0]?.expired_count ?? 0

  return (
    <div className="px-8 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <BahanSayaCard className="bg-birumuda border-text-primary flex">
        <Image
          src="/assets/beverages.webp"
          alt="beverages"
          unoptimized={true}
          width={77}
          height={77}
        />
        <div className="flex flex-col justify-center ml-3">
          <h3 className="font-roboto-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-text-primary ">
            {ALL_ITEMS?.length}
          </h3>
          <p className="font-roboto-400 text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-text-secondary">
            Bahan Tersedia
          </p>
        </div>
      </BahanSayaCard>
      <BahanSayaCard className="bg-orange-muda border-orange-dikitmuda flex">
        <Image
          src="/assets/warning.webp"
          alt="warning"
          unoptimized={true}
          width={77}
          height={77}
        />
        <div className="flex flex-col justify-center ml-3">
          <h3 className="font-roboto-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-orangnormal ">
            {warningFoodCount}
          </h3>
          <p className="font-roboto-400 text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-text-secondary">
            Mendekati Kedaluwarsa
          </p>
        </div>
      </BahanSayaCard>
      <BahanSayaCard className="bg-redlight border-merah-dikitmuda flex">
        <Image
          src="/assets/trashs.webp"
          alt="trash"
          unoptimized={true}
          width={77}
          height={77}
        />
        <div className="flex flex-col justify-center ml-3">
          <h3 className="font-roboto-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-merah ">
            {expiredFoodCount}
          </h3>
          <p className="font-roboto-400 text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-text-secondary">
            Harus Dibuang
          </p>
        </div>
      </BahanSayaCard>
    </div>
  )
}
