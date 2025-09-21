
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const metadata: Metadata = {
  title: 'ITR-5 Return Filing Services | CACS FinAcc Digital',
  description: 'Expert ITR-5 filing for firms, LLPs, AOPs, and BOIs. Ensure compliance with the latest updates for AY 2025–26 with our professional services.',
};

const whoShouldFile = [
    "Firms (including LLPs)",
    "Association of Persons (AOP)",
    "Body of Individuals (BOI)",
    "Artificial Juridical Person (AJP)",
    "Local Authorities",
    "Co-operative Societies and Societies registered under Societies Registration Act",
    "Business Trusts and Investment Funds",
];

const whatsNew = [
    "Expanded Schedule TR & FA – More disclosures required for foreign transactions and assets",
    "Crypto/VDA income reporting – ITR-5 now includes mandatory reporting of virtual digital assets",
    "Schedule 80G/80GGA updated – Reporting of donations in granular format",
    "Audit Trail Disclosure – Whether books of account have an audit trail functionality (as per MCA rules)",
    "Updated depreciation schedule – Auto-calculation and asset-wise reporting mandated",
    "Enhanced Schedule TCS & TDS reconciliation – Cross-verification with Form 26AS & AIS",
];

const keyDisclosures = [
    "General details of the entity, nature of business",
    "Partners/Members' info with profit-sharing ratios",
    "Balance Sheet and P&L Account figures",
    "Audit information & Auditor details",
    "Details of capital gains, dividends, deemed incomes",
    "Deductions under Chapter VI-A (80C to 80U)",
    "Disclosures under GAAR, Transfer Pricing, if applicable",
    "Details of shareholding in unlisted companies",
    "Foreign Assets, Foreign Income, and Beneficial Ownership",
];

const keyAmendments = [
    {
        title: "Capital Gains Reporting Enhancements:",
        items: [
            "<strong>Bifurcation by Transfer Date:</strong> Schedule-Capital Gain now requires taxpayers to separately report capital gains arising from transfers made before and after July 23, 2024. This change aligns with the provisions of the Finance Act, 2024, ensuring accurate application of tax treatments.",
            "<strong>Share Buyback Losses:</strong> From October 1, 2024, taxpayers can claim capital losses on share buybacks, provided the corresponding dividend income was previously reported as 'Income from Other Sources.' This adjustment addresses earlier inconsistencies in the taxation of share buybacks."
        ]
    },
    {
        title: "Introduction of Section 44BBC – Cruise Business:",
        description: "A new reference to Section 44BBC has been incorporated, which pertains to the presumptive taxation regime for cruise ship operators. This section allows non-resident cruise operators to declare 20% of passenger carriage receipts as taxable profits, simplifying compliance for entities in the cruise business."
    },
    {
        title: "Mandatory TDS Section Code Reporting:",
        description: "Taxpayers are now required to specify the exact TDS section code under which tax has been deducted in Schedule-TDS. This enhancement aims to improve transparency and facilitate accurate matching of TDS claims with the tax department's records."
    },
    {
        title: "Detailed Entity Information:",
        description: "The revised form mandates the provision of comprehensive details about the entity, including:",
        items: [
            "Name (including any recent changes)",
            "Permanent Account Number (PAN)",
            "Date of Formation and Commencement of Business",
            "Limited Liability Partnership Identification Number (LLPIN), if applicable",
            "Complete Address (including flat/door number, building name, locality, district, state, and pin code)",
            "Contact Details (landline and two mobile numbers)",
            "Email Addresses (two required)"
        ],
        conclusion: "These requirements aim to enhance the accuracy of entity identification and facilitate better communication."
    },
    {
        title: "Selection of Filing Status and Due Date:",
        description: "A new dropdown-style selection has been introduced to specify the due date of return filing, with options including:",
        items: [
            "July 31",
            "October 31",
            "November 30"
        ],
        conclusion: "Taxpayers must also indicate the section under which the return is being filed, such as:",
        items2: [
            "Section 139(1) – Return filed within the due date",
            "Section 139(4) – Belated return",
            "Section 139(5) – Revised return",
            "Section 92CD – Modified return under Advance Pricing Agreement (APA)",
            "Section 119(2)(b) – Under CBDT condonation"
        ],
        finalConclusion: "This addition aims to streamline the filing process and ensure accurate categorization of returns."
    }
];

const documentsRequired = [
    "PAN, TAN of entity",
    "Partnership deed / LLP agreement",
    "Financials: Balance Sheet, P&L, cash flow",
    "Audit report (if applicable)",
    "Bank statements",
    "TDS Certificates, Form 26AS & AIS",
    "Details of business loans, depreciation, and investments",
];

const filingTips = [
    "<strong>Verify Eligibility:</strong> Ensure your entity qualifies to file ITR-5 before proceeding.",
    "<strong>Accurate Reporting: </strong>Provide complete and accurate information in all sections, especially in Schedule-Capital Gain and Schedule-TDS.",
    "<strong>Timely Filing:</strong> Adhere to the applicable due dates to avoid penalties.",
    "<strong>Documentation:</strong> Maintain comprehensive records to support all claims and disclosures made in the return.",
];

export default function Itr5FilingPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Tax Filings', href: '/tax-filing' },
            { label: 'ITR-5 Filing' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-itr5">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">ITR-5 Filing: Comprehensive Tax Solutions for Firms and Entities</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    The Central Board of Direct Taxes (CBDT) has officially notified the updated Income Tax Return (ITR) Form 5 for the Assessment Year (AY) 2025–26, effective from April 1, 2025. This revised form introduces several significant amendments aimed at enhancing compliance, transparency, and alignment with recent tax reforms.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">
                    CACSFinacc is your trusted partner for hassle-free and efficient Income Tax Return (ITR) filing services in India. Our ITR-5 service is designed to cater to the specific needs of firms, the Association of Persons (AOP), and the Body of Individuals (BOI) looking to file their income tax returns seamlessly. With our user-friendly platform, expert assistance, and competitive pricing, ITR 5 income tax filing has always been a challenge.
                </p>
            </section>

            <section id="what-is-itr5-detailed">
                <h2 className="text-3xl font-bold font-headline">What is ITR-5?</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    ITR-5 is the prescribed Income Tax Return form for a wide range of non-individual entities such as:
                </p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {whoShouldFile.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: `<strong>${item}</strong>` }}></li>
                    ))}
                </ul>
                <p className="mt-4 text-muted-foreground text-justify">
                    Not applicable to individuals, HUFs (use ITR-1 to ITR-4), or companies (use ITR-6).
                </p>
                <p className="mt-4 text-muted-foreground text-justify italic">
                    <strong>Note:</strong> Individuals, Hindu Undivided Families (HUFs), companies, and entities required to file ITR-7 (such as charitable or religious trusts) are not eligible to use ITR-5.
                </p>
            </section>
            
            <section id="who-should-file">
                <h2 className="text-3xl font-bold font-headline">Who Should File ITR-5 in AY 2025-26?</h2>
                <p className="mt-4 text-muted-foreground text-justify">Entities required to file ITR-5 include:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify">Registered Partnerships and LLPs with or without audit</li>
                    <li className="text-muted-foreground text-justify">Co-operative societies, trusts, and estate of deceased persons</li>
                    <li className="text-muted-foreground text-justify">Entities having income from business or profession, rental income, capital gains, dividend, or other sources</li>
                    <li className="text-muted-foreground text-justify">Entities claiming exemption under Sections 11, 12, 10(23C), etc.</li>
                </ul>
            </section>

            <section id="whats-new">
                <h2 className="text-3xl font-bold font-headline">What’s New in ITR-5 for AY 2025-26?</h2>
                <p className="mt-4 text-muted-foreground text-justify">As per recent updates by CBDT for AY 2025-26:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {whatsNew.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: `<strong>${item}</strong>` }}></li>
                    ))}
                </ul>
            </section>
            
            <section id="compliance-audit">
                <h2 className="text-3xl font-bold font-headline">Compliance & Audit Applicability</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify">
                        <strong>Audit under Section 44AB is mandatory if:</strong>
                        <ul className="mt-2 space-y-2 list-disc pl-5">
                            <li className="text-muted-foreground text-justify">Turnover exceeds ₹1 crore (or ₹10 crore with ≤5% cash transactions)</li>
                            <li className="text-muted-foreground text-justify">Professional income exceeds ₹50 lakhs</li>
                            <li className="text-muted-foreground text-justify">Presumptive taxation not opted or ineligible</li>
                        </ul>
                    </li>
                    <li className="text-muted-foreground text-justify"><strong>Firms must file Form 3CA-3CD or 3CB-3CD as per audit category.</strong></li>
                    <li className="text-muted-foreground text-justify"><strong>ICAI mandates proper record keeping, ethical reporting, and compliance with SA standards (Standards on Auditing).</strong></li>
                </ul>
            </section>

            <section id="key-disclosures">
                <h2 className="text-3xl font-bold font-headline">Key Disclosures in ITR-5</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {keyDisclosures.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{item}</li>
                    ))}
                </ul>
            </section>
            
            <section id="key-amendments">
                <h2 className="text-3xl font-bold font-headline">Key Amendments in ITR-5 for AY 2025–26</h2>
                 <ol className="mt-4 space-y-4 list-decimal pl-5">
                    {keyAmendments.map((amendment, index) => (
                        <li key={index}>
                            <strong className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: amendment.title }}></strong>
                            {amendment.description && <p className="mt-2 text-muted-foreground text-justify">{amendment.description}</p>}
                            {amendment.items && (
                                <ul className="mt-2 space-y-2 list-disc pl-5">
                                    {amendment.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                                    ))}
                                </ul>
                            )}
                             {amendment.conclusion && <p className="mt-2 text-muted-foreground text-justify">{amendment.conclusion}</p>}
                             {amendment.items2 && (
                                <ul className="mt-2 space-y-2 list-disc pl-5">
                                    {amendment.items2.map((item, itemIndex) => (
                                        <li key={itemIndex} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                                    ))}
                                </ul>
                            )}
                            {amendment.finalConclusion && <p className="mt-2 text-muted-foreground text-justify">{amendment.finalConclusion}</p>}
                        </li>
                    ))}
                </ol>
            </section>

            <section id="documents-required">
                <h2 className="text-3xl font-bold font-headline">Documents Required for ITR-5 Filing</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {documentsRequired.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>

            <section id="filing-tips">
                <h2 className="text-3xl font-bold font-headline">Filing Tips for AY 2025–26</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {filingTips.map((tip, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: tip }}></li>
                    ))}
                </ul>
            </section>
            
            <section id="why-choose-us">
                <h2 className="text-3xl font-bold font-headline">Why CACSFinacc is Your Trusted Partner for ITR-5 Filing</h2>
                 <p className="mt-4 text-muted-foreground text-justify">
                    At CACSFinacc, we specialize in providing comprehensive tax services, including:
                </p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify"><strong>ITR Filing Assistance:</strong> Expert guidance in filing ITR-5 accurately and timely.</li>
                    <li className="text-muted-foreground text-justify"><strong>Tax Planning:</strong> Strategic advice to minimize tax liabilities.</li>
                    <li className="text-muted-foreground text-justify"><strong>Compliance Support:</strong> Ensuring adherence to all tax regulations and deadlines.</li>
                    <li className="text-muted-foreground text-justify"><strong>Audit Services:</strong> Conducting thorough audits to identify and rectify discrepancies.</li>
                </ul>
                 <p className="mt-4 text-muted-foreground text-justify">
                    Our team of professionals is committed to delivering personalized solutions tailored to your entity's financial needs.
                </p>
            </section>
            

          </div>

          <aside className="lg:col-span-1 space-y-8 sticky top-24">
            <QuoteForm />
            <Card>
              <CardHeader>
                <CardTitle className="font-headline uppercase">Have a Question?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="flex items-center gap-2">
                    <strong>Phone:</strong>
                    <a href="tel:+919591633648" className="text-primary hover:underline">+91 9591633648</a>
                </p>
                 <p className="flex items-center gap-2">
                    <strong>Email:</strong>
                    <a href="mailto:info@cacsfinaccservices.com" className="text-primary hover:underline">info@cacsfinaccservices.com</a>
                </p>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );

    