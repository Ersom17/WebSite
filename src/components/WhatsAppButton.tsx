import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="http://wa.me/41765269200" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-30 bg-emerald-700 text-white p-4 rounded-full shadow-lg hover:bg-emerald-800 transition-all hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    </a>
  );
};

export default WhatsAppButton;