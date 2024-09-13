"use client";

import { useAppSelector } from "@/redux/hooks";
import EmptyCart from "../EmptyCart/EmptyCart";
import styles from "./Cart.module.css";
import CartItem from "../CartItem/CartItem";
import { useEffect, useState } from "react";
import formatMoney from "@/utils/formatMoney";

function Cart() {
  const { items, totalPrice } = useAppSelector((state) => state.cart);
  const [hydrated, setHydrated] = useState<boolean>(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <>
      {hydrated && items?.length ? (
        <div>
          {items?.map((item) => (
            <CartItem key={`cart-item-${item.id}`} {...item} />
          ))}
          <div className={styles.subTotal}>
            <p className={styles.subTotalLabel}>Sub total</p>
            <p className={styles.subTotalValue}>
              {formatMoney(totalPrice, "BRL", "pt-BR")}
            </p>
          </div>
          <div className={styles.total}>
            <p className={styles.totalLabel}>Total:</p>
            <p className={styles.totalValue}>
              {formatMoney(totalPrice, "BRL", "pt-BR")}
            </p>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}

export default Cart;
