import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import authReducer from './slices/auth/authSlice';
import settingsReducer from './slices/settings/settingsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); //use this hook to access the dispatch function

export default store;
