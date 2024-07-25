import './App.css'
import { createTheme, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@/pages/home'
import SignIn, { action as signInAction } from '@/pages/sign-in'
import SignUp, { action as signUpAction } from '@/pages/sign-up'
import Profile from '@/pages/profile'
import Forum from '@/pages/forum'
import Leaderboard from '@/pages/leaderboard'
import { Routes } from '@/shared/config/routes'
import AuthLayout from './ui/auth-layout'
import RootLayout from './ui/root-layout'
import ProtectedLayout from '@/app/ui/protected-layout'

const theme = createTheme({})

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <ProtectedLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: Routes.PROFILE,
            element: <Profile />,
          },
          {
            path: Routes.FORUM,
            element: <Forum />,
          },
          {
            path: Routes.LEADERBOARD,
            element: <Leaderboard />,
          },
        ],
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: Routes.SIGN_IN,
            element: <SignIn />,
            action: signInAction,
          },
          {
            path: Routes.SIGN_UP,
            element: <SignUp />,
            action: signUpAction,
          },
        ],
      },
    ],
  },
])

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme={'dark'}>
      <Notifications />
      <RouterProvider router={router} />
    </MantineProvider>
  )
}

export default App
