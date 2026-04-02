'use client'
import { FoodItem } from '@/shared/types/food'
import Image from 'next/image'
import { getExpiryStatus } from '@/shared/utils/utils'
import SmallInputGunakanBahan from '../../ui/small-input-gunakanbahan'
import { SquarePen } from 'lucide-react'
import Button from '../../ui/button'
import { useState } from 'react'
import {
  TJumlahBahanSchema,
  jumlahBahanSchema,
} from '@/shared/schemas/modalSchema'
import { useUpdateFoodUsage } from '@/features/bahan-saya/hooks/bahan-sayahooks'

interface GunakanBahanChildProps {
  item: FoodItem
  onClose: () => void
}

export default function GunakanBahanChild({
  item,
  onClose,
}: GunakanBahanChildProps) {
  const expiryStatus = getExpiryStatus(item.expiry_date)
  const {
    mutateAsync: updateFoodUsage,
    isPending,
    isError,
  } = useUpdateFoodUsage()
  const [submitError, setSubmitError] = useState<string | null>(null)

  const onSubmit = async (data: TJumlahBahanSchema) => {
    setSubmitError(null)
    try {
      await updateFoodUsage({
        id: item.id,
        data: data,
      })
      onClose()
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } }
      setSubmitError(
        error?.response?.data?.message || 'Gagal memperbarui penggunaan bahan.',
      )
    }
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
            {item.name} • stok : {item.current_weight} {item.unit_weight}
          </p>
        </div>
        <div
          className={`w-full max-w-[336px] ${expiryStatus.bgModalColor} h-[4px] mt-6 mx-auto`}
        />
        <p className="mt-6">Berapa yang digunakan?</p>

        <SmallInputGunakanBahan
          id={`gunakan-form-${item.id}`}
          onSubmit={onSubmit}
          schema={jumlahBahanSchema}
          fieldName="used_weight"
          maxWeight={item.current_weight}
          unitWeight={item.unit_weight}
        />

        <div className="h-4 mt-2">
          {(isError || submitError) && (
            <p className="text-red-500 text-xs text-center font-roboto-400 italic">
              {submitError || 'Terjadi kesalahan sistem'}
            </p>
          )}
        </div>
        <div
          className={`max-w-[299px] mx-auto w-full flex p-3 gap-3 mt-4 items-center justify-center border ${expiryStatus.cardBorderClass} ${expiryStatus.bgModalColor} rounded-full`}
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
            disabled={isPending}
          >
            Batal
          </Button>
          <Button
            form={`gunakan-form-${item.id}`}
            type="submit"
            variant="primary"
            size="md"
            className={`${expiryStatus.progressBarClass} w-full text-white hover:shadow-xl`}
            disabled={isPending}
          >
            {isPending ? 'Memproses...' : 'Gunakan'}
          </Button>
        </div>
      </div>
    </div>
  )
}
