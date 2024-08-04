import { User } from '@/shared/api/user'
import { createSlice } from '@reduxjs/toolkit'

const initialState: { user: User | null } | null = { user: null }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
})

export default authSlice.reducer
