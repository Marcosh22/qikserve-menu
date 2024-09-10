import { Middleware } from '@reduxjs/toolkit';
import { CartState } from '@/@types/cartTypes';

export const LOCAL_STORAGE_KEY = 'qikserve_cart';

const persistCartMiddleware: Middleware = store => next => action => {
  const result = next(action);

  if (typeof window !== 'undefined') {
    const state = store.getState();
    const cartState: CartState = state.cart;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartState));
  }

  return result;
};

export default persistCartMiddleware;
