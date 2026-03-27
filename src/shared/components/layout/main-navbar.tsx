'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function MainNavbar() {
  const pathname = usePathname() || ''

  const navLinks = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Bahan Saya', href: '/bahan-saya' },
    { name: 'Waste Tracker', href: '/waste-tracker' },
  ]
  return (
    <>
      <nav className="fixed z-999 hidden md:flex justify-between items-center w-full gap-4 bg-white px-8 py-4">
        <div className="flex items-center w-full gap-8">
          <h1 className="md:text-lg lg:text-xl xl:text-2xl font-roboto-400">
            Simpanin.id
          </h1>
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
            src="/assets/dedy.webp"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full w-12 h-12 border border-slate-100"
          />
          <div className="flex flex-col text-sm pt-1 gap-1 cursor-pointer">
            <Link href="/profile/account">
              <p>Dedy</p>
              <p className="text-xs text-text-secondary">Premium</p>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
