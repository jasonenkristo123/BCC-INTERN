'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import Link from 'next/link'
import { TRegisterSchema, registerSchema } from '../schemas/auth-schema'
import { useRegister } from '../hooks/authHooks'
import { useRouter } from 'next/navigation'

export default function RegisterFormWithZod() {
  const router = useRouter()
  const { mutateAsync, isPending } = useRegister()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TRegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = async (data: TRegisterSchema) => {
    try {
      await mutateAsync(data, {
        onSuccess: () => {
          router.push('/login')
          reset()
        },
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="relative w-full min-h-screen flex m-0 p-0 overflow-hidden bg-graylight">
      <div className="absolute inset-0 z-0 hidden md:block w-[40%]">
        <Image
          src="/assets/loginbg.webp"
          alt="login bg"
          fill
          unoptimized
          className="object-cover"
        />
      </div>

      <div className="relative z-10 flex w-full h-screen">
        <div className="hidden md:flex flex-col justify-between p-12 h-full w-[40%] lg:w-[38%]">
          <h1 className="text-white text-2xl font-roboto-500 tracking-wide">
            <Link href="/home">Simpanin.id</Link>
          </h1>

          <div className="mb-20">
            <h2 className="text-white text-4xl lg:text-5xl sm:mb-20 xl:mb-40 font-roboto-500 leading-[150%]">
              Kurangi
              <br />
              Pemborosan
              <br />
              hemat lebih
              <br />
              banyak setiap
              <br />
              bulan.
            </h2>
          </div>
        </div>

        <div className="w-full md:w-[60%] lg:w-[70%] flex-1 flex flex-col items-center justify-center bg-white sm:p-10 lg:p-0 md:rounded-l-[40px] shadow-md shadow-graylight h-full ml-auto overflow-y-auto ">
          <div className="w-full max-w-[540px] xl:max-w-[580px] px-8 md:px-0">
            <div className="mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-blueprimary mb-3 ">
                Mulai kelola dapurmu lebih cerdas
              </h2>
              <p className="text-bluesecondary text-sm font-roboto-400 lg:text-base leading-[150%] tracking-wide">
                Buat akun gratis dan pantau bahan makananmu agar tidak ada yang
                terbuang sia-sia.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-roboto-500 text-hitamdikit block">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Example@email.com"
                  {...register('email')}
                  className="w-full px-4 py-3.5 rounded-2xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-text-primary focus:border-transparent transition-all placeholder:text-gray-400 text-sm"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-roboto-500 text-hitamdikit block">
                  Kata Sandi
                </label>
                <input
                  type="password"
                  placeholder="Masukkan kata sandi"
                  {...register('password')}
                  className="w-full px-4 py-3.5 rounded-2xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-text-primary focus:border-transparent transition-all placeholder:text-gray-400 text-sm"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="mt-2 space-y-2">
                <label className="text-sm font-roboto-500 text-hitamdikit block">
                  Konfirmasi Kata Sandi
                </label>
                <input
                  type="password"
                  placeholder="Masukkan kata sandi"
                  {...register('confirmPassword')}
                  className="w-full px-4 py-3.5 rounded-2xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-text-primary focus:border-transparent transition-all placeholder:text-gray-400 text-sm"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.confirmPassword.message}
                  </p>
                )}
                <div className="flex justify-end mt-1">
                  <Link
                    href="/register"
                    className="text-xs lg:text-sm font-roboto-400 text-text-secondary hover:text-text-primary transition-colors"
                  >
                    Lupa kata sandi?
                  </Link>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isPending || isSubmitting}
                  className="w-full bg-text-primary hover:bg-text-primary/80 text-white font-medium py-3.5 rounded-2xl transition-colors disabled:opacity-70 text-sm"
                >
                  {isPending || isSubmitting ? 'Memproses...' : 'Buat Akun'}
                </button>
              </div>
            </form>

            <p className="text-center text-sm text-gray-600 mt-10">
              Sudah memiliki akun?{' '}
              <Link
                href="/login"
                className="text-text-primary font-semibold hover:underline"
              >
                Masuk
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
