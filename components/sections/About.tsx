"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const images = [
  {
    src: "/about/adv_trail.avif",
    description: "I ride",
  },
  {
    src: "/about/camera.avif",
    description: "I click",
  },
  {
    src: "/about/travel.avif",
    description: "I travel",
  },
  {
    src: "/about/gym.jpg",
    description: "I train",
  },
  {
    src: "/about/code.avif",
    description: "I code",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="text-gray-400 text-sm uppercase tracking-wider">
                More about me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              I'm Soumya, a<br />
              creative{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 italic">
                engineer
              </span>
            </h2>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm Soumya Pal, a passionate full-stack developer passionate
                about creating dynamic web experiences. From frontend to
                backend, I build scalable solutions that deliver results and
                efficient code. My expertise spans React, Next.js, Node, .Net
                etc. crafting clean code that users love.
              </p>

              <p>
                When I'm not immersed in work, I'm exploring new ideas and
                staying up-to-date on tech trends. I love embracing challenges
                and delivering innovative solutions.
              </p>

              <p>
                I believe in writing clean code that eager to make a difference
                in tech.
              </p>
            </div>

            <div className="mt-8">
              <Button
                asChild
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full px-8 py-3 text-lg font-medium"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
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
