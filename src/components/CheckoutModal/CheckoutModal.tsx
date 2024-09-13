"use client";

import styles from "./CheckoutModal.module.css";
import Modal from "../Modal/Modal";
import Cart from "../Cart/Cart";
import XIcon from "../Icons/XIcon";
import Button from "../Button/Button";

interface CheckoutModalProps {
  isOpen?: boolean;
  handleClose?: () => void;
}

function CheckoutModal({
  isOpen = false,
  handleClose = () => {},
}: CheckoutModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={handleClose} showCloseBtn={false}>
      <div className={styles.card}>
        <header className={styles.header}>
          <div style={{width: 28}}></div>
          <span className={styles.pageTitle}>Menu</span>
          <button className={styles.menuButton} onClick={handleClose}>
            <XIcon color="currentColor" />
          </button>
        </header>
        <Cart />
      </div>
      <div className={styles.checkoutButtonContainer}>
        <Button
        >
          Checkout now
        </Button>
      </div>
    </Modal>
  );
}

export default CheckoutModal;
