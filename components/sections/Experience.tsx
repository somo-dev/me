"use client";

import { Badge } from "@/components/ui/badge";
import { AnimatedCard } from "@/components/ui/animated-card";

const experiences = [
  {
    period: "JAN 2024 - PRESENT",
    company: "Roboto Studio",
    role: "Frontend Engineer",
    description: "Architecting modern, client-driven development with expertise in JavaScript, ReactJS, and database management. Leading comprehensive full-stack development with React frontend using Tailwind CSS for sleek design and MongoDB backend supporting 50K+ users and facilitating over 1000 daily transactions.",
    technologies: ["ReactJS", "Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Node.js"],
    type: "Frontend"
  },
  {
    period: "AUG 2023 - PRESENT", 
    company: "GitHub",
    role: "Open Source Contributor",
    description: "Contributing to open-source projects with 5K+ GitHub contributions, tackling complex issues through collaborative development and supporting the global developer community with impactful code contributions.",
    technologies: ["React", "TypeScript", "Node.js", "Git", "JavaScript"],
    type: "Open Source"
  }
];

export default function Experience() {
  return (
    <section id="work" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gray-400 text-sm uppercase tracking-wider">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Experience That<br />
            Brings{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 italic">
              Ideas to Life
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <AnimatedCard
              key={index}
              title={exp.company}
              description={exp.description}
              bodyClassName="bg-gray-800/50 backdrop-blur-sm border-gray-700 h-full flex flex-col"
              titleClassName="text-2xl font-bold text-white"
              descriptionClassName="text-gray-300 leading-relaxed flex-grow"
              className="h-full"
              actions={[
                {
                  label: exp.period,
                  variant: "secondary"
                },
                {
                  label: exp.type,
                  variant: "primary"
                }
              ]}
              actionsClassName="mt-auto"
            >
              <div className="mb-4">
                <p className="text-blue-400 font-medium text-lg mb-4">
                  {exp.role}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}