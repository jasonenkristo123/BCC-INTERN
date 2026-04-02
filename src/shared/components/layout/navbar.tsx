'use client'

import Link from 'next/link'
import Button from '../ui/button'
import { useState } from 'react'
import FadeIn from '@/shared/animations/Fadein'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('#beranda')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Fitur', href: '#fitur' },
    { name: 'Fakta', href: '#fakta' },
    { name: 'Tentang Kami', href: '#tentang-kami' },
  ]

  return (
    <>
      <nav className="hidden fixed z-999 w-full bg-primary lg:flex justify-between items-center px-10 py-6">
        <FadeIn className="w-full h-full flex justify-between items-center ">
          <div className="flex items-center">
            <Image
              src="/assets/logos.webp"
              unoptimized
              width={51}
              height={60}
              alt="logo"
              className="translate-y-[-13px] translate-x-[10px]"
            />
            <div className="font-roboto-400 text-white text-2xl">
              Simpanin.id
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <div className="flex gap-6">
              {navLinks.map((links) => (
                <Link
                  key={links.href}
                  href={links.href}
                  onClick={() => setActiveSection(links.href)}
                  className={`${activeSection === links.href ? 'opacity-100' : 'opacity-60'} font-roboto-500 text-white transition-opacity scroll-smooth`}
                >
                  {links.name}
                </Link>
              ))}
            </div>
            <div className="flex gap-6">
              <Button
                variant="secondary"
                size="md"
                className="hover:bg-gray-50/20"
                href="/login"
              >
                Masuk
              </Button>
              <Button
                variant="primary"
                size="md"
                className="text-primary-lebihmuda bg-skyblue"
                href="/register"
              >
                Daftar
              </Button>
            </div>
          </div>
        </FadeIn>
      </nav>

      <nav className="lg:hidden z-999 fixed w-full bg-primary">
        <div className="flex justify-between items-center px-5 py-6">
          <div className="flex items-center">
            <Image
              src="/assets/logos.webp"
              unoptimized
              width={51}
              height={60}
              alt="logo"
              className="translate-y-[-13px] translate-x-[10px]"
            />
            <div className="font-roboto-400 text-white text-2xl">
              Simpanin.id
            </div>
          </div>
          <button
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <FadeIn className="flex flex-col px-10 pb-6 gap-4 bg-primary shadow-lg ">
            <div className="flex flex-col gap-4 border-t border-white/40 pt-4 ">
              {navLinks.map((links) => (
                <Link
                  key={links.href}
                  href={links.href}
                  onClick={() => {
                    setActiveSection(links.href)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`${activeSection === links.href ? 'opacity-100' : 'opacity-60'} font-roboto-500 text-white transition-opacity`}
                >
                  {links.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-4 mt-2">
              <Button
                variant="secondary"
                size="md"
                className="hover:bg-gray-50/20 w-full justify-center"
                href="/login"
              >
                Masuk
              </Button>
              <Button
                variant="primary"
                size="md"
                className="text-primary-lebihmuda w-full justify-center bg-skyblue"
                href="/register"
              >
                Daftar
              </Button>
            </div>
          </FadeIn>
        )}
      </nav>
    </>
  )
}
