import { configureStore } from '@reduxjs/toolkit';
import authSlice from './src/features/auth/authSlice';
import todoSlice from './src/features/todo/todoSlice';

authSlice
export const store = configureStore({
  reducer: {
    auth: authSlice,
    todos:todoSlice
  },
});
