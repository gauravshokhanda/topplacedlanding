import React from 'react';
import { Building, Star, Award } from 'lucide-react';
import Container from './shared/Container';
import SectionTitle from './shared/SectionTitle';

const FutureVisionSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#f8f9fa]">
      <Container>
        <SectionTitle
          title="Our Future Vision"
          subtitle="Building bridges between students and top companies"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16">
          <div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Future vision for TopPlaced" 
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f6861]/50 to-transparent rounded-2xl flex flex-col justify-end p-8">
                <p className="text-white text-xl font-bold">
                  "Our goal is to create a platform where every student has access to the resources they need to succeed."
                </p>
                <p className="text-white/80 mt-2">- TopPlaced Team</p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0f6861]/10 flex items-center justify-center text-[#0f6861]">
                  <Building size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Hiring Partnerships</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We're building relationships with top companies to create direct pathways from our platform to job opportunities. Students with impressive Job Cards will get priority access to these positions.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0f6861]/10 flex items-center justify-center text-[#0f6861]">
                  <Star size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Success Stories</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We're dedicated to celebrating our students' achievements. Our platform will showcase success stories of students who improved their interview skills and secured their dream jobs through TopPlaced.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0f6861]/10 flex items-center justify-center text-[#0f6861]">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">TopPlaced Certification</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We're developing a certification program that validates your interview readiness. This credential will be recognized by our partner companies as a mark of quality preparation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FutureVisionSection;