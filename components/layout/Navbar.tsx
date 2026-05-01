"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { IconMail, IconMailCheck } from "@tabler/icons-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Blog", href: "#blog" },
  { name: "More", href: "#more" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("soumyapal.774@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sectionIds = navigation.map((item) => item.href.replace("#", ""));
      let found = "#home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 80) {
          found = `#${id}`;
        }
      }
      setActiveSection(found);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream-50/80 backdrop-blur-md border-b border-cream-300"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-lime-accent rounded-full flex items-center justify-center shrink-0 overflow-hidden">
              <img
                src={`${basePath}/about/man.png`}
                alt="Soumya Pal"
                className="w-full h-full object-cover"
              />
            </div>
            {!isOpen && (
              <span className="text-gray-900 font-bold text-lg">
                Soumya Pal
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="bg-white/60 backdrop-blur-sm rounded-full px-6 py-2 border border-cream-300">
              <div className="flex items-center space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={
                      activeSection === item.href
                        ? "px-4 py-1 text-sm bg-lime-accent text-gray-900 font-semibold rounded-full transition-colors duration-200"
                        : "text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
                    }
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:block">
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyEmail}
                className={`h-9 flex items-center justify-center transition-colors duration-200 rounded-full border ${
                  copied
                    ? "px-4 py-2 text-sm bg-lime-accent border-lime-dark text-gray-900 font-medium"
                    : "px-4 py-1.5 text-sm bg-white/60 backdrop-blur-sm border-cream-300 text-gray-600 hover:text-gray-900 hover:border-gray-400"
                }`}
                aria-label="Copy email address"
              >
                {copied ? (
                  <IconMailCheck className="w-5 h-5" />
                ) : (
                  <IconMail className="w-5 h-5" />
                )}
              </button>
              <a
                href="#contact"
                className="px-5 py-2 text-sm bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-200"
              >
                Contacts
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-cream-50/95 backdrop-blur-md border-t border-cream-300 rounded-b-2xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={
                    activeSection === item.href
                      ? "block px-4 py-2 text-sm bg-lime-accent text-gray-900 font-semibold rounded-full transition-colors duration-200"
                      : "block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className={`flex items-center justify-center transition-colors duration-200 rounded-full border ${
                    copied
                      ? "px-4 py-2 text-sm bg-lime-accent border-lime-dark text-gray-900"
                      : "px-4 py-1.5 text-sm bg-white/60 border-cream-300 text-gray-600"
                  }`}
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <IconMailCheck className="w-5 h-5" />
                  ) : (
                    <IconMail className="w-5 h-5" />
                  )}
                </button>
                <a
                  href="#contact"
                  className="px-5 py-2 text-sm bg-gray-900 text-white rounded-full font-medium"
                >
                  Contacts
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
