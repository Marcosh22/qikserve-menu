import { Middleware } from '@reduxjs/toolkit';
import { CartState } from '@/@types/cartTypes';

const LOCAL_STORAGE_KEY = 'qikserve_cart';

const persistCartMiddleware: Middleware = store => next => action => {
  const result = next(action);

  const state = store.getState();
  const cartState: CartState = state.cart;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartState));

  return result;
};

export default persistCartMiddleware;
