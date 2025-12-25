import React from 'react';
import { IMAGES } from '../constants';

interface LogoProps {
  variant?: 'black' | 'white';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'black', className = '' }) => {
  // variant 'white' = Logo for the black header (requires inversion to be white)
  // variant 'black' = Logo for the white footer (forced to pure black)
  const logoSrc = variant === 'white' ? IMAGES.LOGO_LIGHT : IMAGES.LOGO_DARK;
  
  return (
    <div className={`flex items-center ${className}`} style={{ minWidth: '120px' }}>
      <img 
        src={logoSrc} 
        alt="NewBlack Fashion" 
        className={`block h-full w-auto object-contain transition-all duration-300 ${
          variant === 'white' ? 'brightness-0 invert' : 'brightness-0'
        }`}
        style={{ display: 'block' }}
        loading="eager"
        onError={(e) => {
          console.error("Main Logo failed to load:", logoSrc);
          // Fallback to stylized text if image fails to load
          e.currentTarget.style.display = 'none';
          const parent = e.currentTarget.parentElement;
          if (parent) {
            const text = document.createElement('span');
            text.innerText = 'NEWBLACK';
            text.className = `font-bold tracking-[0.3em] text-sm ${variant === 'white' ? 'text-white' : 'text-black'}`;
            parent.appendChild(text);
          }
        }}
      />
    </div>
  );
};

export default Logo;