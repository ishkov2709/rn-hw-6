import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const registerDB = createAsyncThunk(
  'user/register',
  async ({ email, password }) => {
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password);
      return data;
    } catch (error) {
      throw error;
    }
  }
);
