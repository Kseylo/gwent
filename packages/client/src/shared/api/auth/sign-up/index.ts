import { AUTH_URL } from '@/shared/api/auth'

export interface SignUpValues {
  first_name: string
  second_name: string
  email: string
  phone: string
  login: string
  password: string
}

export async function signUp(values: SignUpValues) {
  const response = await fetch(`${AUTH_URL}/signup`, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    body: JSON.stringify(values),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (!response.ok) {
    throw new Error('Response was not ok')
  }
}
