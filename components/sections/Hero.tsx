"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Spotlight } from "../ui/spotlight-new";

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
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900/20" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-purple-900/30 to-transparent" />

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
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* New Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2">
            <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
              New
            </span>
            <span className="text-gray-300 text-sm">NextVentures is live!</span>
            <ArrowRight className="w-4 h-4 text-gray-400" />
          </div>
        </div>
        {/* Main Content */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            <Spotlight />
            I help founders turn{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              ideas
            </span>
            <br />
            into seamless{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 italic font-light">
              digital experiences
            </span>
          </h1>

          {/* Profile Section */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SP</span>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900" />
            </div>
            <p className="text-gray-300 text-lg">
              Hello, I'm{" "}
              <span className="text-white font-semibold">Soumya Pal</span>{" "}
              <span className="text-blue-400">👨‍💻</span> a Full Stack Developer
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            
            <button className=" hover:scale-105 inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <a href="#contact" className="flex items-center space-x-2">
              Let's Connect ->
              </a>
            </button>

            <button
              onClick={handleCopyEmail}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700 hover:border-gray-600"
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

        {/* Scroll Indicator */}
        <div className="absolute left-1/2 transform-translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="currentColor"
            className="text-gray-900"
          />
        </svg>
      </div>
    </section>
  );
}
