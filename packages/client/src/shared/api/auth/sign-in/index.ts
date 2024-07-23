import { AUTH_URL } from '..'

export interface SignInValues {
  login: string
  password: string
}

export async function signIn(values: SignInValues) {
  const response = await fetch(`${AUTH_URL}/signin`, {
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
