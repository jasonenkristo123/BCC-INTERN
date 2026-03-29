import { FoodItem } from '@/shared/types/food'
import Image from 'next/image'
import { getExpiryStatus } from '@/shared/utils/utils'
import SmallInputGunakanBahan from '../../ui/small-input-gunakanbahan'
import { SquarePen } from 'lucide-react'
import Button from '../../ui/button'
import { TJumlahBahanSchema } from '@/shared/schemas/modalSchema'

interface GunakanBahanChildProps {
  item: FoodItem
  onClose: () => void
}

export default function GunakanBahanChild({
  item,
  onClose,
}: GunakanBahanChildProps) {
  const expiryStatus = getExpiryStatus(item.expiredEstimation)

  const onSubmit = async (data: TJumlahBahanSchema) => {
    try {
      console.log('Menggunakan bahan:', data.jumlah)
    } catch {}
  }

  return (
    <div className="text-center ">
      <div
        className={`mx-auto w-[60px] h-[60px] rounded-xl flex items-center justify-center ${expiryStatus.bgModalColor}`}
      >
        <Image src={expiryStatus.iconModal} alt="icon" width={34} height={34} />
      </div>
      <div>
        <h1 className="text-hitamdikit font-roboto-600 lg:text-xl mt-6">
          Gunakan Bahan
        </h1>

        <div
          className={`mt-6 flex p-3 ${expiryStatus.cardBorderClass} ${expiryStatus.bgModalColor} rounded-full border items-center w-full max-w-[186px] justify-center mx-auto`}
        >
          <p className="text-xs font-roboto-400">
            {item.name} • stok : {item.quantity}
          </p>
        </div>
        <div
          className={`w-full max-w-[336px] ${expiryStatus.bgModalColor} h-[4px] mt-6 mx-auto`}
        />
        <p className="mt-6">Berapa yang digunakan?</p>

        <SmallInputGunakanBahan id="gunakan-form" onSubmit={onSubmit} />

        <div
          className={`max-w-[299px] mx-auto w-full flex p-3 gap-3 mt-6 items-center justify-center border ${expiryStatus.cardBorderClass} ${expiryStatus.bgModalColor} rounded-full`}
        >
          <SquarePen size={16} />
          <p className="text-xs font-roboto-400">
            Catatan: untuk masakan hari ini (opsional)
          </p>
        </div>

        <div className="mt-6 flex gap-2 ">
          <Button
            type="button"
            onClick={onClose}
            variant="primary"
            size="md"
            className={`${expiryStatus.badgeTextClass} w-full hover:opacity-80 hover:shadow-xl`}
          >
            Batal
          </Button>
          <Button
            form="gunakan-form"
            type="submit"
            variant="primary"
            size="md"
            className={`${expiryStatus.progressBarClass} w-full text-white hover:shadow-xl`}
          >
            Gunakan
          </Button>
        </div>
      </div>
    </div>
  )
}
