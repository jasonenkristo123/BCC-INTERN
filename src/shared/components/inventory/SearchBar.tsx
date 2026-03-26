"use client";

import { useEffect, useState } from "react";
import { useInventoryStore, useActiveStatus } from "@/shared/store/food-store";
import { Search, X, TriangleAlert } from "lucide-react";


export default function SearchBar() {
    const setSearch = useInventoryStore((s) => s.setSearch);
    const currentSearch = useInventoryStore((s) => s.filters.search);
    const [localValue, setLocalValue] = useState(currentSearch);
    const isActive = useActiveStatus((s) => s.isActive);
    const setActive = useActiveStatus((s) => s.setActive);
    const setSortBy = useInventoryStore((s) => s.setSortBy);
    const setSortOrder = useInventoryStore((s) => s.setSortOrder)

    const handleSortByRisk = () => {
        const nextActive = !isActive;
        setActive(nextActive);

        if (nextActive) {
            setSortBy("riskScore");
            setSortOrder("desc");
        } else {
            setSortBy("expiredEstimation");
            setSortOrder("asc");
        }
    }

    // Debounce
    useEffect(() => {
        const timer = setTimeout(() => {
            setSearch(localValue);
        }, 300);
        return () => clearTimeout(timer);
    }, [localValue, setSearch]);

    return (
        <div className="flex-1 min-w-0 w-full flex">
            <div className="flex items-center">
                <div className="xl:w-[440px] xl:h-[40px] relative flex items-center">
                    <input type="text"
                        value={localValue}
                        onChange={(e) => setLocalValue(e.target.value)}
                        placeholder="Cari bahan makanan..." className="w-full h-full rounded-2xl bg-white text-black px-10 focus:outline-none focus:ring focus:ring-primary-lebihmuda" />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    {localValue && (
                        <button
                            onClick={() => {
                                setLocalValue("");
                                setSearch("");
                            }}
                            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    )}
                </div>
            </div>
            <div
                onClick={handleSortByRisk}
                className={`flex items-center justify-center gap-2 px-4 py-[10px] ml-5 rounded-2xl cursor-pointer hover:opacity-80 active:translate-y-1 transition-transform duration-200 ease-in-out active:shadow-inner ${isActive ? 'bg-birumuda text-blackprimary' : 'bg-redlight text-merah'}`}>
                <TriangleAlert className={`w-4 h-4 ${isActive ? 'text-text-primary' : 'text-merah'}`} />
                <p className="font-roboto-400 text-base">
                    Urutkan by Risk
                </p>
            </div>
        </div>
    );
}
