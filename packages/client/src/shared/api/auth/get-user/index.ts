import { AUTH_URL } from '@/shared/api/auth'

export async function getUser() {
  const response = await fetch(`${AUTH_URL}/user`, {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
  })
  if (!response.ok) {
    throw new Error('Response was not ok')
  }
  return response.json()
}
