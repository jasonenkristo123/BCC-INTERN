'use client'
import { FoodItem } from '@/shared/types/food'
import Image from 'next/image'
import Button from '../../ui/button'

import SmallInputGunakanBahan from '../../ui/small-input-gunakanbahan'
import { useState } from 'react'
import {
  TJumlahBuangSchema,
  jumlahBuangSchema,
} from '@/shared/schemas/modalSchema'
import { formatCurrency } from '@/shared/utils/utils'
import { useDiscardFood } from '@/features/bahan-saya/hooks/bahan-sayahooks'

export default function BuangThreeDotMenuChild({
  item,
  onClose,
}: {
  item: FoodItem
  onClose: () => void
}) {
  const [step, setStep] = useState<'input' | 'confirm'>('input')
  const [wasteAmount, setWasteAmount] = useState(0)

  const onNext = (data: TJumlahBuangSchema) => {
    setWasteAmount(data.discarded_weight)
    setStep('confirm')
  }

  const { mutateAsync: discardFood, isPending, isError } = useDiscardFood()
  const [submitError, setSubmitError] = useState<string | null>(null)

  const onConfirmBuang = async () => {
    setSubmitError(null)
    try {
      await discardFood({
        id: item.id,
        data: { discarded_weight: wasteAmount },
      })
      onClose()
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } }
      setSubmitError(
        error?.response?.data?.message ||
          'Gagal membuang bahan. Silakan coba lagi.',
      )
    }
  }

  if (step === 'confirm') {
    const pricePerItem = item.total_price / item.current_weight
    const kerugian = pricePerItem * wasteAmount

    return (
      <div className="w-full">
        <div className="bg-redlight flex items-center justify-center mx-auto rounded-xl p-3 w-[60px] h-[60px]">
          <Image src="/assets/trash.webp" alt="trash" width={37} height={37} />
        </div>

        <h3 className="text-center text-xl font-roboto-500 text-hitamdikit mt-6">
          Yakin mau catat ini sebagai terbuang?
        </h3>
        <p className="text-sm font-roboto-400 pt-3 text-center text-hitamdikit">
          Nggak apa-apa, hal ini bisa terjadi. Yang penting kita catat biar
          lebih waspada ke depannya.
        </p>
        <p className="text-sm font-roboto-400 mt-6 text-center text-hitamdikit">
          Kerugian yang dibuang {kerugian.toFixed(2)} {item.unit_weight}
        </p>
        <p className="text-sm sm:text-lg lg:text-xl font-bold text-center text-merah mt-3">
          {formatCurrency(kerugian)}
        </p>
        <div className="h-4 mt-2">
          {(isError || submitError) && (
            <p className="text-red-500 text-xs text-center font-roboto-400 italic">
              {submitError || 'Terjadi kesalahan sistem'}
            </p>
          )}
        </div>
        <div className="flex gap-2 mt-4">
          <Button
            onClick={() => setStep('input')}
            variant="primary"
            size="custom"
            className="w-full text-merah border border-merah hover:bg-redlight disabled:opacity-50"
            disabled={isPending}
          >
            Kembali
          </Button>
          <Button
            onClick={() => onConfirmBuang()}
            variant="primary"
            size="custom"
            className="w-full bg-merah border border-merah text-white hover:opacity-80 disabled:opacity-50 flex items-center justify-center gap-2"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Memproses...
              </>
            ) : (
              'Yakin Buang'
            )}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="text-center ">
      <div
        className={`mx-auto w-[60px] h-[60px] rounded-xl flex items-center justify-center bg-redlight`}
      >
        <Image src="/assets/trash.webp" alt="icon" width={37} height={37} />
      </div>
      <div>
        <h1 className="text-hitamdikit font-roboto-600 lg:text-xl mt-6">
          Berapa yang harus dibuang?
        </h1>
        <p className="mt-3 font-roboto-400 text-sm">
          Masukkan jumlah yang nggak bisa dipakai lagi
        </p>

        <SmallInputGunakanBahan
          id={`buang-form-${item.id}`}
          onSubmit={onNext}
          schema={jumlahBuangSchema}
          fieldName="discarded_weight"
          maxWeight={item.current_weight}
          unitWeight={item.unit_weight}
        />
        <div className="w-full max-w-[336px] h-[4px] bg-redlight rounded-full mt-6 mx-auto" />

        <div className="mt-6 flex gap-2 ">
          <Button
            type="button"
            onClick={onClose}
            variant="primary"
            size="md"
            className={` w-full text-merah border border-merah hover:bg-redlight hover:shadow-xl`}
          >
            Batal
          </Button>
          <Button
            form={`buang-form-${item.id}`}
            type="submit"
            variant="primary"
            size="md"
            className={` w-full bg-merah text-white hover:opacity-80 hover:shadow-xl`}
          >
            Lanjut
          </Button>
        </div>
      </div>
    </div>
  )
}
