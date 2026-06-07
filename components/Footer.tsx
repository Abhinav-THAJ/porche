import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerLogo}>PORSCHE</div>
        <div className={styles.footerLinks}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/performance">Performance</Link>
          <Link href="/engineering">Engineering</Link>
          <Link href="/interior">Interior</Link>
          <Link href="/specifications">Specifications</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} Porsche Concept by pixiwebs. All Rights Reserved.
        </div>
        <div className={styles.socials}>
          <Link href="#">Instagram</Link>
          <Link href="#">YouTube</Link>
          <Link href="#">Twitter</Link>
        </div>
      </div>
    </footer>
  );
}
