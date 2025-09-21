
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { QuoteForm } from '@/components/quote-form';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const metadata: Metadata = {
  title: 'Accounting & Bookkeeping Services | CACS FinAcc Digital',
  description: 'Professional accounting and bookkeeping services to ensure financial accuracy, compliance, and strategic decision-making for your business.',
};

const whoNeedsAccounting = [
    "Businesses with turnover above ₹10 lakh (Sec 44AA IT Act)",
    "Professionals earning > ₹1.5 lakh or gross receipts > ₹2.5 lakh",
    "Companies under Companies Act, 2013",
    "Partnerships and LLPs",
    "NGOs/Trusts with foreign or grant income",
    "GST registered businesses",
];

const smallBusinessBenefits = [
    "Avoid tax penalties",
    "Access credit/loans",
    "Plan budgets and expansions",
    "Attract funding and investment",
];

const whyAccurateBooksMatter = [
    { function: "Income Tax Filing", benefit: "Accurate data to avoid notices, penalties, and over-taxation" },
    { function: "GST Compliance", benefit: "Prevent mismatches in ITC claims, ensure timely returns" },
    { function: "Loan & Funding", benefit: "Clean books help secure bank loans, investments & tenders" },
    { function: "Investor Relations", benefit: "Builds credibility and transparency" },
];

const coreServices = [
    { 
        title: "Monthly/Quarterly Bookkeeping", 
        items: ["Transaction classification & ledger posting", "Bank, cash, and payment reconciliations"] 
    },
    { 
        title: "Accounts Finalization", 
        items: ["Trial balance, P&L account, balance sheet", "Ratio analysis and financial reporting"] 
    },
    { 
        title: "GST-Compliant Books", 
        items: ["Mapping GSTR-1, 3B, and 2B with books", "Reconciliation of sales/purchase registers"] 
    },
    { 
        title: "TDS Integration", 
        items: ["Accurate TDS deduction, entry booking, and quarterly reporting"] 
    },
    { 
        title: "Payroll Accounting", 
        items: ["Salary ledger, statutory deductions (PF, ESI, PT), and payslip generation"] 
    },
    { 
        title: "Partner/Shareholder Accounting", 
        items: ["Capital account tracking, profit-sharing ratios, drawings, and interest"] 
    },
    { 
        title: "Software-Based Accounting (Cloud & Offline)", 
        items: ["Tally Prime | Zoho Books | QuickBooks | XERO | SAP | Excel-based templates"] 
    },
];

const industriesServed = [
    "Manufacturing", "Professional Services (CA, CS, Lawyers)", "Startups & MSMEs",
    "Hospitality & Restaurants", "Retail Chains", "E-Commerce", "Healthcare Clinics & Hospitals",
];

const complianceCalendar = [
    { task: "GSTR-1 Filing", dueDate: "11th of next month" },
    { task: "GSTR-3B Filing", dueDate: "20th or 22/24 (QRMP)" },
    { task: "TDS Payment", dueDate: "7th of next month" },
    { task: "PF/ESI Payment", dueDate: "15th of next month" },
    { task: "Accounting Books Closure", dueDate: "By 5th of every month" },
    { task: "MIS/Financial Reports", dueDate: "By 10th of every month" },
    { task: "TDS Returns (Form 26Q)", dueDate: "31st July / 31st Oct / 31st Jan / 31st May" },
];

const requiredDocuments = [
    "Bank statements (in Excel or PDF)", "Sales and purchase invoices", "Expense bills and vouchers",
    "GST login and returns (if applicable)", "TDS challans and TRACES reports", "Salary/payroll details",
    "Partnership deed or MoA (for entity setup)",
];

const regulatoryUpdates = [
    {
        title: "Revised Tax Audit Threshold",
        points: [
            "Audit under Section 44AB is mandatory if turnover exceeds ₹1 crore, unless 95% of transactions are digital, then threshold is ₹5 crores.",
            "Cash transactions <5% allows businesses up to ₹10 crore turnover to avoid tax audit."
        ]
    },
    {
        title: "Real-Time GST Reconciliation Mandated",
        points: ["GST departments are matching GSTR-3B, GSTR-1, and GSTR-2B. Proper bookkeeping is now critical to avoid mismatches and penalties."]
    },
    {
        title: "E-Invoicing Extension",
        points: ["Businesses with turnover above ₹5 crores must now issue e-Invoices and maintain proper records under Rule 48(4) of the CGST Rules."]
    },
    {
        title: "Form 3CD Expansion",
        points: ["Additional disclosure of related party transactions, loans, and interest received/payable is mandatory in tax audit reports."]
    }
];

const outsourcingBenefits = [
    "<strong>Cost Efficiency</strong> – Save 40-60% vs. in-house accounting",
    "<strong>Data Security</strong> – 256-bit encryption and cloud-based access",
    "<strong>Error-Free Compliance</strong> – 100% accuracy in GST, TDS & ITR",
    "<strong>Scalability</strong> – We grow with your business",
    "<strong>Expert Access</strong> – Chartered Accountants & Tax Professionals on call",
];

export default function BookkeepingPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Compliances', href: '/compliance' },
            { label: 'Accounting & Bookkeeping' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-bookkeeping">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">Accounting & Bookkeeping Services</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    Accounting is the process of classifying, interpreting, and summarizing financial data to assess the financial health of a business. Bookkeeping, on the other hand, involves the accurate recording of all financial transactions on a daily basis. Together, they form the foundation for effective financial reporting, compliance, and strategic business decisions.
                </p>
            </section>

            <section id="why-essential">
                <h2 className="text-3xl font-bold font-headline">Why Is Accounting & Bookkeeping Essential?</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    Accounting and bookkeeping form the financial backbone of any organization. Accurate and timely records are not just statutory requirements under the Income Tax Act, 1961, and GST laws, but also crucial for:
                </p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li>Business decision making</li>
                    <li>Tax planning</li>
                    <li>Cash flow management</li>
                    <li>Investor confidence</li>
                    <li>Regulatory compliance</li>
                </ul>
                <p className="mt-4 text-muted-foreground text-justify">
                    Whether you’re a startup, MSME, partnership, LLP, company, or NPO, outsourced, tech-enabled, and CA-reviewed accounting ensures you remain compliant and audit ready.
                </p>
            </section>
            
            <section id="who-needs-bookkeeping">
                <h2 className="text-3xl font-bold font-headline">Who Needs Accounting & Bookkeeping?</h2>
                <p className="mt-4 text-muted-foreground font-semibold">Mandatory for:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {whoNeedsAccounting.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{item}</li>
                    ))}
                </ul>
                <p className="mt-6 text-muted-foreground font-semibold">Even small businesses benefit from proper books to:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {smallBusinessBenefits.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{item}</li>
                    ))}
                </ul>
            </section>

            <section id="why-accurate-books-matter">
                <h2 className="text-3xl font-bold font-headline">Why Accurate Books Matter for Your Business</h2>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Function</TableHead>
                            <TableHead>Benefit</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {whyAccurateBooksMatter.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.function}</TableCell>
                                <TableCell>{item.benefit}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>
            
            <section id="core-services">
              <h2 className="text-3xl font-bold font-headline">Our Core Accounting & Bookkeeping Services</h2>
              <ul className="mt-4 space-y-4 list-disc pl-5">
                {coreServices.map((service, index) => (
                    <li key={index}>
                        <strong className="text-muted-foreground">{service.title}</strong>
                        <ul className="mt-2 space-y-2 list-disc pl-5">
                            {service.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-muted-foreground text-justify">{item}</li>
                            ))}
                        </ul>
                    </li>
                ))}
              </ul>
            </section>

            <section id="industries-served">
                <h2 className="text-3xl font-bold font-headline">Industries We Serve</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5 grid grid-cols-2">
                    {industriesServed.map((industry, index) => (
                        <li key={index} className="text-muted-foreground">{industry}</li>
                    ))}
                </ul>
            </section>

             <section id="compliance-calendar">
                <h2 className="text-3xl font-bold font-headline">Monthly Compliance Calendar (Sample)</h2>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Task</TableHead>
                            <TableHead>Due Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {complianceCalendar.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.task}</TableCell>
                                <TableCell>{item.dueDate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>

             <section id="documents-needed">
                <h2 className="text-3xl font-bold font-headline">Documents We Need to Start</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {requiredDocuments.map((doc, index) => (
                        <li key={index} className="text-muted-foreground">{doc}</li>
                    ))}
                </ul>
            </section>

             <section id="regulatory-updates">
                <h2 className="text-3xl font-bold font-headline">What’s New in AY 2025-26? – Key Regulatory Updates</h2>
                <ol className="mt-4 space-y-4 list-decimal pl-5">
                    {regulatoryUpdates.map((update, index) => (
                        <li key={index}>
                             <strong className="text-muted-foreground">{update.title}</strong>
                             <ul className="mt-2 space-y-2 list-disc pl-5">
                                {update.points.map((point, pointIndex) => (
                                    <li key={pointIndex} className="text-muted-foreground text-justify">{point}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
            </section>

             <section id="outsourcing-benefits">
                <h2 className="text-3xl font-bold font-headline">Benefits of Outsourcing to CACSFinacc</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {outsourcingBenefits.map((benefit, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: benefit }}></li>
                    ))}
                </ul>
            </section>

            <section id="conclusion">
                <h2 className="text-3xl font-bold font-headline">Your Compliance Begins with Clear Books</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    Don’t let mismanaged records hold you back. With CACSFinacc, you get a dedicated CA-led accounting team, cloud-enabled platforms, and regulatory-proof financials—tailored to your business size and needs.
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

    