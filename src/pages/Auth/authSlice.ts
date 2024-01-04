import { createSlice } from '@reduxjs/toolkit'
import { AuthState } from 'MyModels'

interface CounterState {
  value: number
}
const initialState = { value: 0 } as CounterState

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {}
})

export default authSlice.reducer
