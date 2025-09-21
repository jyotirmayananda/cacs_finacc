
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const metadata: Metadata = {
  title: 'Section 8 Company Compliance | CACS FinAcc Digital',
  description: 'Comprehensive compliance services for Section 8 Companies, including registration, annual filings, and tax exemptions to support your non-profit objectives.',
};

const keyFeatures = [
    "Limited company status with non-profit motive",
    "No minimum capital requirement",
    "Perpetual succession and separate legal identity",
    "Eligible for tax exemptions under Section 12A and 80G",
    "Higher compliance obligation for transparency and funding eligibility",
];

const whyChooseSection8 = [
    "Recognized legal entity with high donor confidence",
    "Eligible for CSR funding, international grants, and government affiliations",
    "Allows tax deductions to donors under Section 80G",
    "Eligible for foreign contributions after FCRA registration",
    "Exempt from using 'Ltd.' or 'Pvt. Ltd.' in its name",
];

const complianceRequirements = [
    { area: "Annual ROC Filings", filings: "AOC-4, MGT-7A" },
    { area: "Director Compliance", filings: "DIR-3 KYC, MBP-1, DIR-8" },
    { area: "Income Tax Return", filings: "ITR-7 under Sections 12A/10(23C)" },
    { area: "Audit & Financials", filings: "Form 10B/10BB, Annual Accounts Audit" },
    { area: "TDS Compliance", filings: "24Q/26Q filings and payment" },
    { area: "CSR Reporting", filings: "CSR-2 if applicable" },
    { area: "Foreign Investment Reporting", filings: "FC-GPR/FLA (if FDI received)" },
    { area: "FCRA Filing", filings: "FC-4, FC-6 (if registered for foreign contributions)" },
];

const requiredDocuments = [
    "PAN, Aadhaar, and Email ID of all directors",
    "Passport-size photos",
    "Utility bill & NOC from owner for registered address",
    "Draft MOA and AOA aligned with not-for-profit objects",
    "Declaration from directors (INC-14 & INC-15)",
    "Digital Signature Certificate (DSC)",
    "Consent to act as Director (DIR-2)",
];

const registrationProcess = [
    { step: 1, action: "Name approval through SPICe+ Part A" },
    { step: 2, action: "Document drafting & Digital Signature registration" },
    { step: 3, action: "File SPICe+ Part B, INC-9, MOA, AOA" },
    { step: 4, action: "Receive COI (Certificate of Incorporation) from MCA" },
    { step: 5, action: "Apply for PAN & TAN" },
    { step: 6, action: "File Form INC-20A (Declaration of Commencement)" },
    { step: 7, action: "Apply for 12A/80G exemption with the Income Tax Department" },
];

const postIncorporationCompliance = [
    { compliance: "Commencement Certificate (INC-20A)", timeline: "Within 180 days of incorporation" },
    { compliance: "Appointment of Auditor (ADT-1)", timeline: "Within 30 days of incorporation" },
    { compliance: "Annual Return (MGT-7)", timeline: "Within 60 days of AGM" },
    { compliance: "Financials (AOC-4)", timeline: "Within 30 days of AGM" },
    { compliance: "CSR-1 & CSR-2 Filing", timeline: "Annually (for CSR-recipient entities)" },
    { compliance: "Tax Return (ITR-7)", timeline: "By 31st October (if audited)" },
    { compliance: "Tax Audit (if applicable)", timeline: "If receipts > ₹1 crore" },
];

const taxBenefits = [
    { provision: "Section 11", benefit: "Exemption on income used for charitable/religious purposes" },
    { provision: "Section 12A", benefit: "Registration for tax exemption eligibility" },
    { provision: "Section 80G", benefit: "Allows donors to claim 50%-100% deduction on contributions" },
    { provision: "GST", benefit: "No registration needed if aggregate turnover < ₹20 lakhs (₹10 lakhs for NE states)" },
    { provision: "FCRA", benefit: "Permission for foreign funding after 3 years of activity & eligibility" },
];

const penalties = [
    { nonCompliance: "Delay in Annual Filings", penalty: "₹100 per day per form (AOC-4 / MGT-7)" },
    { nonCompliance: "Violation of Section 8 conditions", penalty: "Revocation of license + ₹10 lakh fine + prosecution under Companies Act" },
    { nonCompliance: "Missed CSR reporting", penalty: "₹1 lakh penalty on company + ₹50,000 on officer in default" },
    { nonCompliance: "Not renewing 12A/80G (after expiry)", penalty: "Loss of tax exemption status & donor benefit" },
];

const ourServices = [
    { title: "Company Registration (MCA)", details: ["Name approval (SPICe+), DIN, DSC, drafting of MoA & AoA", "Filing of INC-12 for Section 8 License"] },
    { title: "Post-Incorporation Compliance", details: ["PAN, TAN, GST, Professional Tax, MSME registration"] },
    { title: "Income Tax Exemptions", details: ["Filing of Form 10A for 12AB & 80G registration", "Assistance with Form 10B/10BB audit filings"] },
    { title: "Annual Filings", details: ["ROC (AOC-4, MGT-7A), CSR-2, and MCA board meeting documentation"] },
    { title: "FCRA, CSR & Donor Compliance", details: ["FCRA registration (if applicable), RBI reporting, donation tracking"] },
    { title: "End-to-End Bookkeeping", details: ["Maintenance of books, financial reports, vouchers, and asset registers"] },
];

const whyChooseUs = [
    "End-to-end assistance from registration to audit and ITR",
    "100% on-time ROC, Income Tax, and CSR filings",
    "Guidance on FCRA registration, foreign donor due diligence, and RBI filings",
    "MOA & AOA Drafting with NGO Object Clauses",
    "Expert Filing of 12A, 80G, CSR-1, CSR-2, and ITR-7",
];

export default function Section8CompliancePage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Compliances', href: '/compliance' },
            { label: 'Section 8 Company Compliance' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-section8">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">Section 8 Company Compliance</h1>
                <h2 className="mt-8 text-3xl font-bold font-headline">What is a Section 8 Company?</h2>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    A Section 8 Company is a non-profit entity incorporated under Section 8 of the Companies Act, 2013, with the primary objective of promoting charity, social welfare, education, art, science, culture, sports, environmental protection, research, religion, or philanthropy.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">
                    Such companies apply profits or income toward their cause and are prohibited from distributing dividends to members. Section 8 Companies are ideal for NGOs, social enterprises, trusts, foundations, and CSR arms of corporates.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">
                    A Section 8 Company enjoys tax benefits, enhanced credibility, and is governed by stricter compliance protocols compared to Trusts and Societies.
                </p>
            </section>

            <section id="key-features">
                <h2 className="text-3xl font-bold font-headline">Key Features of a Section 8 Company</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {keyFeatures.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{item}</li>
                    ))}
                </ul>
            </section>

            <section id="why-choose-section8">
                <h2 className="text-3xl font-bold font-headline">Why Choose a Section 8 Company?</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {whyChooseSection8.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{item}</li>
                    ))}
                </ul>
            </section>
            
            <section id="compliance-requirements">
                <h2 className="text-3xl font-bold font-headline">Compliance Requirements for Section 8 Companies</h2>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Compliance Area</TableHead>
                            <TableHead>Key Filings</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {complianceRequirements.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.area}</TableCell>
                                <TableCell>{item.filings}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <p className="mt-4 text-muted-foreground text-justify italic">
                    <strong>Note:</strong> Non-compliance may result in loss of tax exemption, penalties, or cancellation of license under Section 8.
                </p>
            </section>

            <section id="documents-required">
              <h2 className="text-3xl font-bold font-headline">Documents Required for Section 8 Company Registration</h2>
              <ul className="mt-4 space-y-3 list-disc pl-5">
                {requiredDocuments.map((item, index) => (
                    <li key={index} className="text-muted-foreground">{item}</li>
                ))}
              </ul>
            </section>

            <section id="registration-process">
              <h2 className="text-3xl font-bold font-headline">Step-by-Step Registration Process</h2>
              <ol className="mt-4 space-y-3 list-decimal pl-5">
                {registrationProcess.map((item) => (
                  <li key={item.step} className="text-muted-foreground">{item.action}</li>
                ))}
              </ol>
            </section>

            <section id="post-incorporation-compliance">
                <h2 className="text-3xl font-bold font-headline">Post-Incorporation Compliance</h2>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Compliance</TableHead>
                            <TableHead>Timeline</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {postIncorporationCompliance.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.compliance}</TableCell>
                                <TableCell>{item.timeline}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>

            <section id="tax-benefits">
                <h2 className="text-3xl font-bold font-headline">Tax Benefits Available to Section 8 Companies</h2>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Provision</TableHead>
                            <TableHead>Benefit</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {taxBenefits.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.provision}</TableCell>
                                <TableCell>{item.benefit}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>

            <section id="penalties">
                <h2 className="text-3xl font-bold font-headline">Penalties for Non-Compliance</h2>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Non-Compliance</TableHead>
                            <TableHead>Penalty</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {penalties.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.nonCompliance}</TableCell>
                                <TableCell>{item.penalty}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>

            <section id="how-we-help">
                <h2 className="text-3xl font-bold font-headline">How CACSFinacc Helps with Section 8 Company Setup & Compliance</h2>
                <ol className="mt-4 space-y-4 list-decimal pl-5">
                    {ourServices.map((service, index) => (
                        <li key={index}>
                            <strong className="text-muted-foreground">{service.title}</strong>
                            <ul className="mt-2 space-y-2 list-disc pl-5">
                                {service.details.map((detail, detailIndex) => (
                                    <li key={detailIndex} className="text-muted-foreground text-justify">{detail}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
            </section>
            
            <section id="why-choose-us">
              <h2 className="text-3xl font-bold font-headline">Why Choose CACSFinacc for Section 8 Company Services?</h2>
              <ul className="mt-4 space-y-3 list-disc pl-5">
                {whyChooseUs.map((item, index) => (
                    <li key={index} className="text-muted-foreground text-justify">{item}</li>
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

    