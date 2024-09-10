import DesktopNavButton from "../DesktopNavButton/DesktopNavButton";
import styles from "./DesktopNav.module.css"

function DesktopNav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <DesktopNavButton href='/' label='Menu' />
        </li>
        <li>
          <DesktopNavButton href='#' label='Entrar' />
        </li>
        <li>
          <DesktopNavButton href='#' label='Contato' />
        </li>
      </ul>
    </nav>
  );
}

export default DesktopNav;
