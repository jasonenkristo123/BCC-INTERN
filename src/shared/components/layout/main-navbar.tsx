'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useState } from 'react'
import FadeIn from '@/shared/animations/Fadein'
import { Menu, X } from 'lucide-react'
import { useGetUserProfile } from '@/features/profile/hooks/profile-hooks'

export default function MainNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname() || ''
  const { data: userProfile } = useGetUserProfile()

  const navLinks = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Bahan Saya', href: '/bahan-saya' },
    { name: 'Waste Tracker', href: '/waste-tracker' },
  ]
  return (
    <>
      <nav className="fixed z-999 hidden md:flex justify-between items-center w-full gap-4 bg-white px-8 py-6">
        <div className="flex items-center w-full gap-8">
          <div className="flex items-center">
            <Image
              src="/assets/logos.webp"
              unoptimized
              width={51}
              height={60}
              alt="logo"
              className="translate-y-[-13px] translate-x-[10px]"
            />
            <div className="font-roboto-400 text-hitamdikit text-2xl">
              Simpanin.id
            </div>
          </div>
          <div className="flex gap-6">
            {navLinks.map((links) => {
              const isActive = pathname.startsWith(links.href)
              return (
                <Link
                  key={links.href}
                  href={links.href}
                  className={`${isActive ? `text-text-primary opacity-100` : `text-abugelap opacity-60`} font-roboto-400 text-[16px] transition-opacity `}
                >
                  {links.name}
                </Link>
              )
            })}
          </div>
        </div>
        <div className="flex items-center gap-2 pr-6">
          <Image
            src={userProfile?.profile_picture || '/assets/defaultprofile.webp'}
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full w-12 h-12 border border-slate-100"
          />
          <div className="flex flex-col text-sm pt-1 gap-1 cursor-pointer">
            <Link href="/profile/account">
              <p>{userProfile?.name || 'User'}</p>
              <p className="text-xs text-text-secondary">Free</p>
            </Link>
          </div>
        </div>
      </nav>

      {/* mobile */}
      <nav className="lg:hidden z-999 fixed w-full bg-primary">
        <div className="flex justify-between items-center px-10 py-6">
          <button
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <div className="flex items-center gap-2">
            <Image
              src={
                userProfile?.profile_picture || '/assets/defaultprofile.webp'
              }
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full w-12 h-12 border border-slate-100"
            />
            <div className="flex flex-col  text-sm pt-1 gap-1 cursor-pointer">
              <Link href="/profile/account">
                <p className="text-white">{userProfile?.name || 'User'}</p>
                <p className="text-xs text-white">Free</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <FadeIn className="flex flex-col px-10 pb-6 gap-4 bg-primary shadow-lg ">
            <div className="flex flex-col gap-4 border-t border-white/40 pt-4 ">
              {navLinks.map((links) => {
                const isActive = pathname.startsWith(links.href)
                return (
                  <Link
                    key={links.href}
                    href={links.href}
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                    }}
                    className={`${isActive ? 'opacity-100' : 'opacity-60'} font-roboto-500 text-white transition-opacity`}
                  >
                    {links.name}
                  </Link>
                )
              })}
            </div>
            <div className="flex flex-col gap-4 mt-2"></div>
          </FadeIn>
        )}
      </nav>
    </>
  )
}
