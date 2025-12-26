
import React from 'react';
import { IMAGES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="bg-black">
      {/* Hero Header */}
      <section className="pt-64 pb-32 bg-black text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <h1 className="text-[10px] font-bold tracking-[0.4em] uppercase text-bronze mb-10">OUR SERVICES</h1>
            <h2 className="text-5xl md:text-8xl serif italic leading-tight">Business <span className="not-italic font-bold">Solutions</span></h2>
            <p className="text-xl md:text-2xl text-white/50 mt-12 serif italic max-w-2xl">
              Comprehensive growth strategies and operational support for the global fashion landscape.
            </p>
          </div>
        </div>
      </section>

      {/* DTC Services - WHITE SECTION */}
      <section id="dtc" className="py-32 bg-white text-black scroll-mt-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-bronze mb-8 block serif">Direct-to-Consumer</span>
              <h2 className="text-4xl md:text-6xl serif italic mb-12">DTC <span className="not-italic font-bold">Solutions</span></h2>
              <p className="text-black/60 mb-16 serif text-xl italic leading-relaxed max-w-xl">
                With years of operational experience in the fashion retail industry, we support brands across all aspects of direct-to-consumer operations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Store expansion strategy",
                  "Retail operation management",
                  "Merchandise management",
                  "Omnichannel services",
                  "Logistics solutions",
                  "Organizational structure"
                ].map((s, i) => (
                  <div key={i} className="flex gap-4 items-center p-6 border border-black/5 bg-zinc-50 group hover:border-bronze transition-colors">
                    <div className="w-1 h-8 bg-bronze/30 group-hover:bg-bronze transition-colors"></div>
                    <span className="text-xs font-bold uppercase tracking-widest text-black/70">{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group overflow-hidden shadow-2xl">
              <img 
                src={IMAGES.MOROTAI_9} 
                className="w-full h-auto object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105" 
                alt="Retail Strategy" 
                loading="lazy"
              />
              <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Services - BLACK SECTION */}
      <section id="b2b" className="py-32 bg-black text-white scroll-mt-32 border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative group overflow-hidden shadow-2xl">
              <img 
                src={IMAGES.MOROTAI_8} 
                className="w-full h-auto opacity-70 transition-transform duration-1000 group-hover:scale-105" 
                alt="Global Network" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 mb-8 block serif">Business-to-Business</span>
              <h2 className="text-4xl md:text-6xl serif italic mb-12">B2B <span className="not-italic font-bold">Expertise</span></h2>
              <p className="text-white/50 mb-16 serif text-xl italic leading-relaxed">
                We connect fashion brands with key accounts, department stores, online platforms, and opinion leaders worldwide.
              </p>
              <div className="space-y-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-bronze mb-10">Strategic Market Access:</h4>
                <ul className="space-y-8">
                  {[
                    "International retail and franchise partnerships",
                    "Deep market potential analysis",
                    "Global brand strategy development",
                    "Sustainable international sales growth",
                    "Strategic marketing and positioning",
                    "Building long-term industry partnerships"
                  ].map((s, i) => (
                    <li key={i} className="flex items-center gap-6 group cursor-default">
                      <div className="w-8 h-px bg-bronze/40 group-hover:w-16 group-hover:bg-bronze transition-all duration-500"></div>
                      <span className="text-xl md:text-2xl serif italic text-white/50 group-hover:text-white transition-colors duration-500">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Scale - WHITE SECTION */}
      <section className="py-32 bg-white text-black scroll-mt-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-[11px] font-bold tracking-[0.5em] uppercase text-bronze mb-8">Integrated Growth</h2>
            <h3 className="text-4xl md:text-6xl serif italic">Global <span className="not-italic font-bold">Fulfillment</span></h3>
            <div className="w-12 h-px bg-bronze mx-auto mt-10"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Logistics",
                desc: "Full access to our global fulfillment partner network for seamless distribution."
              },
              {
                title: "Digital B2B",
                desc: "Transforming traditional wholesale operations into digital-first global platforms."
              },
              {
                title: "Marketplaces",
                desc: "Strategic placement and management across premium international online marketplaces."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-12 border border-black/5 bg-zinc-50 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                <span className="block text-4xl serif italic text-black/10 group-hover:text-bronze mb-8 transition-colors">0{idx + 1}</span>
                <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-6">{item.title}</h4>
                <p className="text-black/50 serif italic leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-48 bg-black text-center border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl serif italic text-white/80 leading-snug">
              Elevating brands through <br />
              <span className="not-italic font-bold text-white underline decoration-bronze underline-offset-8">strategic excellence.</span>
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;