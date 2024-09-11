import Image from "next/image";
import styles from "./CategoryCard.module.css";

interface CategoryCardProps {
  image: string;
  title: string;
  isActive?: boolean;
  onClick?: () => void;
}

function CategoryCard({
  image,
  title,
  isActive = false,
  onClick = () => {},
}: CategoryCardProps) {
  return (
    <div className={styles.categoryCardWrapper}>
      <button
        className={`${styles.categoryCard} ${isActive ? styles.active : ""}`}
        onClick={onClick}
      >
        <div className={styles.categoryPictureWrapper}>
          <div className={styles.categoryPicture}>
            <Image
              src={image}
              alt={title}
              fill={true}
              sizes="100vw"
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
      </button>
    </div>
  );
}

export default CategoryCard;
