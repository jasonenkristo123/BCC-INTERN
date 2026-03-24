import Button from '@/shared/components/ui/button'
import FadeIn from '@/shared/animations/Fadein'

export default function Kelola() {
  return (
    <section className="bg-white w-full min-h-[40vh] py-[120px] px-6 sm:px-0">
      <FadeIn>
        <div className="flex items-center flex-col justify-center">
          <h2 className="font-roboto-600 px-2.5 text-center text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-[150%] text-primary-lebihmuda mb-4">
            Mulai Kelola Bahan Makananmu Hari ini
          </h2>
          <p className="font-roboto-400 p-5 sm:p-0 text-base sm:text-lg lg:text-2xl xl:text-3xl text-text-secondary max-w-[1130px] text-center mb-4 leading-[150%]">
            Kurangi food waste, hemat pengeluaran. Gunakan bahan makanan dengan
            lebih bijak bersama ribuan pengguna lainnya.
          </p>
          <div className="flex gap-2 sm:gap-6 px-2 sm:px-0">
            <Button
              variant="secondary"
              size="md"
              className="bg-primary-lebihmuda"
              href="/register"
            >
              Daftar
            </Button>
            <Button
              variant="primary"
              size="md"
              className="bg-skyblue text-primary-lebihmuda"
              href="/login"
            >
              Masuk
            </Button>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
