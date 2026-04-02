export type StorageLocation = 'Kulkas' | 'Rak / Pantry' | 'Freezer'

export type FoodCategory =
  | 'Umbi-umbian'
  | 'Sayur-sayuran'
  | 'Buah-buahan'
  | 'Daging'
  | 'Seafood'
  | 'Telur'
  | 'Produk Susu'
  | 'Rempah-rempah'
  | 'Bumbu Dapur'
  | 'Biji-bijian'
  | 'Kacang-kacangan & Legum'

export type ExpiryStatus = 'expired' | 'warning' | 'safe'

/** Shape returned by the /category API */
export interface CategoryItem {
  id: number
  categoryPublicId: string
  categoryName: string
  categoryProfile: string
}

/** Categories with local fallback images */
export const categoriesWithImage: Record<string, { image: string }> = {
  'Umbi-umbian': { image: '/kategori/umbi.webp' },
  'Sayur-sayuran': { image: '/kategori/sayur.webp' },
  'Buah-buahan': { image: '/kategori/buahbuah.webp' },
  Daging: { image: '/kategori/dagings.webp' },
  Seafood: { image: '/kategori/seafood.webp' },
  Telur: { image: '/kategori/telur.webp' },
  'Produk Susu': { image: '/kategori/milk.webp' },
  'Rempah-rempah': { image: '/kategori/rempah.webp' },
  'Bumbu Dapur': { image: '/kategori/bumbu.webp' },
  'Biji-bijian': { image: '/kategori/biji.webp' },
  'Kacang-kacangan & Legum': { image: '/kategori/kacang.webp' },
}

export interface ApiFoodItem {
  id: number
  food_category_id: number
  name: string
  current_weight: number
  unit_weight: string
  purchase_date: string
  expiry_date: string
  days_left: number
  total_price: number
  storage_location: string
  risk_score: number
}

export function mapStorageLocation(apiLocation: string): StorageLocation {
  const mapping: Record<string, StorageLocation> = {
    refrigerator: 'Kulkas',
    kulkas: 'Kulkas',
    freezer: 'Freezer',
    room_temperature: 'Rak / Pantry',
  }
  return mapping[apiLocation.toLowerCase()] || 'Kulkas'
}

export interface FoodItem {
  id: string
  name: string
  category: string
  food_category_id: number
  purchase_date: Date
  expiry_date: Date
  total_price: number
  days_left: number
  storage_location: StorageLocation
  risk_score: number
  image: { image: string } | null
  unit_weight: string
  current_weight: number
  used_weight: number
  discarded_weight: number
}

export interface ExpiryInfo {
  status: ExpiryStatus
  daysLeft: number
  label: string
  cardBorderClass: string
  badgeBgClass: string
  badgeTextClass: string
  progressBarClass: string
  actionLabel: 'Buang' | 'Gunakan'
  actionBtnClass: string
  bgModalColor: string
  iconModal: string
}

export interface FilterState {
  search: string
  category: string | 'Semua'
  storageLocation: StorageLocation | 'Semua'
  riskLevel: 'Semua' | 'Rendah' | 'Sedang' | 'Tinggi'
  sortBy: 'name' | 'expiredEstimation' | 'riskScore' | 'price'
  sortOrder: 'asc' | 'desc'
}
