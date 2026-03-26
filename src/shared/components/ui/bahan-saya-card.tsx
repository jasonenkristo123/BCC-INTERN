import { ReactNode } from 'react'

type BaseProps = {
  children: ReactNode
  className?: string
}

const styles = 'border p-6 rounded-2xl w-full'

export default function BahanSayaCard({ children, className = '' }: BaseProps) {
  return <div className={`${styles} ${className}`}>{children}</div>
}
