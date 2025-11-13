// src/components/LoadingSkeleton.js
import React from "react";

const LoadingSkeleton = () => (
  <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
    <div className="text-center">
      <div className="h-12 bg-gray-300 rounded w-3/4 mx-auto mb-4 animate-pulse"></div>
      <div className="h-6 bg-gray-300 rounded w-1/2 mx-auto mb-8 animate-pulse"></div>
      <div className="h-64 bg-gray-300 rounded-lg mb-8 animate-pulse"></div>
      <div className="h-12 bg-blue-500 rounded-lg w-1/3 mx-auto animate-pulse"></div>
    </div>
  </main>
);

export default LoadingSkeleton;
