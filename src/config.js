// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import {
  initializeAuth,
  getReactNativePersistence,
  connectAuthEmulator,
} from 'firebase/auth';
// Функція для підключення бази даних у проект
import { getFirestore } from 'firebase/firestore';
// Функція для підключення сховища файлів в проект
import { getStorage } from 'firebase/storage';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyD12aZBv_pqZVKN-5l-LFjAatekljNCibY',
  authDomain: 'rn-hw-6.firebaseapp.com',
  projectId: 'rn-hw-6',
  storageBucket: 'rn-hw-6.appspot.com',
  messagingSenderId: '8408170402',
  appId: '1:8408170402:web:82a07682d9060cc1997cfb',
  measurementId: 'G-6TT8J9X6Q4',
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
export const storage = getStorage(app);
