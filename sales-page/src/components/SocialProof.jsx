// src/components/SocialProof.js
import React from "react";

const SocialProof = () => (
  <section id="social-proof" className="py-12 bg-white border-b">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-center text-gray-600 font-semibold mb-6">
        TRUSTED BY ENTREPRENEURS WORLDWIDE
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
        {/* Replace with real logos if you have them. For now, we use placeholder text. */}
        <div className="text-2xl font-bold text-gray-400">Indie Hackers</div>
        <div className="text-2xl font-bold text-gray-400">Product Hunt</div>
        <div className="text-2xl font-bold text-gray-400">The Next Web</div>
      </div>
    </div>
  </section>
);

export default SocialProof;
