"use client";

import { useAppSelector } from "@/redux/hooks";
import styles from "./CategoryList.module.css";
import CategoryCard from "../CategoryCard/CategoryCard";

function CategoryList() {
  const { menu } = useAppSelector((state) => state.menu);

  return (
    <div className={styles.categories}>
      {menu?.sections?.map((section, index) => (
        <CategoryCard
          key={`category-${section.id}`}
          image={section.images[0].image}
          title={section.name}
          isActive={index === 0}
        />
      ))}
    </div>
  );
}

export default CategoryList;
