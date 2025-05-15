import React from 'react';
import Button from './shared/Button';
import Container from './shared/Container';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-[#f8f9fa] to-[#e9f2f1]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Ace Your Interviews, <span className="text-[#0f6861]">Get Placed</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Free mock interviews with professionals to build your confidence and 
              improve your job readiness. Get personalized feedback and join a community 
              of growth-focused students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">Schedule Free Interview</Button>
              <a 
                href="#how-it-works" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#0f6861] font-medium rounded-lg border border-[#0f6861] hover:bg-[#f0f7f6] transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#0f6861]/10 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0f6861]/20 rounded-full"></div>
              <img 
                src="https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Student in a mock interview" 
                className="w-full h-auto rounded-2xl shadow-xl relative z-10 object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;