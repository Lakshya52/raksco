import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function TermsAndConditions() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".terms-content", {
      y: 40,
      opacity: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: "power4.out"
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-10 terms-content">Terms & Conditions</h1>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft border border-slate-200/80 space-y-6 text-slate-700 leading-relaxed terms-content">
          <p>
            This website is owned and maintained by RAKS & Company, Chartered Accountants. By accessing or using this site, you agree to these Terms and Conditions and acknowledge that the content is for general informational purposes only, not constituting solicitation of work.
          </p>

          <p>
            All information presented here is intended to provide general guidance on accounting, taxation and regulatory matters. While care is taken to ensure accuracy, RAKS & Company makes no warranties regarding completeness or reliability and disclaims any liability for loss or damage arising from reliance on this information.
          </p>

          <p>
            This website may contain links to external sites provided for user convenience. RAKS & Company does not endorse or control such sites and is not responsible for their content, accuracy, or availability. Users should verify all information independently before reliance.
          </p>

          <p>
            By continuing to use this website, you agree to comply with all applicable laws and these Terms and Conditions. RAKS & Company reserves the right to update or modify these terms at any time without prior notice. Continued use implies acceptance of any such changes.
          </p>

          <div className="pt-8 mt-8 border-t border-slate-100 text-sm text-slate-500 font-medium">
            <p>&copy; {new Date().getFullYear()} RAKS & Company, Chartered Accountants.</p>
            <p>All rights reserved. Designed and maintained in accordance with ICAI website guidelines.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;
