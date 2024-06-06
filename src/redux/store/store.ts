import { configureStore } from '@reduxjs/toolkit';
import animalsReducer from '../reducer/home/home.reducer';

const store = configureStore({
  reducer: {
    animals: animalsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
