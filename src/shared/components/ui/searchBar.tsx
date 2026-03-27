'use client'

import { Search, X } from 'lucide-react'
import { useEffect } from 'react'

type searchBarProps = {
  localValue: string
  setLocalValue: (value: string) => void
  setSearch: (value: string) => void
}

export default function SearchBar({
  localValue,
  setLocalValue,
  setSearch,
}: searchBarProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(localValue)
    }, 300)
    return () => clearTimeout(timer)
  }, [localValue, setSearch])

  return (
    <div className="xl:w-[440px] xl:h-[40px] relative flex items-center">
      <input
        type="text"
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        placeholder="Cari bahan makanan..."
        className="w-full h-full rounded-2xl bg-white text-black px-10 focus:outline-none focus:ring focus:ring-primary-lebihmuda"
      />
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
      {localValue && (
        <button
          onClick={() => {
            setLocalValue('')
            setSearch('')
          }}
          className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}
