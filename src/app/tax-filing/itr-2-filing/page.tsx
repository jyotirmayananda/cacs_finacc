
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const metadata: Metadata = {
  title: 'ITR-2 Return Filing Services | CACS FinAcc Digital',
  description: 'Expert ITR-2 filing for individuals and HUFs with income from capital gains, multiple properties, or foreign assets. Ensure compliance with our professional services.',
};

const whoShouldFile = [
    "Have income from salary/pension.",
    "Earn income from capital gains (e.g., sale of property, shares).",
    "Have income from more than one house property.",
    "Have foreign income or own foreign assets.",
    "Hold directorships in companies or unlisted equity shares.",
    "Have agricultural income exceeding ₹5,000.",
    "Do not have income from profits and gains of business or profession.",
];

const keyUpdates = [
    {
        title: "Enhanced Capital Gains Reporting:",
        description: "The ITR-2 form now features a separate section for detailed reporting of capital gains, including provisions for claiming capital losses from share buybacks effective from October 1, 2024."
    },
    {
        title: "Increased Asset Reporting Threshold:",
        description: "Taxpayers with gross total income exceeding ₹1 crore are now required to furnish details of assets and liabilities, raising the threshold from the previous ₹50 lakh limit."
    },
    {
        title: "Mandatory Disclosure of TDS Sections:",
        description: "Taxpayers must specify the relevant Tax Deducted at Source (TDS) section under which tax was deducted for each income source, enhancing transparency and accuracy in tax reporting."
    },
    {
        title: "Aadhaar Enrolment ID No Longer Accepted:",
        description: "The ITR-2 form has removed the column for Aadhaar Enrolment ID. Taxpayers must now provide their actual Aadhaar number when filing returns."
    }
];

const ourServices = [
    { 
        title: "Documentation and Analysis", 
        items: [
            "Compilation of necessary documents: Form 16, interest certificates, property income details, capital gains statements, etc.",
            "Analysis of investment proofs, deductions, and exemptions applicable under Sections 80C to 80U."
        ] 
    },
    { 
        title: "Capital Gains Computation", 
        items: [
            "Accurate computation of Short-term and Long-term Capital Gains from shares, mutual funds, real estate, and other investments.",
            "Adjustment for indexation benefits and application of exemptions under Sections 54, 54EC, and 54F."
        ] 
    },
    { 
        title: "Foreign Assets & Income Reporting", 
        items: [
            "Detailed reporting of foreign bank accounts, financial interests, and immovable property as required under the Black Money Act.",
            "Compliance with Schedule FA (Foreign Assets)."
        ] 
    },
    { 
        title: "House Property Income Calculation", 
        items: [
            "Calculation of income from multiple house properties.",
            "Deduction of municipal taxes paid, standard deduction (30%), and interest on borrowed capital."
        ] 
    },
    { 
        title: "Deductions and Exemptions Application", 
        items: [
            "Application of deductions under Chapter VI-A for savings, investments, and insurance premiums.",
            "Application of Section 80D (Medical Insurance), 80G (Donations), and other eligible sections."
        ] 
    },
    { 
        title: "E-Filing and Verification", 
        items: [
            "Submission of ITR-2 on the Income Tax e-filing portal.",
            "Guidance for e-verification through Aadhaar OTP, Net Banking, or Digital Signature."
        ] 
    },
    { 
        title: "Handling of Revised and Belated Returns", 
        items: [
            "Support for filing Revised Returns under Section 139(5) and Belated Returns under Section 139(4) before the deadlines."
        ] 
    },
];

const amendments = [
    {
        title: "Enhanced Capital Gains Reporting:",
        items: [
            "Improved clarity on short-term and long-term capital gains segregation.",
            "Mandatory reporting of sale proceeds from listed and unlisted shares separately."
        ]
    },
    {
        title: "Disclosure of Virtual Digital Assets (VDAs):",
        items: [
            "Mandatory disclosure of all VDA transactions, including cryptocurrencies and NFTs.",
            "Tax rate: 30% on gains; TDS at 1% on transactions above ₹50,000 for specified individuals."
        ]
    },
    {
        title: "Residential Status and Global Income:",
        items: [
            "Expanded scope for Non-Resident Indians (NRIs) with clear guidelines on income accrual and taxation."
        ]
    },
    {
        title: "Foreign Assets and Income Disclosure:",
        items: [
            "Mandatory reporting of foreign bank accounts, immovable properties, and financial interests."
        ]
    },
    {
        title: "Section 80C to 80U Deductions:",
        items: [
            "Updated deduction limits and new eligibility criteria for specific investments."
        ]
    }
];

const documentsRequired = [
    { 
        title: "Personal Information:", 
        items: ["PAN Card", "Aadhaar Card", "Bank Account Details (with IFSC)"] 
    },
    { 
        title: "Income Proofs:", 
        items: ["Salary Slips", "Rent Receipts", "Capital Gains Statements"] 
    },
    { 
        title: "Investment Proofs:", 
        items: ["ELSS, PPF, NSC, LIC Premium Receipts", "Home Loan Interest Certificate"] 
    },
    { 
        title: "Other Documents:", 
        items: ["Form 16 and Form 16A", "Form 26AS", "Details of Foreign Assets (if applicable)"] 
    },
];

const filingProcess = [
    {
        title: "Login to Income Tax Portal:",
        items: ["Navigate to Income Tax E-Filing Portal", "Use your PAN as the User ID."]
    },
    {
        title: "Select ITR-2 Form:",
        items: ["Choose the assessment year: 2025-26"]
    },
    {
        title: "Fill in the Required Details:",
        items: ["Personal Information", "Income Details", "Deductions and Exemptions"]
    },
    {
        title: "Verify and Submit:",
        items: ["Cross-check all details for accuracy.", "Verify through Aadhaar OTP, Net Banking, or Digital Signature."]
    },
    {
        title: "E-Verification:",
        items: ["Complete e-verification within 30 days of submission."]
    },
];

export default function Itr2FilingPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Tax Filings', href: '/tax-filing' },
            { label: 'ITR-2 Filing' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-itr2">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">ITR-2 Return Filing Services</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    ITR, or Income Tax Return, is a crucial document in which taxpayers report their income and applicable taxes to the income tax department. The Income Tax Act of 1961 outlines all the ITR forms and procedures. Among these forms, the ITR-2 form is designated for individuals and Hindu Undivided Families who do not generate income from professional or business activities. Understanding what ITR-2 is crucial for individuals having income from sources such as salary, house property, capital gains, or other sources apart from business or profession.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">
                    At CACSFinacc Services, we provide expert services for seamless and error-free ITR-2 Return Filing for individuals and HUFs. We understand the complexities involved in declaring income from multiple sources, including capital gains, foreign assets, and more. Our team ensures complete compliance with the Income Tax Act, 1961, and the latest guidelines issued by the Income Tax Department for the Assessment Year 2025-26.
                </p>
            </section>

            <section id="what-is-itr2-detailed">
                <h2 className="text-3xl font-bold font-headline">What is ITR-2?</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    ITR-2 is the Income Tax Return form applicable for individuals and Hindu Undivided Families (HUFs) who have:
                </p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground">Income from Salary/Pension.</li>
                    <li className="text-muted-foreground">Income from House Property (more than one).</li>
                    <li className="text-muted-foreground">Income from Capital Gains.</li>
                    <li className="text-muted-foreground">Income from Other Sources (Interest, Dividends, etc.).</li>
                    <li className="text-muted-foreground">Foreign Assets or Foreign Income.</li>
                    <li className="text-muted-foreground">Agricultural income exceeding ₹5,000.</li>
                </ul>
                <p className="mt-4 text-muted-foreground text-justify italic">
                    <strong>Note:</strong> ITR-2 is not applicable for individuals with income from Business or Profession.
                </p>
            </section>

            <section id="who-should-file">
                <h2 className="text-3xl font-bold font-headline">Who Should File ITR-2?</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    ITR-2 is applicable for individuals and HUFs who:
                </p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {whoShouldFile.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{item}</li>
                    ))}
                </ul>
            </section>
            
            <section id="not-eligible">
                <h2 className="text-3xl font-bold font-headline">Who Shouldn't be Eligible for ITR-2 filing?</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify">Individuals or Hindu Undivided Families (HUFs) with Income stemming from business or professional activities.</li>
                    <li className="text-muted-foreground text-justify">Individuals are eligible to complete the ITR-1 form (Sahaj).</li>
                </ul>
            </section>

            <section id="key-updates-ay2526">
                <h2 className="text-3xl font-bold font-headline">Key Updates for Assessment Year (AY) 2025–26</h2>
                <ol className="mt-4 space-y-4 list-decimal pl-5">
                    {keyUpdates.map((update, index) => (
                        <li key={index}>
                             <strong className="text-muted-foreground">{update.title}</strong>
                             <p className="text-muted-foreground text-justify">{update.description}</p>
                        </li>
                    ))}
                </ol>
            </section>

            <section id="our-services">
                <h2 className="text-3xl font-bold font-headline">Our ITR-2 Filing Services Include:</h2>
                <ol className="mt-4 space-y-4 list-decimal pl-5">
                    {ourServices.map((service, index) => (
                        <li key={index}>
                            <strong className="text-muted-foreground">{service.title}</strong>
                            <ul className="mt-2 space-y-2 list-disc pl-5">
                                {service.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="text-muted-foreground text-justify">{item}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
            </section>

            <section id="amendments-ay2526">
                <h2 className="text-3xl font-bold font-headline">Key Amendments for AY 2025-26</h2>
                <ol className="mt-4 space-y-4 list-decimal pl-5">
                    {amendments.map((amendment, index) => (
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
            
            <section id="documents-required">
                <h2 className="text-3xl font-bold font-headline">Documents Required for Filing</h2>
                 <ol className="mt-4 space-y-4 list-decimal pl-5">
                    {documentsRequired.map((doc, index) => (
                        <li key={index}>
                            <strong className="text-muted-foreground">{doc.title}</strong>
                            <ul className="mt-2 space-y-2 list-disc pl-5">
                                {doc.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="text-muted-foreground text-justify">{item}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
            </section>

            <section id="filing-process">
                <h2 className="text-3xl font-bold font-headline">Filing Process</h2>
                 <ol className="mt-4 space-y-4 list-decimal pl-5">
                    {filingProcess.map((step, index) => (
                        <li key={index}>
                            <strong className="text-muted-foreground">{step.title}</strong>
                            <ul className="mt-2 space-y-2 list-disc pl-5">
                                {step.items.map((item, itemIndex) => (
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
                    <li className="text-muted-foreground text-justify"><strong>Expert Guidance:</strong> Our team is well-versed in the latest amendments and filing procedures.</li>
                    <li className="text-muted-foreground text-justify"><strong>Error-Free Filing:</strong> We ensure accurate filing with zero errors, minimizing chances of scrutiny.</li>
                    <li className="text-muted-foreground text-justify"><strong>Data Security:</strong> Confidential handling of your financial information with high-level encryption.</li>
                    <li className="text-muted-foreground text-justify"><strong>End-to-End Support:</strong> From documentation to e-verification, we manage the entire process for you.</li>
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

    