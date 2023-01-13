import { configureStore } from '@reduxjs/toolkit';

import studentReducer from '../slices/studentSlice';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

import storage from 'redux-persist/lib/storage' 

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }


  const persistedReducer = persistReducer(persistConfig, studentReducer) 

const reducer = {
    students: persistedReducer
  }
  
const store = configureStore({
    reducer: reducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  })  
/*
const store = configureStore({
  reducer: { student: studentReducer },
});
*/
export default store;
