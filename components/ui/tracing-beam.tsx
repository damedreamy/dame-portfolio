"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setSvgHeight(entry.contentRect.height);
      }
    });

    observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  const safeHeight = svgHeight || 2000;

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, safeHeight]),
    { stiffness: 500, damping: 90 }
  );

  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, safeHeight - 200]),
    { stiffness: 500, damping: 90 }
  );

  return (
    <motion.div ref={ref} className={cn("relative w-full", className)}>

      {/* BEAM (no dot anymore) */}
      <div className="absolute top-0 left-0">

        <svg
          viewBox={`0 0 20 ${safeHeight}`}
          width="20"
          height={safeHeight}
          className="block"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${safeHeight * 0.8} l -18 24V ${safeHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
          />

          <motion.path
            d={`M 1 0V -36 l 18 24 V ${safeHeight * 0.8} l -18 24V ${safeHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
          />

          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop stopColor="#ff85d0" />
              <stop offset="0.325" stopColor="#5c9afe" />
              <stop offset="1" stopColor="#a135f9" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>

      </div>

      {/* CONTENT */}
      <div ref={contentRef} className="pl-10 md:pl-16">
        {children}
      </div>

    </motion.div>
  );
};