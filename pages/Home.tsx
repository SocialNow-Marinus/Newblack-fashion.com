
import React from 'react';
import { Link } from 'react-router-dom';
import BrandSlider from '../components/BrandSlider';
import { IMAGES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section - Pure Black */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black pt-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(178,145,90,0.1)_0%,_transparent_60%)]"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent opacity-80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="max-w-5xl">
            <span className="block text-[12px] font-bold tracking-[0.6em] uppercase mb-8 text-bronze">
              Fashion Industry Agency
            </span>
            <h1 className="text-4xl md:text-7xl font-light leading-[1.1] mb-12 italic">
              NewBlack Fashion – <br />
              <span className="font-bold not-italic block mt-4">Global Business Solutions for the Fashion Industry</span>
            </h1>
            <p className="text-lg md:text-2xl max-w-2xl leading-relaxed mb-12 font-light text-white/80 serif italic">
              An innovative international fashion agency offering innovative B2B and B2C business solutions for brands seeking sustainable global expansion.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/services" className="bg-white text-black px-12 py-5 text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-bronze hover:text-white transition-all duration-500 shadow-xl">
                Explore Services
              </Link>
              <Link to="/references" className="border border-white/20 text-white px-12 py-5 text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-500">
                Our References
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section - White Editorial Section */}
      <section className="py-32 bg-white text-black">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <h2 className="text-[10px] font-bold tracking-[0.5em] uppercase text-bronze">The Advantage</h2>
              <h3 className="text-4xl md:text-6xl serif italic leading-tight text-black">
                Innovative <br /><span className="not-italic font-bold">Fashion Strategy.</span>
              </h3>
              <p className="text-xl text-black/60 serif italic leading-relaxed">
                We connect brands with international markets through strategic partnerships, omnichannel solutions, and digital wholesale expertise.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-4">
                <div className="space-y-4">
                  <div className="w-8 h-px bg-bronze"></div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-black">Global Expansion</h4>
                  <p className="text-sm text-black/40 leading-relaxed">Developing clear roadmaps for sustainable growth.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-8 h-px bg-bronze"></div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-black">INTERNATIONAL NETWORK</h4>
                  <p className="text-sm text-black/40 leading-relaxed">International Retail, Franchise, and Wholesale Networks</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden shadow-2xl bg-black">
              <img src={IMAGES.MOROTAI_4} className="w-full h-auto opacity-90 transition-transform duration-1000 group-hover:scale-105" alt="Strategic Development" />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Bar */}
      <BrandSlider />

      {/* Development & Access - White Content Section */}
      <section className="py-32 bg-white text-black border-y border-black/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-24">
            <h2 className="text-4xl md:text-6xl serif italic mb-8">Development & <span className="not-italic font-bold">Access</span></h2>
            <p className="text-black/40 uppercase tracking-[0.4em] text-[10px] font-bold">Digitize your wholesale operations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "Marketplaces", desc: "Connect with top-tier international online marketplaces." },
              { title: "Logistics", desc: "Full access to our global fulfillment partner network." },
              { title: "Partnerships", desc: "Accessing international retail and franchise partnerships." },
              { title: "B2B Digital", desc: "Transform your wholesale operations for global visibility." }
            ].map((item, idx) => (
              <div key={idx} className="group p-10 border border-black/5 hover:border-bronze transition-all bg-zinc-50">
                <div className="text-bronze font-bold text-xs mb-8">0{idx + 1}</div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-6">{item.title}</h4>
                <p className="text-black/40 text-sm leading-relaxed serif italic group-hover:text-black/70 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-6 md:px-12">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
              <div className="lg:col-span-5 space-y-12">
                <h3 className="text-4xl md:text-5xl serif italic leading-tight">Creating a seamless <span className="font-bold not-italic underline decoration-bronze underline-offset-8">Omnichannel</span> experience.</h3>
                <p className="text-white/50 text-xl leading-relaxed serif italic">
                  We leverage brand assets and USPs for global success, building long-term partnerships worldwide with local market expertise.
                </p>
                <Link to="/about" className="inline-block text-[11px] font-bold uppercase tracking-[0.3em] text-bronze border-b border-bronze/30 pb-2 hover:text-white hover:border-white transition-all">
                  Learn About Our Approach
                </Link>
              </div>
              <div className="lg:col-span-7">
                <div className="relative group">
                  <img src={IMAGES.MOROTAI_HEADER} className="w-full h-[60vh] object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000" alt="Fashion Showroom" />
                  <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-bronze/20 backdrop-blur-3xl hidden md:block"></div>
                </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
