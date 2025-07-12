"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, Calendar, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText("hello@soumyapal.dev");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-950 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-l from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gray-400 text-sm uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
            FROM CONCEPT TO{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              CREATION
            </span>
            <br />
            LET'S MAKE IT{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              HAPPEN!
            </span>
          </h2>
        </div>

        {/* Availability Status */}
        <div className="flex justify-center mb-12">
          <div className="bg-green-500/10 border border-green-500/20 rounded-full px-6 py-3 flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-400 font-medium">
              I'm available for full-time roles & freelance projects.
            </span>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 text-center group hover:border-gray-600 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-400 mb-4">Drop me a line anytime</p>
            <button
              onClick={handleCopyEmail}
              className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 mx-auto"
            >
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              <span>hello@soumyapal.dev</span>
            </button>
          </div>

          {/* Location */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 text-center group hover:border-gray-600 transition-all duration-300">
            <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
            <p className="text-gray-400 mb-4">Currently based in</p>
            <span className="text-purple-400">India</span>
          </div>

          {/* Schedule */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 text-center group hover:border-gray-600 transition-all duration-300">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Calendar className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Schedule</h3>
            <p className="text-gray-400 mb-4">Let's set up a call</p>
            <Button
              asChild
              className="bg-green-500/10 text-green-400 border border-green-500/20 hover:bg-green-500/20 rounded-full"
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                Book a Call
              </a>
            </Button>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I bring your vision to life through web development, creating
            meaningful experiences that drive results and exceed expectations.
          </p>
          
          <Button
            asChild
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full px-12 py-4 text-lg font-medium group"
          >
            <a href="mailto:hello@soumyapal.dev" className="flex items-center space-x-2">
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </Button>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="currentColor"
            className="text-gray-900"
          />
        </svg>
      </div>
    </section>
  );
}