import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Restaurant } from '@/@types/restaurantTypes';

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
});

export const { fetchRestaurantStart, fetchRestaurantSuccess, fetchRestaurantFailure, clearRestaurant } = restaurantSlice.actions;
export default restaurantSlice.reducer;
