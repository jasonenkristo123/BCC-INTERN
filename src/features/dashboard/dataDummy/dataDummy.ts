export interface FoodItem {
  id: number
  name: string
  weight: string
  loss: number
  daysLeft: number
  image: string
}

export const dataDummy: FoodItem[] = [
  {
    id: 1,
    name: 'Daging Sapi',
    weight: '500g',
    loss: 35000,
    daysLeft: 1,
    image: '🥩',
  },
  {
    id: 2,
    name: 'Bawang Merah',
    weight: '500g',
    loss: 16000,
    daysLeft: 5,
    image: '🧅',
  },
  {
    id: 3,
    name: 'Udang',
    weight: '500g',
    loss: 35000,
    daysLeft: 10,
    image: '🦐',
  },
  {
    id: 4,
    name: 'Ayam Fillet',
    weight: '250g',
    loss: 28000,
    daysLeft: 2,
    image: '🍗',
  },
  {
    id: 5,
    name: 'Tahu Sutra',
    weight: '300g',
    loss: 8000,
    daysLeft: 4,
    image: '🟨',
  },
  {
    id: 6,
    name: 'Salmon Fillet',
    weight: '200g',
    loss: 55000,
    daysLeft: 7,
    image: '🐟',
  },
]

export const dataDummyTren = [
  {
    days: 'Senin',
    expired: 18,
  },
  {
    days: 'Selasa',
    expired: 58,
  },
  {
    days: 'Rabu',
    expired: 13,
  },
  {
    days: 'Kamis',
    expired: 55,
  },
  {
    days: 'Jumat',
    expired: 18,
  },
  {
    days: 'Sabtu',
    expired: 18,
  },
  {
    days: 'Minggu',
    expired: 18,
  },
]
