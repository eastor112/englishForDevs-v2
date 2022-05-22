import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import authReducer from './slices/auth/authSlice';
import settingsReducer from './slices/settings/settingsSlice';
import lessonsReducer from './slices/lessons/lessonsSlice';
import topicsReducer from './slices/topics/topicsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    settings: settingsReducer,
    lessons: lessonsReducer,
    topics: topicsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); //use this hook to access the dispatch function

export default store;
