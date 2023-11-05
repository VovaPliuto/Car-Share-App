import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6543cbb501b5e279de20f8e8.mockapi.io/';

export const fetchAllCars = createAsyncThunk(
  'cars/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('advert');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCars = createAsyncThunk(
  'cars/fetchPage',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get('advert', {
        params: {
          p: page,
          l: 12,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCar = createAsyncThunk(
  'cars/fetchCar',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`advert/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
