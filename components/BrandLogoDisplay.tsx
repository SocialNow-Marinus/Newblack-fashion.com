import React from 'react';
import { Reference } from '../constants';

interface BrandLogoDisplayProps {
  brand: Reference;
  className?: string;
}

const BrandLogoDisplay: React.FC<BrandLogoDisplayProps> = ({ brand, className = "" }) => {
  // Voor partnerlogo's (zoals Scotch & Soda, etc.):
  // 1. ALTIJD een zwarte achtergrond (#000000)
  // 2. ABSOLUUT GEEN filters of inversie op partner assets
  if (brand.logo) {
    return (
      <div className={`flex items-center justify-center w-full h-full bg-[#000000] ${className}`}>
        <img 
          src={brand.logo} 
          alt={brand.name} 
          className="max-h-full max-w-full object-contain" 
          style={{ 
            opacity: 1,
            filter: 'none', 
            mixBlendMode: 'normal'
          }}
        />
      </div>
    );
  }

  // Fallback tekst-logo
  return (
    <div className={`flex flex-col items-center justify-center text-center ${className} bg-[#000000] p-4`}>
      <span className="text-xl md:text-2xl serif italic leading-none text-white">
        {brand.name.split(' ')[0]}
        {brand.name.split(' ').length > 1 && (
          <span className="not-italic font-bold ml-1">{brand.name.split(' ').slice(1).join(' ')}</span>
        )}
      </span>
    </div>
  );
};

export default BrandLogoDisplay;