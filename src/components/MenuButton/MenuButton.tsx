import React, { ReactNode } from 'react';
import styles from './MenuButton.module.css'

interface MenuButtonProps {
    children: ReactNode
  onClick?: () => void
  disabled?: boolean
};

function MenuButton({ children, onClick, disabled = false }: MenuButtonProps) {

  return (
    <button
      className={`${styles.menuButton} ${disabled && styles.disabled}`}
      onClick={onClick}
      disabled={disabled}
    >
        {children}
    </button>
  );
};

export default MenuButton;
