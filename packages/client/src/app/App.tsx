import './App.css'
import { useEffect } from 'react'
import { createTheme, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@/pages/home'
import SignIn, { action as signInAction } from '@/pages/sign-in'
import SignUp, { action as signUpAction } from '@/pages/sign-up'
import Profile from '@/pages/profile'
import Thread from '@/pages/thread'
import ThreadList from '@/pages/thread-list'
import Leaderboard from '@/pages/leaderboard'
import { Routes } from '@/shared/config/routes'
import AuthLayout from './ui/auth-layout'
import RootLayout from './ui/root-layout'
import ProtectedLayout from './ui/protected-layout'
import RootBoundary from './ui/root-boundary'
import { useSelector } from 'react-redux'
import { getUser } from '@/store/reducers/user-reducer'
import { RootState, useAppDispatch } from '@/store'
import NewThread from '@/pages/new-thread'
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
            path: Routes.THREADS,
            element: <ThreadList />,
          },
          {
            path: `${Routes.THREADS}/:id`,
            element: <Thread />,
          },
          {
            path: `${Routes.THREADS}/new`,
            element: <NewThread />,
          },
          {
            path: `${Routes.THREADS}/:slug/:threadId`,
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

const App = () => {
  const dispatch = useAppDispatch()
  // const user = useSelector((state: RootState) => state.UserReducer.user)

  useEffect(() => {
    dispatch(getUser())
  }, [])

  return (
    <MantineProvider theme={theme} defaultColorScheme={'dark'}>
      <Notifications />
      <RouterProvider router={router} />
    </MantineProvider>
  )
}
export default App
