import FadeIn from '@/shared/animations/Fadein'
import Image from 'next/image'

export default function RiskPanelPage() {
  return (
    <section className="min-h-screen bg-white py-15">
      <FadeIn>
        <div className="px-6 md:px-12 lg:px-20 w-full max-w-[1440px] mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-roboto-500 mb-4 leading-[150%]">
              Risk Ranking Panel
            </h2>
            <p className="text-base md:text-lg lg:text-2xl font-roboto-400 text-text-secondary w-full tracking-wider">
              Visualisasikan Resiko Bahan Makanan, Gunakan bahan yang paling
              berisiko terlebih dahulu.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-[60px] w-full items-start justify-between">
            <div className="pt-4 lg:pt-10 flex-1 w-full lg:max-w-[546px]">
              <p className="font-roboto-400 text-text-secondary text-base md:text-lg lg:text-2xl leading-[150%] text-justify mb-8">
                Simpanin.id memprioritaskan daftar belanjaanmu berdasarkan&nbsp;
                <span className="text-primary-lebihmuda font-roboto-700">
                  nilai ekonomis
                </span>
                &nbsp;dan&nbsp;
                <span className="text-primary-lebihmuda font-roboto-700">
                  sisa masa simpan.
                </span>
                &nbsp;Anda akan selalu tahu bahan mana yang paling mendesak
                untuk segera digunakan atau diolah.
              </p>
              <div className="flex items-start gap-4 mb-6">
                <Image
                  src="/assets/checklist.webp"
                  quality={100}
                  width={24}
                  unoptimized
                  height={24}
                  alt="checklist"
                  className="w-6 h-6 xl:w-7 xl:h-7 shrink-0 mt-4"
                />
                <p className="font-roboto-700 text-darkgrey text-base md:text-lg lg:text-2xl leading-[150%]">
                  Urutan Prioritas:&nbsp;
                  <span className="font-roboto-500">
                    Mengurutkan dari yang paling cepat basi.
                  </span>
                </p>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <Image
                  src="/assets/checklist.webp"
                  quality={100}
                  unoptimized
                  width={24}
                  height={24}
                  alt="checklist"
                  className="w-6 h-6 xl:w-7 xl:h-7 shrink-0 mt-4"
                />
                <p className="font-roboto-700 text-darkgrey text-base md:text-lg lg:text-2xl leading-[150%]">
                  Valuasi Harga:&nbsp;
                  <span className="font-roboto-500">
                    Fokus pada bahan termahal agar tidak rugi besar.
                  </span>
                </p>
              </div>
            </div>
            {/* bagian daftar bahan */}
            <div className="w-full lg:w-[500px] xl:w-[641px] 2xl:w-[680px] shrink-0 bg-white rounded-lg shadow-md mb-5 sm:mb-0">
              <div className="p-6 md:p-8 bg-white border border-gray-100 rounded-[20px] shadow-md">
                <h3 className="text-brown font-roboto-700 text-lg md:text-xl lg:text-2xl mb-6">
                  Daftar Bahan &quot;Gunakan Segera&quot;
                </h3>

                {/* Daging Sapi */}
                <div className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-redlight rounded-[16px] flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    <Image
                      src="/assets/dagingkecil.webp"
                      unoptimized
                      quality={100}
                      width={28}
                      height={28}
                      alt="meat"
                      className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-roboto-700 text-brown text-sm sm:text-base md:text-lg leading-[150%]">
                      Daging Sapi &#40;500g&#41;
                    </h3>
                    <p className="font-roboto-500 text-brown text-[11px] sm:text-[13px] md:text-sm mt-1 leading-[150%]">
                      Jika tidak digunakan total kerugian&nbsp;
                      <span className="text-rednormal font-bold">
                        Rp 35.000
                      </span>
                    </p>
                    <p className="text-rednormal font-bold text-[11px] sm:text-[13px] md:text-sm mt-0.5 leading-[150%]">
                      Sisa 1 hari lagi
                    </p>
                  </div>
                  <div className="bg-pinklight px-3 py-1.5 rounded-full shrink-0 flex items-center justify-center self-center sm:self-center">
                    <p className="text-rednormal font-roboto-600 text-[10px] sm:text-xs md:text-sm whitespace-nowrap">
                      High Risk
                    </p>
                  </div>
                </div>

                {/* Sawi */}
                <div className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-redlight rounded-[16px] flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    <Image
                      src="/assets/sawi.webp"
                      unoptimized
                      quality={100}
                      width={28}
                      height={28}
                      alt="vegetable"
                      className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-roboto-700 text-brown text-sm sm:text-base md:text-lg leading-[150%]">
                      Bayam Hijau &#40;1 ikat&#41;
                    </h3>
                    <p className="font-roboto-500 text-brown text-[11px] sm:text-[13px] md:text-sm mt-1 leading-[150%]">
                      Jika tidak digunakan total kerugian&nbsp;
                      <span className="text-rednormal font-bold">
                        Rp 15.000
                      </span>
                    </p>
                    <p className="text-rednormal font-bold text-[11px] sm:text-[13px] md:text-sm mt-0.5 leading-[150%]">
                      Sisa 1 hari lagi
                    </p>
                  </div>
                  <div className="bg-pinklight px-3 py-1.5 rounded-full shrink-0 flex items-center justify-center self-center sm:self-center">
                    <p className="text-rednormal font-roboto-600 text-[10px] sm:text-xs md:text-sm whitespace-nowrap">
                      High Risk
                    </p>
                  </div>
                </div>

                {/* Susu */}
                <div className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-orangelight/30 rounded-[16px] flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    <Image
                      src="/assets/susu.webp"
                      unoptimized
                      quality={100}
                      width={28}
                      height={28}
                      alt="milk"
                      className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-roboto-700 text-brown text-sm sm:text-base md:text-lg leading-[150%]">
                      Susu Segar
                    </h3>
                    <p className="font-roboto-500 text-brown text-[11px] sm:text-[13px] md:text-sm mt-1 leading-[150%]">
                      Jika tidak digunakan total kerugian&nbsp;
                      <span className="text-orangnormal font-bold">
                        Rp 35.000
                      </span>
                    </p>
                    <p className="text-orangnormal font-bold text-[11px] sm:text-[13px] md:text-sm mt-0.5 leading-[150%]">
                      Sisa 5 hari lagi
                    </p>
                  </div>
                  <div className="bg-orangelight px-3 py-1.5 rounded-full shrink-0 flex items-center justify-center self-center sm:self-center bg-opacity-70">
                    <p className="text-orangnormal font-roboto-600 text-[10px] sm:text-xs md:text-sm whitespace-nowrap">
                      Use Soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt12 md:mt-16 lg:mt-20 xl:mt-24 w-full xl:w-[1126px] 2xl:w-[1280px]">
            <p className="text-blackprimary text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-relaxed xl:leading-[150%]">
              <span className="font-roboto-400">
                Fitur-fitur ini dirancang untuk membantu mengurangi kebiasaan
                kecil yang sering menyebabkan makanan terbuang. Karena pada
                kenyataannya,&nbsp;
              </span>
              <span className="font-roboto-700 font-bold ">
                food waste adalah masalah yang jauh lebih besar dari yang kita
                bayangkan.
              </span>
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
