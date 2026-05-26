import React from 'react';
import { Building2, Globe, ShieldCheck, Eye, Briefcase, FileText, Layers } from 'lucide-react';

export const coreServices = [
  {
    slug: 'banking-financial-sector-assignments',
    icon: <Building2 size={32} />,
    title: 'Banking & Financial Sector',
    description: 'Specialized support for banks, NBFCs, financial institutions, and regulated entities across audits, compliance and risk review.',
    tagline: 'Securing institutional integrity and regulatory compliance through expert oversight and credit control.',
    longDescription: 'Provision of audit, review, and compliance support services for banks, NBFCs, and financial sector entities relating to credit processes, operational controls, and regulatory requirements. The scope includes examination of financial records, review of operational procedures, verification of documentation, and support relating to statutory and regulatory reporting requirements.\n\nThe services are carried out with a structured approach towards transaction review, documentation assessment, internal control evaluation, and compliance monitoring in accordance with applicable regulatory frameworks.',
    atAGlance: {
      targetClients: ['Statutory & Private Banks', 'Non-Banking Financial Companies (NBFCs)', 'Microfinance Institutions', 'Asset Reconstruction Companies (ARCs)'],
      frameworks: ['RBI Master Directions', 'IRDAI Guidelines', 'FEMA Directives', 'Banking Regulation Act, 1949'],
      approach: 'Risk-based, analytical transaction verification paired with rigorous credit governance review.'
    },
    details: [
      'Stock audits, credit audits, and revenue audits',
      'Concurrent audits and statutory reporting support',
      'Information Systems (IS) audits for financial workflows',
      'Regulatory compliance reviews under RBI, IRDAI, and NBFC frameworks'
    ],
    detailedOfferings: [
      {
        title: 'Stock, Credit & Revenue Audits',
        description: 'Review of stock statements, drawing power calculations, borrower records, security documentation, and related financial information for assessment of reporting consistency and compliance with sanction terms.'
      },
      {
        title: 'Concurrent & Statutory Audits',
        description: 'Examination of selected transactions, operational procedures, branch-level controls, and reporting processes to support monitoring and compliance requirements.'
      },
      {
        title: 'Information Systems (IS) Audit',
        description: 'Review of financial systems, access controls, transaction workflows, and information security processes within banking and financial operations.'
      },
      {
        title: 'Regulatory Compliance Reviews',
        description: 'Review support relating to RBI directions, IRDAI regulations, FEMA provisions, asset classification norms, provisioning requirements, and related regulatory reporting processes.'
      }
    ],
    processTimeline: [
      {
        phase: 'Phase 01',
        title: 'Pre-Audit Assessment',
        description: 'Scope definition, gathering loan policy documents, and establishing parameters with the lending institution.'
      },
      {
        phase: 'Phase 02',
        title: 'Field Verification & Data Mining',
        description: 'Physical inspection of assets/inventories, core database mining, and sample testing of high-value borrower accounts.'
      },
      {
        phase: 'Phase 03',
        title: 'Risk Identification & Reconcilement',
        description: 'Identifying revenue leakages, uncollateralized exposures, and structural violations of credit terms.'
      },
      {
        phase: 'Phase 04',
        title: 'Executive Reporting',
        description: 'Submitting actionable credit audit and concurrent audit reports to branch management and board committees.'
      }
    ],
    faqs: [
      {
        question: 'Why are concurrent audits vital for financial branches?',
        answer: 'Concurrent audits act as an early warning system. By reviewing transactions as they occur, they detect irregularities, prevent frauds, verify document completeness, and ensure absolute compliance with credit policies before risks escalate.'
      },
      {
        question: 'What frameworks govern your banking audits?',
        answer: 'Our reviews strictly align with the latest Reserve Bank of India (RBI) master circulars, ICAI Standards on Auditing (SAs), and specialized guidelines governing NBFCs and primary urban cooperative banks.'
      },
      {
        question: 'How do you handle stock audits for highly technical assets?',
        answer: 'Our professional team relies on technical checklists, specialized third-party valuations where required, physical stock counts, and invoice-to-ledger cross-reconciliations to establish realistic valuations.'
      }
    ]
  },
  {
    slug: 'esg-sustainability-green-finance-advisory',
    icon: <Globe size={32} />,
    title: 'ESG, Sustainability & Green Finance Advisory',
    description: 'Advisory services designed to help organizations align with ESG best practices, sustainability reporting, and green finance frameworks.',
    tagline: 'Positioning your business for the green economy through structured ESG strategies and reliable disclosure assurance.',
    longDescription: 'Provision of advisory and reporting support services relating to Environmental, Social, and Governance (ESG) practices, sustainability reporting frameworks, and regulatory disclosure requirements. The scope includes assistance in sustainability-related reporting processes, ESG data review, policy documentation, framework alignment, and support relating to Business Responsibility and Sustainability Reporting (BRSR) requirements.\n\nThe services are carried out with reference to applicable regulatory guidelines, reporting standards, and sustainability disclosure frameworks relevant to Indian business and financial reporting environments.',
    atAGlance: {
      targetClients: ['Listed Public Entities', 'Infrastructure Developers', 'Export-oriented Enterprises', 'Renewable Energy Ventures'],
      frameworks: ['SEBI BRSR Framework', 'National Guidelines on Responsible Business Conduct (NGBRC)', 'Sustainability Reporting Standards Board (SRSB) Guidance', 'ESG Reporting & Disclosure Frameworks'],
      approach: 'Materiality-first analysis aligned with global standards and regulatory expectations.'
    },
    details: [
      'ESG and sustainability reporting support',
      'BRSR and BRSR Core reporting assistance',
      'Sustainability policy and framework documentation',
      'ESG data compilation and disclosure review',
      'Green finance and sustainability-related advisory support'
    ],
    detailedOfferings: [
      {
        title: 'ESG & Sustainability Reporting Support',
        description: 'Assistance in preparation, compilation, and review of sustainability-related disclosures covering environmental, social, and governance parameters in accordance with applicable reporting frameworks and disclosure requirements.'
      },
      {
        title: 'BRSR & Regulatory Disclosure Assistance',
        description: 'Support relating to Business Responsibility and Sustainability Reporting (BRSR), BRSR Core disclosures, ESG reporting processes, and related documentation requirements under applicable SEBI regulations.'
      },
      {
        title: 'ESG Data Review & Documentation',
        description: 'Review of ESG-related information, sustainability metrics, supporting records, internal documentation, and reporting processes for consistency and disclosure readiness.'
      },
      {
        title: 'Sustainability Framework & Green Finance Advisory',
        description: 'Advisory support relating to sustainability frameworks, ESG governance processes, climate-related reporting considerations, sustainable finance documentation, and responsible business reporting practices.'
      }
    ],
    processTimeline: [
      {
        phase: 'Phase 01',
        title: 'ESG Diagnosis & Gap Study',
        description: 'Assessing your current corporate policies against national and international ESG standards to spot compliance gaps.'
      },
      {
        phase: 'Phase 02',
        title: 'Materiality Mapping',
        description: 'Engaging internal and external stakeholders to determine which ESG topics represent critical risks or growth channels.'
      },
      {
        phase: 'Phase 03',
        title: 'Data System Integration',
        description: 'Setting up continuous data capture methods for non-financial metrics (energy usage, waste, diversity indicators).'
      },
      {
        phase: 'Phase 04',
        title: 'Reporting & Assurance',
        description: 'Drafting high-quality BRSR reports and offering independent third-party assurance for audit transparency.'
      }
    ],
    faqs: [
      {
        question: 'Who is required to file BRSR in India?',
        answer: 'Currently, the top 1,000 listed companies by market capitalization on Indian stock exchanges are mandatorily required to submit the Business Responsibility and Sustainability Report (BRSR).'
      },
      {
        question: 'How does ESG advisory help in raising capital?',
        answer: 'Global investors and leading commercial banks offer better credit terms, lower interest rates, and specialized green funds to businesses with highly rated ESG disclosures and clear carbon-reduction pathways.'
      },
      {
        question: 'What is the role of Independent ESG Assurance?',
        answer: 'Independent ESG assurance verifies your reported green claims, eliminates greenwashing risks, and provides comfort to institutional lenders and equity funds.'
      }
    ]
  },
  {
    slug: 'assurance-advisory-services',
    icon: <ShieldCheck size={32} />,
    title: 'Assurance & Advisory Services',
    description: 'Assurance services backed by practical advisory to improve controls, governance and performance for growing businesses.',
    tagline: 'Driving corporate transparency and system resilience with strategic, independent assurance.',
    longDescription: 'Provision of assurance, audit, and advisory support services relating to financial reporting, internal controls, regulatory compliance, and governance processes. The scope includes examination of financial records, review of operational procedures, evaluation of internal control systems, and support relating to statutory and compliance requirements.\n\nThe services are carried out through structured review procedures, documentation assessment, control evaluation, and reporting processes in accordance with applicable regulatory and professional frameworks.',
    atAGlance: {
      targetClients: ['Corporates & Private Limited Companies', 'Partnerships & LLPs', 'Stressed Assets & Turnarounds', 'Joint Ventures & Subsidiaries'],
      frameworks: ['Companies Act, 2013', 'Standards on Auditing (SA)', 'Internal Financial Controls (IFC) Framework', 'Applicable Regulatory & Compliance Requirements'],
      approach: 'Technology-enabled internal review emphasizing process controls, statutory compliance, and financial accuracy.'
    },
    details: [
      'Statutory audits and internal audits',
      'Compliance reviews and governance assessments',
      'Due diligence and forensic review support',
      'Internal control evaluation and risk assessment',
      'Financial and operational process reviews'
    ],
    detailedOfferings: [
      {
        title: 'Statutory & Internal Audits',
        description: 'Review and examination of financial records, accounting processes, supporting documentation, and operational controls for reporting and compliance purposes in accordance with applicable statutory requirements.'
      },
      {
        title: 'Compliance & Governance Reviews',
        description: 'Assessment of compliance processes, governance structures, regulatory documentation, and operational procedures relating to applicable laws, rules, and reporting requirements.'
      },
      {
        title: 'Due Diligence & Forensic Review Support',
        description: 'Review of financial and operational information, transaction records, supporting documents, and related data for assessment and reporting purposes during business reviews, investigations, or transaction-related evaluations.'
      },
      {
        title: 'Internal Controls & Risk Assessment',
        description: 'Evaluation of internal control systems, workflow procedures, authorization processes, and reporting mechanisms to support risk identification and process review.'
      }
    ],
    processTimeline: [
      {
        phase: 'Phase 01',
        title: 'Risk-Based Planning',
        description: 'Studying your business sector, operations, and IT environments to design a custom audit risk roadmap.'
      },
      {
        phase: 'Phase 02',
        title: 'Walkthroughs & Test of Controls',
        description: 'Verifying if internal controls (purchase cycles, payroll, invoice clearances) are operating effectively in reality.'
      },
      {
        phase: 'Phase 03',
        title: 'Substantive Testing & Analytics',
        description: 'Applying advanced ledger analysis and physical verifications to check for ledger misstatements.'
      },
      {
        phase: 'Phase 04',
        title: 'Synthesis & Reporting',
        description: 'Issuing the final audit opinion accompanied by a detailed Management Letter outlining process improvements.'
      }
    ],
    faqs: [
      {
        question: 'What is the value of an internal audit vs a statutory audit?',
        answer: 'While a statutory audit focuses strictly on financial truth and compliance with regulatory frameworks, an internal audit focuses on operational efficiency, control vulnerabilities, cost reductions, and internal risk mitigation.'
      },
      {
        question: 'How do you ensure audit quality?',
        answer: 'We adhere to the peer-reviewed auditing practices of the ICAI, deploy seasoned professionals, and employ robust independent reviews at key milestones before final reports are authorized.'
      },
      {
        question: 'Can you help implement Internal Financial Controls (IFC)?',
        answer: 'Yes, we map business processes, draft standard operating procedures (SOPs), establish control matrixes, and perform testing to ensure compliance with the Companies Act, 2013 requirements.'
      }
    ]
  },
  {
    slug: 'agency-for-specialized-monitoring',
    icon: <Eye size={32} />,
    title: 'Agency for Specialized Monitoring (ASM)',
    description: 'Independent monitoring and oversight services for lenders, investors, and institutions requiring structured supervision of financed projects, stressed assets, and operational performance.',
    tagline: 'Ensuring end-use of funds, operational progress, and portfolio protection through structured lender monitoring.',
    longDescription: 'Provision of monitoring and verification support services relating to project implementation, fund utilization, operational progress, and compliance with specified terms and conditions. The scope includes review of project records, site verification support, documentation assessment, monitoring of utilization processes, and reporting based on available records and information.\n\nThe services are carried out through structured monitoring procedures, review of supporting documentation, verification processes, and reporting mechanisms in accordance with applicable engagement requirements and regulatory frameworks.',
    atAGlance: {
      targetClients: ['Consortium Lenders & Public Sector Banks', 'Private Equity & Venture Debt Funds', 'Insolvency Professionals (CIRP)', 'Infrastructure & Real Estate Developers'],
      frameworks: ['Terms of Sanction & Approval Conditions', 'Project Monitoring & Reporting Requirements', 'Applicable Regulatory Guidelines', 'Internal Compliance & Documentation Frameworks'],
      approach: 'Rigorous transactional, bank-statement, and physical field auditing with dynamic, regular progress tracking.'
    },
    details: [
      'Fund utilization monitoring and reporting',
      'Project progress review and verification support',
      'Documentation and compliance monitoring',
      'Site visit coordination and status assessment',
      'Monitoring reports and operational review support'
    ],
    detailedOfferings: [
      {
        title: 'Fund Utilization Monitoring',
        description: 'Review of utilization records, supporting documents, financial information, and related project records for assessment of utilization status and reporting consistency.'
      },
      {
        title: 'Project Progress Verification',
        description: 'Monitoring support relating to project implementation status, milestone tracking, documentation review, and verification of operational progress based on available records and site observations.'
      },
      {
        title: 'Compliance & Documentation Review',
        description: 'Assessment of approvals, agreements, utilization records, statutory documents, and related compliance documentation for monitoring and reporting purposes.'
      },
      {
        title: 'Reporting & Monitoring Support',
        description: 'Preparation and compilation support for monitoring reports, utilization summaries, progress observations, and related reporting documentation as required under the engagement scope.'
      }
    ],
    processTimeline: [
      {
        phase: 'Phase 01',
        title: 'Framework Alignment',
        description: 'Studying sanction terms, understanding project structures, and establishing coordination protocols between borrower and consortium.'
      },
      {
        phase: 'Phase 02',
        title: 'Transactional Control Setup',
        description: 'Establishing regular access to cash ledger records, bank statements, sales invoices, and supplier payables.'
      },
      {
        phase: 'Phase 03',
        title: 'Ongoing Auditing & Inspections',
        description: 'Executing bi-weekly ledger reconciliations, field inspections, and trade creditor-debtor verification cycles.'
      },
      {
        phase: 'Phase 04',
        title: 'Consortium Advisory',
        description: 'Submitting monthly and quarterly ASM reports directly to the lead bank, highlighting key operational risks.'
      }
    ],
    faqs: [
      {
        question: 'Why are lenders adopting the ASM mechanism?',
        answer: 'Traditional audits are historical, whereas the ASM mechanism provides proactive monitoring. It ensures credit funds are utilized strictly for project development, preventing non-performing asset (NPA) slips.'
      },
      {
        question: 'What parameters are tested in EWS reports?',
        answer: 'We test dozens of indicators including capital diversion, transaction volumes, delayed sales realization, operational discrepancies, unpaid statutory dues, and changes in management patterns.'
      },
      {
        question: 'Is ASM applicable during the IBC restructuring process?',
        answer: 'Yes, ASM works directly with Resolution Professionals (RPs) to monitor running costs, manage working capital usage, and safeguard debtor-in-possession assets.'
      }
    ]
  },
];

export const otherServices = [
  {
    slug: 'business-advisory',
    icon: <Briefcase size={32} />,
    title: 'Business Advisory',
    description: 'Empowering businesses and individuals through robust financial and strategic solutions.',
    tagline: 'Translating business ideas into structured growth plans and market success.',
    longDescription: 'Provision of advisory and support services relating to business operations, financial planning, compliance processes, and strategic business management. The scope includes assistance relating to business structuring, financial analysis, operational review, regulatory support, and evaluation of business processes for reporting and decision-support purposes.\n\nThe services are carried out through structured review procedures, documentation assessment, financial evaluation, and process-oriented advisory support in accordance with applicable regulatory and business requirements.',
    atAGlance: {
      targetClients: ['Entrepreneurs & Startups', 'SMEs Seeking Capital Scaling', 'Family Businesses in Transition', 'Joint Ventures'],
      frameworks: ['Companies Act, 2013', 'Income Tax Act, 1961', 'GST Regulations', 'Applicable Business & Regulatory Requirements'],
      approach: 'Collaborative, forward-looking strategic advisory focused on legal soundness and financial scalability.'
    },
    details: [
      'Business setup and operational advisory support',
      'Financial planning and business analysis',
      'Risk assessment and process review',
      'Compliance support and regulatory assistance',
      'Management reporting and decision-support services'
    ],
    detailedOfferings: [
      {
        title: 'Business Setup & Structuring Support',
        description: 'Advisory support relating to business formation, operational structuring, registration processes, and related documentation requirements in accordance with applicable regulations.'
      },
      {
        title: 'Financial Planning & Business Analysis',
        description: 'Review of financial information, budgeting processes, cash flow analysis, and operational data to support financial planning and business assessment requirements.'
      },
      {
        title: 'Risk Assessment & Process Review',
        description: 'Evaluation of operational procedures, internal processes, and business control mechanisms for identification and review of process-related risks and reporting considerations.'
      },
      {
        title: 'Compliance & Management Support',
        description: 'Support relating to regulatory compliance processes, reporting requirements, management information review, and documentation assessment for operational and administrative purposes.'
      }
    ],
    processTimeline: [
      {
        phase: 'Phase 01',
        title: 'Strategic Consultation',
        description: 'Reviewing your commercial vision, capital structures, and timeline requirements.'
      },
      {
        phase: 'Phase 02',
        title: 'Feasibility & Analysis',
        description: 'Reviewing market metrics, legal restrictions, and tax implications of potential corporate structures.'
      },
      {
        phase: 'Phase 03',
        title: 'Execution & Incorporation',
        description: 'Filing incorporation applications, setting up registries, and establishing banking arrangements.'
      },
      {
        phase: 'Phase 04',
        title: 'System Setup & Advisory',
        description: 'Setting up accounting policies, internal control structures, and board reporting templates.'
      }
    ],
    faqs: [
      {
        question: 'When should a business transition from an LLP to a Private Limited Company?',
        answer: 'A transition is recommended when the business wants to raise venture capital, issue Employee Stock Options (ESOPs), or require highly structured ownership splits that are restricted in standard LLPs.'
      },
      {
        question: 'How do you support business valuations?',
        answer: 'We apply internationally recognized valuation methods (DCF, Relative Valuation, Net Asset Value) to provide realistic, legally defendable valuations for regulatory filings or investment deals.'
      }
    ]
  },
  {
    slug: 'regulatory-compliance-support',
    icon: <Layers size={32} />,
    title: 'Regulatory & Compliance Support',
    description: 'Secretarial compliances including company incorporation, statutory maintenance, and regulatory filings.',
    tagline: 'Achieving total regulatory alignment and corporate governance safety.',
    longDescription: 'Provision of regulatory and compliance support services relating to corporate filings, statutory documentation, regulatory registrations, and compliance management processes. The scope includes assistance relating to corporate compliance procedures, maintenance of statutory records, regulatory filings, and support under applicable legal and regulatory frameworks.\n\nThe services are carried out through structured documentation review, compliance monitoring, filing support, and process-oriented regulatory assistance in accordance with applicable statutory requirements.',
    atAGlance: {
      targetClients: ['Corporates & MNCs in India', 'FDI-funded Entities', 'Food, Trade & Import Ventures', 'Startups & Growing SMEs'],
      frameworks: ['Companies Act, 2013', 'FEMA Regulations', 'RBI Guidelines', 'Applicable Statutory & Regulatory Requirements'],
      approach: 'Proactive calendar-driven compliance tracking, precise document management, and direct regulatory filing support.'
    },
    details: [
      'Corporate and secretarial compliance support',
      'FEMA and RBI regulatory filing assistance',
      'Statutory registrations and license support',
      'Compliance monitoring and documentation review',
      'Regulatory reporting and filing processes'
    ],
    detailedOfferings: [
      {
        title: 'Corporate & Secretarial Compliance',
        description: 'Support relating to company incorporation procedures, maintenance of statutory registers, preparation of board and shareholder meeting documentation, and related corporate compliance processes.'
      },
      {
        title: 'FEMA & RBI Regulatory Support',
        description: 'Assistance relating to FEMA compliances, RBI reporting requirements, foreign investment documentation, cross-border transaction filings, and related regulatory procedures.'
      },
      {
        title: 'Licenses & Statutory Registrations',
        description: 'Support for obtaining, renewing, and maintaining statutory registrations, licenses, and sector-specific approvals including MSME, FSSAI, BIS, ISO-related documentation support, and related regulatory processes.'
      },
      {
        title: 'Compliance Monitoring & Reporting',
        description: 'Review and monitoring of statutory due dates, filing requirements, compliance documentation, and regulatory reporting processes to support timely compliance management.'
      }
    ],
    processTimeline: [
      {
        phase: 'Phase 01',
        title: 'Compliance Assessment',
        description: 'Auditing your historical compliance filings to identify any gaps, overdue reports, or potential liabilities.'
      },
      {
        phase: 'Phase 02',
        title: 'Calendar Formulation',
        description: 'Building a specialized compliance roadmap specific to your industry, corporate structure, and international operations.'
      },
      {
        phase: 'Phase 03',
        title: 'Execution & Maintenance',
        description: 'Managing board resolutions, preparing registers, drafting capital flow reports, and executing filings.'
      },
      {
        phase: 'Phase 04',
        title: 'Reporting & Board Assurance',
        description: 'Providing regular compliance status reports to management to confirm absolute corporate safety.'
      }
    ],
    faqs: [
      {
        question: 'What are the consequences of late ROC filings in India?',
        answer: 'Late ROC filings attract significant daily additional fees, potential disqualification of directors, and, in severe cases, structural strikes and legal action against the company.'
      },
      {
        question: 'What are the RBI reporting mandates for foreign investments?',
        answer: 'Companies receiving foreign funding must report the transaction via the single master form (SMF) on the RBI\'s FIRMS portal within 30 days of issuing shares to ensure FEMA compliance.'
      }
    ]
  },
  {
    slug: 'accounting-financial-reporting',
    icon: <FileText size={32} />,
    title: 'Accounting & Financial Reporting',
    description: 'Maintaining statutory-compliant financial records and reporting for operational clarity and regulatory confidence.',
    tagline: 'Ensuring financial clarity and accuracy in accounting for strategic, data-driven decisions.',
    longDescription: 'Provision of accounting and financial reporting support services relating to maintenance of books of accounts, preparation of financial statements, reconciliation processes, and compliance-related financial documentation. The scope includes support for accounting operations, financial reporting procedures, budgeting processes, and review of financial information in accordance with applicable regulatory and accounting frameworks.\n\nThe services are carried out through structured accounting procedures, documentation review, reconciliation processes, and reporting support using conventional and technology-enabled accounting systems.',
    atAGlance: {
      targetClients: ['MNC Subsidiaries', 'Growing Corporates & Businesses', 'E-commerce Brands & Retailers', 'Professional Service Firms'],
      frameworks: ['Accounting Standards (AS) / Ind AS', 'Companies Act, 2013', 'Income Tax Act, 1961', 'GST Regulations'],
      approach: 'Process-driven, cloud-integrated accounting emphasizing ledgers balance, tax-readiness, and operational reporting.'
    },
    details: [
      'Maintenance of books of accounts and financial records',
      'Preparation of financial statements and reporting support',
      'Payables, receivables, and reconciliation processes',
      'Budgeting and financial analysis support',
      'Cloud-based accounting and process automation support'
    ],
    detailedOfferings: [
      {
        title: 'Accounting & Bookkeeping Support',
        description: 'Maintenance and review of accounting records, journal entries, ledger management, and transaction classification to support financial reporting and record-keeping requirements.'
      },
      {
        title: 'Financial Statements & Reporting',
        description: 'Preparation and compilation support for balance sheets, profit and loss statements, cash flow statements, and related financial reports in accordance with applicable accounting and statutory requirements.'
      },
      {
        title: 'Reconciliations & Financial Review',
        description: 'Review and reconciliation of bank accounts, receivables, payables, general ledger balances, and related financial records to support reporting consistency and documentation accuracy.'
      },
      {
        title: 'Cloud Accounting & Process Support',
        description: 'Support relating to cloud-based accounting systems, digital accounting workflows, automation processes, and maintenance of accounting information for reporting and operational purposes.'
      }
    ],
    processTimeline: [
      {
        phase: 'Phase 01',
        title: 'Accounting Setup & Standardizing',
        description: 'Designing a chart of accounts specific to your operational needs and selecting tax configurations.'
      },
      {
        phase: 'Phase 02',
        title: 'System Integration',
        description: 'Connecting bank feeds, invoicing channels, and payroll systems with secure cloud ledgers.'
      },
      {
        phase: 'Phase 03',
        title: 'Continuous Reconcilement',
        description: 'Verifying daily/weekly sales ledger postings, tracking payables, and managing tax calculations.'
      },
      {
        phase: 'Phase 04',
        title: 'Financial Reporting',
        description: 'Distributing monthly management information systems (MIS) reports, cash flow forecasts, and draft statements.'
      }
    ],
    faqs: [
      {
        question: 'Why is monthly MIS reporting critical for business owners?',
        answer: 'Monthly Management Information Systems (MIS) reports compile real-world operational margins, cash levels, product costings, and budgeting offsets, enabling prompt strategic adjustments rather than waiting for annual audits.'
      },
      {
        question: 'How do you coordinate with our statutory auditor?',
        answer: 'As your accounting partner, we compile comprehensive audit files, draft all ledger balances, provide supporting documentation, and directly address auditor inquiries to ensure a smooth, timely audit cycle.'
      }
    ]
  },
];

export const allServices = [...coreServices, ...otherServices];
