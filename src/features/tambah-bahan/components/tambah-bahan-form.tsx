'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import {
  SatuanBahan,
  TTambahBahanScema,
  TambahBahanScema,
  TKategoriBahan,
} from '../schemas/tambah-bahan-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { lokasiList, saranPenyimpanan } from '../data/lokasiData'
import { TriangleAlert } from 'lucide-react'
import Button from '@/shared/components/ui/button'
import AllModalParent from '@/shared/components/modal/AllModalParent'
import TambahBahanChild from '@/shared/components/modal/modalChildren/tambah-bahan-child'
import BerhasilTambahBahanChild from '@/shared/components/modal/modalChildren/berhasil-tambahbahan-child'
import { useAddFood } from '../hooks/tambah-bahanhooks'
import { useGetAllCategory } from '@/features/bahan-saya/hooks/bahan-sayahooks'

export default function TambahBahanForm() {
  const router = useRouter()
  const { mutateAsync: addFood, isPending: isAddingFood } = useAddFood()
  const { data: categories, isLoading: isCategoriesLoading } =
    useGetAllCategory()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    control,
  } = useForm<TTambahBahanScema>({
    resolver: zodResolver(TambahBahanScema),
    defaultValues: {
      food_category_id: 0,
      food_name: '',
      initial_weight: 1,
      unit_of_weight: 'gram',
      price: 1000,
      storage_location: 'refrigerator',
      purchase_date: new Date(),
    },
  })

  const selectLocation = useWatch({
    control,
    name: 'storage_location',
  })
  const selectedKategori = useWatch({
    control,
    name: 'food_category_id',
  })

  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [formDataState, setFormDataState] = useState<TTambahBahanScema | null>(
    null,
  )

  const onSubmit = async (data: TTambahBahanScema) => {
    setFormDataState(data)
    setShowConfirmModal(true)
  }

  const handleConfirmSubmit = async () => {
    if (!formDataState) return
    const currentData = formDataState // narrowing for TS
    try {
      let formattedDate = ''
      if (currentData.purchase_date instanceof Date) {
        const year = currentData.purchase_date.getFullYear()
        const month = String(currentData.purchase_date.getMonth() + 1).padStart(
          2,
          '0',
        )
        const day = String(currentData.purchase_date.getDate()).padStart(2, '0')
        formattedDate = `${year}-${month}-${day}`

        const todayUTC = new Date().toISOString().split('T')[0]
        if (formattedDate > todayUTC) {
          formattedDate = todayUTC
        }
      } else {
        formattedDate = String(currentData.purchase_date)
      }

      const payload = {
        food_category_id: Number(currentData.food_category_id),
        food_name: currentData.food_name,
        initial_weight: Number(currentData.initial_weight),
        unit_of_weight: currentData.unit_of_weight,
        storage_location: currentData.storage_location,
        purchase_date: formattedDate,
        price: Number(currentData.price),
      }

      await addFood(payload as unknown as TTambahBahanScema)
      setShowConfirmModal(false)
      setShowSuccessModal(true)

      setTimeout(() => {
        setShowSuccessModal(false)
        reset()
        router.push('/bahan-saya')
      }, 5000)
    } catch {}
    setShowConfirmModal(false)
  }

  return (
    <div className="py-10 px-10 w-full min-h-screen bg-skyblue">
      <AllModalParent
        open={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
      >
        {formDataState && (
          <TambahBahanChild
            data={formDataState}
            onCancel={() => setShowConfirmModal(false)}
            onConfirm={handleConfirmSubmit}
            isSubmitting={isAddingFood}
          />
        )}
      </AllModalParent>

      <AllModalParent
        open={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      >
        <BerhasilTambahBahanChild />
      </AllModalParent>

      <div className="mt-20">
        <div className="flex gap-2 text-[16px] font-roboto-600">
          <a href="/bahan-saya">
            <p className="text-hitamdikit/50">Bahan Saya</p>
          </a>
          <p className="text-hitamdikit">{' > '} Tambah Bahan</p>
        </div>
        <div className="mt-3">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-roboto-500 text-hitamdikit">
            Tambah Bahan Baru
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-hitamdikit/50">
            Masukkan detail bahan makanan yang ingin kamu simpan.
          </p>
        </div>
        {/*  informasi bahan */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 w-full">
          <div className="flex items-center gap-4 p-6 rounded-l-xl shadow-lg bg-primaryskyblue">
            <p className="bg-text-primary rounded-full px-3 py-1 text-white text-sm sm:text-base lg:text-lg xl:text-xl font-roboto-400">
              1
            </p>
            <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-roboto-400 text-hitamdikit">
              Informasi Bahan
            </h3>
          </div>
          <div className="flex items-center gap-4 p-6 shadow-lg bg-primaryskyblue">
            <p className="bg-text-primary rounded-full px-3 py-1 text-white text-sm sm:text-base lg:text-lg xl:text-xl font-roboto-400">
              2
            </p>
            <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-roboto-400 text-hitamdikit">
              Detail Stok
            </h3>
          </div>
          <div className="flex items-center gap-4 p-6 rounded-r-xl shadow-lg bg-primaryskyblue">
            <p className="bg-text-primary rounded-full px-3 py-1 text-white text-sm sm:text-base lg:text-lg xl:text-xl font-roboto-400">
              3
            </p>
            <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-roboto-400 text-hitamdikit">
              Penyimpanan
            </h3>
          </div>
        </div>

        <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white rounded-xl p-10 shadow-lg">
            <h2 className="border-b pb-2 border-hitamdikit/20 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-roboto-400 text-hitamdikit">
              Informasi Bahan
            </h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-[18px] ">
              <div>
                <label
                  htmlFor="nama"
                  className="text-sm sm:text-base md:text-lg lg:text-xl font-roboto-400 text-hitamdikit block mt-2"
                >
                  Nama Bahan <span className="text-merah">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Contoh : Wortel, Jagung, Susu"
                  className="w-full border border-hitamdikit/30 rounded-xl px-3 py-2 text-sm sm:text-base md:text-lg lg:text-xl font-roboto-400 text-hitamdikit"
                  {...register('food_name', {
                    required: 'Nama bahan wajib diisi',
                  })}
                />
                {errors.food_name && (
                  <p className="text-red-500 text-sm">
                    {errors.food_name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="kategori"
                  className="text-sm sm:text-base md:text-lg lg:text-xl font-roboto-400 text-hitamdikit block mt-2"
                >
                  Kategori <span className="text-merah">*</span>
                </label>
                <select
                  id="kategori"
                  className={`w-full border border-hitamdikit/30 rounded-xl px-3 py-2 text-sm sm:text-base md:text-lg lg:text-xl font-roboto-400 text-hitamdikit`}
                  {...register('food_category_id', {
                    required: 'Kategori wajib diisi',
                    valueAsNumber: true,
                  })}
                  disabled={isCategoriesLoading}
                >
                  <option value={0} disabled>
                    {isCategoriesLoading
                      ? 'Memuat Kategori...'
                      : 'Pilih Kategori'}
                  </option>
                  {categories?.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.categoryName}
                    </option>
                  ))}
                </select>
                {errors.food_category_id && (
                  <p className="text-red-500 text-sm">
                    {errors.food_category_id.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="tanggal-beli"
                  className="text-sm sm:text-base md:text-lg lg:text-xl font-roboto-400 text-hitamdikit block mt-2"
                >
                  Tanggal Beli <span className="text-merah">*</span>
                </label>
                <input
                  type="date"
                  className="w-full  border border-hitamdikit/30 rounded-xl px-3 py-2 text-sm sm:text-base md:text-lg lg:text-xl font-roboto-400 text-hitamdikit"
                  {...register('purchase_date', {
                    required: 'Tanggal beli wajib diisi',
                    valueAsDate: true,
                  })}
                />
                {errors.purchase_date && (
                  <p className="text-red-500 text-sm">
                    {errors.purchase_date.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Detail Stok */}
          <div className="bg-white rounded-xl p-10 mt-8">
            <h2 className="border-b pb-2 border-hitamdikit/20 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-roboto-400 text-hitamdikit">
              Detail Stok
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px] mt-6">
              <div>
                <label
                  htmlFor="jumlah"
                  className="text-sm sm:text-base md:text-lg lg:text-xl font-roboto-400 text-hitamdikit block mt-2"
                >
                  Jumlah <span className="text-merah">*</span>
                </label>
                <div className="flex w-full border border-hitamdikit/30 rounded-xl overflow-hidden">
                  <input
                    type="number"
                    placeholder="Contoh : 10, 20, 30"
                    className="w-full border border-hitamdikit/30 rounded-xl rounded-r-none px-3 py-2 text-sm sm:text-base md:text-lg lg:text-xl font-roboto-400 text-hitamdikit"
                    {...register('initial_weight', {
                      required: 'Jumlah wajib diisi',
                      valueAsNumber: true,
                    })}
                  />

                  <select
                    className="border border-hitamdikit/30 rounded-xl px-3 py-2 rounded-l-none font-roboto-400"
                    {...register('unit_of_weight', {
                      required: 'Satuan wajib diisi',
                    })}
                  >
                    {SatuanBahan.options.map((satuan) => (
                      <option key={satuan} value={satuan}>
                        {satuan}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.initial_weight && (
                  <p className="text-red-500 text-sm">
                    {errors.initial_weight.message}
                  </p>
                )}
                <p className="text-sm text-hitamdikit/50 font-roboto-400 mt-2">
                  Masukkan jumlah dan pilih satuan
                </p>
              </div>
              <div>
                <label
                  htmlFor="jumlah"
                  className="text-sm sm:text-base md:text-lg lg:text-xl font-roboto-400 text-hitamdikit block mt-2"
                >
                  Harga <span className="text-merah">*</span>
                </label>
                <div className="flex w-full border border-hitamdikit/30 rounded-xl overflow-hidden">
                  <div className="border border-hitamdikit/30 rounded-xl rounded-r-none flex items-center justify-center pl-3 pr-15">
                    <p>Rp</p>
                  </div>

                  <input
                    type="number"
                    placeholder="Contoh : 10, 20, 30"
                    className="w-full border border-hitamdikit/30 rounded-xl rounded-l-none px-3 py-2 text-sm sm:text-base md:text-lg lg:text-xl font-roboto-400 text-hitamdikit"
                    {...register('price', {
                      required: 'Harga wajib diisi',
                      valueAsNumber: true,
                    })}
                  />
                </div>
                {errors.price && (
                  <p className="text-red-500 text-sm">{errors.price.message}</p>
                )}
                <p className="text-sm text-hitamdikit/50 font-roboto-400 mt-2">
                  Untuk tracking pengeluaran
                </p>
              </div>
            </div>
          </div>
          {/* Penyimpanan */}
          <div className="bg-white rounded-xl p-10 shadow-lg mt-8">
            <h2 className="border-b pb-2 border-hitamdikit/20 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-roboto-400 text-hitamdikit">
              Penyimpanan
            </h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-[18px] ">
              {Object.entries(lokasiList).map(([key, item]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() =>
                    setValue(
                      'storage_location',
                      key as TTambahBahanScema['storage_location'],
                    )
                  }
                  className={`border border-hitamdikit/20 flex items-center flex-col w-full p-6 rounded-xl cursor-pointer space-y-2 ${selectLocation === key ? 'bg-primaryskyblue' : ''}`}
                >
                  <Image
                    src={item.image}
                    alt={item.displayName || key}
                    width={66}
                    height={58}
                  />

                  <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-roboto-400 text-hitamdikit">
                    {item.displayName || key}
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-roboto-400 text-hitamdikit/50">
                    {item.desc}
                  </p>
                </button>
              ))}

              <input type="hidden" {...register('storage_location')} />
            </div>

            {selectedKategori && (
              <div className="mt-6 p-6 bg-primaryskyblue flex flex-col sm:flex-row gap-3 items-center rounded-xl">
                <TriangleAlert
                  className="text-orangnormal bg-white rounded-xl p-2 w-[58px] h-[58px]"
                  size={38}
                />
                <div className="flex flex-col gap-2">
                  <h4 className="text-sm lg:text-base text-hitamdikit font-roboto-500">
                    Saran Penyimpanan
                  </h4>
                  <p className="text-xs lg:text-sm font-roboto-400 text-hitamdikit/50">
                    {saranPenyimpanan[
                      (categories?.find(
                        (c) => c.id === Number(selectedKategori),
                      )?.categoryName as TKategoriBahan) ??
                        ('' as TKategoriBahan)
                    ] || 'Tidak ada saran'}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* button submit */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <Button
              variant="primary"
              href="/bahan-saya"
              size="lg"
              className="w-full border-text-primary text-text-primary hover:shadow-lg"
            >
              Batalkan
            </Button>
            <Button
              variant="primary"
              size="lg"
              type="submit"
              className="w-full bg-text-primary text-white "
              disabled={isSubmitting || isAddingFood}
            >
              {isSubmitting || isAddingFood ? 'Memproses...' : 'Simpan'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
