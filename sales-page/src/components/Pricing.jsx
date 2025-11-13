// src/components/Pricing.js
import React from "react";

const Pricing = () => (
  <section id="pricing" className="py-20 bg-gray-100">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Choose Your Path to Success</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Option 1: Main Kit */}
        <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">The AI Business Toolkit</h3>
          <p className="text-gray-600 mb-6">
            Perfect for getting started immediately.
          </p>
          <ul className="space-y-2 mb-8">
            <li>✅ 350+ Expert-Crafted AI Prompts</li>
            <li>✅ Notion Business Plan & Pitch Template</li>
            <li>✅ Quick-Start Audio Guide</li>
          </ul>
          <div className="text-3xl font-bold mb-6">$59</div>
          <a
            href="https://bobken.gumroad.com/l/ziguxy?_gl=1*4qxziv*_ga*MTkzMTQ4NzEuMTc2MjQ2NTE5Mw..*_ga_6LJN6D94N6*czE3NjI5OTE2MzkkbzE3JGcxJHQxNzYyOTkxODQwJGo2MCRsMCRoMA.."
            className="w-full block text-center bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
          >
            Get It Now
          </a>
        </div>

        {/* Option 2: The Bundle (Most Popular) */}
        <div className="bg-blue-600 text-white p-8 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 relative">
          <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-800 text-sm font-bold px-3 py-1 rounded-full">
            MOST POPULAR
          </span>
          <h3 className="text-2xl font-bold mb-4">
            The Complete AI Entrepreneur Bundle
          </h3>
          <p className="text-blue-100 mb-6">
            Includes the Toolkit + BOTH Ebooks. Save over 25%.
          </p>
          <ul className="space-y-2 mb-8">
            <li>✅ The AI Business Toolkit</li>
            <li>✅ The Importance of Financial Transparency...</li>
            <li>✅ Empowering Your Child's Future</li>
          </ul>
          <div className="text-3xl font-bold mb-6">$67</div>
          <a
            href="https://your-gumroad-bundle-link.com"
            className="w-full block text-center bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-lg transition-all duration-300"
          >
            Get The Bundle & Save!
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Pricing;
