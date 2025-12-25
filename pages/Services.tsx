import React from 'react';
import { IMAGES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-48 pb-32 bg-black text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mb-32">
          <h1 className="text-[10px] font-bold tracking-[0.4em] uppercase text-bronze mb-10">OUR SERVICES</h1>
          <h2 className="text-5xl md:text-7xl serif italic leading-tight">Business <span className="not-italic font-bold">Solutions</span></h2>
        </div>

        {/* DTC Services */}
        <section className="mb-40 pt-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 mb-8 block serif">Direct-to-Consumer</span>
              <h2 className="text-4xl serif italic mb-12">DTC <span className="not-italic font-bold">Solutions</span></h2>
              <p className="text-white/50 mb-16 serif text-xl italic leading-relaxed">
                With years of operational experience in the fashion retail industry, we support brands across all aspects of direct-to-consumer operations.
              </p>
              <div className="space-y-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-bronze mb-6">Our DTC Services Include:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {[
                    "Store expansion strategy",
                    "Retail operation management",
                    "Merchandise and assortment management",
                    "Omnichannel services",
                    "Logistics and fulfillment solutions",
                    "Organizational structure optimization"
                  ].map((s, i) => (
                    <div key={i} className="flex gap-4 items-center p-6 border border-white/10 bg-black">
                      <div className="w-1 h-8 bg-bronze"></div>
                      <span className="text-sm font-bold uppercase tracking-tight text-white/80">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src={IMAGES.MOROTAI_9} className="w-full h-auto shadow-2xl opacity-70" alt="Retail Operations" />
            </div>
          </div>
        </section>

        {/* B2B Services */}
        <section className="mb-20 pt-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="hidden lg:block">
              <img src={IMAGES.MOROTAI_8} className="w-full h-auto shadow-2xl opacity-70" alt="B2B Network" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 mb-8 block serif">Business-to-Business</span>
              <h2 className="text-4xl serif italic mb-12">B2B <span className="not-italic font-bold">Services</span></h2>
              <p className="text-white/50 mb-16 serif text-xl italic leading-relaxed">
                We connect fashion brands with key accounts, department stores, online platforms, and opinion leaders worldwide.
              </p>
              <div className="space-y-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-bronze mb-6">Our B2B Expertise:</h4>
                <ul className="space-y-6">
                  {[
                    "International partner and retailer network access",
                    "Market potential analysis",
                    "Global brand strategy development",
                    "International sales growth",
                    "Strategic marketing planning",
                    "Long-term partnership building"
                  ].map((s, i) => (
                    <li key={i} className="flex items-center gap-6 group cursor-default">
                      <div className="w-6 h-px bg-bronze group-hover:w-12 transition-all"></div>
                      <span className="text-xl md:text-2xl serif italic text-white/60 group-hover:text-white transition-colors">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;