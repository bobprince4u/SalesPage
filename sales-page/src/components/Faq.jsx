// src/components/Faq.js
import React, { useState } from "react";

const faqData = [
  {
    question: "What software do I need?",
    answer:
      "Just a free Notion account and access to any AI tool (like ChatGPT or Claude). That's it!",
  },
  {
    question: "Is this for beginners or experts?",
    answer:
      "It's perfect for both! Beginners get a step-by-step system to start, and experts get a massive library of prompts to save time.",
  },
  {
    question: "How do I get my products after purchase?",
    answer:
      "Immediately after purchase, you'll receive a PDF with a link to your Notion dashboard. You get access instantly.",
  },
  {
    question: "What if I'm not satisfied?",
    answer:
      "We offer a 30-Day No-Questions-Asked Money-Back Guarantee. If you're not happy, we'll refund you.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <button
                className="w-full text-left font-semibold text-lg flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                <span className="text-2xl text-blue-600">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <p className="mt-4 text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
