import React, { useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import WhyTopPlacedSection from "./components/WhyTopPlacedSection";
import JobCardShowcaseSection from "./components/JobCardShowcaseSection";
import MentorShowcase from "./components/MentorShowcase";
import JoinSection from "./components/JoinSection";
import FutureVisionSection from "./components/FutureVisionSection";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    document.title = "TopPlaced - Mock Interviews for Students";
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <WhyTopPlacedSection />
        <JobCardShowcaseSection />
        <MentorShowcase />
        <JoinSection />
        <FutureVisionSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
