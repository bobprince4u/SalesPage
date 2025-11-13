// src/components/EbookShowcase.js
import React from "react";

const EbookShowcase = () => (
  <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Go Deeper? Master Your Craft.
        </h2>
        <p className="text-xl text-gray-600">
          Once you have the system, you need strategy. We've written two
          exclusive ebooks to turn you into an expert in your personal and
          professional life.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 transform transition-all duration-500 hover:scale-105">
          <img
            src="/images/BookBrush1.jpg"
            alt="Financial Transparency Ebook"
            className="rounded-lg shadow-xl mx-auto"
          />
          <h3 className="text-2xl font-bold">
            The Importance of Financial Transparency in Relationships
          </h3>
          <p className="text-gray-600">
            Building Trust and Communication Around Money in Marriage.
          </p>
          <a
            href="#pricing"
            className="text-blue-600 font-semibold hover:underline"
          >
            Get it with the Bundle →
          </a>
        </div>
        <div className="space-y-4 transform transition-all duration-500 hover:scale-105">
          <img
            src="/images/BookBrush.png"
            alt="Empowering Your Child's Future Ebook"
            className="rounded-lg shadow-xl mx-auto"
          />
          <h3 className="text-2xl font-bold">Empowering Your Child's Future</h3>
          <p className="text-gray-600">
            A Life Beyond What You Imagine. A guide to long-term planning and
            legacy building.
          </p>
          <a
            href="#pricing"
            className="text-blue-600 font-semibold hover:underline"
          >
            Get it with the Bundle →
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default EbookShowcase;
