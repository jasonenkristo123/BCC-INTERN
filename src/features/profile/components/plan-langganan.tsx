import Button from '@/shared/components/ui/button'
import { Check } from 'lucide-react'
import Image from 'next/image'

type StatusLangganan = {
  status: 'Free' | 'Premium'
}

export default function PlanLangganan({ status }: StatusLangganan) {
  return (
    <>
      {status === 'Premium' ? (
        <div>
          <div className="bg-primaryskyblue rounded-2xl w-full border border-text-primary py-3 px-4 sm:px-5 flex items-center gap-3 mb-5">
            <Image
              src="/assets/notifijo.webp"
              width={24}
              height={24}
              alt="notifijo"
              className="shrink-0"
            />
            <p className="font-roboto-400 text-sm sm:text-base text-text-primary wrap-break-words">
              Semua notifikasi dikirim via email ke :{' '}
              <span className="font-roboto-700">dedy@gmail.com</span>
            </p>
          </div>
          <div className="bg-linear-to-r from-primaryskyblue to-bg-white rounded-xl shadow-md w-full p-6 sm:p-10 md:p-12">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-7 gap-4">
              <div className="flex bg-text-primary rounded-full px-6 py-2 w-max h-10 items-center gap-3">
                <Image
                  src="/assets/starputih.webp"
                  width={24}
                  height={24}
                  alt="star"
                />
                <p className="text-white font-roboto-400 text-base border-none">
                  Premium
                </p>
              </div>
              <p className="font-roboto-400 text-sm sm:text-base text-hitamdikit">
                Diperpanjang 15 Nov 2026
              </p>
            </div>
            <div className="mb-6">
              <h2 className="font-roboto-600 text-lg sm:text-xl lg:text-2xl pb-2">
                Simpanin Premium
              </h2>
              <p className="font-roboto-400 text-sm sm:text-base text-hitamdikit">
                Kamu menikmati akses penuh ke semua fitur premium Simpanin.id
              </p>
            </div>
            <div className="flex mb-3 gap-3">
              <Check
                size={21}
                className="text-text-primary border border-text-primary rounded-full px-1 shrink-0"
              />
              <p className="font-roboto-400 text-sm sm:text-base text-hitamdikit">
                Input bahan tidak terbatas
              </p>
            </div>
            <div className="flex gap-3">
              <Check
                size={21}
                className="text-text-primary border border-text-primary rounded-full px-1 shrink-0"
              />
              <p className="font-roboto-400 text-sm sm:text-base text-hitamdikit">
                Reminder to email expired + recomendation saran resep sesuai
                bahan di inventory
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md w-full p-6 sm:p-10 md:p-12 mt-6">
            <div className="mb-7">
              <h2 className="font-roboto-600 text-lg sm:text-xl lg:text-2xl pb-2">
                Riwayat Pembayaran
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-base sm:text-lg font-roboto-500 text-hitamdikit pb-1">
                    Premium - Bulanan
                  </h3>
                  <p className="font-roboto-400 text-sm sm:text-base text-hitamdikit/60">
                    15 Nov 2026
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-roboto-500 text-base sm:text-lg text-hitamdikit pb-1">
                    Rp 19.000
                  </p>
                  <p className="font-roboto-400 text-sm sm:text-base text-green-600">
                    Berhasil
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-base sm:text-lg font-roboto-500 text-hitamdikit pb-1">
                    Premium - Bulanan
                  </h3>
                  <p className="font-roboto-400 text-sm sm:text-base text-hitamdikit/60">
                    15 Nov 2026
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-roboto-500 text-base sm:text-lg text-hitamdikit pb-1">
                    Rp 19.000
                  </p>
                  <p className="font-roboto-400 text-sm sm:text-base text-green-600">
                    Berhasil
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="bg-linear-to-r from-primaryskyblue to-bg-white rounded-xl shadow-md w-full p-6 sm:p-10 md:p-12">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-7 gap-4">
              <div className="flex rounded-full px-6 py-2 w-max h-10 items-center gap-3 border border-text-primary justify-center">
                <Image
                  src="/assets/watch.webp"
                  width={24}
                  height={24}
                  alt="watch"
                />
                <p className="text-text-primary font-roboto-400 text-base">
                  Free
                </p>
              </div>
              <p className="font-roboto-400 text-sm sm:text-base text-hitamdikit">
                Diperpanjang 15 Nov 2026
              </p>
            </div>
            <div className="mb-6">
              <h2 className="font-roboto-600 text-lg sm:text-xl lg:text-2xl pb-2">
                Simpanin Free
              </h2>
              <p className="font-roboto-400 text-sm sm:text-base text-hitamdikit">
                Kamu menggunakan akun gratis dengan fitur terbatas
              </p>
            </div>
            <div className="flex mb-3 gap-3">
              <Check
                size={21}
                className="text-text-primary border border-text-primary rounded-full px-1 shrink-0"
              />
              <p className="font-roboto-400 text-sm sm:text-base text-hitamdikit">
                Input bahan maxs 10x per bulan
              </p>
            </div>
            <div className="flex mb-3 gap-3">
              <Check
                size={21}
                className="text-text-primary border border-text-primary rounded-full px-1 shrink-0"
              />
              <p className="font-roboto-400 text-sm sm:text-base text-hitamdikit">
                Reminder email masa kedaluwarsa bahan
              </p>
            </div>
            <div className="flex gap-3 mt-3">
              <Image
                src="/assets/lock.webp"
                width={21}
                height={19}
                alt="lock"
                className="shrink-0"
              />
              <p className="font-roboto-400 text-sm sm:text-base text-hitamdikit opacity-50">
                Input bahan tidak terbatas
              </p>
            </div>
            <div className="flex gap-3 mt-3">
              <Image
                src="/assets/lock.webp"
                width={21}
                height={19}
                alt="lock"
                className="shrink-0"
              />
              <p className="font-roboto-400 text-sm sm:text-base text-hitamdikit opacity-50">
                Reminder to email expired + recomendation saran resep sesuai
                bahan di inventory
              </p>
            </div>
          </div>

          <div className="bg-text-primary rounded-xl shadow-md w-full p-6 sm:p-10 md:p-12 mt-6">
            <div className="border w-max border-white flex px-6 py-2 gap-3 rounded-full items-center justify-center mb-7">
              <Image
                src="/assets/starputih.webp"
                width={24}
                height={24}
                alt="star"
              />
              <p className="font-roboto-400 text-base text-white">Upgrade</p>
            </div>
            <div className="mb-7">
              <h2 className="font-roboto-600 text-lg sm:text-xl lg:text-2xl text-white pb-2">
                Simpanin Premium
              </h2>
              <h3 className="font-roboto-600 text-xl sm:text-2xl lg:text-3xl text-white pb-2">
                Rp 19.000 /{' '}
                <span className="font-roboto-400 text-base">bulan</span>
              </h3>
              <p className="font-roboto-400 text-sm sm:text-base text-white pb-6 opacity-90">
                Unlock semua fitur tanpa batas. Hemat lebih banyak makanan yang
                tersimpan
              </p>

              <div className="flex mb-3 gap-3">
                <Check
                  size={24}
                  className="text-white border-[1.25px] border-white rounded-full p-0.5 shrink-0"
                />
                <p className="font-roboto-400 text-sm sm:text-base text-white">
                  Input bahan tidak terbatas
                </p>
              </div>
              <div className="flex mb-3 gap-3">
                <Check
                  size={24}
                  className="text-white border-[1.25px] border-white rounded-full p-0.5 shrink-0"
                />
                <p className="font-roboto-400 text-sm sm:text-base text-white">
                  Reminder to email expired + recomendation saran resep sesuai
                  bahan di inventory
                </p>
              </div>
            </div>

            <Button
              variant="primary"
              size="splg"
              className="w-full bg-white text-text-primary shadow-md hover:bg-white/90"
            >
              Mulai Premium Sekarang
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
