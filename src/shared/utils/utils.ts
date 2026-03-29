import type { ExpiryInfo, ExpiryStatus, FoodItem } from '@/shared/types/food'

export function getExpiryStatus(expiredEstimation: Date): ExpiryInfo {
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  const exp = new Date(expiredEstimation)
  exp.setHours(0, 0, 0, 0)

  const diffMs = exp.getTime() - now.getTime()
  const daysLeft = Math.ceil(diffMs / (1000 * 60 * 60 * 24))

  let status: ExpiryStatus
  if (daysLeft <= 0) {
    status = 'expired'
  } else if (daysLeft < 3) {
    status = 'expired' // treat < 3 days as red
  } else if (daysLeft < 6) {
    status = 'warning'
  } else {
    status = 'safe'
  }

  const configs: Record<
    ExpiryStatus,
    Omit<ExpiryInfo, 'daysLeft' | 'label' | 'actionLabel'>
  > = {
    expired: {
      status: 'expired',
      cardBorderClass: 'border-merah',
      badgeBgClass: 'bg-redlight',
      badgeTextClass: 'text-merah',
      progressBarClass: 'bg-merah',
      actionBtnClass:
        'border-2 border-merah text-merah hover:bg-redlight font-semibold',
      bgModalColor: "bg-redlight",
      iconModal: "/assets/gunakaniconmerah.webp"
    },
    warning: {
      status: 'warning',
      cardBorderClass: 'border-orangnormal',
      badgeBgClass: 'bg-redlight',
      badgeTextClass: 'text-orangnormal',
      progressBarClass: 'bg-orangnormal',
      actionBtnClass:
        'border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-semibold',
      bgModalColor: 'bg-orange-muda',
      iconModal: "/assets/gunakaniconoren.webp"
    },
    safe: {
      status: 'safe',
      cardBorderClass: 'border-text-primary',
      badgeBgClass: 'bg-primaryskyblue',
      badgeTextClass: 'text-text-primary',
      progressBarClass: 'bg-text-primary',
      actionBtnClass:
        'border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 font-semibold',
      bgModalColor: "bg-primaryskyblue",
      iconModal: "/assets/gunakanicon.webp"
    },
  }

  let label: string
  if (daysLeft <= 0) {
    label = `${Math.abs(daysLeft)} Hari Lewat`
  } else if (daysLeft === 1) {
    label = '1 Hari Lagi'
  } else {
    label = `${daysLeft} Hari Lagi`
  }

  const actionLabel: 'Buang' | 'Gunakan' = daysLeft <= 0 ? 'Buang' : 'Gunakan'

  return {
    ...configs[status],
    daysLeft,
    label,
    actionLabel,
  }
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(amount)
    .replace('IDR', 'Rp')
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date))
}

export function getAvailableMonths(items: FoodItem[]) {
  const monthMap = new Map()

  items.forEach((item) => {
    const date = new Date(item.buyDate)
    const value = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
    const label = date.toLocaleString('id-ID', {
      month: 'long',
      year: 'numeric',
    })

    if (!monthMap.has(value)) {
      monthMap.set(value, label)
    }
  })

  return Array.from(monthMap.entries())
    .map(([value, label]) => ({ value, label }))
    .sort((a, b) => b.value.localeCompare(a.value))
}

export function filterItemsByMonth(
  items: FoodItem[],
  monthYear: string,
  type: 'buy' | 'expired' = 'buy',
) {
  if (!monthYear) return items

  return items.filter((item) => {
    const rawDate = type === 'buy' ? item.buyDate : item.expiredDate

    if (!rawDate) return false

    const date = new Date(rawDate)
    if (isNaN(date.getTime())) return false

    const itemMonthYear = date.toISOString().slice(0, 7)

    return itemMonthYear === monthYear
  })
}
