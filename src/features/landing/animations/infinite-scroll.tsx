'use client'
import { useCallback, useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import { motion } from 'framer-motion'

interface InfiniteScrollRowProps {
    children: React.ReactNode[]
    direction?: 'left' | 'right'
    speed?: number
    gap?: string
    className?: string
}

export default function InfiniteScrollRow({
    children,
    direction = 'right',
    speed = 20,
    gap = 'gap-4 sm:gap-6',
    className = '',
}: InfiniteScrollRowProps) {
    const controls = useAnimation()
    const doubled = [...children, ...children]

    const startX = direction === 'right' ? '0%' : '-50%'
    const endX = direction === 'right' ? '-50%' : '0%'

    const startAnimation = useCallback(() => {
        controls.start({
            x: [null, endX],
            transition: {
                duration: speed,
                ease: 'linear',
                repeat: Infinity,
            },
        })
    }, [controls, endX, speed])

    useEffect(() => {
        controls.set({ x: startX })
        startAnimation()
    }, [controls, startX, startAnimation])

    return (
        <div className={`w-full ${className}`}
            onMouseEnter={() => controls.stop()}
            onMouseLeave={() => startAnimation()}
        >
            <motion.div
                className={`flex ${gap} w-max will-change-transform`}
                animate={controls}
                style={{ transform: 'translateZ(0)' }}
            >
                {doubled.map((child, i) => (
                    <div key={i}>
                        {child}
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
