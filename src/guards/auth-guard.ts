import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Get auth token from cookies (checking both names to handle legacy 'token')
  const authToken =
    request.cookies.get('auth_token')?.value ||
    request.cookies.get('token')?.value

  // Auth routes (can only be accessed by guests)
  const authRoutes = ['/dashboard', '/bahan-saya', '/profile', '/tambah-bahan', '/waste-tracker']

  // Public routes (guest and auth)
  const publicRoutes = ['/home', '/', '/register', '/login']

  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route))
  const isPublicRoute = publicRoutes.some((route) =>
    route === '/' ? pathname === '/' : pathname.startsWith(route),
  )

  if (!authToken && !isAuthRoute && !isPublicRoute) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('redirect', pathname)
    loginUrl.searchParams.set('error', 'unauthorized')
    return NextResponse.redirect(loginUrl)
  }
  return NextResponse.next()
}
