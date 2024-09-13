import { Item, ModifierItem } from "./menuTypes";

export interface CartModifierItems {
  item: ModifierItem;
  quantity: number;
}
export interface CartItem {
  id: string;
  item: Item;
  modifierItems: CartModifierItems[];
  quantity: number;
  totalPrice?: number;
}

export interface CartState {
  items: CartItem[];
  totalPrice: number;
}
