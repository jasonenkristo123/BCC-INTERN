import { Variants } from 'framer-motion'

export const textVariants: Variants = {
  initial: { y: 30, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.7,
      ease: 'easeInOut',
    },
  },
  exit: {
    y: -30,
    opacity: 0,
    transition: {
      duration: 0.8,
      delay: 0.7,
      ease: 'easeInOut',
    },
  },
}

export type Breakpoint = 'xl' | 'lg' | 'sm' | 'mobile'

export const getCardVariants = (screen: Breakpoint = 'xl'): Variants => {
  let activeW = 400
  let inactiveW = 242
  let gap = 30
  if (screen === 'lg') {
    activeW = 360
    inactiveW = 200
    gap = 32
  }
  if (screen === 'sm') {
    activeW = 300
    inactiveW = 165
    gap = 24
  }
  if (screen === 'mobile') {
    activeW = 240
    inactiveW = 130
    gap = 16
  }

  const xPrev = activeW + gap
  const xHidden = xPrev + inactiveW + gap
  const xExit = -(inactiveW + gap + 50)

  return {
    animate: (diff: number) => {
      // Active card
      if (diff === 0) {
        return {
          x: 0,
          opacity: 1,
          scale: 1,
          zIndex: 40,
          transition: { duration: 0.8, delay: 0.5, ease: 'easeInOut' },
        }
      }
      // First Preview Card
      if (diff === 1) {
        return {
          x: xPrev,
          opacity: 1,
          scale: 1,
          zIndex: 30,
          transition: { duration: 0.8, delay: 0.5, ease: 'easeInOut' },
        }
      }
      // Second Preview Card (The "Half" card)
      if (diff === 2) {
        return {
          x: xHidden,
          opacity: 1, // Make it visible
          scale: 1,
          zIndex: 20,
          transition: { duration: 0.8, delay: 0.5, ease: 'easeInOut' },
        }
      }
      // Exited cards (Left/Previous)
      if (diff === 3 || diff === -1) {
        return {
          x: xExit,
          opacity: 0,
          scale: 0.85,
          zIndex: 10,
          transition: { duration: 0.8, delay: 0.5, ease: 'easeInOut' },
        }
      }
      // Remaining hidden cards (if any)
      return {
        x: xHidden + 100,
        opacity: 0,
        scale: 0.85,
        zIndex: 0,
        transition: { duration: 0 },
      }
    },
  }
}
