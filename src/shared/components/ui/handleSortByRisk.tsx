import { TriangleAlert } from "lucide-react"


type HandleSortByRiskProps = {
    handleSortByRisk: () => void
    isActive: boolean
}



export default function handleSortByRisk({handleSortByRisk, isActive}: HandleSortByRiskProps) {
    return (
        <div
            onClick={handleSortByRisk}
            className={`flex items-center justify-center gap-2 px-4 py-[10px] ml-5 rounded-2xl cursor-pointer hover:opacity-80 active:translate-y-1 transition-transform duration-200 ease-in-out active:shadow-inner ${isActive ? 'bg-birumuda text-blackprimary' : 'bg-redlight text-merah'}`}
        >
            <TriangleAlert
                className={`w-4 h-4 ${isActive ? 'text-text-primary' : 'text-merah'}`}
            />
            <p className="font-roboto-400 text-base">Urutkan by Risk</p>
        </div>
    )
}