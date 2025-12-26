
import React from 'react';
import { IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-black">
      {/* Hero Section - Pure Black */}
      <section className="pt-64 pb-32 bg-black text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <h1 className="text-[10px] font-bold tracking-[0.4em] uppercase text-bronze mb-10">ABOUT NEWBLACK FASHION</h1>
            <h2 className="text-5xl md:text-8xl serif italic leading-[1.1] mb-16">
              The <span className="not-italic font-bold">Agency</span>
            </h2>
            <p className="text-2xl md:text-3xl text-white/70 leading-relaxed italic serif max-w-3xl">
              NewBlack Fashion is an international fashion consultancy and distribution agency specializing in brand development, market expansion, and omnichannel growth strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach - White Editorial Section */}
      <section id="approach" className="py-32 bg-white text-black scroll-mt-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-20 items-baseline mb-24">
            <h2 className="text-[11px] font-bold tracking-[0.5em] uppercase text-bronze shrink-0">Our Approach</h2>
            <div className="h-px bg-black/10 flex-grow hidden lg:block"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
            {[
              { title: "Market Potential Analysis", desc: "Identifying growth opportunities across international markets." },
              { title: "Brand Strategy", desc: "Developing clear roadmaps for sustainable expansion." },
              { title: "Growth & Scaling", desc: "Leveraging brand assets and USPs for global success." },
              { title: "International Focus", desc: "Operating globally with strong local expertise." },
              { title: "Marketing Excellence", desc: "Creating high-impact, data-driven marketing strategies." },
              { title: "Global Network", desc: "Accessing international retail and franchise partnerships." }
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="text-bronze font-bold text-xs mb-6 opacity-30 group-hover:opacity-100 transition-opacity">0{i + 1}</div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-black mb-4">{item.title}</h3>
                <p className="text-black/50 serif italic leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do - Black Grid Section */}
      <section id="what-we-do" className="py-32 bg-black text-white scroll-mt-32 border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <h2 className="text-4xl md:text-6xl serif italic">What <span className="not-italic font-bold">We Do</span></h2>
              <p className="text-white/50 text-xl md:text-2xl serif italic leading-relaxed">
                We develop and manage brand presence and brand experience in multiple international markets. NewBlack Fashion supports fashion brands in their global expansion, providing direct access to a strong network of online and offline retailers.
              </p>
              <div className="flex items-center gap-8 pt-4">
                <div className="w-16 h-px bg-bronze"></div>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Global Distribution Expertise</span>
              </div>
            </div>
            <div className="relative group overflow-hidden shadow-2xl">
              <img 
                src={IMAGES.ABOUT_GLOBAL_NETWORK} 
                className="w-full h-auto object-cover opacity-80 transition-transform duration-1000 group-hover:scale-110" 
                alt="Global Network Visualization" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Excellence - White Minimalist Section */}
      <section id="how-we-do-it" className="py-32 bg-white text-black scroll-mt-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-24">
              <h2 className="text-[11px] font-bold tracking-[0.5em] uppercase text-bronze mb-6">Operational Excellence</h2>
              <h3 className="text-3xl md:text-5xl serif italic">Execution <span className="not-italic font-bold">& Delivery</span></h3>
            </div>
            
            <div className="space-y-0">
              {[
                "Omnichannel sales and marketing strategies",
                "Digital wholesale solutions for international B2B growth",
                "Full-service marketplace management",
                "Connection to local fulfillment and logistics partners",
                "Consulting retailers on brand positioning and assortment strategy"
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex flex-row items-center gap-8 py-10 border-b border-black/5 last:border-0 group"
                >
                  <span className="text-xs font-bold tracking-[0.2em] text-black/20 group-hover:text-bronze transition-colors duration-500">
                    0{i + 1}
                  </span>
                  <span className="text-lg md:text-xl font-light text-black/60 group-hover:text-black transition-colors duration-500 serif italic leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Focus Statement - Pure Black */}
      <section className="py-48 bg-black text-center border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="w-px h-24 bg-bronze mx-auto opacity-50"></div>
            <h2 className="text-3xl md:text-5xl serif italic text-white/90 leading-relaxed">
              "We act as the bridge between <span className="font-bold not-italic text-white">visionary brands</span> and the <span className="font-bold not-italic text-white">global marketplace.</span>"
            </h2>
            <div className="w-px h-24 bg-bronze mx-auto opacity-50"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
