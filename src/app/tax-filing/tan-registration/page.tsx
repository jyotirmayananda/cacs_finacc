
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const metadata: Metadata = {
  title: 'TAN Registration Services | CACS FinAcc Digital',
  description: 'Expert TAN registration for TDS compliance. We handle the entire process, ensuring you meet all legal requirements and avoid penalties.',
};

const whoNeedsTan = [
    "Employers deducting TDS on salary",
    "Companies deducting TDS on vendor payments, rent, interest, professional fees, or commission",
    "Businesses liable to collect TCS on the sale of goods",
    "Charitable trusts deducting TDS",
    "Individuals/HUFs required to deduct TDS under Section 194-IA/IB/M",
    "Government deductors and local authorities",
];

const newForAY2526 = [
    "Unified e-Filing portal for PAN-TAN applications via NSDL’s portal (now merged with Protean)",
    "Mandatory PAN linkage for TAN holders for streamlined e-verification and TDS reporting",
    "Auto-population of TAN data in AIS/TIS for matching and compliance tracking",
    "Stringent scrutiny for incorrect or fake TAN usage under compliance risk profiling by CBDT",
];

const requiredDocuments = [
    { type: "Proprietorship", docs: "PAN, Aadhaar, business address proof" },
    { type: "Company", docs: "Certificate of Incorporation, PAN, director’s ID" },
    { type: "Partnership Firm", docs: "Partnership deed, firm PAN, partners’ ID" },
    { type: "Trust/NGO", docs: "Trust deed, registration certificate, PAN" },
    { type: "Individuals", docs: "PAN, Aadhaar, ownership proof of property (if applicable)" },
];

const applicationProcess = [
    { step: 1, action: "Online Application", description: "Visit the official TIN NSDL Portal." },
    { step: 2, action: "Form 49B Submission", description: "Fill out Form 49B with necessary details." },
    { step: 3, action: "Document Submission", description: "Provide identity proof and address proof." },
    { step: 4, action: "Payment of Fees", description: "A nominal fee of ₹65 is charged." },
    { step: 5, action: "Acknowledgment Slip", description: "Download and save the acknowledgment slip after successful submission." },
    { step: 6, action: "Verification", description: "The Income Tax Department verifies and dispatches the TAN to the registered address." },
];

const penalties = [
    { default: "Failure to apply for TAN", penalty: "₹10,000 under Section 272BB" },
    { default: "Not quoting TAN in TDS returns", penalty: "₹10,000" },
    { default: "Late filing of TDS returns", penalty: "₹200 per day (Section 234E)" },
    { default: "Wrong TAN used in returns", penalty: "Treated as invalid submission" },
];

const cacsProcess = [
    "Eligibility Analysis: Assess whether TAN is required for your business, transaction, or property purchase.",
    "Document Preparation: End-to-end support for collating valid identity, address, and business proof documents.",
    "Online Application via NSDL/Protean Portal: We fill and submit Form 49B on your behalf and pay the applicable fee.",
    "TAN Allotment and Download: Receive TAN within 5–7 working days, along with guidance on using it for TDS returns and payments.",
    "Compliance Support: We assist in filing Form 24Q/26Q/27Q/27EQ, issuing Form 16/16A, and maintaining TDS registers.",
];


export default function TanRegistrationPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Tax Filings', href: '/tax-filing' },
            { label: 'TAN Registration' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-tan">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">TAN Registration: Your Key to TDS Compliance</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    Tax Deduction and Collection Account Number (TAN) is a 10-digit alphanumeric code issued by the Income Tax Department of India. It is mandatory for entities responsible for deducting or collecting tax at source (TDS or TCS) under Section 203A of the Income Tax Act, 1961.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">
                    It is mandatory for all deductors/collectors to quote TAN on TDS returns, challans, and certificates. Non-compliance attracts a penalty of ₹10,000.
                </p>
            </section>

            <section id="what-is-tan-detailed">
                <h2 className="text-3xl font-bold font-headline">What is TAN?</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    TAN, or Tax Deduction and Collection Account Number, is a 10-digit alphanumeric code required for entities that deduct or collect tax at source (TDS/TCS). It is essential to quote TAN on all TDS-related documents.
                </p>
            </section>
            
            <section id="why-tan-important">
                <h2 className="text-3xl font-bold font-headline">Why is TAN Important?</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    TAN is crucial for filing TDS returns and depositing TDS to the government. Failure to obtain a TAN or quoting an incorrect TAN can result in penalties and non-processing of TDS returns.
                </p>
            </section>
            
            <section id="who-needs-tan">
                <h2 className="text-3xl font-bold font-headline">Who Needs TAN Registration?</h2>
                <p className="mt-4 text-muted-foreground font-semibold">TAN is compulsory for:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {whoNeedsTan.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{item}</li>
                    ))}
                </ul>
                <p className="mt-4 text-muted-foreground text-justify">
                    Even freelancers or individuals buying property above ₹50 lakhs may need TAN for TDS on property transactions.
                </p>
            </section>

            <section id="whats-new-ay2526">
                <h2 className="text-3xl font-bold font-headline">TAN Registration – What’s New for AY 2025-26?</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {newForAY2526.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{item}</li>
                    ))}
                </ul>
            </section>

            <section id="documents-required">
              <h2 className="text-3xl font-bold font-headline">Documents Required for TAN Application</h2>
              <p className="mt-4 text-muted-foreground text-justify">The documents required for TAN application vary based on the applicant type:</p>
              <ul className="mt-4 space-y-3 list-disc pl-5">
                {requiredDocuments.map((item, index) => (
                    <li key={index} className="text-muted-foreground text-justify"><strong>{item.type}:</strong> {item.docs}</li>
                ))}
              </ul>
              <p className="mt-4 text-muted-foreground text-justify italic">
                <strong>Note:</strong> Application must be submitted in Form 49B (online or offline).
              </p>
            </section>
            
            <section id="tan-for-non-residents">
                <h2 className="text-3xl font-bold font-headline">TAN Registration for Non-Residents</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    NRIs and foreign entities engaged in business or transactions in India are also required to obtain TAN for TDS on payments like rent, professional fees, and interest income.
                </p>
            </section>

            <section id="how-to-apply">
                <h2 className="text-3xl font-bold font-headline">How to Apply for TAN Registration?</h2>
                <ol className="mt-4 space-y-3 list-decimal pl-5">
                    {applicationProcess.map((item) => (
                        <li key={item.step} className="text-muted-foreground text-justify">
                            <strong>{item.action}:</strong> {item.description}
                        </li>
                    ))}
                </ol>
            </section>
            
            <section id="penalties">
                <h2 className="text-3xl font-bold font-headline">Penalties for Non-Compliance</h2>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Default</TableHead>
                            <TableHead>Penalty</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {penalties.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.default}</TableCell>
                                <TableCell>{item.penalty}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>

            <section id="how-we-help">
                <h2 className="text-3xl font-bold font-headline">How CACSFinacc Simplifies Your TAN Registration</h2>
                <ol className="mt-4 space-y-3 list-decimal pl-5">
                    {cacsProcess.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{item}</li>
                    ))}
                </ol>
            </section>

            <section id="get-assistance">
                <h2 className="text-3xl font-bold font-headline">Get Expert Assistance!</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    Register your TAN effortlessly with CACSFinacc Services. Our experts ensure a smooth, hassle-free registration and TDS filing process, keeping you compliant with the latest tax laws.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">
                    Contact Us Now for seamless TAN Registration and TDS filing!
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
