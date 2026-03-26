import { TKategoriBahan, TPenyimpanan } from "../schemas/tambah-bahan-schema";

export const lokasiList: { name: TPenyimpanan; image: string; desc: string }[] = [
    {
        name: "Freezer",
        image: "/lokasi/freezer.webp",
        desc: "-18° C hingga -20° C",
    },
    {
        name: "Kulkas",
        image: "/lokasi/kulkas.webp",
        desc: "-2° C hingga -8° C",
    },
    {
        name: "Rak / Pantry",
        image: "/lokasi/raks.webp",
        desc: "Suhu Ruangan",
    },
];

export const saranPenyimpanan: Record<TKategoriBahan, string> = {
    "Umbi-umbian": "Simpan di tempat sejuk, kering, dan gelap (rak/pantry). Hindari kulkas karena suhu rendah dapat mengubah pati menjadi gula dan menurunkan kualitas.",
    "Sayur-sayuran": "Simpan di kulkas (≤4°C) dalam wadah tertutup atau plastik berlubang untuk menjaga kelembaban dan kesegaran.",
    "Buah-buahan": "Simpan buah matang di kulkas, dan buah belum matang di suhu ruang. Pisahkan buah penghasil gas etilen (seperti pisang dan apel) agar tidak mempercepat pembusukan buah lain.",
    "Daging": "Simpan di freezer (≤ -18°C) jika tidak langsung digunakan. Untuk penggunaan dekat, simpan di kulkas dan pastikan terpisah dari bahan lain untuk mencegah kontaminasi.",
    "Seafood": "Simpan di freezer atau di bagian paling dingin kulkas. Hindari penyimpanan terlalu lama di suhu ruang karena sangat mudah terkontaminasi bakteri.",
    "Telur": "Simpan di dalam kulkas (bukan di freezer) agar suhu tetap stabil dan kualitas terjaga.",
    "Produk Susu": "Simpan di kulkas dengan kemasan tertutup rapat. Hindari dibiarkan di suhu ruang terlalu lama karena mudah rusak.",
    "Rempah-rempah": "Rempah segar simpan di kulkas, sedangkan rempah kering simpan di tempat kering dan tertutup agar tidak lembab.",
    "Bumbu Dapur": "Simpan bumbu kering di tempat sejuk dan tertutup. Untuk bumbu cair seperti saus atau kecap, simpan di kulkas setelah dibuka.",
    "Biji-bijian": "Simpan di wadah kedap udara di tempat kering untuk mencegah kelembaban dan serangga.",
    "Kacang-kacangan & Legum": "Simpan di wadah tertutup di tempat sejuk. Untuk menjaga kualitas lebih lama, dapat disimpan di kulkas."
}