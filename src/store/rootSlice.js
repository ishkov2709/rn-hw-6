import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { registerDB } from './thunk';
import {
  handleRegisterFulfilled,
  handleRegisterPending,
  handleRegisterRejected,
} from './operations';

const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerDB.pending, handleRegisterPending)
      .addCase(registerDB.fulfilled, handleRegisterFulfilled)
      .addCase(registerDB.rejected, handleRegisterRejected);
  },
});

export const rootReducer = rootSlice.reducer;
