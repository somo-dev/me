"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const images = [
  { src: "/about/adv_trail.avif", description: "I ride" },
  { src: "/about/camera.avif", description: "I click" },
  { src: "/about/travel.avif", description: "I travel" },
  { src: "/about/gym.jpg", description: "I train" },
  { src: "/about/code.avif", description: "I code" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block bg-lime-accent/40 text-gray-700 text-sm font-medium uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
              More about me
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              I&apos;m Soumya, a
              <br />
              creative{" "}
              <span className="relative inline-block">
                <span className="relative z-10">engineer</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-lime-accent/50 -z-0 rounded" />
              </span>
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                I&apos;m Soumya Pal, a passionate full-stack developer passionate
                about creating dynamic web experiences. From frontend to
                backend, I build scalable solutions that deliver results and
                efficient code. My expertise spans React, Next.js, Node, .Net
                etc. crafting clean code that users love.
              </p>
              <p>
                When I&apos;m not immersed in work, I&apos;m exploring new ideas and
                staying up-to-date on tech trends. I love embracing challenges
                and delivering innovative solutions.
              </p>
              <p>
                I believe in writing clean code that&apos;s eager to make a difference
                in tech.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 py-3.5 text-lg font-medium transition-colors duration-200"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <AnimatedTestimonials testimonials={images} />
          </div>
        </div>
      </div>
    </section>
  );
}
