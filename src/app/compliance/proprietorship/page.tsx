
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const metadata: Metadata = {
  title: 'Proprietorship Compliance Services | CACS FinAcc Digital',
  description: 'Comprehensive compliance services for sole proprietorships, including income tax filing, GST, TDS, and tax audits to ensure you meet all legal requirements.',
};

const itrForms = [
    { category: "Business income under presumptive scheme (Sec 44AD/44ADA)", form: "ITR-4" },
    { category: "Business/profession with audit or regular books", form: "ITR-3" },
];

const taxAuditTriggers = [
    "Business turnover > ₹1 crore (or ₹10 crore if cash transactions <5%)",
    "Professional receipts > ₹50 lakhs",
    "Lower profit declared under presumptive scheme and income > basic exemption limit",
];

const gstRegistrationTriggers = [
    "Turnover exceeds ₹20 lakh (services) / ₹40 lakh (goods)",
    "Required for interstate supply or e-commerce participation",
    "Compulsory for export of goods/services",
];

const requiredDocuments = [
    "PAN and Aadhaar of proprietor",
    "Bank statements (business-related)",
    "Sales and purchase bills",
    "Expense vouchers/invoices",
    "GST login credentials (if registered)",
    "TDS challans, if applicable",
    "Investment proofs for deductions",
    "Rent agreement or shop act license (for address proof)",
];

const complianceChecklist = [
    { compliance: "Income Tax Return Filing", description: "ITR-3/ITR-4 for business income under normal/presumptive scheme", dueDate: "31st July / 31st Oct (if audit)" },
    { compliance: "Tax Audit (if applicable)", description: "Audit under Sec. 44AB for high-turnover businesses", dueDate: "30th September 2025" },
    { compliance: "Advance Tax", description: "Required if tax liability exceeds ₹10,000", dueDate: "Quarterly (15th Jun/Sept/Dec/Mar)" },
    { compliance: "TDS Payment", description: "TDS deducted must be deposited monthly", dueDate: "By 7th of next month" },
    { compliance: "TDS Return Filing", description: "Quarterly filing for deducted TDS (24Q/26Q)", dueDate: "31st July, Oct, Jan, May" },
    { compliance: "GST Return Filing", description: "GSTR-1 and GSTR-3B monthly/quarterly based on turnover", dueDate: "11th and 20th of every month" },
    { compliance: "GST Annual Return", description: "GSTR-9 (if turnover exceeds ₹2 Crores)", dueDate: "31st December 2025" },
    { compliance: "Books of Account", description: "Must be maintained for 6 years (if turnover > ₹25 lakhs or income > ₹2.5 lakhs)", dueDate: "Ongoing" },
];

const oldTaxSlabs = [
    { range: "Up to ₹2.5 Lakhs", rate: "NIL" },
    { range: "₹2.5 – ₹5 Lakhs", rate: "5%" },
    { range: "₹5 – ₹10 Lakhs", rate: "20%" },
    { range: "Above ₹10 Lakhs", rate: "30%" },
];

export default function ProprietorshipPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Compliances', href: '/compliance' },
            { label: 'Proprietorship' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg-col-span-2 space-y-12">
            
            <section id="what-is-proprietorship">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">Proprietorship Compliance</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    A sole proprietorship in India is the most basic business setup, where a single individual owns and runs the business.
                </p>
            </section>

            <section id="what-is-sole-proprietorship">
                <h2 className="text-3xl font-bold font-headline">What is a Sole Proprietorship?</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    A Sole Proprietorship is the simplest and most common form of business in India where an individual owns, operates, and manages the entire business. Though it offers minimal regulatory formalities, the owner must still comply with all tax and statutory requirements.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">
                    Even if your business is unregistered or operating under your personal PAN, you are still legally obligated to file taxes and maintain books of account if income crosses prescribed thresholds.
                </p>
            </section>
            
            <section id="key-compliances">
                <h2 className="text-3xl font-bold font-headline">Key Proprietorship Compliances (AY 2025-26)</h2>
                <ol className="mt-4 space-y-6 list-decimal pl-5">
                    <li>
                        <strong>Income Tax Filing (ITR):</strong>
                        <Table className="mt-4">
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Category</TableHead>
                                    <TableHead>Applicable ITR Form</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {itrForms.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{item.category}</TableCell>
                                        <TableCell>{item.form}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <ul className="mt-4 space-y-2 list-disc pl-5 text-muted-foreground">
                            <li>Tax slabs applicable as per individual taxation regime (Old/New)</li>
                            <li>Option to opt for presumptive taxation if turnover ≤ ₹2 crore (business) or ₹50 lakh (profession)</li>
                            <li>Books of accounts and audit mandatory if income/turnover exceeds limits</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Tax Audit (Section 44AB):</strong>
                        <ul className="mt-2 space-y-2 list-disc pl-5 text-muted-foreground">
                            {taxAuditTriggers.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </li>
                    <li>
                        <strong>GST Registration & Filing:</strong>
                        <p className="mt-2 text-muted-foreground font-semibold">Mandatory if:</p>
                        <ul className="mt-2 space-y-2 list-disc pl-5 text-muted-foreground">
                            {gstRegistrationTriggers.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                        <p className="mt-2 text-muted-foreground font-semibold">Monthly/Quarterly Returns:</p>
                        <ul className="mt-2 space-y-2 list-disc pl-5 text-muted-foreground">
                            <li>GSTR-1, GSTR-3B, and GSTR-9 (annual return)</li>
                            <li>GSTR-2B reconciliation for eligible ITC</li>
                        </ul>
                    </li>
                    <li>
                        <strong>TDS Compliance (if applicable):</strong>
                        <ul className="mt-2 space-y-2 list-disc pl-5 text-muted-foreground">
                            <li>Deduct and deposit TDS on salaries, rent, contractor payments, etc.</li>
                            <li>File quarterly TDS returns (24Q/26Q as applicable)</li>
                            <li>Issue Form 16/16A to vendors/employees</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Books of Accounts (Section 44AA):</strong>
                         <p className="mt-2 text-muted-foreground font-semibold">Mandatory if:</p>
                        <ul className="mt-2 space-y-2 list-disc pl-5 text-muted-foreground">
                            <li>Income > ₹2.5 lakh (professionals)</li>
                            <li>Turnover > ₹10 lakh (business)</li>
                            <li>Claimed lower income than 44AD/ADA or opted out</li>
                        </ul>
                        <p className="mt-2 text-muted-foreground">Must maintain: cash book, ledgers, sales/purchase register, bank book, journal, etc.</p>
                    </li>
                    <li>
                        <strong>Advance Tax Payments:</strong>
                        <ul className="mt-2 space-y-2 list-disc pl-5 text-muted-foreground">
                            <li>Applicable if tax liability > ₹10,000 in a financial year</li>
                            <li>Payable in 4 installments as per Income Tax schedule</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Professional Tax (State-wise):</strong>
                        <ul className="mt-2 space-y-2 list-disc pl-5 text-muted-foreground">
                            <li>Applicable in states like Maharashtra, Karnataka, West Bengal, etc.</li>
                            <li>Monthly filing and payment if registered</li>
                        </ul>
                    </li>
                </ol>
            </section>

            <section id="documents-required">
                <h2 className="text-3xl font-bold font-headline">Key Documents for Proprietorship Compliance</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5 text-muted-foreground">
                    {requiredDocuments.map((doc, index) => <li key={index} dangerouslySetInnerHTML={{ __html: doc }}></li>)}
                </ul>
            </section>

            <section id="regulatory-updates">
                <h2 className="text-3xl font-bold font-headline">Regulatory Updates for AY 2025-26</h2>
                <p className="mt-4 text-muted-foreground">As per the Finance Act, 2024 and updated provisions effective for Assessment Year 2025-26, proprietorships must follow:</p>
                <ol className="mt-4 space-y-4 list-decimal pl-5">
                    <li>
                        <strong>Higher Tax Audit Threshold:</strong>
                        <ul className="mt-2 space-y-2 list-disc pl-5 text-muted-foreground">
                            <li>Audit under Section 44AB required if turnover exceeds ₹1 Crore.</li>
                            <li>If cash receipts and cash payments ≤ 5%, threshold extended to ₹5 Crore.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Revised Presumptive Scheme:</strong>
                        <ul className="mt-2 space-y-2 list-disc pl-5 text-muted-foreground">
                            <li>Under Section 44AD, presumptive taxation limit is now ₹3 Crores (for businesses with non-cash turnover).</li>
                            <li>Income is presumed at 8% of turnover (6% if digital).</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Enhanced Reporting in ITR:</strong>
                        <ul className="mt-2 space-y-2 list-disc pl-5 text-muted-foreground">
                            <li>Reporting of cash deposits, foreign travel, and crypto transactions is now mandatory.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>E-Invoicing Mandate (GST):</strong>
                        <ul className="mt-2 space-y-2 list-disc pl-5 text-muted-foreground">
                            <li>E-invoicing is now compulsory for businesses exceeding ₹5 Crores turnover under GST.</li>
                        </ul>
                    </li>
                </ol>
            </section>

            <section id="compliance-checklist">
                <h2 className="text-3xl font-bold font-headline">Annual Compliance Checklist for Proprietorship (AY 2025-26)</h2>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Compliance</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Due Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {complianceChecklist.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.compliance}</TableCell>
                                <TableCell>{item.description}</TableCell>
                                <TableCell>{item.dueDate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>
            
            <section id="taxation">
                <h2 className="text-3xl font-bold font-headline">Taxation of Sole Proprietorship</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5 text-muted-foreground">
                    <li>Taxed under individual slab rates (no separate business tax rate)</li>
                    <li>Eligible for standard deductions, Section 80C to 80U deductions</li>
                    <li>No separate PAN needed – business taxed in owner's PAN</li>
                </ul>
            </section>
            
            <section id="tax-slabs">
                <h2 className="text-3xl font-bold font-headline">Slab Rates for AY 2025-26 (Old Regime)</h2>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Income Range</TableHead>
                            <TableHead>Tax Rate</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {oldTaxSlabs.map((slab, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{slab.range}</TableCell>
                                <TableCell>{slab.rate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <p className="mt-4 text-muted-foreground italic">
                    <strong>Note:</strong> Under the New Tax Regime (Section 115BAC), revised slab benefits apply.
                </p>
            </section>
            
            <section id="why-choose-us">
                <h2 className="text-3xl font-bold font-headline">Why Choose CACSFinacc for Proprietorship Compliance?</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5 text-muted-foreground">
                    <li><strong>End-to-End Filing</strong> – ITR, GST, TDS & Audit</li>
                    <li><strong>Tax Saving Planning</strong> – Maximize deductions</li>
                    <li><strong>Digital Bookkeeping</strong> – Tally, Zoho, QuickBooks supported</li>
                </ul>
            </section>

            <section id="our-plans">
                <h2 className="text-3xl font-bold font-headline">Our Specialized Proprietor Plans Include:</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5 text-muted-foreground">
                    <li><strong>Starter Plan:</strong> GST Return + ITR Filing + Basic TDS</li>
                    <li><strong>Growth Plan:</strong> Audit + GST + Full TDS + Advance Tax Calculation</li>
                    <li><strong>Premium Plan:</strong> Monthly Bookkeeping + Virtual CFO + MIS Reports</li>
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

    