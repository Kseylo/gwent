import './App.css'
import { createTheme, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@/pages/home'
import SignIn, { action as signInAction } from '@/pages/sign-in'
import SignUp, { action as signUpAction } from '@/pages/sign-up'
import Profile from '@/pages/profile'
import Forum, { loader as forumLoader } from '@/pages/forum'
import Thread from '@/pages/thread'
import ForumList from '@/pages/forum-list'
import Leaderboard from '@/pages/leaderboard'
import { Routes } from '@/shared/config/routes'
import AuthLayout from './ui/auth-layout'
import RootLayout from './ui/root-layout'
import ProtectedLayout from './ui/protected-layout'
import RootBoundary from './ui/root-boundary'

const theme = createTheme({})

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <RootBoundary />,
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
            element: <ForumList />,
          },
          {
            path: `${Routes.FORUM}/:slug`,
            element: <Forum />,
            loader: forumLoader,
          },
          {
            path: `${Routes.FORUM}/:slug/thread/:threadId`,
            element: <Thread />,
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
