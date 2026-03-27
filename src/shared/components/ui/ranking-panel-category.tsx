



import { formatCurrency } from '@/shared/utils/utils';
import Image from 'next/image';

interface RankingPanelCategoryProps {
    rank: number;
    image: string;
    categoryName: string;
    quantity: string;
    riskScore: number;
    totalPrice: number;
}

export default function RankingPanelCategory({
    rank,
    image,
    categoryName,
    quantity,
    riskScore,
    totalPrice
}: RankingPanelCategoryProps) {
    let rankBgClass = 'bg-[#FEE2E2]';
    let progressFillClass = 'bg-[#EF4444]';

    if (rank >= 1 && rank <= 3) {
        rankBgClass = 'bg-[#FEE2E2]';
        progressFillClass = 'bg-merah';
    } else if (rank === 4) {
        rankBgClass = 'bg-[#FEF3C7]';
        progressFillClass = 'bg-orangnormal';
    } else if (rank >= 5) {
        rankBgClass = 'bg-[#DCFCE7]';
        progressFillClass = 'bg-text-primary';
    }

    return (
        <div className="flex items-center gap-2 sm:gap-4 p-3 sm:p-5 border border-gray-100 rounded-3xl shadow-sm bg-white mb-5 last:mb-0 transition-all hover:shadow-md">
            {/* Rank Circle */}
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-roboto-500 font-bold sm:text-lg shrink-0 text-hitamdikit ${rankBgClass}`}>
                {rank}
            </div>

            {/* Image & Text Info */}
            <div className="flex items-center gap-3 w-[120px] sm:w-[150px] shrink-0">
                <Image width={50} height={50} src={image} alt={categoryName} className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow-sm" />
                <div className="flex flex-col">
                    <span className="font-roboto-500 text-hitamdikit font-roboto-600 text-sm md:text-base truncate max-w-[80px] sm:max-w-[100px]">{categoryName}</span>
                    <span className="text-hitamdikit/50 text-[10px] sm:text-xs lg:text-sm font-roboto-400">{quantity}</span>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="flex-1 px-2 sm:px-4">
                <div className="w-full bg-gray-200/80 rounded-full h-2 sm:h-2.5 overflow-hidden">
                    <div 
                        className={`h-full rounded-full transition-all duration-1000 ${progressFillClass}`}
                        style={{ width: `${Math.min(100, riskScore)}%` }}
                    ></div>
                </div>
            </div>

            {/* Price */}
            <div className="shrink-0 max-w-[80px] sm:max-w-[100px] text-right">
                <span className="font-bold text-hitamdikit text-[11px] sm:text-sm truncate block">
                    {formatCurrency(totalPrice).toUpperCase().replace('RP', 'Rp ')}
                </span>
            </div>
        </div>
    );
}
