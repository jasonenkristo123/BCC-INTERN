import Image from 'next/image'
import Button from '@/shared/components/ui/button'
import FadeIn from '@/shared/animations/Fadein'

export default function HeroSection() {
  return (
    <section id="beranda" className="relative w-full h-screen overflow-hidden">
      <FadeIn>
        <Image
          src="/assets/heroimg.webp"
          alt="Fresh vegetables and fruits background"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover"
        />

        {/* Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Fish icon - top left */}
          <div className="absolute top-[15%] left-[10%] rotate-10 sm:rotate-0 sm:top-[11%] sm:left-[19%] w-[90px] h-[60px] sm:w-[142px] sm:h-[101px]">
            <Image
              src="/assets/ikan.webp"
              alt="Fish Icon"
              priority
              quality={100}
              width={677}
              height={369}
              className="w-[142px] h-[101px]"
            />
          </div>

          {/* Broccoli icon - bottom left */}
          <div className="absolute bottom-[10%] left-[10%] w-[132px] h-[101px] sm:bottom-[20%] sm:left-[10%] sm:w-[172px] sm:h-[136px] ">
            <Image
              src="/assets/brokoli.webp"
              alt="Broccoli Icon"
              priority
              quality={100}
              width={677}
              height={369}
              className="w-[172px] h-[136px]"
            />
          </div>

          {/* Carrot icon - top right*/}
          <div className="absolute top-[13%] right-[11%] w-[100px] h-[80px] sm:top-[19%] sm:right-[11%] sm:w-[130px] sm:h-[127px]">
            <Image
              src="/assets/wortel.webp"
              alt="Carrot Icon"
              priority
              quality={100}
              width={677}
              height={369}
              className="w-[130px] h-[127px]"
            />
          </div>

          {/* Meat/steak icon - bottom right */}
          <div className="absolute bottom-[9%] right-[8%] w-[102px] h-[82px] sm:bottom-[9%] sm:right-[8%] sm:w-[222px] sm:h-[182px]">
            <Image
              src="/assets/daging.webp"
              alt="Meat Icon"
              priority
              quality={100}
              width={677}
              height={369}
            />
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <p className="text-sm md:text-base lg:text-3xl mb-3 font-semibold font-roboto-600 text-white  ">
            Kelola Bahan Makananmu Lebih Cerdas
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-roboto-700 font-bold lg:text-7xl leading-tight max-w-4xl mb-8 ">
            Kelola Bahan Makanan
            <br />
            dan Kurangi Food Waste
          </h1>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="primary"
              size="lg"
              href="#"
              className="text-primary-muda bg-skyblue"
            >
              Mulai Kelola Makanan
            </Button>
            <Button variant="secondary" size="lg" href="#">
              Pelajari Fitur
            </Button>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
