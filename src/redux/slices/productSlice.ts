import { Item } from '@/@types/menuTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductState {
  activeProduct?: Item | null;
}

const initialState: ProductState = {
  activeProduct: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setActiveProduct: (state, action: PayloadAction<Item | null>) => {
      state.activeProduct = action.payload;
    },
  },
});

export const { setActiveProduct } = productSlice.actions;
export default productSlice.reducer;
