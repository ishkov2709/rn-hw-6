import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { registerDB, uploadAvatar } from './thunk';
import {
  handleRegisterFulfilled,
  handleRegisterPending,
  handleRegisterRejected,
  handleUploadAvatar,
} from './operations';

const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerDB.pending, handleRegisterPending)
      .addCase(registerDB.fulfilled, handleRegisterFulfilled)
      .addCase(registerDB.rejected, handleRegisterRejected)
      .addCase(uploadAvatar.fulfilled, handleUploadAvatar);
  },
});

export const rootReducer = rootSlice.reducer;
