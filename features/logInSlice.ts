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

export const logIn = createAsyncThunk(
  'user/logIn',
  async (data: { email: string; password: string }) => {
    const promise = await axios.post('http://10.0.2.2:3333/login', {
      email: data.email,
      password: data.password,
    });

    return promise;
  },

  /*  async (data: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://10.0.2.2:3333/login', {
        email: data.email,
        password: data.password,
      });
      console.log(response.data);

      return response;
    } catch (err) {
      console.log(err.response.data);

      return rejectWithValue(err.response.data);
    }
  }, */
);

export const authenticationSlice = createSlice({
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
    builder
      .addCase(logIn.pending, state => {
        state.loading = 'pending';
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.entities = action.payload.data;
        state.isAuthenticated = true;
        state.errorMessage = '';
      })
      .addCase(logIn.rejected, (state, action) => {
        state.loading = 'failed';
        state.errorMessage = action.error.message;
      });
  },
});

export const { logOut } = authenticationSlice.actions;

export default authenticationSlice.reducer;
