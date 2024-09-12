"use client";

import { useAppSelector, useAppStore } from "@/redux/hooks";
import CategorySection from "../CategorySection/CategorySection";
import { useEffect, useRef } from "react";
import { setActiveCategory } from "@/redux/slices/categorySlice";

function CategorySectionList() {
  const { menu } = useAppSelector((state) => state.menu);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);

  const store = useAppStore();

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs?.current?.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();

          const offsetTop = window.innerWidth >= 768 ? 190 + 52 : 190 + 64;

          if (rect.top <= offsetTop + 50 && rect.bottom >= 100) {
            const categoryId = Number(
              section.id.replace("category-section-", "")
            );

            store.dispatch(setActiveCategory(categoryId));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [store]);

  return (
    <div>
      {menu?.sections?.map((section, index) => (
        <div
          id={`category-section-${section.id}`}
          key={`category-section-${section.id}`}
          ref={(el) => {
            sectionRefs.current[index] = el;
          }}
        >
          <CategorySection
            key={`category-section-${section.id}`}
            name={section.name}
            products={section.items}
          />
        </div>
      ))}
    </div>
  );
}

export default CategorySectionList;
