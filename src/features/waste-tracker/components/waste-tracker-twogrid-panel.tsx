import { useSelectMonth } from "../../../shared/store/food-store";
import { useMemo } from "react";
import { ALL_ITEMS } from "@/shared/dummyData/foodData";
import { filterItemsByMonth, getAvailableMonths, getExpiryStatus, formatCurrency } from "@/shared/utils/utils";
import { Doughnut } from "react-chartjs-2";
import { FoodCategory } from "@/shared/types/food";
import 'chart.js/auto';
import RankingPanelCategory from "../../../shared/components/ui/ranking-panel-category";



const categoryColorMap: Record<FoodCategory | string, string> = {
    'Umbi-umbian': '#F09595',
    'Sayur-sayuran': '#97C459',
    'Buah-buahan': '#ED93B1',
    'Daging': '#F0997B',
    'Seafood': '#5DCAA5',
    'Telur': '#D3D1C7',
    'Produk Susu': '#85B7EB',
    'Rempah-rempah': '#F5C4B3',
    'Bumbu Dapur': '#FAC775',
    'Biji-bijian': '#EF9F27',
    'Kacang-kacangan & Legum': '#C0DD97',
};

export default function WasteTrackerTwoGridPanel() {
    const items = ALL_ITEMS;
    const availableMonths = useMemo(() => getAvailableMonths(items), [items]);
    const selectedMonth = useSelectMonth((s) => s.selectedMonth);

    const monthLabel = useMemo(() => {
        return availableMonths.find(m => m.value === selectedMonth)?.label || selectedMonth;
    }, [availableMonths, selectedMonth]);

    const chartData = useMemo(() => {
        const filteredItems = filterItemsByMonth(items, selectedMonth);
        const expiredItems = filteredItems.filter(
            (item) => getExpiryStatus(item.expiredEstimation).status === "expired"
        );

        const categoryData: Record<string, number> = {};
        expiredItems.forEach((item) => {
            categoryData[item.category] = (categoryData[item.category] || 0) + item.price;
        });

        // Sort descending 
        const sortedCategories = Object.entries(categoryData)
            .sort(([, a], [, b]) => b - a);

        const labels = sortedCategories.map(([cat]) => cat);
        const data = sortedCategories.map(([, value]) => value);
        const bgColors = labels.map(cat => categoryColorMap[cat] || '#C1C1C1');
        const totalValue = data.reduce((acc, curr) => acc + curr, 0);

        return {
            labels,
            data,
            bgColors,
            rawData: sortedCategories,
            totalValue,
            chartProps: {
                labels,
                datasets: [
                    {
                        data,
                        backgroundColor: bgColors,
                        hoverOffset: 4,
                        borderWidth: 0,
                        circumference: 360,
                    },
                ],
            }
        };
    }, [items, selectedMonth]);

    const topRiskCategories = useMemo(() => {
        const categoryData: Record<string, { totalRiskScore: number, totalPrice: number, sumQty: number, unit: string, image: string }> = {};
        const filteredItems = filterItemsByMonth(items, selectedMonth);

        filteredItems.forEach(item => {
            if (!categoryData[item.category]) {
                categoryData[item.category] = { totalRiskScore: 0, totalPrice: 0, sumQty: 0, unit: 'kg', image: item.image || '/kategori/umbi.webp' };
            }

            categoryData[item.category].totalRiskScore += item.riskScore;
            categoryData[item.category].totalPrice += item.price;

            const qtyMatch = item.quantity.match(/([\d.]+)\s*(.*)/);
            if (qtyMatch) {
                categoryData[item.category].sumQty += parseFloat(qtyMatch[1]) || 0;
                if (!categoryData[item.category].unit || categoryData[item.category].unit === 'kg') {
                    categoryData[item.category].unit = qtyMatch[2] || 'kg';
                }
            } else {
                categoryData[item.category].sumQty += 1;
            }
        });

        const sortedArray = Object.entries(categoryData)
            .sort(([, a], [, b]) => b.totalRiskScore - a.totalRiskScore)
            .slice(0, 5);

        const maxScore = sortedArray.length > 0 ? sortedArray[0][1].totalRiskScore : 100;

        return sortedArray.map(([cat, data], index) => {
            const progressScore = (data.totalRiskScore / Math.max(1, maxScore)) * 90;

            return {
                rank: index + 1,
                categoryName: cat,
                quantity: `${data.sumQty} ${data.unit}`.trim(),
                riskScore: progressScore,
                totalPrice: data.totalPrice,
                image: data.image
            };
        });
    }, [items, selectedMonth]);

    return (
        <div className="mt-8 px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white px-6 py-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 sm:mb-8 gap-2">
                    <h2 className="text-lg xl:text-xl font-roboto-500 text-hitamdikit">
                        Bahan Terbuang per Kategori
                    </h2>
                    <p className="text-sm font-roboto-400 text-hitamdikit/50">
                        {monthLabel}
                    </p>
                </div>

                {chartData.totalValue > 0 ? (
                    <>
                        <div className="relative h-[240px] flex items-center justify-center">
                            <Doughnut
                                data={chartData.chartProps}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    plugins: {
                                        legend: {
                                            display: false,
                                        },
                                        tooltip: {
                                            callbacks: {
                                                label: (context) => {
                                                    const label = context.label || "";
                                                    const value = context.parsed;
                                                    const percentage = ((value / chartData.totalValue) * 100).toFixed(0);
                                                    return `${label}: ${formatCurrency(value)} (${percentage}%)`;
                                                },
                                            },
                                        },
                                    },
                                    cutout: "65%",
                                    circumference: 360,
                                    animation: {
                                        animateRotate: true,
                                        animateScale: false,
                                    },
                                    animations: {
                                        circumference: {
                                            from: 0,
                                            duration: 10000,
                                            easing: "easeOutCubic",
                                        }
                                    }
                                }}
                            />

                            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-2">
                                <span className="text-hitamdikit/50 text-base lg:text-xl font-roboto-500">Total</span>
                                <span className="text-hitamdikit text-2xl font-bold font-roboto-500">100%</span>
                            </div>
                        </div>

                        <div className="mt-8 space-y-4">
                            {chartData.rawData.map(([cat, value], index) => {
                                const percentage = ((value / chartData.totalValue) * 100).toFixed(0);
                                return (
                                    <div key={cat} className="flex items-center justify-between text-sm sm:text-[15px] gap-2">
                                        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                                            <div
                                                className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full shrink-0"
                                                style={{ backgroundColor: chartData.bgColors[index] }}
                                            />
                                            <span className="text-hitamdikit font-roboto-400 truncate">{cat}</span>
                                        </div>
                                        <div className="flex items-center gap-3 sm:gap-8 justify-end min-w-max">
                                            <span className="text-hitamdikit text-xs sm:text-sm font-roboto-400">
                                                {formatCurrency(value).toUpperCase().replace('RP', 'RP ')}
                                            </span>
                                            <span className="text-hitamdikit font-roboto-500 font-bold w-10 sm:w-12 text-right">
                                                {percentage}%
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center h-[200px] text-hitamdikit/30 italic">
                        <p>Tidak ada data bahan terbuang</p>
                        <p className="text-xs">untuk bulan ini</p>
                    </div>
                )}
            </div>

            <div className="bg-white px-6 py-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-6 sm:mb-8">
                    <h2 className="font-roboto-500 text-lg xl:text-xl text-hitamdikit">
                        Risk Ranking - Kategori Banyak Terbuang
                    </h2>
                    <p className="text-hitamdikit/50 font-roboto-400 text-sm">
                        Berdasarkan nilai
                    </p>
                </div>

                <div className="space-y-2 flex flex-col">
                    {topRiskCategories.length > 0 ? (
                        topRiskCategories.map((cat) => (
                            <RankingPanelCategory
                                key={cat.categoryName}
                                rank={cat.rank}
                                image={cat.image}
                                categoryName={cat.categoryName}
                                quantity={cat.quantity}
                                riskScore={cat.riskScore}
                                totalPrice={cat.totalPrice}
                            />
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center h-[200px] text-hitamdikit/30 italic">
                            <p>Tidak ada data ranking</p>
                            <p className="text-xs">untuk bulan ini</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}