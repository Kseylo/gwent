import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from '@/entities/auth'

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})

export default store

// TODO: Вынести от сюда
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
