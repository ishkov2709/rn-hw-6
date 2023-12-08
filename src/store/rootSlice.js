import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { loginDB, registerDB } from './thunk';
import {
  handleLoginFulfilled,
  handleLoginPending,
  handleLoginRejected,
  handleRegisterFulfilled,
  handleRegisterPending,
  handleRegisterRejected,
} from './operations';

const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    turnOffSuccess: state => {
      state.isSuccess = false;
    },
    clearError: state => {
      state.error = null;
    },
    logout: state => {
      state.user = { username: null, email: null };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerDB.pending, handleRegisterPending)
      .addCase(registerDB.fulfilled, handleRegisterFulfilled)
      .addCase(registerDB.rejected, handleRegisterRejected)
      .addCase(loginDB.pending, handleLoginPending)
      .addCase(loginDB.fulfilled, handleLoginFulfilled)
      .addCase(loginDB.rejected, handleLoginRejected);
  },
});

export const { turnOffSuccess, clearError, logout } = rootSlice.actions;

export const rootReducer = rootSlice.reducer;
