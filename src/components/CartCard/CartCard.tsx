"use client";

import styles from "./CartCard.module.css";
import Cart from "../Cart/Cart";

function CartCard() {
  return (
    <div>
      <div className={styles.header}>
        <h2 className={styles.title}>Carrinho</h2>
      </div>
      <Cart />
    </div>
  );
}

export default CartCard;
