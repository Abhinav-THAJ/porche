"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import styles from "./ScrollyTelling.module.css";

const FRAME_COUNT = 240;

const currentFrame = (index: number) => 
  `/frames/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`;

export default function ScrollyTelling() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Draw frame on canvas when scroll changes
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return;
    
    // Calculate the frame index
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.floor(latest * FRAME_COUNT)
    );
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const img = images[frameIndex];
    if (img && img.complete) {
      // Draw image to fill canvas (cover)
      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;
      
      let drawWidth = canvas.width;
      let drawHeight = canvas.height;
      let offsetX = 0;
      let offsetY = 0;

      if (imgRatio > canvasRatio) {
        drawWidth = canvas.height * imgRatio;
        offsetX = (canvas.width - drawWidth) / 2;
      } else {
        drawHeight = canvas.width / imgRatio;
        offsetY = (canvas.height - drawHeight) / 2;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }
  });

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Redraw current frame
        if (images.length > 0) {
          const currentProgress = scrollYProgress.get();
          const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(currentProgress * FRAME_COUNT));
          const img = images[frameIndex];
          if (img && img.complete) {
             const ctx = canvas.getContext("2d");
             if (ctx) {
                const canvasRatio = canvas.width / canvas.height;
                const imgRatio = img.width / img.height;
                let drawWidth = canvas.width;
                let drawHeight = canvas.height;
                let offsetX = 0;
                let offsetY = 0;
          
                if (imgRatio > canvasRatio) {
                  drawWidth = canvas.height * imgRatio;
                  offsetX = (canvas.width - drawWidth) / 2;
                } else {
                  drawHeight = canvas.width / imgRatio;
                  offsetY = (canvas.height - drawHeight) / 2;
                }
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.imageSmoothingEnabled = true;
                ctx.imageSmoothingQuality = "high";
                ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
             }
          }
        }
      }
    };
    
    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize
    
    return () => window.removeEventListener("resize", handleResize);
  }, [images, imagesLoaded, scrollYProgress]);

  // Typography opacities
  const opac1 = useTransform(scrollYProgress, [0, 0.05, 0.12, 0.15], [0, 1, 1, 0]);
  const opac2 = useTransform(scrollYProgress, [0.15, 0.20, 0.35, 0.40], [0, 1, 1, 0]);
  const opac3 = useTransform(scrollYProgress, [0.40, 0.45, 0.60, 0.65], [0, 1, 1, 0]);
  const opac4 = useTransform(scrollYProgress, [0.65, 0.70, 0.80, 0.85], [0, 1, 1, 0]);
  const opac5 = useTransform(scrollYProgress, [0.85, 0.90, 1, 1], [0, 1, 1, 1]);

  // Parallax subtle motion for text
  const y1 = useTransform(scrollYProgress, [0, 0.15], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0.15, 0.40], [80, -80]);
  const y3 = useTransform(scrollYProgress, [0.40, 0.65], [80, -80]);
  const y4 = useTransform(scrollYProgress, [0.65, 0.85], [80, -80]);
  const y5 = useTransform(scrollYProgress, [0.85, 1], [80, 0]);

  // Subtle scale in
  const scale1 = useTransform(scrollYProgress, [0, 0.15], [0.95, 1.05]);
  const scale2 = useTransform(scrollYProgress, [0.15, 0.40], [0.95, 1.05]);
  const scale3 = useTransform(scrollYProgress, [0.40, 0.65], [0.95, 1.05]);
  const scale4 = useTransform(scrollYProgress, [0.65, 0.85], [0.95, 1.05]);
  const scale5 = useTransform(scrollYProgress, [0.85, 1], [0.95, 1]);

  return (
    <div ref={containerRef} className={styles.scrollContainer}>
      {imagesLoaded < FRAME_COUNT && (
        <div className={styles.loader}>
          <div className={styles.loaderText}>Loading Experience {Math.round((imagesLoaded / FRAME_COUNT) * 100)}%</div>
        </div>
      )}
      
      <div className={styles.stickyContainer}>
        <canvas ref={canvasRef} className={styles.canvas} />
        
        {/* Spotlights and overlays */}
        <div className="spotlight" />
        <div className={styles.vignette} />
        
        {/* Typographic Storytelling Overlays */}
        
        {/* 0-15% */}
        <motion.div className={styles.textOverlay} style={{ opacity: opac1, y: y1, scale: scale1 }}>
          <div className={styles.chapterMarker}>[ 01 ] &mdash; THE ICON</div>
          <h1>There Is No Substitute.</h1>
          <div className={styles.divider} />
          <p>Timeless design. Precision engineering.<br/>Pure driving emotion.</p>
        </motion.div>

        {/* 15-40% */}
        <motion.div className={styles.textOverlayRight} style={{ opacity: opac2, y: y2, scale: scale2 }}>
          <div className={styles.chapterMarker}>[ 02 ] &mdash; THE DYNAMIC</div>
          <h1>Engineering Without Compromise.</h1>
          <div className={styles.divider} />
          <p>Every component serves a purpose. Lightweight construction.<br/>Aerodynamic precision. Performance perfected through decades of innovation.</p>
        </motion.div>

        {/* 40-65% */}
        <motion.div className={styles.textOverlayLeft} style={{ opacity: opac3, y: y3, scale: scale3 }}>
          <div className={styles.chapterMarker}>[ 03 ] &mdash; THE POWER</div>
          <h1>Built Around Performance.</h1>
          <div className={styles.divider} />
          <p>Twin-turbo power. Precision chassis dynamics.<br/>Track-inspired engineering. Confidence at every speed.</p>
        </motion.div>

        {/* 65-85% */}
        <motion.div className={styles.textOverlay} style={{ opacity: opac4, y: y4, scale: scale4 }}>
          <div className={styles.chapterMarker}>[ 04 ] &mdash; THE CRAFT</div>
          <h1>Performance In Every Detail.</h1>
          <div className={styles.divider} />
          <p>Engineered for balance. Designed for speed.<br/>Built for generations of enthusiasts. Every part contributes to the driving experience.</p>
        </motion.div>

        {/* 85-100% */}
        <motion.div className={styles.textOverlayCenter} style={{ opacity: opac5, y: y5, scale: scale5 }}>
          <div className={styles.chapterMarker}>[ 05 ] &mdash; THE FUTURE</div>
          <h1>The Legend Continues.</h1>
          <h2>Porsche 911. Engineered For Those Who Drive.</h2>
          <div className={styles.ctaGroup}>
            <button className={styles.primaryBtn}>Explore Porsche 911</button>
            <button className={styles.secondaryBtn}>View Specifications</button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
