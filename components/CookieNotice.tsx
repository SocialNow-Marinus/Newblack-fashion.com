import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieNotice: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 2000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] p-6 animate-in fade-in slide-in-from-bottom duration-700">
      <div className="bg-white/95 backdrop-blur-xl border border-bronze/20 p-8 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 shadow-2xl rounded-sm">
        <div className="flex-grow">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-3 text-bronze">Experience Enhancement</h3>
          <p className="text-sm text-black/50 leading-relaxed serif italic">
            This website uses cookies to ensure the best user experience. By continuing to explore NewBlack Fashion, you agree to our <Link to="/privacy" className="text-black underline underline-offset-4 decoration-bronze/30">privacy policy</Link> and data processing terms.
          </p>
        </div>
        <button 
          onClick={handleAccept}
          className="bg-black text-white px-12 py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-bronze transition-all whitespace-nowrap shadow-lg"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieNotice;