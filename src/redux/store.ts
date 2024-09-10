import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/redux/slices/cartSlice';
import menuReducer from '@/redux/slices/menuSlice';
import restaurantReducer from '@/redux/slices/restaurantSlice';
import persistCartMiddleware from '@/middlewares/persistCartMiddleware';

const store = configureStore({
  reducer: {
    menu: menuReducer,
    restaurant: restaurantReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistCartMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;