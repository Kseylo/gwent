import './App.css'
import { createTheme, MantineProvider } from '@mantine/core'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@/pages/home'
import SignIn from '@/pages/sign-in'
import SignUp from '@/pages/sign-up'
import Profile from '@/pages/profile'
import Forum from '@/pages/forum'
import Leaderboard from '@/pages/leaderboard'
import { Routes } from '@/shared/config/routes'
import AuthLayout from './ui/auth-layout'

const theme = createTheme({})

const router = createBrowserRouter([
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
  {
    element: <AuthLayout />,
    children: [
      {
        path: Routes.SIGN_IN,
        element: <SignIn />,
      },
      {
        path: Routes.SIGN_UP,
        element: <SignUp />,
      },
    ],
  },
])

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme={'dark'}>
      <RouterProvider router={router} />
    </MantineProvider>
  )
}

export default App
