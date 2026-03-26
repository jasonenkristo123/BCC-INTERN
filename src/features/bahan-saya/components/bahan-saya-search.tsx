import FoodInventory from '@/shared/components/inventory/FoodInventory'
import RiskStatus from '@/shared/components/inventory/RiskStatus'
import SearchBar from '@/shared/components/inventory/SearchBar'

export default function BahanSayaSearch() {
  return (
    <div className="px-8 py-8">
      <RiskStatus />
      <SearchBar />
      <FoodInventory />
    </div>
  )
}
