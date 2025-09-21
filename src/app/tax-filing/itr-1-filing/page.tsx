
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'ITR-1 (Sahaj) Filing Services | CACS FinAcc Digital',
  description: 'Efficient and accurate ITR-1 Return Filing services for salaried individuals. Learn about eligibility, key updates for AY 2024-25, and our expert filing process.',
};

const whoShouldFile = [
    "Income from salary or pension",
    "Income from one house property",
    "Income from other sources (e.g., interest, family pension, dividend)",
    "Agricultural income up to ₹5,000",
];

const notEligible = [
    "Earns more than ₹50 lakhs per annum.",
    "Owns more than one house property.",
    "Has income from business or profession.",
    "Holds foreign assets or has foreign income.",
    "Has capital gains income.",
    "Is a Director in a company.",
    "Owns unlisted equity shares.",
];

const ourServices = [
    { 
        title: "Document Collection and Analysis", 
        items: [
            "Compilation of required documents: Form 16, interest certificates, salary slips, and rent receipts.",
            "Verification of PAN, Aadhaar, and bank details for accuracy."
        ] 
    },
    { 
        title: "Income Computation and Tax Calculation", 
        items: [
            "Calculation of total taxable income under different heads.",
            "Application of standard deduction of ₹50,000, HRA exemptions, and Section 10 exemptions.",
            "Computation of rebate under Section 87A for eligible individuals."
        ] 
    },
    { 
        title: "Deductions and Exemptions Application", 
        items: [
            "Claiming deductions under Section 80C (LIC, PPF, NSC, etc.), 80D (Medical Insurance), and 80TTA (Savings Account Interest).",
            "Ensuring maximum tax benefits through proper application of exemptions."
        ] 
    },
    { 
        title: "E-Filing and Verification", 
        items: [
            "Filing of ITR-1 on the Income Tax E-filing Portal.",
            "Guidance for e-verification through Aadhaar OTP, Net Banking, or Digital Signature."
        ] 
    },
    { 
        title: "Handling of Revised and Belated Returns", 
        items: [
            "Support for filing Revised Returns under Section 139(5) and Belated Returns under Section 139(4) if missed the original deadline."
        ] 
    },
    { 
        title: "Refund Tracking and Support", 
        items: [
            "Assistance in tracking income tax refunds and resolving any discrepancies.",
            "Support in responding to Income Tax notices if required."
        ] 
    },
];

const keyUpdates = [
    {
        title: "Inclusion of Long-Term Capital Gains (LTCG) up to ₹1.25 Lakh:",
        description: "Taxpayers can now report LTCG up to ₹1.25 lakh under Section 112A directly in ITR-1, provided there are no capital losses to carry forward. This change simplifies the filing process for small investors."
    },
    {
        title: "Mandatory Disclosure of TDS Sections:",
        description: "Taxpayers must specify the relevant Tax Deducted at Source (TDS) section under which tax was deducted for each income source, enhancing transparency and accuracy in tax reporting."
    },
    {
        title: "Removal of Aadhaar Enrolment ID Option:",
        description: "The ITR-1 form has removed the column for Aadhaar Enrolment ID. Taxpayers must now provide their actual Aadhaar number when filing returns."
    },
    {
        title: "Mandatory Declaration of Tax Regime:",
        description: "Taxpayers must explicitly declare their choice between the old and new tax regimes. First-time opt-outs from the new regime must submit Form 10-IEA and mention the acknowledgement number."
    }
];

export default function Itr1FilingPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Tax Filings', href: '/tax-filing' },
            { label: 'ITR-1 (Sahaj) Filing' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-itr1">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">ITR-1 (Sahaj) Filing Services</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    ITR, or Income Tax Return, is a crucial document in which taxpayers report their income and applicable taxes to the income tax department. The Income Tax Act of 1961 outlines all the ITR forms and their procedures. Among these forms, ITR-1, often referred to as Sahaj, holds particular significance. ITR1 (Sahaj) is designed for individuals with an income of up to Rs.50 lakhs, making it applicable to most salaried individuals.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">
                    At CACSFinacc Services, we specialize in providing efficient and accurate ITR-1 Return Filing services for individuals with straightforward income sources. Our team is well-versed with the latest amendments introduced for the Assessment Year 2024-25, ensuring complete compliance and hassle-free submission.
                </p>
            </section>

            <section id="what-is-itr1-detailed">
                <h2 className="text-3xl font-bold font-headline">What is ITR-1 (Sahaj)?</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    ITR-1, also known as Sahaj, is a simplified Income Tax Return form for individuals who have income from:
                </p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify"><strong>Salary/Pension</strong></li>
                    <li className="text-muted-foreground text-justify"><strong>One House Property</strong></li>
                    <li className="text-muted-foreground text-justify"><strong>Other Sources (e.g., interest income, dividends, etc.)</strong></li>
                    <li className="text-muted-foreground text-justify"><strong>Agricultural Income up to ₹5,000</strong></li>
                </ul>
            </section>

            <section id="who-should-file">
                <h2 className="text-3xl font-bold font-headline">Who Should File ITR-1?</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    ITR-1, also known as Sahaj, is applicable for resident individuals (other than not ordinarily resident) who have:
                </p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {whoShouldFile.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{item}</li>
                    ))}
                </ul>
                <p className="mt-4 text-muted-foreground text-justify">
                    Total income should not exceed ₹50 lakh during the financial year.
                </p>
            </section>
            
            <section id="not-eligible">
                <h2 className="text-3xl font-bold font-headline">Who is Not Eligible to File ITR-1?</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    ITR-1 cannot be used if the individual:
                </p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {notEligible.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{item}</li>
                    ))}
                </ul>
            </section>

            <section id="our-services">
                <h2 className="text-3xl font-bold font-headline">Our ITR-1 Filing Services Include:</h2>
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

            <section id="key-updates">
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

            <section id="why-choose-us">
                <h2 className="text-3xl font-bold font-headline">Why Choose CACSFinacc Services for ITR-1 Filing?</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    At CACSFinacc Services, we offer comprehensive solutions to manage your ITR-1 obligations:
                </p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground"><strong>Accurate Calculation:</strong> Ensuring precise computation of income, deductions, and tax liabilities based on current regulations.</li>
                    <li className="text-muted-foreground"><strong>Timely Filing:</strong> Adhering to all statutory deadlines to prevent penalties.</li>
                    <li className="text-muted-foreground"><strong>Documentation Management:</strong> Maintaining essential records and supporting documents for audit readiness.</li>
                    <li className="text-muted-foreground"><strong>Compliance Advisory:</strong> Providing guidance on tax regulations and updates to keep your filings compliant.</li>
                </ul>
                <p className="mt-4 text-muted-foreground text-justify">
                    Ensure seamless ITR-1 compliance with CACSFinacc Services. Contact us today to streamline your return filing process.
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
}
