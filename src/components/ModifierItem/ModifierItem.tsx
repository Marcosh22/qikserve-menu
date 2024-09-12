import QuantityControl from "../QuantityControl/QuantityControl";
import formatMoney from "@/utils/formatMoney";
import styles from "./ModifierItem.module.css";

interface ModifierItemProps {
    id: number;
    name: string;
    price: number;
    type?: "radio" | "quantity";
    disabled?: boolean;
    checked?: boolean;
    min?: number;
    max?: number;
    value?: number;
    onChange?: (itemId: number, quantity: number) => void;
  }
  
  function ModifierItem({
    id,
    name,
    price,
    type = "radio",
    disabled = false,
    checked = false,
    min = 1,
    max,
    value,
    onChange = () => {},
  }: ModifierItemProps) {
    return (
      <div className={`${styles.item} ${disabled ? styles.disabled : ""}`}>
        <div className={styles.description}>
          <p className={styles.title}>{name}</p>
          <p className={styles.price}>{formatMoney(price, "BRL", "pt-BR")}</p>
        </div>
        <div>
          {type === "quantity" ? (
            <QuantityControl
              min={min}
              max={max}
              value={value}
              onChange={(quantity: number) => onChange(id, quantity)}
            />
          ) : (
            <button
              className={`${styles.radioButton} ${checked ? styles.checked : ""}`}
              onClick={() => onChange(id, checked ? 0 : 1)}
            ></button>
          )}
        </div>
      </div>
    );
  }
  
  export default ModifierItem;