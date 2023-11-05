import { createSlice } from '@reduxjs/toolkit';

import { fetchAllCars, fetchCars, fetchCar } from './operations';

const initialState = {
  carsArray: [],
  carInfo: null,
  allCars: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,

  extraReducers: builder => {
    builder

      .addCase(fetchAllCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.allCars = action.payload;
      })
      .addCase(fetchAllCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(fetchCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const newCars = action.payload.filter(
          car => !state.carsArray.some(stateCar => stateCar.id === car.id)
        );
        state.carsArray = [...state.carsArray, ...newCars];
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(fetchCar.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCar.fulfilled, (state, action) => {
        state.carInfo = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const carsReducer = carsSlice.reducer;
