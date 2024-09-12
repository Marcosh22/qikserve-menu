import MinusIcon from "../Icons/MinusIcon";
import PlusIcon from "../Icons/PlusIcon";
import styles from "./QuantityControl.module.css";

interface QuantityControlProps {
  min: number;
  max?: number;
  value?: number;
  onChange?: (value: number) => void;
  variant?: "lg" | "sm";
}

function QuantityControl({
  min,
  max,
  value = 1,
  onChange = () => {},
  variant = "sm",
}: QuantityControlProps) {
  function handleChange(inputValue: number) {
    let changedValue = inputValue;

    if (inputValue < min) changedValue = min;

    if (max && inputValue > max) changedValue = max;

    if (onChange) onChange(changedValue);
  }

  return (
    <div
      className={`${styles.container} ${
        variant === "lg" ? styles.large : styles.small
      }`}
    >
      <button
        className={styles.button}
        onClick={() => handleChange(value - 1)}
        disabled={value === min}
      >
        <span className={styles.buttonIcon}>
          <MinusIcon width="100%" height="100%" color="currentColor" />
        </span>
      </button>
      <span className={styles.value}>{value}</span>
      <button
        className={styles.button}
        onClick={() => handleChange(value + 1)}
        disabled={!!max && value === max}
      >
         <span className={styles.buttonIcon}>
          <PlusIcon width="100%" height="100%" color="currentColor" />
        </span>
      </button>
    </div>
  );
}

export default QuantityControl;
