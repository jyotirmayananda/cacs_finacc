
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const metadata: Metadata = {
  title: 'Income Tax Notice Services | CACS FinAcc Digital',
  description: 'Expert handling of income tax notices. Understand the reasons, types, and how to respond to notices under sections 143(1), 139(9), 142(1), 143(2), and 148.',
};

const noticeResponseTimes = [
    { section: "139(9)", time: "15 days from receipt" },
    { section: "142(1)", time: "15–30 days or as specified" },
    { section: "143(2)", time: "Within timeline on portal" },
    { section: "148A(b)", time: "7 days (can be extended)" },
    { section: "245", time: "30 days to respond for refund adjustment" },
];

const requiredDocuments = [
    "PAN, Aadhaar, ITR Acknowledgment",
    "Form 26AS, AIS, TIS",
    "Financial statements or P&L",
    "Bank statements and investment proofs",
    "TDS certificates",
    "Income computation sheets",
    "Contracts, invoices, rental agreements",
    "Previous correspondence with ITD",
];

const howToRespondSteps = [
    "Log in to the Income Tax e-Filing Portal.",
    "Navigate to e-Proceedings > e-Assessment/Response to IT Notice.",
    "Select the relevant notice under 'View Notices'.",
    "Download the notice and understand the requirement.",
    "Prepare your response, along with necessary documentation.",
    "Submit the response online and download the acknowledgment.",
];

const penalties = [
    { section: "Under Section 272A", penalty: "₹10,000 per default for non-compliance." },
    { section: "Under Section 234F", penalty: "Late filing fees up to ₹5,000." },
    { section: "Under Section 271(1)(c)", penalty: "50% to 200% of the tax sought to be evaded for misreporting or concealment of income." },
    { section: "Prosecution for Willful Default", penalty: "In extreme cases, imprisonment of 3 months to 7 years." },
];

export default function IncomeTaxNoticePage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Tax Filings', href: '/tax-filing' },
            { label: 'Income Tax Notice' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-notice">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">Income Tax Notices</h1>
                <h2 className="mt-8 text-3xl font-bold font-headline">What is an Income Tax Notice?</h2>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    An Income Tax Notice is an official communication from the Income Tax Department, alerting taxpayers about potential discrepancies, non-compliance, or the necessity for additional information. It's crucial to understand that receiving a notice doesn’t automatically imply a tax liability; often, it's a part of routine verification or a request for information.
                </p>
            </section>

            <section id="reasons-for-notice">
                <h2 className="text-3xl font-bold font-headline">Reasons for Receiving an Income Tax Notice</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    Several reasons can trigger an income tax notice. Here are some common scenarios:
                </p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify"><strong>Discrepancies in Tax Returns [Section 139(9) / 143(1)(a)]:</strong> A mismatch between declared income, claimed deductions, and the data available with the Income Tax Department can lead to a notice requesting clarification.</li>
                    <li className="text-muted-foreground text-justify"><strong>Non-Filing of Tax Returns [Section 142(1)]:</strong> Failure to file your income tax return by the due date may prompt the department to send a reminder notice.</li>
                    <li className="text-muted-foreground text-justify"><strong>High-Value Transactions [Section 148A]:</strong> Engaging in high-value transactions that don't align with your reported income might result in a notice seeking an explanation of these transactions.</li>
                    <li className="text-muted-foreground text-justify"><strong>TDS/TCS Mismatch [Compliance Notice]:</strong> Discrepancies between the tax deducted at source (TDS) or tax collected at source (TCS) as per your Form 26AS and the income declared in your tax return can trigger a notice.</li>
                    <li className="text-muted-foreground text-justify"><strong>Investments/Deposits in Your Name:</strong> Significant investments or large deposits that are inconsistent with your reported income may lead the department to inquire about the source of funds.</li>
                    <li className="text-muted-foreground text-justify"><strong>Property Transactions:</strong> Property transactions, especially if the declared value is lower than the guideline value determined by the state, can trigger a notice.</li>
                    <li className="text-muted-foreground text-justify"><strong>Scrutiny of Returns [Section 143(2), 147]:</strong> Random selection of returns for scrutiny ensures compliance. If your return is chosen, you'll receive a notice requiring detailed documentation and explanations.</li>
                    <li className="text-muted-foreground text-justify"><strong>Demand for Tax:</strong> If the department calculates unpaid taxes based on your return or adjustments, they'll issue a notice demanding the due tax.</li>
                    <li className="text-muted-foreground text-justify"><strong>Refund Claims:</strong> Claiming a refund in your tax return may lead to a verification notice before the refund is processed.</li>
                    <li className="text-muted-foreground text-justify"><strong>Foreign Assets or Income:</strong> Holding foreign assets or income might prompt a notice if the department requires additional information or if there are reporting discrepancies.</li>
                </ul>
            </section>
            
            <section id="types-of-notices">
                <h2 className="text-3xl font-bold font-headline">Types of Income Tax Notices</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    Understanding the type of notice is crucial for an appropriate response. Here are some common types:
                </p>
                <ol className="mt-4 space-y-4 list-decimal pl-5">
                    <li><strong>Notice u/s 143(1): Intimation</strong>
                        <ul className="mt-2 space-y-2 list-disc pl-5 text-muted-foreground">
                            <li>Issued after return processing.</li>
                            <li>Shows refund, tax demand, or adjustment.</li>
                            <li>Must be acted upon if tax demand is raised.</li>
                        </ul>
                    </li>
                    <li><strong>Notice u/s 139(9): Defective Return</strong>
                        <ul className="mt-2 space-y-2 list-disc pl-5 text-muted-foreground">
                            <li>Issued if ITR is filed incorrectly (e.g., balance sheet missing).</li>
                            <li>Must be revised within 15 days.</li>
                        </ul>
                    </li>
                    <li><strong>Notice u/s 142(1): Inquiry Before Assessment</strong>
                        <ul className="mt-2 space-y-2 list-disc pl-5 text-muted-foreground">
                            <li>Request for documents or accounts before scrutiny.</li>
                            <li>Non-response may lead to best judgment assessment.</li>
                        </ul>
                    </li>
                    <li><strong>Notice u/s 143(2): Scrutiny Assessment</strong>
                        <ul className="mt-2 space-y-2 list-disc pl-5 text-muted-foreground">
                            <li>Detailed investigation into income, expenses, exemptions claimed.</li>
                            <li>Requires legal representation and document submission.</li>
                        </ul>
                    </li>
                    <li><strong>Notice u/s 148/148A: Income Escaped Assessment</strong>
                        <ul className="mt-2 space-y-2 list-disc pl-5 text-muted-foreground">
                            <li>Sent when income is not disclosed or underreported.</li>
                            <li>Comes with a show cause opportunity under 148A(b).</li>
                        </ul>
                    </li>
                    <li><strong>Section 245: Adjustment of Refund</strong>
                        <ul className="mt-2 space-y-2 list-disc pl-5 text-muted-foreground">
                            <li>Notice of refund adjustment against old tax dues.</li>
                        </ul>
                    </li>
                </ol>
            </section>

            <section id="response-deadlines">
                <h2 className="text-3xl font-bold font-headline">Respond Within Deadline to Avoid Penalties</h2>
                <p className="mt-4 text-muted-foreground text-justify">Timely response is critical to avoid penalties. Here are typical response times:</p>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Section</TableHead>
                            <TableHead>Response Time</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {noticeResponseTimes.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.section}</TableCell>
                                <TableCell>{item.time}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>

            <section id="required-documents">
                <h2 className="text-3xl font-bold font-headline">Required Documents for Responding to Tax Notices</h2>
                <p className="mt-4 text-muted-foreground text-justify">Gathering the necessary documents is essential for a comprehensive response. Typical documents include:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5 text-muted-foreground">
                    {requiredDocuments.map((doc, index) => <li key={index}>{doc}</li>)}
                </ul>
            </section>

            <section id="how-to-respond">
                <h2 className="text-3xl font-bold font-headline">How to Respond to an Income Tax Notice?</h2>
                <p className="mt-4 text-muted-foreground text-justify">Follow these steps to respond effectively:</p>
                <ol className="mt-4 space-y-3 list-decimal pl-5 text-muted-foreground">
                    {howToRespondSteps.map((step, index) => <li key={index}>{step}</li>)}
                </ol>
            </section>

            <section id="penalties">
                <h2 className="text-3xl font-bold font-headline">Penalties for Non-Compliance</h2>
                <p className="mt-4 text-muted-foreground text-justify">Non-compliance or delayed response to an Income Tax Notice can attract the following penalties:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5 text-muted-foreground">
                    {penalties.map((item, index) => <li key={index}><strong>{item.section}:</strong> {item.penalty}</li>)}
                </ul>
            </section>

            <section id="amendments">
                <h2 className="text-3xl font-bold font-headline">Recent Amendments for AY 2025-26</h2>
                <p className="mt-4 text-muted-foreground text-justify">The Finance Act, 2024, has introduced significant changes:</p>
                <ol className="mt-4 space-y-3 list-decimal pl-5 text-muted-foreground">
                    <li><strong>E-Verification Mandate:</strong> All notices and responses are now processed electronically through the Income Tax e-Filing Portal.</li>
                    <li><strong>Faceless Assessments:</strong> Scrutiny and verification are conducted digitally, reducing personal interface.</li>
                    <li><strong>Extended Time Limits:</strong> Notices under Section 148 for income escaping assessment can be issued up to 6 years for significant cases of tax evasion.</li>
                    <li><strong>Digital Signature Verification:</strong> All communications are authenticated with Digital Signature Certificates (DSC) or e-verification via OTP.</li>
                    <li><strong>Increased Penalties for Non-compliance:</strong> Failure to respond within the stipulated timeline can lead to penalties up to ₹10,000 per default under Section 272A.</li>
                </ol>
            </section>

            <section id="how-we-help">
                <h2 className="text-3xl font-bold font-headline">How Can CACSFinacc Services Help?</h2>
                <p className="mt-4 text-muted-foreground text-justify">CACSFinacc Services offers comprehensive support to navigate income tax notices effectively:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5 text-muted-foreground">
                    <li><strong>Expert Assessment:</strong> Our tax professionals analyze the notice and prepare a robust response.</li>
                    <li><strong>Timely Filing:</strong> We ensure all submissions are made within the prescribed deadlines.</li>
                    <li><strong>Document Verification:</strong> Complete verification of financials and documentation for accurate representation.</li>
                    <li><strong>Faceless Representation:</strong> Seamless handling of faceless assessments without any hassle.</li>
                    <li><strong>End-to-End Support:</strong> From initial notice analysis to final resolution, we handle it all.</li>
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
