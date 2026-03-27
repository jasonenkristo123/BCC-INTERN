import type {
  FoodItem,
  FoodCategory,
  StorageLocation,
} from '@/shared/types/food'

const categories: FoodCategory[] = [
  'Umbi-umbian',
  'Sayur-sayuran',
  'Buah-buahan',
  'Daging',
  'Seafood',
  'Telur',
  'Produk Susu',
  'Rempah-rempah',
  'Bumbu Dapur',
  'Biji-bijian',
  'Kacang-kacangan & Legum',
]

const categoriesWithImage: Record<FoodCategory, { image: string }> = {
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

const locations: StorageLocation[] = ['Kulkas', 'Rak / Pantry', 'Freezer']

const foodsByCategory: Record<
  FoodCategory,
  {
    name: string
    qty: string
    price: number
    shelfDays: number
    buyDate: string
    expiredDate: string
  }[]
> = {
  'Umbi-umbian': [
    {
      name: 'Kentang',
      qty: '1 kg',
      price: 15000,
      shelfDays: 30,
      buyDate: '2026-03-01',
      expiredDate: '2026-03-31',
    },
    {
      name: 'Ubi Jalar',
      qty: '500 g',
      price: 8000,
      shelfDays: 20,
      buyDate: '2026-03-10',
      expiredDate: '2026-03-30',
    },
    {
      name: 'Singkong',
      qty: '1 kg',
      price: 6000,
      shelfDays: 14,
      buyDate: '2026-03-15',
      expiredDate: '2026-03-29',
    },
    {
      name: 'Talas',
      qty: '500 g',
      price: 10000,
      shelfDays: 10,
      buyDate: '2026-03-20',
      expiredDate: '2026-03-30',
    },
    {
      name: 'Wortel',
      qty: '1 kg',
      price: 12000,
      shelfDays: 21,
      buyDate: '2026-03-05',
      expiredDate: '2026-03-26',
    },
  ],
  'Sayur-sayuran': [
    {
      name: 'Bayam',
      qty: '1 ikat',
      price: 5000,
      shelfDays: 3,
      buyDate: '2026-03-25',
      expiredDate: '2026-03-28',
    },
    {
      name: 'Kangkung',
      qty: '1 ikat',
      price: 4000,
      shelfDays: 4,
      buyDate: '2026-03-24',
      expiredDate: '2026-03-28',
    },
    {
      name: 'Brokoli',
      qty: '500 g',
      price: 18000,
      shelfDays: 7,
      buyDate: '2026-03-22',
      expiredDate: '2026-03-29',
    },
    {
      name: 'Kol',
      qty: '1 buah',
      price: 8000,
      shelfDays: 14,
      buyDate: '2026-03-18',
      expiredDate: '2026-03-32',
    },
    {
      name: 'Sawi Hijau',
      qty: '1 ikat',
      price: 5000,
      shelfDays: 5,
      buyDate: '2026-03-23',
      expiredDate: '2026-03-28',
    },
    {
      name: 'Terong',
      qty: '500 g',
      price: 9000,
      shelfDays: 7,
      buyDate: '2026-03-21',
      expiredDate: '2026-03-28',
    },
    {
      name: 'Timun',
      qty: '2 buah',
      price: 6000,
      shelfDays: 7,
      buyDate: '2026-03-19',
      expiredDate: '2026-03-26',
    },
    {
      name: 'Tomat',
      qty: '500 g',
      price: 8000,
      shelfDays: 5,
      buyDate: '2026-03-24',
      expiredDate: '2026-03-29',
    },
  ],
  'Buah-buahan': [
    {
      name: 'Apel',
      qty: '1 kg',
      price: 30000,
      shelfDays: 14,
      buyDate: '2026-03-10',
      expiredDate: '2026-03-24',
    },
    {
      name: 'Pisang',
      qty: '1 sisir',
      price: 12000,
      shelfDays: 5,
      buyDate: '2026-03-23',
      expiredDate: '2026-03-28',
    },
    {
      name: 'Mangga',
      qty: '1 kg',
      price: 20000,
      shelfDays: 4,
      buyDate: '2026-03-24',
      expiredDate: '2026-03-28',
    },
    {
      name: 'Jeruk',
      qty: '1 kg',
      price: 18000,
      shelfDays: 14,
      buyDate: '2026-03-12',
      expiredDate: '2026-03-26',
    },
    {
      name: 'Semangka',
      qty: '1/2 buah',
      price: 15000,
      shelfDays: 5,
      buyDate: '2026-03-22',
      expiredDate: '2026-03-27',
    },
    {
      name: 'Anggur',
      qty: '500 g',
      price: 35000,
      shelfDays: 7,
      buyDate: '2026-03-20',
      expiredDate: '2026-03-27',
    },
    {
      name: 'Strawberry',
      qty: '250 g',
      price: 25000,
      shelfDays: 3,
      buyDate: '2026-03-25',
      expiredDate: '2026-03-28',
    },
    {
      name: 'Melon',
      qty: '1 buah',
      price: 22000,
      shelfDays: 7,
      buyDate: '2026-03-21',
      expiredDate: '2026-03-28',
    },
  ],
  Daging: [
    {
      name: 'Daging Sapi',
      qty: '500 g',
      price: 65000,
      shelfDays: 3,
      buyDate: '2026-03-24',
      expiredDate: '2026-03-27',
    },
    {
      name: 'Ayam Fillet',
      qty: '500 g',
      price: 35000,
      shelfDays: 2,
      buyDate: '2026-03-25',
      expiredDate: '2026-03-27',
    },
    {
      name: 'Daging Kambing',
      qty: '500 g',
      price: 80000,
      shelfDays: 3,
      buyDate: '2026-03-23',
      expiredDate: '2026-03-26',
    },
    {
      name: 'Ayam Utuh',
      qty: '1 ekor',
      price: 45000,
      shelfDays: 2,
      buyDate: '2026-03-25',
      expiredDate: '2026-03-27',
    },
    {
      name: 'Sosis Sapi',
      qty: '1 pack',
      price: 28000,
      shelfDays: 7,
      buyDate: '2026-03-20',
      expiredDate: '2026-03-27',
    },
  ],
  Seafood: [
    {
      name: 'Udang Segar',
      qty: '500 g',
      price: 55000,
      shelfDays: 2,
      buyDate: '2026-03-25',
      expiredDate: '2026-03-27',
    },
    {
      name: 'Ikan Salmon',
      qty: '300 g',
      price: 90000,
      shelfDays: 2,
      buyDate: '2026-03-24',
      expiredDate: '2026-03-26',
    },
    {
      name: 'Cumi-cumi',
      qty: '500 g',
      price: 45000,
      shelfDays: 2,
      buyDate: '2026-03-23',
      expiredDate: '2026-03-25',
    },
    {
      name: 'Ikan Lele',
      qty: '500 g',
      price: 18000,
      shelfDays: 1,
      buyDate: '2026-03-25',
      expiredDate: '2026-03-26',
    },
    {
      name: 'Kepiting',
      qty: '1 ekor',
      price: 75000,
      shelfDays: 1,
      buyDate: '2026-03-25',
      expiredDate: '2026-03-26',
    },
    {
      name: 'Ikan Tuna',
      qty: '300 g',
      price: 40000,
      shelfDays: 2,
      buyDate: '2026-03-24',
      expiredDate: '2026-03-26',
    },
  ],
  Telur: [
    {
      name: 'Telur Ayam',
      qty: '1 papan',
      price: 32000,
      shelfDays: 21,
      buyDate: '2026-03-10',
      expiredDate: '2026-03-31',
    },
    {
      name: 'Telur Bebek',
      qty: '10 butir',
      price: 25000,
      shelfDays: 14,
      buyDate: '2026-03-15',
      expiredDate: '2026-03-29',
    },
    {
      name: 'Telur Puyuh',
      qty: '20 butir',
      price: 15000,
      shelfDays: 14,
      buyDate: '2026-03-18',
      expiredDate: '2026-03-32',
    },
  ],
  'Produk Susu': [
    {
      name: 'Susu Segar',
      qty: '1 liter',
      price: 18000,
      shelfDays: 7,
      buyDate: '2026-03-23',
      expiredDate: '2026-03-30',
    },
    {
      name: 'Yogurt Plain',
      qty: '500 ml',
      price: 22000,
      shelfDays: 14,
      buyDate: '2026-03-20',
      expiredDate: '2026-03-34',
    },
    {
      name: 'Keju Cheddar',
      qty: '200 g',
      price: 35000,
      shelfDays: 30,
      buyDate: '2026-03-01',
      expiredDate: '2026-03-31',
    },
    {
      name: 'Butter',
      qty: '250 g',
      price: 28000,
      shelfDays: 60,
      buyDate: '2026-02-20',
      expiredDate: '2026-04-20',
    },
    {
      name: 'Krim Susu',
      qty: '200 ml',
      price: 15000,
      shelfDays: 5,
      buyDate: '2026-03-24',
      expiredDate: '2026-03-29',
    },
  ],
  'Rempah-rempah': [
    {
      name: 'Jahe Segar',
      qty: '200 g',
      price: 8000,
      shelfDays: 30,
      buyDate: '2026-03-05',
      expiredDate: '2026-04-04',
    },
    {
      name: 'Kunyit',
      qty: '200 g',
      price: 6000,
      shelfDays: 21,
      buyDate: '2026-03-10',
      expiredDate: '2026-03-31',
    },
    {
      name: 'Lengkuas',
      qty: '200 g',
      price: 7000,
      shelfDays: 14,
      buyDate: '2026-03-12',
      expiredDate: '2026-03-26',
    },
    {
      name: 'Serai',
      qty: '5 batang',
      price: 5000,
      shelfDays: 10,
      buyDate: '2026-03-18',
      expiredDate: '2026-03-28',
    },
    {
      name: 'Kayu Manis',
      qty: '100 g',
      price: 12000,
      shelfDays: 180,
      buyDate: '2026-01-15',
      expiredDate: '2026-07-15',
    },
  ],
  'Bumbu Dapur': [
    {
      name: 'Bawang Merah',
      qty: '500 g',
      price: 20000,
      shelfDays: 30,
      buyDate: '2026-03-01',
      expiredDate: '2026-03-31',
    },
    {
      name: 'Bawang Putih',
      qty: '500 g',
      price: 18000,
      shelfDays: 45,
      buyDate: '2026-02-25',
      expiredDate: '2026-04-10',
    },
    {
      name: 'Cabai Merah',
      qty: '200 g',
      price: 15000,
      shelfDays: 7,
      buyDate: '2026-03-24',
      expiredDate: '2026-03-31',
    },
    {
      name: 'Cabai Rawit',
      qty: '100 g',
      price: 10000,
      shelfDays: 5,
      buyDate: '2026-03-25',
      expiredDate: '2026-03-30',
    },
    {
      name: 'Tomat Merah',
      qty: '500 g',
      price: 10000,
      shelfDays: 7,
      buyDate: '2026-03-23',
      expiredDate: '2026-03-30',
    },
    {
      name: 'Kemiri',
      qty: '200 g',
      price: 12000,
      shelfDays: 90,
      buyDate: '2026-02-10',
      expiredDate: '2026-05-10',
    },
  ],
  'Biji-bijian': [
    {
      name: 'Beras Putih',
      qty: '5 kg',
      price: 65000,
      shelfDays: 180,
      buyDate: '2026-01-01',
      expiredDate: '2026-07-01',
    },
    {
      name: 'Beras Merah',
      qty: '2 kg',
      price: 38000,
      shelfDays: 120,
      buyDate: '2026-02-01',
      expiredDate: '2026-06-01',
    },
    {
      name: 'Jagung',
      qty: '3 buah',
      price: 9000,
      shelfDays: 7,
      buyDate: '2026-03-22',
      expiredDate: '2026-03-29',
    },
    {
      name: 'Gandum Utuh',
      qty: '1 kg',
      price: 25000,
      shelfDays: 180,
      buyDate: '2026-01-20',
      expiredDate: '2026-07-20',
    },
    {
      name: 'Quinoa',
      qty: '500 g',
      price: 45000,
      shelfDays: 365,
      buyDate: '2025-12-01',
      expiredDate: '2026-12-01',
    },
  ],
  'Kacang-kacangan & Legum': [
    {
      name: 'Kacang Tanah',
      qty: '500 g',
      price: 15000,
      shelfDays: 90,
      buyDate: '2026-02-10',
      expiredDate: '2026-05-10',
    },
    {
      name: 'Tempe',
      qty: '1 papan',
      price: 8000,
      shelfDays: 4,
      buyDate: '2026-03-24',
      expiredDate: '2026-03-28',
    },
    {
      name: 'Tahu Putih',
      qty: '4 buah',
      price: 6000,
      shelfDays: 3,
      buyDate: '2026-03-25',
      expiredDate: '2026-03-28',
    },
    {
      name: 'Kacang Hijau',
      qty: '500 g',
      price: 14000,
      shelfDays: 180,
      buyDate: '2026-01-15',
      expiredDate: '2026-07-15',
    },
    {
      name: 'Edamame',
      qty: '300 g',
      price: 18000,
      shelfDays: 5,
      buyDate: '2026-03-23',
      expiredDate: '2026-03-28',
    },
    {
      name: 'Lentil Merah',
      qty: '500 g',
      price: 22000,
      shelfDays: 365,
      buyDate: '2025-11-20',
      expiredDate: '2026-11-20',
    },
  ],
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

export function generateDummyData(): FoodItem[] {
  const items: FoodItem[] = []
  let idCounter = 1

  const baseDate = new Date('2026-03-25')

  for (const [catIndex, [cat, foods]] of Object.entries(
    foodsByCategory,
  ).entries()) {
    foods.forEach((food, index) => {
      const offset = (catIndex + index) % 10 // bikin variasi

      const buyDate = addDays(baseDate, -offset)
      const expiredEstimation = addDays(buyDate, food.shelfDays)
      const today = baseDate

      const daysLeft = Math.ceil(
        (expiredEstimation.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
      )

      let riskScore = 0
      if (daysLeft <= 0) riskScore = 90
      else if (daysLeft < 3) riskScore = 70
      else if (daysLeft < 6) riskScore = 50
      else riskScore = 20

      items.push({
        id: `food-${idCounter++}`,
        name: food.name,
        category: cat as FoodCategory,
        buyDate,
        expiredEstimation,
        expiredDate: new Date(food.expiredDate),
        price: food.price,
        quantity: food.qty,
        storageLocation: 'Kulkas',
        riskScore,
        image: categoriesWithImage[cat as FoodCategory].image,
      })
    })
  }

  return items
}

export const ALL_CATEGORIES: ('Semua' | FoodCategory)[] = [
  'Semua',
  ...categories,
]

export const ALL_LOCATIONS = ['Semua', ...locations] as const

export const ALL_ITEMS = generateDummyData()
