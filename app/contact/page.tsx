"use client";

import { motion } from "framer-motion";
import styles from "./contact.module.css";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className={styles.container}>
      {/* HERO */}
      <section className={styles.heroSection}>
        <div className={styles.bgWrapper}>
          <Image src="/frames/ezgif-frame-200.jpg" alt="Porsche Contact" fill style={{ objectFit: "cover" }} />
          <div className={styles.overlay} />
        </div>
        
        <div className={styles.glassPanel}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Begin Your Porsche Journey.</h1>
            <p>Connect with our specialists.</p>
          </motion.div>

          <form className={styles.premiumForm}>
            <div className={styles.inputGroup}>
              <input type="text" id="name" required />
              <label htmlFor="name">Name</label>
            </div>
            <div className={styles.inputGroup}>
              <input type="email" id="email" required />
              <label htmlFor="email">Email</label>
            </div>
            <div className={styles.inputGroup}>
              <select id="model" required defaultValue="">
                <option value="" disabled>Select Model Interest</option>
                <option value="911carrera">911 Carrera</option>
                <option value="911turbo">911 Turbo S</option>
                <option value="911gt3">911 GT3 RS</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <textarea id="message" required rows={4}></textarea>
              <label htmlFor="message">Message</label>
            </div>
            <button className={styles.submitBtn}>Submit Inquiry</button>
          </form>
        </div>
      </section>
      
      {/* DEALERSHIP EXPERIENCE */}
      <section className={styles.dealerSection}>
        <h2>Porsche Exclusive Manufaktur</h2>
        <div className={styles.cards}>
          {[
            { title: "Locations", desc: "Find your nearest Porsche Center." },
            { title: "Experience Centers", desc: "Push the limits on our tracks." },
            { title: "Consultation", desc: "Personalize your 911." }
          ].map((card, i) => (
            <motion.div 
              key={i}
              className={styles.dealerCard}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <h2>The Legend Awaits.</h2>
        <div className={styles.ctaBtns}>
          <button className={styles.primaryBtn}>Explore Porsche 911</button>
          <button className={styles.secondaryBtn}>Book Consultation</button>
        </div>
      </section>
    </div>
  );
}
