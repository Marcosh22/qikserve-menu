import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/redux/slices/cartSlice";
import menuReducer from "@/redux/slices/menuSlice";
import restaurantReducer from "@/redux/slices/restaurantSlice";
import categoryReducer from "@/redux/slices/categorySlice";
import productReducer from "@/redux/slices/productSlice";
import persistCartMiddleware from "@/middlewares/persistCartMiddleware";

export const makeStore = () => {
  return configureStore({
    reducer: {
      menu: menuReducer,
      restaurant: restaurantReducer,
      cart: cartReducer,
      category: categoryReducer,
      product: productReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(persistCartMiddleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
