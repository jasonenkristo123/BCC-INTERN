'use client'

import { useState } from 'react'
import Button from '@/shared/components/ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  TEditPasswordSchema,
  EditPasswordSchema,
} from '../schemas/profile-form-schemas'
import { useUpdatePassword } from '../hooks/profile-hooks'

export default function EditPasswordPage() {
  const { mutateAsync: updatePassword, isPending: isSubmitting } =
    useUpdatePassword()
  const [status, setStatus] = useState<{
    type: 'success' | 'error'
    message: string
  } | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TEditPasswordSchema>({
    resolver: zodResolver(EditPasswordSchema),
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  })

  const onSubmit = async (data: TEditPasswordSchema) => {
    setStatus(null)
    try {
      await updatePassword(data)
      reset()
      setStatus({ type: 'success', message: 'Kata sandi berhasil diperbarui!' })
    } catch (error: unknown) {
      const axiosError = error as { response?: { data?: { message?: string } } }
      const errorMessage =
        axiosError?.response?.data?.message ||
        'Gagal memperbarui kata sandi. Pastikan kata sandi saat ini benar.'
      setStatus({ type: 'error', message: errorMessage })
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-md w-full p-8 sm:p-12">
      <h2 className="font-roboto-600 text-xl lg:text-2xl text-hitamdikit mb-7">
        Kata Sandi
      </h2>

      {status && (
        <div
          className={`mb-6 p-4 rounded-xl text-sm font-roboto-500 ${
            status.type === 'success'
              ? 'bg-green-50 text-green-700 border border-green-200'
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}
        >
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
          <div>
            <label
              htmlFor="kata-sandi-saat-ini"
              className="font-roboto-400 text-base sm:text-lg lg:text-xl block"
            >
              Kata Sandi Saat Ini
            </label>
            <input
              type="password"
              id="kata-sandi-saat-ini"
              placeholder="Masukkan kata sandi saat ini"
              className={`w-full border rounded-xl px-4 py-3 mt-2 focus:outline-none focus:ring focus:ring-text-primary ${errors.oldPassword ? 'border-red-500' : 'border-hitamdikit/30'}`}
              {...register('oldPassword')}
            />
            {errors.oldPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.oldPassword.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="kata-sandi-baru"
              className="font-roboto-400 text-base sm:text-lg lg:text-xl block"
            >
              Kata Sandi Baru
            </label>
            <input
              type="password"
              id="kata-sandi-baru"
              placeholder="Masukkan kata sandi baru"
              className={`w-full border rounded-xl px-4 py-3 mt-2 focus:outline-none focus:ring focus:ring-text-primary ${errors.newPassword ? 'border-red-500' : 'border-hitamdikit/30'}`}
              {...register('newPassword')}
            />
            {errors.newPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.newPassword.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="konfirmasi-kata-sandi-baru"
              className="font-roboto-400 text-base sm:text-lg lg:text-xl block"
            >
              Konfirmasi Kata Sandi Baru
            </label>
            <input
              type="password"
              id="konfirmasi-kata-sandi-baru"
              placeholder="Ulangi kata sandi baru"
              className={`w-full border rounded-xl px-4 py-3 mt-2 focus:outline-none focus:ring focus:ring-text-primary ${errors.confirmPassword ? 'border-red-500' : 'border-hitamdikit/30'}`}
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-4 sm:gap-6">
          <Button
            variant="primary"
            size="splg"
            type="button"
            href="/profile/password"
            className="w-full bg-white border-text-primary text-text-primary order-2 sm:order-1 flex items-center justify-center translate-y-0"
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
