
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, CartItem } from '@/@types/cartTypes';

const LOCAL_STORAGE_KEY = 'qikserve_cart';

const initialState: CartState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}') || {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.item.id === item.item.id);
      
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
      
      state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.item.id !== action.payload);
      state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
