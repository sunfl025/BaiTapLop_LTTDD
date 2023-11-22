import { configureStore } from '@reduxjs/toolkit';
import userAuthentication from './userStore';
import taskReducer from './taskStore'
export const store = configureStore({
  reducer: {
    authen: userAuthentication,
    task:taskReducer
  }
});