import StatsSummary from '@/shared/components/inventory/StatsSummary'
import { FoodItem } from '@/shared/types/food'
import { generateDummyData } from '@/shared/dummyData/foodData'

export default function BahanSayaGrid() {
  const ALL_ITEMS: FoodItem[] = generateDummyData()
  return <StatsSummary items={ALL_ITEMS} />
}
