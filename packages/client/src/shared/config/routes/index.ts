export enum Routes {
  HOME = '/',
  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
  PROFILE = '/profile',
  THREADS = '/threads',
  LEADER_BOARD = '/leader-board',
}

export const navLinks = [
  { label: 'Главная', href: Routes.HOME },
  { label: 'Профиль', href: Routes.PROFILE },
  { label: 'Треды', href: Routes.THREADS },
  { label: 'Лидерборд', href: Routes.LEADER_BOARD },
]
