import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from '@/store'
import { Provider } from 'react-redux'
import './index.css'
import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import App from './app/App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
