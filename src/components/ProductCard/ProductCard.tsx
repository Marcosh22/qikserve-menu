"use client";

import Image from "next/image";
import styles from "./ProductCard.module.css";
import formatMoney from "@/utils/formatMoney";
import { Item } from "@/@types/menuTypes";
import { useAppStore } from "@/redux/hooks";
import { setActiveProduct } from "@/redux/slices/productSlice";
import getMinProductPrice from "@/utils/getMinProductPrice";
import ProductCountBadge from "../ProductCountBadge/ProductCountBadge";

interface ProductCardProps {
  product: Item;
}

function ProductCard({ product }: ProductCardProps) {
  const store = useAppStore();

  function handleProductClick() {
    store.dispatch(setActiveProduct(product));
  }

  return (
    <button className={styles.productCard} onClick={handleProductClick}>
      <div className={styles.productContent}>
        <h3 className={styles.productTitle}>
          <ProductCountBadge productId={product.id} />
          {product.name}
        </h3>
        <p className={styles.productDescription}>{product.description}</p>
        <p className={styles.productPrice}>
          {formatMoney(getMinProductPrice(product), "BRL", "pt-BR")}
        </p>
      </div>
      {product?.images?.length ? (
        <div className={styles.categoryPicture}>
          <Image
            src={product.images[0].image}
            alt={product.name}
            fill={true}
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      ) : null}
    </button>
  );
}

export default ProductCard;
