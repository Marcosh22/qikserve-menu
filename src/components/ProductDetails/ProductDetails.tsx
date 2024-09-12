"use client";

import styles from "./ProductDetails.module.css";
import Image from "next/image";
import Modal from "../Modal/Modal";
import { useAppSelector, useAppStore } from "@/redux/hooks";
import { setActiveProduct } from "@/redux/slices/productSlice";
import { useState } from "react";
import {
  Modifier as ModifierType,
  ModifierItem as ModifierItemType,
} from "@/@types/menuTypes";

function ModifierItem({
  modifierItem,
  checked = false,
  onChange = () => {},
}: {
  modifierItem: ModifierItemType;
  checked?: boolean;
  onChange?: (item: ModifierItemType) => void;
}) {
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

function Modifier({
  modifier,
  selectedItems,
  onModifierChange,
}: {
  modifier: ModifierType;
  selectedItems: ModifierItemType[];
  onModifierChange: (item: ModifierItemType) => void;
}) {
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

function ProductImage({
  imageSrc,
  altText,
}: {
  imageSrc: string;
  altText: string;
}) {
  return (
    <div className={styles.picture}>
      <Image
        src={imageSrc}
        alt={altText}
        fill={true}
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </div>
  );
}

function ProductDescription({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className={styles.info}>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

function ProductDetails() {
  const { activeProduct: product } = useAppSelector((state) => state.product);
  const store = useAppStore();

  const [selectedModifiers, setSelectedModifiers] = useState<
    ModifierItemType[]
  >([]);
  const [quantity, setQuantity] = useState(1);

  const handleModifierChange = (item: ModifierItemType) => {
    if(!product?.modifiers?.length) return;

    if (selectedModifiers.some((i) => i.id === item.id)) {
      setSelectedModifiers((prev) => prev.filter((i) => i.id !== item.id));
    } else if (selectedModifiers.length < product.modifiers[0].maxChoices) {
      setSelectedModifiers((prev) => [...prev, item]);
    }
  };

  const handleQuantityChange = (increment: boolean) => {
    setQuantity((prevQuantity) =>
      increment ? prevQuantity + 1 : Math.max(1, prevQuantity - 1)
    );
  };

  const selectedPrice = selectedModifiers.reduce(
    (acc, curr) => acc + curr.price,
    0
  );
  const totalPrice = selectedPrice * quantity;

  function handleModalClose() {
    store.dispatch(setActiveProduct(null));
  }

  return (
    <Modal isOpen={!!product} onClose={handleModalClose}>
      <div className={styles.card}>
        {product?.images?.length ? (
          <ProductImage
            imageSrc={product.images[0].image}
            altText={product.name}
          />
        ) : null}
        <div className={styles.content}>
          <ProductDescription
            name={product?.name || ""}
            description={product?.description || ""}
          />

          {product?.modifiers?.map((modifier) => (
            <Modifier
              key={modifier.id}
              modifier={modifier}
              selectedItems={selectedModifiers}
              onModifierChange={handleModifierChange}
            />
          ))}
        </div>
        <div className="quantity-controls">
          <button onClick={() => handleQuantityChange(false)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange(true)}>+</button>
        </div>

        <button className="add-to-order">Add to Order - R${totalPrice}</button>
      </div>
    </Modal>
  );
}

export default ProductDetails;
