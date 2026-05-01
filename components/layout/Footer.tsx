"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const footerLinks = {
  General: [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "#blog" },
  ],
  Socials: [
    { name: "GitHub", href: "https://github.com/somo-dev", icon: Github },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/soumya-pal/",
      icon: Linkedin,
    },
    { name: "Twitter", href: "https://x.com/somo0088", icon: Twitter },
    { name: "Email", href: "mailto:soumyapal.774@gmail.com", icon: Mail },
  ],
  More: [
    { name: "Resume", href: "#" },
    { name: "Projects", href: "#work" },
    { name: "Skills", href: "#about" },
    { name: "Experience", href: "#work" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-lime-accent rounded-full flex items-center justify-center">
                <span className="text-gray-900 font-bold text-sm">SP</span>
              </div>
              <span className="text-white font-bold text-xl">Soumya Pal</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Full Stack Developer passionate about creating seamless digital
              experiences.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        {...(isExternal && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                        className="text-gray-400 hover:text-lime-accent transition-colors duration-200 text-sm flex items-center space-x-2"
                      >
                        {"icon" in link && link.icon && (
                          <link.icon className="w-4 h-4" />
                        )}
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Soumya Pal. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="https://github.com/somo-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-lime-accent transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/soumya-pal/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-lime-accent transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://x.com/somo0088"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="text-gray-400 hover:text-lime-accent transition-colors duration-200"
            >
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
