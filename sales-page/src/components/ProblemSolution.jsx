// src/components/ProblemSolution.js
import React from "react";

const ProblemSolution = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">
            The Entrepreneur's Paralysis is Real.
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            You have the drive, the vision, the passion. But you're stuck.
            Staring at a blank page. Overwhelmed by marketing plans, product
            roadmaps, and content calendars. The "what to do next" is killing
            your momentum.
          </p>
          <p className="text-lg font-semibold text-blue-600">
            It's not you. It's the lack of a system.
          </p>
        </div>
        <div className="mt-8 md:mt-0">
          <img
            src="/images/Image.png" // Replace with a screenshot of your Notion dashboard
            alt="AI Business Kit Notion Dashboard"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
      <div className="mt-16 p-8 bg-white rounded-xl shadow-lg text-center">
        <h3 className="text-2xl font-bold mb-4">
          Introducing Your System: The AI Business Toolkit
        </h3>
        <p className="text-lg text-gray-600">
          We've packed everything you need into one central, easy-to-use Notion
          dashboard. This isn't just a collection of files; it's your new
          operational headquarters to get unstuck and launch products.
        </p>
      </div>
    </div>
  </section>
);

export default ProblemSolution;
