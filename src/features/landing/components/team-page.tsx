'use client'
import Image from 'next/image'
import { TeamMember, useTeamCarousel } from '../hooks/use-team-carousel'
import {
    AnimatedText,
    AnimatedDot,
    AnimatedCardCarousel,
} from '../animations/team-animated-components'

const TeamData: TeamMember[] = [
    {
        role: 'Product Manager',
        name: 'Sthefany Sheanmoulia',
        imageSrc: '/assets/dedy.webp',
    },
    {
        role: 'UI/UX Designer',
        name: 'Shananda Putri Aisyah',
        imageSrc: '/assets/dedy.webp',
    },
    {
        role: 'Front End',
        name: 'Jason Enkristo',
        imageSrc: '/assets/dedy.webp',
    },
    {
        role: 'Back End',
        name: 'Rizkya Dwi Aulya Fasya',
        imageSrc: '/assets/dedy.webp',
    },
]

export default function TeamPage() {
    const { activeIndex, orderedTeamData, handleCardClick } =
        useTeamCarousel(TeamData)

    return (
        <section className="w-full min-h-[90vh] bg-primary relative overflow-hidden flex items-center">
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
            <div className="relative z-10 w-full max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-8 overflow-hidden py-10">
                {/* ── LEFT: Text Info ── */}
                <div className="flex flex-col justify-center w-full lg:w-[45%] xl:w-[40%] shrink-0 lg:pl-[120px] xl:pl-[160px] space-y-10">
                    <h2 className="font-roboto-500 text-white text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-[150%] max-w-[389px] mb-3">
                        Tim di Balik Simpanin.id
                    </h2>

                    <p className="font-roboto-400 text-skyblue/80 text-base sm:text-lg xl:text-xl leading-[150%] max-w-[441px]">
                        Tim yang bekerja sama untuk merancang, mengembangkan, dan mewujudkan
                        produk ini.
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
                                <h1 className="font-roboto-700 text-white text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] leading-[150%]">
                                    {TeamData[activeIndex].name.split(' ').map((word, i) => (
                                        <span key={i} className="block">
                                            {word}
                                        </span>
                                    ))}
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
                <AnimatedCardCarousel
                    orderedTeamData={orderedTeamData}
                    teamData={TeamData}
                    onCardClick={handleCardClick}
                />
            </div>
        </section>
    )
}
