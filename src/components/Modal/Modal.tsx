"use client";

import React, { ReactNode, useEffect } from "react";
import styles from "./Modal.module.css";
import XIcon from "../Icons/XIcon";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  showCloseBtn?: boolean;
  children?: ReactNode;
}

const Modal = ({
  isOpen,
  onClose,
  showCloseBtn = true,
  children,
}: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.documentElement.setAttribute("data-scroll-locked", "1");
    } else {
      document.documentElement.removeAttribute("data-scroll-locked");
    }

    return () => {
      document.documentElement.removeAttribute("data-scroll-locked");
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {showCloseBtn ? (
          <button className={styles.closeBtn} onClick={onClose}>
            <XIcon width={12} height={12} color="currentColor" />
          </button>
        ) : null}
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
