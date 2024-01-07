import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import authService from '~/servers/auth.service'
import tokenService from '~/servers/token.service'
import { AuthState, User, UserCredentials } from 'MyModels'
import axios, { AxiosError } from 'axios'
import { RootState } from '~/redux/store'

const user: User = tokenService.getUser()
const initialState: AuthState = user.accessToken
  ? {
      isLoggedIn: true,
      user: user,
      error: ''
    }
  : {
      isLoggedIn: false,
      user: { accessToken: '', refreshToken: '' },
      error: ''
    }

export const loginAsync = createAsyncThunk<AuthState, UserCredentials>(
  'auth/login',
  async (userCredentials: UserCredentials, thunkApi) => {
    console.log(userCredentials)
    try {
      const response = await authService.login(userCredentials.email, userCredentials.password)
      if (response.accessToken) {
        return response
      }
    } catch (_error) {
      const error = _error as Error | AxiosError
      console.log(error)
      if (axios.isAxiosError(error)) {
        thunkApi.dispatch(setError(error.response?.data.message))
        return thunkApi.rejectWithValue(error.response?.data.message)
      }
      thunkApi.dispatch(setError(error.message))
      return thunkApi.rejectWithValue(error.message)
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
    refreshToken: (state, { payload }) => {
      state.user.accessToken = payload.acessToken
      state.user.refreshToken = payload.refreshToken
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true
        state.user = payload.user
        state.error = ''
      })
      .addCase(loginAsync.rejected, (state) => {
        state.isLoggedIn = false
      })
  }
})

export const { setError, refreshToken } = authSlice.actions

export const selectAuth = (state: RootState) => state.auth

export default authSlice.reducer
