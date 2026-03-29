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

export interface FoodItem {
  id: string
  name: string
  category: FoodCategory
  buyDate: Date
  expiredEstimation: Date
  expiredDate: Date
  price: number
  quantity: string
  storageLocation: StorageLocation
  riskScore: number
  image?: string
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
  category: FoodCategory | 'Semua'
  storageLocation: StorageLocation | 'Semua'
  riskLevel: 'Semua' | 'Rendah' | 'Sedang' | 'Tinggi'
  sortBy: 'name' | 'expiredEstimation' | 'riskScore' | 'price'
  sortOrder: 'asc' | 'desc'
}
