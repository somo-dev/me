"use client";

import { useState } from "react";
import {
  ArrowRight,
  Mail,
  MapPin,
  Calendar,
  Copy,
  Check,
} from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText("soumyapal.774@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-cream-100 relative overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-lime-accent/40 text-gray-700 text-sm font-medium uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mt-2 mb-6 leading-tight">
            FROM CONCEPT TO{" "}
            <span className="relative inline-block">
              <span className="relative z-10">CREATION</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-lime-accent/50 -z-0 rounded" />
            </span>
            <br />
            LET&apos;S MAKE IT{" "}
            <span className="relative inline-block">
              <span className="relative z-10">HAPPEN!</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-lime-accent/50 -z-0 rounded" />
            </span>
          </h2>
        </div>

        {/* Availability Status */}
        <div className="flex justify-center mb-12">
          <div className="bg-green-50 border border-green-200 rounded-full px-6 py-3 flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-700 font-medium">
              I&apos;m available for full-time roles & freelance projects.
            </span>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <div className="bg-white rounded-2xl p-8 border border-cream-300 text-center group hover:border-lime-accent transition-all duration-300 hover:shadow-lg">
            <div className="w-16 h-16 bg-lime-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-lime-accent transition-colors duration-300">
              <Mail className="w-8 h-8 text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-500 mb-4">Drop me a line anytime</p>
            <button
              onClick={handleCopyEmail}
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-200 mx-auto"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              <span className="font-medium">soumyapal.774@gmail.com</span>
            </button>
          </div>

          {/* Location */}
          <div className="bg-white rounded-2xl p-8 border border-cream-300 text-center group hover:border-lime-accent transition-all duration-300 hover:shadow-lg">
            <div className="w-16 h-16 bg-lime-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-lime-accent transition-colors duration-300">
              <MapPin className="w-8 h-8 text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Location
            </h3>
            <p className="text-gray-500 mb-4">Currently based in</p>
            <span className="text-gray-900 font-medium">India</span>
          </div>

          {/* Schedule */}
          <div className="bg-white rounded-2xl p-8 border border-cream-300 text-center group hover:border-lime-accent transition-all duration-300 hover:shadow-lg">
            <div className="w-16 h-16 bg-lime-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-lime-accent transition-colors duration-300">
              <Calendar className="w-8 h-8 text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Schedule
            </h3>
            <p className="text-gray-500 mb-4">Let&apos;s set up a call</p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-lime-accent/30 hover:bg-lime-accent text-gray-900 border border-lime-dark/20 rounded-full px-5 py-2 font-medium transition-colors duration-200"
            >
              Book a Call
            </a>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto text-lg">
            I bring your vision to life through web development, creating
            meaningful experiences that drive results and exceed expectations.
          </p>

          <a
            href="mailto:soumyapal.774@gmail.com"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white rounded-full px-12 py-4 text-lg font-medium group transition-colors duration-200"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
}
