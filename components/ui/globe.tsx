"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import createGlobe from "cobe";

export default function Globe({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const phiRef = useRef(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
  }, []);

  const handlePointerUp = useCallback(() => {
    pointerInteracting.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
  }, []);

  const handlePointerOut = useCallback(() => {
    pointerInteracting.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (pointerInteracting.current !== null) {
      const delta = e.clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
    }
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !mounted) return;

    const canvas = canvasRef.current;
    const width = canvas.offsetWidth;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.25,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 20000,
      mapBrightness: 6,
      baseColor: [0.88, 0.93, 0.88],
      markerColor: [0.55, 0.82, 0.33],
      glowColor: [0.92, 0.96, 0.92],
      markers: [
        { location: [22.5726, 88.3639], size: 0.07 },
        { location: [28.6139, 77.209], size: 0.05 },
        { location: [19.076, 72.8777], size: 0.05 },
        { location: [37.7749, -122.4194], size: 0.04 },
        { location: [51.5074, -0.1278], size: 0.04 },
        { location: [35.6762, 139.6503], size: 0.04 },
        { location: [1.3521, 103.8198], size: 0.04 },
        { location: [40.7128, -74.006], size: 0.04 },
        { location: [48.8566, 2.3522], size: 0.03 },
        { location: [-33.8688, 151.2093], size: 0.04 },
        { location: [-22.9068, -43.1729], size: 0.03 },
        { location: [30.0444, 31.2357], size: 0.03 },
      ],
    });

    let animationId: number;
    const animate = () => {
      // Auto-rotate, but slow down when user is interacting
      if (pointerInteracting.current === null) {
        phiRef.current += 0.005;
      }
      globe.update({
        phi: phiRef.current + pointerInteractionMovement.current / 200,
      });
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);

    const handleResize = () => {
      const w = canvas.offsetWidth;
      globe.update({ width: w * 2, height: w * 2 });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      globe.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, [mounted]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerOut={handlePointerOut}
      onPointerMove={handlePointerMove}
      style={{
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        aspectRatio: "1",
        cursor: "grab",
        opacity: mounted ? 1 : 0,
        transition: "opacity 1s ease",
      }}
    />
  );
}
