'use client'

import { useState } from 'react'

export interface TeamMember {
    role: string
    name: string
    imageSrc: string
}

export function useTeamCarousel(teamData: TeamMember[]) {
    const [activeIndex, setActiveIndex] = useState(0)

    const handleCardClick = (originalIndex: number) => {
        if (originalIndex === activeIndex) return
        setActiveIndex(originalIndex)
    }

    const orderedTeamData = [
        ...teamData.slice(activeIndex),
        ...teamData.slice(0, activeIndex),
    ]

    return {
        activeIndex,
        orderedTeamData,
        handleCardClick,
    }
}
