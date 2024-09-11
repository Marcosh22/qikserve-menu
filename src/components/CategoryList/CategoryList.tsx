"use client";

import { useAppSelector } from "@/redux/hooks";
import styles from "./CategoryList.module.css";
import CategoryCard from "../CategoryCard/CategoryCard";
function CategoryList() {
  const { menu } = useAppSelector((state) => state.menu);
  const { activeCategory } = useAppSelector((state) => state.category);

  const scrollToCategory = (categoryId: number) => {
    const categoryElement = document.getElementById(
      `category-section-${categoryId}`
    );
    if (categoryElement) {
      const offset = window.innerWidth >= 768 ? 190 + 52 : 190 + 64;

      const elementPosition =
        categoryElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.categories}>
      {menu?.sections?.map((section) => (
        <CategoryCard
          key={`category-${section.id}`}
          image={section.images[0].image}
          title={section.name}
          isActive={activeCategory === section.id}
          onClick={() => scrollToCategory(section.id)}
        />
      ))}
    </div>
  );
}

export default CategoryList;
