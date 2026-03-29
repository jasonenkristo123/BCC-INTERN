import Image from 'next/image'
import Button from '../../ui/button'

export default function BerhasilTambahBahanChild() {
  return (
    <div className="w-full pb-6">
      <div className="w-15 h-15 rounded-xl bg-primaryskyblue mx-auto flex items-center justify-center">
        <Image
          src="/assets/beverages.webp"
          width={38}
          height={38}
          alt="beverages"
        />
      </div>
      <h3 className="text-base sm:text-lg lg:text-xl font-roboto-500 text-center pt-6 text-hitamdikit">
        Bahan berhasil ditambahkan!
      </h3>
      <p className="text-sm font-roboto-400 pt-3 text-center text-hitamdikit/70">
        Kamu bisa menambah bahan lain atau melihat daftar bahanmu.
      </p>
      <div className="w-full h-[4px] bg-primaryskyblue mt-6" />
      <div className="flex items-center mx-auto w-full gap-2 mt-6">
        <Button
          variant="primary"
          size="custom"
          className="w-full bg-white text-text-primary border-text-primary"
          href="/bahan-saya"
        >
          Lihat Bahan
        </Button>
        <Button
          variant="primary"
          size="custom"
          className="w-full bg-text-primary text-white"
          href="/bahan-saya/tambah-bahan"
        >
          Tambah Lagi
        </Button>
      </div>
    </div>
  )
}
