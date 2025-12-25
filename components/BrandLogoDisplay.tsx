import React from 'react';
import { Reference } from '../constants';

interface BrandLogoDisplayProps {
  brand: Reference;
  light?: boolean;
  className?: string;
}

const BrandLogoDisplay: React.FC<BrandLogoDisplayProps> = ({ brand, light = false, className = "" }) => {
  // 1. Handle Brand Image Logo if available
  if (brand.logo) {
    return (
      <div className={`flex items-center justify-center w-full h-full ${className}`}>
        <img 
          src={brand.logo} 
          alt={brand.name} 
          className="max-h-full max-w-full object-contain transition-all duration-500" 
          style={{ opacity: 1 }}
        />
      </div>
    );
  }

  // 2. Default elegant typography for text-based references
  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      <span 
        className={`text-xl md:text-3xl serif italic leading-none ${light ? 'text-white' : 'text-black'}`}
      >
        {brand.name.split(' ')[0]}
        {brand.name.split(' ').length > 1 && (
          <span className="not-italic font-bold ml-1">{brand.name.split(' ').slice(1).join(' ')}</span>
        )}
      </span>
      <div className={`w-8 h-px mt-3 ${light ? 'bg-white/40' : 'bg-black/10'}`}></div>
    </div>
  );
};

export default BrandLogoDisplay;