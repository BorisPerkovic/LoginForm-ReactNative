import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface UserState {
  companies: {};
  candidates: {};
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: UserState = {
  companies: {},
  candidates: {},
  loading: 'idle',
};

export const createReportThunk = createAsyncThunk(
  'createReport/createReportThnuk',
  async () => {
    const candidates = await axios.get('http://10.0.2.2:3333/api/candidates');
    const reports = await axios.get('http://10.0.2.2:3333/api/companies');
    return [candidates, reports];
  },
);

export const reportsSlice = createSlice({
  name: 'createReport',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createReportThunk.pending, state => {
        state.loading = 'pending';
      })
      .addCase(createReportThunk.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.candidates = action.payload[0].data;
        state.companies = action.payload[1].data;
      })
      .addCase(createReportThunk.rejected, state => {
        state.loading = 'failed';
      });
  },
});

export default reportsSlice.reducer;
