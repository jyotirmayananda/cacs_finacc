
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'ITR-6 Return Filing Services | CACS FinAcc Digital',
  description: 'Expert ITR-6 filing for companies. Ensure compliance with the latest updates for AY 2025–26 and avoid penalties with our professional services.',
};

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

const latestUpdates = [
    "<strong>Mandatory Reporting of Virtual Digital Assets (VDAs):</strong> Companies must now disclose profits/losses from cryptocurrencies or digital assets.",
    "<strong>Enhanced Reporting under Schedule BP:</strong> Breakup of income from business/profession, capital assets, dividend, and others required.",
    "<strong>Depreciation Schedule Overhaul:</strong> Asset-wise disclosure for depreciation under the Income Tax Act is now compulsory.",
    "<strong>Updated Schedule FA (Foreign Assets):</strong> Companies holding shares, interests, or bank accounts abroad must file detailed information.",
    "<strong>Audit Trail Compliance:</strong> As per MCA notification, companies must confirm whether accounting software has audit trail capabilities from 01.04.2024 onwards.",
];

const complianceGuidelines = [
    "Standards on Auditing (SA) and Accounting Standards (AS/Ind AS)",
    "Tax Audit Reporting (Form 3CA/3CD) under Section 44AB",
    "Mandatory filing of financial statements with Director’s Report",
    "Proper maintenance of Books of Account, Schedules, and audit evidence",
    "Full compliance with ICAI Code of Ethics and disciplinary standards",
];

const keyDisclosures = [
    "<strong>General company info:</strong> CIN, PAN, email, nature of business",
    "<strong>Income details:</strong> Business profits, capital gains, dividend, rental, or other income",
    "<strong>Tax Computation & MAT (Section 115JB):</strong> Book Profit vs Taxable Profit",
    "<strong>Deductions:</strong> Chapter VI-A (80G, 80JJAA, 80IA, etc.)",
    "<strong>Audit details:</strong> Audit report submission, auditor details",
    "<strong>TDS/TCS Schedules:</strong> Reconciliation with Form 26AS and AIS",
    "<strong>Shareholding Pattern:</strong> List of shareholders in unlisted companies",
    "<strong>Foreign Assets & Transactions:</strong> Mandatory in case of international presence",
];

const filingProcess = [
    "<strong>Initial Consultation:</strong> Understand the business model, tax obligations, and compliance status.",
    "<strong>Data Collection & Reconciliation:</strong> Collect audited financials, tax audit reports, TDS statements, GST data, etc.",
    "<strong>Form Preparation & Tax Computation:</strong> Compute MAT, surcharge, cess, carry forward losses, AMT, etc.",
    "<strong>Review & Validation:</strong> Ensure cross-verification with Form 26AS, AIS, GSTR-9.",
    "<strong>E-Filing with DSC & Acknowledgment:</strong> File ITR-6 online with digital signature and confirm submission receipt.",
];

const filingTips = [
    "<strong>Verify Eligibility:</strong> Ensure your entity qualifies to file ITR-6 before proceeding.",
    "<strong>Accurate Reporting:</strong> Provide complete and accurate information in all sections, especially in Schedule-Capital Gain and Schedule-TDS.",
    "<strong>Timely Filing:</strong> Adhere to the applicable due dates to avoid penalties.",
    "<strong>Documentation:</strong> Maintain comprehensive records to support all claims and disclosures made in the return.",
];

const whyChooseUs = [
    "<strong>ITR Filing Assistance:</strong> Expert guidance in filing ITR-6 accurately and timely.",
    "<strong>Tax Planning:</strong> Strategic advice to minimize tax liabilities.",
    "<strong>Compliance Support:</strong> Ensuring adherence to all tax regulations and deadlines.",
    "<strong>Audit Services:</strong> Conducting thorough audits to identify and rectify discrepancies.",
];

export default function Itr6FilingPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Tax Filings', href: '/tax-filing' },
            { label: 'ITR-6 Filing' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-itr6">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">ITR-6 Return Filing Services</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    The Central Board of Direct Taxes (CBDT) has notified the updated Income Tax Return (ITR) Form 6 for the Assessment Year (AY) 2025–26, effective from April 1, 2025. This revised form introduces several significant amendments aimed at enhancing compliance, transparency, and alignment with recent tax reforms.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">
                    CACSFinacc offers expert ITR-6 filing services to ensure accurate and timely submission of your company's income tax return. We handle the complexities of ITR-6 filing, allowing you to focus on your core business activities.
                </p>
            </section>

            <section id="what-is-itr6-detailed">
                <h2 className="text-3xl font-bold font-headline">What is ITR-6?</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    ITR-6 is the Income Tax Return form applicable to companies registered under the Companies Act, except those claiming exemption under Section 11. It is mandatory to file ITR-6 online with a digital signature.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">This form is mainly used by:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground">Private Limited Companies</li>
                    <li className="text-muted-foreground">Public Limited Companies</li>
                    <li className="text-muted-foreground">One Person Companies (OPC)</li>
                    <li className="text-muted-foreground">Foreign Companies operating in India</li>
                    <li className="text-muted-foreground">Any company not claiming exemption under charitable/religious trust provisions</li>
                </ul>
                <p className="mt-4 text-muted-foreground text-justify">
                    Companies claiming exemption under Section 11 (i.e., charitable or religious trusts) should use ITR-7.
                </p>
            </section>

            <section id="who-must-file">
                <h2 className="text-3xl font-bold font-headline">Who Must File ITR-6?</h2>
                <p className="mt-4 text-muted-foreground text-justify">ITR-6 is applicable to all companies that:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify">Are companies (other than those claiming exemption under Section 11 of the Income-tax Act, 1961).</li>
                    <li className="text-muted-foreground text-justify">Have income from business or profession, capital gains, other sources, etc.</li>
                    <li className="text-muted-foreground text-justify">Are required to get accounts audited under Section 44AB.</li>
                </ul>
                <p className="mt-4 text-muted-foreground text-justify">
                    Companies with income from dividends, foreign subsidiaries, royalties, interest, capital investments, and domestic/foreign transactions must use this form.
                </p>
                <p className="mt-4 text-muted-foreground text-justify italic">
                    <strong>Note:</strong> Companies claiming exemption under Section 11 (charitable or religious trusts) are not eligible to use ITR-6.
                </p>
            </section>
            
            <section id="key-amendments">
                <h2 className="text-3xl font-bold font-headline">Key Amendments in ITR-6 for AY 2025–26</h2>
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

            <section id="latest-updates">
                <h2 className="text-3xl font-bold font-headline">Latest CBDT Notifications and Income Tax Portal Updates</h2>
                <p className="mt-4 text-muted-foreground text-justify">As per the latest CBDT notifications and Income Tax Portal updates:</p>
                <ol className="mt-4 space-y-3 list-decimal pl-5">
                    {latestUpdates.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ol>
            </section>

            <section id="compliance-guidelines">
                <h2 className="text-3xl font-bold font-headline">Guidelines & Compliance for Companies</h2>
                <p className="mt-4 text-muted-foreground text-justify">Mandates strict adherence to:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {complianceGuidelines.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{item}</li>
                    ))}
                </ul>
            </section>

            <section id="key-disclosures">
                <h2 className="text-3xl font-bold font-headline">Key Disclosures in ITR-6</h2>
                <p className="mt-4 text-muted-foreground text-justify">Key disclosures in ITR-6 include:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {keyDisclosures.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>

            <section id="filing-process">
                <h2 className="text-3xl font-bold font-headline">Step-by-Step ITR-6 Filing Process at CACSFinacc</h2>
                <p className="mt-4 text-muted-foreground text-justify">Our step-by-step ITR-6 filing process includes:</p>
                <ol className="mt-4 space-y-3 list-decimal pl-5">
                    {filingProcess.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ol>
            </section>
            
            <section id="filing-tips">
                <h2 className="text-3xl font-bold font-headline">Filing Tips for AY 2025–26</h2>
                <p className="mt-4 text-muted-foreground text-justify">Important filing tips for AY 2025–26:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {filingTips.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>

            <section id="why-choose-us">
                <h2 className="text-3xl font-bold font-headline">Why Choose CACSFinacc?</h2>
                <p className="mt-4 text-muted-foreground text-justify">At CACSFinacc, we specialize in providing comprehensive tax services, including:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {whyChooseUs.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
                <p className="mt-4 text-muted-foreground text-justify">Our team of professionals is committed to delivering personalized solutions tailored to your entity's financial needs.</p>
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
}

    