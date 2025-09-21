
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const metadata: Metadata = {
  title: 'Private Limited Company Compliance Services | CACS FinAcc Digital',
  description: 'Ensure your Private Limited Company meets all annual compliance requirements under the Companies Act, 2013, and Income Tax Act. Avoid penalties with our expert services.',
};

const annualRocFilings = [
    { form: "AOC-4", purpose: "Filing of audited financials", dueDate: "Within 30 days of AGM" },
    { form: "MGT-7A/7", purpose: "Annual return", dueDate: "Within 60 days of AGM" },
];

const complianceChecklist = [
    "Income Tax Return (ITR-6)",
    "Tax Audit (Form 3CA/3CD)",
    "Statutory Audit & Auditor’s Report",
    "ROC Annual Filing – AOC-4 & MGT-7",
    "DIR-3 KYC (for directors)",
    "Form DPT-3 & MSME-11",
    "Board Meetings & AGM Support",
    "Maintenance of Statutory Registers",
    "TDS, GST, and Advance Tax Filing",
];

const complianceCalendar = [
    { compliance: "Statutory Audit", description: "Audit of financials by Chartered Accountant", dueDate: "30th September 2025" },
    { compliance: "Income Tax Return (ITR-6)", description: "Return filing for company (not under presumptive taxation)", dueDate: "31st October 2025" },
    { compliance: "Tax Audit (if applicable)", description: "For turnover exceeding ₹1 Cr or ₹10 Cr (if 95% digital)", dueDate: "30th September 2025" },
    { compliance: "MCA Form AOC-4", description: "Filing of audited financial statements", dueDate: "30th October 2025" },
    { compliance: "MCA Form MGT-7", description: "Filing of Annual Return with Shareholding pattern", dueDate: "29th November 2025" },
    { compliance: "DIR-3 KYC", description: "KYC of directors to avoid disqualification", dueDate: "30th September 2025" },
    { compliance: "Form DPT-3", description: "Disclosure of loans not treated as deposits", dueDate: "30th June 2025" },
    { compliance: "MSME Return (Form MSME-1)", description: "Half-yearly filing for pending dues to MSMEs", dueDate: "30th April / 31st October" },
    { compliance: "Board Meetings", description: "Minimum 4 meetings per year (at least one every quarter)", dueDate: "Quarterly" },
    { compliance: "AGM (Annual General Meeting)", description: "Mandatory for all companies (except OPCs)", dueDate: "Within 6 months of FY end" },
];

const gstCompliance = [
    { form: "GSTR-1", purpose: "Outward supplies", frequency: "Monthly / QRMP" },
    { form: "GSTR-3B", purpose: "Summary return", frequency: "Monthly / QRMP" },
    { form: "GSTR-9/9C", purpose: "Annual return and reconciliation", frequency: "Annually" },
    { form: "E-Invoicing", purpose: "Mandatory if turnover > ₹5 Crores", frequency: "Real-time" },
];

const penalties = [
    { default: "Late ITR filing", penalty: "₹5,000 under Section 234F" },
    { default: "Delay in ROC filings (AOC-4/MGT-7)", penalty: "₹100 per day per form" },
    { default: "Non-filing of DPT-3", penalty: "₹5,000 + ₹500/day" },
    { default: "No board meeting held", penalty: "₹25,000 on company + ₹5,000 per director" },
    { default: "TDS/GST late payment", penalty: "Interest @ 1-1.5% per month + penalty" },
];

const requiredDocuments = [
    "Audited Balance Sheet",
    "Profit and Loss Statement",
    "Director KYC Documents",
    "Bank Statements",
    "Shareholding details",
    "Board Resolutions and Minutes",
    "Loan Agreements (if any)",
    "TDS & GST Challans and Returns",
];

const howWeHelp = [
    "ROC Filings handled from start to finish",
    "Tax Audit & ITR Filing under expert supervision",
    "Director KYC, DPT-3, MSME Reporting",
    "Compliance Calendar Setup & Reminders",
    "Custom Legal Drafting (Resolutions, Registers, MOA Amendments)",
    "Virtual CFO Services for strategic finance oversight",
];

export default function PvtLtdCompliancesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Compliances', href: '/compliance' },
            { label: 'Private Limited Company Compliance' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-pvt-ltd">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">Private Limited Company Compliance Services</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    In India, a private limited company is a privately held entity with limited liability, and it ranks among the nation's most favored business structures. This popularity is primarily attributed to its numerous advantages, including limited liability protection, ease of formation and maintenance, and its status as a distinct legal entity. A private limited company enjoys legal separation from its owners and necessitates a minimum of two members and two directors for its operation.
                </p>
            </section>

            <section id="why-compliance-critical">
                <h2 className="text-3xl font-bold font-headline">Why Private Limited Company Compliance is Critical</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    A Private Limited Company offers credibility, scalability, and legal identity, but it comes with strict compliance responsibilities under the Companies Act, 2013, Income Tax Act, and GST laws. Failure to comply may result in heavy penalties, director disqualification, and legal issues.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">
                    A Private Limited Company (Pvt Ltd), once incorporated under the Companies Act, 2013, is subject to mandatory annual filings, tax obligations, and statutory compliances regardless of turnover or activity level.
                </p>
                <p className="mt-4 font-semibold">Proper compliance ensures:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground">Legal validity and credibility</li>
                    <li className="text-muted-foreground">No late fees or penalties</li>
                    <li className="text-muted-foreground">Investor and lender confidence</li>
                    <li className="text-muted-foreground">Director eligibility and ROC good standing</li>
                </ul>
                <p className="mt-4 text-muted-foreground text-justify">
                    Non-compliance can result in hefty penalties, disqualification of directors, and even striking off of the company by ROC.
                </p>
            </section>
            
            <section id="mandatory-compliances">
                <h2 className="text-3xl font-bold font-headline">Mandatory Annual Compliances (AY 2025-26)</h2>
                <ol className="mt-4 space-y-4 list-decimal pl-5">
                    <li>
                        <strong className="text-muted-foreground">Income Tax Return Filing (ITR-6):</strong>
                        <ul className="mt-2 space-y-2 list-disc pl-5">
                            <li className="text-muted-foreground">Mandatory for all companies (except those claiming exemption under Sec 11)</li>
                            <li className="text-muted-foreground">
                                <strong>Due Date:</strong>
                                <ul className="mt-2 space-y-2 list-disc pl-5">
                                    <li className="text-muted-foreground">31st October 2025 (Audit cases)</li>
                                    <li className="text-muted-foreground">30th November 2025 (Transfer Pricing cases)</li>
                                </ul>
                            </li>
                            <li className="text-muted-foreground">Audit report (Form 3CA/3CD) must be filed before ITR</li>
                        </ul>
                    </li>
                    <li>
                        <strong className="text-muted-foreground">Statutory Audit under Companies Act:</strong>
                        <ul className="mt-2 space-y-2 list-disc pl-5">
                            <li className="text-muted-foreground">Conducted by a Chartered Accountant</li>
                            <li className="text-muted-foreground">
                                Preparation of:
                                <ul className="mt-2 space-y-2 list-disc pl-5">
                                    <li className="text-muted-foreground">Balance Sheet</li>
                                    <li className="text-muted-foreground">Profit & Loss Account</li>
                                    <li className="text-muted-foreground">Cash Flow Statement</li>
                                    <li className="text-muted-foreground">Notes to Accounts</li>
                                </ul>
                            </li>
                            <li className="text-muted-foreground">Auditor appointment within 30 days of incorporation (Form ADT-1)</li>
                        </ul>
                    </li>
                    <li>
                        <strong className="text-muted-foreground">Annual ROC Filings:</strong>
                        <Table className="mt-4">
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Form</TableHead>
                                    <TableHead>Purpose</TableHead>
                                    <TableHead>Due Date</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {annualRocFilings.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{item.form}</TableCell>
                                        <TableCell>{item.purpose}</TableCell>
                                        <TableCell>{item.dueDate}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <p className="mt-4 text-muted-foreground text-justify">Companies must hold AGM within 6 months from FY-end (i.e., by 30th September for most).</p>
                    </li>
                    <li>
                        <strong className="text-muted-foreground">DIN KYC – Form DIR-3 KYC:</strong>
                        <ul className="mt-2 space-y-2 list-disc pl-5">
                            <li className="text-muted-foreground">Mandatory for all directors with DIN</li>
                            <li className="text-muted-foreground">Due Date: 30th September 2025</li>
                            <li className="text-muted-foreground">Failure = Deactivation of DIN</li>
                        </ul>
                    </li>
                    <li>
                        <strong className="text-muted-foreground">Board Meetings:</strong>
                        <ul className="mt-2 space-y-2 list-disc pl-5">
                            <li className="text-muted-foreground">Minimum 4 Board Meetings per year</li>
                            <li className="text-muted-foreground">Maintain minutes, notices, and attendance records</li>
                        </ul>
                    </li>
                    <li>
                        <strong className="text-muted-foreground">Form DPT-3 (Return of Deposits):</strong>
                        <ul className="mt-2 space-y-2 list-disc pl-5">
                            <li className="text-muted-foreground">Disclose all outstanding loans, deposits, or advances as on 31st March</li>
                            <li className="text-muted-foreground">Due Date: 30th June 2025</li>
                        </ul>
                    </li>
                    <li>
                        <strong className="text-muted-foreground">Form MSME-1:</strong>
                        <ul className="mt-2 space-y-2 list-disc pl-5">
                            <li className="text-muted-foreground">Half-yearly disclosure of outstanding dues to MSME creditors (if payment > 45 days)</li>
                        </ul>
                    </li>
                    <li>
                        <strong className="text-muted-foreground">Form MBP-1 & DIR-8:</strong>
                        <ul className="mt-2 space-y-2 list-disc pl-5">
                            <li className="text-muted-foreground">Directors must disclose interest in other entities annually and confirm eligibility</li>
                        </ul>
                    </li>
                </ol>
            </section>

            <section id="compliance-checklist">
                <h2 className="text-3xl font-bold font-headline">Private Limited Company Compliance Checklist</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5 grid grid-cols-1 md:grid-cols-2">
                    {complianceChecklist.map((item, index) => (
                        <li key={index} className="text-muted-foreground">{item}</li>
                    ))}
                </ul>
            </section>

            <section id="compliance-calendar">
                <h2 className="text-3xl font-bold font-headline">Compliance Calendar – AY 2025-26</h2>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Compliance</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Due Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {complianceCalendar.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.compliance}</TableCell>
                                <TableCell>{item.description}</TableCell>
                                <TableCell>{item.dueDate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>

            <section id="roc-compliance">
                <h2 className="text-3xl font-bold font-headline">ROC (Registrar of Companies) Compliance</h2>
                <div className="mt-4 space-y-4">
                    <div>
                        <h3 className="text-xl font-semibold">Event-Based ROC Compliances</h3>
                        <ul className="mt-2 space-y-2 list-disc pl-5">
                            <li className="text-muted-foreground"><strong>Change in directors</strong> – DIR-12</li>
                            <li className="text-muted-foreground"><strong>Allotment of shares</strong> – PAS-3</li>
                            <li className="text-muted-foreground"><strong>Change in registered office</strong> – INC-22</li>
                            <li className="text-muted-foreground"><strong>Increase in authorized capital</strong> – SH-7</li>
                            <li className="text-muted-foreground"><strong>Auditor appointment or re-appointment</strong> – ADT-1</li>
                            <li className="text-muted-foreground"><strong>Disclosure of interest by directors</strong> – MBP-1 & DIR-8</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="gst-compliance">
                <h2 className="text-3xl font-bold font-headline">GST Compliance for Pvt Ltd Companies</h2>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Return/Form</TableHead>
                            <TableHead>Purpose</TableHead>
                            <TableHead>Frequency</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {gstCompliance.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.form}</TableCell>
                                <TableCell>{item.purpose}</TableCell>
                                <TableCell>{item.frequency}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>

            <section id="documents-required">
                <h2 className="text-3xl font-bold font-headline">Documents Required for Annual Compliance</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {requiredDocuments.map((doc, index) => (
                        <li key={index} className="text-muted-foreground">{doc}</li>
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
            
            <section id="how-we-help">
                <h2 className="text-3xl font-bold font-headline">How CACSFinacc Makes Your Pvt. Ltd. Company Fully Compliant</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {howWeHelp.map((item, index) => (
                        <li key={index} className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: item }}></li>
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
