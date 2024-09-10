import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Menu } from '@/@types/menuTypes';

interface MenuState {
  menu: Menu | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: MenuState = {
  menu: null,
  status: 'idle',
  error: null,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    fetchMenuStart(state) {
      state.status = 'loading';
      state.error = null;
    },
    fetchMenuSuccess(state, action: PayloadAction<Menu>) {
      state.status = 'succeeded';
      state.menu = action.payload;
    },
    fetchMenuFailure(state, action: PayloadAction<string>) {
      state.status = 'failed';
      state.error = action.payload;
    },
    clearMenu(state) {
      state.menu = null;
      state.status = 'idle';
      state.error = null;
    },
  },
});

export const { fetchMenuStart, fetchMenuSuccess, fetchMenuFailure, clearMenu } = menuSlice.actions;
export default menuSlice.reducer;
