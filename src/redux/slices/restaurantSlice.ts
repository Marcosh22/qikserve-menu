import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Restaurant } from '@/@types/restaurantTypes';
import { fetchRestaurantDetails } from '@/lib/api';

interface RestaurantState {
  restaurant: Restaurant | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: RestaurantState = {
  restaurant: null,
  status: 'idle',
  error: null,
};

export const fetchRestaurant = createAsyncThunk('restaurant/fetchRestaurant', async () => {
  const restaurant = await fetchRestaurantDetails();
  return restaurant;
});

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    fetchRestaurantStart(state) {
      state.status = 'loading';
      state.error = null;
    },
    fetchRestaurantSuccess(state, action: PayloadAction<Restaurant>) {
      state.status = 'succeeded';
      state.restaurant = action.payload;
    },
    fetchRestaurantFailure(state, action: PayloadAction<string>) {
      state.status = 'failed';
      state.error = action.payload;
    },
    clearRestaurant(state) {
      state.restaurant = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurant.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchRestaurant.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.restaurant = action.payload;
      })
      .addCase(fetchRestaurant.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch restaurant';
      });
  },
});

export const { fetchRestaurantStart, fetchRestaurantSuccess, fetchRestaurantFailure, clearRestaurant } = restaurantSlice.actions;
export default restaurantSlice.reducer;
