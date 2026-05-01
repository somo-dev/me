"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { ExternalLink, Github, Sparkles, ArrowRight, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Project = {
  id: number;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  category: "Full Stack" | "Frontend" | "AI";
  role: string;
  year: string;
  technologies: string[];
  highlights: string[];
  featured?: boolean;
  links: { live?: string; github?: string };
};

const projects: Project[] = [
  {
    id: 1,
    title: "Quorum",
    tagline: "Multi-Tenant Investor Deal-Flow SaaS",
    description:
      "NDA-gated deal-flow platform where admins publish deals and investors sign NDAs, access document vaults, and track portfolio KPIs and MOIC.",
    longDescription:
      "A multi-tenant SaaS for private investor deal-flow. Admins curate and publish deals, investors sign NDAs to unlock document vaults, and dashboards surface live portfolio KPIs and MOIC. The architecture solves multi-tenant data isolation, NDA-gated access control, plan-based feature limits, and a RAG-powered knowledge graph — all deployed on AWS EKS via Terraform IaC.",
    image:
      "https://images.pexels.com/photos/7567440/pexels-photo-7567440.jpeg",
    category: "Full Stack",
    role: "Full-Stack Architect",
    year: "2025",
    technologies: [
      "React 19",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "AWS EKS",
      "Terraform",
      "DocuSign",
      "Stripe",
      "Razorpay",
    ],
    highlights: [
      "Role-based dashboards with React 19, TanStack Query & Router, Mantine UI, and Zustand",
      "FastAPI backend with JWT + Google OAuth and refresh-token flows",
      "DocuSign integration for NDA e-signatures with audit trail",
      "Pluggable payment factory (Stripe/Razorpay) with webhook-driven dunning",
      "Event-driven in-app and email notifications",
      "Multi-tenant data isolation, plan-based limits, and RAG knowledge graph via Graphify",
      "Deployed on AWS EKS via Terraform IaC",
    ],
    featured: true,
    links: { github: "https://github.com/somo-dev" },
  },
  {
    id: 2,
    title: "Enterprise B2B Campaign Automation Platform",
    tagline: "AI-Powered Microsite Generator",
    description:
      "Full-stack platform that auto-generates personalised B2B microsites via a guided 5-step wizard with a draggable split-panel preview and inline editor.",
    longDescription:
      "An end-to-end campaign automation platform that turns a 5-step wizard into a personalised B2B microsite. A draggable split-panel preview lets marketers edit 11 dynamic content sections inline while the Claude API rewrites copy with word-level diff visualisation and keyword fallback logic. A personalisation engine computes segment-fit scores and ROI projections, then ships shareable campaign URLs with pre-filled email templates.",
    image:
      "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
    category: "AI",
    role: "Senior Frontend Engineer",
    year: "2025",
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "Mantine v9",
      "Node.js",
      "Express",
      "Claude API",
      "SQL",
    ],
    highlights: [
      "Guided 5-step wizard with draggable split-panel preview and inline editor",
      "Claude API integration for AI-powered content rewrites with word-level diff",
      "Keyword-based fallback logic when LLM output needs guardrails",
      "Personalisation engine computing segment-fit scores and ROI projections",
      "Shareable campaign URLs with pre-filled email templates",
      "Improved Core Web Vitals by 35% via bundle-splitting and lazy loading",
    ],
    featured: true,
    links: { github: "https://github.com/somo-dev" },
  },
  {
    id: 3,
    title: "Resource Allocation Platform",
    tagline: "Legacy → Modern React Modernisation",
    description:
      "Modernised a sprawling Razor Pages codebase into a modular React app with Redux state management across 15+ interconnected modules.",
    longDescription:
      "Took a complex legacy resource-allocation product built on Razor Pages and rebuilt the frontend as modular React. Implemented Redux state management across 15+ interconnected modules, tuned Webpack/Parcel pipelines (minification, tree-shaking) to cut load times by 25%, and reduced redundant styling code by ~60% — all while translating Figma into accessible, mobile-first components.",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    category: "Frontend",
    role: "Software Engineer",
    year: "2023–24",
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "Webpack",
      "Parcel",
      "Razor",
      ".NET",
    ],
    highlights: [
      "Modernised Razor Pages into modular React — cut redundant styling code by ~60%",
      "Redux state management across 15+ interconnected modules",
      "Webpack/Parcel build tuning improved load times by 25%",
      "Translated Figma designs into accessible, mobile-first components",
    ],
    links: {},
  },
  {
    id: 4,
    title: "Enterprise Dashboard Suite",
    tagline: "Data-Heavy Apps at Scale",
    description:
      "30+ screens of reusable React/Next.js/TypeScript components for data-heavy enterprise apps, with virtualised lists and code splitting.",
    longDescription:
      "A suite of data-heavy enterprise applications built on a reusable React/Next.js/TypeScript component library. Applied code splitting and list virtualisation to improve perceived performance by 20% and cut render times by 30%. Owned async API integrations across multiple internal services and kept CI/CD reliable via Azure DevOps.",
    image:
      "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg",
    category: "Frontend",
    role: "Associate Software Engineer",
    year: "2021–23",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Azure DevOps",
      "REST",
    ],
    highlights: [
      "30+ screens with reusable React/Next.js/TypeScript components",
      "Code splitting + virtualised lists improved performance by 20%",
      "Render time reduced by 30%",
      "Async API integrations and CI/CD via Azure DevOps",
    ],
    links: {},
  },
];

// Floating slot positions for the parallax canvas (desktop only).
// Each slot defines where the card lives, how big it is, its rotation,
// and how strongly it parallaxes with the mouse.
type Slot = {
  top: string;
  left?: string;
  right?: string;
  width: string;
  rotate: number;
  depth: number;
  z: number;
};

const slots: Slot[] = [
  // Quorum — top-left, pulled inward
  { top: "10%", left: "10%", width: "22%", rotate: -5, depth: 30, z: 3 },
  // Campaign Platform — top-right, pulled inward
  { top: "12%", right: "10%", width: "22%", rotate: 4, depth: 45, z: 4 },
  // Resource Allocation — bottom-left
  { top: "54%", left: "14%", width: "20%", rotate: 4, depth: 60, z: 2 },
  // Enterprise Dashboard — bottom-right
  { top: "56%", right: "14%", width: "20%", rotate: -4, depth: 75, z: 3 },
];

const FloatingCard = ({
  project,
  slot,
  mouseX,
  mouseY,
  onClick,
}: {
  project: Project;
  slot: Slot;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  onClick: () => void;
}) => {
  const x = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [slot.depth, -slot.depth]),
    { stiffness: 80, damping: 18, mass: 0.6 }
  );
  const y = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [slot.depth, -slot.depth]),
    { stiffness: 80, damping: 18, mass: 0.6 }
  );

  return (
    <motion.button
      onClick={onClick}
      style={{
        x,
        y,
        top: slot.top,
        left: slot.left,
        right: slot.right,
        width: slot.width,
        rotate: slot.rotate,
        zIndex: slot.z,
      }}
      whileHover={{ scale: 1.04, rotate: 0, transition: { duration: 0.3 } }}
      className="group absolute aspect-[5/6] cursor-pointer rounded-2xl overflow-hidden bg-white shadow-2xl ring-1 ring-black/10 text-left"
      aria-label={`Open ${project.title} case study`}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 1024px) 50vw, 30vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

      {project.featured && (
        <div className="absolute top-4 left-4 z-10">
          <Badge className="bg-lime-accent text-gray-900 border-0 font-semibold text-[10px] px-2.5 py-1">
            <Sparkles className="w-3 h-3 mr-1" />
            Featured
          </Badge>
        </div>
      )}

      <div className="absolute top-4 right-4 z-10">
        <Badge className="bg-white/90 backdrop-blur-sm text-gray-700 border-0 font-medium text-[10px] px-2.5 py-1">
          {project.category}
        </Badge>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        <p className="text-lime-accent text-[10px] font-semibold uppercase tracking-wider mb-1.5 drop-shadow-md">
          {project.tagline}
        </p>
        <h3 className="text-lg lg:text-xl font-bold text-white leading-tight drop-shadow-lg mb-3">
          {project.title}
        </h3>
        <span className="inline-flex items-center gap-1 text-xs font-medium text-white/90 group-hover:text-lime-accent transition-colors">
          Read case study
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </motion.button>
  );
};

const StackedCard = ({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="group relative bg-white rounded-2xl overflow-hidden border border-cream-300 hover:border-lime-accent transition-all duration-300 hover:shadow-xl text-left w-full"
  >
    <div className="relative h-48 overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {project.featured && (
        <div className="absolute top-3 left-3">
          <Badge className="bg-lime-accent text-gray-900 border-0 font-semibold text-[10px] px-2 py-0.5">
            <Sparkles className="w-2.5 h-2.5 mr-1" />
            Featured
          </Badge>
        </div>
      )}
      <div className="absolute top-3 right-3">
        <Badge className="bg-white/90 backdrop-blur-sm text-gray-700 border-0 text-[10px] px-2 py-0.5">
          {project.category}
        </Badge>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-lime-accent text-[10px] font-semibold uppercase tracking-wider mb-1 drop-shadow-md">
          {project.tagline}
        </p>
        <h3 className="text-lg font-bold text-white leading-tight drop-shadow-lg">
          {project.title}
        </h3>
      </div>
    </div>
    <div className="p-5">
      <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
        {project.description}
      </p>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 group-hover:text-lime-dark transition-colors">
        Read case study
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </span>
    </div>
  </button>
);

export default function Portfolio() {
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    if (!openProject) return;
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
  }, [openProject]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const node = canvasRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <>
      <section
        id="portfolio"
        className="relative bg-cream-100 overflow-hidden"
      >
        {/* Desktop: floating parallax canvas */}
        <div
          ref={canvasRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative hidden lg:block min-h-[760px] xl:min-h-[820px]"
        >
          {/* Floating cards */}
          {projects.map((project, i) => (
            <FloatingCard
              key={project.id}
              project={project}
              slot={slots[i]}
              mouseX={mouseX}
              mouseY={mouseY}
              onClick={() => setOpenProject(project)}
            />
          ))}

          {/* Centered header — sits above floating cards */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            <div className="max-w-2xl mx-auto px-6 text-center pointer-events-auto">
              <span className="inline-block bg-lime-accent/40 text-gray-700 text-sm font-medium uppercase tracking-wider px-4 py-1.5 rounded-full mb-4 drop-shadow-[0_0_20px_rgba(255,253,240,0.95)]">
                Selected Work
              </span>
              <h2 className="text-4xl xl:text-6xl font-bold text-gray-900 mt-2 mb-6 leading-[1.1] drop-shadow-[0_0_30px_rgba(255,253,240,0.95)]">
                Products I&apos;ve helped
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10">design, build & ship</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-lime-accent/50 -z-0 rounded" />
                </span>
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto text-lg mb-8 drop-shadow-[0_0_20px_rgba(255,253,240,0.9)]">
                From multi-tenant SaaS to AI-powered B2B platforms — hover to
                explore, click any card to read the case study.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white rounded-full px-7 py-3 text-base font-medium transition-colors duration-200 shadow-lg"
              >
                Have a project in mind?
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile / tablet: stacked layout */}
        <div className="lg:hidden py-20 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block bg-lime-accent/40 text-gray-700 text-sm font-medium uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
              Selected Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6 leading-tight">
              Products I&apos;ve helped
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">design, build & ship</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-lime-accent/50 -z-0 rounded" />
              </span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              From multi-tenant SaaS to AI-powered B2B platforms — tap any card
              to read the case study.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {projects.map((project) => (
              <StackedCard
                key={project.id}
                project={project}
                onClick={() => setOpenProject(project)}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-full px-8 py-3 font-medium transition-colors duration-200"
            >
              Have a project in mind? Let&apos;s talk
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {openProject && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/50 backdrop-blur-sm overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpenProject(null);
          }}
        >
          <div className="relative w-full max-w-3xl mx-4 my-8 bg-cream-50 rounded-3xl border border-cream-300 shadow-2xl overflow-hidden">
            {/* Hero Image */}
            <div className="relative h-64 md:h-72">
              <Image
                src={openProject.image}
                alt={openProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <button
                onClick={() => setOpenProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white backdrop-blur-sm flex items-center justify-center transition-colors"
                aria-label="Close case study"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <Badge className="bg-lime-accent text-gray-900 border-0 font-semibold mb-3">
                  {openProject.category}
                </Badge>
                <p className="text-lime-accent text-xs font-semibold uppercase tracking-wider mb-1">
                  {openProject.tagline}
                </p>
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  {openProject.title}
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 md:px-10 py-8">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 mb-6 pb-6 border-b border-cream-300">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-400 mb-0.5">
                    Role
                  </span>
                  <span className="font-medium text-gray-800">
                    {openProject.role}
                  </span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-400 mb-0.5">
                    Year
                  </span>
                  <span className="font-medium text-gray-800">
                    {openProject.year}
                  </span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-400 mb-0.5">
                    Category
                  </span>
                  <span className="font-medium text-gray-800">
                    {openProject.category}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-8">
                {openProject.longDescription}
              </p>

              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                What I built
              </h4>
              <ul className="space-y-3 mb-8">
                {openProject.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-600 text-sm md:text-base"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-accent mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Tech stack
              </h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {openProject.technologies.map((tech, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="border-cream-300 text-gray-600 text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              {(openProject.links.live || openProject.links.github) && (
                <div className="flex flex-wrap gap-3">
                  {openProject.links.live && openProject.links.live !== "#" && (
                    <a
                      href={openProject.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white rounded-full px-6 py-2.5 text-sm font-medium transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live site
                    </a>
                  )}
                  {openProject.links.github &&
                    openProject.links.github !== "#" && (
                      <a
                        href={openProject.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-cream-300 hover:border-gray-400 text-gray-700 rounded-full px-6 py-2.5 text-sm font-medium transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Source
                      </a>
                    )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
