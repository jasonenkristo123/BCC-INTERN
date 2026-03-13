'use client'

import { useState } from 'react'

export interface TeamMember {
  role: string
  name: string
  imageSrc: string
}

export function useTeamCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleCardClick = (originalIndex: number) => {
    if (originalIndex === activeIndex) return
    setActiveIndex(originalIndex)
  }

  return {
    activeIndex,
    handleCardClick,
  }
}
