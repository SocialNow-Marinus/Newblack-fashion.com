import React from 'react';
import { REFERENCES } from '../constants';
import BrandLogoDisplay from './BrandLogoDisplay';

const BrandSlider: React.FC = () => {
  // Double the references for a standard seamless scroll (0% to -50%)
  const displayReferences = [...REFERENCES, ...REFERENCES];

  return (
    <div className="bg-black py-20 overflow-hidden border-y border-white/10 relative">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-[9px] font-bold tracking-[0.8em] uppercase text-bronze/80">International Portfolio</h2>
      </div>
      
      <div className="relative">
        <div className="flex animate-scroll items-center gap-12 md:gap-20 lg:gap-24 whitespace-nowrap">
          {displayReferences.map((reference, index) => (
            <div 
              key={`${reference.name}-${index}`} 
              className="flex-shrink-0 flex items-center justify-center transition-all duration-500 opacity-100"
            >
              <div className="h-12 md:h-16 w-32 md:w-48 flex items-center justify-center px-2">
                 <BrandLogoDisplay brand={reference} light={true} />
              </div>
            </div>
          ))}
        </div>
        
        {/* Soft edge fades to pure black to maintain the "100% black" background feel while masking the scroll edges */}
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default BrandSlider;