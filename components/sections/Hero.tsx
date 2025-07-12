"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Spotlight } from "../ui/spotlight-new";
import { SparklesCore } from "../ui/sparkles";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [stars, setStars] = useState<
    Array<{
      id: number;
      left: number;
      top: number;
      delay: number;
      duration: number;
    }>
  >([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Generate stars only on client side
    const generatedStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2,
    }));
    setStars(generatedStars);
  }, []);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText("hello@soumyapal.dev");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gray-900"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black" />

      {/* Animated stars */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                animationDelay: `${star.delay}s`,
                animationDuration: `${star.duration}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        {/* Main Content */}
        <div className="text-center h-[40rem] w-full flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            <Spotlight />I help founders turn{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              ideas
            </span>
            <br />
            into seamless{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 italic font-light">
              digital experiences
            </span>
          </h1>
          <div className="w-full max-w-5xl h-40 relative bg-black rounded-md overflow-hidden mx-auto">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
            <SparklesCore
              background="black"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(850px_200px_at_top,transparent_20%,white)]"></div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-2 -mt-24">
            <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 bg-gray-800/20 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700 hover:border-gray-600">
              <a href="#contact" className="flex items-center space-x-2">
                Let&apos;s Connect -{">"}
              </a>
            </button>

            <button
              onClick={handleCopyEmail}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 bg-gray-800/20 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700 hover:border-gray-600"
            >
              {copied ? (
                <Check className="w-5 h-5 text-green-400" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
              <span>soumyapal.774@gmail.com</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[60px]">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
