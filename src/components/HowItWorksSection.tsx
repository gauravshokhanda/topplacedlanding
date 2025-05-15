import React from 'react';
import { Calendar, Video, FileText, Award } from 'lucide-react';
import Container from './shared/Container';
import SectionTitle from './shared/SectionTitle';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: number;
}

const Step: React.FC<StepProps> = ({ icon, title, description, number }) => {
  return (
    <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay={number * 100}>
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-full bg-[#0f6861] flex items-center justify-center text-white">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-[#0f6861] font-bold">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <Container>
        <SectionTitle
          title="How TopPlaced Works"
          subtitle="Your journey from interview practice to job readiness in 4 simple steps"
        />
        
        <div className="relative mt-20">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#0f6861] to-transparent"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <Step
              number={1}
              icon={<Calendar size={32} />}
              title="Schedule"
              description="Book a free mock interview session with a professional at your convenient time."
            />
            
            <Step
              number={2}
              icon={<Video size={32} />}
              title="Interview"
              description="Participate in a realistic mock interview conducted by industry professionals."
            />
            
            <Step
              number={3}
              icon={<FileText size={32} />}
              title="Get Job Card"
              description="Receive a personalized Job Card with scores, strengths, and areas to improve."
            />
            
            <Step
              number={4}
              icon={<Award size={32} />}
              title="Improve"
              description="Join the TopPlaced community for mentorship and continuous improvement."
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;