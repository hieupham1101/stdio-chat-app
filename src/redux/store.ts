import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const store = configureStore({
  reducer: {}
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

export default store