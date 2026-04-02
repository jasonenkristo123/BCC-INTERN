import { NextRequest } from 'next/server'
import { proxy as authProxy } from './guards/auth-guard'

export async function proxy(request: NextRequest) {
  return await authProxy(request)
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|assets|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff2?|map)$).*)',
  ],
}
