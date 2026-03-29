type AllModalParentProps = {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function AllModalParent({
  open,
  onClose,
  children,
}: AllModalParentProps) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-center justify-center transition-colors ${open ? 'visible bg-black/20' : 'invisible'}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white w-[90%] sm:w-[384px]  max-h-[90vh] overflow-y-auto rounded-xl p-6 transition-all ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}
      >
        {children}
      </div>
    </div>
  )
}
