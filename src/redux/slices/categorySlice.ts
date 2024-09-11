import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CategoryState {
  activeCategory?: number | null;
}

const initialState: CategoryState = {
  activeCategory: null,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<number | null>) => {
      state.activeCategory = action.payload;
    },
  },
});

export const { setActiveCategory } = categorySlice.actions;
export default categorySlice.reducer;
