import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favorite-slice';

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
  },
});

export default store;
