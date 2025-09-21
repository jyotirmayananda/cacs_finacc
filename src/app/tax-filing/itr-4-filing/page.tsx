
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const metadata: Metadata = {
  title: 'ITR-4 (Sugam) Filing Services | CACS FinAcc Digital',
  description: 'Expert ITR-4 filing for taxpayers under the presumptive income scheme. Learn about eligibility, updates for AY 2025–26, and our seamless filing process.',
};

const incomeLimits = [
    { section: "44AD", type: "Business", income: "6% (digital) or 8% (cash) of gross turnover", turnover: "₹2 crore" },
    { section: "44ADA", type: "Profession", income: "50% of gross receipts", turnover: "₹50 lakh" },
    { section: "44AE", type: "Transport", income: "₹1,000 per ton/day per vehicle", turnover: "NA" },
];

const whoShouldFile = [
    "You are a resident individual, HUF, or firm (non-LLP)",
    "Your income is from business or profession and you have opted for presumptive taxation",
    "Total income does not exceed ₹50 lakhs",
    "You do not have foreign assets, capital gains, agricultural income > ₹5,000, or more than one house property",
];

const whoShouldNotFile = [
    "Are a director in a company.",
    "Have held unlisted equity shares at any time during the previous year.",
    "Possess any asset or financial interest located outside India.",
    "Have income from any source outside India.",
    "Are a person in whose case payment or deduction of tax has been deferred on ESOP.",
    "Have any brought forward loss or loss to be carried forward under any head of income.",
];

const eligibilityCriteria = [
    "Total Income: The total Income should not exceed Rs. 50 lakhs.",
    "Income from Salary or Income from Pension.",
    "Income from One House Property.",
    "Interest income and/or Income from family pension taxable under Other Sources.",
    "Income from a business, which is computed on a presumptive basis (Gross Turnover up to Rs. 2 crores).",
    "Income from a business, computed on a presumptive basis (Income from goods carriage up to ten vehicles).",
    "Income from a profession, computed on a presumptive basis under Section 44ADA (Gross receipt up to Rs. 50 lakh).",
];

const keyAmendments = [
    {
        title: "Inclusion of Long-Term Capital Gains (LTCG) Reporting:",
        description: "Taxpayers can now report LTCG under Section 112A (from listed equity shares and equity-oriented mutual funds) in ITR-4, provided:",
        items: [
            "The total LTCG does not exceed ₹1.25 lakh.",
            "There are no brought-forward losses or losses to be carried forward under the capital gains head."
        ],
        conclusion: "This change allows more taxpayers with minimal LTCG to use the simpler ITR-4 form."
    },
    {
        title: "Enhanced Deductions and Disclosures:",
        items: [
            "Deductions under Sections 80C to 80U must now be selected from a drop-down menu in the e-filing portal, and the exact clause/sub-section must be specified.",
            "Income from retirement accounts maintained abroad (Section 89A) has new fields for better relief tracking."
        ]
    },
    {
        title: "Aadhaar Enrollment ID Removed:",
        description: "The 28-digit Aadhaar Enrolment ID is no longer accepted. The field now only accepts valid 12-digit Aadhaar Numbers."
    },
    {
        title: "Additional Column under Schedule TDS:",
        description: "An additional column has been added under the Schedule - TDS Details to specify the section under which TDS is deducted."
    },
    {
        title: "Tax Regime Selection (Section 115BAC):",
        items: [
            "Default Tax Regime: The new tax regime is now the default for individuals.",
            "Opting Out: Eligible taxpayers can opt out and choose the old regime each year directly in the ITR.",
            "Form 10-IEA: If a taxpayer opted out of the new regime in AY 2024-25, they must declare and confirm their choice or change it for AY 2025-26.",
            "First-Time Opt-Out: First-time opt-outs in AY 2025-26 must provide Form 10-IEA acknowledgment details. Form 10-IEA must be filed before the due date of return filing."
        ]
    }
];

const filingTips = [
    "Verify Eligibility: Ensure you meet the criteria for ITR-4 before proceeding.",
    "Report All Income: Accurately report all sources of income, including LTCG, salary, and other sources.",
    "Maintain Documentation: Keep records of all deductions and exemptions claimed.",
    "File Timely: Adhere to the due dates to avoid penalties.",
];

const ourProcess = [
    "Consultation & Tax Profiling: Analyze business/profession type and eligibility for presumptive taxation",
    "Data Collection: Collect bank statements, invoice summary, GST returns, and investment proofs",
    "Computation of Taxable Income: Based on turnover/receipts with applicable presumptive percentage",
    "Tax Filing & E-Verification: Submit ITR on the Income Tax portal and verify using Aadhaar OTP, EVC, or net banking",
];

const whyChooseUs = [
    "Expert advisory on presumptive vs regular taxation",
    "Seamless filing with GST & TDS reconciliation",
    "Tax planning and savings strategies customized for your profession",
];

export default function Itr4FilingPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Tax Filings', href: '/tax-filing' },
            { label: 'ITR-4 Return Filing' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-itr4">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">ITR-4 Filing: Simplified Tax Returns</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    The ITR-4 Form, commonly referred to as the Sugam form, is specifically designed for taxpayers who have opted for the presumptive income scheme outlined in Section 44AD, Section 44ADA, and Section 44AE of the Income Tax Act. It is mandatory for eligible taxpayers to complete and submit this form.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">
                    As the due date for Income Tax Return (ITR) filing approaches, it's crucial for taxpayers to understand the recent updates to ITR-4 (Sugam) for Assessment Year (AY) 2025–26. These changes, introduced by the Central Board of Direct Taxes (CBDT), aim to simplify the filing process for small taxpayers and ensure compliance with the latest tax regulations.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">
                    CACSFinacc Services offers expert ITR-4 filing services to help you navigate the presumptive taxation scheme and ensure accurate, timely, and compliant tax returns.
                </p>
            </section>

            <section id="what-is-itr4-detailed">
                <h2 className="text-3xl font-bold font-headline">What is ITR-4?</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    ITR-4 (Sugam) is a simplified Income Tax Return form applicable to resident individuals, HUFs, and Firms (other than LLPs) who opt for presumptive income scheme under:
                </p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground"><strong>Section 44AD – Business income</strong></li>
                    <li className="text-muted-foreground"><strong>Section 44ADA – Professional income (specified professions)</strong></li>
                    <li className="text-muted-foreground"><strong>Section 44AE – Income from goods carriage (transport business)</strong></li>
                </ul>
                <p className="mt-4 text-muted-foreground text-justify">
                    Not applicable for companies, LLPs, or taxpayers with foreign assets or income.
                </p>
            </section>
            
            <section id="who-should-file">
                <h2 className="text-3xl font-bold font-headline">Who Should File ITR-4 for AY 2025-26?</h2>
                <p className="mt-4 text-muted-foreground text-justify">You should file ITR-4 if:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {whoShouldFile.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{item}</li>
                    ))}
                </ul>
                <p className="mt-4 text-muted-foreground text-justify">However, ITR-4 is not applicable if you:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {whoShouldNotFile.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{item}</li>
                    ))}
                </ul>
            </section>

            <section id="what-is-presumptive-scheme">
                <h2 className="text-3xl font-bold font-headline">What is a Presumptive Taxation Scheme?</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    The presumptive taxation scheme is designed to simplify tax compliance for certain individuals and businesses. Under Section 44AA of the Income Tax Act, individuals and businesses engaged in specific activities are typically required to maintain detailed accounting records. However, Sections 44AD, 44ADA, and 44AE offer relief to small taxpayers by allowing them to estimate their Income at prescribed rates, reducing the burden of maintaining extensive financial records.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">Here's a breakdown of these schemes for users of ITR4:</p>
                <h3 className="mt-6 text-2xl font-bold font-headline">Section 44AD</h3>
                <p className="mt-4 text-muted-foreground text-justify">This scheme allows Resident Individuals, Resident Hindu Undivided Families (HUFs), and Resident Partnership Firms (excluding Limited Liability Partnerships) engaged in certain businesses to calculate their Income on an estimated basis, provided they meet specific conditions.</p>
                <h3 className="mt-6 text-2xl font-bold font-headline">Section 44ADA</h3>
                <p className="mt-4 text-muted-foreground text-justify">Resident individuals in India who are professionals in fields specified under Section 44AA(1) can use this scheme to estimate their professional Income, subject to certain conditions.</p>
                <h3 className="mt-6 text-2xl font-bold font-headline">Section 44AE</h3>
                <p className="mt-4 text-muted-foreground text-justify">This scheme is applicable to individuals, HUFs, Firms (excluding Limited Liability Partnerships), and other residents or non-residents engaged in the business of plying, leasing, or hiring goods carriages. They can estimate their Income under this scheme, provided they own not more than ten goods carriages during the previous year.</p>
            </section>

            <section id="eligibility-criteria">
                <h2 className="text-3xl font-bold font-headline">Eligibility Criteria for Filing SUGAM (ITR-4) Form</h2>
                <p className="mt-4 text-muted-foreground text-justify">To qualify for using the ITR-4 SUGAM form, the taxpayer must meet the following criteria for the assessment year:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {eligibilityCriteria.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{item}</li>
                    ))}
                </ul>
            </section>
            
            <section id="income-limits">
                <h2 className="text-3xl font-bold font-headline">Income Limits Under Presumptive Scheme</h2>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Section</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Income Presumption</TableHead>
                            <TableHead>Maximum Turnover</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {incomeLimits.map((item) => (
                            <TableRow key={item.section}>
                                <TableCell className="font-medium">{item.section}</TableCell>
                                <TableCell>{item.type}</TableCell>
                                <TableCell>{item.income}</TableCell>
                                <TableCell>{item.turnover}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <p className="mt-4 text-muted-foreground text-justify font-semibold">Important Notes:</p>
                <p className="mt-2 text-muted-foreground text-justify">When Income is computed on a presumptive basis under sections 44AD, 44AE, or 44ADA, it is presumed to have been calculated after accounting for all allowances, depreciation, losses, or deductions as per the Income-tax Act. However, individuals incurring losses after applying the proviso to sub-section 3 of Section 44AE are required to file ITR-5.</p>
                <p className="mt-2 text-muted-foreground text-justify">If the taxpayer needs to combine the Income of another person, such as a spouse or minor child, with their own Income, the SUGAM form can only be used if the additional Income falls within the specified income categories mentioned above.</p>
            </section>

            <section id="whats-new">
                <h2 className="text-3xl font-bold font-headline">What’s New in ITR-4 for AY 2025-26? (CBDT Updates)</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground">Enhanced disclosures under presumptive taxation for better compliance tracking</li>
                    <li className="text-muted-foreground">New declaration for opt-out of Section 44AD/ADA in future years</li>
                    <li className="text-muted-foreground">Integration with AIS (Annual Information Statement) and Form 26AS to pre-fill data</li>
                    <li className="text-muted-foreground">VDAs (Crypto Assets) – ITR-4 not applicable if income includes virtual digital assets</li>
                    <li className="text-muted-foreground">Updated validation with GST turnover, TDS credit, and advance tax</li>
                </ul>
            </section>

            <section id="key-disclosures">
                <h2 className="text-3xl font-bold font-headline">Key Disclosures in ITR-4</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground">Gross turnover or receipts</li>
                    <li className="text-muted-foreground">Gross profit computed as per presumptive scheme</li>
                    <li className="text-muted-foreground">Details of Bank accounts and cash balance</li>
                    <li className="text-muted-foreground">Details of advance tax/self-assessment tax paid</li>
                    <li className="text-muted-foreground">Details of partner/share in firm, if applicable</li>
                    <li className="text-muted-foreground">Taxpayer’s opt-in or opt-out status under presumptive income</li>
                </ul>
            </section>

            <section id="key-amendments">
                <h2 className="text-3xl font-bold font-headline">Key Amendments in ITR-4 for AY 2025–26</h2>
                <ol className="mt-4 space-y-4 list-decimal pl-5">
                    {keyAmendments.map((amendment, index) => (
                        <li key={index}>
                            <strong className="text-muted-foreground">{amendment.title}</strong>
                            {amendment.description && <p className="mt-2 text-muted-foreground text-justify">{amendment.description}</p>}
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
            
            <section id="filing-tips">
                <h2 className="text-3xl font-bold font-headline">Filing Tips for AY 2025–26</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {filingTips.map((tip, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{tip}</li>
                    ))}
                </ul>
            </section>

            <section id="our-process">
                <h2 className="text-3xl font-bold font-headline">ITR-4 Filing Process with CACSFinacc</h2>
                <ol className="mt-4 space-y-3 list-decimal pl-5">
                    {ourProcess.map((step, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{step}</li>
                    ))}
                </ol>
            </section>

            <section id="why-choose-us">
                <h2 className="text-3xl font-bold font-headline">Why Choose CACSFinacc for Your ITR-4 Filing?</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {whyChooseUs.map((reason, index) => (
                        <li key={index} className="text-muted-foreground text-justify"><strong>{reason}</strong></li>
                    ))}
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

    