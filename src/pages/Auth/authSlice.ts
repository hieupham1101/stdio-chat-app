import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthState } from 'MyModels';
import { UserCredentials, User } from 'MyModels';

const initialState: User = {
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokens: (
      state,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>,
    ) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    clearTokens: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

export default authSlice.reducer;
export const { setTokens, clearTokens } = authSlice.actions;
