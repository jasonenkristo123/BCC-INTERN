import { Variants } from 'framer-motion'

export const textVariants: Variants = {
    initial: { 
        y: 40, 
        opacity: 0 
    },
    animate: { 
        y: 0, 
        opacity: 1, 
        transition: { 
            duration: 0.6, 
            ease: [0.22, 1, 0.36, 1] 
        } 
    },
    exit: { 
        y: -40, 
        opacity: 0, 
        transition: { 
            duration: 0.4, 
            ease: [0.22, 1, 0.36, 1] 
        } 
    }
}

export const cardVariants: Variants = {
    initial: { 
        x: 100, 
        opacity: 0,
        scale: 0.9 
    },
    animate: { 
        x: 0, 
        opacity: 1,
        scale: 1,
        transition: { 
            duration: 0.6, 
            ease: [0.22, 1, 0.36, 1] 
        } 
    },
    exit: { 
        x: -100, 
        opacity: 0,
        scale: 0.9,
        transition: { 
            duration: 0.4, 
            ease: [0.22, 1, 0.36, 1] 
        } 
    }
}
