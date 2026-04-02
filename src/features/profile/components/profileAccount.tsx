'use client'

import Button from '@/shared/components/ui/button'
import { useGetUserById, useGetUserProfile } from '../hooks/profile-hooks'
import FadeIn from '@/shared/animations/Fadein'

export default function ProfileAccountPage() {
  const { data: UserProfile } = useGetUserProfile()
  const { data: UserEmail } = useGetUserById()
  return (
    <div className="bg-white rounded-xl shadow-md w-full p-8 sm:p-12">
      <FadeIn>
        <div className="flex justify-between items-center mb-12 w-full">
          <h2 className="font-roboto-600 text-xl lg:text-2xl text-hitamdikit">
            Informasi Akun
          </h2>
          <Button
            variant="primary"
            size="sm"
            href="/profile/account/edit-account"
            className="bg-text-primary border-none text-white py-3"
          >
            Edit
          </Button>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 w-full lg:pr-20 xl:pr-40">
          <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-1 sm:gap-4 border-b border-hitamdikit/5 pb-4 sm:border-none sm:pb-0">
            <p className="font-roboto-400 text-hitamdikit/50 text-sm sm:text-base lg:text-lg">
              Nama Lengkap
            </p>
            <p className="font-roboto-500 text-hitamdikit text-base sm:text-lg lg:text-xl wrap-break-words">
              {UserProfile?.name || 'No Name'}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-1 sm:gap-4 border-b border-hitamdikit/5 pb-4 sm:border-none sm:pb-0">
            <p className="font-roboto-400 text-hitamdikit/50 text-sm sm:text-base lg:text-lg">
              Email
            </p>
            <p className="font-roboto-500 text-hitamdikit text-base sm:text-lg lg:text-xl wrap-break-words">
              {UserEmail?.email || 'No Email'}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-1 sm:gap-4 border-b border-hitamdikit/5 pb-4 sm:border-none sm:pb-0">
            <p className="font-roboto-400 text-hitamdikit/50 text-sm sm:text-base lg:text-lg">
              Nomor Handphone
            </p>
            <p className="font-roboto-500 text-hitamdikit text-base sm:text-lg lg:text-xl wrap-break-words">
              {UserProfile?.phone_number || 'No Phone Number'}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-1 sm:gap-4 border-b border-hitamdikit/5 pb-4 sm:border-none sm:pb-0">
            <p className="font-roboto-400 text-hitamdikit/50 text-sm sm:text-base lg:text-lg">
              Alamat
            </p>
            <p className="font-roboto-500 text-hitamdikit text-base sm:text-lg lg:text-xl wrap-break-words sm:text-right sm:max-w-[60%]">
              {UserProfile?.address || 'No Address'}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-1 sm:gap-4">
            <p className="font-roboto-400 text-hitamdikit/50 text-sm sm:text-base lg:text-lg">
              Jenis Kelamin
            </p>
            <p className="font-roboto-500 text-hitamdikit text-base sm:text-lg lg:text-xl">
              {UserProfile?.gender || 'No Gender'}
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}
