import React from "react";
import AdsterraAd from "./AdsterraAd";

const Hero = () => (
  <header className="text-center py-20 px-4">
    <div className="mt-8">
      <AdsterraAd className="mx-auto" />
    </div>
    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
      Stop Guessing, <span className="text-blue-600">Start Building.</span>
    </h1>
    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
      The complete AI-powered starter kit for entrepreneurs. Get prompts,
      templates, and guides to launch your idea in days, not months.
    </p>
    <a
      href="#pricing"
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
    >
      Get Instant Access for $59
    </a>
    <p className="mt-4 text-sm text-gray-500">30-Day Money-Back Guarantee</p>
    <p className="mt-8 animate-bounce">
      <a href="#social-proof" className="text-blue-500 underline">
        See what's inside ↓
      </a>
    </p>
  </header>
);

export default Hero;
