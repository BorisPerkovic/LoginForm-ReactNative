import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface UserState {
  entities: {};
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  errorMessage?: string;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  entities: {},
  loading: 'idle',
  errorMessage: '',
  isAuthenticated: false,
};

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (data: { email: string; password: string }) => {
    const promise = await axios.post('http://10.0.2.2:3333/login', {
      email: data.email,
      password: data.password,
    });

    return promise;
  },
);

export const usersSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logOut: state => {
      state.entities = {};
      state.loading = 'idle';
      state.isAuthenticated = false;
      state.errorMessage = '';
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUser.pending, state => {
      state.loading = 'pending';
    }),
      builder.addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.entities = action.payload.data;
        state.isAuthenticated = true;
        state.errorMessage = '';
      }),
      builder.addCase(fetchUser.rejected, (state, action) => {
        state.loading = 'failed';
        state.errorMessage = action.error.message;
      });
  },
});

export const { logOut } = usersSlice.actions;

export default usersSlice.reducer;