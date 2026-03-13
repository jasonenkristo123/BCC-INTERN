import Image from 'next/image'

interface CardProfileProps {
    imageSrc: string
    imageAlt?: string
    isActive?: boolean
    className?: string
    onClick?: () => void
}

export default function CardProfile({
    imageSrc,
    imageAlt = 'Profile photo',
    isActive = false,
    className = '',
    onClick,
}: CardProfileProps) {
    const activeClass =
        // Larger active card with white border — matches design
        'w-[240px] h-[340px] sm:w-[300px] sm:h-[420px] lg:w-[360px] lg:h-[500px] xl:w-[400px] xl:h-[600px] rounded-2xl shadow-2xl border-4 border-skyblue  '
    const inactiveClass =
        // Smaller inactive cards — NO border, slightly dimmed
        'w-[130px] h-[190px] sm:w-[165px] sm:h-[240px] lg:w-[200px] lg:h-[285px] xl:w-[242px] xl:h-[346px] rounded-2xl opacity-75 hover:opacity-90'
    return (
        <div
            onClick={onClick}
            // Use precise duration and delay to match Framer Motion variants
            className={`relative overflow-hidden cursor-pointer transition-all duration-800 delay-500 ease-in-out shrink-0 ${isActive ? activeClass : inactiveClass} ${className}`}
        >
            <Image
                src={imageSrc}
                alt={imageAlt}
                quality={100}
                fill
                className="object-cover w-full h-full"
                sizes="(max-width: 640px) 240px, (max-width: 1024px) 360px, 420px"
            />
        </div>
    )
}
