import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="pt-48 pb-32 bg-black text-white">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h1 className="text-[10px] font-bold tracking-[0.4em] uppercase text-bronze mb-12 italic serif">PRIVACY POLICY (DATENSCHUTZ)</h1>
        <h2 className="text-5xl md:text-6xl serif italic mb-20 leading-tight">Data <span className="not-italic font-bold">Protection</span></h2>
        
        <div className="space-y-16 text-white/60 leading-relaxed font-light">
          <section>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] text-white/80 mb-8">Data Protection Overview</h3>
            <p className="text-lg serif italic">
              We take the protection of your personal data seriously. This section provides an overview of how personal data is collected, processed, and protected when you visit our website.
            </p>
          </section>

          {/* Info Block - Pure Black */}
          <section className="bg-black p-12 border border-white/10">
            <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-bronze mb-10 italic serif">Key Privacy Information</h3>
            <ul className="space-y-8 serif italic text-lg">
              <li className="flex gap-6 items-start">
                <span className="w-2 h-2 bg-bronze mt-3"></span>
                <span>Data collection through website usage and user input.</span>
              </li>
              <li className="flex gap-6 items-start">
                <span className="w-2 h-2 bg-bronze mt-3"></span>
                <span>User rights: access, correction, blocking, or deletion of data.</span>
              </li>
              <li className="flex gap-6 items-start">
                <span className="w-2 h-2 bg-bronze mt-3"></span>
                <span>Use of analytics tools and third-party plugins (e.g. social media platforms).</span>
              </li>
              <li className="flex gap-6 items-start">
                <span className="w-2 h-2 bg-bronze mt-3"></span>
                <span>Data processing based on GDPR (Art. 6 DSGVO).</span>
              </li>
            </ul>
          </section>

          <section className="pt-12 border-t border-white/5">
            <p className="serif italic text-lg text-white/40">
              For any privacy-related inquiries, please reach out to <span className="text-white font-bold">oeznur@newblack-fashion.com</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;