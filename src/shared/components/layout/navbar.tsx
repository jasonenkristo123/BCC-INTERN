'use client'

import Link from 'next/link'
import Button from '../ui/button'
import { useState } from 'react'

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('#beranda')

    const navLinks = [
        { name: 'Beranda', href: '#beranda' },
        { name: 'Fitur', href: '#fitur' },
        { name: 'Fakta', href: '#fakta' },
        { name: 'Tentang Kami', href: '#tentang-kami' },
    ]

    return (
        <>

            <nav className="hidden fixed z-999 w-full bg-primary lg:flex justify-between items-center px-10 py-6">
                <div className="font-roboto-400 text-white text-2xl">Simpanin.id</div>
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
                        <Button variant="secondary" size="md">
                            Masuk
                        </Button>
                        <Button
                            variant="primary"
                            size="md"
                            className="text-primary-lebihmuda"
                        >
                            Daftar
                        </Button>
                    </div>
                </div>
            </nav>

            <nav className='lg:hidden z-999 fixed w-full bg-primary flex px-10 py-6'>

            </nav>
        </>
    )
}
