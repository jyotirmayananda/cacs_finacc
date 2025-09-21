
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'ITR-7 Return Filing Services | CACS FinAcc Digital',
  description: 'Comprehensive tax solutions for trusts, societies, and exempt entities. Ensure compliance with the latest updates for AY 2025–26 with our expert filing services.',
};

const whoShouldFile = [
    "Political Parties",
    "Charitable or Religious Trusts",
    "Universities and Educational Institutions",
    "Research Institutions",
    "Other Entities Claiming Exemptions Under Sections 11, 12, 10(23C), or 13",
];

const whoShouldFileAY2526 = [
    "Charitable and Religious Trusts",
    "Educational Institutions, Hospitals claiming exemption under Sections 10(23C)(iiiab to vi)",
    "Scientific Research Associations",
    "News agencies (Section 10(22B))",
    "Political Parties (Section 13A)",
    "Universities and Colleges (not required to furnish return under other sections)",
    "Any entity registered under Section 12A/12AB",
];

const complianceGuidelines = [
    "Audit under Section 12A(1)(b) is mandatory if gross income exceeds ₹2.5 lakh",
    "Filing of Form 10B or 10BB must be done before filing ITR-7",
    "Income Application and Corpus Funds must be disclosed separately",
    "Ensure correct filing of Form 9A (for accumulation of income) and Form 10 (for setting apart income)",
];

const latestUpdates = [
    "Revised Audit Reporting Format (Form 10B & 10BB): Trusts and institutions must ensure audit compliance as per amended rules.",
    "Mandatory UDIN Integration: CA’s UDIN must be validated for all audit reports attached.",
    "Updated Schedule ER & EC: Detailed segregation of expenditure related to corpus, other funds, and applied income.",
    "Foreign Contributions (FCRA) Declaration: Entities receiving foreign donations must disclose in prescribed format.",
    "Schedule TDS Reconciliation: Enhanced TDS credit validation with Form 26AS and AIS.",
    "PAN-Aadhaar Validation: Institutions must ensure linking of Aadhaar for key personnel or signatories.",
];

const keyAmendments = [
    {
        title: "Enhanced Disclosure of Foreign Contributions",
        description: "The revised ITR-7 mandates increased disclosure by political parties, charitable trusts, universities, and research institutions regarding:",
        items: [
            "Income from Foreign Contributions",
            "Voluntary Donations",
            "Accumulated Income",
            "Utilization of Funds"
        ],
        conclusion: "These changes aim to enhance transparency and accountability in financial reporting by organizations eligible to file ITR-7. The newly required disclosures seek to strengthen oversight on the inflow and use of foreign donations and contributions within these institutions."
    },
    {
        title: "Revised Reporting Requirements for Anonymous Donations",
        description: "A new column has been introduced in Schedule VC to report anonymous donations not taxable under Section 115BBC. This exemption applies when the total of such donations exceeds ₹1 lakh or 5% of total donations."
    },
    {
        title: "Updated Schedule A – Application of Income",
        description: "Schedule A now requires the disclosure of donations made to other registered or approved trusts or institutions, including the percentage considered as application of income. The Finance Act, 2023, has reduced this percentage to 85%."
    },
    {
        title: "Form 10 Filing Details",
        description: "When accumulating income under Sections 11(2) and 11(5) or the third proviso to Section 10(23C), the ITR-7 now requires reporting whether Form 10 was filed with the Assessing Officer and the filing date, if applicable."
    },
    {
        title: "Introduction of Residuary Clause in Part B-TI",
        description: "A new column has been added to report any other income not exempt under the Income Tax Act. This addition aims to capture all sources of income for comprehensive reporting."
    }
];

const keyDisclosures = [
    "Nature of Institution: Trust, university, hospital, etc.",
    "Section under which exemption is claimed",
    "Registration details under Section 12AB, 80G, 10(23C), FCRA (if applicable)",
    "Gross Receipts, Donations, Grants, and Applied Income",
    "Corpus Funds and Investments",
    "Audit report details (Form 10B/10BB)",
    "Foreign Contributions & Utilization",
    "Asset and liability details",
    "Schedule TDS/TCS: Cross-verified with 26AS",
];

const filingProcess = [
    "Eligibility Review: Identify the correct section under which exemption is claimed.",
    "Document Collection: Gather audited financials, registration certificates, donation details, bank statements, and Form 10B/10BB.",
    "Form Preparation: Segregate income as per charitable purposes, business income (if any), capital gains, and applied income.",
    "Verification & Compliance Check: Validate exemption eligibility, Form 9A/10 timelines, and audit applicability.",
    "E-Filing with DSC: ITR-7 must be filed online using Digital Signature (DSC) of the managing trustee or authorized signatory.",
];

const documentsChecklist = [
    "PAN, Trust Deed, Registration under 12AB / 10(23C)",
    "Audited financial statements",
    "Form 10B / 10BB",
    "Income and expenditure statements",
    "Details of donations (incl. 80G)",
    "Form 26AS, AIS, and bank statements",
    "FCRA registration and contribution details (if applicable)",
    "Board/Trustee meeting resolutions",
];

const filingTips = [
    "Verify Eligibility: Ensure your entity qualifies to file ITR-7 before proceeding.",
    "Accurate Reporting: Provide complete and accurate information in all sections, especially in Schedule VC and Schedule A.",
    "Timely Filing: Adhere to the applicable due dates to avoid penalties.",
    "Documentation: Maintain comprehensive records to support all claims and disclosures made in the return.",
    "ITR Filing Assistance: Expert guidance in filing ITR-7 accurately and timely.",
    "Tax Planning: Strategic advice to minimize tax liabilities.",
    "Compliance Support: Ensuring adherence to all tax regulations and deadlines.",
    "Audit Services: Conducting thorough audits to identify and rectify discrepancies.",
];

const whyChooseUs = [
    "ITR Filing Assistance: Expert guidance in filing ITR-7 accurately and timely.",
    "Tax Planning: Strategic advice to minimize tax liabilities.",
    "Compliance Support: Ensuring adherence to all tax regulations and deadlines.",
    "Audit Services: Conducting thorough audits to identify and rectify discrepancies.",
];


export default function Itr7FilingPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Tax Filings', href: '/tax-filing' },
            { label: 'ITR-7 Return Filing' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-itr7">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">ITR-7 Filing: Comprehensive Tax Solutions for Trusts and Exempt Entities</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    The Income Tax Department has released the updated Income Tax Return (ITR) Form 7 for the Assessment Year (AY) 2025–26, effective from April 1, 2025. This revised form introduces several significant amendments aimed at enhancing compliance, transparency, and alignment with recent tax reforms.
                </p>
            </section>

            <section id="what-is-itr7-detailed">
                <h2 className="text-3xl font-bold font-headline">What is ITR-7?</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    ITR-7 is the Income Tax Return form to be filed by persons including trusts, societies, and institutions that are claiming exemption under the following sections of the Income Tax Act, 1961:
                </p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify"><strong>Section 139(4A):</strong> Charitable or religious trusts</li>
                    <li className="text-muted-foreground text-justify"><strong>Section 139(4B):</strong> Political parties</li>
                    <li className="text-muted-foreground text-justify"><strong>Section 139(4C):</strong> Scientific research institutions, hospitals, universities, etc.</li>
                    <li className="text-muted-foreground text-justify"><strong>Section 139(4D):</strong> Colleges or educational institutions not required to furnish return under any other provision</li>
                </ul>
                <p className="mt-4 text-muted-foreground text-justify">
                    If your entity claims income exemption under Section 11, 12, 10(23C), or 10(46), ITR-7 is mandatory.
                </p>
            </section>
            
            <section id="who-should-file">
                <h2 className="text-3xl font-bold font-headline">Who Should File ITR-7?</h2>
                <p className="mt-4 text-muted-foreground text-justify">ITR-7 is applicable to:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {whoShouldFile.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{item}</li>
                    ))}
                </ul>
                <p className="mt-4 text-muted-foreground text-justify">
                    These entities are required to file ITR-7 to report their income, claim exemptions, and ensure compliance with the provisions of the Income-tax Act, 1961.
                </p>
            </section>

            <section id="who-should-file-ay2526">
                <h2 className="text-3xl font-bold font-headline">Who Should File ITR-7 in AY 2025-26?</h2>
                <p className="mt-4 text-muted-foreground text-justify">Entities falling under the following categories must file ITR-7:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {whoShouldFileAY2526.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{item}</li>
                    ))}
                </ul>
            </section>

            <section id="compliance-guidelines">
                <h2 className="text-3xl font-bold font-headline">Compliance for Charitable and Exempt Entities</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {complianceGuidelines.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{item}</li>
                    ))}
                </ul>
            </section>

            <section id="latest-updates">
                <h2 className="text-3xl font-bold font-headline">Latest CBDT Amendments and Income Tax Utility Changes</h2>
                <ol className="mt-4 space-y-3 list-decimal pl-5">
                    {latestUpdates.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{item}</li>
                    ))}
                </ol>
            </section>

            <section id="key-amendments">
                <h2 className="text-3xl font-bold font-headline">Key Amendments in ITR-7 for AY 2025–26</h2>
                <ol className="mt-4 space-y-4 list-decimal pl-5">
                    {keyAmendments.map((amendment, index) => (
                        <li key={index}>
                            <strong className="text-muted-foreground">{amendment.title}</strong>
                            <p className="mt-2 text-muted-foreground text-justify">{amendment.description}</p>
                            {amendment.items && (
                                <ul className="mt-2 space-y-2 list-disc pl-5">
                                    {amendment.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="text-muted-foreground text-justify">{item}</li>
                                    ))}
                                </ul>
                            )}
                            {amendment.conclusion && <p className="mt-2 text-muted-foreground text-justify">{amendment.conclusion}</p>}
                        </li>
                    ))}
                </ol>
            </section>
            
            <section id="key-disclosures">
                <h2 className="text-3xl font-bold font-headline">Key Disclosures Required in ITR-7</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {keyDisclosures.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{item}</li>
                    ))}
                </ul>
            </section>

            <section id="filing-process">
                <h2 className="text-3xl font-bold font-headline">Step-by-Step ITR-7 Filing Process at CACSFinacc</h2>
                <ol className="mt-4 space-y-3 list-decimal pl-5">
                    {filingProcess.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{item}</li>
                    ))}
                </ol>
            </section>

            <section id="documents-checklist">
                <h2 className="text-3xl font-bold font-headline">Documents Checklist for ITR-7</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {documentsChecklist.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{item}</li>
                    ))}
                </ul>
            </section>
            
            <section id="filing-tips">
                <h2 className="text-3xl font-bold font-headline">Filing Tips for AY 2025–26</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {filingTips.map((tip, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{tip}</li>
                    ))}
                </ul>
                <p className="mt-4 text-muted-foreground text-justify">Our team of professionals is committed to delivering personalized solutions tailored to your entity's financial needs.</p>
            </section>

            <section id="why-choose-us">
                <h2 className="text-3xl font-bold font-headline">Why Choose CACSFinacc?</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {whyChooseUs.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{item}</li>
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
