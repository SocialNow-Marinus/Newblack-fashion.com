import React from 'react';
import { REFERENCES, IMAGES } from '../constants';
import BrandLogoDisplay from '../components/BrandLogoDisplay';

const Brands: React.FC = () => {
  return (
    <div className="bg-white text-black">
      {/* Header Section */}
      <section className="pt-64 pb-32 bg-black text-center relative">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <h1 className="text-[11px] font-bold tracking-[0.7em] uppercase text-bronze mb-12 italic serif">Portfolio</h1>
          <h2 className="text-6xl md:text-9xl serif italic leading-none text-white">Fashion <span className="not-italic font-bold">References</span></h2>
          <p className="text-white/40 mt-12 text-lg uppercase tracking-widest">Supported by NewBlack Fashion</p>
        </div>
      </section>

      <div className="container mx-auto px-6 md:px-12 py-32">
        <div className="max-w-4xl mx-auto text-center mb-32 space-y-8">
           <p className="text-3xl serif italic text-black/70">
            Our portfolio includes premium and internationally recognized brands. We proudly support and manage these global fashion leaders.
           </p>
           <div className="w-12 h-px bg-bronze mx-auto"></div>
        </div>

        {/* References Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-40">
          {REFERENCES.map((reference, i) => (
            <div key={i} className="group flex flex-col items-center text-center space-y-8 p-12 bg-light-surface border border-black/5 hover:border-bronze transition-all duration-500 min-h-[300px] justify-center">
              <div className="h-40 w-full">
                <BrandLogoDisplay brand={reference} />
              </div>
              <h3 className="text-sm font-bold tracking-[0.4em] uppercase text-black/60 group-hover:text-black">
                {reference.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black">
          <img 
            src={IMAGES.MOROTAI_HEADER} 
            className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale" 
            alt="Fashion Editorial" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
          <div className="relative z-10 text-center px-6">
            <h2 className="text-4xl md:text-6xl serif italic text-white mb-8">Elevating <span className="not-italic font-bold">International Presence</span></h2>
            <div className="w-24 h-px bg-bronze mx-auto"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Brands;