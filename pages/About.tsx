import React from 'react';
import { IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-48 pb-32 bg-white text-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mb-32">
          <h1 className="text-[10px] font-bold tracking-[0.4em] uppercase text-bronze mb-10">ABOUT NEWBLACK FASHION</h1>
          <h2 className="text-5xl md:text-7xl serif italic leading-tight mb-16 text-black">
            The <span className="not-italic font-bold">Agency</span>
          </h2>
          <p className="text-2xl text-black/70 leading-relaxed italic serif">
            NewBlack Fashion is an international fashion consultancy and distribution agency specializing in brand development, market expansion, and omnichannel growth strategies.
          </p>
        </div>

        {/* Our Approach */}
        <section className="mb-40 py-24 border-y border-black/5">
          <h2 className="text-[11px] font-bold tracking-[0.5em] uppercase text-black/30 mb-20 text-center">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
            {[
              { title: "Market Potential Analysis", desc: "Identifying growth opportunities across international markets." },
              { title: "Brand Strategy", desc: "Developing clear roadmaps for sustainable expansion." },
              { title: "Growth & Scaling", desc: "Leveraging brand assets and USPs for global success." },
              { title: "International Focus", desc: "Operating globally with strong local expertise." },
              { title: "Marketing Excellence", desc: "Creating high-impact, data-driven marketing strategies." },
              { title: "Global Network", desc: "Building long-term partnerships worldwide." }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-black">{item.title}</h3>
                <p className="text-black/50 serif italic">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What We Do */}
        <section className="mb-40 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-12">
            <h2 className="text-4xl serif italic text-black">What <span className="not-italic font-bold">We Do</span></h2>
            <p className="text-black/50 text-xl serif italic leading-relaxed">
              We develop and manage brand presence and brand experience in multiple international markets. NewBlack Fashion supports fashion brands in their global expansion, providing direct access to a strong network of online and offline retailers.
            </p>
            <div className="w-16 h-px bg-bronze"></div>
          </div>
          <div className="order-1 lg:order-2 aspect-[4/3] overflow-hidden shadow-2xl">
            <img src={IMAGES.MOROTAI_4} className="w-full h-full object-cover" alt="Global Network" />
          </div>
        </section>

        {/* How We Do It */}
        <section className="bg-black text-white p-12 md:p-32 rounded-sm mb-40">
          <div className="max-w-3xl">
            <h2 className="text-[11px] font-bold tracking-[0.5em] uppercase text-bronze mb-12 italic serif">How We Do It</h2>
            <ul className="space-y-10">
              {[
                "Omnichannel sales and marketing strategies",
                "Digital wholesale solutions for international B2B growth",
                "Full-service marketplace management",
                "Connection to local fulfillment and logistics partners",
                "Consulting retailers on brand positioning and assortment strategy"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-8 group">
                  <span className="text-bronze font-bold text-lg">0{i+1}</span>
                  <span className="text-xl md:text-2xl font-light text-white/80 serif italic">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;