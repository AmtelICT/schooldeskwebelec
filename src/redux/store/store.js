import { configureStore } from '@reduxjs/toolkit';

import studentsReducer from '../slices/studentsSlice';

import {
   // persistStore,
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
    //storage: localStorage,
   // debounce: 50
  }


  const persistedReducer = persistReducer(persistConfig, studentsReducer) 
/*
const reducer = {
    students: persistedReducer
  }
  */
const store = configureStore({
   // reducer: reducer,
   reducer: persistedReducer,
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

//import {persistStore, autoRehydrate} from 'redux-persist'

//import {applyMiddleware, createStore} from 'redux';


//const store = autoRehydrate()(configureStore)(rootReducer, middleware);

//persistStore(store, {

//blacklist: ['logs', 'statusMessages', 'env'],

//storage: AsyncStorage,

//debounce: 50

//});


export default store;
