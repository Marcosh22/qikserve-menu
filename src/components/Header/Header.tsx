import DesktopHeader from "../DesktopHeader/DesktopHeader";
import MobileHeader from "../MobileHeader/MobileHeader";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={styles.desktop}>
        <DesktopHeader />
      </div>
      <div className={styles.mobile}>
        <MobileHeader />
      </div>
    </>
  );
}

export default Header;
