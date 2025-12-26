
import React from 'react';
import { REFERENCES, IMAGES } from '../constants';
import BrandLogoDisplay from '../components/BrandLogoDisplay';

const Brands: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Section */}
      <section className="pt-64 pb-32 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,_rgba(178,145,90,0.15)_0%,_transparent_70%)]"></div>
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <h1 className="text-[11px] font-bold tracking-[0.7em] uppercase text-bronze mb-12 italic serif">Portfolio</h1>
          <h2 className="text-6xl md:text-9xl serif italic leading-none text-white">Fashion <span className="not-italic font-bold">References</span></h2>
          <p className="text-white/40 mt-12 text-lg uppercase tracking-widest">Global Brand Network</p>
        </div>
      </section>

      <div className="container mx-auto px-6 md:px-12 py-32 bg-black">
        <div className="max-w-4xl mx-auto text-center mb-32 space-y-8">
           <p className="text-3xl serif italic text-white/70 leading-relaxed">
            Our portfolio includes premium and internationally recognized brands. We proudly support these fashion leaders in their global journey.
           </p>
           <div className="w-12 h-px bg-bronze mx-auto"></div>
        </div>

        {/* References Grid */}
        <div id="portfolio" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-40 scroll-mt-32">
          {REFERENCES.map((reference, i) => (
            <div 
              key={i} 
              className="group flex flex-col items-center text-center space-y-8 p-12 bg-black border border-white/10 hover:border-bronze transition-all duration-700 min-h-[350px] justify-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-bronze transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              
              <div className="h-40 w-full flex items-center justify-center bg-black">
                <BrandLogoDisplay brand={reference} />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40 group-hover:text-bronze transition-colors duration-500">
                  {reference.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Banner */}
        <section id="excellence" className="relative h-[60vh] flex items-center justify-center overflow-hidden border border-white/10 bg-black scroll-mt-32">
          <img 
            src={IMAGES.MOROTAI_HEADER} 
            className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale" 
            alt="International Portfolio" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black"></div>
          <div className="relative z-10 text-center px-6">
            <span className="block text-[10px] font-bold tracking-[0.8em] uppercase text-bronze mb-6">Sustainable Growth</span>
            <h2 className="text-4xl md:text-7xl serif italic text-white mb-8">Global <span className="not-italic font-bold">Excellence</span></h2>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Brands;