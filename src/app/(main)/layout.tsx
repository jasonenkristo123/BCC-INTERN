import MainNavbar from '@/shared/components/layout/main-navbar'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <MainNavbar />
      {children}
    </>
  )
}
