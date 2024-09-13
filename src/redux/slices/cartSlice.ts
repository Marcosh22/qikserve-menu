import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState, CartItem } from "@/@types/cartTypes";
import { LOCAL_STORAGE_KEY } from "@/middlewares/persistCartMiddleware";

const getInitialState = (): CartState => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        if (
          Array.isArray(parsedCart.items) &&
          typeof parsedCart.totalPrice === "number"
        ) {
          return parsedCart;
        }
      } catch (e) {
        console.error("Failed to parse cart from localStorage", e);
      }
    }
  }
  return { items: [], totalPrice: 0 };
};

const initialState = getInitialState();

const calculateItemTotalPrice = (item: CartItem): number => {
  const itemTotal = item.item.price;
  const modifierTotal = item.modifierItems.reduce(
    (modifierAcc, modifierItem) => modifierAcc + (modifierItem.item.price * modifierItem.quantity),
    0
  );
  return (itemTotal + modifierTotal) * item.quantity;
};

const updateTotalPrice = (state: CartState) => {
  state.totalPrice = state.items.reduce(
    (total, cartItem) => {
      cartItem.totalPrice = calculateItemTotalPrice(cartItem);
      return total + cartItem.totalPrice;
    },
    0
  );
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += item.quantity;
        existingItem.totalPrice = calculateItemTotalPrice(existingItem);
      } else {
        item.totalPrice = calculateItemTotalPrice(item);
        state.items.push(item);
      }

      updateTotalPrice(state);
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter(
        (item) => item.item.id !== action.payload
      );

      updateTotalPrice(state);
    },
    updateItemQuantity(state, action: PayloadAction<{ id: string, quantity: number }>) {
      const { id, quantity } = action.payload;
      const item = state.items.find((i) => i.id === id);

      if (item) {
        item.quantity = quantity;

        item.totalPrice = calculateItemTotalPrice(item);

        if (item.quantity <= 0) {
          state.items = state.items.filter((i) => i.id !== id);
        }
      }

      updateTotalPrice(state);
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, updateItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
