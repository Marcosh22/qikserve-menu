import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Menu } from '@/@types/menuTypes';
import { fetchMenuDetails } from '@/lib/api';

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

export const fetchMenu = createAsyncThunk('menu/fetchMenu', async () => {
  const menu = await fetchMenuDetails();
  return menu;
});


const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    clearMenu(state) {
      state.menu = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.menu = action.payload;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch menu';
      });
  },
});

export const { clearMenu } = menuSlice.actions;
export default menuSlice.reducer;
