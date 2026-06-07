"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Animated Counter Component
const AnimatedCounter = ({ from, to, label, suffix = "" }: { from: number, to: number, label: string, suffix?: string }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let current = from;
      const duration = 2000; // 2 seconds
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
    <div ref={ref} style={{ textAlign: "center", padding: "2rem" }}>
      <div style={{ fontSize: "5rem", fontWeight: 600, color: "#D5001C", fontFamily: "var(--font-outfit)" }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize: "1.2rem", color: "var(--accent-silver)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
        {label}
      </div>
    </div>
  );
};

export default function PerformancePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  return (
    <div ref={containerRef} style={{ backgroundColor: "var(--bg-primary)", minHeight: "300vh", color: "white" }}>
      
      {/* SECTION 01: HERO */}
      <section style={{ height: "100vh", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute", width: "100%", height: "100%", zIndex: 0 }}>
          <Image src="/grid/track.png" alt="Performance" fill style={{ objectFit: "cover", opacity: 0.6 }} priority />
          <div style={{ position: "absolute", width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(5,5,5,0.8) 0%, rgba(5,5,5,0) 50%, var(--bg-primary) 100%)" }} />
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }}
          style={{ position: "relative", zIndex: 1, textAlign: "center" }}
        >
          <h1 style={{ fontSize: "7rem", fontFamily: "var(--font-outfit)", fontWeight: 600, background: "linear-gradient(180deg, #FFF 0%, #AAA 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.8))" }}>
            Born On The Track.
          </h1>
        </motion.div>
      </section>

      {/* SECTION 02: COUNTERS */}
      <section style={{ padding: "10rem 10%", background: "var(--bg-secondary)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
          <AnimatedCounter from={300} to={502} label="Horsepower" suffix=" hp" />
          <AnimatedCounter from={0} to={198} label="Top Speed" suffix=" mph" />
          <AnimatedCounter from={10} to={3} label="0-60 mph" suffix=".2 s" />
          <AnimatedCounter from={200} to={346} label="Torque" suffix=" lb-ft" />
        </div>
      </section>

      {/* SECTION 03: FULLSCREEN PANELS */}
      {[
        { title: "Aerodynamics", img: "/grid/flyline.png", desc: "Active cooling flaps and variable rear spoiler for maximum downforce." },
        { title: "Engine", img: "/grid/engine.png", desc: "The legendary twin-turbo flat-six engine. Immediate response. Endless power." }
      ].map((panel, idx) => (
        <section key={idx} style={{ height: "100vh", display: "flex", flexDirection: idx % 2 === 0 ? "row" : "row-reverse", alignItems: "center" }}>
          <div style={{ flex: 1, position: "relative", height: "100%" }}>
            <Image src={panel.img} alt={panel.title} fill style={{ objectFit: "cover" }} />
          </div>
          <div style={{ flex: 1, padding: "5rem" }}>
            <motion.h2 
              initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              style={{ fontSize: "4rem", marginBottom: "2rem", color: "#FFF" }}
            >
              {panel.title}
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
              style={{ width: "60px", height: "2px", background: "#D5001C", marginBottom: "2rem" }} 
            />
            <motion.p 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 }}
              style={{ fontSize: "1.5rem", color: "var(--accent-silver)", lineHeight: 1.6 }}
            >
              {panel.desc}
            </motion.p>
          </div>
        </section>
      ))}

      {/* SECTION 04: ENDING */}
      <section style={{ height: "100vh", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
        <div style={{ position: "absolute", width: "100%", height: "100%" }}>
          <Image src="/timeline/2025.png" alt="Ending" fill style={{ objectFit: "cover", opacity: 0.4 }} />
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "5rem", marginBottom: "3rem" }}>Performance Without Compromise.</h2>
          <Link href="/engineering" style={{ background: "#D5001C", color: "white", padding: "1.2rem 3rem", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, textDecoration: "none" }}>
            Explore Engineering
          </Link>
        </div>
      </section>

    </div>
  );
}
