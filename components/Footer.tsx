import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-32 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2 space-y-8">
            <Logo variant="white" className="h-8 md:h-10" />
            <p className="text-lg text-white/40 leading-relaxed max-w-sm serif italic">
              Global business solutions for the international fashion industry. Empowering brands through innovative B2B and B2C strategies.
            </p>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-[11px] font-bold tracking-[0.4em] uppercase text-bronze">Quick Links</h4>
            <ul className="space-y-4 text-[11px] font-bold uppercase tracking-[0.2em]">
              <li><Link to="/about" className="hover:text-bronze transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-bronze transition-colors">All Services</Link></li>
              <li><Link to="/references" className="hover:text-bronze transition-colors">All References</Link></li>
              <li><Link to="/contact" className="hover:text-bronze transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[11px] font-bold tracking-[0.4em] uppercase text-bronze">Connect</h4>
            <div className="space-y-4 text-sm font-bold uppercase tracking-widest text-white/50">
              <p>An der Röthe 38<br />97230 Estenfeld</p>
              <p>+49 9305 9884888</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">
            © 2021 NewBlack Fashion. All rights reserved.
          </div>
          <div className="flex space-x-12 text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
            <Link to="/contact" className="hover:text-white transition-colors">Impressum</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;