"use client";

import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import styles from './ProductCountBadge.module.css'

function ProductCountBadge({ productId }: { productId: number }) {
  const { items } = useAppSelector((state) => state.cart);
  const [hydrated, setHydrated] = useState<boolean>(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated || !items?.length) return;

  const count = items.reduce((acc, curr) => {
    if (curr.item.id === productId) return acc + curr.quantity;

    return acc;
  }, 0);

  if (!count) return;

  return <div className={styles.badge}>{count}</div>;
}

export default ProductCountBadge;
