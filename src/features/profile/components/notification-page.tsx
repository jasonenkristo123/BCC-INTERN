"use client"

import { useState } from "react";


export default function NotificationPage() {
    const [EnabledExpired, setEnabledExpired] = useState(true);
    const [EnabledExpiredToday, setEnabledExpiredToday] = useState(true);
    const [EnabledWeeklyReport, setEnabledWeeklyReport] = useState(true);
    const [EnabledMonthlyReport, setEnabledMonthlyReport] = useState(true);
    const [EnabledTips, setEnabledTips] = useState(true);

    return (
        <div>
            <div className="bg-white rounded-xl shadow-md w-full p-8 sm:p-12 space-y-10">

                <h2 className="font-roboto-600 text-xl lg:text-2xl text-hitamdikit mb-7">
                    Notifikasi Bahan
                </h2>
                <div className="flex justify-between">
                    <div>
                        <h3 className="text-base sm:text-lg lg:text-xl font-roboto-500 pb-3 ">
                            Bahan Mendekati Kedaluwarsa
                        </h3>
                        <p className="text-sm sm:text-base font-roboto-400 text-hitamdikit/50">
                            Email dikirim saat bahan tersisa {" ≤ 3 hari"} sebelum kedaluwarsa
                        </p>
                    </div>
                    <div>
                        <label className=" cursor-pointer select-none">
                            <input type="checkbox" className="sr-only" checked={EnabledExpired} onChange={() => setEnabledExpired(!EnabledExpired)} />
                            <div className={`relative w-20 h-10 transition-colors duration-500 rounded-full ${EnabledExpired ? "bg-text-primary" : "bg-text-secondary"}`}>
                                <div className={`absolute top-1 left-1 w-8 h-8 bg-white rounded-full transition-transform duration-500 transform ${EnabledExpired ? "translate-x-10" : ""}`} />

                            </div>
                        </label>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <h3 className="text-base sm:text-lg lg:text-xl font-roboto-500 pb-3 ">
                            Bahan harus segera dibuang
                        </h3>
                        <p className="text-sm sm:text-base font-roboto-400 text-hitamdikit/50">
                            Email dikirim saat ada bahan yang expired hari ini
                        </p>
                    </div>
                    <div>
                        <label className=" cursor-pointer select-none">
                            <input type="checkbox" className="sr-only" checked={EnabledExpiredToday} onChange={() => setEnabledExpiredToday(!EnabledExpiredToday)} />
                            <div className={`relative w-20 h-10 transition-colors duration-500 rounded-full ${EnabledExpiredToday ? "bg-text-primary" : "bg-text-secondary"}`}>
                                <div className={`absolute top-1 left-1 w-8 h-8 bg-white rounded-full transition-transform duration-500 transform ${EnabledExpiredToday ? "translate-x-10" : ""}`} />

                            </div>
                        </label>
                    </div>
                </div>
            </div>

            <div className="bg-white mt-5 rounded-xl shadow-md w-full p-8 sm:p-12 space-y-10">
                <h2 className="font-roboto-600 text-xl lg:text-2xl text-hitamdikit mb-7">
                    Laporan & Ringkasan
                </h2>
                <div className="flex justify-between">
                    <div>
                        <h3 className="text-base sm:text-lg lg:text-xl font-roboto-500 pb-3 ">
                            Ringkasan mingguan
                        </h3>
                        <p className="text-sm sm:text-base font-roboto-400 text-hitamdikit/50">
                            Email dikirim setiap Senin pagi — waste, penghematan, dan skor efisiensi minggu lalu
                        </p>
                    </div>
                    <div>
                        <label className=" cursor-pointer select-none">
                            <input type="checkbox" className="sr-only" checked={EnabledWeeklyReport} onChange={() => setEnabledWeeklyReport(!EnabledWeeklyReport)} />
                            <div className={`relative w-20 h-10 transition-colors duration-500 rounded-full ${EnabledWeeklyReport ? "bg-text-primary" : "bg-text-secondary"}`}>
                                <div className={`absolute top-1 left-1 w-8 h-8 bg-white rounded-full transition-transform duration-500 transform ${EnabledWeeklyReport ? "translate-x-10" : ""}`} />

                            </div>
                        </label>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <h3 className="text-base sm:text-lg lg:text-xl font-roboto-500 pb-3 ">
                            Laporan bulanan
                        </h3>
                        <p className="text-sm sm:text-base font-roboto-400 text-hitamdikit/50">
                            Email dikirim di awal bulan — rekap lengkap waste tracker dan perbandingan bulan sebelumnya
                        </p>
                    </div>
                    <div>
                        <label className=" cursor-pointer select-none">
                            <input type="checkbox" className="sr-only" checked={EnabledMonthlyReport} onChange={() => setEnabledMonthlyReport(!EnabledMonthlyReport)} />
                            <div className={`relative w-20 h-10 transition-colors duration-500 rounded-full ${EnabledMonthlyReport ? "bg-text-primary" : "bg-text-secondary"}`}>
                                <div className={`absolute top-1 left-1 w-8 h-8 bg-white rounded-full transition-transform duration-500 transform ${EnabledMonthlyReport ? "translate-x-10" : ""}`} />

                            </div>
                        </label>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <h3 className="text-base sm:text-lg lg:text-xl font-roboto-500 pb-3 ">
                            Tips & rekomendasi
                        </h3>
                        <p className="text-sm sm:text-base font-roboto-400 text-hitamdikit/50">
                            Email saran penggunaan bahan berdasarkan pola stok kamu
                        </p>
                    </div>
                    <div>
                        <label className=" cursor-pointer select-none">
                            <input type="checkbox" className="sr-only" checked={EnabledTips} onChange={() => setEnabledTips(!EnabledTips)} />
                            <div className={`relative w-20 h-10 transition-colors duration-500 rounded-full ${EnabledTips ? "bg-text-primary" : "bg-text-secondary"}`}>
                                <div className={`absolute top-1 left-1 w-8 h-8 bg-white rounded-full transition-transform duration-500 transform ${EnabledTips ? "translate-x-10" : ""}`} />

                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}