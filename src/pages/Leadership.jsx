import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Users, ArrowRight } from 'lucide-react';
import Cta from '../components/Cta';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Leadership() {
  const containerRef = useRef(null);

  const partners = [
    {
      name: 'Punit Kumar Rai',
      title: 'Partner',
      bio: 'He has professional experience in audit, assurance, banking assignments, financial reviews and regulatory compliance. His exposure includes handling complex audit engagements, financial due diligence assignments, statutory audits and banking sector reviews for diversified entities.',
      bio2: 'His practical understanding of risk-based auditing and banking operations enables the firm to deliver focused and process-driven audit solutions to financial institutions and corporate clients.',
      specialties: ["Audit & Assurance","Regulatory Compliance","Banking Sector"]
    },
    {
      name: 'Ayush Saxena',
      title: 'Partner',
      bio: 'He specialized in emerging assurance domains including forensic audits, ESG-oriented compliance reviews, investigative assignments, due diligence engagements and technology-driven audit processes. His professional exposure includes assignments under the Companies Act, forensic examination procedures and advisory support for governance and compliance frameworks.',
      bio2: 'He actively focuses on integrating sustainability, governance and risk-based evaluation methodologies into the firm’s service offerings, particularly for the banking and finance ecosystem.',
      specialties: ["Accounting", "ESG Compliance", "ASM"]
    },
  ];

  const leadershipPrinciples = [
    {
      title: 'Ethical Stewardship',
      description: 'We lead with integrity, independence and professional scepticism in every engagement.',
    },
    {
      title: 'Sector Expertise',
      description: 'Our leadership brings deep domain knowledge across banking, finance, compliance and corporate advisory.',
    },
    {
      title: 'Client Partnership',
      description: 'We work closely with clients to shape sustainable outcomes and practical business resilience.',
    },
  ];

  const leadershipFocus = [
    'Audit, assurance and governance support for growing enterprises',
    'Regulatory compliance and financial reporting assistance',
    'ESG, sustainability and green finance advisory services',
    'Independent monitoring and risk oversight for institutions',
  ];

  useGSAP(() => {
    // Hero Elements Fade In
    gsap.from(".leaders-hero-fade", {
      y: 40,
      opacity: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: "power4.out"
    });

    // Partner Cards entry
    gsap.from(".leader-card", {
      y: 50,
      opacity: 0,
      duration: 0.85,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".leaders-grid",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="pt-20 pb-24 min-h-dvh bg-slate-50">
      <section className="relative overflow-hidden bg-header-hero text-white py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-header-hero"></div>
          <img
            loading="lazy"
            decoding="async"
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=70&w=1400&auto=format&fit=crop"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-r from-header-hero via-header-hero/90 to-header-hero/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.9fr] items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-accent mb-6 leaders-hero-fade">
                <Users size={18} /> Leadership Team
              </div>
              <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-6 text-white drop-shadow-[0_16px_30px_rgba(0,0,0,0.35)] leaders-hero-fade">Meet the Partners of RAKS & Company</h1>
              <p className="max-w-2xl text-slate-200 leading-relaxed text-lg drop-shadow-[0_10px_20px_rgba(0,0,0,0.2)] leaders-hero-fade">
                Our partners have experience in audit & assurance, due diligence, and banking sector assignments and regulatory compliance.
              </p>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.75)]">
                <img
                  loading="lazy"
                  decoding="async"
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=70&w=1400&auto=format&fit=crop"
                  alt="Executive team meeting"
                  className="w-full h-full aspect-[5/5] object-cover"
                />
              </div>

              {/* <div className="absolute bottom-0 left-1/2 w-[calc(100%-2rem)] -translate-x-1/4 translate-y-1/10 rounded-[2rem] border border-white/10 bg-white/95 p-6 shadow-2xl backdrop-blur-xl">
                <div className="mb-4">
                  <span className="text-sm uppercase tracking-[0.35em] text-accent font-semibold">Team snapshot</span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-950/95 p-5">
                    <h2 className="text-4xl font-serif text-white">2</h2>
                    <p className="text-slate-300 mt-2">Partners leading our advisory and compliance practice.</p>
                  </div>
                  <div className="rounded-3xl bg-slate-950/95 p-5">
                    <h2 className="text-4xl font-serif text-white">15+</h2>
                    <p className="text-slate-300 mt-2">Years of combined expertise in audit, risk and banking assignments.</p>
                  </div>
                  <div className="rounded-3xl bg-slate-950/95 p-5 sm:col-span-2">
                    <h2 className="text-4xl font-serif text-white">100+</h2>
                    <p className="text-slate-300 mt-2">Engagements delivered for regulated businesses across financial services.</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 mt-10">
        <section className="grid gap-8 lg:grid-cols-2 leaders-grid">
          {partners.map((partner) => (
            <div key={partner.name} className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft leader-card">
              <div className="absolute right-0 top-0 h-full w-24 bg-accent/10" />
              <div className="relative p-10 md:p-12">
                <span className="text-accent uppercase tracking-[0.35em] text-xs font-semibold">{partner.title}</span>
                <h2 className="text-3xl font-serif text-primary mt-4 mb-5">{partner.name}</h2>
                <p className="text-slate-600 leading-relaxed mb-4 text-justify">{partner.bio}</p>
                <p className="text-slate-600 leading-relaxed text-justify">{partner.bio2}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {partner.specialties && partner.specialties.map((specialty, index) => (
                    <span key={index} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                      {specialty}
                    </span>
                  ))}
                  {/* <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">Audit & Assurance</span>
                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">Regulatory Compliance</span>
                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">Banking Sector</span> */}
                </div>
              </div>
            </div>
          ))}
        </section>
        <div className="grid gap-8 lg:grid-cols-2  my-12">
          <div className="rounded-[2rem] bg-white border border-slate-200 p-10 shadow-soft">
            <span className="text-accent uppercase tracking-widest text-xs font-semibold mb-3 inline-block">Our approach</span>
            <h2 className="text-4xl font-serif text-primary mb-6">How our leadership makes a difference</h2>
            <p className="text-slate-600 leading-relaxed text-justify">
              We build advisory relationships on trust, professionalism and outcome-oriented thinking. Every assignment is approached with a balance of technical rigour and commercial focus, ensuring clients receive clear guidance that supports meaningful business decisions.
            </p>
          </div>
          <div className="grid gap-4">
            {leadershipPrinciples.map((item) => (
              <div key={item.title} className="rounded-[2rem] bg-white border border-slate-200 p-8 shadow-soft flex items-center">
                <h3 className="text-xl font-semibold text-primary ">{item.title}</h3>
                {/* <p className="text-slate-600 leading-relaxed">{item.description}</p> */}
              </div>
            ))}
          </div>
        </div>


        <section className="mt-12 rounded-[2rem] bg-white border border-slate-200 p-10 shadow-soft">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="text-accent uppercase tracking-widest text-xs font-semibold">Industry Focused Experties</span>
              <h3 className="text-3xl font-serif text-primary mt-3">Delivering assurance, compliance and strategic advisory solutions</h3>
            </div>
            {/* <Link to="/contact" className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-dark">
              Speak with our leadership <ArrowRight size={18} />
            </Link> */}
          </div>

          <div className="grid gap-6 mt-8 sm:grid-cols-2 xl:grid-cols-4">
            {leadershipFocus.map((focus) => (
              <div key={focus} className="rounded-3xl bg-slate-50 p-6 border border-slate-200">
                <p className="text-slate-700 leading-relaxed">{focus}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16">
          <Cta />
        </div>
      </div>
    </div>
  );
}

export default Leadership;
