import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SliceState {
  ids: string[];
}

interface PayloadId {
  id: string;
}

const initialState: SliceState = { ids: [] };

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorites: (state, action: PayloadAction<PayloadId>) => {
      state.ids.push(action.payload.id);
    },
    removeFavorites: (state, action: PayloadAction<PayloadId>) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavorite = favoritesSlice.actions.addFavorites;
export const removeFavorite = favoritesSlice.actions.removeFavorites;

export default favoritesSlice.reducer;
