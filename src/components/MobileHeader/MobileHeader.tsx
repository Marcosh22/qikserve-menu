import MenuButton from "../MenuButton/MenuButton";
import BackArrowIcon from "../Icons/BackArrowIcon";
import HamburguerMenuIcon from "../Icons/HamburguerMenuIcon";
import styles from "./MobileHeader.module.css";

function MobileHeader() {
  return (
    <header className={styles.header}>
      <MenuButton disabled={true}>
        <BackArrowIcon color="currentColor" />
      </MenuButton>
      <span className={styles.pageTitle}>Menu</span>
      <MenuButton>
        <HamburguerMenuIcon color="currentColor" />
      </MenuButton>
    </header>
  );
}

export default MobileHeader;
