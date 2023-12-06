import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../config';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getStorage, ref, uploadBytesResumable } from 'firebase/storage';

export const registerDB = createAsyncThunk(
  'user/register',
  async (credentials, thunkAPI) => {
    const { email, password, image } = credentials;
    console.log(email);
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      if (image) {
        const response = await fetch(image);
        const blob = await response.blob();
        const storage = getStorage();
        const storageRef = await ref(storage, email);
        await uploadBytesResumable(storageRef, blob);
      }
    } catch (error) {
      console.log(error.code);
      throw thunkAPI.rejectWithValue(error.code);
    }
  }
);
