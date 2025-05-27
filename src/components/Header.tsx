import React, { useState, useEffect } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import Button from "./shared/Button";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <GraduationCap className="h-8 w-8 text-[#0f6861]" />
          <span className="ml-2 text-2xl font-bold text-[#0f6861]">
            TopPlaced
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#how-it-works"
            className="text-gray-700 hover:text-[#0f6861] transition-colors"
          >
            How It Works
          </a>
          <a
            href="#why-topplaced"
            className="text-gray-700 hover:text-[#0f6861] transition-colors"
          >
            Why TopPlaced
          </a>
          <a
            href="#job-card"
            className="text-gray-700 hover:text-[#0f6861] transition-colors"
          >
            Job Card
          </a>
          <a
            href="#join"
            className="text-gray-700 hover:text-[#0f6861] transition-colors"
          >
            Join Us
          </a>
          <a
            href="#join"
            className="text-gray-700 hover:text-[#0f6861] transition-colors"
          >
            Workshop
          </a>
        </nav>

        <div className="hidden md:block">
          <Button>Schedule Interview</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4 animate-fade-in-down">
          <nav className="flex flex-col space-y-4 px-4">
            <a
              href="#how-it-works"
              className="text-gray-700 hover:text-[#0f6861] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#why-topplaced"
              className="text-gray-700 hover:text-[#0f6861] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Why TopPlaced
            </a>
            <a
              href="#job-card"
              className="text-gray-700 hover:text-[#0f6861] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Job Card
            </a>
            <a
              href="#join"
              className="text-gray-700 hover:text-[#0f6861] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Us
            </a>
            <Button fullWidth onClick={() => setIsMenuOpen(false)}>
              Schedule Interview
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
