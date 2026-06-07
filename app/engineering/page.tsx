"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import styles from "./engineering.module.css";

export default function EngineeringPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  // Callout 1 (Engine) appears between 20% and 40% scroll
  const callout1Opac = useTransform(scrollYProgress, [0.15, 0.2, 0.35, 0.4], [0, 1, 1, 0]);
  const callout1Y = useTransform(scrollYProgress, [0.15, 0.2], [40, 0]);

  // Callout 2 (Aerodynamics) appears between 40% and 60% scroll
  const callout2Opac = useTransform(scrollYProgress, [0.4, 0.45, 0.6, 0.65], [0, 1, 1, 0]);
  const callout2Y = useTransform(scrollYProgress, [0.4, 0.45], [40, 0]);

  // Callout 3 (Chassis) appears between 65% and 85% scroll
  const callout3Opac = useTransform(scrollYProgress, [0.65, 0.7, 0.85, 0.9], [0, 1, 1, 0]);
  const callout3Y = useTransform(scrollYProgress, [0.65, 0.7], [40, 0]);

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className={styles.container}>
      
      {/* SEC 01: HERO */}
      <section className={styles.hero}>
        <motion.div className={styles.heroBg} style={{ y: heroY, opacity: heroOpacity }}>
          <Image src="/grid/engineering_car.png" alt="Engineering Porsche" fill style={{ objectFit: "cover" }} priority />
          <div className={styles.heroOverlay} />
        </motion.div>
        
        <motion.div 
          className={styles.heroContent}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.5 } }
          }}
        >
          <motion.h1 
            className={styles.heroTitle}
            variants={{
              hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            Every Detail Has A Purpose.
          </motion.h1>
          <motion.div 
            className={styles.heroSubtitle}
            variants={{
              hidden: { opacity: 0, letterSpacing: "0em" },
              visible: { opacity: 1, letterSpacing: "0.4em", transition: { duration: 1.5, ease: "easeOut" } }
            }}
          >
            Form Follows Function
          </motion.div>
          
          {/* Scroll Indicator */}
          <motion.div 
            style={{ width: "1px", height: "100px", background: "rgba(255,255,255,0.2)", margin: "4rem auto 0 auto", position: "relative", overflow: "hidden" }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1.5, duration: 1 } } }}
          >
            <motion.div 
              animate={{ y: [0, 100] }} 
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} 
              style={{ width: "100%", height: "50%", background: "#D5001C", position: "absolute", top: "-50%" }} 
            />
          </motion.div>
        </motion.div>
      </section>

      {/* INTRO TEXT */}
      <section className={styles.introText}>
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          The Porsche 911 is not designed; it is <span className={styles.highlight}>engineered</span>. 
          For over 60 years, every curve, every vent, and every component has been continuously refined 
          by the immutable laws of physics and aerodynamics.
        </motion.p>
      </section>

      {/* SEC 02: STICKY BLUEPRINT CALLOUTS */}
      <section className={styles.blueprintSection}>
        <div className={styles.blueprintSticky}>
          <div className={styles.blueprintImageWrapper}>
            <Image src="/timeline/2011.png" alt="Blueprint" fill style={{ objectFit: "cover", borderRadius: "8px", opacity: 0.5 }} />
            
            {/* Callout 1: Engine */}
            <motion.div className={styles.callout} style={{ top: "10%", left: "5%", opacity: callout1Opac, y: callout1Y }}>
              <h3><span>01</span> Twin-Turbo Flat-Six</h3>
              <p>Positioned directly over the rear axle, the engine lowers the center of gravity and increases traction. The forged aluminum pistons and variable turbine geometry deliver relentless power.</p>
              {/* Connecting line to rear of car */}
              <div className={styles.calloutLine} style={{ top: "50%", right: "-100px", width: "100px", height: "1px" }} />
            </motion.div>

            {/* Callout 2: Aerodynamics */}
            <motion.div className={styles.callout} style={{ top: "40%", right: "5%", opacity: callout2Opac, y: callout2Y }}>
              <h3><span>02</span> Active Aerodynamics</h3>
              <p>The variable rear spoiler and cooling air flaps adapt instantly to driving conditions, maximizing downforce at high speeds and minimizing drag during cruising.</p>
              {/* Connecting line to spoiler */}
              <div className={styles.calloutLine} style={{ top: "50%", left: "-100px", width: "100px", height: "1px" }} />
            </motion.div>

            {/* Callout 3: Chassis */}
            <motion.div className={styles.callout} style={{ bottom: "10%", left: "20%", opacity: callout3Opac, y: callout3Y }}>
              <h3><span>03</span> Lightweight Construction</h3>
              <p>An intelligent mix of aluminum, steel, and carbon fiber reinforced plastic (CFRP) creates a chassis that is incredibly rigid yet astonishingly light, enabling razor-sharp handling.</p>
              {/* Connecting line to body */}
              <div className={styles.calloutLine} style={{ top: "-50px", left: "50%", width: "1px", height: "50px" }} />
            </motion.div>

          </div>
        </div>
      </section>

      {/* SEC 04: QUOTE */}
      <section className={styles.quoteSection}>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}>
          <div className={styles.quoteMark}>"</div>
          <div className={styles.quoteText}>
            We do not build sports cars to win races. We race to build better sports cars.
          </div>
          <div className={styles.quoteAuthor}>Ferry Porsche</div>
        </motion.div>
      </section>

    </div>
  );
}
