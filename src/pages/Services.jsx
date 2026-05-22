import React from 'react';
import { Building2, Globe, ShieldCheck } from 'lucide-react';
import Cta from '../components/cta';

function Services() {
  const featuredServices = [
    {
      icon: <Building2 size={32} />,
      title: 'Banking & Financial Sector Assignments',
      description: 'Specialized support for banks, NBFCs, financial institutions, and regulated entities across audits, compliance and risk review.',
      details: [
        'Stock audits, credit audits and revenue audits',
        'Concurrent audits and statutory reporting',
        'Information Systems (IS) audits for financial workflows',
        'Regulatory compliance reviews under RBI/IRDAI/NBFC norms',
      ],
    },
    {
      icon: <Globe size={32} />,
      title: 'ESG, Sustainability & Green Finance Advisory',
      description: 'Advisory services designed to help organizations align with ESG best practices, sustainability reporting, and green finance frameworks.',
      details: [
        'Sustainability assurance and ESG compliance reviews',
        'Green finance advisory and sustainability strategy',
        'Materiality assessments and stakeholder reporting',
        'Assistance with ESG disclosures and framework alignment',
      ],
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Assurance & Advisory Services',
      description: 'Assurance services backed by practical advisory to improve controls, governance and performance for growing businesses.',
      details: [
        'Statutory, internal and tax audits',
        'Risk management and internal control reviews',
        'Financial due diligence and corporate advisory',
        'Governance support and compliance monitoring',
      ],
    },
  ];

  const industriesServed = [
    'Banking & Financial Services',
    'Manufacturing',
    'Trading & Distribution',
    'Infrastructure & Construction',
    'Logistics & Transportation',
    'Retail Businesses',
    'E-commerce',
    'Renewable Energy & Green Businesses',
    'FMCG',
    'Hospitality',
    'Professional Services',
    'MSMEs & Mid-sized Enterprises',
  ];

  const whyRaks = [
    {
      title: 'Sector-Focused Approach',
      description: 'A dedicated focus on banking, finance and risk-oriented assignments rather than a generalized compliance-only practice.',
    },
    {
      title: 'Investigative & Analytical Expertise',
      description: 'Experience in forensic audits, investigations and risk assessments provides deeper analytical capability during audit engagements.',
    },
    {
      title: 'ESG & Future-Ready Services',
      description: 'Focused development of sustainability and ESG-oriented assurance services aligned with evolving market and regulatory expectations.',
    },
    {
      title: 'Professional Execution Team',
      description: 'A dedicated team of professionals trained to execute assignments efficiently with emphasis on documentation, compliance, timelines and reporting quality.',
    },
    {
      title: 'Technology & Process Driven',
      description: 'Structured review methodologies, analytical procedures and risk-based evaluation frameworks improve audit effectiveness.',
    },
  ];

  return (
    <div className="pt-24 pb-24 min-h-screen bg-slate-50">
      <div className="bg-primary py-24 text-white -mt-24 pt-48 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center justify-center gap-3 px-4 py-2 bg-gold/20 text-gold border border-gold/50 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
            Core Service Focus
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Focused Financial Expertise for Modern Businesses</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We combine banking sector experience, ESG advisory, and assurance approaches to help clients navigate regulatory complexity with clarity.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-8 lg:grid-cols-3 mb-20">
          {featuredServices.map((service) => (
            <article key={service.title} className="group rounded-[2rem] shadow-soft border border-slate-200 p-10 hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
              <div className="w-16 h-16 rounded-3xl bg-gold/10 text-gold flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-gold/20">
                {service.icon}
              </div>
              <h2 className="text-2xl font-serif  mb-4">{service.title}</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.details.map((detail) => (
                  <li key={detail} className="flex gap-3 text-slate-700 font-medium">
                    <span className="mt-2 h-2 w-2 rounded-full bg-gold shrink-0"></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] mb-20">
          <div className="rounded-[2rem] bg-white p-10 md:p-14 shadow-soft border border-slate-200">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/10 text-gold px-4 py-2 text-sm uppercase tracking-[0.25em] font-semibold mb-6">
              Industry Experience
            </span>
            <h2 className="text-4xl font-serif text-primary mb-6">The firm and its professional team have exposure across industries and business segments</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              The firm and its professional team have exposure across multiple industries and business segments, enabling practical understanding of operational and financial risks specific to each sector.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {industriesServed.map((industry) => (
                <div key={industry} className="flex gap-3 items-start rounded-3xl bg-slate-50 p-4">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gold shrink-0"></span>
                  <p className="text-slate-700 leading-relaxed">{industry}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-950 text-white p-10 md:p-14 shadow-[0_24px_80px_rgba(15,23,42,0.25)] border border-slate-800">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-gold px-4 py-2 text-sm uppercase tracking-[0.25em] font-semibold mb-6">
              Our Professional Focus
            </span>
            <h2 className="text-4xl font-serif text-white mb-6">Areas of focus across assurance and advisory.</h2>
            <div className="space-y-4">
              {whyRaks.map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
        </section>
        {/* Vision Section */}
        <section className="mb-24 bg-white rounded-[2rem] border border-slate-200 shadow-soft p-10 md:p-14">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold font-semibold tracking-widest uppercase text-sm mb-4 block">Our Vision</span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">A purpose-driven, professional chartered accountancy firm</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              To build a professionally driven Chartered Accountancy firm recognized for specialized banking audits, investigative assurance services, and sustainability-focused advisory solutions while maintaining the highest standards of integrity, independence, and professional excellence.
            </p>
          </div>
        </section>
        <Cta />
      </div>
    </div>
  );
}

export default Services;
