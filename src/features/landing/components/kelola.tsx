import Button from "@/shared/components/ui/button";


export default function Kelola() {
    return (
        <section className="bg-white w-full min-h-[40vh] py-[120px] px-[">
            <div className="flex items-center flex-col justify-center">
                <h2 className="font-roboto-600 text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-[150%] text-primary-lebihmuda mb-4">
                    Mulai Kelola Bahan Makananmu Hari ini
                </h2>
                <p className="font-roboto-400 text-base sm:text-lg lg:text-2xl xl:text-3xl text-text-secondary max-w-[1130px] text-center mb-4">
                    Kurangi food waste, hemat pengeluaran. Gunakan bahan makanan dengan lebih bijak bersama ribuan pengguna lainnya. 
                </p>
                <div className="flex gap-6">
                    <Button variant="secondary" size="md" className="bg-primary-lebihmuda">
                        Daftar
                    </Button>
                    <Button variant="primary" size="md" className="bg-skyblue">
                        Masuk
                    </Button>
                </div>
            </div>
        </section>
    )
}