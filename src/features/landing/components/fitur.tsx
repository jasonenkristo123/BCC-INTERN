import FeatureCard from '@/shared/components/ui/card'

const features = [
  {
    label: 'Estimasi Masa Simpan',
    description: 'Ketahui berapa lama bahan makanan bisa disimpan.',
    imageSrc: '/assets/frame1.webp',
    imageAlt: 'Ilustrasi kulkas dengan bahan makanan',
    contentImg: '/assets/kulkas.webp',
  },
  {
    label: 'Reminder Sebelum Basi',
    description: 'Jangan sampai bahan makanan basi karena lupa.',
    imageSrc: '/assets/frame2.webp',
    imageAlt: 'Ilustrasi sayuran segar',
    contentImg: '/assets/buah.webp',
  },
  {
    label: 'Food Waste Cost Estimator',
    description: 'Pernah sadar berapa uang yang hilang karena makanan dibuang?',
    imageSrc: '/assets/frame3.webp',
    imageAlt: 'Ilustrasi makanan yang terbuang',
    contentImg: '/assets/buahbusuk.webp',
  },
]

export default function FiturPage() {
  return (
    <section
      id="fitur"
      className="w-full min-h-screen bg-lightblue py-15 md:py-24"
    >
      <div className="px-6 md:px-12 lg:px-20 w-full max-w-360 mx-auto">
        {/* Section header */}
        <div className="mb-10 lg:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-roboto-500 mb-4 leading-tight">
            Cara Simpanin.id Membantu Mengurangi Food Waste
          </h2>
          <p className="text-base md:text-lg lg:text-xl font-roboto-400 text-text-secondary w-full tracking-wider">
            Dirancang untuk memudahkan gaya hidup hemat dan berkelanjutan
            melalui manajemen inventori makanan yang pintar.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.label}
              className={`w-full flex justify-center ${
                index === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <FeatureCard
                label={feature.label}
                description={feature.description}
                bgImgSrc={feature.imageSrc}
                imageAlt={feature.imageAlt}
                contentImg={feature.contentImg}
                className="w-full max-w-[441px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
