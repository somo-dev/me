"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

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
                efficient code. My expertise spans React, Next.js, and Node.js,
                crafting clean code that users love.
              </p>
              
              <p>
                When I'm not immersed in work, I'm exploring new ideas and
                staying up-to-date on tech trends. I love embracing
                challenges and delivering innovative solutions.
              </p>
              
              <p>
                I believe in writing clean code that eager to make a difference
                in tech.
              </p>
            </div>

            <div className="mt-8">
              <Button
                asChild
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full px-8 py-3"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 z-10" />
              <Image
                src="https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg"
                alt="Soumya Pal"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute bottom-4 right-4 bg-gray-900/90 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-700">
              <span className="text-white font-medium">I Travel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}