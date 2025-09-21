
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const metadata: Metadata = {
  title: 'SFT Return Filing Services | CACS FinAcc Digital',
  description: 'Ensure timely SFT return filing with our expert services. We handle high-value financial transaction reporting to keep your business compliant and avoid penalties.',
};

const whoMustFile = [
    { type: "Banks & Co-operative Banks", examples: "Deposits, payments, credit card bills" },
    { type: "Post Offices", examples: "Savings and fixed deposits" },
    { type: "Companies issuing shares/debentures", examples: "Buy-back, allotment, etc." },
    { type: "Mutual Funds / AMC", examples: "Units purchased or sold" },
    { type: "Registrar/Sub-Registrar", examples: "Purchase or sale of immovable property" },
    { type: "NBFCs and Institutions", examples: "Loans or credit aggregating specified thresholds" },
    { type: "Professionals / Traders / Sellers", examples: "If high-value transactions recorded in books" },
];

const reportableTransactions = [
    { type: "Cash deposits in savings account", threshold: "₹10,00,000 or more" },
    { type: "Cash deposits in current account", threshold: "₹50,00,000 or more" },
    { type: "Credit card bill payment in cash", threshold: "Above ₹1,00,000" },
    { type: "Credit card bill payment (any mode)", threshold: "Above ₹10,00,000" },
    { type: "Sale/purchase of immovable property", threshold: "₹30,00,000 or more" },
    { type: "Cash receipt for sale of goods/services", threshold: "Above ₹2,00,000" },
    { type: "Investment in mutual funds, bonds, shares", threshold: "₹10,00,000 or more" },
    { type: "Fixed Deposit (FD) transactions", threshold: "₹10,00,000 or more" },
];

const requiredDocuments = [
    "PAN & TAN of reporting entity",
    "Entity type and nature of business",
    "List of high-value transactions with PANs of customers/clients",
    "Financial summary as per books",
    "XML file in correct schema (prepared via validation utility)",
    "Digital Signature Certificate (DSC) or Aadhaar e-verify",
    "Previous year’s SFT (if any)",
];

const filingProcess = [
    { step: 1, action: "Register on Reporting Portal", description: "<a href='https://report.insight.gov.in' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>https://report.insight.gov.in</a>" },
    { step: 2, action: "Generate Entity Identification Number (RE ID)", description: "" },
    { step: 3, action: "Prepare SFT XML using Reporting Utility (provided by CBDT)", description: "" },
    { step: 4, action: "Validate and Upload XML File", description: "" },
    { step: 5, action: "Submit Verification Statement (with DSC or EVC)", description: "" },
    { step: 6, action: "Save Acknowledgment Receipt for record", description: "" },
];

const penalties = [
    { nonCompliance: "Not filing SFT (Form 61A)", penalty: "₹500/day (up to ₹1,00,000)" },
    { nonCompliance: "Wrong or incomplete filing", penalty: "₹50,000" },
    { nonCompliance: "Non-response to notice under Section 285BA(5)", penalty: "Additional ₹1,000/day" },
];

const amendments = [
    "<strong>Increased Monitoring via AIS/26AS:</strong> Non-filing or wrong filing of SFT leads to mismatch alerts in taxpayer profiles.",
    "<strong>Real Time Validation:</strong> PAN verification is now mandatory at the time of reporting.",
    "<strong>Auto Population for ITR Filing:</strong> SFT data is used by the department to pre-fill Form ITR.",
    "<strong>New SFT Categories:</strong> Reporting now includes foreign remittances (under LRS), digital asset transactions, and buybacks.",
    "<strong>Stringent Penalties:</strong> Delayed or incorrect filing attracts penalties under Section 271FA and Section 285BA(5).",
    "<strong>Wider Scope Under Rule 114E:</strong> New classes of non-banking entities (e.g., fintechs, online platforms) may be required to report.",
    "<strong>AIS & TIS Integration:</strong> SFT data is now directly reflected in the taxpayer’s AIS (Annual Information Statement) & TIS (Taxpayer Information Summary).",
    "<strong>Auto Scrutiny of High Value Transactions:</strong> AI-backed alerts are sent for mismatches between SFT data and ITRs.",
    "<strong>Revised Technical Schema for Form 61A:</strong> Improved error validation and XML structure on the Reporting Portal.",
];

const howWeHelp = [
    { title: "Eligibility Assessment", description: "Identify whether your business or institution is liable to file SFT" },
    { title: "Transaction Review & PAN Mapping", description: "Match transactions with client PANs and categorize under Rule 114E" },
    { title: "Form 61A Preparation & Validation", description: "Prepare XML in correct schema using SFT utility and validate against technical errors" },
    { title: "Online Submission via Reporting Portal", description: "Upload the report and generate Acknowledgement Number" },
    { title: "Post Filing Compliance Support", description: "Help respond to any queries or notices under Section 285BA(5)" },
];

const whyChooseUs = [
    "Expert Handling of Form 61A Preparation & Filing",
    "Correct PAN Mapping & Data Validation",
    "Regulatory Guidance under Section 285BA",
    "Avoid Penalties with Timely Filing",
    "Bulk Data Processing for Banks, NBFCs & Registrars",
    "Dedicated Support for Reporting Portal Registration",
];

export default function SftReturnFilingPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Compliances', href: '/compliance' },
            { label: 'SFT Return Filing Services' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-sft">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">SFT Return Filing Services</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    SFT (Statement of Financial Transactions), formerly known as Annual Information Return (AIR), is a report filed by specified entities under Section 285BA of the Income Tax Act, 1961, to the Income Tax Department disclosing high-value financial transactions undertaken by individuals and businesses.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">
                    It plays a critical role in income tax surveillance, profiling, and compliance via the Annual Information Statement (AIS) and Form 26AS of taxpayers.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">
                    SFT filing is not a tax return but a compliance return. It must be filed annually by specific persons/entities responsible for registering or recording such high-value financial transactions.
                </p>
            </section>

            <section id="who-must-file">
                <h2 className="text-3xl font-bold font-headline">Who Must File SFT Returns?</h2>
                <p className="mt-4 text-muted-foreground text-justify">The following entities are obligated to file SFT Form 61A:</p>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Entity Type</TableHead>
                            <TableHead>Examples</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {whoMustFile.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.type}</TableCell>
                                <TableCell>{item.examples}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>
            
            <section id="why-sft-important">
                <h2 className="text-3xl font-bold font-headline">Why is SFT Return Important?</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5 text-muted-foreground">
                    <li>Enhances tax transparency and reduces risk of tax scrutiny</li>
                    <li>Matches high-value transactions with reported income</li>
                    <li>Mandatory for banks, financial institutions, registrars, and others</li>
                    <li>Failure to file attracts severe penalties and notices</li>
                </ul>
            </section>

            <section id="reportable-transactions">
                <h2 className="text-3xl font-bold font-headline">Nature of Transactions to be Reported</h2>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Transaction Type</TableHead>
                            <TableHead>Threshold</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {reportableTransactions.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.type}</TableCell>
                                <TableCell>{item.threshold}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <p className="mt-4 text-muted-foreground text-justify italic">
                    <strong>Note:</strong> Even a single transaction crossing the prescribed limit triggers SFT reporting.
                </p>
            </section>

            <section id="documents-required">
              <h2 className="text-3xl font-bold font-headline">Documents & Information Required</h2>
              <ul className="mt-4 space-y-3 list-disc pl-5 text-muted-foreground">
                {requiredDocuments.map((doc, index) => (
                    <li key={index}>{doc}</li>
                ))}
              </ul>
            </section>
            
            <section id="due-date">
                <h2 className="text-3xl font-bold font-headline">Due Date for SFT Return – AY 2025-26</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5 text-muted-foreground">
                    <li>
                        <strong>31st May 2025</strong> for Financial Year ending 31st March 2025
                        <ul className="mt-2 space-y-2 list-disc pl-5">
                            <li>Filed using <strong>Form 61A</strong> through the <a href="https://report.insight.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Reporting Portal</a></li>
                            <li>Entities must register separately on the Reporting Portal (different from income tax portal)</li>
                        </ul>
                    </li>
                </ul>
            </section>

            <section id="penalties">
                <h2 className="text-3xl font-bold font-headline">Penalty for Non-Filing or Inaccurate Filing</h2>
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

            <section id="how-to-file">
              <h2 className="text-3xl font-bold font-headline">How to File SFT Return (Form 61A)</h2>
              <p className="mt-4 text-muted-foreground font-semibold">Step by Step Process:</p>
              <ol className="mt-4 space-y-4 list-decimal pl-5">
                {filingProcess.map((item) => (
                  <li key={item.step} className="text-muted-foreground">
                    <strong>{item.action}:</strong> <span dangerouslySetInnerHTML={{ __html: item.description }}></span>
                  </li>
                ))}
              </ol>
            </section>
            
            <section id="amendments">
                <h2 className="text-3xl font-bold font-headline">Latest Amendments – AY 2025-26</h2>
                <p className="mt-4 text-muted-foreground text-justify">As per Finance Act, 2024 and CBDT updates:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5 text-muted-foreground">
                    {amendments.map((item, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>

            <section id="how-we-help">
                <h2 className="text-3xl font-bold font-headline">How CACSFinacc Helps You File SFT Accurately</h2>
                <ol className="mt-4 space-y-4 list-decimal pl-5">
                    {howWeHelp.map((item, index) => (
                        <li key={index}>
                            <strong className="text-muted-foreground">{item.title}:</strong>
                            <p className="text-muted-foreground text-justify">{item.description}</p>
                        </li>
                    ))}
                </ol>
            </section>

            <section id="why-choose-us">
                <h2 className="text-3xl font-bold font-headline">Why Choose CACSFinacc for SFT Filing?</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5 text-muted-foreground">
                    {whyChooseUs.map((item, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
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
