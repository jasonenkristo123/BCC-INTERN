import { TTambahBahanScema } from '@/features/tambah-bahan/schemas/tambah-bahan-schema'
import Button from '../../ui/button'
import { TriangleAlert } from 'lucide-react'
import { formatCurrency } from '@/shared/utils/utils'

interface Props {
  data: TTambahBahanScema
  onCancel: () => void
  onConfirm: () => void
  isSubmitting?: boolean
}

export default function TambahBahanChild({
  data,
  onCancel,
  onConfirm,
  isSubmitting,
}: Props) {
  return (
    <div className="w-full relative px-2">
      <div className="mx-auto w-[60px] h-[60px] rounded-xl flex items-center justify-center bg-primaryskyblue mb-6 shadow-sm ">
        <TriangleAlert size={36} className="text-text-primary" />
      </div>

      <h3 className="text-center text-lg sm:text-xl font-roboto-600 text-hitamdikit">
        Pastikan datanya udah bener ya!
      </h3>
      <p className="text-xs sm:text-sm font-roboto-400 pt-3 text-center text-hitamdikit/70">
        Setelah disimpan, info bahan ini nggak bisa diubah lagi. Cek sekali lagi
        sebelum lanjut.
      </p>

      <div className="grid grid-cols-2 gap-3 mt-6">
        <div className="bg-putihabu rounded-xl p-3">
          <p className="text-xs md:text-sm text-hitamdikit/50 font-roboto-400 mb-1">
            Nama bahan
          </p>
          <p className="text-sm md:text-base font-roboto-500 text-hitamdikit">
            {data.nama}
          </p>
        </div>
        <div className="bg-putihabu rounded-xl p-3">
          <p className="text-xs md:text-sm text-hitamdikit/50 font-roboto-400 mb-1">
            Kategori
          </p>
          <p className="text-sm md:text-base font-roboto-500 text-hitamdikit">
            {data.kategori}
          </p>
        </div>
        <div className="bg-putihabu rounded-xl p-3">
          <p className="text-xs md:text-sm text-hitamdikit/50 font-roboto-400 mb-1">
            Tanggal beli
          </p>
          <p className="text-sm md:text-base font-roboto-500 text-hitamdikit">
            {data.tanggalBeli
              ? new Intl.DateTimeFormat('id-ID', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                }).format(new Date(data.tanggalBeli))
              : '-'}
          </p>
        </div>
        <div className="bg-putihabu rounded-xl p-3">
          <p className="text-xs md:text-sm text-hitamdikit/50 font-roboto-400 mb-1">
            Stok
          </p>
          <p className="text-sm md:text-base font-roboto-500 text-hitamdikit">
            {data.jumlah} {data.satuan}
          </p>
        </div>
        <div className="bg-putihabu rounded-xl p-3">
          <p className="text-xs md:text-sm text-hitamdikit/50 font-roboto-400 mb-1">
            Harga
          </p>
          <p className="text-sm md:text-base font-roboto-500 text-hitamdikit">
            {formatCurrency(data.harga || 0)}
          </p>
        </div>
        <div className="bg-putihabu rounded-xl p-3">
          <p className="text-xs md:text-sm text-hitamdikit/50 font-roboto-400 mb-1">
            Simpan di
          </p>
          <p className="text-sm md:text-base font-roboto-500 text-hitamdikit">
            {data.penyimpanan}
          </p>
        </div>
      </div>

      <div className="w-full h-[4px] bg-primaryskyblue mt-6" />

      <div className="flex gap-2 mt-6">
        <Button
          onClick={onCancel}
          type="button"
          disabled={isSubmitting}
          variant="primary"
          size="custom"
          className="w-full text-text-primary border border-text-primary hover:bg-primaryskyblue px-0!"
        >
          Perbaiki
        </Button>
        <Button
          onClick={onConfirm}
          type="button"
          disabled={isSubmitting}
          variant="primary"
          size="custom"
          className="w-full bg-text-primary text-white hover:opacity-90 px-0!"
        >
          {isSubmitting ? 'Menyimpan...' : 'Simpan'}
        </Button>
      </div>
    </div>
  )
}
