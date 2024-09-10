import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, CartItem } from '@/@types/cartTypes';
import { LOCAL_STORAGE_KEY } from '@/middlewares/persistCartMiddleware';

const getInitialState = (): CartState => {
  if (typeof window !== 'undefined') {
    const storedCart = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : { items: [], totalPrice: 0 };
  }
  return { items: [], totalPrice: 0 };
};

const initialState = getInitialState();

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
