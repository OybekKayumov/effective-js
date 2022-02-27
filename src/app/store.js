import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import carReducer from '../features/car/carSlice.js';

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
