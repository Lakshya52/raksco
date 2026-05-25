import React, { useRef } from 'react';
import { Building2, Globe, ShieldCheck, Eye, Briefcase, FileText, Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { coreServices, otherServices } from '../data/servicesData';
import Cta from '../components/Cta';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const containerRef = useRef(null);

  const industriesServed = [
    'Manufacturing',
    'Trading & Distribution',
    'Retail Businesses',
    'E-commerce',
    'FMCG',
    'Hospitality',
    'Professional Services',
    'Infrastructure & Construction',
    'Logistics & Transportation',
    'Banking & Financial Services',
    'MSMEs & Mid-sized Enterprises',
    'Renewable Energy & Green Businesses',
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

  useGSAP(() => {
    // Hero intro load animations
    gsap.from(".services-hero-fade", {
      y: 40,
      opacity: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: "power4.out"
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="pt-24 pb-24 min-h-screen bg-slate-50">
      <div className="bg-primary py-24 text-white -mt-24 pt-48 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=70&w=1400&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center justify-center gap-3 px-4 py-2 bg-accent/20 text-accent border border-accent/50 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase services-hero-fade">
            Our services
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6 services-hero-fade">Focused Financial Expertise for Modern Businesses</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto services-hero-fade">
            We combine banking sector experience, ESG advisory, and assurance approaches to help clients navigate regulatory complexity with clarity.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <section className="mb-20 core-services-section">
          <div className="mb-12 text-center core-services-header">
            <h2 className="text-4xl font-serif text-primary">Core Services</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2 core-services-grid">
            {coreServices.map((service) => (
              <article key={service.title} className="group flex flex-col rounded-4xl bg-white shadow-soft border border-slate-200 p-6 core-service-card relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-0 bg-accent transition-all duration-300 group-hover:h-full"></div>
                <div className="w-14 h-14 rounded-3xl bg-accent/10 text-accent flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-accent/20">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed text-justify">{service.description}</p>
                <div className="mt-auto pt-4 border-t border-slate-100">
                  <Link to={`/services/${service.slug}`} className="text-primary font-semibold flex items-center gap-2 group-hover:text-accent transition-colors">
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-20 other-services-section">
          <div className="mb-12 text-center other-services-header">
            <h2 className="text-4xl font-serif text-primary">Other Services</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3 other-services-grid">
            {otherServices.map((service) => (
              <article key={service.title} className="group flex flex-col rounded-3xl bg-white shadow-sm border border-slate-200 p-6 hover:shadow-soft transition-all duration-300 other-service-card relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-0 bg-accent transition-all duration-300 group-hover:h-full"></div>
                <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-slate-650 mb-6 text-sm leading-relaxed text-justify">{service.description}</p>
                <div className="mt-auto pt-4 border-t border-slate-100">
                  <Link to={`/services/${service.slug}`} className="text-primary font-semibold flex items-center gap-2 group-hover:text-accent transition-colors">
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] mb-20 industry-split-section">
          <div className="rounded-4xl bg-white p-10 md:p-14 shadow-soft border border-slate-200 industry-left-panel">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 text-accent px-4 py-2 text-sm uppercase tracking-[0.25em] font-semibold mb-6">
              Industry Experience
            </span>
            <h2 className="text-4xl font-serif text-primary mb-6">The firm and its professional team have exposure across industries and business segments</h2>
            <p className="text-slate-600 leading-relaxed mb-8 text-justify">
              The firm and its professional team have exposure across multiple industries and business segments, enabling practical understanding of operational and financial risks specific to each sector.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 industry-items-grid">
              {industriesServed.map((industry) => (
                <div key={industry} className="flex gap-3 items-start rounded-3xl bg-slate-50 p-4 hover:bg-accent/30 transistion-all duration-300 industry-item">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent shrink-0"></span>
                  <p className="text-slate-700 leading-relaxed">{industry}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-4xl bg-slate-950 text-white p-10 md:p-14 shadow-[0_24px_80px_rgba(15,23,42,0.25)] border border-slate-800 focus-right-panel">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-accent px-4 py-2 text-sm uppercase tracking-[0.25em] font-semibold mb-6">
              Our Professional Focus
            </span>
            <h2 className="text-4xl font-serif text-white mb-6">Areas of focus across assurance and advisory.</h2>
            <div className="space-y-4 focus-items-list">
              {whyRaks.map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors duration-300 focus-item-card">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed text-justify">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="mb-24 bg-white rounded-4xl border border-slate-200 shadow-soft p-10 md:p-14 vision-section">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 block vision-section-el">Our Vision</span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 vision-section-el">A purpose-driven, professional chartered accountancy firm</h2>
            <p className="text-lg text-slate-600 leading-relaxed vision-section-el">
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
