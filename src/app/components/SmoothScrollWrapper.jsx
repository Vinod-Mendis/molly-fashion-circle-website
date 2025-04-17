/** @format */

// 1. First, install Lenis
// npm install @studio-freight/lenis

// 2. Create a component to handle Lenis initialization
// File: components/SmoothScroll.js
"use client"; // This is important for Next.js client components

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrollWrapper({ children }) {
  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2, // Smooth scroll duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      direction: "vertical", // Vertical scroll
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Create a RAF loop for Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
}
