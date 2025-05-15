import React from 'react';
import { Shield, Users, TrendingUp } from 'lucide-react';
import Container from './shared/Container';
import SectionTitle from './shared/SectionTitle';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-4 p-6 rounded-xl hover:bg-[#f0f7f6] transition-colors duration-300">
      <div className="w-12 h-12 rounded-lg bg-[#0f6861]/10 flex items-center justify-center text-[#0f6861] mb-4 md:mb-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const WhyTopPlacedSection: React.FC = () => {
  return (
    <section id="why-topplaced" className="py-20 bg-[#f8f9fa]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle
              title="Why Choose TopPlaced"
              subtitle="We help students build confidence and job-readiness through real feedback and mentorship"
              align="left"
            />
            
            <div className="mt-10 space-y-6">
              <Feature
                icon={<Shield size={24} />}
                title="Build Confidence"
                description="Practice in a safe environment with professionals who provide constructive feedback to help you grow."
              />
              
              <Feature
                icon={<Users size={24} />}
                title="Real Mentorship"
                description="Connect with experienced mentors who guide you through your job preparation journey."
              />
              
              <Feature
                icon={<TrendingUp size={24} />}
                title="Measurable Growth"
                description="Track your progress with personalized Job Cards that highlight improvements over time."
              />
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/5905856/pexels-photo-5905856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Student in discussion" 
                className="w-full h-48 md:h-64 object-cover rounded-lg"
              />
              <img 
                src="https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Career preparation" 
                className="w-full h-48 md:h-64 object-cover rounded-lg mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Student learning" 
                className="w-full h-48 md:h-64 object-cover rounded-lg mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Mentor coaching" 
                className="w-full h-48 md:h-64 object-cover rounded-lg"
              />
            </div>
            <div className="absolute -z-10 w-full h-full bg-[#0f6861]/20 rounded-full blur-3xl opacity-30 -bottom-10 -right-10"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyTopPlacedSection;