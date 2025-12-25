import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-48 pb-32 bg-white text-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mb-24">
          <h1 className="text-[10px] font-bold tracking-[0.4em] uppercase text-bronze mb-10">CONTACT & IMPRESSUM</h1>
          <h2 className="text-5xl md:text-7xl serif italic leading-tight text-black">Get in <span className="not-italic font-bold">Touch</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          {/* Company Details */}
          <div className="space-y-16">
            <section>
              <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-bronze mb-8">Headquarters</h3>
              <div className="text-2xl serif italic text-black/80 leading-relaxed">
                <p className="font-bold not-italic text-black mb-2 uppercase tracking-widest text-sm">NewBlack Fashion GmbH</p>
                An der Röthe 38<br />
                97230 Estenfeld, Germany
              </div>
            </section>

            <section>
              <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-bronze mb-8">Managing Director</h3>
              <p className="text-2xl serif italic text-black/80">Öznur Vasilev</p>
            </section>

            <section>
              <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-bronze mb-8">Contact Information</h3>
              <div className="space-y-4 text-xl serif italic text-black/80">
                <p><span className="not-italic text-sm font-bold uppercase tracking-widest text-black/20 mr-4">Phone</span> +49 9305 9884888</p>
                <p><span className="not-italic text-sm font-bold uppercase tracking-widest text-black/20 mr-4">Email</span> oeznur@newblack-fashion.com</p>
              </div>
            </section>
          </div>

          {/* Legal Disclosure */}
          <div className="bg-light-surface p-12 border border-black/5">
            <h2 className="text-[11px] font-bold tracking-[0.5em] uppercase text-black mb-16 serif">Legal Disclosure (Impressum)</h2>
            <div className="space-y-12 text-sm uppercase tracking-widest text-black/60 font-bold">
              <section>
                <h4 className="text-bronze mb-4">Commercial Register</h4>
                <p>District Court Würzburg</p>
                <p>Registration Number: HRB 12456</p>
              </section>
              <section>
                <h4 className="text-bronze mb-4">VAT Identification</h4>
                <p>VAT ID: DE-296035577</p>
              </section>
              <section className="pt-12 border-t border-black/10">
                <p className="text-[10px] italic serif normal-case tracking-normal opacity-40">
                  Responsibility for content according to German legal requirements.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;