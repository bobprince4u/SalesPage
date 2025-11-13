// src/App.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LoadingSkeleton from "./components/LoadingSkeleton";
import SocialProof from "./components/SocialProof";
import ProblemSolution from "./components/ProblemSolution";
import Testimonials from "./components/Testimonials";
import EbookShowcase from "./components/EbookShowcase";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Navbar />
      {isLoading ? <LoadingSkeleton /> : <Hero />}
      <SocialProof />
      <ProblemSolution />
      <Testimonials />
      <EbookShowcase />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
