export enum Routes {
  HOME = '/',
  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
  PROFILE = '/profile',
  THREADS = '/threads',
  LEADERBOARD = '/leaderboard',
}

export const navLinks = [
  { label: 'Главная', href: Routes.HOME },
  { label: 'Профиль', href: Routes.PROFILE },
  { label: 'Треды', href: Routes.THREADS },
  { label: 'Лидерборд', href: Routes.LEADERBOARD },
]
