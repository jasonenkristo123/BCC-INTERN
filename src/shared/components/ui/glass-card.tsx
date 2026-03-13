import React from 'react'

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
}

export default function GlassCard({
  title,
  description,
  className = '',
  ...props
}: GlassCardProps) {
  return (
    <div
      className={`flex flex-col justify-center w-[300px] sm:w-[350px] md:w-[400px] h-[160px] px-6 md:px-8 rounded-2xl bg-white/5 border border-white/20 shrink-0 transform-gpu ${className}`}
      {...props}
    >
      <h3 className="text-3xl md:text-4xl font-roboto-700 font-bold text-primaryskyblue mb-2">
        {title}
      </h3>
      <p className="text-sm md:text-base font-roboto-400 text-skyblue">
        {description}
      </p>
    </div>
  )
}
