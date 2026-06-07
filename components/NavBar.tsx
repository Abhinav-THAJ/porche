"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`${styles.navContainer} ${isScrolled ? styles.scrolled : ""}`}
      style={{
        background: isScrolled ? "rgba(5, 5, 5, 0.85)" : "transparent",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent"
      }}
    >
      <div className={styles.logo}>
        <Link href="/">PORSCHE</Link>
      </div>
      
      <div className={styles.links}>
        {["Home", "About", "Performance", "Engineering", "Interior", "Specifications"].map((item) => (
          <Link key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className={styles.link}>
            {item}
          </Link>
        ))}
      </div>

      <div className={styles.rightNav}>
        <Link href="/contact" className={styles.contactBtn}>Contact</Link>
      </div>
    </motion.nav>
  );
}
