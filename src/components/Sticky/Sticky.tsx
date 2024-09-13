"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./Sticky.module.css";

function Sticky({ children }: { children: ReactNode }) {
  const [isSticky, setIsSticky] = useState(false);
  const [stickyStyles, setStickyStyles] = useState({});
  const stickyRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const stickyElement = stickyRef.current;
      if (!stickyElement) return;
  
      const parent = stickyElement.parentElement;
      if (!parent) return;
  
      const parentTop = parent.getBoundingClientRect().top;
      const stickyPoint = window.innerWidth >= 768 ? 52 : 50;
      const isPastStickyPoint = parentTop <= stickyPoint;
  
      if (wrapperRef?.current) {
        const { height } = stickyElement.getBoundingClientRect();
        wrapperRef.current.style.height = `${height}px`;
      }
  
      if (isPastStickyPoint && !isSticky) {
        const { left, width } = parent.getBoundingClientRect();
        setStickyStyles({
          position: "fixed",
          top: `${stickyPoint}px`,
          left: `${left}px`,
          width: `${width}px`,
        });
        setIsSticky(true);
      } else if (!isPastStickyPoint && isSticky) {
        setStickyStyles({});
        setIsSticky(false);
      } else if (isSticky) {
        const { left, width } = parent.getBoundingClientRect();
        setStickyStyles({
          position: "fixed",
          top: `${stickyPoint}px`,
          left: `${left}px`,
          width: `${width}px`,
        });
      }
    };
  
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isSticky, setIsSticky, setStickyStyles]);
  

  return (
    <div className={styles.sticky} ref={wrapperRef}>
      <div
        className={`${styles.stickyContent} ${isSticky ? styles.fixed : ""}`}
        ref={stickyRef}
        style={stickyStyles}
      >
        {children}
      </div>
    </div>
  );
}

export default Sticky;
