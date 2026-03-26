"use client";

import { generateDummyData } from "@/shared/dummyData/foodData";
import { useFilteredItems } from "@/shared/lib/useFilteredItems";
import CategorySlider from "@/shared/components/inventory/CategoryFilter";
import FilterSection from "@/shared/components/inventory/LocationFilter";
import FoodRow from "@/shared/components/inventory/FoodRow";
import Pagination from "@/shared/components/inventory/Pagination";
import EmptyState from "@/shared/components/inventory/EmptyState";
import type { FoodItem } from "@/shared/types/food";
import { TriangleAlert } from "lucide-react";

// Generate once outside the component (stable reference across renders)
const ALL_ITEMS: FoodItem[] = generateDummyData();

export default function FoodInventory() {
    const { paginatedItems, totalItems } = useFilteredItems(ALL_ITEMS);

    return (
        <div className="w-full">
                
                <div className="rounded-2xl border border-gray-200/60 shadow-sm p-3 sm:p-4 space-y-3.5 flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-6">
                    
                    <div className="w-full sm:w-auto overflow-x-auto">
                        <CategorySlider />
                    </div>
                    <div className="bg-text-primary w-[2px] h-6 hidden sm:block shrink-0"/>
                    <div className="w-full sm:w-auto pb-3">
                        <FilterSection />
                    </div>
                </div>

                {/* header */}
                <div className=" rounded-2xl border border-gray-200/60 shadow-sm overflow-hidden">

                    <div className="hidden lg:flex items-center justify-between gap-4 px-8 py-6 bg-white border-b border-text-primary">
                        <div className="w-[230px] shrink-0 pl-18">
                            <ColHeader>Nama Bahan</ColHeader>
                        </div>
                        <div className="w-[145px] shrink-0 text-start pl-5">
                            <ColHeader>Tanggal Beli</ColHeader>
                        </div>
                        <div className="w-[230px] shrink-0 text-start  ">
                            <ColHeader>Estimasi Kedaluwarsa</ColHeader>
                        </div>
                        <div className="w-[145px] shrink-0 text-start pr-40">
                            <ColHeader>Harga</ColHeader>
                        </div>
                        <div className="w-[100px] shrink-0 text-start pr-35">
                            <ColHeader>Lokasi</ColHeader>
                        </div>
                        <div className="w-[250px] shrink-0">
                            <ColHeader>
                            <div className="flex items-center gap-4">
                                <TriangleAlert />
                                Risk Score
                            </div>
                            </ColHeader>
                        </div>
                        <div className="w-[211px] shrink-0 text-center ">
                            <ColHeader>Aksi</ColHeader>
                        </div>
                    </div>

                    {/* Rows */}
                    <div className="space-y-1 lg:space-y-1.5 w-full">
                        {paginatedItems.length > 0 ? (
                            paginatedItems.map((item, index) => (
                                <FoodRow key={item.id} item={item} index={index} />
                            ))
                        ) : (
                            <EmptyState />
                        )}
                    </div>

                    {/* Pagination  */}
                    {totalItems > 0 && (
                        <div className="px-5 py-4 border-t border-gray-100 bg-gray-50/40">
                            <Pagination totalItems={totalItems} />
                        </div>
                    )}
                </div>
        </div>
    );
}

function ColHeader({ children }: { children: React.ReactNode }) {
    return (
        <span className="text-[11px] lg:text-[16px] font-roboto-600 text-blackprimary">
            {children}
        </span>
    );
}
