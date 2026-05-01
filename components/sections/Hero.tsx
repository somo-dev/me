"use client";

import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import { FlipWords } from "@/components/ui/flip-words";

const Globe = dynamic(() => import("@/components/ui/globe"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-cream-50"
      style={{ height: "100vh", maxHeight: "900px" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-52 md:pt-60">
        {/* Main Content */}
        <div className="text-center mb-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-5 leading-[1.1] tracking-tight">
            I help founders turn ideas
            <br />
            into{" "}
            <span className="relative inline-flex items-center align-baseline">
              <span className="relative z-10 inline-flex items-center">
                <FlipWords
                  words={["seamless", "scalable", "intuitive", "elegant"]}
                  className="px-0 py-0 text-gray-900"
                />
              </span>
              <span className="absolute inset-0 bg-lime-accent rounded-lg -skew-x-2 scale-105 z-0" />
            </span>{" "}
            digital experiences!
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-3xl mx-auto mb-6 leading-relaxed">
            Senior Software Engineer with 5+ years across fintech, SaaS, and AI
            — shipping production React, Next.js, TypeScript, Node.js, and .NET
            with a serious taste for clean code.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-lime-accent hover:bg-lime-dark text-gray-900 font-semibold rounded-full px-7 py-3 text-base transition-colors duration-200"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Globe - positioned lower, showing only top portion */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[58%] w-[700px] h-[700px] md:w-[800px] md:h-[800px] lg:w-[900px] lg:h-[900px] z-0">
        <Globe className="w-full" />
      </div>
    </section>
  );
}
