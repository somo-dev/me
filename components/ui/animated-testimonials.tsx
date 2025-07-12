"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

type Testimonial = {
  src: string;
  description: string;
};

export const AnimatedTestimonials = ({
  testimonials = [],
  autoplay = false,
}: {
  testimonials?: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, testimonials.length]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  if (!Array.isArray(testimonials) || testimonials.length === 0) {
    return (
      <div className="text-center text-gray-400 py-8">No items available.</div>
    );
  }

  return (
    <div className="mx-auto max-w-md px-4 py-12 font-sans antialiased flex flex-col items-center">
      {/* Image Cards Centered */}
      <div className="relative h-80 w-80 mb-8 flex items-center justify-center">
        <AnimatePresence initial={false}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.src}
              initial={{
                opacity: 0,
                scale: 0.9,
                z: -100,
                rotate: randomRotateY(),
              }}
              animate={{
                opacity: isActive(index) ? 1 : 0.7,
                scale: isActive(index) ? 1 : 0.95,
                z: isActive(index) ? 0 : -100,
                rotate: isActive(index) ? 0 : randomRotateY(),
                zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
                y: isActive(index) ? [0, -40, 0] : 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                z: 100,
                rotate: randomRotateY(),
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="absolute inset-0 origin-bottom"
              style={{ pointerEvents: isActive(index) ? "auto" : "none" }}
            >
              <img
                src={testimonial.src}
                alt={testimonial.description}
                width={600}
                height={600}
                draggable={false}
                className="h-full w-full rounded-3xl object-cover object-center shadow-lg"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {/* Description and Arrows Below */}
      <div className="flex flex-col items-center text-center">
        <motion.p className="text-xl font-bold italic text-gray-500 dark:text-neutral-300 min-h-[60px]">
          {testimonials[active].description}
        </motion.p>
        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="group/button flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/20"
          >
            <IconArrowLeft className="h-5 w-5 text-gray-500 transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="group/button flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/20"
          >
            <IconArrowRight className="h-5 w-5 text-gray-500 transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
