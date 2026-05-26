import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function LegalDisclaimer() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".disclaimer-content", {
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
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-10 disclaimer-content">Legal Disclaimer</h1>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft border border-slate-200/80 space-y-6 text-slate-700 leading-relaxed disclaimer-content">
          <p>
            The information provided on this website is intended solely for general informational and knowledge-sharing purposes. RAKS & Company, Chartered Accountants, does not intend this website or its contents to be a source of advertising, solicitation, or any form of inducement for professional work.
          </p>

          <p>
            This website has been prepared and maintained in compliance with the Guidelines for creating websites issued by the Institute of Chartered Accountants of India (ICAI).
          </p>

          <p>
            No material or information on this website should be construed as a source of advertising, solicitation, or any form of inducement. Users are advised not to act upon any information contained herein without obtaining specific professional guidance appropriate to their individual circumstances.
          </p>

          <p>
            While every effort has been made to ensure that the information provided is accurate and up to date, RAKS & Company makes no representations or warranties, express or implied, about the completeness, reliability, or accuracy of the information. The firm disclaims any liability for any loss or damage, whether direct or indirect, arising from the use of this website or reliance on its contents.
          </p>

          <p>
            This website may include links to external websites or resources that are provided only for informational convenience. RAKS & Company does not control, endorse, or assume responsibility for the content, accuracy, or availability of any such external websites.
          </p>

          <p>
            By accessing this website, you acknowledge that no client–professional relationship is created merely by visiting this site or communicating through it. Use of this website constitutes acceptance of this disclaimer.
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

export default LegalDisclaimer;
