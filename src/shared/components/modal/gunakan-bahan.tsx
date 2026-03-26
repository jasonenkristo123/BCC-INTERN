type GunakanBahanProps = {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function GunakanBahanModal({
  open,
  onClose,
  children,
}: GunakanBahanProps) {
  return (
    // backdrop
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-center justify-center transition-colors ${open ? 'visible bg-black/20' : 'invisible'}`}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white max-w-[384px] rounded-xl p-6 transition-all ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}
      >
        {children}
      </div>
    </div>
  )
}
