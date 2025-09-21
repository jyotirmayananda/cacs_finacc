
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const metadata: Metadata = {
  title: 'GST Return Filing Services | CACS FinAcc Digital',
  description: 'Ensure timely and accurate GST return filings with our expert services. We handle all types of GST returns to keep your business compliant.',
};

const gstReturnTypes = [
    { return: "GSTR-1", description: "Filed for disclosing details of outward supplies, essentially the sales." },
    { return: "GSTR-3B", description: "A summarised return that outlines both sales and purchases, inclusive of tax payments." },
    { return: "GSTR-4", description: "Applicable to those under the Composition Scheme, summarizing turnover and corresponding tax." },
    { return: "GSTR-5", description: "For non-resident taxpayers conducting taxable transactions in India." },
    { return: "GSTR-5A", description: "For providers of online information and database access or retrieval services." },
    { return: "GSTR-6", description: "Used by Input Service Distributors for detailing input tax credit distribution." },
    { return: "GSTR-7", description: "For entities required to deduct TDS under GST." },
    { return: "GSTR-8", description: "To be filed by e-commerce operators reporting transactions on their platform." },
    { return: "GSTR-9", description: "An annual comprehensive return summarizing all periodical filings over the fiscal year." },
    { return: "GSTR-10", description: "The final return upon cancellation or surrender of GST registration." },
    { return: "GSTR-11", description: "For those with a Unique Identity Number, claiming refunds on their purchases." },
    { return: "CMP-08", description: "A quarterly statement for Composition Scheme taxpayers detailing tax liability." },
    { return: "ITC-04", description: "For manufacturers to declare details about goods dispatched to and received from a job worker." },
];

const dueDates = [
    { return: "GSTR-1", taxpayer: "Regular Taxpayer", dueDate: "Monthly: 11th of the following month\nQuarterly: 13th of the month following the quarter" },
    { return: "GSTR-2A (Auto-generated)", taxpayer: "All Taxpayers", dueDate: "Auto-generated, utilized for reconciliation purposes" },
    { return: "GSTR-3B", taxpayer: "Regular Taxpayer", dueDate: "Monthly: 20th of the following month" },
    { return: "GSTR-4", taxpayer: "Composition Scheme Dealer", dueDate: "Annually: 30th of April following the end of the financial year" },
    { return: "GSTR-5", taxpayer: "Non-Resident Foreign Taxpayer", dueDate: "20th of the following month" },
    { return: "GSTR-6", taxpayer: "Input Service Distributor", dueDate: "13th of the following month" },
    { return: "GSTR-7", taxpayer: "Tax Deducted at Source (TDS)", dueDate: "10th of the following month" },
    { return: "GSTR-8", taxpayer: "E-commerce Operator", dueDate: "10th of the following month" },
    { return: "GSTR-9", taxpayer: "Regular Taxpayer (Annual)", dueDate: "31st December of the following financial year" },
    { return: "GSTR-9C", taxpayer: "Regular Taxpayer (Annual)", dueDate: "Filed along with GSTR-9, by 31st December of the following financial year" },
];

const lateFilingPenalties = [
    "Filing Returns is Required: Every registered taxpayer has to file GST returns regularly, even if there's no business activity.",
    "Delays Lead to More Delays: If you miss a filing deadline, you can't file for the next period until you've filed for the previous one. This can lead to a pile-up of late returns.",
    "Penalties for Late Filing: If you file GSTR-1 late, for example, you'll get a penalty that shows up when you file GSTR-3B. You are required to pay GST filing charges for delayed filing.",
    "Interest on Late Tax Payments: If you owe taxes and pay late, you'll be charged 18% interest per year on the amount you owe, starting from the day after the due date until you pay.",
    "Late GST return filing fees: The law sets the late GST return filing fees at Rs. 100 per day for each CGST and SGST, with a maximum of Rs. 5,000.",
    "Annual Return Late Fees: For yearly returns like GSTR-9 and GSTR-9C, the late fee is capped at 0.25% of your turnover in your state or UT unless the government provides relief or changes the fees.",
];

const gstUpdates = [
    { title: "Mandatory Multi-Factor Authentication (MFA)", description: "To enhance security, the GST portal now requires multi-factor authentication for all users, irrespective of turnover. This measure aims to safeguard sensitive financial data from unauthorized access." },
    { title: "E-Way Bill (EWB) Restrictions", description: "E-Way Bills can only be generated for documents (invoices or delivery challans) dated within the preceding 180 days. Additionally, extensions are capped at 360 days from the original generation date. These changes aim to curb backdating practices and ensure the legitimate movement of goods." },
    { title: "Simplified Refund Process", description: "The GST refund process has been revamped to expedite approvals, featuring auto-population of data, reduced documentation requirements, and faster credit of refunds to bank accounts, benefiting cash flow management for businesses." },
    { title: "Enhanced Input Tax Credit (ITC) Reconciliation", description: "The updated GST portal offers improved reconciliation of input tax credit claims. Mismatches between a taxpayer’s GSTR-2B and the supplier’s GSTR-1 filings are flagged instantly, reducing disputes and ensuring accurate credit claims." },
    { title: "Penalty Relief Scheme", description: "To encourage compliance, the government has introduced a penalty waiver scheme in 2025. Taxpayers with overdue returns can clear their backlogs by paying reduced late fees within a designated window, helping businesses get back on track without significant financial burdens." },
    { title: "Revised Time Limit for E-Invoice Reporting", description: "Businesses with an annual aggregate turnover (AATO) of ₹10 crores or more must report their e-invoices within 30 days from the invoice date. Previously, this requirement applied only to businesses with an AATO of ₹100 crores and above. The Invoice Registration Portal (IRP) will reject invoices older than 30 days, making timely reporting crucial for compliance." },
    { title: "Updated HSN Code Reporting in GSTR-1/1A", description: "Starting April 2025, Table 12 in GSTR-1/1A is split into B2B and B2C sections for HSN-wise summary reporting. Manual HSN code entry is discontinued; taxpayers must select codes from a predefined dropdown list. The “Description as per HSN Code” field auto-fills based on the selected code." },
    { title: "Mandatory Input Service Distributor (ISD) Registration", description: "From April 2025, businesses with multiple GST registrations under one PAN must use the ISD mechanism to distribute Input Tax Credit (ITC). Cross-charge methods are no longer permitted. ISD invoices must be issued, and monthly GSTR-6 filings are mandatory." },
    { title: "Revised Compliance for Hospitality Sector", description: "Hotels charging more than ₹7,500/day must levy an 18% GST on meals served in their restaurants (up from 5%), with full ITC eligibility. The “Declared Tariff” concept has been abolished; taxes will now apply to actual transaction value instead of pre-declared rates." },
    { title: "Uniform GST Rate for Used Cars", description: "A flat 18% GST applies to margin values (selling price minus purchase price) for all categories of used cars. No tax is levied if the margin is negative." },
];

const whyChooseUs = [
    "Expertise: Our team stays updated with the latest GST regulations to provide accurate and timely services.",
    "Customized Solutions: We tailor our services to meet your specific business needs.",
    "Compliance Assurance: We ensure your business adheres to all GST compliance requirements, minimizing risks of penalties.",
];

export default function GstReturnsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Tax Filings', href: '/tax-filing' },
            { label: 'GST Returns' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-gst-return">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">GST Return Filing</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    A GST Return is a detailed statement that captures all the financial transactions of a person registered under GST, reflecting revenues and expenditures. GST filing online is a mandatory submission for every holder of GSTIN to the tax authorities, allowing them to determine the net tax liability with precision.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">
                    The GST return filing online encompasses several critical elements:
                </p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify"><strong>Purchases:</strong> It records in detail the purchases the taxpayer has made.</li>
                    <li className="text-muted-foreground text-justify"><strong>Sales:</strong> It provides a comprehensive log of the taxpayer's sales activities.</li>
                    <li className="text-muted-foreground text-justify"><strong>Output GST (On Sales):</strong> It notes the GST charged on the taxpayer's sales.</li>
                    <li className="text-muted-foreground text-justify"><strong>Input Tax Credit (GST Paid on Purchases):</strong> It lists the GST paid on purchases, which is eligible to be deducted from the GST owed on sales.</li>
                </ul>
                <p className="mt-4 text-muted-foreground text-justify">
                    At CACSFinacc Services, we offer expert GST return filing services, ensuring your business remains compliant with the latest regulations.
                </p>
            </section>

            <section id="who-should-file">
                <h2 className="text-3xl font-bold font-headline">Who Should File GST Returns?</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    GST returns must be filed by any business or individual registered under the GST regime. This obligation applies to entities whose annual aggregate turnover surpasses the specified threshold, which is set by the tax authorities and may differ for various classifications of taxpayers, such as standard taxpayers and those opting for the composition scheme. All those applicable entities must file GST returns before the due date to avoid late GST filing charges.
                </p>
            </section>

            <section id="how-many-returns">
                <h2 className="text-3xl font-bold font-headline">How Many Returns are there under GST?</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    Within the Goods and Services Tax (GST) system, 13 returns cater to different facets of a taxpayer's financial dealings. It's important to recognize that not all taxpayers must file every type of return; the specific returns that need to be filed depend on the taxpayer's category and the particulars of their GST registration.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">Below is a snapshot of the 13 GST returns:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {gstReturnTypes.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify"><strong>{item.return}:</strong> {item.description}</li>
                    ))}
                </ul>
                <p className="mt-4 text-muted-foreground text-justify">Additionally, there are return-related statements for input tax credits:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify"><strong>GSTR-2A (dynamic):</strong> Offers a real-time perspective of inward supplies as suppliers report.</li>
                    <li className="text-muted-foreground text-justify"><strong>GSTR-2B (static):</strong> Provides a fixed snapshot of inward supplies based on the suppliers' filings.</li>
                </ul>
                <p className="mt-4 text-muted-foreground text-justify">
                    For small taxpayers enrolled in the Quarterly Return Monthly Payment (QRMP) scheme, the Invoice Furnishing Facility (IFF) permits the declaration of B2B sales during the first two months of a quarter. Nonetheless, these taxpayers are obligated to remit taxes monthly using Form PMT-06.
                </p>
            </section>

            <section id="due-dates">
                <h2 className="text-3xl font-bold font-headline">Due dates for various types of GST returns</h2>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>GST Return</TableHead>
                            <TableHead>Type of Taxpayer</TableHead>
                            <TableHead>Due Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {dueDates.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.return}</TableCell>
                                <TableCell>{item.taxpayer}</TableCell>
                                <TableCell className="whitespace-pre-line">{item.dueDate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>

            <section id="late-filing-penalty">
                <h2 className="text-3xl font-bold font-headline">Penalty for Late Filing GST Returns</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    If you submit GST returns late, you could face penalties and additional GST filing charges. Businesses should submit on time to avoid these costs. Here's what you need to know about late GST returns:
                </p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {lateFilingPenalties.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{item}</li>
                    ))}
                </ul>
            </section>

            <section id="gst-updates">
                <h2 className="text-3xl font-bold font-headline">Key GST Updates Effective April 1, 2025</h2>
                <ol className="mt-4 space-y-4 list-decimal pl-5">
                    {gstUpdates.map((update, index) => (
                        <li key={index}>
                             <strong className="text-muted-foreground">{update.title}</strong>
                             <p className="text-muted-foreground text-justify">{update.description}</p>
                        </li>
                    ))}
                </ol>
            </section>

            <section id="why-choose-us">
                <h2 className="text-3xl font-bold font-headline">Why Choose CACSFinacc Services?</h2>
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
