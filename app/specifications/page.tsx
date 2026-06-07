"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./specifications.module.css";

const SpecBlock = ({ title, value, detail }: { title: string, value: string, detail: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    viewport={{ once: true }} 
    transition={{ duration: 0.8 }}
    className={styles.specBlock}
  >
    <div>
      <h3 className={styles.specTitle}>{title}</h3>
      <div className={styles.specDetail}>{detail}</div>
    </div>
    <div className={styles.specValue}>{value}</div>
  </motion.div>
);

export default function SpecificationsPage() {
  return (
    <div className={styles.container}>
      
      {/* HERO */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Technical Excellence.
        </h1>
        <p className={styles.heroSubtitle}>The numbers behind the legend.</p>
      </section>

      {/* SPECS LIST */}
      <section className={styles.specsList}>
        <div className={styles.imgWrapper}>
           <Image src="/grid/track.png" alt="911 Spec" fill style={{ objectFit: "cover" }} priority />
        </div>

        <SpecBlock title="Engine" detail="Twin-turbocharged boxer 6" value="3.0 Liters" />
        <SpecBlock title="Power" detail="Maximum horsepower at 6,500 rpm" value="379 hp" />
        <SpecBlock title="Acceleration" detail="0 - 60 mph with Sport Chrono Package" value="4.0 s" />
        <SpecBlock title="Top Speed" detail="Track top speed" value="182 mph" />
        <SpecBlock title="Transmission" detail="Porsche Doppelkupplung (PDK)" value="8-Speed" />
        <SpecBlock title="Weight" detail="Curb weight" value="3,354 lbs" />
      </section>

    </div>
  );
}
