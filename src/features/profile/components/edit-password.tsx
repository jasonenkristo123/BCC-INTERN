'use client'
import Button from '@/shared/components/ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  TEditPasswordSchema,
  EditPasswordSchema,
} from '../schemas/profile-form-schemas'

export default function EditPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TEditPasswordSchema>({
    resolver: zodResolver(EditPasswordSchema),
    defaultValues: {
      passwordSekarang: '',
      passwordBaru: '',
    },
  })

  const onSubmit = async () => {
    try {
      reset()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="bg-white rounded-xl shadow-md w-full p-8 sm:p-12">
      <h2 className="font-roboto-600 text-xl lg:text-2xl text-hitamdikit mb-7">
        Kata Sandi
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="kata-sandi-saat-ini"
            className="font-roboto-400 text-base sm:text-lg lg:text-xl block"
          >
            Kata Sandi Saat Ini
          </label>
          <input
            type="text"
            id="kata-sandi-saat-ini"
            placeholder="Dedy Corbuzier"
            className="w-full border border-hitamdikit/30 rounded-xl px-4 py-3 mt-2 focus:outline-none focus:ring focus:ring-text-primary"
            {...register('passwordSekarang')}
            {...(errors.passwordSekarang && (
              <p className="text-red-500 text-sm mt-1">
                {errors.passwordSekarang.message}
              </p>
            ))}
          />
        </div>
        <div>
          <label
            htmlFor="kata-sandi-baru"
            className="font-roboto-400 text-base sm:text-lg lg:text-xl block"
          >
            Kata Sandi Baru
          </label>
          <input
            type="text"
            id="kata-sandi-baru"
            placeholder="Dedy Corbuzier"
            className="w-full border border-hitamdikit/30 rounded-xl px-4 py-3 mt-2 focus:outline-none focus:ring focus:ring-text-primary"
            {...register('passwordBaru')}
            {...(errors.passwordBaru && (
              <p className="text-red-500 text-sm mt-1">
                {errors.passwordBaru.message}
              </p>
            ))}
          />
        </div>

        <div className="grid grid-cols-2 mt-9 gap-6 ">
          <Button
            variant="primary"
            size="splg"
            href="/profile/password"
            className="bg-white border-text-primary text-text-primary"
          >
            Batalkan
          </Button>
          <Button
            variant="primary"
            size="splg"
            href="/profile/password"
            className="bg-text-primary text-white"
          >
            {isSubmitting ? 'Menyimpan...' : 'Simpan'}
          </Button>
        </div>
      </form>
    </div>
  )
}
