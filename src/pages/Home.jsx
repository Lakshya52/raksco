import React, { useRef } from 'react';
import { Calculator, Briefcase, TrendingUp, ShieldCheck, CheckCircle2, ArrowRight, Building2, Factory, MonitorSmartphone, HeartPulse, Landmark, ShoppingCart, Shield, FileSearch, Users2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhyUs from '../components/WhyUs';
import Cta from '../components/Cta';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Hero Elements Intro Animation on load
    gsap.from(".hero-fade-in", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power4.out"
    });

    // Hero Background Parallax Scroll
    gsap.to(".hero-bg", {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });



    // About Section Animation (Split Layout)
    gsap.from(".about-img", {
      x: -40,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-section",
        start: "top bottom-=100",
        toggleActions: "play none none none"
      }
    });

    gsap.from(".about-content-el", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-content",
        start: "top bottom-=100",
        toggleActions: "play none none none"
      }
    });

    // Methodology Section Animation
    gsap.from(".method-content-el", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".method-content",
        start: "top bottom-=100",
        toggleActions: "play none none none"
      }
    });

    gsap.from(".method-item", {
      x: -30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".method-list",
        start: "top bottom-=100",
        toggleActions: "play none none none"
      }
    });

    gsap.from(".method-img", {
      x: 40,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".method-section",
        start: "top bottom-=100",
        toggleActions: "play none none none"
      }
    });

    // CTA Box Zoom-in Scroll
    gsap.from(".cta-container", {
      scale: 0.95,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cta-container",
        start: "top bottom-=50",
        toggleActions: "play none none none"
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-svh flex items-center pt-20 bg-primary text-white overflow-hidden hero-section">
        {/* Background Image with Parallax & Gradient Overlay */}
        <div
          className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-fixed hero-bg"
        >
          <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/90 to-primary/70"></div>
          <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-gold/20 rounded-full blur-[128px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-gold/10 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-12 md:py-16 2xl:py-20">
          <div className="max-w-4xl relative">
            <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-5 py-1.5 md:py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-xs md:text-sm font-semibold mb-6 2xl:mb-8 tracking-widest uppercase text-gold shadow-[0_0_20px_rgba(212,175,55,0.1)] hero-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
              </span>
              Chartered Accountants
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] 2xl:text-[5.5rem] font-serif text-white mb-6 2xl:mb-8 leading-[1.1] drop-shadow-2xl hero-fade-in">
              Financial Advisory <br className="hidden md:block" />& Compliance.
            </h1>

            <div className="border-l-4 border-gold/50 pl-4 md:pl-6 mb-8 2xl:mb-12 hero-fade-in">
              <p className="text-lg md:text-xl 2xl:text-2xl text-slate-300 max-w-2xl leading-relaxed font-light">
                Financial insights, tax compliance, and advisory for regulated businesses. Supporting your work with clear professional guidance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-start hero-fade-in">
              <Link to="/services" className="group relative inline-flex items-center justify-center gap-2 md:gap-3 bg-gold hover:bg-gold-dark text-primary px-6 md:px-8 py-3 md:py-4 rounded font-bold text-base md:text-lg transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] hover:-translate-y-1">
                Our Services
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-6 md:px-8 py-3 md:py-4 rounded font-bold text-base md:text-lg transition-all duration-300 hover:-translate-y-1">
                Contact Us
              </Link>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/50 animate-bounce hidden md:flex">
          <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
          <div className="w-px h-8 bg-linear-to-b from-white/50 to-transparent"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl mb-6">Comprehensive Financial Solutions</h2>
            <p className="text-lg text-slate-600">We provide a full spectrum of accounting, tax, and advisory services designed to meet the complex needs of modern enterprises.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-soft border border-slate-100 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-0 bg-gold transition-all duration-300 group-hover:h-full"></div>
              <div className="w-14 h-14 bg-gold/10 text-gold rounded-xl flex items-center justify-center mb-6">
                <Calculator size={28} />
              </div>
              <h3 className="text-xl mb-4 font-serif">Tax Advisory & Compliance</h3>
              <p className="text-slate-500 mb-6 line-clamp-3">Strategic tax planning, corporate tax returns, and international tax structuring to optimize your liabilities and ensure total compliance.</p>
              <Link to="/services" className="text-primary font-semibold flex items-center gap-2 group-hover:text-gold transition-colors">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-soft border border-slate-100 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-0 bg-gold transition-all duration-300 group-hover:h-full"></div>
              <div className="w-14 h-14 bg-gold/10 text-gold rounded-xl flex items-center justify-center mb-6">
                <Briefcase size={28} />
              </div>
              <h3 className="text-xl mb-4 font-serif">Audit & Assurance</h3>
              <p className="text-slate-500 mb-6 line-clamp-3">Rigorous statutory and internal audits that provide deep insights, mitigate risks, and build stakeholder trust in your financial reporting.</p>
              <Link to="/services" className="text-primary font-semibold flex items-center gap-2 group-hover:text-gold transition-colors">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-soft border border-slate-100 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-0 bg-gold transition-all duration-300 group-hover:h-full"></div>
              <div className="w-14 h-14 bg-gold/10 text-gold rounded-xl flex items-center justify-center mb-6">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-xl mb-4 font-serif">Financial Advisory</h3>
              <p className="text-slate-500 mb-6 line-clamp-3">Mergers and acquisitions, business valuation, and capital restructuring services to drive your strategic growth initiatives.</p>
              <Link to="/services" className="text-primary font-semibold flex items-center gap-2 group-hover:text-gold transition-colors">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-soft border border-slate-100 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-0 bg-gold transition-all duration-300 group-hover:h-full"></div>
              <div className="w-14 h-14 bg-gold/10 text-gold rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl mb-4 font-serif">Risk Management</h3>
              <p className="text-slate-500 mb-6 line-clamp-3">Identifying, evaluating, and mitigating operational and financial risks to safeguard your enterprise's future.</p>
              <Link to="/services" className="text-primary font-semibold flex items-center gap-2 group-hover:text-gold transition-colors">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white about-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative about-img">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
                alt="Financial charts and desk"
                className="rounded-2xl shadow-soft w-full"
              />
            </div>

            <div className="about-content">
              <span className="text-gold font-semibold tracking-widest uppercase text-sm mb-4 block about-content-el">Firm Overview</span>
              <h2 className="text-4xl md:text-5xl mb-6 about-content-el">Professional Services with Integrity and Ethics</h2>
              <div className="space-y-4 text-lg text-slate-600 mb-8 about-content-el">
                <p>
                  At RAKS & Company, we provide professional services in the fields of auditing, taxation, and corporate advisory.
                </p>
                <p>
                  Our team of Chartered Accountants is dedicated to maintaining the highest level of professional ethics, delivering services in accordance with statutory requirements.
                </p>
              </div>

              <ul className="space-y-4 about-content-el">
                <li className="flex items-center gap-4 text-slate-800 font-medium">
                  <div className="bg-gold/10 p-1.5 rounded-full text-gold">
                    <CheckCircle2 size={20} />
                  </div>
                  <span>Adherence to ICAI guidelines and regulations</span>
                </li>
                <li className="flex items-center gap-4 text-slate-800 font-medium">
                  <div className="bg-gold/10 p-1.5 rounded-full text-gold">
                    <CheckCircle2 size={20} />
                  </div>
                  <span>Professional services in accounting and taxation</span>
                </li>
                <li className="flex items-center gap-4 text-slate-800 font-medium">
                  <div className="bg-gold/10 p-1.5 rounded-full text-gold">
                    <CheckCircle2 size={20} />
                  </div>
                  <span>Commitment to ethics and client confidentiality</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WhyUs />

      {/* Industries Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold tracking-widest uppercase text-sm mb-4 block">Industries</span>
            <h2 className="text-4xl md:text-5xl mb-6">Sectors We Serve</h2>
            <p className="text-lg text-slate-600">Providing specialized professional services tailored to the unique regulatory and financial requirements of various industries.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: <Building2 size={24} />, name: "Real Estate" },
              { icon: <Factory size={24} />, name: "Manufacturing" },
              { icon: <MonitorSmartphone size={24} />, name: "Technology" },
              { icon: <HeartPulse size={24} />, name: "Healthcare" },
              { icon: <Landmark size={24} />, name: "Financial" },
              { icon: <ShoppingCart size={24} />, name: "Retail" }
            ].map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                  {industry.icon}
                </div>
                <h3 className="font-semibold text-slate-800 text-sm">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-white border-t border-slate-100 method-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="method-content">
              <span className="text-gold font-semibold tracking-widest uppercase text-sm mb-4 block method-content-el">Methodology</span>
              <h2 className="text-4xl md:text-5xl mb-6 method-content-el">Our Professional Approach</h2>
              <div className="space-y-4 text-lg text-slate-600 mb-8 method-content-el">
                <p>
                  We are committed to delivering services with the highest degree of professional skepticism, independence, and objectivity.
                </p>
              </div>

              <div className="space-y-6 method-list">
                <div className="flex gap-4 method-item">
                  <div className="w-12 h-12 bg-gold/10 text-gold rounded-xl flex items-center justify-center shrink-0">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-primary mb-2">Ethical Standards</h4>
                    <p className="text-slate-600">Strict adherence to the Code of Ethics issued by the Institute of Chartered Accountants of India.</p>
                  </div>
                </div>
                <div className="flex gap-4 method-item">
                  <div className="w-12 h-12 bg-gold/10 text-gold rounded-xl flex items-center justify-center shrink-0">
                    <FileSearch size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-primary mb-2">Rigorous Analysis</h4>
                    <p className="text-slate-600">Thorough examination of financial data to ensure accurate compliance and reporting.</p>
                  </div>
                </div>
                <div className="flex gap-4 method-item">
                  <div className="w-12 h-12 bg-gold/10 text-gold rounded-xl flex items-center justify-center shrink-0">
                    <Users2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-primary mb-2">Clear Communication</h4>
                    <p className="text-slate-600">Timely and professional correspondence regarding regulatory updates and compliance requirements.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative method-img">
              <div className="absolute inset-0 bg-gold/10 rounded-2xl transform translate-x-4 translate-y-4"></div>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                alt="Professional desk environment"
                className="rounded-2xl shadow-lg relative z-10 w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 mb-10 cta-container" >
        <Cta />
      </div>
      {/* CTA Section */}
      {/* <section className="py-24 bg-primary text-white relative text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl text-white mb-6">Professional Enquiries</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            For professional consultations and service inquiries, please reach out to our office.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded font-semibold text-lg hover:bg-gold transition-colors duration-300 shadow-xl hover:-translate-y-1 transform">
            Contact Us
          </Link>
        </div>
      </section> */}

    </div>
  );
}

export default Home;
