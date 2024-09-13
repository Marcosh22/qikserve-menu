"use client";

import { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./Checkout.module.css";
import { useAppSelector } from "@/redux/hooks";
import CheckoutModal from "../CheckoutModal/CheckoutModal";

function Checkout() {
  const { items } = useAppSelector((state) => state.cart);
  const [hydrated, setHydrated] = useState<boolean>(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated || !items?.length) return;

  const totalItems = items.reduce(
    (itemAcc, curr) => itemAcc + curr.quantity,
    0
  );

  return (
    <>
      <div className={styles.checkoutButtonContainer}>
        <Button
            onClick={() => setShowModal(true)}
        >
          Your basket • {totalItems} {totalItems === 1 ? "item" : "items"}
        </Button>
      </div>
      <CheckoutModal
        isOpen={showModal}
        handleClose={() => setShowModal(false)}
      />
    </>
  );
}

export default Checkout;
