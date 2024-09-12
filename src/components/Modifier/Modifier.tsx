import {
  Modifier as ModifierType,
  ModifierItem as ModifierItemType,
} from "@/@types/menuTypes";

import ModifierItem from "../ModifierItem/ModifierItem";
import styles from "./Modifier.module.css";

interface ModifierProps {
  modifier: ModifierType;
  selectedItems: SelectedItem[];
  handleItemChange: (itemId: number, quantity: number) => void;
}

type SelectedItem = {
  item: ModifierItemType;
  quantity: number;
};

function Modifier({ modifier, selectedItems, handleItemChange }: ModifierProps) {
  const getTotalSelectedItem = (): number => {
    return selectedItems.reduce((a, b) => a + b.quantity, 0);
  };

  return (
    <div>
      <div className={styles.description}>
        <p className={styles.title}>{modifier.name}</p>
        <p className={styles.moreInfo}>
          {modifier.minChoices < modifier.maxChoices
            ? `Select up to ${modifier.maxChoices} ${
                modifier.maxChoices > 1 ? "options" : "option"
              }`
            : `Select ${modifier.minChoices} ${
                modifier.minChoices > 1 ? "options" : "option"
              }`}
          &nbsp;
          {modifier.minChoices <= 0 ? " (Optional)" : ""}
        </p>
      </div>
      <div>
        {modifier.items.map((item) => {
          const selectedItem = selectedItems.find(
            (selected) => selected.item.id === item.id
          );
          const quantity = selectedItem ? selectedItem.quantity : 0;

          return (
            <ModifierItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              type={modifier.maxChoices > 1 ? "quantity" : "radio"}
              min={0}
              max={
                getTotalSelectedItem() === modifier.maxChoices
                  ? quantity
                  : modifier.maxChoices > item.maxChoices
                  ? item.maxChoices
                  : modifier.maxChoices
              }
              value={quantity}
              checked={quantity > 0}
              disabled={
                modifier.maxChoices > 1 &&
                getTotalSelectedItem() >= modifier.maxChoices &&
                quantity <= 0
              }
              onChange={handleItemChange}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Modifier;
