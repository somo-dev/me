"use client";

import Image from "next/image";
import {
  BookOpen,
  ThumbsUp,
  ExternalLink,
  Clock,
  Calendar,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const articles = [
  {
    id: 1,
    title: "When and Why Do We Use Global Installations",
    description:
      "Understanding when and why Node.js-based tools and frameworks are designed to work from the command line with global installations.",
    image:
      "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg",
    date: "Dec 7, 2024",
    readTime: "5 min read",
    tags: ["Node.js", "CLI", "DevTools"],
    url: "https://medium.com/@soumyapal.774/when-and-why-do-we-even-have-to-use-global-installations-f27e20733c38",
    featured: true,
  },
  {
    id: 2,
    title: "Object vs Record<any, any> in TypeScript/JavaScript",
    description:
      "A clear breakdown of the differences between Object and Record types in TypeScript — when to use each and why it matters for type safety.",
    image:
      "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg",
    date: "Nov 10, 2024",
    readTime: "4 min read",
    tags: ["TypeScript", "JavaScript"],
    url: "https://medium.com/@soumyapal.774/object-vs-record-any-any-in-typescript-javascript-c2c78b73ff6a",
    featured: false,
  },
  {
    id: 3,
    title: "Everything You Need to Know About State in React.js",
    description:
      "State is a built-in feature that allows components to manage and update their own data. A complete guide to understanding React state.",
    image:
      "https://images.pexels.com/photos/11035482/pexels-photo-11035482.jpeg",
    date: "May 15, 2024",
    readTime: "6 min read",
    tags: ["React", "JavaScript", "State"],
    url: "https://medium.com/@soumyapal.774/everything-you-need-to-know-about-state-in-react-js-b01bf594ffce",
    featured: false,
  },
  {
    id: 4,
    title: "CSS Display Properties",
    description:
      "The display property specifies the display behavior of an element. A visual guide to mastering CSS display values and layout techniques.",
    image:
      "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg",
    date: "May 21, 2024",
    readTime: "4 min read",
    tags: ["CSS", "Frontend", "Layout"],
    url: "https://medium.com/@soumyapal.774/css-display-properties-543f78d59949",
    featured: false,
  },
];

export default function Articles() {
  return (
    <section id="blog" className="py-24 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-lime-accent/40 text-gray-700 text-sm font-medium uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            My Articles
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6 leading-tight">
            Thoughts & insights on
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">Web Dev & Engineering</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-lime-accent/50 -z-0 rounded" />
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            I write about TypeScript, React, CSS, and modern web development —
            breaking down complex topics into practical insights.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              className={`group relative bg-white rounded-2xl overflow-hidden border border-cream-300 hover:border-lime-accent transition-all duration-300 hover:shadow-lg flex flex-col ${
                article.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Thumbnail */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                {article.featured && (
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-lime-accent text-gray-900 border-0 font-semibold text-[10px] px-2 py-0.5">
                      <BookOpen className="w-2.5 h-2.5 mr-1" />
                      Latest
                    </Badge>
                  </div>
                )}

                <div className="absolute top-3 right-3">
                  <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm text-gray-700 text-[10px] px-2 py-1 rounded-full">
                    <Clock className="w-2.5 h-2.5" />
                    {article.readTime}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-2">
                  <Calendar className="w-3 h-3" />
                  {article.date}
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-all duration-300 leading-snug line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
                  {article.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {article.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-cream-200 text-gray-600 text-[10px] px-2 py-0 border-0 hover:bg-lime-accent/30 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 mt-auto">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-900 hover:bg-gray-800 text-white rounded-full text-xs font-medium h-8 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Read Article
                  </a>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-cream-300 text-gray-500 hover:border-lime-accent hover:text-gray-700 hover:bg-lime-accent/10 rounded-full text-xs font-medium h-8 px-3 flex items-center gap-1.5 transition-colors"
                  >
                    <ThumbsUp className="w-3 h-3" />
                    Applaud
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View More on Medium */}
        <div className="text-center mt-14">
          <a
            href="https://medium.com/@soumyapal.774"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-full px-8 py-3 font-medium transition-colors duration-200"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
            </svg>
            View All on Medium
          </a>
        </div>
      </div>
    </section>
  );
}
