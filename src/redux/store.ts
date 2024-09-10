import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/redux/slices/cartSlice';
import persistCartMiddleware from '@/middlewares/persistCartMiddleware';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistCartMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;