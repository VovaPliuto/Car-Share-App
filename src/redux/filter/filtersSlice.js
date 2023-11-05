import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterValue: "",
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterCarsChange: (state, action) => {
      state.filterValue = action.payload;
    },
  },
});

export const { filterCarsChange } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
