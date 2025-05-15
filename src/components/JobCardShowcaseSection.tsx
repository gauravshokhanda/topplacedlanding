import React from 'react';
import { CheckCircle, AlertCircle, LineChart } from 'lucide-react';
import Container from './shared/Container';
import SectionTitle from './shared/SectionTitle';

const JobCardShowcaseSection: React.FC = () => {
  return (
    <section id="job-card" className="py-20 bg-white">
      <Container>
        <SectionTitle
          title="Your Personal Job Card"
          subtitle="Receive detailed feedback and actionable insights after each mock interview"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">How Job Cards Help You Grow</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-green-500 mt-1">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Identify Your Strengths</h4>
                  <p className="text-gray-600">
                    Discover what you're already doing well so you can leverage these skills in real interviews.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-amber-500 mt-1">
                  <AlertCircle size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Highlight Areas to Improve</h4>
                  <p className="text-gray-600">
                    Get specific feedback on areas that need attention, with actionable advice for improvement.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-[#0f6861] mt-1">
                  <LineChart size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Track Your Progress</h4>
                  <p className="text-gray-600">
                    See how your skills develop over time with comparative scores from multiple interviews.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#0f6861]">Mock Interview Job Card</h3>
                  <p className="text-gray-500">Date: June 15, 2025</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#0f6861] flex items-center justify-center text-white">
                  <span className="font-bold text-xl">B+</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-3 text-gray-700">Skills Assessment</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-600">Technical Knowledge</span>
                        <span className="font-medium">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-[#0f6861] h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-600">Communication</span>
                        <span className="font-medium">70%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-[#0f6861] h-2 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-600">Problem Solving</span>
                        <span className="font-medium">90%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-[#0f6861] h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-medium text-green-700 mb-2">Strengths</h5>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Strong technical fundamentals</li>
                      <li>Excellent problem breakdown</li>
                      <li>Good project examples</li>
                    </ul>
                  </div>
                  
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-medium text-amber-700 mb-2">Areas to Improve</h5>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Practice concise answers</li>
                      <li>Work on behavioral examples</li>
                      <li>Improve question response time</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default JobCardShowcaseSection;