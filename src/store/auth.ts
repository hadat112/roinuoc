import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: null,
  role: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.username = action.payload?.user_name;
      state.role = action.payload?.role;
    },
  },
});

export const { setUserName } = authSlice.actions;

export default authSlice.reducer;
