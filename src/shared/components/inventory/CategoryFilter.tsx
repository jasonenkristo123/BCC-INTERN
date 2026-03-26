"use client";

import { useInventoryStore } from "@/shared/store/food-store";
import { ALL_CATEGORIES } from "@/shared/dummyData/foodData";
import type { FoodCategory } from "@/shared/types/food";

const VISIBLE_COUNT = 5;

export default function CategorySlider() {
    const selectedCategory = useInventoryStore((s) => s.filters.category);
    const setCategory = useInventoryStore((s) => s.setCategory);
    const sliderIndex = useInventoryStore((s) => s.categorySliderIndex);
    const setSliderIndex = useInventoryStore((s) => s.setCategorySliderIndex);

    const maxIndex = Math.max(0, ALL_CATEGORIES.length - VISIBLE_COUNT);
    const visibleCategories = ALL_CATEGORIES.slice(sliderIndex, sliderIndex + VISIBLE_COUNT);

    return (
        <div className="flex items-center gap-2">
            <span className="text-xs lg:text-sm font-roboto-400 text-hitamdikit whitespace-nowrap">
                Kategori:
            </span>

            <button
                onClick={() => setSliderIndex(Math.max(0, sliderIndex - 1))}
                disabled={sliderIndex === 0}
                className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-white border border-gray-200 text-gray-500 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 shadow-sm"
            >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <div className="flex items-center gap-2 overflow-hidden">
                {visibleCategories.map((cat) => {
                    const isSelected = selectedCategory === cat;
                    return (
                        <button
                            key={cat}
                            onClick={() => setCategory(cat as FoodCategory | "Semua")}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-roboto-500 whitespace-nowrap transition-all duration-200 ${isSelected ? "bg-text-primary text-white shadow-md " : "bg-white border border-gray-200 text-gray-600 hover:border-text-primary hover:text-text-primary hover:bg-emerald-50"
                                }`}>
                            {cat}
                        </button>
                    );
                })}
            </div>

            <button
                onClick={() => setSliderIndex(Math.min(maxIndex, sliderIndex + 1))}
                disabled={sliderIndex >= maxIndex}
                className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-white border border-gray-200 text-gray-500 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 shadow-sm"
            >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
}
