import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  name: '',
  password: '',
  isLogedIn: false,
};

export const authenticateSlice = createSlice({
  name: 'token',
  initialState: { value: initialState },
  reducers: {
    logIn: (state, action) => {
      state.value = action.payload;
    },
    logOut: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { logIn, logOut } = authenticateSlice.actions;

export default authenticateSlice.reducer;
