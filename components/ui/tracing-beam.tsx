"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
  scrollContainer,
}: {
  children: React.ReactNode;
  className?: string;
  scrollContainer?: React.RefObject<HTMLElement>;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    container: scrollContainer,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const node = contentRef.current;
    if (!node) return;
    const update = () => setSvgHeight(node.offsetHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(node);
    return () => ro.disconnect();
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    { stiffness: 500, damping: 90 }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, Math.max(svgHeight - 200, 50)]),
    { stiffness: 500, damping: 90 }
  );

  return (
    <motion.div
      ref={ref}
      className={cn("relative w-full max-w-4xl mx-auto", className)}
    >
      <div className="absolute left-2 md:left-4 top-3 pointer-events-none">
        <motion.div
          transition={{ duration: 0.2, delay: 0.5 }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          className="h-4 w-4 rounded-full border border-cream-300 shadow-sm flex items-center justify-center bg-white"
        >
          <motion.div
            transition={{ duration: 0.2, delay: 0.5 }}
            animate={{
              backgroundColor:
                scrollYProgress.get() > 0 ? "#ffffff" : "#d4f542",
              borderColor:
                scrollYProgress.get() > 0 ? "#ffffff" : "#a3c52f",
            }}
            className="h-2 w-2 rounded-full border border-lime-dark bg-lime-accent"
          />
        </motion.div>
        {svgHeight > 0 && (
          <svg
            viewBox={`0 0 20 ${svgHeight}`}
            width="20"
            height={svgHeight}
            className="block ml-[7px] -mt-2 overflow-visible"
            aria-hidden="true"
          >
            <motion.path
              d={`M 1 0 V ${svgHeight}`}
              fill="none"
              stroke="#e7e2d3"
              strokeOpacity="0.8"
              strokeWidth="1.5"
            />
            <motion.path
              d={`M 1 0 V ${svgHeight}`}
              fill="none"
              stroke="url(#tracing-beam-gradient)"
              strokeWidth="1.75"
            />
            <defs>
              <motion.linearGradient
                id="tracing-beam-gradient"
                gradientUnits="userSpaceOnUse"
                x1="0"
                x2="0"
                y1={y1}
                y2={y2}
              >
                <stop stopColor="#d4f542" stopOpacity="0" />
                <stop offset="0.1" stopColor="#d4f542" />
                <stop offset="0.5" stopColor="#a3c52f" />
                <stop offset="1" stopColor="#7ea026" stopOpacity="0" />
              </motion.linearGradient>
            </defs>
          </svg>
        )}
      </div>
      <div ref={contentRef} className="pl-12 md:pl-16">
        {children}
      </div>
    </motion.div>
  );
};
