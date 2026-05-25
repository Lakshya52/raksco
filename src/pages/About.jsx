import React, { useRef } from 'react';
import { Target, Lightbulb, Shield, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Cta from '../components/Cta';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Hero elements fade in
    gsap.from(".about-hero-fade", {
      y: 40,
      opacity: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: "power4.out"
    });

    // Story Text & Image Animation
    gsap.from(".story-text-block", {
      x: -40,
      opacity: 0,
      duration: 0.85,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".story-section",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    gsap.from(".story-img", {
      x: 40,
      opacity: 0,
      duration: 0.85,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".story-section",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    // Vision box animation
    gsap.from(".vision-container-el", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".vision-container",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });

    // Three feature cards stagger
    gsap.from(".feature-card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".three-features-grid",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    // Core values header
    gsap.from(".principles-header-el", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".principles-header",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });

    // Core values cards stagger
    gsap.from(".value-card", {
      scale: 0.9,
      opacity: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: ".values-grid",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="pt-24 pb-24 min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-primary py-24 text-white mt-[-6rem] pt-[12rem] mb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1556761175-4b46a572b786?q=70&w=1400&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 bg-accent/20 text-accent border border-accent/50 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase about-hero-fade">
            Who We Are
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6 about-hero-fade">About <span className="text-accent">RAKS & Company</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto about-hero-fade">
            A firm of Chartered Accountants dedicated to providing professional services with integrity and ethical standards.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24 story-section">
          <div className="story-text-block">
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed text-justify">
              <p>
                RAKS & Company is a contemporary Chartered Accountancy firm focused on delivering specialized assurance, audit, compliance, and advisory solutions with a strong emphasis on the banking and financial services sector.
              </p>
              <p>
                Founded with the objective of combining professional rigor with sector-specific expertise, the firm is strategically positioned to undertake diversified banking assignments including stock audits, revenue audits, credit audits, concurrent audits, forensic reviews, and Information Systems (IS) audits. Alongside traditional assurance services, the firm is also actively building capabilities in sustainability assurance, ESG compliance reviews, and green finance advisory aligned with evolving regulatory and international frameworks.
              </p>
              <p>
                The firm operates with a dedicated team of qualified professionals and domain specialists capable of handling assignments involving financial scrutiny, regulatory compliance, operational assessment, and investigative procedures across varied industries.
              </p>
            </div>
          </div>
          <div className="relative story-img">
            <div className="absolute inset-0 bg-accent/10 rounded-2xl transform translate-x-4 translate-y-4"></div>
            <img
              loading="lazy"
              decoding="async"
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=70&w=1200&auto=format&fit=crop"
              alt="Professional office setup"
              sizes="(max-width: 768px) 100vw, 1200px"
              className="rounded-2xl shadow-lg relative z-10 w-full object-cover h-[500px]"
            />
          </div>
        </div>

        {/* Vision Section */}
        <section className="mb-24 bg-white rounded-[2rem] border border-slate-200 shadow-soft p-10 md:p-14 vision-container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 block vision-container-el">Our Vision</span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 vision-container-el">A purpose-driven, professional chartered accountancy firm</h2>
            <p className="text-lg text-slate-600 leading-relaxed vision-container-el ">
              To build a professionally driven Chartered Accountancy firm recognized for specialized banking audits, investigative assurance services, and sustainability-focused advisory solutions while maintaining the highest standards of integrity, independence, and professional excellence.
            </p>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-3 mb-24 three-features-grid">
          <div className="bg-white rounded-[2rem] p-10 shadow-soft border border-slate-200 feature-card">
            <span className="text-accent font-semibold uppercase tracking-[0.2em] text-sm mb-4 block">What We Stand For</span>
            <h3 className="text-2xl font-serif mb-4">The Focused Industry Expertise</h3>
            <p className="text-slate-600 leading-relaxed text-justify">
              We concentrate on banking, finance, and risk-oriented engagements to deliver deeper insights and more relevant assurance outcomes.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-10 shadow-soft border border-slate-200 feature-card">
            <span className="text-accent font-semibold uppercase tracking-[0.2em] text-sm mb-4 block">How We Deliver</span>
            <h3 className="text-2xl font-serif mb-4">Professional, Process-Driven Execution</h3>
            <p className="text-slate-600 leading-relaxed text-justify">
              Our structured review methodology, strong documentation practices, and rigorous quality checks ensure clarity and consistency across every assignment.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-10 shadow-soft border border-slate-200 feature-card">
            <span className="text-accent font-semibold uppercase tracking-[0.2em] text-sm mb-4 block">Our Engagement Focus</span>
            <h3 className="text-2xl font-serif mb-4">Advisory for evolving regulatory requirements</h3>
            <p className="text-slate-600 leading-relaxed text-justify">
              We combine experience in audits, investigations, and ESG advisory to support clients through changing compliance expectations.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16 principles-header">
            <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 block principles-header-el">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary principles-header-el">The Principles That Guide Us</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 values-grid">
            <div className="bg-white p-8 rounded-xl shadow-soft border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300 value-card">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-serif text-primary mb-3">Precision</h3>
              <p className="text-slate-600 text-lg">Exactitude in every calculation, filing, and strategy we develop.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-soft border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300 value-card">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-serif text-primary mb-3">Integrity</h3>
              <p className="text-slate-600 text-lg">Uncompromising ethical standards and complete transparency.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-soft border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300 value-card">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-2xl font-serif text-primary mb-3">Innovation</h3>
              <p className="text-slate-600 text-lg">Applying modern technology and agile thinking to traditional finance.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-soft border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300 value-card">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-serif text-primary mb-3">Partnership</h3>
              <p className="text-slate-600 text-lg">Working alongside you as a dedicated extension of your team.</p>
            </div>
          </div>
        </div>

        <Cta />

      </div>
    </div>
  );
}

export default About;
