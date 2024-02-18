import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserModel } from '../../redux/type/userModels';

const initialState: UserModel = {
  id: 0,
  name: '',
  email: '',
  dob: '',
  supervisor_id: 0,
  supervisor: {
    id: '',
    name: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserModel>) {
      return action.payload;
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice.reducer;
