import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function PrivacyPolicy() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".policy-content", {
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
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-10 policy-content">Privacy Policy</h1>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft border border-slate-200/80 space-y-6 text-slate-700 leading-relaxed policy-content">
          <p>
            At RAKS & Company, Chartered Accountants, we are committed to protecting the privacy and confidentiality of all personal information shared with us through this website. This Privacy Policy explains how we collect, use and safeguard such information in accordance with applicable laws and professional standards.
          </p>

          <p>
            We collect only limited personal details that you voluntarily provide—such as your name, contact number, or email address—solely for the purpose of responding to your queries or facilitating communication regarding our professional services. No personal information is collected without your consent.
          </p>

          <p>
            We do not share, rent, or sell any personal data to third parties. Information may be disclosed only if required by law or regulatory authority. Reasonable technical and organizational measures are implemented to ensure that all information remains secure and protected against unauthorized access or misuse.
          </p>

          <p>
            This website may use basic cookies or analytics tools to improve functionality and understand visitor interactions in an anonymous manner. These do not capture any personally identifiable information unless you choose to provide it.
          </p>

          <p>
            By using this website, you consent to the collection and use of information in accordance with this Privacy Policy. RAKS & Company reserves the right to update this policy periodically without prior notice. Continued use of the website after such changes will signify your acceptance of the revised terms.
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

export default PrivacyPolicy;
