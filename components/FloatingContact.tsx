import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

const FloatingContact: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50">
      {/* WhatsApp */}
      <a
        href="https://wa.me/254745114480"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare size={24} />
      </a>
      {/* Phone Call */}
      <a
        href="tel:+254745114480"
        className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Call us"
      >
        <Phone size={24} />
      </a>
    </div>
  );
};

export default FloatingContact;
