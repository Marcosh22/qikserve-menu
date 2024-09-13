"use client";

import formatMoney from "@/utils/formatMoney";
import styles from "./CartItem.module.css";

import { CartItem as CartItemType } from "@/@types/cartTypes";
import QuantityControl from "../QuantityControl/QuantityControl";
import { useAppStore } from "@/redux/hooks";
import { updateItemQuantity } from "@/redux/slices/cartSlice";

function CartItem({id,  item, modifierItems, quantity, totalPrice }: CartItemType) {

  const store = useAppStore();

  const handleQuantityChange = (quantity: number) => store.dispatch(updateItemQuantity({id, quantity}));

  return (
    <div className={styles.cartItem}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>{item.name}</h3>
        <p className={styles.price}>
          {formatMoney(totalPrice || 0, "BRL", "pt-BR")}
        </p>
      </div>
      {modifierItems?.map((modifierItem) => (
        <p key={`cart-mod-${modifierItem.item.id}`} className={styles.modifier}>
          {modifierItem.item.name}&nbsp;
          {modifierItem.item.price ? (
            <small>{`(+${formatMoney(
              modifierItem.item.price,
              "BRL",
              "pt-BR"
            )})`}</small>
          ) : (
            ""
          )}
        </p>
      ))}
      <div className={styles.quantityContainer}>
        <QuantityControl value={quantity} min={0} onChange={handleQuantityChange} />
      </div>
    </div>
  );
}

export default CartItem;
