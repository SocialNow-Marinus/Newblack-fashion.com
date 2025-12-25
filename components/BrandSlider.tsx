import React from 'react';
import { REFERENCES } from '../constants';
import BrandLogoDisplay from './BrandLogoDisplay';

const BrandSlider: React.FC = () => {
  // Voor een naadloze loop dupliceren we de lijst exact. 
  // De CSS animatie schuift tot -50%, waarna hij onzichtbaar terugspringt.
  const duplicatedReferences = [...REFERENCES, ...REFERENCES];

  return (
    <div className="bg-[#000000] py-20 overflow-hidden border-y border-white/5 relative">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-[9px] font-bold tracking-[0.6em] uppercase text-white/30">Global Reference Network</h2>
      </div>
      
      <div className="relative w-full">
        <div 
          className="flex animate-scroll items-center gap-16 md:gap-32 whitespace-nowrap will-change-transform"
          style={{ width: 'max-content' }}
        >
          {duplicatedReferences.map((reference, index) => (
            <div 
              key={`${reference.name}-${index}`} 
              className="flex-shrink-0 flex items-center justify-center"
            >
              <div className="h-16 md:h-24 w-48 md:w-64 flex items-center justify-center bg-black">
                 <BrandLogoDisplay brand={reference} />
              </div>
            </div>
          ))}
        </div>
        
        {/* Zachte maskering aan de zijkanten voor rustige overgang */}
        <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default BrandSlider;