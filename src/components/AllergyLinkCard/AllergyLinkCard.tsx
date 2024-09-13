import Link from "next/link";
import styles from "./AllergyLinkCard.module.css";

function AllergyLinkCard() {
  return (
    <div className={styles.card}>
      <div className={styles.linkWrapper}>
        <Link href="#" className={styles.link}>
          View allergy information
        </Link>
      </div>
    </div>
  );
}

export default AllergyLinkCard;
