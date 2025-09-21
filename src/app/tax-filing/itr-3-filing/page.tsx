
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'ITR-3 Return Filing Services | CACS FinAcc Digital',
  description: 'Specialized ITR-3 filing for individuals and HUFs with business or professional income. Ensure compliance with the latest updates for AY 2025-26.',
};

const whoShouldFile = [
    "Individuals and HUFs with income from business or profession.",
    "Partners in firms earning income like salary, commission, bonus, or interest.",
    "Taxpayers with income from salary/pension, house property, capital gains, and other sources.",
    "Those earning income from: Proprietary business, Professional services (e.g., CA, Doctor, Architect), Partnership firms (only for individual partners, not the firm itself), Income from salary or pension, house property, capital gains, or other sources.",
];

const structureOfITR3 = [
    "Part A - General Information",
    "Part B - Gross Total Income",
    "Schedule BP - Income from Business or Profession",
    "Schedule CG - Capital Gains",
    "Schedule OS - Income from Other Sources",
    "Schedule VDA - Virtual Digital Assets",
    "Schedule VI-A - Deductions and Exemptions",
    "Part B - Total Income and Tax Computation",
    "Verification and Signatures",
];

const documentsRequired = [
    "PAN (Permanent Account Number)",
    "Aadhaar Card",
    "Bank account details (account number and IFSC code)",
    "Form 16, if applicable (for salaried individuals)",
    "Details of your investments",
    "Books of accounts (if you have a business or professional income)",
];

const commonMistakes = [
    "Incorrect Personal Details: PAN, Name, and Address should match with IT records.",
    "Skipping VDA Reporting: Ensure to fill Schedule VDA for digital assets.",
    "Mismatched TDS Details: Cross-check with Form 26AS and AIS.",
    "Improper Claim of Deductions: Validate proofs for claimed deductions.",
];

const keyAmendments = [
    {
        title: "Capital Gains Reporting Enhancements:",
        items: [
            "Separate disclosure for capital gains on assets sold before and after July 23, 2024.",
            "Buyback proceeds from listed companies post October 1, 2024, to be reported as 'Nil' consideration under capital gains and also under 'Income from Other Sources'."
        ]
    },
    {
        title: "Asset and Liability Disclosure Threshold Increased:",
        items: [
            "Mandatory reporting only if total income exceeds ₹1 crore, up from the previous ₹50 lakh."
        ]
    },
    {
        title: "Tax Regime Selection Disclosure:",
        items: [
            "Taxpayers must specify their choice between the old and new tax regimes and provide details of Form 10-IE or 10-IEA, as applicable."
        ]
    },
    {
        title: "Mandatory TDS Section Specification:",
        items: [
            "Taxpayers are now required to mention the TDS section under which tax was deducted for each income source."
        ]
    },
    {
        title: "High-Value Transaction Reporting:",
        items: [
            "Mandatory disclosure for:",
            "Cash deposits over ₹1 crore in current accounts.",
            "Foreign travel expenses exceeding ₹2 lakh.",
            "Electricity bills over ₹1 lakh.",
            "Credit card payments exceeding ₹10 lakh."
        ]
    },
    {
        title: "Cryptocurrency and Virtual Digital Asset Reporting:",
        items: ["Income from Virtual Digital Assets (VDAs) must be separately disclosed under Schedule VDA. with a 30% tax rate applied."]
    },
    {
        title: "New Deduction Limits:",
        items: ["Revised limits under Section 80C, 80D, and 80G."]
    },
    {
        title: "Advanced Tax Computation:",
        items: ["Adjustments in advance tax liability calculations for businesses with fluctuating cash flows."]
    }
];

export default function Itr3FilingPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Tax Filings', href: '/tax-filing' },
            { label: 'ITR-3 Filing' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-itr3">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">ITR-3 Return Filing Services</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    ITR-3 is specifically designed for individuals and Hindu Undivided Families (HUFs) who have income from profits and gains of business or profession. This includes both proprietary businesses and professional income. For AY 2025-26, significant amendments and procedural changes have been introduced, aligning with the latest Finance Act, 2023.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">
                    CACSFinacc Services offers specialized ITR-3 Return Filing solutions tailored for individuals and Hindu Undivided Families (HUFs) engaged in business or professional activities. With the latest amendments for Assessment Year (AY) 2025-26, our expert team ensures accurate, compliant, and timely filings.
                </p>
            </section>

            <section id="who-should-file">
                <h2 className="text-3xl font-bold font-headline">Who Should File ITR-3?</h2>
                <p className="mt-4 text-muted-foreground text-justify">ITR-3 is applicable to:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {whoShouldFile.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{item}</li>
                    ))}
                </ul>
                <p className="mt-4 text-muted-foreground text-justify italic">
                    <strong>Note:</strong> Those eligible for ITR-1, ITR-2, or ITR-4 should not use ITR-3.
                </p>
            </section>

            <section id="who-should-not-file">
                <h2 className="text-3xl font-bold font-headline">Who should not file the ITR 3 Form?</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    An individual or Hindu Undivided Family (HUF) earning income as a partner of a partnership firm engaged in a business or profession is not eligible to file ITR-3. In such cases, they should file ITR-2 instead.
                </p>
            </section>

            <section id="due-date">
                <h2 className="text-3xl font-bold font-headline">Due Date for Filing Form ITR3</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    The due date for filing the ITR Form 3, which is the income tax return, varies depending on whether the case is an audit case or a non-audit case for different assessment years:
                </p>
                <p className='mt-4 font-semibold'>For Assessment Year 2025-26:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify">Non-audit Cases: The due date is July 31, 2025</li>
                    <li className="text-muted-foreground text-justify">Audit Cases: The due date is October 31, 2025</li>
                </ul>
                <p className="mt-4 text-muted-foreground text-justify italic">
                    These dates are subject to change by the income tax authorities, so it's essential to stay updated with any revisions or extensions of the due dates.
                </p>
            </section>

            <section id="late-filing-penalties">
                <h2 className="text-3xl font-bold font-headline">Late Filing Penalties for ITR3 Form</h2>
                <p className="mt-4 text-muted-foreground text-justify">The penalties for late filing of the ITR3 form in India are as follows:</p>
                <p className="mt-4 text-muted-foreground text-justify">If you file your return after the due date but before December 31 of the assessment year:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify">A late filing fee of ₹ 5,000 may be levied.</li>
                </ul>
                <p className="mt-4 text-muted-foreground text-justify">If you file your return after December 31 of the assessment year:</p>
                 <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify">A late filing fee of ₹ 10,000 may be levied.</li>
                </ul>
                <p className="mt-4 text-muted-foreground text-justify italic">
                    It's important to note that the late filing fee may vary based on the taxpayer's total income and other factors. Additionally, if your total income is less than ₹ 5 lakh, the maximum late filing fee is capped at ₹ 1,000. Therefore, it's advisable to file your ITR form 3 on time to avoid these penalties and any potential legal consequences.
                </p>
            </section>
            
            <section id="structure-of-itr3">
                <h2 className="text-3xl font-bold font-headline">Structure of ITR-3</h2>
                <p className="mt-4 text-muted-foreground text-justify">ITR-3 consists of the following sections:</p>
                <ol className="mt-4 space-y-3 list-decimal pl-5">
                    {structureOfITR3.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ol>
            </section>

            <section id="how-to-file">
                <h2 className="text-3xl font-bold font-headline">How to File ITR-3?</h2>
                 <ol className="mt-4 space-y-4 list-decimal pl-5">
                    <li>
                        <strong className="text-muted-foreground">Online Filing (e-Filing):</strong>
                        <ul className="mt-2 space-y-2 list-disc pl-5">
                            <li className="text-muted-foreground text-justify">Log in to the Income Tax e-Filing portal.</li>
                            <li className="text-muted-foreground text-justify">Select ITR-3 and assessment year 2025-26.</li>
                            <li className="text-muted-foreground text-justify">Fill in the relevant details and upload necessary documents.</li>
                            <li className="text-muted-foreground text-justify">Submit and e-verify using Aadhaar OTP, EVC, or DSC.</li>
                        </ul>
                    </li>
                    <li>
                        <strong className="text-muted-foreground">Offline Filing:</strong>
                        <ul className="mt-2 space-y-2 list-disc pl-5">
                            <li className="text-muted-foreground text-justify">Download the ITR-3 Java or Excel utility from the Income Tax portal.</li>
                            <li className="text-muted-foreground text-justify">Fill, validate, and generate XML.</li>
                            <li className="text-muted-foreground text-justify">Upload the XML on the portal.</li>
                        </ul>
                    </li>
                </ol>
            </section>

            <section id="documents-required">
                <h2 className="text-3xl font-bold font-headline">Documents required for ITR 3 Form</h2>
                <p className="mt-4 text-muted-foreground text-justify">To file your income tax return (ITR) on CACSFinacc for ITR-3, the following documents are needed.</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {documentsRequired.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{item}</li>
                    ))}
                </ul>
                <p className="mt-4 text-muted-foreground text-justify italic">
                    Having these documents ready will make the ITR filing process smoother and more efficient.
                </p>
            </section>

            <section id="common-mistakes">
                <h2 className="text-3xl font-bold font-headline">Common Mistakes to Avoid</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {commonMistakes.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{item}</li>
                    ))}
                </ul>
            </section>

            <section id="key-amendments">
                <h2 className="text-3xl font-bold font-headline">Key Amendments for AY 2025-26</h2>
                <p className="mt-4 text-muted-foreground text-justify">The Finance Act, 2023, has brought crucial changes:</p>
                <ol className="mt-4 space-y-4 list-decimal pl-5">
                    {keyAmendments.map((amendment, index) => (
                        <li key={index}>
                            <strong className="text-muted-foreground">{amendment.title}</strong>
                            <ul className="mt-2 space-y-2 list-disc pl-5">
                                {amendment.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="text-muted-foreground text-justify">{item}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
            </section>

            <section id="why-choose-us">
                <h2 className="text-3xl font-bold font-headline">Why Choose CACSFinacc Services?</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify"><strong>Expertise:</strong> Our team stays updated with the latest tax laws and amendments.</li>
                    <li className="text-muted-foreground text-justify"><strong>Accuracy:</strong> Ensuring error-free filings to minimize the risk of notices.</li>
                    <li className="text-muted-foreground text-justify"><strong>Timeliness:</strong> Adherence to all deadlines to avoid penalties.</li>
                    <li className="text-muted-foreground text-justify"><strong>Confidentiality:</strong> Strict measures to protect your financial data.</li>
                </ul>
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
