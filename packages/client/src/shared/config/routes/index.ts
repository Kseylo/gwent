export enum Routes {
  HOME = '/',
  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
  PROFILE = '/profile',
  FORUM = '/forum',
  LEADER_BOARD = '/leader-board',
}

export const navLinks = [
  { label: 'Главная', href: Routes.HOME },
  { label: 'Профиль', href: Routes.PROFILE },
  { label: 'Форум', href: Routes.FORUM },
  { label: 'Лидерборд', href: Routes.LEADERBOARD },
]
