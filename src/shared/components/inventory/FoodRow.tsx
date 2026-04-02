'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import type { FoodItem } from '@/shared/types/food'
import {
  getExpiryStatus,
  formatCurrency,
  formatDate,
} from '@/shared/utils/utils'
import Button from '../ui/button'
import { Ellipsis } from 'lucide-react'
import useMenu from '@/shared/hooks/menuHooks'
import AllModalParent from '../modal/AllModalParent'
import GunakanBahanChild from '../modal/modalChildren/gunakan-bahan-child'
import HapusBahanChild from '../modal/modalChildren/hapus-bahan-child'
import BuangKedaluwarsaChild from '../modal/modalChildren/buang-kedaluwarsa-child'
import BuangThreeDotMenuChild from '../modal/modalChildren/buang-threedotmenu-child'

interface FoodRowProps {
  item: FoodItem
  index: number
}

export default function FoodRow({ item, index }: FoodRowProps) {
  const [openModal, setOpenModal] = useState(false)
  const [openHapusModal, setOpenHapusModal] = useState(false)
  const [openBuangKedaluwarsaModal, setOpenBuangKedaluwarsaModal] =
    useState(false)
  const [openBuangThreeDotMenuModal, setOpenBuangThreeDotMenuModal] =
    useState(false)
  const expiry = getExpiryStatus(item.expiry_date)

  const riskBarWidth = `${Math.min(item.risk_score, 100)}%`

  const getBgColor = `${index % 2 === 0 ? 'bg-linear-to-r from-primaryskyblue to-white' : 'bg-white'}`

  const actionBtnMap = {
    expired: 'border-2 border-abu text-abu hover:bg-darkgrey ',
    warning: 'border-2 border-orange-500 text-orange-600 hover:bg-orange-50',
    safe: 'border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50',
  }

  const actionBtnSolid = {
    expired:
      'border-2 border-merah text-merah hover:shadow-xl hover:bg-merah hover:text-white',
    warning:
      'border-2 border-orange-500 text-orangnormal hover:bg-orangnormal hover:text-white',
    safe: 'border-2 text-text-primary hover:bg-text-primary hover:text-white',
  }

  // Action
  const actionButton =
    expiry.actionLabel === 'Buang' ? (
      <>
        <Button
          variant="primary"
          size="sm"
          className={`flex-1 text-xs lg:text-base font-bold  transition-all duration-200 ${actionBtnMap[expiry.status]}`}
          onClick={() => {
            setOpenBuangKedaluwarsaModal(true)
          }}
        >
          Buang
        </Button>
      </>
    ) : (
      <>
        <Button
          onClick={() => setOpenModal(true)}
          variant="primary"
          size="sm"
          className={`flex-1 rounded-xl text-xs font-bold transition-all duration-200 ${actionBtnSolid[expiry.status]}`}
        >
          Gunakan
        </Button>
      </>
    )

  // 3-dot
  const ThreeDotMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    useMenu(menuRef, setMenuOpen)

    return (
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-hitamdikit hover:bg-gray-100 transition-all"
        >
          <Ellipsis className="rotate-90" size={40} />
        </button>
        {menuOpen && (
          <div className="absolute top-[-7] right-0 z-10 bg-white rounded-xl shadow-lg py-1 min-w-[106px]">
            <button
              className="w-full text-center px-3 font-roboto-500 py-2 text-xs lg:text-base xl:text-lg text-hitamdikit hover:text-merah transition-colors cursor-pointer"
              onClick={() => {
                setMenuOpen(false)
                setOpenBuangThreeDotMenuModal(true)
              }}
            >
              Buang
            </button>

            <button
              className="w-full text-center px-3 font-roboto-500 py-2 text-xs lg:text-base xl:text-lg  text-hitamdikit  hover:text-merah transition-colors cursor-pointer"
              onClick={() => {
                setMenuOpen(false)
                setOpenHapusModal(true)
              }}
            >
              Hapus
            </button>
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      {/* dekstop */}
      <div
        className={`hidden lg:flex items-center gap-4 px-8 py-6 ${getBgColor} group`}
      >
        {/* Image */}
        <div className="shrink-0 w-[58px] h-[58px] rounded-xl bg-white flex items-center justify-center overflow-hidden shadow-md relative">
          {item.image ? (
            <Image
              src={item.image.image}
              alt={item.name}
              width={50}
              height={36}
            />
          ) : (
            <div className="w-full h-full bg-gray-100" />
          )}
        </div>

        {/* Name & Category */}
        <div className="shrink-0 w-44">
          <p className="text-base font-roboto-600 text-hitamdikit truncate">
            {item.name}
          </p>
          <p className="text-sm text-hitamdikit font-roboto-400">
            {item.current_weight} {item.unit_weight} • {item.category}
          </p>
        </div>

        <div className="flex justify-between items-center w-full">
          {/* Buy Date */}
          <div className="shrink-0 w-34 text-end">
            <p className="text-sm font-roboto-500 text-hitamdikit">
              {formatDate(item.purchase_date)}
            </p>
          </div>

          {/* Expiry */}
          <div className="shrink-0 w-28 text-center">
            <span
              className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${expiry.badgeBgClass} ${expiry.badgeTextClass}`}
            >
              {expiry.label}
            </span>
          </div>

          {/* Price */}
          <div className="shrink-0 w-28 text-center">
            <p className="text-sm font-semibold text-hitamdikit">
              {formatCurrency(item.total_price)}
            </p>
          </div>

          {/* Location */}
          <div className="shrink-0 w-24 text-center">
            <span className="text-xs lg:text-sm font-roboto-500 text-hitamdikit bg-gray-100 px-2.5 py-1 rounded-full">
              {item.storage_location}
            </span>
          </div>

          {/* Risk Score */}
          <div className="shrink-0 w-[250px]">
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${expiry.progressBarClass}`}
                  style={{ width: riskBarWidth }}
                />
              </div>
              <span
                className={`text-xs lg:text-sm font-semibold text-hitamdikit`}
              >
                {item.risk_score} / hari
              </span>
            </div>
          </div>

          <div className="shrink-0 w-40 flex items-center gap-1.5">
            {actionButton}
            <ThreeDotMenu />
          </div>
        </div>
      </div>

      {/* tablet */}

      <div
        className={`lg:hidden flex flex-col gap-3 px-4 sm:px-6 py-4 ${getBgColor} group`}
      >
        <div className="flex items-center gap-3">
          <div className="shrink-0 w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] rounded-xl bg-white flex items-center justify-center overflow-hidden shadow-md relative">
            {item.image ? (
              <Image
                src={item.image.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-100" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm sm:text-base font-roboto-600 text-hitamdikit truncate">
              {item.name}
            </p>
            <p className="text-xs sm:text-sm text-hitamdikit font-roboto-400">
              {item.current_weight} {item.unit_weight} • {item.category}
            </p>
          </div>
          <span
            className={`shrink-0 inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold ${expiry.badgeBgClass} ${expiry.badgeTextClass}`}
          >
            {expiry.label}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs sm:text-sm">
          <div>
            <p className="text-hitamdikit/60 font-roboto-400 text-[10px] sm:text-xs">
              Tanggal Beli
            </p>
            <p className="font-roboto-500 text-hitamdikit">
              {formatDate(item.purchase_date)}
            </p>
          </div>
          <div>
            <p className="text-hitamdikit/60 font-roboto-400 text-[10px] sm:text-xs">
              Harga
            </p>
            <p className="font-semibold text-hitamdikit">
              {formatCurrency(item.total_price)}
            </p>
          </div>
          <div>
            <p className="text-hitamdikit/60 font-roboto-400 text-[10px] sm:text-xs">
              Lokasi
            </p>
            <span className="font-roboto-500 text-hitamdikit bg-gray-100 px-2 py-0.5 rounded-full text-[10px] sm:text-xs inline-block mt-0.5">
              {item.storage_location}
            </span>
          </div>
          <div>
            <p className="text-hitamdikit/60 font-roboto-400 text-[10px] sm:text-xs">
              Risk Score
            </p>
            <div className="flex items-center gap-1.5 mt-1">
              <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${expiry.progressBarClass}`}
                  style={{ width: riskBarWidth }}
                />
              </div>
              <span className="text-[10px] sm:text-xs font-semibold text-hitamdikit whitespace-nowrap">
                {item.risk_score}/hr
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-1">
          <div className="flex-1">{actionButton}</div>
          <ThreeDotMenu />
        </div>
      </div>

      <AllModalParent
        open={openBuangKedaluwarsaModal}
        onClose={() => setOpenBuangKedaluwarsaModal(false)}
      >
        <BuangKedaluwarsaChild
          item={item}
          onClose={() => setOpenBuangKedaluwarsaModal(false)}
        />
      </AllModalParent>

      <AllModalParent open={openModal} onClose={() => setOpenModal(false)}>
        <GunakanBahanChild item={item} onClose={() => setOpenModal(false)} />
      </AllModalParent>

      <AllModalParent
        open={openHapusModal}
        onClose={() => setOpenHapusModal(false)}
      >
        <HapusBahanChild item={item} onClose={() => setOpenHapusModal(false)} />
      </AllModalParent>

      <AllModalParent
        open={openBuangThreeDotMenuModal}
        onClose={() => setOpenBuangThreeDotMenuModal(false)}
      >
        <BuangThreeDotMenuChild
          item={item}
          onClose={() => setOpenBuangThreeDotMenuModal(false)}
        />
      </AllModalParent>
    </>
  )
}
