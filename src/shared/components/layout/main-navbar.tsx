'use client'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

export default function MainNavbar() {
  const [activeSection, setActiveSection] = useState('#Dashboard')

  const navLinks = [
    { name: 'Dashboard', href: '#Dashboard' },
    { name: 'Bahan Saya', href: '#Bahan-Saya' },
    { name: 'Waste Tracker', href: '#Waste-Tracker' },
  ]
  return (
    <>
      <nav className="fixed hidden md:flex justify-between items-center w-full gap-4 bg-white px-8 py-4">
        <div className="flex items-center w-full gap-8">
          <h1 className="md:text-lg lg:text-xl xl:text-2xl font-roboto-400">
            Simpanin.id
          </h1>
          <div className="flex gap-6">
            {navLinks.map((links) => (
              <Link
                key={links.href}
                href={links.href}
                onClick={() => setActiveSection(links.href)}
                className={`${activeSection === links.href ? `text-text-primary opacity-100` : `text-text-secondary opacity-60`} font-roboto-500 text-sm transition-opacity `}
              >
                {links.name}
              </Link>
            ))}
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
          <div className="flex flex-col text-sm pt-1 gap-1">
            <p>Dedy</p>
            <p className="text-xs text-text-secondary">Premium</p>
          </div>
          <div className="flex gap-6 pl-8">
            <Image
              src="/assets/notif.webp"
              alt="notification"
              width={32}
              height={32}
              className="w-6 h-6"
            />
            <Image
              src="/assets/setting.webp"
              alt="setting"
              width={32}
              height={32}
              className="w-6 h-6"
            />
          </div>
        </div>
      </nav>
    </>
  )
}
