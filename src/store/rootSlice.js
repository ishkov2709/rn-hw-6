import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {},
});

export const rootReducer = rootSlice.reducer;
