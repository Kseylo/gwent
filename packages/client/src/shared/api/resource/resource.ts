import { BASE_URL } from '../config'

export function getResourceByPath(path: string) {
  return fetch(`${BASE_URL}/resources/${path}`)
}
