import Image from 'next/image'
import { FoodItem } from '@/shared/types/food'
import Button from '../../ui/button'
import { formatCurrency } from '@/shared/utils/utils'
import { useDiscardFood } from '@/features/bahan-saya/hooks/bahan-sayahooks'

export default function BuangKedaluwarsaChild({
  item,
  onClose,
}: {
  item: FoodItem
  onClose: () => void
}) {
  const { mutateAsync: discardFood } = useDiscardFood()

  const handleDiscardFood = async () => {
    await discardFood({
      id: item.id,
      data: { discarded_weight: item.current_weight },
    })
    onClose()
  }

  return (
    <div className="w-full">
      <div className="bg-redlight flex items-center justify-center mx-auto rounded-xl p-3 w-[60px] h-[60px]">
        <Image src="/assets/trash.webp" alt="trash" width={37} height={37} />
      </div>

      <h3 className="text-center text-xl font-roboto-500 text-hitamdikit">
        Bahan ini udah kedaluwarsa
      </h3>
      <p className="text-sm font-roboto-400 pt-3 text-center text-hitamdikit">
        Sayang banget, tapi harus dibuang biar dapur tetap aman ya
      </p>
      <div
        className={`mt-6 flex p-3 bg-redlight border border-merah  rounded-full items-center w-full max-w-[186px] justify-center mx-auto`}
      >
        <p className="text-xs font-roboto-400">
          {item.name} • stok : {item.current_weight} {item.unit_weight}
        </p>
      </div>
      <p className="text-sm font-roboto-400 mt-6 text-center text-hitamdikit">
        Kerugian yang dibuang
      </p>
      <p className="text-sm sm:text-lg lg:text-xl font-bold text-center text-merah mt-3">
        {formatCurrency(item.total_price)}
      </p>
      <div className="w-[336px] h-[4px] bg-redlight rounded-full mt-6" />
      <div className="flex gap-2 mt-6">
        <Button
          onClick={onClose}
          variant="primary"
          size="md"
          className="w-full text-merah border border-merah"
        >
          Batal
        </Button>
        <Button
          onClick={() => handleDiscardFood()}
          variant="primary"
          size="md"
          className="w-full bg-merah text-white"
        >
          Buang
        </Button>
      </div>
    </div>
  )
}
