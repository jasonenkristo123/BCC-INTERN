import FadeIn from '@/shared/animations/Fadein'
import RiskPanelCard from '@/shared/components/ui/risk-panel-card'
import Image from 'next/image'
import { riskPanelData } from '../data/riskPanel-data'

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

                {riskPanelData.map((item, index) => (
                  <RiskPanelCard
                    key={index}
                    imageSrc={item.imageSrc}
                    imageAlt={item.imageAlt}
                    name={item.name}
                    loss={item.loss}
                    daysLeft={item.daysLeft}
                    riskLevel={item.riskLevel}
                  />
                ))}
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
