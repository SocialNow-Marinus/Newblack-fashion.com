import React from 'react';
import { IMAGES } from '../constants';

interface LogoProps {
  variant?: 'black' | 'white'; // 'white' variant voor donkere bg, 'black' variant voor witte bg
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'white', className = '' }) => {
  /**
   * Instructie mapping:
   * Donkere achtergrond (variant 'white') -> https://i.ibb.co/pVp5R13/Logo-NBF-Dark-schmal.png (IMAGES.LOGO_DARK)
   * Witte achtergrond (variant 'black')  -> https://i.ibb.co/ccLx1KM8/Logo-NBF-Light-schmal.png (IMAGES.LOGO_LIGHT)
   */
  const logoSrc = variant === 'white' ? IMAGES.LOGO_DARK : IMAGES.LOGO_LIGHT;
  
  return (
    <div className={`flex items-center ${className}`} style={{ minWidth: '120px' }}>
      <img 
        src={logoSrc} 
        alt="NewBlack Fashion" 
        className="block h-full w-auto object-contain transition-opacity duration-300"
        style={{ display: 'block' }}
        loading="eager"
      />
    </div>
  );
};

export default Logo;