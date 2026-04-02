'use client'

import { useForm } from 'react-hook-form'
import {
  TEditProfileSchema,
  EditProfileSchema,
} from '../schemas/profile-form-schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import Button from '@/shared/components/ui/button'
import {
  useCreateUserProfile,
  useGetUserById,
  useGetUserProfile,
  useUpdateUserProfile,
} from '../hooks/profile-hooks'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function EditProfilePage() {
  const router = useRouter()
  const { mutateAsync: updateProfile } = useUpdateUserProfile()
  const { mutateAsync: createProfile } = useCreateUserProfile()
  const { data: getUserEmail } = useGetUserById()
  const { data: profile, isLoading: isProfileLoading } = useGetUserProfile()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TEditProfileSchema>({
    resolver: zodResolver(EditProfileSchema),
    defaultValues: {
      name: '',
      phone_number: '',
      address: '',
      gender: '',
      profile_picture: '',
    },
  })

  useEffect(() => {
    if (profile) {
      reset({
        name: profile.name || '',
        phone_number: profile.phone_number || '',
        address: profile.address || '',
        gender: profile.gender || '',
      })
    }
  }, [profile, reset])

  const onSubmit = async (data: TEditProfileSchema) => {
    try {
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('phone_number', data.phone_number)
      formData.append('address', data.address)
      formData.append('gender', data.gender)

      // Only add profile_picture if a file is actually selected
      if (data.profile_picture?.[0] instanceof File) {
        formData.append('profile_picture', data.profile_picture[0])
      }

      if (!profile) {
        await createProfile(formData)
      } else {
        await updateProfile(formData)
      }

      router.push('/profile/account')
    } catch {}
  }

  if (isProfileLoading) {
    return (
      <div className="bg-white rounded-xl shadow-md w-full p-8 sm:p-12">
        <p className="text-center text-hitamdikit/50">Memuat data profil...</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-md w-full p-8 sm:p-12">
      <h2 className="font-roboto-600 text-xl lg:text-2xl text-hitamdikit mb-7">
        Informasi Akun
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="nama-lengkap"
            className="font-roboto-400 text-base sm:text-lg lg:text-xl block"
          >
            Nama Lengkap
          </label>
          <input
            type="text"
            id="nama-lengkap"
            placeholder="Dedy Corbuzier"
            {...register('name')}
            className="w-full border border-hitamdikit/30 rounded-xl px-4 py-3 mt-2 focus:outline-none focus:ring focus:ring-text-primary"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="font-roboto-400 text-base sm:text-lg lg:text-xl block"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            value={getUserEmail?.email || ''}
            readOnly
            className="w-full border border-hitamdikit/30 rounded-xl px-4 py-3 mt-2 focus:outline-none focus:ring focus:ring-text-primary"
          />
        </div>
        <div>
          <label
            htmlFor="nomor-handphone"
            className="font-roboto-400 text-base sm:text-lg lg:text-xl block"
          >
            Nomor Handphone
          </label>
          <input
            type="text"
            id="nomor-handphone"
            placeholder="+62 123 456 789"
            {...register('phone_number')}
            className="w-full border border-hitamdikit/30 rounded-xl px-4 py-3 mt-2 focus:outline-none focus:ring focus:ring-text-primary"
          />
          {errors.phone_number && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phone_number.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="alamat"
            className="font-roboto-400 text-base sm:text-lg lg:text-xl block"
          >
            Alamat
          </label>
          <input
            type="text"
            id="alamat"
            placeholder="Dedy Corbuzier"
            {...register('address')}
            className="w-full border border-hitamdikit/30 rounded-xl px-4 py-3 mt-2 focus:outline-none focus:ring focus:ring-text-primary"
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">
              {errors.address.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="jenis-kelamin"
            className="font-roboto-400 text-base sm:text-lg lg:text-xl block"
          >
            Jenis Kelamin
          </label>
          <select
            id="jenis-kelamin"
            {...register('gender')}
            className="w-full border border-hitamdikit/30 rounded-xl px-4 py-3 mt-2 focus:outline-none focus:ring focus:ring-text-primary bg-white cursor-pointer"
          >
            <option value="">Pilih Jenis Kelamin</option>
            <option value="male">Laki-laki</option>
            <option value="female">Perempuan</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-4 sm:gap-6">
          <Button
            variant="primary"
            size="splg"
            href="/profile/account"
            className="w-full bg-white border-text-primary text-text-primary order-2 sm:order-1"
          >
            Batalkan
          </Button>
          <Button
            variant="primary"
            size="splg"
            type="submit"
            className="w-full bg-text-primary text-white order-1 sm:order-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Menyimpan...' : 'Simpan'}
          </Button>
        </div>
      </form>
    </div>
  )
}
