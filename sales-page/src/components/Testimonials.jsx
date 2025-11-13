// src/components/Testimonials.js
import React from "react";

const Testimonials = () => (
  <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Don't Just Take Our Word For It
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <blockquote className="p-6 bg-gray-50 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4 italic">
            "This kit saved me 20 hours of work in my first week. The prompts
            alone are worth 10x the price."
          </p>
          <cite className="font-semibold">- Sarah K., Solopreneur</cite>
        </blockquote>
        <blockquote className="p-6 bg-gray-50 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4 italic">
            "Finally, a business plan template that doesn't feel like corporate
            homework. It's practical, simple, and AI-powered."
          </p>
          <cite className="font-semibold">- David L., App Founder</cite>
        </blockquote>
        <blockquote className="p-6 bg-gray-50 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4 italic">
            "I went from idea to a structured plan in one afternoon. This is a
            game-changer for anyone starting out."
          </p>
          <cite className="font-semibold">- Maria G., Digital Creator</cite>
        </blockquote>
      </div>
    </div>
  </section>
);

export default Testimonials;
