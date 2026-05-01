"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Briefcase, Calendar, X, ArrowRight, MapPin } from "lucide-react";

const experiences = [
  {
    period: "JUN 2023 — PRESENT",
    company: "Acies Global",
    location: "Bengaluru, India",
    role: "Senior Software Engineer",
    types: ["Software", "Architecture", "AI"],
    description:
      "Promoted to Senior in Jan 2025 after leading the modernisation of legacy Razor Pages into a modular React platform. Now driving frontend architecture for an AI-powered B2B campaign platform — owning direction from design to production, integrating Claude API, mentoring engineers, and setting the bar for performance and accessibility.",
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "Mantine v9",
      "Claude API",
      "Node.js",
      "Express",
      "Redux",
      "Webpack",
      "GitLab CI/CD",
    ],
    highlights: [
      "Owned end-to-end frontend architecture for an AI-powered B2B campaign platform — design to production",
      "Integrated Claude API for LLM-driven section rewrites with word-level diff and keyword fallback logic",
      "Built a real-time draggable split-panel microsite preview with inline editor across 11 dynamic sections",
      "Established team-wide frontend standards (component patterns, testing, GitLab CI/CD) — cut review turnaround by 40%",
      "Improved Core Web Vitals by 35% via bundle-splitting, lazy loading, and memoisation; championed WCAG 2.1 AA",
      "Modernised legacy Razor Pages into modular React — reduced redundant styling code by ~60%",
      "Implemented Redux state management across 15+ interconnected modules in a complex resource-allocation product",
      "Tuned Webpack/Parcel pipelines (minification, tree-shaking) — improved load times by 25%",
    ],
  },
  {
    period: "OCT 2021 — MAY 2023",
    company: "TechDimension IT Solutions",
    location: "Hyderabad, India",
    role: "Associate Software Engineer",
    types: ["Software", "UI"],
    description:
      "Built data-heavy enterprise applications with reusable React/Next.js/TypeScript components. Focused on render performance, async API integrations, and CI/CD pipelines via Azure DevOps.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Azure DevOps",
      "REST",
    ],
    highlights: [
      "Built 30+ screens with reusable React/Next.js/TypeScript components for data-heavy enterprise apps",
      "Applied code splitting and virtualised lists — improved performance by 20%, reduced render times by 30%",
      "Managed async API integrations across multiple internal services",
      "Maintained CI/CD pipelines via Azure DevOps, keeping deploys reliable across environments",
    ],
  },
  {
    period: "APR 2021 — SEP 2021",
    company: "SabGrowth",
    location: "Dehradun, India",
    role: "UI/UX Developer",
    types: ["UI", "UX"],
    description:
      "Designed and developed responsive screens, blending UX research with hands-on React work. Bridged design and engineering — from Figma/Adobe XD mockups to production-ready components.",
    technologies: ["React", "Figma", "Adobe XD", "HTML/CSS", "User Research"],
    highlights: [
      "Designed and developed 20+ responsive screens using React, Figma, and Adobe XD",
      "Conducted user research and UX case studies to inform product decisions",
      "Worked end-to-end from low-fidelity wireframes to shipping accessible UI",
    ],
  },
];

export default function Experience() {
  const [modalOpen, setModalOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!modalOpen) return;
    const { body } = document;
    const scrollbarWidth = window.innerWidth - body.clientWidth;
    const prevOverflow = body.style.overflow;
    const prevPaddingRight = body.style.paddingRight;
    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }
    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPaddingRight;
    };
  }, [modalOpen]);

  return (
    <>
      <section id="work" className="py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-lime-accent/40 text-gray-700 text-sm font-medium uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
              My Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6 leading-tight">
              5+ years turning
              <br />
              ideas into{" "}
              <span className="relative inline-block">
                <span className="relative z-10">production code</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-lime-accent/50 -z-0 rounded" />
              </span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              From UI/UX beginnings to leading frontend architecture for an
              AI-powered B2B platform — here&apos;s the path so far.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-cream-300 hover:border-lime-accent transition-all duration-300 hover:shadow-lg group cursor-pointer"
                onClick={() => setModalOpen(true)}
              >
                <div className="flex items-start justify-between mb-4 gap-3">
                  <div className="w-12 h-12 bg-lime-accent/30 rounded-xl flex items-center justify-center group-hover:bg-lime-accent transition-colors duration-300 shrink-0">
                    <Briefcase className="w-6 h-6 text-gray-700" />
                  </div>
                  <div className="flex flex-wrap justify-end gap-1.5">
                    {exp.types.map((t) => (
                      <Badge
                        key={t}
                        className="bg-cream-200 text-gray-600 border-0 font-medium text-xs"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {exp.company}
                </h3>
                <p className="text-lime-dark font-semibold text-lg mb-3">
                  {exp.role}
                </p>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-500 text-sm mb-4">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.technologies.slice(0, 4).map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="border-cream-300 text-gray-600 hover:border-lime-accent hover:bg-lime-accent/10 transition-colors duration-200 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {exp.technologies.length > 4 && (
                    <Badge
                      variant="outline"
                      className="border-cream-300 text-gray-400 text-xs"
                    >
                      +{exp.technologies.length - 4} more
                    </Badge>
                  )}
                </div>

                <div className="flex items-center gap-1 text-sm font-medium text-gray-500 group-hover:text-gray-900 transition-colors">
                  View full timeline
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 bg-lime-accent hover:bg-lime-dark text-gray-900 font-semibold rounded-full px-8 py-3 transition-colors duration-200"
            >
              Embark on My Career Odyssey
            </button>
          </div>
        </div>
      </section>

      {/* Timeline Modal — TracingBeam */}
      {modalOpen && (
        <div
          ref={scrollRef}
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/40 backdrop-blur-sm overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
        >
          <div className="relative w-full max-w-4xl mx-4 my-8 bg-cream-50 rounded-3xl border border-cream-300 shadow-2xl overflow-hidden">
            <div className="sticky top-0 z-10 bg-cream-50/90 backdrop-blur-sm border-b border-cream-300 px-8 py-5 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  My Career Timeline
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  A detailed look at my professional journey
                </p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="w-10 h-10 rounded-full bg-cream-200 hover:bg-cream-300 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="px-4 md:px-8 py-10">
              <TracingBeam scrollContainer={scrollRef}>
                <div className="antialiased pt-4 relative">
                  {experiences.map((exp, index) => (
                    <div key={`exp-${index}`} className="mb-14 last:mb-4">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="bg-gray-900 text-white rounded-full text-xs font-medium px-3 py-1">
                          {exp.period}
                        </span>
                        {exp.types.map((t) => (
                          <span
                            key={t}
                            className="bg-lime-accent text-gray-900 rounded-full text-xs font-semibold px-3 py-1"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 leading-tight">
                        {exp.company}
                      </h4>
                      <p className="text-lime-dark font-semibold text-base mb-3">
                        {exp.role}
                      </p>

                      <div className="inline-flex items-center gap-1.5 text-gray-500 text-xs mb-5">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </div>

                      <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-5">
                        {exp.description}
                      </p>

                      <ul className="space-y-2.5 mb-5">
                        {exp.highlights.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-gray-600 text-sm"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-lime-accent mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="border-cream-300 text-gray-600 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TracingBeam>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
