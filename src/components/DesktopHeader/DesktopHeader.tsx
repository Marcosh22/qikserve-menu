import DesktopNav from "../DesktopNav/DesktopNav";
import styles from "./DesktopHeader.module.css";

function DesktopHeader() {
  return (
    <header className={styles.header}>
      <DesktopNav />
    </header>
  );
}

export default DesktopHeader;
