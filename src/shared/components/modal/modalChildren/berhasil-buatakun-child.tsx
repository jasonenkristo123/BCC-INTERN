import { Check } from "lucide-react";




export default function BerhasilBuatAkunChild() {
    return (
        <div className="w-full pb-6">
            <div className="w-15 h-15 rounded-xl bg-primaryskyblue mx-auto flex items-center justify-center">
                <Check size={47} className="text-text-primary border-[3px] border-text-primary rounded-full p-1" />
            </div>
            <h3 className="text-base sm:text-lg lg:text-xl font-roboto-500 text-center pt-6">
                Akun telah dibuat
            </h3>
            <p className="text-sm font-roboto-400 pt-3 text-center text-hitamdikit">
                Sekarang kamu bisa mulai menyimpan dan mengelola bahan makananmu dengan lebih rapi.
            </p>
        </div>
    )
}