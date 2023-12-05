import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../config';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { storage}

export const registerDB = createAsyncThunk(
  'user/register',
  async (credentials, thunkAPI) => {
    const { email, password } = credentials;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('yup');
    } catch (error) {
      throw thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const uploadAvatar = createAsyncThunk(
  'user/avatar',
  async (uri, thunkAPI) => {
    const reference = storage().ref(`images/${new Date().getTime()}`);
    const task = reference.putFile(uri);

    try {
      await task;
      console.log('Image uploaded successfully!');
    } catch (e) {
      console.error('Error uploading image:', e);
    }
  }
);
