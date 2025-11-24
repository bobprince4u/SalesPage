// src/components/Footer.js
import React from "react";
import NativeAd from "./NativeAd";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-12">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">AI Entrepreneur Kit</h3>
          <p className="text-gray-400">Your system for launching faster.</p>
        </div>
        <div>
          <nav className="flex space-x-4 mb-4">
            <a href="/privacy" className="hover:text-blue-400">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-blue-400">
              Terms of Service
            </a>
            <a href="/contact" className="hover:text-blue-400">
              Contact
            </a>
          </nav>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
        <p>&copy; 2024 AI Entrepreneur Kit. All Rights Reserved.</p>
      </div>
      {/* AdSense Ad Placement */}
      <div className="mt-8">
        <NativeAd className="mx-auto" />
      </div>
    </div>
  </footer>
);

export default Footer;
