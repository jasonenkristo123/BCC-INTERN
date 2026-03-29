'use client'
import Image from 'next/image'
import Button from '../../ui/button'
import { useLogout } from '@/features/auth/hooks/authHooks'
import { useRouter } from 'next/navigation'

type LogoutChildProps = {
  onClose: () => void
}

export default function LogoutChild({ onClose }: LogoutChildProps) {
  const router = useRouter()
  const { mutate: logout, isPending } = useLogout()

  const handleLogout = async () => {
    await logout(undefined, {
      onSuccess: () => {
        onClose()
        router.push('/login')
      },
    })
  }

  return (
    <div className="w-full ">
      <div className="mx-auto flex items-center justify-center bg-redlight w-15 h-15 rounded-xl p-3">
        <Image src="/assets/logout.webp" alt="logout" width={34} height={34} />
      </div>
      <h3 className="text-base sm:text-lg lg:text-xl font-roboto-500 mt-6 text-center">
        Keluar dari akun?
      </h3>
      <p className="text-sm font-roboto-400 pt-3 text-center text-hitamdikit">
        Kamu akan keluar dari Simpanin.id di perangkat ini.
      </p>
      <div className="flex gap-2 mt-6">
        <Button
          onClick={onClose}
          variant="primary"
          size="md"
          className="w-full text-merah border border-merah"
        >
          Batal
        </Button>
        <Button
          onClick={handleLogout}
          variant="primary"
          size="md"
          disabled={isPending}
          className="w-full bg-merah text-white"
        >
          {isPending ? 'Loading...' : 'Keluar'}
        </Button>
      </div>
    </div>
  )
}
