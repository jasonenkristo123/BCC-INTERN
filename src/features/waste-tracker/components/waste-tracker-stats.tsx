import Image from "next/image";
import BahanSayaCard from "@/shared/components/ui/bahan-saya-card";
import { FoodItem } from "@/shared/types/food";
import { formatCurrency, getExpiryStatus } from "@/shared/utils/utils";


interface WasteTrackerStatsProps {
    items: FoodItem[]
}


export default function WasteTrackerStats({ items }: WasteTrackerStatsProps) {
    const expired = items.filter((item) => getExpiryStatus(item.expiredEstimation).status === "expired")
    const warning = items.filter((item) => getExpiryStatus(item.expiredEstimation).status === "warning");
    const safe = items.filter((item) => getExpiryStatus(item.expiredEstimation).status === "safe");
    
    const hargaWarning = warning.reduce((acc, item) => acc + item.price, 0);
    const hargaSafe = safe.reduce((acc, item) => acc + item.price, 0);
    const kerugian = expired.reduce((acc, item) => acc + item.price, 0);
    const terselamatkan = hargaWarning + hargaSafe;


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
                        {formatCurrency(kerugian)}
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
                        {expired.length}
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
                        {formatCurrency(terselamatkan)}
                    </p>
                </div>
            </BahanSayaCard>
        </div>
    )
}