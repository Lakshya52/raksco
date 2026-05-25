import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ChevronDown, ChevronUp, Users, FileSpreadsheet, Compass, HelpCircle } from 'lucide-react';
import Cta from '../components/Cta';
import { allServices } from '../data/servicesData';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);

  // FAQ state
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const service = allServices.find((s) => s.slug === slug);

  // If service not found, redirect to services page
  useEffect(() => {
    if (!service) {
      navigate('/services');
    }
  }, [service, navigate]);

  useGSAP(() => {
    if (!service) return;

    // Fast, beautiful entrance load animations
    gsap.from('.detail-hero-el', {
      y: 35,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out'
    });

    gsap.from('.detail-content-el', {
      y: 40,
      opacity: 0,
      duration: 0.85,
      stagger: 0.12,
      ease: 'power3.out',
      delay: 0.15
    });
  }, { scope: containerRef, dependencies: [slug] });

  if (!service) return null;

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div ref={containerRef} className="pt-24 pb-24 min-h-screen bg-slate-50">
      {/* Premium Dark Hero Header */}
      <section className="bg-primary text-white -mt-24 pt-44 pb-20 relative overflow-hidden">
        {/* Decorative subtle background pattern */}
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=70&w=1400&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-8 detail-hero-el">
            <Link to="/services" className="inline-flex items-center gap-2 text-slate-300 hover:text-accent transition-colors font-semibold group">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Services
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-8 justify-between">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 text-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-widest border border-accent/30 mb-5 detail-hero-el">
                Specialized Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight detail-hero-el">
                {service.title}
              </h1>
              <p className="text-xl text-slate-300 font-light leading-relaxed detail-hero-el">
                {service.tagline}
              </p>
            </div>

            {/* Premium Glowing Service Icon */}
            <div className="shrink-0 flex items-center justify-center detail-hero-el">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white/5 backdrop-blur-md text-accent rounded-3xl border border-white/20 flex items-center justify-center shadow-[0_12px_40px_rgba(0,0,0,0.3)] relative group overflow-hidden">
                <div className="absolute inset-0 bg-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <div className="relative z-10 scale-125 md:scale-[1.5]">
                  {service.icon}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout Section */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-12 items-start">

          {/* LEFT COLUMN: Deep Information */}
          <div className="space-y-12">

            {/* Overview */}
            <article className="bg-white rounded-3xl p-8 md:p-10 shadow-soft border border-slate-200/80 detail-content-el">
              <h2 className="text-2xl md:text-3xl font-serif text-primary mb-6 flex items-center gap-3">
                <span className="h-6 w-1 bg-accent rounded-full inline-block"></span>
                Service Overview
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-light mb-6 text-justify">
                {service.longDescription}
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {service.details.map((detail, index) => (
                  <div key={index} className="flex gap-3 items-start p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-accent/5 transition-all duration-300">
                    <div className="mt-1 bg-accent/15 text-accent rounded-full p-1 shrink-0">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-slate-700 text-sm font-medium leading-normal text-justify">{detail}</span>
                  </div>
                ))}
              </div>
            </article>

            {/* Core Offerings & Deliverables Grid */}
            <section className="bg-white rounded-3xl p-8 md:p-10 shadow-soft border border-slate-200/80 detail-content-el">
              <div className="mb-8">
                <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-2 block">Key Capabilities</span>
                <h2 className="text-2xl md:text-3xl font-serif text-primary flex items-center gap-3">
                  <span className="h-6 w-1 bg-accent rounded-full inline-block"></span>
                  Detailed Offerings & Deliverables
                </h2>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {service.detailedOfferings?.map((offering, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl border border-accent-dark/40 bg-slate-50/50 hover:bg-accent-light hover:border-accent hover:shadow-soft transition-all duration-300 group flex flex-col "
                  >
                    <div className="text-3xl font-bold font-serif text-accent  transition-colors mb-3">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2 font-serif group-hover:text-primary transition-colors">
                      {offering.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed grow text-justify">
                      {offering.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Process Timeline Section */}
            {/* {service.processTimeline && (
              <section className="bg-white rounded-3xl p-8 md:p-10 shadow-soft border border-slate-200/80 detail-content-el">
                <div className="mb-10">
                  <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-2 block">Our Workflow</span>
                  <h2 className="text-2xl md:text-3xl font-serif text-primary flex items-center gap-3">
                    <span className="h-6 w-1 bg-accent rounded-full inline-block"></span>
                    Service Methodology
                  </h2>
                </div>

                <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 space-y-10 py-2 ml-4">
                  {service.processTimeline.map((step, idx) => (
                    <div key={idx} className="relative group">
                      {/* Timeline dot bubble 
                      <span className="absolute -left-12 sm:-left-[3.25rem] top-1.5 w-8 h-8 rounded-full bg-slate-100 border-2 border-slate-350 flex items-center justify-center font-bold text-xs text-slate-500 group-hover:bg-accent group-hover:border-accent group-hover:text-primary transition-all duration-300 shadow-sm">
                        {idx + 1}
                      </span>
                      
                      <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100 hover:bg-white hover:border-slate-200 hover:shadow-soft transition-all duration-300">
                        <span className="text-xs uppercase font-semibold text-accent tracking-widest mb-1 block">
                          {step.phase}
                        </span>
                        <h3 className="text-lg font-bold text-slate-800 mb-2 font-serif">
                          {step.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )} */}

            {/* Collapsible FAQ Accordion */}
            {/* {service.faqs && (
              <section className="bg-white rounded-3xl p-8 md:p-10 shadow-soft border border-slate-200/80 detail-content-el">
                <div className="mb-8">
                  <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-2 block">Clarifications</span>
                  <h2 className="text-2xl md:text-3xl font-serif text-primary flex items-center gap-3">
                    <span className="h-6 w-1 bg-accent rounded-full inline-block"></span>
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-4">
                  {service.faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div 
                        key={idx} 
                        className={`rounded-2xl border transition-all duration-300 ${
                          isOpen ? 'bg-slate-50/70 border-accent/50 shadow-soft' : 'bg-white border-slate-200'
                        }`}
                      >
                        <button
                          onClick={() => toggleFaq(idx)}
                          className="w-full text-left p-6 flex justify-between items-center gap-4 hover:text-accent transition-colors group"
                        >
                          <span className="font-serif font-bold text-base md:text-lg text-slate-800 group-hover:text-primary transition-colors flex gap-3 items-start">
                            <HelpCircle size={20} className="text-accent shrink-0 mt-1" />
                            {faq.question}
                          </span>
                          <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                            isOpen ? 'bg-accent/20 text-accent' : 'bg-slate-100 text-slate-500'
                          }`}>
                            {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                          </span>
                        </button>
                        
                        <div 
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            isOpen ? 'max-h-80 border-t border-slate-200/50' : 'max-h-0'
                          }`}
                        >
                          <p className="p-6 text-slate-650 text-sm leading-relaxed font-light bg-white rounded-b-2xl">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )} */}

          </div>

          {/* RIGHT COLUMN: Sidebar Metadata & CTA */}
          <aside className="space-y-8 sticky top-28 detail-content-el">

            {/* At a Glance Spec Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-soft relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-accent"></div>

              <h3 className="text-xl font-serif text-primary mb-6 flex items-center gap-2">
                At a Glance
              </h3>

              <div className="space-y-6">

                {/* Target Clients */}
                {/* <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Users size={14} className="text-accent" />
                    Target Clients
                  </h4>
                  <ul className="space-y-2">
                    {service.atAGlance.targetClients.map((client, i) => (
                      <li key={i} className="text-sm text-slate-700 flex gap-2 items-start font-medium">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0"></span>
                        {client}
                      </li>
                    ))}
                  </ul>
                </div> */}

                {/* Core Frameworks */}
                <hr className="border-slate-100" />
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <FileSpreadsheet size={14} className="text-accent" />
                    Key Frameworks
                  </h4>
                  <ul className="space-y-2">
                    {service.atAGlance.frameworks.map((framework, i) => (
                      <li key={i} className="text-sm text-slate-700 flex gap-2 items-start font-medium">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0"></span>
                        {framework}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Our Philosophy */}
                <hr className="border-slate-100" />
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Compass size={14} className="text-accent" />
                    Our Philosophy
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed italic bg-slate-50 p-4 rounded-xl border border-slate-100">
                    "{service.atAGlance.approach}"
                  </p>
                </div>

              </div>
            </div>

            {/* Sidebar CTA Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-[0_20px_50px_rgba(15,23,42,0.15)] relative overflow-hidden group">
              {/* Background abstract overlay glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 rounded-full blur-[40px] group-hover:bg-accent/20 transition-colors duration-500"></div>

              <div className="relative z-10">
                <span className="text-accent uppercase tracking-widest font-semibold text-xs mb-2 block">
                  Professional Enquiries
                </span>
                <h3 className="text-2xl font-serif text-white mb-4">
                  Need customized assistance?
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Get in touch with our expert Chartered Accountants to discuss your operational, financial compliance, or strategic needs.
                </p>
                <Link
                  to="/contact"
                  className="w-full text-center inline-flex justify-center items-center gap-2 bg-accent hover:bg-accent-dark text-slate-950 font-bold py-3.5 px-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:-translate-y-0.5"
                >
                  Contact Our Office
                </Link>
              </div>
            </div>

          </aside>

        </div>
      </div>

      {/* General Bottom Call to Action */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <Cta />
      </div>
    </div>
  );
}

export default ServiceDetail;
