

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5 text-4xl">
        🔍
      </div>
      <h3 className="text-lg font-bold text-gray-700 mb-2">Tidak ada bahan ditemukan</h3>
      <p className="text-sm text-gray-400 max-w-xs">
        Coba ubah filter pencarian atau kata kunci yang kamu gunakan untuk menemukan bahan makanan.
      </p>
    </div>
  );
}
