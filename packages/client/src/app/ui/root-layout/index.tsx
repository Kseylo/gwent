import { Outlet } from 'react-router-dom'
import styles from './root-layout.module.css'

export default function RootLayout() {
  return (
    <main className={styles.main}>
      <Outlet />
    </main>
  )
}
