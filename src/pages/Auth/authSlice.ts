import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { token: null },
  reducers: {
    setToken(state, action: PayloadAction<any>) {
      return action.payload;
    },
    logOut: (state, action) => {
      state.token = null;
    },
  },
});

export default authSlice.reducer;
export const { setToken, logOut } = authSlice.actions;
