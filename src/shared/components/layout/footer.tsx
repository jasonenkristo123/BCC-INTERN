import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="relative w-full bg-secondary text-white py-16 px-6 md:px-12 lg:px-24 overflow-hidden mt-12">
            {/* Background Images */}
            <div className="absolute top-16 left-4 md:left-8 opacity-80 pointer-events-none w-[60px] md:w-[80px]">
                <Image
                    src="/assets/wortel.webp"
                    alt="Wortel"
                    width={80}
                    height={80}
                    className="w-full h-auto -rotate-12"
                />
            </div>
            <div className="absolute bottom-16 left-4 md:left-8 opacity-80 pointer-events-none w-[50px] md:w-[70px]">
                <Image
                    src="/assets/brokoli.webp"
                    alt="Brokoli"
                    width={70}
                    height={70}
                    className="w-full h-auto -rotate-12"
                />
            </div>
            <div className="absolute top-16 right-4 md:right-8 opacity-80 pointer-events-none w-[70px] md:w-[90px]">
                <Image
                    src="/assets/ikan.webp"
                    alt="Ikan"
                    width={90}
                    height={90}
                    className="w-full h-auto object-contain"
                />
            </div>
            <div className="absolute bottom-16 right-4 md:right-8 opacity-80 pointer-events-none w-[60px] md:w-[80px]">
                <Image
                    src="/assets/daging.webp"
                    alt="Daging"
                    width={80}
                    height={80}
                    className="w-full h-auto -rotate-12"
                />
            </div>

            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between gap-20 z-10 relative px-12 md:px-16 border-b-3 border-white/80 pb-5">
                {/* Column 1 */}
                <div className="flex-[1.5] max-w-sm">
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-roboto-500 mb-6 leading-[150%]">
                        Simpanin.id
                    </h2>
                    <p className="text-white leading-[150%] text-base sm:text-lg md:text-xl font-roboto-400 opacity-80">
                        Solusi cerdas manajemen inventori makanan untuk mengurangi limbah
                        dan menghemat anggaran rumah tangga
                    </p>
                </div>

                {/* Column 2 */}
                <div className="flex-1 md:pr-12">
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-roboto-500 mb-6 leading-[150%]">
                        Fitur
                    </h2>
                    <ul className="space-y-4 text-gray-100 font-roboto-400">
                        <li>
                            <Link
                                href="#fitur"
                                className="font-roboto-400 text-white text-base sm:text-lg md:text- opacity-80"
                            >
                                Estimasi Kadaluwarsa
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#fitur"
                                className="font-roboto-400 text-white text-base sm:text-lg md:text- opacity-80"
                            >
                                Email Riminder
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#fitur"
                                className="font-roboto-400 text-white text-base sm:text-lg md:text- opacity-80"
                            >
                                Estimasi Kerugian
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div className="flex-1">
                    <h2 className="text-base text-white sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-roboto-500 mb-6 leading-[150%] ">
                        Perusahaan
                    </h2>
                    <ul className="space-y-4 text-gray-100 font-roboto-400">
                        <li>
                            <Link
                                href="/"
                                className="font-roboto-400 text-white text-base sm:text-lg md:text-xl opacity-80"
                            >
                                Beranda
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#fitur"
                                className="font-roboto-400 text-white text-base sm:text-lg md:text-xl opacity-80"
                            >
                                Fitur
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#fakta"
                                className="font-roboto-400 text-white text-base sm:text-lg md:text-xl opacity-80"
                            >
                                Fakta
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#tentang-kami"
                                className="font-roboto-400 text-white text-base sm:text-lg md:text-xl opacity-80"
                            >
                                Tentang Kami
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto pt-8 border-white text-center relative z-10">
                <p className="font-roboto-400 text-white/80 text-base sm:text-lg md:text-xl">
                    © 2026 Simpanin.id. Semua hak dilindungi.
                </p>
            </div>
        </footer>
    )
}
