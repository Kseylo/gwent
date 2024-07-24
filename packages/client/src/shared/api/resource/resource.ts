export function getResourceByPath(path: string) {
  return fetch(`https://ya-praktikum.tech/api/v2/resources/${path}`)
}
