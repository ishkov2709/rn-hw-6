import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import { auth, db } from '../config';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';

export const registerDB = createAsyncThunk(
  'user/register',
  async (credentials, thunkAPI) => {
    const { login = null, email, password, image } = credentials;
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const user = auth.currentUser;

      if (image) {
        const response = await fetch(image);
        const blob = await response.blob();
        const storage = getStorage();
        const storageRef = await ref(storage, email);
        await uploadBytesResumable(storageRef, blob);
        // const res = await getDownloadURL(ref(storage, email));
        // console.log(res);
      }

      if (user) {
        await updateProfile(user, {
          displayName: login,
          photoURL: image,
        });
      }
    } catch (error) {
      console.log(error.code);
      throw thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const loginDB = createAsyncThunk(
  'user/login',
  async (credentials, thunkAPI) => {
    const { email, password } = credentials;
    try {
      const {
        user: { displayName },
      } = await signInWithEmailAndPassword(auth, email, password);
      return { displayName, email };
    } catch (error) {
      throw thunkAPI.rejectWithValue(error.code);
    }
  }
);
