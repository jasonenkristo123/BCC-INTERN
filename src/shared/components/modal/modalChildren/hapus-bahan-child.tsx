import Image from "next/image"
import { FoodItem } from "../../../types/food"
import Button from "../../ui/button"


export default function HapusBahanChild({ item, onClose }: { item: FoodItem, onClose: () => void }) {

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

            <h3 className="text-center text-xl font-roboto-500 text-hitamdikit">
                Hapus Bahan
            </h3>
            <p className="text-sm font-roboto-400 pt-3 text-center text-hitamdikit">
                Bahan yang dihapus tidak bisa dikembalikan.
            </p>
            <div className={`mt-6 flex p-3 bg-redlight border border-merah  rounded-full items-center w-full max-w-[186px] justify-center mx-auto`}>
                <p className='text-xs font-roboto-400'>
                    {item.name} • stok : {item.quantity}
                </p>
            </div>
            <div className="w-[336px] h-[4px] bg-redlight rounded-full mt-6" />
            <div className="flex gap-2 mt-6">
                <Button
                    onClick={onClose}
                    variant="primary"
                    size="md"
                    className="w-full text-merah border border-merah">
                    Batal
                </Button>
                <Button
                    
                    variant="primary"
                    size="md"
                    className="w-full bg-merah text-white">
                    Hapus
                </Button>
            </div>
        </div>
    )
}