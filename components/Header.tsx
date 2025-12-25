import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'References', path: '/references' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 bg-black border-b border-white/10 shadow-2xl ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Left Side: Agency Title */}
        <div className="hidden lg:flex flex-1 items-center">
          <Link to="/" className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/40 transition-colors hover:text-white">
            International Fashion Agency
          </Link>
        </div>

        {/* Center: Logo */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <Link to="/" className="group block">
            <Logo 
              variant="white" 
              className="h-5 md:h-6 transition-transform duration-500 group-hover:scale-105" 
            />
          </Link>
        </div>

        {/* Right Side: Navigation */}
        <nav className="hidden md:flex items-center space-x-10 flex-1 justify-end">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 hover:text-bronze text-white"
            >
              {link.name}
            </Link>
          ))}
          <button className="text-white hover:text-bronze transition-colors pl-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>

      {/* Fullscreen Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black z-[60] p-10 flex flex-col justify-center animate-in fade-in zoom-in duration-300">
          <button className="absolute top-8 right-8 text-white" onClick={() => setIsMobileMenuOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="mb-20">
            <Logo variant="white" className="h-8" />
          </div>

          <nav className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="text-3xl serif italic text-white hover:text-bronze transition-colors flex items-center justify-between group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>{link.name}</span>
                <span className="w-12 h-px bg-bronze transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right"></span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;