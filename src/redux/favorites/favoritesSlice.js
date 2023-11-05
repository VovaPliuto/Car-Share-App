import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavoriteCar: (state, action) => {
      state.favorites.push(action.payload);
    },
    deleteFavoriteCar: (state, action) => {
      state.favorites = state.favorites.filter(
        item => item.id !== action.payload.id
      );
    },
  },
});

export const { addFavoriteCar, deleteFavoriteCar } = favoritesSlice.actions;
