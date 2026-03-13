import { motion, AnimatePresence } from 'framer-motion'
import CardProfile from '@/shared/components/ui/card-profile'
import { getCardVariants, textVariants, Breakpoint } from './team-animations'
import { TeamMember } from '../hooks/use-team-carousel'
import { ReactNode, useState, useEffect } from 'react'

// AnimatedText — unchanged
export function AnimatedText({
  text,
  activeIndex,
  className,
  id,
}: {
  text: ReactNode
  activeIndex: number
  className: string
  id: string
}) {
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

// AnimatedDot — unchanged
export function AnimatedDot({
  index,
  activeIndex,
  onClick,
}: {
  index: number
  activeIndex: number
  onClick: () => void
}) {
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
            type: 'spring',
            stiffness: 300,
            damping: 30,
            mass: 0.8,
            delay: 0.7,
          }}
        />
      )}
    </button>
  )
}

interface AnimatedCardCarouselProps {
  teamData: TeamMember[]
  onCardClick: (index: number) => void
  activeIndex: number
}

export function AnimatedCardCarousel({
  teamData,
  onCardClick,
  activeIndex,
}: AnimatedCardCarouselProps) {
  const [screen, setScreen] = useState<Breakpoint>('xl')

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth
      if (w >= 1280) setScreen('xl')
      else if (w >= 1024) setScreen('lg')
      else if (w >= 640) setScreen('sm')
      else setScreen('mobile')
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="flex-1 w-full flex items-center justify-start lg:pl-10 xl:pl-16 overflow-visible relative h-[400px] lg:h-[500px]">
      <div className="relative w-full h-full flex items-end">
        {teamData.map((member, idx) => {
          // Calculate the relative position recursively for an infinite loop
          const totalCards = teamData.length
          const diff = (idx - activeIndex + totalCards) % totalCards

          // State flags
          const isActive = diff === 0

          return (
            <motion.div
              key={member.name}
              custom={diff}
              variants={getCardVariants(screen)}
              initial="initial"
              animate="animate"
              // Use absolute positioning to stack cards predictably based on z-index
              className="absolute transform-gpu"
              style={{
                originX: 0,
                originY: 1,
                bottom: 0,
              }}
            >
              <CardProfile
                imageSrc={member.imageSrc}
                imageAlt={member.name}
                isActive={isActive}
                onClick={() => onCardClick(idx)}
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
