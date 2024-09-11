import Image from "next/image";
import styles from "./CategoryCard.module.css";

interface CategoryCardProps {
  image: string;
  title: string;
  isActive?: boolean;
}

function CategoryCard({ image, title, isActive = false }: CategoryCardProps) {
  return (
    <div className={styles.categoryCardWrapper}>
      <div
        className={`${styles.categoryCard} ${isActive ? styles.active : ""}`}
      >
        <div className={styles.categoryPictureWrapper}>
          <div className={styles.categoryPicture}>
            <Image
              src={image}
              alt={title}
              fill={true}
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        </div>
        <div className={styles.categoryTitleContainer}>
          <h3 className={styles.categoryTitle}>{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
