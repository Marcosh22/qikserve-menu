"use client";

import { Item } from "@/@types/menuTypes";
import styles from "./CategorySection.module.css";
import { useState } from "react";
import ChevronUp from "../Icons/ChevronUp";
import ProductCard from "../ProductCard/ProductCard";

interface CategorySectionProps {
  name: string;
  products?: Item[];
}

function CategorySection({ name, products = [] }: CategorySectionProps) {
  const [isCollapsed, setCollapse] = useState(false);

  return (
    <div
      className={`${styles.category} ${isCollapsed ? styles.collapsed : ""}`}
    >
      <button
        className={styles.categoryToggler}
        onClick={() => setCollapse(!isCollapsed)}
      >
        <h2>{name}</h2>
        <span>
          <ChevronUp color="currentColor" width={24} height={24} />
        </span>
      </button>
      <div className={styles.categoryProducts}>
        {products?.map((product) => (
          <ProductCard key={`product-${product.id}`} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CategorySection;
