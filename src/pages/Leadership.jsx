import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ArrowRight } from 'lucide-react';
import Cta from '../components/cta';

function Leadership() {
  const partners = [
    {
      name: 'CA Punit Kumar Rai',
      title: 'Partner | Qualified in 2011',
      bio: 'CA Punit Kumar Rai brings more than a decade of professional experience in audit, assurance, banking assignments, financial reviews, and regulatory compliance. His exposure includes handling complex audit engagements, financial due diligence assignments, statutory audits, and banking sector reviews for diversified entities.',
      bio2:'His practical understanding of risk-based auditing and banking operations enables the firm to deliver focused and process-driven audit solutions to financial institutions and corporate clients.',
    },
    {
      name: 'CA Ayush Saxena',
      title: 'Partner | Qualified in 2022',
      bio: 'CA Ayush Saxena specializes in emerging assurance domains including forensic audits, ESG-oriented compliance reviews, investigative assignments, due diligence engagements, and technology-driven audit processes. His professional exposure includes assignments under the Companies Act, forensic examination procedures, and advisory support for governance and compliance frameworks.',
      bio2:'He actively focuses on integrating sustainability, governance, and risk-based evaluation methodologies into the firm’s service offerings, particularly for the banking and finance ecosystem.',
    },
  ];

  return (
    <div className="pt-24 pb-24 min-h-screen bg-slate-50">
      <div className="bg-primary py-24 text-white -mt-24 pt-48 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center justify-center gap-3 px-4 py-2 bg-gold/20 text-gold border border-gold/50 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
            <Users size={18} /> Leadership Team
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Our Leadership</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Meet the partners leading RAKS & Company with deep expertise in accounting, audit, compliance, and advisory services.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-2 mb-10">
          {partners.map((partner) => (
            <div key={partner.name} className="bg-white rounded-3xl shadow-soft border border-slate-200 overflow-hidden">
              <div className="relative h-96 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-slate-900"></div>
                <div className="relative z-10 flex h-full items-center justify-center">
                  <div className="h-28 w-28 rounded-full bg-gold/20 border border-white/10"></div>
                </div>
              </div>
              <div className="p-10">
                <span className="text-gold font-semibold uppercase tracking-widest text-sm">{partner.title}</span>
                <h2 className="text-3xl font-serif text-primary mt-4 mb-4">{partner.name}</h2>
                <p className="text-slate-600 leading-relaxed mb-6">{partner.bio}</p>
                <div className="inline-flex items-center gap-2 text-gold font-semibold">
                  {/* <ArrowRight size={20} /> Learn more about our partner approach */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Cta />

      </div>
    </div>
  );
}

export default Leadership;
