import React from "react";
import {
  Building2,
  Globe,
  ShieldCheck,
  Eye,
  Briefcase,
  FileText,
  Layers,
  ReceiptText,
  BriefcaseBusiness,
} from "lucide-react";

export const coreServices = [
  {
    slug: "banking-financial-sector-assignments",
    icon: <Building2 size={32} />,
    title: "Banking & Financial Sector",
    description:
      "Specialized support for banks, NBFCs, financial institutions and regulated entities across audits, compliance and risk review.",
    longDescription:
      "Audit, review and compliance support services for banks, NBFCs and financial sector entities relating to credit processes, operational controls and regulatory requirements, including examination of financial records, internal control systems and compliance procedures. The scope includes examination of financial records, review of operational procedures, verification of documentation and support relating to statutory and regulatory reporting requirements.\n\nThe services are carried out with a structured approach towards transaction review, documentation assessment, internal control evaluation and compliance monitoring in accordance with applicable regulatory frameworks.",
    atAGlance: {
      targetClients: [
        "Statutory & Private Banks",
        "Non-Banking Financial Companies (NBFCs)",
        "Microfinance Institutions",
        "Asset Reconstruction Companies (ARCs)",
      ],
      frameworks: [
        "RBI Master Directions",
        "IRDAI Guidelines",
        "FEMA Directives",
        "Banking Regulation Act, 1949",
      ],
      approach:
        "Risk-based, analytical transaction verification paired with rigorous credit governance review.",
    },
    details: [
      "Stock audits, credit auditsand revenue audits",
      "Concurrent audits and statutory reporting support",
      "Information Systems (IS) audits for financial workflows",
      "Regulatory compliance reviews under RBI, IRDAIand NBFC frameworks",
    ],
    detailedOfferings: [
      {
        title: "Stock, Credit & Revenue Audits",
        description:
          "Review of stock statements, drawing power calculations, borrower records, security documentation and related financial information for assessment of reporting consistency and compliance with sanction terms.",
      },
      {
        title: "Concurrent & Statutory Audits",
        description:
          "Examination of selected transactions, operational procedures, branch-level controlsand reporting processes to support monitoring and compliance requirements.",
      },
      {
        title: "Information Systems (IS) Audit",
        description:
          "Review of financial systems, access controls, transaction workflowsand information security processes within banking and financial operations.",
      },
      {
        title: "Regulatory Compliance Reviews",
        description:
          "Review support relating to RBI directions, IRDAI regulations, FEMA provisions, asset classification norms, provisioning requirementsand related regulatory reporting processes.",
      },
    ],
  },
  {
    slug: "esg-sustainability-green-finance-advisory",
    icon: <Globe size={32} />,
    title: "ESG, Sustainability & Green Finance Advisory",
    description:
      "Advisory services designed to help organisations align with ESG best practices, sustainability reportingand green finance frameworks.",
    longDescription:
      "Provision of advisory and reporting support services relating to Environmental, Socialand Governance (ESG) practices, sustainability reporting frameworksand regulatory disclosure requirements. The scope includes assistance in sustainability-related reporting processes, ESG data review, policy documentation, framework alignmentand support relating to Business Responsibility and Sustainability Reporting (BRSR) requirements.\n\nThe services are carried out with reference to applicable regulatory guidelines, reporting standardsand sustainability disclosure frameworks relevant to Indian business and financial reporting environments.",
    atAGlance: {
      targetClients: [
        "Listed Public Entities",
        "Infrastructure Developers",
        "Export-oriented Enterprises",
        "Renewable Energy Ventures",
      ],
      frameworks: [
        "SEBI BRSR Framework",
        "National Guidelines on Responsible Business Conduct (NGBRC)",
        "Sustainability Reporting Standards Board (SRSB) Guidance",
        "ESG Reporting & Disclosure Frameworks",
      ],
      approach:
        "Materiality-first analysis aligned with global standards and regulatory expectations.",
    },
    details: [
      "ESG and sustainability reporting support",
      "BRSR and BRSR Core reporting assistance",
      "Sustainability policy and framework documentation",
      "ESG data compilation and disclosure review",
      "Green finance and sustainability-related advisory support",
    ],
    detailedOfferings: [
      {
        title: "ESG & Sustainability Reporting Support",
        description:
          "Assistance in preparation, compilationand review of sustainability-related disclosures covering environmental, socialand governance parameters in accordance with applicable reporting frameworks and disclosure requirements.",
      },
      {
        title: "BRSR & Regulatory Disclosure Assistance",
        description:
          "Support relating to Business Responsibility and Sustainability Reporting (BRSR), BRSR Core disclosures, ESG reporting processesand related documentation requirements under applicable SEBI regulations.",
      },
      {
        title: "ESG Data Review & Documentation",
        description:
          "Review of ESG-related information, sustainability metrics, supporting records, internal documentationand reporting processes for consistency and disclosure readiness.",
      },
      {
        title: "Sustainability Framework & Green Finance Advisory",
        description:
          "Advisory support relating to sustainability frameworks, ESG governance processes, climate-related reporting considerations, sustainable finance documentationand responsible business reporting practices.",
      },
    ],
  },
  {
    slug: "assurance-advisory-services",
    icon: <ShieldCheck size={32} />,
    title: "Audit & Assurance Services",
    description:
      "Assurance services backed by practical advisory to improve controls, governance and performance for growing businesses.",
    longDescription:
      "Provision of assurance, auditand advisory support services relating to financial reporting, internal controls, regulatory complianceand governance processes. The scope includes examination of financial records, review of operational procedures, evaluation of internal control systemsand support relating to statutory and compliance requirements.\n\nThe services are carried out through structured review procedures, documentation assessment, control evaluationand reporting processes in accordance with applicable regulatory and professional frameworks.",
    atAGlance: {
      targetClients: [
        "Corporates & Private Limited Companies",
        "Partnerships & LLPs",
        "Stressed Assets & Turnarounds",
        "Joint Ventures & Subsidiaries",
      ],
      frameworks: [
        "Companies Act, 2013",
        "Standards on Auditing (SA)",
        "Internal Financial Controls (IFC) Framework",
        "Applicable Regulatory & Compliance Requirements",
      ],
      approach:
        "Technology-enabled internal review emphasizing process controls, statutory complianceand financial accuracy.",
    },
    details: [
      "Statutory audits and internal audits",
      "Compliance reviews and governance assessments",
      "Due diligence and forensic review support",
      "Internal control evaluation and risk assessment",
      "Financial and operational process reviews",
    ],
    detailedOfferings: [
      {
        title: "Statutory Audit",
        description:
          "Review and examination of financial statements, accounting records and supporting documentation for compliance with applicable statutory requirements under relevant laws and reporting frameworks.",
      },
      {
        title: "Information System Audit",
        description:
          "Evaluation of IT controls, system processes, data integrity mechanisms and technology environments to support operational reliability, security and compliance assessments.",
      },
      // {
      //   title: "Concurrent Audit",
      //   description:
      //     "Ongoing review of financial transactions, operational activities and process controls for banks, NBFCs and other entities to support monitoring and compliance requirements.",
      // },
      // {
      //   title: "Stock Audit",
      //   description:
      //     "Verification and review of inventory records, stock valuation processes and physical inventory management systems for reporting, assessment and control purposes.",
      // },
      {
        title: "Revenue Audit",
        description:
          "Examination of revenue recognition processes, billing systems, accounting records and related supporting documentation for verification and compliance review purposes.",
      },
      {
        title: "Forensic Due Diligence",
        description:
          "Review and analysis of financial records, transactional data and supporting information for investigation support, fraud risk assessment and forensic examination purposes.",
      },
      // {
      //   title: "Credit Audit",
      //   description:
      //     "Assessment and review of credit processes, lending documentation, monitoring procedures and portfolio-related records for compliance and risk evaluation purposes.",
      // },
      {
        title: "Internal Audit",
        description:
          "Evaluation of internal controls, operational workflows, compliance procedures and reporting systems to support governance, risk management and process review objectives.",
      },
    ],
  },
  {
    slug: "agency-for-specialized-monitoring",
    icon: <Eye size={32} />,
    title: "Agency for Specialized Monitoring (ASM)",
    description:
      "Independent monitoring and oversight services for lenders, investorsand institutions requiring structured supervision of financed projects, stressed assetsand operational performance.",
    longDescription:
      "Provision of monitoring and verification support services relating to project implementation, fund utilization, operational progressand compliance with specified terms and conditions. The scope includes review of project records, site verification support, documentation assessment, monitoring of utilization processesand reporting based on available records and information.\n\nThe services are carried out through structured monitoring procedures, review of supporting documentation, verification processesand reporting mechanisms in accordance with applicable engagement requirements and regulatory frameworks.",
    atAGlance: {
      targetClients: [
        "Consortium Lenders & Public Sector Banks",
        "Private Equity & Venture Debt Funds",
        "Insolvency Professionals (CIRP)",
        "Infrastructure & Real Estate Developers",
      ],
      frameworks: [
        "Terms of Sanction & Approval Conditions",
        "Project Monitoring & Reporting Requirements",
        "Applicable Regulatory Guidelines",
        "Internal Compliance & Documentation Frameworks",
      ],
      approach:
        "Rigorous transactional, bank-statementand physical field auditing with dynamic, regular progress tracking.",
    },
    details: [
      "Fund utilization monitoring and reporting",
      "Project progress review and verification support",
      "Documentation and compliance monitoring",
      "Site visit coordination and status assessment",
      "Monitoring reports and operational review support",
    ],
    detailedOfferings: [
      {
        title: "Fund Utilization Monitoring",
        description:
          "Review of utilization records, supporting documents, financial informationand related project records for assessment of utilization status and reporting consistency.",
      },
      {
        title: "Project Progress Verification",
        description:
          "Monitoring support relating to project implementation status, milestone tracking, documentation reviewand verification of operational progress based on available records and site observations.",
      },
      {
        title: "Compliance & Documentation Review",
        description:
          "Assessment of approvals, agreements, utilization records, statutory documentsand related compliance documentation for monitoring and reporting purposes.",
      },
      {
        title: "Reporting & Monitoring Support",
        description:
          "Preparation and compilation support for monitoring reports, utilization summaries, progress observationsand related reporting documentation as required under the engagement scope.",
      },
    ],
  },
];

export const otherServices = [
  {
    slug: "business-advisory",
    icon: <Briefcase size={32} />,
    title: "Business Advisory",
    description:
      "Empowering businesses and individuals through financial solutions.",
    longDescription:
      "Provision of advisory and support services relating to business operations, financial planning, compliance processesand business management. The scope includes assistance relating to business structuring, financial analysis, operational review, regulatory supportand evaluation of business processes for reporting and decision-support purposes.\n\nThe services are carried out through structured review procedures, documentation assessment, financial evaluationand process-oriented advisory support in accordance with applicable regulatory and business requirements.",
    atAGlance: {
      targetClients: [
        "Entrepreneurs & Startups",
        "SMEs Seeking Capital Scaling",
        "Family Businesses in Transition",
        "Joint Ventures",
      ],
      frameworks: [
        "Companies Act, 2013",
        "Income Tax Act, 1961",
        "GST Regulations",
        "Applicable Business & Regulatory Requirements",
      ],
      approach:
        "Collaborative, forward-looking advisory focused on legal soundness and financial scalability.",
    },
    details: [
      "Business setup and operational advisory support",
      "Financial planning and business analysis",
      "Risk assessment and process review",
      "Compliance support and regulatory assistance",
      "Management reporting and decision-support services",
    ],
    detailedOfferings: [
      {
        title: "Business Setup & Structuring Support",
        description:
          "Advisory support relating to business formation, operational structuring, registration processesand related documentation requirements in accordance with applicable regulations.",
      },
      {
        title: "Financial Planning & Business Analysis",
        description:
          "Review of financial information, budgeting processes, cash flow analysisand operational data to support financial planning and business assessment requirements.",
      },
      {
        title: "Risk Assessment & Process Review",
        description:
          "Evaluation of operational procedures, internal processesand business control mechanisms for identification and review of process-related risks and reporting considerations.",
      },
      {
        title: "Compliance & Management Support",
        description:
          "Support relating to regulatory compliance processes, reporting requirements, management information reviewand documentation assessment for operational and administrative purposes.",
      },
    ],
  },
  {
    slug: "regulatory-compliance-support",
    icon: <Layers size={32} />,
    title: "Regulatory & Compliance Support",
    description:
      "Secretarial compliances including company incorporation, statutory maintenanceand regulatory filings.",
    longDescription:
      "Provision of regulatory and compliance support services relating to corporate filings, statutory documentation, regulatory registrationsand compliance management processes. The scope includes assistance relating to corporate compliance procedures, maintenance of statutory records, regulatory filingsand support under applicable legal and regulatory frameworks.\n\nThe services are carried out through structured documentation review, compliance monitoring, filing supportand process-oriented regulatory assistance in accordance with applicable statutory requirements.",
    atAGlance: {
      targetClients: [
        "Corporates & MNCs in India",
        "FDI-funded Entities",
        "Food, Trade & Import Ventures",
        "Startups & Growing SMEs",
      ],
      frameworks: [
        "Companies Act, 2013",
        "FEMA Regulations",
        "RBI Guidelines",
        "Applicable Statutory & Regulatory Requirements",
      ],
      approach:
        "Proactive calendar-driven compliance tracking, precise document managementand direct regulatory filing support.",
    },
    details: [
      "Corporate and secretarial compliance support",
      "FEMA and RBI regulatory filing assistance",
      "Statutory registrations and license support",
      "Compliance monitoring and documentation review",
      "Regulatory reporting and filing processes",
    ],
    detailedOfferings: [
      {
        title: "Corporate & Secretarial Compliance",
        description:
          "Support relating to company incorporation procedures, maintenance of statutory registers, preparation of board and shareholder meeting documentationand related corporate compliance processes.",
      },
      {
        title: "FEMA & RBI Regulatory Support",
        description:
          "Assistance relating to FEMA compliances, RBI reporting requirements, foreign investment documentation, cross-border transaction filingsand related regulatory procedures.",
      },
      {
        title: "Licenses & Statutory Registrations",
        description:
          "Support for obtaining, renewingand maintaining statutory registrations, licensesand sector-specific approvals including MSME, FSSAI, BIS, ISO-related documentation supportand related regulatory processes.",
      },
      {
        title: "Compliance Monitoring & Reporting",
        description:
          "Review and monitoring of statutory due dates, filing requirements, compliance documentationand regulatory reporting processes to support timely compliance management.",
      },
    ],
  },
  {
    slug: "accounting-financial-reporting",
    icon: <FileText size={32} />,
    title: "Accounting & Financial Reporting",
    description:
      "Maintaining statutory-compliant financial records and reporting for operational clarity and regulatory confidence.",
    longDescription:
      "Provision of accounting and financial reporting support services relating to maintenance of books of accounts, preparation of financial statements, reconciliation processesand compliance-related financial documentation. The scope includes support for accounting operations, financial reporting procedures, budgeting processesand review of financial information in accordance with applicable regulatory and accounting frameworks.\n\nThe services are carried out through structured accounting procedures, documentation review, reconciliation processesand reporting support using conventional and technology-enabled accounting systems.",
    atAGlance: {
      targetClients: [
        "MNC Subsidiaries",
        "Growing Corporates & Businesses",
        "E-commerce Brands & Retailers",
        "Professional Service Firms",
      ],
      frameworks: [
        "Accounting Standards (AS) / Ind AS",
        "Companies Act, 2013",
        "Income Tax Act, 1961",
        "GST Regulations",
      ],
      approach:
        "Process-driven, cloud-integrated accounting emphasizing ledgers balance, tax-readinessand operational reporting.",
    },
    details: [
      "Maintenance of books of accounts and financial records",
      "Preparation of financial statements and reporting support",
      "Payables, receivablesand reconciliation processes",
      "Budgeting and financial analysis support",
      "Cloud-based accounting and process automation support",
    ],
    detailedOfferings: [
      {
        title: "Accounting & Bookkeeping Support",
        description:
          "Maintenance and review of accounting records, journal entries, ledger managementand transaction classification to support financial reporting and record-keeping requirements.",
      },
      {
        title: "Financial Statements & Reporting",
        description:
          "Preparation and compilation support for balance sheets, profit and loss statements, cash flow statementsand related financial reports in accordance with applicable accounting and statutory requirements.",
      },
      {
        title: "Reconciliations & Financial Review",
        description:
          "Review and reconciliation of bank accounts, receivables, payables, general ledger balancesand related financial records to support reporting consistency and documentation accuracy.",
      },
      {
        title: "Cloud Accounting & Process Support",
        description:
          "Support relating to cloud-based accounting systems, digital accounting workflows, automation processesand maintenance of accounting information for reporting and operational purposes.",
      },
    ],
  },
  {
    slug: "taxation-regulatory",
    icon: <ReceiptText size={32} />,
    title: "Taxation & Regulatory",
    description:
      "Support services relating to tax compliance, regulatory procedures and documentation management for businesses and individuals.",

    longDescription:
      "Provision of taxation and regulatory support services relating to direct and indirect tax compliance, statutory filings, documentation review and regulatory reporting requirements. The scope includes assistance in relation to income tax matters, GST compliance procedures, international taxation support, transfer pricing documentation and related regulatory processes in accordance with applicable laws and reporting frameworks.\n\nThe services are carried out through structured documentation processes, compliance review procedures, reporting support and coordination relating to statutory and regulatory requirements using conventional and technology-enabled systems.",

    atAGlance: {
      targetClients: [
        "Corporates & Business Entities",
        "Startups & Growing Enterprises",
        "MNCs & Cross-border Businesses",
        "Individuals & Professional Firms",
      ],

      frameworks: [
        "Income Tax Act, 1961",
        "Goods and Services Tax Laws",
        "Transfer Pricing Regulations",
        "Applicable Regulatory Frameworks",
      ],

      approach:
        "Process-oriented compliance and documentation support focusing on regulatory adherence, reporting consistency and structured tax management procedures.",
    },

    details: [
      "Income tax compliance and reporting support",
      "GST registration, return filing and documentation support",
      "International taxation and cross-border transaction review support",
      "Transfer pricing documentation and compliance support",
      "Regulatory reporting and statutory documentation procedures",
    ],

    detailedOfferings: [
      {
        title: "Income Tax",
        description:
          "Support services relating to income tax compliance procedures, return filing, documentation review and related representation support in accordance with applicable tax regulations.",
      },

      {
        title: "GST",
        description:
          "Assistance relating to GST registrations, return filing procedures, reconciliation processes, documentation review and compliance-related reporting requirements under applicable GST laws.",
      },

      {
        title: "International Tax",
        description:
          "Support relating to cross-border transaction review, DTAA-related documentation, foreign investment reporting procedures and international taxation compliance requirements.",
      },

      {
        title: "Transfer Pricing",
        description:
          "Preparation and review support relating to transfer pricing documentation, benchmarking analysis, compliance procedures and maintenance of records in accordance with applicable regulations.",
      },
    ],
  },
  {
  slug: "corporate-law-outsourcing",
  icon: <BriefcaseBusiness size={32} />,
  title: "Corporate Law & Outsourcing",
  description:
    "Support services relating to corporate compliance procedures, secretarial documentation and outsourced business process support.",

  longDescription:
    "Provision of corporate law, secretarial and outsourcing support services relating to regulatory documentation, compliance procedures, business process coordination and maintenance of statutory records. The scope includes assistance relating to corporate secretarial support, regulatory filing procedures, transaction-related documentation, accounting outsourcing processes and compliance-related administrative support in accordance with applicable laws and regulatory frameworks.\n\nThe services are carried out through structured documentation procedures, compliance tracking mechanisms, reporting support and process coordination using conventional and technology-enabled systems.",

  atAGlance: {
    targetClients: [
      "Corporates & Business Entities",
      "Startups & Emerging Companies",
      "Professional & Service Firms",
      "Growing Enterprises & Group Entities",
    ],

    frameworks: [
      "Companies Act, 2013",
      "SEBI & ROC Compliance Requirements",
      "Applicable Secretarial Standards",
      "Regulatory Filing Frameworks",
    ],

    approach:
      "Process-oriented compliance and outsourcing support focusing on documentation management, regulatory adherence and operational coordination procedures.",
  },

  details: [
    "Corporate law and compliance support procedures",
    "Secretarial documentation and ROC filing support",
    "Transaction and due diligence documentation review",
    "Accounting and finance outsourcing support",
    "Regulatory and event-based compliance coordination",
  ],

  detailedOfferings: [
    {
      title: "Corporate & Commercial Law",
      description:
        "Support services relating to incorporation procedures, regulatory documentation, governance-related compliance processes and maintenance of statutory corporate records.",
    },

    {
      title: "Corporate Secretarial",
      description:
        "Assistance relating to ROC filings, maintenance of statutory registers, board and shareholder meeting documentation and secretarial compliance support procedures.",
    },

    {
      title: "Mergers & Acquisitions",
      description:
        "Support relating to transaction documentation review, due diligence procedures, compliance-related documentation and coordination for regulatory filing requirements.",
    },

    {
      title: "Accounting Outsourcing",
      description:
        "Support services relating to outsourced accounting processes, bookkeeping assistance, MIS reporting support, payroll coordination and financial documentation procedures.",
    },

    {
      title: "Secretarial Compliance",
      description:
        "Assistance relating to annual compliance procedures, director KYC documentation, event-based filings and maintenance of statutory compliance records.",
    },
  ],
}
];

export const allServices = [...coreServices, ...otherServices];
