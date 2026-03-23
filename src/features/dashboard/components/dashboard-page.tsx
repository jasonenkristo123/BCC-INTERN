import Button from "@/shared/components/ui/button";
import DashBoardTreeGrid from "./dashboard-threegrid";
import DashBoardTwoGrid from "./dashboard-twogrid";



export default function DashBoardPage() {
    return (
        <section id="Dashboard" className="bg-birumuda w-full min-h-screen flex flex-col pt-20 pb-10 lg:pb-0">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-6 lg:py-10 px-4 lg:px-8 gap-6 lg:gap-0">
                <div className="flex flex-col gap-1 lg:gap-2">
                    <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-roboto-500">
                        Dashboard Manajemen Bahan
                    </h1>
                    <p className="font-roboto-400 text-text-secondary/90 text-sm md:text-base lg:text-lg xl:text-xl">
                        Selamat datang kembali, Dedy. Berikut ringkasan pengaturan bahan bulan ini
                    </p>
                </div>

                <div className="w-full lg:w-auto mt-4 lg:mt-0">
                    <Button variant="primary" size="lg" href="/bahan-saya/tambah-bahan" className="bg-primary-lebihmuda text-white/80 w-full lg:w-auto">
                        Tambah Bahan
                    </Button>
                </div>
            </div>
            
            <div className="flex flex-col flex-1 gap-4 lg:gap-0">
                <DashBoardTreeGrid />
                <DashBoardTwoGrid />
            </div>
        </section>
    )
}