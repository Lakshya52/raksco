import React from 'react';
import { Building2, Globe, ShieldCheck, Eye, Briefcase, FileText, Layers } from 'lucide-react';

export const coreServices = [
  {
    slug: 'banking-financial-sector-assignments',
    icon: <Building2 size={32} />,
    title: 'Banking & Financial Sector',
    description: 'Specialized support for banks, NBFCs, financial institutions, and regulated entities across audits, compliance and risk review.',
    tagline: 'Securing institutional integrity and regulatory compliance through expert oversight and credit control.',
    longDescription: 'Navigating the heavily regulated financial services sector requires a deep understanding of standard credit operations, risk frameworks, and statutory guidelines. Our firm specializes in conducting rigorous reviews and credit audits designed specifically for banks, NBFCs, and financial intermediaries. We help identify potential portfolio risks, audit asset health, and ensure that institutional operations remain fully compliant with RBI and other regulatory mandates. By combining thorough investigative techniques with structured audit models, we provide lenders and management with absolute clarity on credit control and fund utilization.',
    atAGlance: {
      targetClients: ['Statutory & Private Banks', 'Non-Banking Financial Companies (NBFCs)', 'Microfinance Institutions', 'Asset Reconstruction Companies (ARCs)'],
      frameworks: ['RBI Master Directions', 'IRDAI Guidelines', 'FEMA Directives', 'Banking Regulation Act, 1949'],
      approach: 'Risk-based, analytical transaction verification paired with rigorous credit governance review.'
    },
    details: [
      'Stock audits, credit audits and revenue audits',
      'Concurrent audits and statutory reporting',
      'Information Systems (IS) audits for financial workflows',
      'Regulatory compliance reviews under RBI/IRDAI/NBFC norms',
    ],
    detailedOfferings: [
      {
        title: 'Stock, Credit & Revenue Audits',
        description: 'Comprehensive evaluations of collateral value, borrower creditworthiness, and banking income leakages. We verify primary and collateral stocks, debtor profiles, and compliance with sanction terms.'
      },
      {
        title: 'Concurrent & Statutory Audits',
        description: 'Real-time monitoring of large-value credit transactions, daily cash flow reconciliations, and compliance monitoring. We ensure regulatory timelines and internal branch guidelines are strictly adhered to.'
      },
      {
        title: 'Information Systems (IS) Audit',
        description: 'Auditing critical financial software, transaction security systems, access privileges, and core banking system (CBS) parameters to mitigate cyber risk and safeguard operational continuity.'
      },
      {
        title: 'Regulatory Compliance Reviews',
        description: 'Expert advisory on compliance with changing RBI mandates, capital adequacy ratios (BASEL III), asset classification, and provisioning norms for stressed portfolios.'
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
    longDescription: 'Modern stakeholders, lenders, and global markets are increasingly prioritizing non-financial performance indicators. Our ESG and Green Finance Advisory team helps companies translate complex global standards into localized corporate actions. We design robust environmental, social, and governance frameworks that build resilience and unlock sustainability-linked credit. From carrying out baseline materiality assessments to formulating comprehensive disclosures like BRSR, we guide entities toward measurable environmental impact and stakeholder trust.',
    atAGlance: {
      targetClients: ['Listed Public Entities', 'Infrastructure Developers', 'Export-oriented Enterprises', 'Renewable Energy Ventures'],
      frameworks: ['SEBI BRSR (Business Responsibility & Sustainability Reporting)', 'GRI (Global Reporting Initiative)', 'TCFD Recommendations', 'SBTi Guidelines'],
      approach: 'Materiality-first analysis aligned with global standards and regulatory expectations.'
    },
    details: [
      'Sustainability assurance and ESG compliance reviews',
      'Green finance advisory and sustainability strategy',
      'Materiality assessments and stakeholder reporting',
      'Assistance with ESG disclosures and framework alignment',
    ],
    detailedOfferings: [
      {
        title: 'Sustainability & BRSR Disclosures',
        description: 'End-to-end support for preparing SEBI-mandated Business Responsibility and Sustainability Reports (BRSR), ensuring accurate data gathering and presentation.'
      },
      {
        title: 'Green Finance & Transition Advisory',
        description: 'Assisting companies in structuring green bonds, obtaining ESG-linked credit ratings, and navigating green loan frameworks with international and domestic lenders.'
      },
      {
        title: 'Materiality & Carbon Footprint Audits',
        description: 'Identifying key ESG risks and opportunities that impact business value, and setting up systems to audit carbon emission scopes (Scope 1, 2, and 3).'
      },
      {
        title: 'Supply Chain Sustainability Reviews',
        description: 'Auditing external suppliers and operational partners for environmental compliance, labor standards, and sustainable raw material sourcing.'
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
    longDescription: 'Corporate governance and independent assurance form the bedrock of organizational longevity and stakeholder trust. We offer statutory audits, internal controls reviews, and compliance checks that go beyond bare-minimum compliance. Our methodology evaluates the operational workflows and control systems inside your organization to minimize financial leakages and streamline controls. By combining our audit techniques with real-world business insights, we deliver recommendations that help improve process efficiency, satisfy boards, and protect enterprise equity.',
    atAGlance: {
      targetClients: ['Corporates & Private Limited Companies', 'Partnerships & LLPs', 'Stressed Assets & Turnarounds', 'Joint Ventures & Subsidiaries'],
      frameworks: ['Indian Accounting Standards (Ind AS)', 'Income Tax Act, 1961', 'Companies Act, 2013', 'ICAI Standards on Auditing (SAs)'],
      approach: 'Technology-enabled internal review emphasizing process controls, statutory compliance, and financial accuracy.'
    },
    details: [
      'Statutory, internal and tax audits',
      'Risk management and internal control reviews',
      'Financial due diligence and corporate advisory',
      'Governance support and compliance monitoring',
    ],
    detailedOfferings: [
      {
        title: 'Statutory Audits & Ind AS Reviews',
        description: 'Objective, independent verification of financial records ensuring complete conformity with Indian Accounting Standards and structural reporting requirements.'
      },
      {
        title: 'Internal & Operational Audits',
        description: 'Process-level reviews targeting operational waste, resource leakages, authorization gaps, and process optimizations in manufacturing and service environments.'
      },
      {
        title: 'Financial Due Diligence',
        description: 'Detailed analysis of targets for Mergers & Acquisitions, highlighting hidden liabilities, asset quality, tax exposures, and historical revenue performance.'
      },
      {
        title: 'Corporate Governance & Risk Reviews',
        description: 'Formulating internal financial control (IFC) manuals and establishing ERM frameworks to proactively safeguard boards against liability.'
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
    longDescription: 'Lending to complex industrial projects or stressed asset turnarounds requires continuous, objective oversight. As a trusted Agency for Specialized Monitoring (ASM), we act as the eyes and ears of lenders and investment consortia. Our specialized team tracks cash flow, validates inventory levels, conducts site inspections, and closely monitors the genuine end-use of sanctioned funds. By matching transaction reviews with engineering-grade physical audits, we detect early warning signs of stress or diversion, protecting banking capital and keeping project timelines on track.',
    atAGlance: {
      targetClients: ['Consortium Lenders & Public Sector Banks', 'Private Equity & Venture Debt Funds', 'Insolvency Professionals (CIRP)', 'Infrastructure & Real Estate Developers'],
      frameworks: ['RBI Guidelines on Monitoring of Large Common Exposures', 'IBA (Indian Banks Association) ASM Panel Regulations', 'IBC Code provisions'],
      approach: 'Rigorous transactional, bank-statement, and physical field auditing with dynamic, regular progress tracking.'
    },
    details: [
      'Monitoring of funded projects, capital utilization, and cash flow movement',
      'Site visits, progress tracking, and submission of periodic monitoring reports',
      'Verification of asset creation, inventory, receivables, and end-use of funds',
      'Early warning signal identification and risk escalation support',
      'Compliance monitoring against sanction terms, covenants, and regulatory requirements',
      'Coordination support between lenders, borrowers, consultants, and stakeholders',
    ],
    detailedOfferings: [
      {
        title: 'Fund Flow & Trust Account Monitoring',
        description: 'Analyzing operational bank accounts and TRA/Escrow transactions to prevent fund siphoning, unauthorized transactions, or debt diversion outside the consortium.'
      },
      {
        title: 'Physical & Site Progress Audits',
        description: 'Routine on-site checks to reconcile technical progress milestones with reported project expenditures. We verify physical inventory and machinery presence.'
      },
      {
        title: 'Early Warning Signal (EWS) Analysis',
        description: 'Continuously evaluating operational key performance indicators, stock velocity, tax payment histories, and market dues to alert lenders of stress early.'
      },
      {
        title: 'Covenant & Sanction Compliance Reviews',
        description: 'Checking borrower adherence to all non-financial covenants, insurance renewals, legal clearances, and specific debt conditions.'
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
    longDescription: 'Launching or scaling an enterprise in today\'s economy requires a strategic approach. Our Business Advisory team helps entrepreneurs, private companies, and family businesses navigate early-stage setups, structural changes, and operational shifts. We evaluate market opportunities, help secure optimal legal structuring, map capital layouts, and set up the processes needed to support healthy scaling. By offering experienced, objective advisory, we ensure your business decisions are grounded in sound economic forecasting and robust risk protection.',
    atAGlance: {
      targetClients: ['Entrepreneurs & Startups', 'SMEs Seeking Capital Scaling', 'Family Businesses in Transition', 'Joint Ventures'],
      frameworks: ['Companies Act, 2013', 'FDI Regulations', 'Valuation Standards', 'MSME Guidelines'],
      approach: 'Collaborative, forward-looking strategic advisory focused on legal soundness and financial scalability.'
    },
    details: [
      'Advisory on business setup, financial planning, and strategic consulting.',
      'Implementation of risk management frameworks to foster sustainable growth.',
      'Compliance support and data-driven insights for informed decision-making in an evolving economic landscape.',
    ],
    detailedOfferings: [
      {
        title: 'Strategic Setup & Legal Structuring',
        description: 'Advising on optimal structures (LLP vs. Private Company), drafting partnership agreements, and helping setup operational entities.'
      },
      {
        title: 'Financial Modeling & Feasibility Study',
        description: 'Creating 5-year financial models, pricing strategy scenarios, and project feasibility reviews to help raise debt or equity capital.'
      },
      {
        title: 'Enterprise Risk Management (ERM)',
        description: 'Designing customized risk mapping systems that identify strategic, technological, and market risks, creating mitigation plans.'
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
    longDescription: 'With multiple ministries and regulations continuously updating, tracking compliances can easily overwhelm active management. We offer expert regulatory and corporate compliance support to keep your business operating safely and legally. From managing standard MCA secretarial filings and maintaining statutory registers to handling complex FEMA capital controls and obtaining sector licenses, we manage your legal compliance calendar. Our proactive approach ensures that filings are processed timely, preventing severe penalties and maintaining an immaculate corporate history.',
    atAGlance: {
      targetClients: ['Corporates & MNCs in India', 'FDI-funded Entities', 'Food, Trade & Import Ventures', 'Startups & Growing SMEs'],
      frameworks: ['FEMA (Foreign Exchange Management Act)', 'MCA guidelines', 'RBI FDI/ODI reporting', 'FSSAI, ISO, BIS regulations'],
      approach: 'Proactive calendar-driven compliance tracking, precise document management, and direct regulatory filing support.'
    },
    details: [
      'Company incorporation, maintenance of statutory registers, and Board/AGM documentation.',
      'Advisory and filings under FEMA and RBI regulations for foreign investments and cross-border transactions.',
      'Assistance obtaining and renewing statutory licenses and registrations such as FSSAI, MSME, BIS, ISO and sector-specific approvals.',
      'Regulatory monitoring and compliance management for timely adherence to evolving legal requirements.',
    ],
    detailedOfferings: [
      {
        title: 'Secretarial & MCA Compliances',
        description: 'Drafting Board Meeting minutes, organizing AGM documentation, preparing and filing annual returns (MGT-7, AOC-4) with the ROC.'
      },
      {
        title: 'FEMA & Foreign Investment Advisory',
        description: 'Filing FC-GPR/FC-TRS reports, managing RBI compliance for Foreign Direct Investment (FDI) inflows, Overseas Direct Investments (ODI), and cross-border transfers.'
      },
      {
        title: 'Statutory Registrations & Licenses',
        description: 'End-to-end guidance in securing critical operational registrations like MSME, FSSAI, Import Export Code (IEC), BIS standards, and ISO certifications.'
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
    longDescription: 'Reliable accounting does more than keep tax inspectors happy—it provides the operational visibility necessary to direct corporate strategy. Our accounting and financial reporting division delivers structured services designed to turn raw ledger records into high-fidelity reporting. We maintain compliant books, coordinate payroll, handle bank reconciliations, and prepare financial statements aligned with applicable Ind AS or standard GAAP. By automating ledger collection and providing cloud-based dashboards, we ensure that your executive team has immediate access to real-time numbers.',
    atAGlance: {
      targetClients: ['MNC Subsidiaries', 'Growing Corporates & Businesses', 'E-commerce Brands & Retailers', 'Professional Service Firms'],
      frameworks: ['Companies Act Schedule III', 'Indian GAAP & Ind AS', 'GST and TDS regulations'],
      approach: 'Process-driven, cloud-integrated accounting emphasizing ledgers balance, tax-readiness, and operational reporting.'
    },
    details: [
      'Maintaining statutory-compliant financial records and preparation of financial statements.',
      'Managing payables, receivables, reconciliations, and general ledger efficiently.',
      'Support for tax compliance, budgeting, and financial analysis for informed decision-making.',
      'Leveraging cloud-based solutions and automation for real-time insights and process optimization.',
    ],
    detailedOfferings: [
      {
        title: 'Full-Scale Bookkeeping & Ledger Maintenance',
        description: 'Accurate, systematic posting of sales, purchases, bank records, and journal entries using premium cloud accounting environments.'
      },
      {
        title: 'Financial Statement Preparation',
        description: 'Drafting balance sheets, profit & loss accounts, cash flow statements, and detailed notes to accounts in compliance with Schedule III.'
      },
      {
        title: 'Tax-Ready Accounting & Reconciliations',
        description: 'Continuous reconciliation of sales records with GSTR-2B/3B, matching bank records, and tracking TDS/TCS entries to prevent tax errors.'
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
