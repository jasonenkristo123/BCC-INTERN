'use client'

import { useInventoryStore } from '../../store/food-store'
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface PaginationProps {
  totalItems: number
}

export default function Pagination({ totalItems }: PaginationProps) {
  const currentPage = useInventoryStore((s) => s.currentPage)
  const itemsPerPage = useInventoryStore((s) => s.itemsPerPage)
  const setPage = useInventoryStore((s) => s.setPage)

  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startItem = (currentPage - 1) * itemsPerPage + 1
  const endItem = Math.min(currentPage * itemsPerPage, totalItems)

  if (totalPages <= 1) return null

  return (
    <div className="flex items-center justify-between px-1">
      <p className="text-sm lg:text-[16px] text-hitamdikit/50 font-roboto-500">
        Menampilkan {startItem} - {endItem} dari {totalItems} bahan
      </p>

      <div className="flex items-center gap-6 pr-6">
        <button
          onClick={() => setPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-12 h-12 rounded-full border border-text-primary flex items-center justify-center text-white bg-text-primary hover:border-emerald-300 disabled:bg-white disabled:text-text-primary disabled:cursor-not-allowed transition-all shadow-sm"
        >
          <ArrowLeft />
        </button>

        <button
          onClick={() => setPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-12 h-12 rounded-full border border-text-primary flex items-center justify-center text-white bg-text-primary hover:border-emerald-300 disabled:bg-white disabled:text-text-primary disabled:cursor-not-allowed transition-all shadow-sm"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  )
}
