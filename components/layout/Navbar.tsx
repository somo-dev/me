"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Command } from "lucide-react";
import { IconMail, IconMailCheck } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

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
      // Find the currently active section
      const sectionIds = navigation.map((item) => item.href.replace('#', ''));
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
          ? "bg-gray-900/80 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Command className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-xl">SP</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-2 border border-gray-700">
              <div className="flex items-center space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={
                      activeSection === item.href
                        ? "px-4 py-1 text-sm backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white rounded-full relative transition-colors duration-200"
                        : "text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                    }
                  >
                    {item.name}
                    {activeSection === item.href && (
                      <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            {/* <Button
              asChild
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full px-6 py-2"
            >
              <Link href="#contact">Book a Call</Link>
            </Button> */}
            <div className="flex items-center gap-2 mt-0">
              <button
                onClick={handleCopyEmail}
                className={`h-9 flex items-center justify-center text-gray-300 hover:text-white transition-colors duration-200 rounded-full border relative ${copied ? "px-4 py-2 text-sm backdrop-blur-sm bg-emerald-300/10 border-emerald-500/20 text-white" : "px-4 py-1.5 text-sm bg-gray-800/20 backdrop-blur-sm border-gray-700 hover:border-gray-600"}`}
                aria-label="Copy email address"
              >
                {copied ? (
                  <IconMailCheck className="w-5 h-5" />
                ) : (
                  <IconMail className="w-5 h-5" />
                )}
                <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
              </button>
              <button className="px-4 py-2 text-sm backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white rounded-full relative">
                <a href="#contact" className="flex items-center space-x-2">
                  Book a Call
                </a>
                <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
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
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={
                    activeSection === item.href
                      ? "block px-4 py-1 text-sm backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white rounded-full relative transition-colors duration-200"
                      : "block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  {activeSection === item.href && (
                    <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                  )}
                </Link>
              ))}
              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className={`flex items-center justify-center text-gray-300 hover:text-white transition-colors duration-200 rounded-full border relative ${copied ? "px-4 py-2 text-sm backdrop-blur-sm bg-emerald-300/10 border-emerald-500/20 text-white" : "px-4 py-1.5 text-sm bg-gray-800/20 backdrop-blur-sm border-gray-700 hover:border-gray-600"}`}
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <IconMailCheck className="w-5 h-5" />
                  ) : (
                    <IconMail className="w-5 h-5" />
                  )}
                  <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                </button>
                <button className="px-4 py-2 text-sm backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white rounded-full relative">
                  <a href="#contact" className="flex items-center space-x-2">
                    Book a Call
                  </a>
                  <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
