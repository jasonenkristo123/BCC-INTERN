
import Button from '@/shared/components/ui/button'
import DashboardSmallCard from '@/shared/components/ui/dashboard-smallcard'
import Image from 'next/image'

export default function DashBoardTreeGrid() {
  // data masih sementara
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-4 lg:px-8">
      <div className="bg-white rounded-xl shadow-lg p-4 lg:p-8">
        <div className="flex justify-between items-center">
          <h2 className="font-roboto-500 text-sm md:text-lg lg:text-xl xl:text-2xl">
            Status Bahan Total
          </h2>
          <Image
            src="/assets/beverages.webp"
            alt="beverage"
            width={32}
            height={32}
          />
        </div>
        <div>
          <h3 className="pt-4 text-xs sm:text-base lg:text-lg xl:text-xl font-roboto-400 mb-2">
            Total Bahan
          </h3>
          <div className="w-full bg-gray-200 rounded-full h-3 flex overflow-hidden">
            <div
              className="bg-text-primary h-full"
              style={{ width: '40%' }}
            ></div>
            <div
              className="bg-orange-400 h-full"
              style={{ width: '35%' }}
            ></div>
            <div className="bg-red-500 h-full" style={{ width: '25%' }}></div>
          </div>
          <div className="mt-2 flex flex-wrap gap-2 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="bg-text-primary rounded-full w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
              <p className="font-roboto-400 text-xs sm:text-base">Terpakai</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="bg-orange-400 rounded-full w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
              <p className="font-roboto-400 text-xs sm:text-base">Mendekati</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="bg-red-500 rounded-full w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
              <p className="font-roboto-400 text-xs sm:text-base">
                Kedaluwarsa
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2 mt-4">
            <DashboardSmallCard className="bg-orange-muda border-orangnormal/40 flex-1">
              <h3 className="font-roboto-600 text-orangnormal text-base sm:text-lg lg:text-xl xl:text-3xl">
                23
              </h3>
              <p className="font-roboto-500 text-xs sm:text-sm text-blackprimary">
                Mendekati Kedaluwarsa
              </p>
            </DashboardSmallCard>
            <DashboardSmallCard className="bg-white border-merah/40 flex-1">
              <h3 className="font-roboto-600 text-merah text-base sm:text-lg lg:text-xl xl:text-3xl">
                23
              </h3>
              <p className="font-roboto-500 text-xs sm:text-sm text-blackprimary">
                Sudah Kedaluwarsa
              </p>
            </DashboardSmallCard>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-4 lg:p-8">
        <div className="flex justify-between items-center">
          <h2 className="font-roboto-500 text-sm md:text-lg lg:text-xl xl:text-2xl">
            Ringkasan Kerugian
          </h2>
          <Image
            src="/assets/dollar.webp"
            alt="dollar"
            width={32}
            height={32}
          />
        </div>
        <div className="flex gap-2 items-center mt-8">
          <h3 className="font-roboto-500 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">
            Rp 1.250.000
          </h3>
          <Image
            src="/assets/tren-naik.webp"
            alt="tren naik"
            width={24}
            height={24}
            className="w-4 h-4"
          />
          <p className="text-merah font-roboto-400">12% dari bulan lalu</p>
        </div>
        <div className="flex flex-row gap-2 mt-8">
          <DashboardSmallCard className="bg-orange-muda border-orangnormal/40 flex-1">
            <h3 className="font-roboto-500 text-blackprimary text-xs sm:text-sm">
              Potensi Rugi:
            </h3>
            <p className="font-roboto-600 text-sm text-orangnormal sm:text-lg lg:text-xl xl:text-2xl">
              Rp 450.000
            </p>
          </DashboardSmallCard>
          <DashboardSmallCard className="bg-white border-text-primary flex-1">
            <h3 className="font-roboto-500 text-blackprimary text-xs sm:text-sm">
              Terselamatkan
            </h3>
            <p className="font-roboto-600 text-sm text-text-primary sm:text-lg lg:text-xl xl:text-2xl">
              Rp 800.000
            </p>
          </DashboardSmallCard>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-4 lg:p-8">
        <div className="flex justify-between items-center">
          <h2 className="font-roboto-500 text-sm md:text-lg lg:text-xl xl:text-2xl">
            Bahan Paling Banyak Terbuang
          </h2>
          <Image src="/assets/trash.webp" alt="trash" width={32} height={32} />
        </div>

        {/* Data disini */}
        <div className="flex flex-col justify-center mt-4">
          <div className="flex gap-4">
            <div className="bg-redlight rounded-full w-12 h-12 flex items-center justify-center font-roboto-600">
              1
            </div>
            <Image
              src="/kategori/sayur.webp"
              alt="sayur"
              width={32}
              height={32}
              className="w-14 h-14"
            />
            <div className="font-roboto-500">
              <h4>Daging</h4>
              <p>10 kg</p>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <div className="bg-redlight rounded-full w-12 h-12 flex items-center justify-center font-roboto-600">
              2
            </div>
            <Image
              src="/kategori/buahbuah.webp"
              alt="sayur"
              width={32}
              height={32}
              className="w-14 h-14"
            />
            <div className="font-roboto-500">
              <h4>Buah</h4>
              <p>10 kg</p>
            </div>
          </div>
        </div>
        <div>
          <Button
            variant="primary"
            size="lg"
            className="w-full mt-4 hover:bg-text-primary border-text-primary hover:text-white"
            href='/waste-tracker'
          >
            Lihat Semua Detail
          </Button>
        </div>
      </div>
    </div>
  )
}
