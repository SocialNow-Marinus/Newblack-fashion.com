import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

interface SubLink {
  name: string;
  hash: string;
}

interface NavLink {
  name: string;
  path: string;
  subLinks?: SubLink[];
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isWhitePage = location.pathname === '/contact';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const navLinks: NavLink[] = [
    { 
      name: 'About Us', 
      path: '/about',
      subLinks: [
        { name: 'Our Approach', hash: '#approach' },
        { name: 'What We Do', hash: '#what-we-do' },
        { name: 'Operational Excellence', hash: '#how-we-do-it' }
      ]
    },
    { 
      name: 'Services', 
      path: '/services',
      subLinks: [
        { name: 'DTC Solutions', hash: '#dtc' },
        { name: 'B2B Services', hash: '#b2b' }
      ]
    },
    { 
      name: 'References', 
      path: '/references',
      subLinks: [
        { name: 'Brand Portfolio', hash: '#portfolio' },
        { name: 'Global Excellence', hash: '#excellence' }
      ]
    },
    { 
      name: 'Contact', 
      path: '/contact',
      subLinks: [
        { name: 'Headquarters', hash: '#headquarters' },
        { name: 'Legal Disclosure', hash: '#legal' }
      ]
    },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? (isWhitePage ? 'bg-white py-3 border-b border-black/5 shadow-md' : 'bg-black py-3 border-b border-white/5 shadow-2xl') 
            : 'bg-transparent py-5'
        } ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'} backdrop-blur-md`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center h-12 md:h-16">
          {/* Desktop Title */}
          <div className="hidden lg:flex flex-1 items-center">
            <Link 
              to="/" 
              className={`text-[9px] font-bold tracking-[0.2em] uppercase transition-colors ${
                isWhitePage ? 'text-black/40 hover:text-black' : 'text-white/40 hover:text-white'
              }`}
            >
              International Fashion Agency
            </Link>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <Link to="/" className="group block">
              <Logo 
                variant={isWhitePage ? "black" : "white"} 
                className={`${isScrolled ? 'h-6 md:h-7' : 'h-7 md:h-9'} transition-all duration-500 group-hover:scale-105`} 
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10 flex-1 justify-end">
            {navLinks.map((link) => (
              <div 
                key={link.path} 
                className="relative group py-4"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  to={link.path} 
                  className={`flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 hover:text-bronze ${
                    isWhitePage ? 'text-black' : 'text-white'
                  }`}
                >
                  {link.name}
                  {link.subLinks && (
                    <svg className={`w-2 h-2 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Sub Menu Dropdown */}
                {link.subLinks && (
                  <div className={`absolute top-full right-0 pt-4 transition-all duration-300 ease-out transform ${
                    activeDropdown === link.name ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
                  }`}>
                    <div className={`w-64 p-6 shadow-2xl border ${
                      isWhitePage ? 'bg-white border-black/5' : 'bg-black border-white/10'
                    }`}>
                      <ul className="space-y-4">
                        {link.subLinks.map((sub) => (
                          <li key={sub.hash}>
                            <Link 
                              to={`${link.path}${sub.hash}`}
                              className={`block text-[9px] font-bold tracking-[0.2em] uppercase transition-colors hover:text-bronze ${
                                isWhitePage ? 'text-black/60' : 'text-white/40'
                              }`}
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <button className={`${isWhitePage ? 'text-black' : 'text-white'} hover:text-bronze transition-colors pl-4`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </nav>

          {/* Hamburger Icon */}
          <div className="flex md:hidden flex-1 justify-end">
            <button 
              className="p-2 -mr-2 outline-none"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${isWhitePage ? 'text-black' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 8h16M4 16h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-[#000000] z-[10000] transition-all duration-500 ease-out ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col h-full w-full">
          <div className="flex justify-between items-center w-full px-6 py-5 h-20 md:h-24">
            <Logo variant="white" className="h-7" />
            <button 
              className="p-2 -mr-2 text-white hover:text-bronze transition-colors focus:outline-none" 
              onClick={closeMenu}
              aria-label="Close Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav className="flex-grow flex flex-col items-center justify-center space-y-10 text-center px-10 overflow-y-auto">
            {navLinks.map((link, idx) => (
              <div 
                key={link.path}
                className={`transition-all duration-700 delay-[100ms] ${
                  isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${150 + (idx * 100)}ms` }}
              >
                <Link 
                  to={link.path} 
                  className="text-4xl xs:text-5xl serif italic text-white hover:text-bronze transition-colors block py-2"
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </nav>

          <div className={`w-full text-center px-6 pb-12 transition-all duration-1000 delay-500 ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="h-px w-12 bg-bronze mx-auto mb-10 opacity-50"></div>
            <p className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/40 mb-3">
              Global Business Solutions
            </p>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/10">
              NewBlack Fashion © 2021
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;