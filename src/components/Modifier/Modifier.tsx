import {
  Modifier as ModifierType,
  ModifierItem as ModifierItemType,
} from "@/@types/menuTypes";

interface ModifierItemProps {
  modifierItem: ModifierItemType;
  checked?: boolean;
  onChange?: (item: ModifierItemType) => void;
}

function ModifierItem({
  modifierItem,
  checked = false,
  onChange = () => {},
}: ModifierItemProps) {
  return (
    <label>
      <input
        type="radio"
        name="modifier"
        value={modifierItem.id}
        checked={checked}
        onChange={() => onChange(modifierItem)}
        disabled={!modifierItem.available}
      />
      {modifierItem.name} - R${modifierItem.price.toFixed(2)}
    </label>
  );
}

interface ModifierProps {
  modifier: ModifierType;
  selectedItems: ModifierItemType[];
  onModifierChange: (item: ModifierItemType) => void;
}

function Modifier({
  modifier,
  selectedItems,
  onModifierChange,
}: ModifierProps) {
  const handleChange = (item: ModifierItemType) => {
    if (selectedItems.some((i) => i.id === item.id)) {
      onModifierChange(item);
    } else if (selectedItems.length < modifier.maxChoices) {
      onModifierChange(item);
    }
  };

  return (
    <div>
      <div>{modifier.name}</div>
      <div>
        {modifier?.items?.map((item) => (
          <ModifierItem
            key={item.id}
            modifierItem={item}
            checked={selectedItems.some((i) => i.id === item.id)}
            onChange={() => handleChange(item)}
          />
        ))}
      </div>
    </div>
  );
}

export default Modifier;
