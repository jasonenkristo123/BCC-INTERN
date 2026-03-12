"use client"
import { motion, AnimatePresence } from 'framer-motion'
import CardProfile from '@/shared/components/ui/card-profile'
import { textVariants } from './team-animations'
import { TeamMember } from '../hooks/use-team-carousel'
import { ReactNode } from 'react'

interface AnimatedTextProps {
    text: ReactNode
    activeIndex: number
    className: string
    id: string
}

export function AnimatedText({ text, activeIndex, className, id }: AnimatedTextProps) {
    return (
        <div className="overflow-hidden">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={`${id}-${activeIndex}`}
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className={className}
                >
                    {text}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

interface AnimatedDotProps {
    index: number
    activeIndex: number
    onClick: () => void
}

export function AnimatedDot({ index, activeIndex, onClick }: AnimatedDotProps) {
    const isActive = index === activeIndex
    
    return (
        <button
            onClick={onClick}
            aria-label={`Go to team member ${index + 1}`}
            className="relative rounded-full w-4 h-4 flex items-center justify-center group"
        >
            <div className="absolute inset-0 rounded-full bg-white/40 group-hover:bg-white/70 transition-colors" />
            {isActive && (
                <motion.div
                    layoutId="activeDot"
                    className="absolute inset-0 bg-text-primary rounded-full z-10"
                    transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 30,
                        mass: 0.8
                    }}
                />
            )}
        </button>
    )
}

interface AnimatedCardCarouselProps {
    orderedTeamData: TeamMember[]
    teamData: TeamMember[]
    onCardClick: (originalIndex: number) => void
}

export function AnimatedCardCarousel({ 
    orderedTeamData, 
    teamData, 
    onCardClick 
}: AnimatedCardCarouselProps) {
    return (
        <div className="flex-1 w-full flex items-center justify-start lg:pl-10 xl:pl-16">
            <div className="flex items-end gap-4 sm:gap-6 lg:gap-8 xl:gap-[30px] w-max">
                <AnimatePresence mode="popLayout">
                    {orderedTeamData.map((member, idx) => {
                        const isActive = idx === 0
                        const originalIndex = teamData.findIndex(m => m.name === member.name)
                        
                        return (
                            <motion.div
                                key={member.name}
                                layout
                                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -100, scale: 0.8 }}
                                transition={{ 
                                    type: "spring", 
                                    stiffness: 260, 
                                    damping: 25,
                                    mass: 1
                                }}
                                className="shrink-0 transform-gpu"
                            >
                                <CardProfile
                                    imageSrc={member.imageSrc}
                                    imageAlt={member.name}
                                    isActive={isActive}
                                    onClick={() => onCardClick(originalIndex)}
                                />
                            </motion.div>
                        )
                    })}
                </AnimatePresence>
            </div>
        </div>
    )
}
