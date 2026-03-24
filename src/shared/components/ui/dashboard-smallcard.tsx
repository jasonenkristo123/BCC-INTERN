import { ReactNode } from 'react'

type BaseProps = {
  children: ReactNode
  className?: string
}

const styles = 'border px-4 py-3 rounded-xl w-full'

export default function DashboardSmallCard({
  children,
  className = '',
}: BaseProps) {
  return <div className={`${styles} ${className}`}>{children}</div>
}
