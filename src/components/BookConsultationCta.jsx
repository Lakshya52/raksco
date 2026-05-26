import React from 'react';
import { ArrowRight } from 'lucide-react';

function BookConsultationCta({ onBookClick }) {
  return (
    <section className="mt-16 w-full bg-primary text-white rounded-4xl overflow-hidden relative shadow-xl">
      <div
        className="absolute inset-0 z-0 opacity-30 dot-glow-animation"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.95) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute inset-0 z-[-1] bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.18),transparent_35%)] pointer-events-none"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-16 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-3xl">
          <span className="text-accent uppercase tracking-[0.35em] text-xs font-semibold mb-4 inline-block">
            Consultation
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-white">
            Ready to discuss your next financial move?
          </h2>
          <p className="text-slate-100 text-lg max-w-2xl leading-relaxed">
            Connect with our team for tailored advisory, compliance support, and accounting solutions designed for your business.
          </p>
        </div>

        <button
          type="button"
          onClick={onBookClick}
          className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-slate-100"
        >
          Consultation <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}

export default BookConsultationCta;
