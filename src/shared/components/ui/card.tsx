import Image from 'next/image'

type FeatureCardProps = {
  label: string;
  description: string;
  bgImgSrc: string;
  contentImg: string;
  imageAlt?: string;
  className?: string;
}

export default function FeatureCard({
  label,
  description,
  bgImgSrc,
  imageAlt = '',
  className = '',
  contentImg,
}: FeatureCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl w-full aspect-441/648 group ${className}`}
    >
      {/* Background image */}
      <Image
        src={bgImgSrc}
        alt={imageAlt || label}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Dark gradient overlay */}
      

      {/* Content */}
      <div className="absolute top-0 left-0 right-0 flex flex-col justify-start p-6 md:p-8 2xl:p-10">
        {/* Label tag */}
        <span className="text-sm md:text-lg xl:text-xl 2xl:text-2xl font-roboto-400 text-white opacity-60 mb-3 pb-2 w-fit">
          {label}
        </span>

        {/* Description */}
        <h3 className="text-xl sm:text-2xl md:text-2xl xl:text-3xl 2xl:text-[32px] font-roboto-600 font-bold text-white md:leading-tight"> 
          {description}
        </h3>
      </div>
      
      {/* Product Image at bottom */}
      <div className='absolute bottom-0 left-0 right-0 flex justify-center items-end pointer-events-none'>
        <Image 
          src={contentImg} 
          quality={100} 
          alt={imageAlt} 
          width={400} 
          height={400} 
          className='w-[80%] max-w-[335px] h-auto object-contain object-bottom drop-shadow-2xl' 
        />
      </div>
    </div>
  )
}
