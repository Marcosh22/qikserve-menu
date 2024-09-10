'use client'

import Link from "next/link";
import styles from "./DesktopNavButton.module.css";
import { usePathname } from "next/navigation";

interface DesktopNavButtonProps {
  href: string;
  label: string;
}

function DesktopNavButton({
  href,
  label,
}: DesktopNavButtonProps) {


  const pathname = usePathname()

  const isNavItemActive = () => {
    if (href === '/') {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  const isActive = isNavItemActive()

  return (
    <Link
      href={href}
      className={`${styles.navButton} ${isActive ? styles.active : ''}`}
    >
      {label}
    </Link>
  );
}

export default DesktopNavButton;
