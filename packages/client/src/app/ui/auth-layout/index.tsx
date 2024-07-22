import { Outlet } from 'react-router-dom'
import styles from './auth-layout.module.css'

export default function AuthLayout() {
  return (
    <main className={styles.main}>
      <Outlet />
    </main>
  )
}
