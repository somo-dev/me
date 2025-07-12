"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Project Favorite",
    description: "A comprehensive project management tool with real-time collaboration features.",
    image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    featured: true,
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    id: 2,
    title: "Check out my favorite tools and spots around the world",
    description: "Interactive map showcasing favorite tools and locations worldwide.",
    image: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg",
    category: "Frontend",
    technologies: ["React", "Mapbox", "TypeScript"],
    featured: false,
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    id: 3,
    title: "Let me know you were here",
    description: "A guest book application for visitors to leave messages.",
    image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg",
    category: "Full Stack",
    technologies: ["Next.js", "Prisma", "PostgreSQL"],
    featured: false,
    links: {
      live: "#",
      github: "#"
    }
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = ["All", "Full Stack", "Frontend", "Backend"];
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gray-400 text-sm uppercase tracking-wider">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Explore, experiment<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 italic">
              & say hello
            </span>
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-full p-1 border border-gray-700">
            <div className="flex space-x-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 ${
                project.featured ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
                      <Heart className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Project links overlay */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      className="bg-gray-900/80 backdrop-blur-sm hover:bg-gray-800"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm" 
                      className="bg-gray-900/80 backdrop-blur-sm hover:bg-gray-800"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-3">
                  <Badge 
                    variant="outline"
                    className="border-gray-600 text-gray-400 text-xs"
                  >
                    {project.category}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-gray-700/50 text-gray-300 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400 rounded-full px-8 py-3"
          >
            <a href="#contact">View More Projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
}