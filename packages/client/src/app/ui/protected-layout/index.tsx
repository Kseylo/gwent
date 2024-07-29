import { Link, Outlet, useLocation } from 'react-router-dom'
import { useDisclosure } from '@mantine/hooks'
import { AppShell, Group, Burger, Title, NavLink } from '@mantine/core'
import { navLinks } from '@/shared/config/routes'

export default function ProtectedLayout() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure()
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true)
  const location = useLocation()

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding={'md'}>
      <AppShell.Header>
        <Group h={'100%'} px={'md'}>
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
          />
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
          />
          <Title>Гвинт</Title>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p={'md'}>
        {navLinks.map(link => (
          <NavLink
            key={link.label}
            component={Link}
            to={link.href}
            label={link.label}
            active={location.pathname === link.href}
          />
        ))}
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}
