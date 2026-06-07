"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./about.module.css";
import Image from "next/image";

export default function AboutClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Section 01: Fullscreen Hero
  const heroOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.05], [1, 1.1]);
  const heroY = useTransform(scrollYProgress, [0, 0.05], [0, 100]);

  // Section 02: Legacy
  const legacyOpac = useTransform(scrollYProgress, [0.05, 0.1, 0.2, 0.25], [0, 1, 1, 0]);
  const legacyY = useTransform(scrollYProgress, [0.05, 0.1, 0.2, 0.25], [50, 0, 0, -50]);

  // Section 04: Stack
  const stackOpac = useTransform(scrollYProgress, [0.65, 0.7, 0.85, 0.9], [0, 1, 1, 0]);

  // Section 05: Ending
  const endOpac = useTransform(scrollYProgress, [0.9, 0.95, 1], [0, 1, 1]);

  return (
    <div ref={containerRef} className={styles.container}>
      
      {/* SECTION 01: HERO */}
      <motion.section className={styles.heroSection} style={{ opacity: heroOpacity }}>
        <motion.div className={styles.heroBg} style={{ scale: heroScale }}>
          <Image src="/porsche-about/ezgif-frame-001.jpg" alt="Porsche 911" fill style={{ objectFit: "cover" }} priority />
          <div className={styles.heroOverlay} />
        </motion.div>
        
        <motion.div className={styles.heroContent} style={{ y: heroY }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1>More Than A Sports Car.</h1>
            <p>A legacy engineered over generations.</p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* SEC 02: THE LEGACY */}
      <motion.section className={styles.legacySection} style={{ opacity: legacyOpac, y: legacyY }}>
        <div className={styles.legacyLeft}>
          <h2>A Design That<br/>Defined An Era.</h2>
          <div className={styles.divider} />
          <p>
            The silhouette is unmistakable. The flyline iconic. 
            Since its debut, the Porsche 911 has refused to compromise. 
            It is a design language written in aerodynamics and perfected by physics.
          </p>
        </div>
        <div className={styles.legacyRight}>
          <div className={styles.imageWrapper}>
            <Image src="/porsche-about/ezgif-frame-050.jpg" alt="Legacy" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
      </motion.section>

      {/* SEC 03: TIMELINE */}
      <motion.section className={styles.timelineSection}>
        <div className={styles.timelineContainer}>
          <div className={styles.timelineLine} />
          
          {[
            { year: "1963", img: "/timeline/1963.png", text: "The birth of an icon. The original 911 introduces the rear-engine layout." },
            { year: "1973", img: "/timeline/1973.png", text: "The legendary Carrera RS 2.7 establishes the standard for track-focused dynamics." },
            { year: "1989", img: "/timeline/1989.png", text: "Type 964 brings all-wheel drive and revolutionizes the chassis." },
            { year: "2011", img: "/timeline/2011.png", text: "Type 991 introduces aluminum-steel construction, significantly reducing weight." },
            { year: "2025", img: "/timeline/2025.png", text: "The legacy continues. Engineered for the purist." }
          ].map((item, idx) => (
            <motion.div 
              key={item.year}
              className={styles.timelineItem}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-20%" }}
              transition={{ duration: 0.8 }}
            >
              <div className={styles.yearBlock}>
                <h3>{item.year}</h3>
              </div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineImage}>
                  <Image src={item.img} alt={`Porsche in ${item.year}`} fill style={{ objectFit: "cover" }} />
                </div>
                <p>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SEC 04: ENGINEERING */}
      <motion.section className={styles.engineeringSection} style={{ opacity: stackOpac }}>
        <div className={styles.engHeader}>
          <h2>Performance Through Precision.</h2>
        </div>
        <div className={styles.stackContainer}>
          {[210, 220, 230].map((frame, i) => (
            <motion.div 
              key={frame} 
              className={styles.stackCard}
              style={{
                top: `${i * 10}vh`,
                zIndex: i
              }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-10%" }}
              transition={{ duration: 1 }}
            >
               <Image src={`/porsche-about/ezgif-frame-${frame}.jpg`} alt="Engineering" fill style={{ objectFit: "cover" }} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SEC 05: ENDING */}
      <motion.section className={styles.endSection} style={{ opacity: endOpac }}>
        <div className={styles.endBg}>
           <Image src="/porsche-about/ezgif-frame-240.jpg" alt="Ending" fill style={{ objectFit: "cover" }} />
           <div className={styles.endOverlay} />
        </div>
        <div className={styles.endContent}>
          <h2>There Is No Substitute.</h2>
          <p>The Porsche 911 continues to evolve while remaining unmistakably itself.</p>
        </div>
      </motion.section>

    </div>
  );
}
