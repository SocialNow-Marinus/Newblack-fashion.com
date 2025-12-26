import React from 'react';
import { Reference } from '../constants';

interface BrandLogoDisplayProps {
  brand: Reference;
  variant?: 'light' | 'dark'; // 'light' means the logo is on a light background (so use logoBlack), 'dark' means it's on a dark background (so use logoWhite)
  className?: string;
}

const BrandLogoDisplay: React.FC<BrandLogoDisplayProps> = ({ brand, variant = 'dark', className = "" }) => {
  // Use logoWhite for dark backgrounds and logoBlack for light backgrounds as requested
  const logoSrc = variant === 'dark' ? brand.logoWhite : brand.logoBlack;

  if (logoSrc) {
    return (
      <div className={`flex items-center justify-center w-full h-full ${variant === 'dark' ? 'bg-[#000000]' : 'bg-transparent'} ${className}`}>
        <img 
          src={logoSrc} 
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

  // Fallback text-logo if no image is available
  return (
    <div className={`flex flex-col items-center justify-center text-center ${className} ${variant === 'dark' ? 'bg-[#000000]' : 'bg-transparent'} p-4`}>
      <span className={`text-xl md:text-2xl serif italic leading-none ${variant === 'dark' ? 'text-white' : 'text-black'}`}>
        {brand.name.split(' ')[0]}
        {brand.name.split(' ').length > 1 && (
          <span className="not-italic font-bold ml-1">{brand.name.split(' ').slice(1).join(' ')}</span>
        )}
      </span>
    </div>
  );
};

export default BrandLogoDisplay;