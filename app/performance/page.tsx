"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./performance.module.css";

// Animated Counter Component
const AnimatedCounter = ({ from, to, label, suffix = "" }: { from: number, to: number, label: string, suffix?: string }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let current = from;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / (to - from)));
      
      const timer = setInterval(() => {
        current += 1;
        setCount(current);
        if (current === to) clearInterval(timer);
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, from, to]);

  return (
    <div ref={ref} style={{ textAlign: "center", padding: "1rem" }}>
      <div className={styles.counterNum}>
        {count}{suffix}
      </div>
      <div className={styles.counterLabel}>
        {label}
      </div>
    </div>
  );
};

export default function PerformancePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  return (
    <div ref={containerRef} className={styles.container}>
      
      {/* SECTION 01: HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image src="/grid/track.png" alt="Performance" fill style={{ objectFit: "cover", opacity: 0.6 }} priority />
          <div style={{ position: "absolute", width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(5,5,5,0.8) 0%, rgba(5,5,5,0) 50%, var(--bg-primary) 100%)" }} />
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }}
          className={styles.heroContent}
        >
          <h1 className={styles.heroTitle}>
            Born On The Track.
          </h1>
        </motion.div>
      </section>

      {/* SECTION 02: COUNTERS */}
      <section className={styles.counters}>
        <AnimatedCounter from={300} to={502} label="Horsepower" suffix=" hp" />
        <AnimatedCounter from={0} to={198} label="Top Speed" suffix=" mph" />
        <AnimatedCounter from={10} to={3} label="0-60 mph" suffix=".2 s" />
        <AnimatedCounter from={200} to={346} label="Torque" suffix=" lb-ft" />
      </section>

      {/* SECTION 03: FULLSCREEN PANELS */}
      {[
        { title: "Aerodynamics", img: "/grid/flyline.png", desc: "Active cooling flaps and variable rear spoiler for maximum downforce." },
        { title: "Engine", img: "/grid/engine.png", desc: "The legendary twin-turbo flat-six engine. Immediate response. Endless power." }
      ].map((panel, idx) => (
        <section key={idx} className={`${styles.panel} ${idx % 2 !== 0 ? styles.reverse : ''}`}>
          <div className={styles.panelImg}>
            <Image src={panel.img} alt={panel.title} fill style={{ objectFit: "cover" }} />
          </div>
          <div className={styles.panelContent}>
            <motion.h2 
              initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className={styles.panelTitle}
            >
              {panel.title}
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
              style={{ width: "60px", height: "2px", background: "#D5001C", marginBottom: "2rem" }} 
            />
            <motion.p 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 }}
              className={styles.panelDesc}
            >
              {panel.desc}
            </motion.p>
          </div>
        </section>
      ))}

      {/* SECTION 04: ENDING */}
      <section className={styles.ending}>
        <div style={{ position: "absolute", width: "100%", height: "100%" }}>
          <Image src="/timeline/2025.png" alt="Ending" fill style={{ objectFit: "cover", opacity: 0.4 }} />
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 className={styles.endingTitle}>Performance Without Compromise.</h2>
          <Link href="/engineering" className={styles.ctaBtn}>
            Explore Engineering
          </Link>
        </div>
      </section>

    </div>
  );
}
