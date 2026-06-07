"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const SpecBlock = ({ title, value, detail }: { title: string, value: string, detail: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    viewport={{ once: true }} 
    transition={{ duration: 0.8 }}
    style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "2rem 0", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}
  >
    <div>
      <h3 style={{ color: "var(--accent-silver)", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>{title}</h3>
      <div style={{ color: "var(--text-body)", fontSize: "0.9rem" }}>{detail}</div>
    </div>
    <div style={{ fontSize: "2rem", fontWeight: 600, color: "#FFF", fontFamily: "var(--font-outfit)" }}>{value}</div>
  </motion.div>
);

export default function SpecificationsPage() {
  return (
    <div style={{ backgroundColor: "var(--bg-primary)", minHeight: "100vh", color: "white" }}>
      
      {/* HERO */}
      <section style={{ padding: "12rem 10% 5rem 10%", textAlign: "center" }}>
        <h1 style={{ fontSize: "5rem", background: "linear-gradient(180deg, #FFFFFF 0%, #A0A0A0 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "2rem" }}>
          Technical Excellence.
        </h1>
        <p style={{ fontSize: "1.5rem", color: "var(--accent-silver)" }}>The numbers behind the legend.</p>
      </section>

      {/* SPECS LIST */}
      <section style={{ padding: "0 20% 10rem 20%" }}>
        <div style={{ marginBottom: "5rem", position: "relative", height: "400px", borderRadius: "4px", overflow: "hidden" }}>
           <Image src="/grid/track.png" alt="911 Spec" fill style={{ objectFit: "cover" }} />
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
