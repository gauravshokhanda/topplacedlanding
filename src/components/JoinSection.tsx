import React from 'react';
import { UserPlus, Users, MessageSquare } from 'lucide-react';
import Container from './shared/Container';
import Button from './shared/Button';

const JoinSection: React.FC = () => {
  return (
    <section id="join" className="py-20 bg-[#0f6861]">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join the TopPlaced Community
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
            Be part of a supportive network of students and mentors committed to helping you achieve your career goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/20 transition-colors duration-300 hover:transform hover:scale-105">
            <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center text-white mb-4">
              <UserPlus size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Personalized Guidance</h3>
            <p className="text-white/80">
              Get matched with mentors who specialize in your field and career interests for targeted advice.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/20 transition-colors duration-300 hover:transform hover:scale-105">
            <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center text-white mb-4">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Peer Learning</h3>
            <p className="text-white/80">
              Connect with fellow students to share experiences, practice together, and learn from each other.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/20 transition-colors duration-300 hover:transform hover:scale-105">
            <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center text-white mb-4">
              <MessageSquare size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Community Events</h3>
            <p className="text-white/80">
              Participate in group sessions, workshops, and Q&A events with industry professionals.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Button variant="light" size="lg">
            Join TopPlaced Community
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default JoinSection;