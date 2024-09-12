"use client";

import styles from "./ProductDetails.module.css";
import Image from "next/image";
import Modal from "../Modal/Modal";
import { useAppSelector, useAppStore } from "@/redux/hooks";
import { setActiveProduct } from "@/redux/slices/productSlice";
import { useEffect, useState } from "react";
import { ModifierItem as ModifierItemType } from "@/@types/menuTypes";
import Modifier from "../Modifier/Modifier";
import QuantityControl from "../QuantityControl/QuantityControl";
import Button from "../Button/Button";

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

  const [selectedItemsByModifier, setSelectedItemsByModifier] = useState<{
    [modifierId: number]: { item: ModifierItemType; quantity: number }[];
  }>({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
    setSelectedItemsByModifier([]);
  }, [product]);

  const handleItemChange = (
    modifierId: number,
    itemId: number,
    quantity: number
  ) => {
    setSelectedItemsByModifier((prev) => {
      const selectedItems = prev[modifierId] || [];

      const currentQuantity =
        selectedItems.find((selected) => selected.item.id === itemId)
          ?.quantity || 0;

      if (quantity === 0) {
        return {
          ...prev,
          [modifierId]: selectedItems.filter((item) => item.item.id !== itemId),
        };
      } else {
        const modifier = product?.modifiers?.find(
          (mod) => mod.id === modifierId
        );

        if (modifier) {
          if (modifier.maxChoices > 1) {
            if (
              selectedItems.length >= modifier.maxChoices &&
              currentQuantity === 0
            ) {
              return prev;
            }
            return {
              ...prev,
              [modifierId]: selectedItems.some(
                (item) => item.item.id === itemId
              )
                ? selectedItems.map((item) =>
                    item.item.id === itemId ? { ...item, quantity } : item
                  )
                : [
                    ...selectedItems,
                    {
                      item: modifier.items.find((i) => i.id === itemId)!,
                      quantity,
                    },
                  ],
            };
          } else {
            return {
              ...prev,
              [modifierId]: [
                {
                  item: modifier.items.find((i) => i.id === itemId)!,
                  quantity,
                },
              ],
            };
          }
        }
      }

      return prev;
    });
  };

  const validateRequiredModifiers = (): boolean => {
    if (!product?.modifiers?.length) return true;

    return product.modifiers.every((modifier) => {
      const selectedItems = selectedItemsByModifier[modifier.id] || [];
      const totalSelected = selectedItems.reduce(
        (acc, curr) => acc + curr.quantity,
        0
      );

      if (modifier.minChoices > 0) {
        return totalSelected >= modifier.minChoices;
      }
      return true;
    });
  };

  const selectedPrice = Object.values(selectedItemsByModifier).reduce(
    (acc, selectedItems) =>
      acc +
      selectedItems.reduce(
        (itemAcc, curr) => itemAcc + curr.item.price * curr.quantity,
        0
      ),
    0
  );

  const totalPrice = selectedPrice * quantity;

  const handleModalClose = () => store.dispatch(setActiveProduct(null));

  return (
    <Modal isOpen={!!product} onClose={handleModalClose}>
      <div className={styles.card}>
        {product?.images?.length && (
          <ProductImage
            imageSrc={product.images[0].image}
            altText={product.name}
          />
        )}
        <div className={styles.content}>
          <ProductDescription
            name={product?.name || ""}
            description={product?.description || ""}
          />
          {product?.modifiers?.map((modifier) => (
            <Modifier
              key={modifier.id}
              modifier={modifier}
              selectedItems={selectedItemsByModifier[modifier.id] || []}
              handleItemChange={(itemId, quantity) =>
                handleItemChange(modifier.id, itemId, quantity)
              }
            />
          ))}
        </div>
      </div>
      <div className={styles.footer}>
        <QuantityControl
          min={1}
          onChange={setQuantity}
          value={quantity}
          variant="lg"
        />
        <Button disabled={!validateRequiredModifiers()}>
          Add to Order • R${totalPrice.toFixed(2)}
        </Button>
      </div>
    </Modal>
  );
}

export default ProductDetails;
