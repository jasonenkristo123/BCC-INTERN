import FoodInventory from '@/shared/components/inventory/FoodInventory'
import RiskStatus from '@/shared/components/inventory/RiskStatus'
import SearchBarWithRisk from '@/shared/components/inventory/SearchBarWithRisk'

export default function BahanSayaSearch() {
  return (
    <div className="px-8 py-8">
      <RiskStatus />
      <SearchBarWithRisk />
      <FoodInventory />
    </div>
  )
}
