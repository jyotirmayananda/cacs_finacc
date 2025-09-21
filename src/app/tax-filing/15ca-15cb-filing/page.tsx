
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const metadata: Metadata = {
  title: '15CA & 15CB Filing Services | CACS FinAcc Digital',
  description: 'Expert filing services for Forms 15CA and 15CB for foreign remittances. Ensure compliance with the Income Tax Act and avoid penalties with our professional assistance.',
};

const when15CbRequired = [
    { condition: "Remittance > ₹5 lakhs (non-exempt)", required: "Yes" },
    { condition: "Remittance < ₹5 lakhs (non-exempt)", required: "No" },
    { condition: "Exempted category under Rule 37BB (e.g. travel, student fees)", required: "No" },
    { condition: "Remittance covered under DTAA", required: "Yes (to validate treaty benefit)" },
    { condition: "Salary payments abroad", required: "Yes" },
];

const filingRequirements = [
    { type: "Taxable Remittances", form15ca: "Required", form15cb: "Required" },
    { type: "Non-Taxable as per DTAA", form15ca: "Required", form15cb: "Required" },
    { type: "Remittances below ₹5 Lakh (FY)", form15ca: "Required (Part A only)", form15cb: "Not Required" },
    { type: "Specified Transactions (Rule 37BB)", form15ca: "Not Required", form15cb: "Not Required" },
];

const cacsProcess = [
    "Initial Consultation: Assess nature of remittance and determine if 15CB is required",
    "Document Collection & TDS Computation: Review invoice, agreement, PAN of non-resident, DTAA applicability, and TDS rate",
    "Preparation & Filing of Form 15CB: Issued by ICAI-registered CA with UDIN and digital signature",
    "Generate & Submit Form 15CA (Part B/C/D): Based on 15CB or self-declaration, submitted online",
    "Delivery of Final Signed Forms: Shared with client and bank for processing the outward remittance",
];

const penalties = [
    { default: "Failure to File Form 15CA/15CB", penalty: "₹1,00,000 under Section 271-I" },
    { default: "Incorrect Information", penalty: "₹10,000 under Section 271B" },
    { default: "Delayed Filing", penalty: "Additional interest under Section 234E" },
];

const requiredDocuments = [
    "PAN and TAN of Remitter",
    "PAN of the Beneficiary (if applicable)",
    "Bank Details",
    "Invoice and Agreement Copies",
    "DTAA Certificate (if applicable)",
    "Foreign Bank Account Details",
];

export default function Page() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Tax Filings', href: '/tax-filing' },
            { label: '15CA & 15CB Filing' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-15ca-15cb">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">15CA & 15CB Filing Services</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    Forms 15CA and 15CB are critical for remittances outside India, ensuring that tax compliance is met under Section 195 of the Income Tax Act, 1961 before transferring funds to a non-resident or foreign entity.
                </p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify"><strong>Form 15CA:</strong> Self-declaration by the remitter confirming TDS deduction on foreign remittance, submitted on the Income Tax e-filing portal.</li>
                    <li className="text-muted-foreground text-justify"><strong>Form 15CB:</strong> Certificate from a Chartered Accountant verifying the nature, taxability, and TDS deduction on foreign remittance—required in specific cases.</li>
                </ul>
                <p className="mt-4 text-muted-foreground text-justify">
                    These forms are integral to RBI’s Liberalised Remittance Scheme (LRS) and are mandatorily required by banks before processing any foreign payment.
                </p>
            </section>

            <section id="why-important">
                <h2 className="text-3xl font-bold font-headline">Why are Form 15CA and 15CB Important?</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify"><strong>Legal compliance:</strong> Mandatory for most foreign remittances under Section 195.</li>
                    <li className="text-muted-foreground text-justify"><strong>Avoids penalties:</strong> Failure to file can attract heavy penalties and scrutiny from tax authorities.</li>
                    <li className="text-muted-foreground text-justify"><strong>Preventing Double Taxation:</strong> Ensures relief under DTAA provisions.</li>
                    <li className="text-muted-foreground text-justify"><strong>Streamlined Processing:</strong> Banks require these forms before processing any international fund transfers.</li>
                </ul>
            </section>

            <section id="who-needs-to-file">
                <h2 className="text-3xl font-bold font-headline">Who Needs to File Form 15CA/15CB?</h2>
                <p className="mt-4 text-muted-foreground text-justify">You need to file 15CA and/or 15CB if you’re sending money abroad for business payments, royalties, professional fees, or any other taxable transaction, and you are a resident making a payment to a non-resident.</p>
            </section>

            <section id="when-15cb-required">
                <h2 className="text-3xl font-bold font-headline">When is Form 15CB Required?</h2>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Condition</TableHead>
                            <TableHead>Form 15CB Required?</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {when15CbRequired.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.condition}</TableCell>
                                <TableCell>{item.required}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>

            <section id="filing-requirements">
                <h2 className="text-3xl font-bold font-headline">When is Form 15CA & 15CB Required?</h2>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Transaction Type</TableHead>
                            <TableHead>Form 15CA</TableHead>
                            <TableHead>Form 15CB</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filingRequirements.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.type}</TableCell>
                                <TableCell>{item.form15ca}</TableCell>
                                <TableCell>{item.form15cb}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>

            <section id="how-to-file">
                <h2 className="text-3xl font-bold font-headline">How to File Form 15CA and 15CB?</h2>
                <ol className="mt-4 space-y-3 list-decimal pl-5">
                    <li className="text-muted-foreground text-justify">Log in to the Income Tax e-Filing Portal.</li>
                    <li className="text-muted-foreground text-justify">Navigate to e-File &gt; Income Tax Forms &gt; File Income Tax Forms.</li>
                    <li className="text-muted-foreground text-justify">Select Form 15CA and complete the declaration.</li>
                    <li className="text-muted-foreground text-justify">If Form 15CB is required, engage a CA to file the certification online.</li>
                    <li className="text-muted-foreground text-justify">Submit the forms and download the acknowledgment for records.</li>
                </ol>
            </section>

            <section id="cacs-process">
                <h2 className="text-3xl font-bold font-headline">CACSFinacc 15CA/15CB Filing Process</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {cacsProcess.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{item}</li>
                    ))}
                </ul>
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

            <section id="documents-required">
              <h2 className="text-3xl font-bold font-headline">Documents Required</h2>
              <ul className="mt-4 space-y-3 list-disc pl-5">
                {requiredDocuments.map((doc, index) => (
                    <li key={index} className="text-muted-foreground">{doc}</li>
                ))}
              </ul>
            </section>

            <section id="amendments">
                <h2 className="text-3xl font-bold font-headline">Recent Amendments for AY 2025-26</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify"><strong>Threshold Limit Revision:</strong> Remittances below ₹5 lakh in a financial year require only Form 15CA (Part A), not 15CB</li>
                    <li className="text-muted-foreground text-justify"><strong>Real-Time Verification:</strong> Mandatory real-time PAN and TAN verification</li>
                    <li className="text-muted-foreground text-justify"><strong>Electronic Submission Only:</strong> All submissions must be through the new Income Tax e-Filing Portal</li>
                    <li className="text-muted-foreground text-justify"><strong>Pre-filled Details:</strong> Enhanced integration with the portal for auto-filling remitter and remittee details</li>
                    <li className="text-muted-foreground text-justify"><strong>Integration with TDS Compliance:</strong> TDS details are auto-verified during Form 15CB certification</li>
                </ul>
            </section>
            
            <section id="why-choose-us">
                <h2 className="text-3xl font-bold font-headline">Why Choose CACSFinacc Services?</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify"><strong>Expert Filing:</strong> Seamless filing with zero errors</li>
                    <li className="text-muted-foreground text-justify"><strong>DTAA Optimization:</strong> Maximize tax benefits under Double Taxation Avoidance Agreements</li>
                    <li className="text-muted-foreground text-justify"><strong>End-to-End Support:</strong> From documentation to certification</li>
                    <li className="text-muted-foreground text-justify"><strong>Bank Coordination:</strong> Hassle-free submission to authorized banks</li>
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
