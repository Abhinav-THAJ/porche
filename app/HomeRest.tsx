"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";

export default function HomeRest() {
  return (
    <div className={styles.homeContainer}>
      
      {/* Philosophy Section */}
      <section className={styles.philosophy}>
        <h2>The Shape of Genius.</h2>
        <p>
          For over half a century, the Porsche 911 has been the benchmark for everything that calls itself a sports car. 
          Its silhouette is the physical manifestation of pure driving emotion. A design that refuses to grow old, 
          powered by an engineering philosophy that refuses to compromise.
        </p>
      </section>

      {/* Bento Grid Features */}
      <section className={styles.featuresGrid}>
        
        <div className={`${styles.gridItem} ${styles.itemLarge}`}>
          <Image src="/grid/track.png" alt="Performance" fill style={{ objectFit: 'cover' }} />
          <div className={styles.gridContent}>
            <h3>Track-Tested Dynamics</h3>
            <p>Mastering every apex with precision engineering.</p>
          </div>
        </div>

        <div className={`${styles.gridItem} ${styles.itemSmall}`}>
          <Image src="/grid/flyline.png" alt="Design" fill style={{ objectFit: 'cover' }} />
          <div className={styles.gridContent}>
            <h3>Timeless Flyline</h3>
            <p>An unmistakable silhouette.</p>
          </div>
        </div>

        <div className={`${styles.gridItem} ${styles.itemSmall}`}>
          <Image src="/grid/interior.png" alt="Interior" fill style={{ objectFit: 'cover' }} />
          <div className={styles.gridContent}>
            <h3>Driver Focused</h3>
            <p>A cockpit built around you.</p>
          </div>
        </div>

        <div className={`${styles.gridItem} ${styles.itemLarge}`}>
          <Image src="/grid/engine.png" alt="Engine" fill style={{ objectFit: 'cover' }} />
          <div className={styles.gridContent}>
            <h3>Flat-Six Symphony</h3>
            <p>The beating heart of a legend.</p>
          </div>
        </div>

      </section>

      {/* Final CTA */}
      <section className={styles.homeCta}>
        <div className={styles.ctaBg}>
          <Image src="/grid/cta.png" alt="Build your 911" fill style={{ objectFit: 'cover' }} />
          <div className={styles.ctaOverlay} />
        </div>
        <div className={styles.ctaContent}>
          <h2>Your 911 Awaits.</h2>
          <button className={styles.buildBtn}>Build Your Own</button>
        </div>
      </section>

    </div>
  );
}
