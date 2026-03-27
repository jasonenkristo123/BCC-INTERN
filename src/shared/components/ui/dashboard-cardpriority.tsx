import { FoodItem } from '@/shared/types/food'
import Button from './button'
import Image from 'next/image'

type ExpiryLevel = 'red' | 'orange' | 'green'

function getExpiryLevel(daysleft: number): ExpiryLevel {
  if (daysleft <= 2) return 'red'
  if (daysleft <= 5) return 'orange'
  return 'green'
}

const LEVEL_CONFIG: Record<
  ExpiryLevel,
  {
    bg: string
    border: string
    badgeBg: string
    btnBg: string
    btnText: string
    btnBorder: string
    lossText: string
    statusText: string
    statusLabel: string
  }
> = {
  red: {
    bg: 'bg-redlight',
    border: 'border-redlight',
    badgeBg: 'bg-redlight',
    btnBg:
      'bg-merah hover:bg-red-950 hover:text-white shadow-red-200 shadow-md',
    btnText: 'text-white',
    btnBorder: '',
    lossText: 'text-merah',
    statusText: 'text-red-500',
    statusLabel: 'Harus segera digunakan',
  },
  orange: {
    bg: 'bg-orange-muda',
    border: 'border-orange-muda',
    badgeBg: 'bg-orange-muda',
    btnBg:
      'hover:bg-orangnormal hover:text-white text-orangnormal border border-orangnormal shadow-sm',
    btnText: 'text-black',
    btnBorder: 'border border-orangnormal',
    lossText: 'text-merah',
    statusText: 'text-orangnormal',
    statusLabel: 'Perlu diperhatikan',
  },
  green: {
    bg: 'bg-skyblue',
    border: 'border-skyblue',
    badgeBg: 'bg-skyblue',
    btnBg:
      ' hover:bg-text-primary hover:text-white text-emerald-600 border border-text-primary shadow-emerald-100 shadow-sm',
    btnText: 'text-text-primary',
    btnBorder: 'border border-text-primary',
    lossText: 'text-text-primary',
    statusText: 'text-text-primary',
    statusLabel: 'Aman',
  },
}

interface FoodExpiryCardProps {
  item: FoodItem
  onUse?: (id: string) => void
}

function formatRupiah(amount: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  })
    .format(amount)
    .replace('IDR', 'Rp')
}

export default function FoodExpiryCard({ item, onUse }: FoodExpiryCardProps) {
  const today = new Date('2026-03-25')
  const daysLeft = Math.ceil(
    (new Date(item.expiredEstimation).getTime() - today.getTime()) /
      (1000 * 60 * 60 * 24),
  )

  const level = getExpiryLevel(daysLeft)
  const cfg = LEVEL_CONFIG[level]

  return (
    <div
      className={`flex flex-col sm:flex-row flex-wrap items-start gap-3 rounded-2xl border p-3 sm:p-4 transition-all duration-200 hover:shadow-lg active:scale-[0.99] ${cfg.bg} ${cfg.border}`}
    >
      {/* Top row: icon + text */}
      <div className="flex flex-1 items-center gap-3 min-w-0">
        <div className="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm overflow-hidden relative">
          {item.image && (
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
            />
          )}
        </div>

        <div className="flex flex-col gap-1 min-w-0">
          <p className="truncate font-roboto-500 text-blackprimary text-[13px] sm:text-[15px] lg:text-xl leading-[150%]">
            {item.name}&nbsp;
            <span className="font-roboto-500 text-blackprimary">
              ({item.quantity})
            </span>
          </p>
          <p className="text-[11px] sm:text-xs lg:text-sm text-brown/70  font-roboto-700">
            Jika tidak digunakan total kerugian&nbsp;
            <span className={`${cfg.lossText}`}>
              {formatRupiah(item.price)}
            </span>
          </p>
          <div className="mt-0.5 flex items-center gap-1.5 flex-wrap">
            <span
              className={`text-[11px] sm:text-xs font-roboto-500 lg:text-sm ${cfg.statusText}`}
            >
              Sisa {daysLeft} hari lagi - {cfg.statusLabel}
            </span>
          </div>
        </div>
      </div>

      <Button
        variant="primary"
        size="sm"
        onClick={() => onUse?.(item.id)}
        className={`${cfg.btnBg} ${cfg.btnText} ${cfg.btnBorder} cursor-pointer self-center shrink-0 px-3 sm:px-6 text-xs sm:text-sm`}
      >
        Gunakan
      </Button>
    </div>
  )
}
