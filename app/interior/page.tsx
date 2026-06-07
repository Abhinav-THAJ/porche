"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./interior.module.css";

const SplitSection = ({ title, text, img, reverse = false }: { title: string, text: string, img: string, reverse?: boolean }) => (
  <section className={`${styles.splitBlock} ${reverse ? styles.reverse : ''}`}>
    <div className={styles.textContent}>
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        {title}
      </motion.h2>
      <motion.div className={styles.accentLine} initial={{ width: 0 }} whileInView={{ width: 60 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} />
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
        {text}
      </motion.p>
    </div>
    <div className={styles.imageContent}>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} style={{ width: '100%', height: '100%', position: 'relative' }}>
        <Image src={img} alt={title} fill style={{ objectFit: "cover" }} />
      </motion.div>
    </div>
  </section>
);

export default function InteriorPage() {
  return (
    <div className={styles.container}>
      
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image src="/grid/interior.png" alt="Interior Cockpit" fill style={{ objectFit: "cover" }} priority />
          <div className={styles.heroOverlay} />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          className={styles.heroContent}
        >
          <h1 className={styles.heroTitle}>Driver Focused.</h1>
          <h2 className={styles.heroSubtitle}>Everything Else Follows.</h2>
        </motion.div>
      </section>

      {/* SEC 01: The Cockpit */}
      <SplitSection 
        title="The Analog Heart in a Digital World."
        text="At the center of the instrument cluster lies the analog tachometer—a tribute to Porsche's racing heritage. It is flanked by two high-resolution digital displays that provide all essential vehicle data exactly where the driver needs it."
        img="/timeline/1989.png" 
      />

      {/* SEC 02: Sport Seats */}
      <SplitSection 
        title="Ergonomics for the Apex."
        text="The Sport Seats Plus offer exceptional lateral support without compromising daily comfort. Wrapped in premium leather with optional Race-Tex centers, they keep you perfectly planted whether you are navigating a mountain pass or cruising the autobahn."
        img="/timeline/2011.png"
        reverse={true}
      />

      {/* SEC 03: Materials & Craftsmanship */}
      <section className={styles.gallery}>
        <div className={styles.galleryHeader}>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            Uncompromising Craftsmanship.
          </motion.h2>
        </div>
        <div className={styles.galleryGrid}>
          
          <motion.div className={`${styles.galleryItem} ${styles.large}`} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <Image src="/grid/track.png" alt="Materials" fill style={{ objectFit: "cover" }} />
            <div className={styles.galleryOverlay}>
              <h3>Premium Leather & Carbon Fiber</h3>
            </div>
          </motion.div>

          <motion.div className={styles.galleryItem} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <Image src="/timeline/2025.png" alt="Details" fill style={{ objectFit: "cover" }} />
            <div className={styles.galleryOverlay}>
              <h3>Porsche Communication Management</h3>
            </div>
          </motion.div>

          <motion.div className={styles.galleryItem} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
            <Image src="/timeline/1963.png" alt="Burmester" fill style={{ objectFit: "cover" }} />
            <div className={styles.galleryOverlay}>
              <h3>Burmester® High-End Surround Sound</h3>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ENDING */}
      <section className={styles.ending}>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <h2>Designed Around You.</h2>
          <p style={{ fontSize: "1.5rem", color: "var(--accent-silver)" }}>Experience the cockpit firsthand.</p>
        </motion.div>
      </section>
      
    </div>
  );
}
