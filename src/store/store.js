import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { rootReducer } from './rootSlice';
import { configureStore } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const presistMiddleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

const reducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer,
  middleware: presistMiddleware,
});

const persistor = persistStore(store);

export default { store, persistor };
