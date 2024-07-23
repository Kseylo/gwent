import { AUTH_URL } from '..'

export async function logout() {
  const response = await fetch(`${AUTH_URL}/logout`, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
  })
  if (!response.ok) {
    throw new Error('Response was not ok')
  }
  return response.json()
}
