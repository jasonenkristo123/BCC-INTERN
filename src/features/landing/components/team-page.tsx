'use client'
import Image from 'next/image'
import { useTeamCarousel } from '../hooks/use-team-carousel'
import {
  AnimatedText,
  AnimatedDot,
  AnimatedCardCarousel,
} from '../animations/team-animated-components'
import FadeIn from '@/shared/animations/Fadein'
import { TeamData } from '../data/landing-data'

export default function TeamPage() {
  const { activeIndex, handleCardClick } = useTeamCarousel()

  return (
    <section className="w-full min-h-[90vh] bg-primary relative overflow-hidden flex items-center">
      <FadeIn>
        {/* Dark layer background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/darklayer.webp"
            alt="dark background layer"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Content wrapper */}
        <div className="relative z-10 w-full max-w-[1540px] px-10 xl:px-0 mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-8 overflow-hidden py-10">
          {/* ── LEFT: Text Info ── */}
          <div className="flex flex-col justify-center w-full lg:w-[45%] xl:w-[40%] shrink-0 lg:pl-[120px] 2xl:pl-[160px] space-y-10">
            <h2 className="font-roboto-500 text-white text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-[150%] max-w-[389px] mb-3 2xl:mb-10">
              Tim di Balik Simpanin.id
            </h2>

            <p className="font-roboto-400 text-skyblue/80 text-base sm:text-lg xl:text-xl leading-[150%] max-w-[441px]">
              Tim yang bekerja sama untuk merancang, mengembangkan, dan
              mewujudkan produk ini.
            </p>

            <div className="min-h-[140px] sm:min-h-[160px] lg:min-h-[180px]">
              {/* role */}
              <div className="mb-3 sm:mb-4">
                <AnimatedText
                  id="role"
                  activeIndex={activeIndex}
                  text={TeamData[activeIndex].role}
                  className="font-roboto-500 text-white text-xl sm:text-2xl lg:text-3xl xl:text-[34px] leading-[150%] tracking-wide"
                />
              </div>
              {/* name */}
              <AnimatedText
                id="name"
                activeIndex={activeIndex}
                text={
                  <h1 className="font-roboto-600 text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl xl:h-[192px] xl:w-[506px] leading-[150%] whitespace-pre-line wrap-break-words mb-4">
                    {TeamData[activeIndex].name}
                  </h1>
                }
                className=""
              />
            </div>

            {/* Dot indicators */}
            <div className="flex items-center gap-[14px] mt-10 lg:mt-16 xl:mt-[72px] relative z-20">
              {TeamData.map((_, i) => (
                <AnimatedDot
                  key={i}
                  index={i}
                  activeIndex={activeIndex}
                  onClick={() => handleCardClick(i)}
                />
              ))}
            </div>
          </div>

          {/* ── RIGHT: Cards Carousel ── */}
          <div className="flex-1 w-full lg:mt-24 xl:mt-32">
            <AnimatedCardCarousel
              teamData={TeamData}
              onCardClick={handleCardClick}
              activeIndex={activeIndex}
            />
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
