'use client'
import { Camera } from 'lucide-react'
import Image from 'next/image'
import { useState, useRef } from 'react'
import { sidebarData } from '../data/data'
import Link from 'next/link'
import AllModalParent from '@/shared/components/modal/AllModalParent'
import LogoutChild from '@/shared/components/modal/modalChildren/logout-child'
import {
  useGetUserById,
  useGetUserProfile,
  useUpdateUserProfile,
} from '../hooks/profile-hooks'
import FadeIn from '@/shared/animations/Fadein'

export default function ProfileSideBar({
  status,
}: {
  status: 'Free' | 'Premium'
}) {
  const { data: profile } = useGetUserProfile()
  const { data: user } = useGetUserById()
  const { mutateAsync: updateProfile } = useUpdateUserProfile()

  const [activeNav, setActiveNav] = useState('/profile/account')
  const imageRef = useRef<HTMLInputElement>(null)
  const [openModal, setOpenModal] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)

  const handleClick = () => {
    imageRef?.current?.click()
  }

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0]
    setUploadError(null)

    if (file) {
      // Lowering to 1MB based on user feedback that 1.7MB is too large
      if (file.size > 1 * 1024 * 1024) {
        setUploadError('Ukuran file terlalu besar (Maksimal 1MB)')
        return
      }

      try {
        if (!profile?.name || !profile?.phone_number) {
          alert('Silahkan lengkapi data profil terlebih dahulu di menu Akun.')
          return
        }

        const formData = new FormData()
        formData.append('profile_picture', file)
        formData.append('name', profile.name)
        formData.append('phone_number', profile.phone_number)
        formData.append('address', profile.address || '')
        formData.append('gender', profile.gender || '')

        await updateProfile(formData)
      } catch (error: unknown) {
        const axiosError = error as {
          response?: { data?: { message?: string } }
        }
        setUploadError(
          axiosError?.response?.data?.message || 'Gagal mengunggah foto profil',
        )
      }
    }
  }

  return (
    <aside className="flex flex-col gap-6 w-full lg:w-full xl:w-[440px] shrink-0">
      <FadeIn>
        <div className="bg-white rounded-xl shadow-md pb-8 w-full">
          <div className="pt-10 flex justify-center">
            <div className="relative w-[100px] h-[100px] sm:w-[115px] sm:h-[115px]">
              <div className="w-full h-full overflow-hidden rounded-full">
                <Image
                  src={profile?.profile_picture || '/assets/defaultprofile.webp'}
                  alt="profile"
                  fill
                  unoptimized
                  className="object-cover rounded-full border-4 border-text-primary"
                />
              </div>
              <button onClick={handleClick}>
                <Camera
                  size={28}
                  className="absolute bottom-0 right-0 sm:bottom-1 sm:right-1 text-white bg-text-primary rounded-full p-1.5 cursor-pointer shadow-lg"
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

          <h4 className="text-center mt-4 font-roboto-600 text-base sm:text-lg lg:text-xl px-4">
            {profile?.name || 'User'}
          </h4>
          <p className="text-center font-roboto-400 text-sm sm:text-base text-hitamdikit/50 pt-1 px-4 wrap-break-words">
            {user?.email || 'Email not available'}
          </p>

          {uploadError && (
            <p className="text-center text-merah text-xs mt-2 px-4 italic animate-pulse">
              {uploadError}
            </p>
          )}

          <div
            className={`flex ${status === 'Premium' ? 'bg-text-primary ' : 'bg-primaryskyblue border border-text-primary '} rounded-full px-4 py-2 mt-5 mx-auto min-w-[120px] max-w-max h-10 items-center gap-2 justify-center`}
          >
            <Image
              src={
                status === 'Premium'
                  ? '/assets/starputih.webp'
                  : '/assets/watch.webp'
              }
              width={20}
              height={20}
              alt="star"
            />
            <p
              className={`${status === 'Premium' ? 'text-white' : 'text-text-primary'} font-roboto-400 text-base`}
            >
              {status}
            </p>
          </div>

          <p className="text-center font-roboto-400 text-xs sm:text-sm text-hitamdikit/50 pt-5">
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
          <div
            onClick={() => setOpenModal(true)}
            className="flex items-center gap-3 p-4 rounded-lg cursor-pointer"
          >
            <Image
              src="/assets/logout.webp"
              width={24}
              height={24}
              alt="logout"
            />
            <p className="font-roboto-500 text-merah">Keluar</p>
          </div>
        </div>
        <AllModalParent open={openModal} onClose={() => setOpenModal(false)}>
          <LogoutChild onClose={() => setOpenModal(false)} />
        </AllModalParent>
      </FadeIn>
    </aside>
  )
}
