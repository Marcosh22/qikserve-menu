'use client'

import { useAppSelector } from "@/redux/hooks";
import CategorySection from "../CategorySection/CategorySection";

function CategorySectionList() {
    const { menu } = useAppSelector((state) => state.menu);

    return (
        <div>
            {
                menu?.sections?.map((section) => (
                    <CategorySection 
                        key={`category-section-${section.id}`}
                        name={section.name}
                        products={section.items}
                    />
                ))
            }
        </div>
    )
}

export default CategorySectionList