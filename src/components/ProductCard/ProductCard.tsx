'use client'

import Image from "next/image";
import styles from "./ProductCard.module.css";
import formatMoney from "@/utils/formatMoney";

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  image?: string;
}

function ProductCard({ name, description, price, image }: ProductCardProps) {
  return (
    <div className={styles.productCard}>
      <div className={styles.productContent}>
        <h3 className={styles.productTitle}>{name}</h3>
        <p className={styles.productDescription}>{description}</p>
        <p className={styles.productPrice}>{formatMoney(price, 'BRL', 'pt-BR')}</p>
      </div>
      {image ? (
        <div className={styles.categoryPicture}>
          <Image
            src={image}
            alt={name}
            fill={true}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      ) : null}
    </div>
  );
}

export default ProductCard;
