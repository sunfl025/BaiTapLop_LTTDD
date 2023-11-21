import { configureStore } from '@reduxjs/toolkit';
import userAuthentication from './userStore';

export const store = configureStore({
  reducer: {
    authen: userAuthentication
  }
});