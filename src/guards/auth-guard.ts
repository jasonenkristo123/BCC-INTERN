import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const authToken =
    request.cookies.get('auth_token')?.value ||
    request.cookies.get('token')?.value

  const authRoutes = [
    '/dashboard',
    '/bahan-saya',
    '/profile',
    '/tambah-bahan',
    '/waste-tracker',
  ]

  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route))

  if (!authToken && isAuthRoute) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('redirect', pathname)
    loginUrl.searchParams.set('error', 'unauthorized')
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}
