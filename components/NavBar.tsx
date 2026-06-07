"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        background: isScrolled || isMobileMenuOpen ? "rgba(5, 5, 5, 0.9)" : "transparent",
        backdropFilter: isScrolled || isMobileMenuOpen ? "blur(20px)" : "none",
        borderBottom: isScrolled || isMobileMenuOpen ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent"
      }}
    >
      <div className={styles.logo}>
        <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>PORSCHE</Link>
      </div>
      
      <div className={`${styles.links} ${isMobileMenuOpen ? styles.mobileOpen : ""}`}>
        {["Home", "About", "Performance", "Engineering", "Interior", "Specifications", "Contact"].map((item) => (
          <Link 
            key={item} 
            href={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
            className={styles.link}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item}
          </Link>
        ))}
      </div>

      <div className={styles.rightNav}>
        <Link href="/contact" className={styles.contactBtn}>Contact</Link>
      </div>

      <button 
        className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.open : ""}`} 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </motion.nav>
  );
}
