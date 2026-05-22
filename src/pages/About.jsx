import React from 'react';
import { Target, Lightbulb, Shield, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Cta from '../components/Cta';

function About() {
  return (
    <div className="pt-24 pb-24 min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-primary py-24 text-white mt-[-6rem] pt-[12rem] mb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 bg-gold/20 text-gold border border-gold/50 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
            Who We Are
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">About <span className="text-gold">RAKS & Company</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A firm of Chartered Accountants dedicated to providing professional services with integrity and ethical standards.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            {/* <span className="text-gold font-semibold tracking-widest uppercase text-sm mb-4 block">About Us</span> */}
            {/* <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Professionalism, Ethics, and Integrity</h2> */}
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                RAKS & CO. is a contemporary Chartered Accountancy firm focused on delivering specialized assurance, audit, compliance, and advisory solutions with a strong emphasis on the banking and financial services sector.
              </p>
              <p>
                Founded with the objective of combining professional rigor with sector-specific expertise, the firm is strategically positioned to undertake diversified banking assignments including stock audits, revenue audits, credit audits, concurrent audits, forensic reviews, and Information Systems (IS) audits. Alongside traditional assurance services, the firm is also actively building capabilities in sustainability assurance, ESG compliance reviews, and green finance advisory aligned with evolving regulatory and international frameworks.
              </p>
              <p>
                The firm operates with a dedicated team of qualified professionals and domain specialists capable of handling assignments involving financial scrutiny, regulatory compliance, operational assessment, and investigative procedures across varied industries.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gold/10 rounded-2xl transform translate-x-4 translate-y-4"></div>
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
              alt="Professional office setup"
              className="rounded-2xl shadow-lg relative z-10 w-full object-cover h-[500px]"
            />
          </div>
        </div>

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

        <section className="grid gap-8 lg:grid-cols-3 mb-24">
          <div className="bg-white rounded-[2rem] p-10 shadow-soft border border-slate-200">
            <span className="text-gold font-semibold uppercase tracking-[0.2em] text-sm mb-4 block">What We Stand For</span>
            <h3 className="text-2xl font-serif mb-4">Focused Industry Expertise</h3>
            <p className="text-slate-300 leading-relaxed">
              We concentrate on banking, finance, and risk-oriented engagements to deliver deeper insights and more relevant assurance outcomes.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-10 shadow-soft border border-slate-200">
            <span className="text-gold font-semibold uppercase tracking-[0.2em] text-sm mb-4 block">How We Deliver</span>
            <h3 className="text-2xl font-serif mb-4">Professional, Process-Driven Execution</h3>
            <p className="text-slate-600 leading-relaxed">
              Our structured review methodology, strong documentation practices, and rigorous quality checks ensure clarity and consistency across every assignment.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-10 shadow-soft border border-slate-200">
            <span className="text-gold font-semibold uppercase tracking-[0.2em] text-sm mb-4 block">Our Engagement Focus</span>
            <h3 className="text-2xl font-serif mb-4">Advisory for evolving regulatory requirements</h3>
            <p className="text-slate-600 leading-relaxed">
              We combine experience in audits, investigations, and ESG advisory to support clients through changing compliance expectations.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold font-semibold tracking-widest uppercase text-sm mb-4 block">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary">The Principles That Guide Us</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-soft border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-serif text-primary mb-3">Precision</h3>
              <p className="text-slate-600 text-sm">Exactitude in every calculation, filing, and strategy we develop.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-soft border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-serif text-primary mb-3">Integrity</h3>
              <p className="text-slate-600 text-sm">Uncompromising ethical standards and complete transparency.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-soft border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-xl font-serif text-primary mb-3">Innovation</h3>
              <p className="text-slate-600 text-sm">Applying modern technology and agile thinking to traditional finance.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-soft border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-serif text-primary mb-3">Partnership</h3>
              <p className="text-slate-600 text-sm">Working alongside you as a dedicated extension of your team.</p>
            </div>
          </div>
        </div>

        <Cta />
        
      </div>
    </div>
  );
}

export default About;
