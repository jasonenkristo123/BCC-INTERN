"use client"
import { FoodItem } from "@/shared/types/food"
import Image from "next/image"
import Button from "../../ui/button"

import SmallInputGunakanBahan from "../../ui/small-input-gunakanbahan"
import { useState } from "react"
import { TJumlahBahanSchema } from "@/shared/schemas/modalSchema"
import { formatCurrency } from "@/shared/utils/utils"

export default function BuangThreeDotMenuChild({item, onClose}: {item: FoodItem, onClose: () => void}) {
    const [step, setStep] = useState<'input' | 'confirm'>('input')
    const [wasteAmount, setWasteAmount] = useState(0)

    const onNext = (data: TJumlahBahanSchema) => {
        setWasteAmount(data.jumlah)
        setStep('confirm')
    }

    const onConfirmBuang = async () => {
        try {
            console.log("Membuang bahan: ", wasteAmount)
            // TODO: Call API to buang bahan
            onClose()
        } catch {
            
        }
    }

    if (step === 'confirm') {
        const itemQuantityNum = parseFloat(item.quantity) || 1;
        const kerugian = item.price ? (item.price / itemQuantityNum) * wasteAmount : 0;
        
        return (
            <div className="w-full">
                <div className="bg-redlight flex items-center justify-center mx-auto rounded-xl p-3 w-[60px] h-[60px]">
                    <Image
                        src="/assets/trash.webp"
                        alt="trash"
                        width={37}
                        height={37}
                    />
                </div>

                <h3 className="text-center text-xl font-roboto-500 text-hitamdikit mt-6">
                    Yakin mau catat ini sebagai terbuang?
                </h3>
                <p className="text-sm font-roboto-400 pt-3 text-center text-hitamdikit">
                    Nggak apa-apa, hal ini bisa terjadi. Yang penting kita catat biar lebih waspada ke depannya.
                </p>
                <p className="text-sm font-roboto-400 mt-6 text-center text-hitamdikit">
                    Kerugian yang dibuang ({wasteAmount}g)
                </p>
                <p className="text-sm sm:text-lg lg:text-xl font-bold text-center text-merah mt-3">
                    {formatCurrency(kerugian)}
                </p>
                <div className="w-[336px] h-[4px] bg-redlight rounded-full mt-6 mx-auto" />
                <div className="flex gap-2 mt-6 ">
                    <Button
                        onClick={() => setStep('input')}
                        variant="primary"
                        size="custom"
                        className="w-full text-merah border border-merah hover:bg-redlight">
                        Kembali
                    </Button>
                    <Button
                        onClick={() => onConfirmBuang()}
                        variant="primary"
                        size="custom"
                        className="w-full bg-merah border border-merah text-white hover:opacity-80">
                        Yakin Buang
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="text-center ">
            <div className={`mx-auto w-[60px] h-[60px] rounded-xl flex items-center justify-center bg-redlight`}>
                <Image
                    src="/assets/trash.webp"
                    alt="icon"
                    width={37}
                    height={37}
                />
            </div>
            <div>
                <h1 className="text-hitamdikit font-roboto-600 lg:text-xl mt-6">
                    Berapa yang harus dibuang?
                </h1>
                <p className='mt-3 font-roboto-400 text-sm'>
                    Masukkan jumlah yang nggak bisa dipakai lagi
                </p>

                <SmallInputGunakanBahan id="buang-form" onSubmit={onNext} />
                <div className="w-[336px] h-[4px] bg-redlight rounded-full mt-6" />

                <div className='mt-6 flex gap-2 '>
                    <Button type='button' onClick={onClose} variant='primary' size='md' className={` w-full text-merah border border-merah hover:bg-redlight hover:shadow-xl`}>
                        Batal
                    </Button>
                    <Button form="buang-form" type='submit' variant='primary' size='md' className={` w-full bg-merah text-white hover:opacity-80 hover:shadow-xl`}>
                        Lanjut
                    </Button>
                </div>
            </div>
        </div>
    )
}