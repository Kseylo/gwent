import { BASE_URL } from '../config'
import { ChangePasswordArgs, ChangeProfileArgs } from './types'

export function changePassword(data: ChangePasswordArgs) {
  return fetch(`${BASE_URL}/user/password`, {
    method: 'PUT',
    body: JSON.stringify(data),
  })
}

export function changeProfile(data: ChangeProfileArgs) {
  return fetch(`${BASE_URL}/user/profile`, {
    method: 'PUT',
    body: JSON.stringify(data),
  })
}

export function changeAvatar(data: FormData) {
  return fetch(`${BASE_URL}/user/profile/avatar`, {
    method: 'PUT',
    body: data,
  })
}
