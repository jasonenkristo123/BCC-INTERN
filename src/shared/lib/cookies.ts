// Get a cookie value by name

export const getCookie = (name: string) => {
  if (typeof document === 'undefined') return null
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null
  return null
}

// Set a cookie with a name, value, and maxAge in seconds

export const setCookie = (
  name: string,
  value: string,
  maxAgeInSeconds: number,
) => {
  if (typeof document === 'undefined') return
  const secure = window.location.protocol === 'https:' ? 'Secure;' : ''
  document.cookie = `${name}=${value}; max-age=${maxAgeInSeconds}; path=/; SameSite=Strict; ${secure}`
}

// Delete a cookie by name

export const deleteCookie = (name: string) => {
  if (typeof document === 'undefined') return
  document.cookie = `${name}=; max-age=0; path=/; SameSite=Strict`
}
