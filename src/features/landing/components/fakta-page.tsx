import Image from "next/image";
import GlassCard from "@/shared/components/ui/glass-card";
import InfiniteScrollRow from "../animations/infinite-scroll";

const faktaDataInfo = [
    { title: "931jt", description: "Ton Makanan Terbuang (UNEP 2021)" },
    { title: "23-48 juta ton", description: "food waste dihasilkan di Indonesia setiap tahunnya - Bappenas" },
    { title: "61%", description: "food waste berasal dari rumah makan" },
    { title: "931jt", description: "Ton Makanan Terbuang (UNEP 2021)" },
];

export default function FaktaPage() {
    return (
        <section id="fakta" className="relative w-full min-h-[75vh] flex items-center overflow-hidden">

            <div className="absolute inset-0 z-[-1]">
                <Image
                    src='/assets/wasteback.webp'
                    fill
                    quality={100}
                    alt="zero waste background"
                    className="object-cover "
                />
            </div>

            {/* icon */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                {/* meat */}
                <div className="absolute top-[8%] left-[2%] md:top-[12%] md:left-[1%] xl:top-[18%] xl:left-[-2%] 2xl:top-[14%] 2xl:left-[1%] w-[40px] h-[30px] sm:w-[50px] sm:h-[35px] md:w-[70px] md:h-[50px] lg:w-[90px] lg:h-[65px] xl:w-[120px] xl:h-[80px] 2xl:w-[161px] 2xl:h-[120px] opacity-30 sm:opacity-40 lg:opacity-70 rotate-[-4.98deg]">
                    <Image src="/assets/daging.webp" alt="Meat Icon" fill className="object-contain brightness-0 invert" />
                </div>
                {/* carrot */}
                <div className="absolute top-[4%] right-[2%] xl:top-[6%] xl:right-[-1%] 2xl:top-[4%] 2xl:right-[2%] w-[45px] h-[40px] sm:w-[55px] sm:h-[50px] md:w-[70px] md:h-[60px] lg:w-[90px] lg:h-[80px] xl:w-[130px] xl:h-[115px] 2xl:w-[161px] 2xl:h-[147px] opacity-30 sm:opacity-40 lg:opacity-70 rotate-[-100deg] scale-x-[-1]">
                    <Image src="/assets/wortel.webp" alt="Carrot Icon" fill className="object-contain brightness-0 invert" />
                </div>
                {/* broccoli */}
                <div className="absolute bottom-[5%] left-[2%] xl:bottom-[8%] xl:left-[-1%] 2xl:bottom-[5%] 2xl:left-[2%] w-[50px] h-[45px] sm:w-[60px] sm:h-[55px] md:w-[80px] md:h-[70px] lg:w-[100px] lg:h-[90px] xl:w-[140px] xl:h-[130px] 2xl:w-[181px] 2xl:h-[167px] opacity-30 sm:opacity-40 lg:opacity-70 -rotate-6">
                    <Image src="/assets/brokoli.webp" alt="Broccoli Icon" fill className="object-contain brightness-0 invert" />
                </div>
                {/* fish */}
                <div className="absolute bottom-[8%] right-[2%] xl:bottom-[12%] xl:right-[-1%] 2xl:bottom-[8%] 2xl:right-[2%] w-[50px] h-[45px] sm:w-[60px] sm:h-[55px] md:w-[80px] md:h-[70px] lg:w-[100px] lg:h-[90px] xl:w-[140px] xl:h-[130px] 2xl:w-[181px] 2xl:h-[167px] opacity-30 sm:opacity-40 lg:opacity-70 -rotate-6">
                    <Image src="/assets/ikan.webp" alt="Fish Icon" fill className="object-contain brightness-0 invert" />
                </div>
            </div>

            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-12 md:py-20">
                <div className="max-w-7xl mb-8 md:mb-10 text-center sm:text-left">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-roboto-500 text-white mb-3 md:mb-4 leading-tight">
                        Faktanya, Food waste bukan masalah kecil.
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-roboto-400 text-skyblue opacity-70">
                        Setiap potongan makanan yang kamu buang berdampak besar pada dompetmu dan juga bumi kita. Mari lihat kenyataan pahit di balik kebiasaan kita.
                    </p>
                </div>

                <div className="flex flex-col gap-4 sm:gap-6 w-full transform-gpu border-[1.5px] p-4 sm:p-6 border-white/20 rounded-2xl sm:rounded-3xl shadow-md backdrop-blur-sm">
                    {/* Top Row */}
                    <div className="w-full overflow-hidden">
                        <InfiniteScrollRow direction="right" className="flex gap-4 sm:gap-6 w-max transform-gpu">
                            {faktaDataInfo.map((data, idx) => (
                                <GlassCard key={`top-${idx}`} title={data.title} description={data.description} className="" />
                            ))}
                        </InfiniteScrollRow>
                    </div>

                    {/* Bottom Row*/}
                    <div className="w-full overflow-hidden">
                        <InfiniteScrollRow direction="left" className="flex gap-4 sm:gap-6 w-max transform-gpu">
                            {faktaDataInfo.map((data, idx) => (
                                <GlassCard key={`bottom-${idx}`} title={data.title} description={data.description} className="" />
                            ))}
                        </InfiniteScrollRow>
                    </div>
                </div>
            </div>
        </section>
    );
}