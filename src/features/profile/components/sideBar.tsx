'use client'
import { Camera } from 'lucide-react'
import Image from 'next/image'
import { useState, useRef } from 'react'
import { sidebarData } from '../data/data'
import Link from 'next/link'

export default function ProfileSideBar() {
  const [image, setImage] = useState('/assets/dedy.webp')
  const [activeNav, setActiveNav] = useState('/profile/account')
  const imageRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    imageRef?.current?.click()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setImage(imageUrl)
    }
  }

  return (
    <aside className="flex flex-col gap-6 w-full xl:w-[440px] shrink-0">
      <div className="bg-white rounded-xl shadow-md pb-8 w-full">
        <div className="pt-10 flex justify-center">
          <div className="relative w-[115px] h-[115px]">
            <div className="w-full h-full overflow-hidden rounded-full">
              <Image
                src={image}
                alt="profile"
                fill
                unoptimized
                className="object-cover rounded-full border-4 border-text-primary"
              />
            </div>
            <button onClick={handleClick}>
              <Camera
                size={30}
                className="absolute bottom-1 right-1 text-white bg-text-primary rounded-full p-1 cursor-pointer"
              />
            </button>
            <input
              type="file"
              ref={imageRef}
              onChange={handleChange}
              className="hidden"
            />
          </div>
        </div>

        <h4 className="text-center mt-4 font-roboto-600 text-sm sm:text-base md:text-lg lg:text-xl">
          Dedy Corbuzier
        </h4>
        <p className="text-center font-roboto-400 text-base text-hitamdikit/50 pt-2">
          Dedy@gmail.com
        </p>

        <div className="flex bg-text-primary rounded-full p-6 mt-5 mx-auto w-[149px] h-10 items-center gap-3">
          <Image
            src="/assets/starputih.webp"
            width={24}
            height={24}
            alt="star"
          />
          <p className="text-white font-roboto-400 text-base">Premium</p>
        </div>

        <p className="text-center font-roboto-400 text-sm pb-5 sm:pb-0 sm:text-base text-hitamdikit/50 pt-5">
          Bergabung sejak Maret 2026
        </p>
      </div>

      <div className="w-full p-8 sm:p-10 bg-white rounded-xl shadow-md">
        {sidebarData.map((links) => (
          <Link href={links.href} key={links.desc}>
            <div
              onClick={() => setActiveNav(links.href)}
              className={`${activeNav === links.href ? 'bg-primaryskyblue text-text-primary ' : 'text-blackprimary'} flex items-center gap-3 p-4 rounded-full mb-2 cursor-pointer`}
            >
              <div
                className={`w-6 h-6 shrink-0 ${activeNav === links.href ? 'bg-text-primary' : 'bg-blackprimary'}`}
                style={{
                  WebkitMaskImage: `url(${links.imageIcon})`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskImage: `url(${links.imageIcon})`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                }}
              />
              <p className="font-roboto-500">{links.desc}</p>
            </div>
          </Link>
        ))}
        <div className="flex items-center gap-3 p-4 rounded-lg cursor-pointer">
          <Image
            src="/assets/logout.webp"
            width={24}
            height={24}
            alt="logout"
          />
          <p className="font-roboto-500 text-merah">Keluar</p>
        </div>
      </div>
    </aside>
  )
}
