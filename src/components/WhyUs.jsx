import React from 'react';
import { ShieldCheck, Search, Sparkles, Users2, TrendingUp } from 'lucide-react';

const defaultReasons = [
  {
    icon: <ShieldCheck size={24} />,
    title: 'Sector-Focused Approach',
    description: 'A dedicated focus on banking, finance and risk-oriented assignments rather than a generalized compliance-only practice.',
  },
  {
    icon: <Search size={24} />,
    title: 'Investigative & Analytical Expertise',
    description: 'Experience in forensic audits, investigations and risk assessments provides deeper analytical capability during audit engagements.',
  },
  {
    icon: <Sparkles size={24} />,
    title: 'ESG & Future-Ready Services',
    description: 'Focused development of sustainability and ESG-oriented assurance services aligned with evolving market and regulatory expectations.',
  },
  {
    icon: <Users2 size={24} />,
    title: 'Professional Execution Team',
    description: 'A dedicated team trained to execute assignments efficiently with emphasis on documentation, compliance, timelines and reporting quality.',
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Technology & Process Driven',
    description: 'Structured review methodologies, analytical procedures and risk-based evaluation frameworks improve audit effectiveness.',
  },
];

function WhyUs({ title = 'Our Focus Areas', subtitle = 'Areas of focus across banking, risk, ESG and assurance.', reasons = defaultReasons }) {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-gold font-semibold tracking-widest uppercase text-sm mb-4 block">Our Focus</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">{title}</h2>
          <p className="text-lg text-slate-600 leading-relaxed">{subtitle}</p>
        </div>

        <div className="grid gap-8 xl:grid-cols-5 lg:grid-cols-2 md:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft transition-transform duration-300 hover:-translate-y-1">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gold/10 text-gold">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{reason.title}</h3>
              <p className="text-slate-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
