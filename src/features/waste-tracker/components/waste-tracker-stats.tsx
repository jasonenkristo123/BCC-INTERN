import Image from 'next/image'
import BahanSayaCard from '@/shared/components/ui/bahan-saya-card'
import { formatCurrency } from '@/shared/utils/utils'
import {
  useGetDiscardedFood,
  useGetExpiredFood,
  useGetFreshFood,
} from '@/features/dashboard/hooks/dashboard-hooks'

export default function WasteTrackerStats() {
  const { data: ExpiredFood } = useGetExpiredFood()
  const { data: SafeFood } = useGetFreshFood()
  const { data: DiscardFood } = useGetDiscardedFood()

  const DiscardFoodPrice = DiscardFood?.data[0]?.total_price
  const ExpiredFoodPrice = ExpiredFood?.data[0]?.total_price
  const totalKerugian = DiscardFoodPrice + ExpiredFoodPrice
  const jumlahBahanTerbuang =
    (DiscardFood?.data?.[0]?.discarded_count ?? 0) +
    (ExpiredFood?.data?.[0]?.expired_count ?? 0)
  const nilaiTerselamatkan = SafeFood?.data?.[0]?.total_price ?? 0

  return (
    <div className="px-4 lg:px-8 gap-5 grid grid-cols-1 md:grid-cols-1 md:mx-6 lg:mx-0 lg:grid-cols-3">
      <BahanSayaCard className="bg-redlight border-merah flex gap-6">
        <Image
          src="/assets/trashs.webp"
          alt="trash"
          unoptimized={true}
          width={77}
          height={77}
        />
        <div className="flex flex-col justify-center ml-3">
          <h3 className="font-roboto-400 text-base lg:text-xl text-hitamdikit/50 ">
            Total Kerugian
          </h3>
          <p className="font-roboto-500 text-base sm:text-xl lg:text-2xl xl:text-3xl text-merah ">
            {formatCurrency(totalKerugian)}
          </p>
        </div>
      </BahanSayaCard>
      <BahanSayaCard className="bg-orange-muda border-orangnormal flex gap-6">
        <Image
          src="/assets/beverageorange.webp"
          alt="beverages"
          unoptimized={true}
          width={77}
          height={77}
          className="text-orangnormal"
        />
        <div className="flex flex-col justify-center ml-3">
          <h3 className="font-roboto-400 text-base lg:text-xl text-hitamdikit/50 ">
            Jumlah Bahan Terbuang
          </h3>
          <p className="font-roboto-500 text-base sm:text-xl lg:text-2xl xl:text-3xl text-orangnormal ">
            {jumlahBahanTerbuang}
          </p>
        </div>
      </BahanSayaCard>
      <BahanSayaCard className="bg-primaryskyblue border-text-primary   flex gap-6">
        <Image
          src="/assets/dollar.webp"
          alt="beverages"
          unoptimized={true}
          width={77}
          height={77}
        />
        <div className="flex flex-col justify-center ml-3">
          <h3 className="font-roboto-400 text-base lg:text-xl text-hitamdikit/50 ">
            Nilai Terselamatkan
          </h3>
          <p className="font-roboto-500 text-base sm:text-xl lg:text-2xl xl:text-3xl text-text-primary ">
            {formatCurrency(nilaiTerselamatkan)}
          </p>
        </div>
      </BahanSayaCard>
    </div>
  )
}
