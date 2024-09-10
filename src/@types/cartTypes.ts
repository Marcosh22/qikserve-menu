import { Item } from "./menuTypes";

export interface CartItem {
  item: Item;
  price: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  totalPrice: number;
}
