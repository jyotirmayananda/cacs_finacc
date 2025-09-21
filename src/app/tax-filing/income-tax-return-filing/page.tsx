
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const metadata: Metadata = {
  title: 'Income Tax Return (ITR) Filing Services | CACS FinAcc Digital',
  description: 'Expert ITR e-filing services for individuals, professionals, and businesses. Understand who needs to file, the different tax regimes, and key updates for AY 2025–26.',
};

const oldTaxRegimeSlabs = [
    { range: "Up to Rs. 2,50,000", rate: "Nil" },
    { range: "Rs. 2,50,001 to Rs. 5,00,000", rate: "5%" },
    { range: "Rs. 5,00,001 to Rs. 10,00,000", rate: "20%" },
    { range: "Above Rs. 10,00,000", rate: "30%" },
];

const newTaxRegimeSlabs = [
    { range: "Up to 4,00,000", rate: "NIL" },
    { range: "4,00,001 - 8,00,000", rate: "5" },
    { range: "8,00,001 - 12,00,000", rate: "10" },
    { range: "12,00,001 - 16,00,000", rate: "15" },
    { range: "16,00,001 - 20,00,000", rate: "20" },
    { range: "20,00,001 - 24,00,000", rate: "25" },
    { range: "Above 24,00,000", rate: "30" },
];

const whoNeedsToEFile = [
    "<strong>Salaried Individuals:</strong> If your total annual income exceeds the basic exemption limit, you are required to file IT returns online.",
    "<strong>Self-Employed Professionals:</strong> Freelancers, consultants, doctors, lawyers, designers, and other independent professionals with income above the exemption threshold must e-file. Business-related expenses can also be claimed as deductions.",
    "<strong>Business Owners (including SMEs & MSMEs):</strong> All business entities—including sole proprietorships, partnerships, LLPs, and private limited companies—must file IT returns online annually, irrespective of profit or loss.",
    "<strong>Directors and Partners:</strong> Individuals who serve as directors in private limited companies or partners in LLPs are mandated to file ITRs reflecting their share of income and financial involvement in the entity.",
    {
        title: "<strong>Dividend, Interest, and Capital Gains Earners:</strong> If you receive income from:",
        items: [
            "<strong>Dividends</strong> (mutual funds, equities, etc.)",
            "<strong>Interest</strong> (from FDs, bonds, etc.)",
            "<strong>Capital gains</strong> (from stocks, crypto, F&O, mutual funds)…then it’s mandatory to report and pay applicable taxes through ITR."
        ]
    },
    {
        title: "<strong>NRIs and RNORs:</strong>",
        items: [
            "<strong>NRIs (Non-Resident Indians):</strong> with income arising in India exceeding the exemption limit must file IT returns online.",
            "<strong>RNORs (Resident Not Ordinarily Residents):</strong> with foreign income or assets may also be required to file based on disclosure obligations."
        ]
    },
    "<strong>Foreign Asset or Income Holders:</strong> Indian residents holding foreign assets (like overseas bank accounts, shares, or property) or earning foreign income are required to file ITR, even if their taxable income is below the exemption limit.",
    {
        title: "<strong>High-Value Transaction Individuals:</strong> Even if your income is below the basic exemption limit, you must file ITR if you have:",
        items: [
            "<strong>Deposited Rs. 1 crore or more</strong> in a bank account",
            "<strong>Spent over Rs. 2 lakh</strong> on foreign travel",
            "<strong>Paid more than Rs. 1 lakh</strong> in electricity bills in a year"
        ]
    },
    "<strong>Claiming Tax Refunds:</strong> If you've paid excess tax (through TDS, advance tax, etc.), you must file an ITR to claim your tax refund.",
    "<strong>Charitable and Religious Trusts:</strong> Organisations that manage charity funds, religious institutions, or voluntary contributions must file ITRs annually to maintain financial transparency and tax compliance.",
];

const dueDates = [
    { taxpayer: "Individuals and Entities Not Liable for Tax Audit", date: "July 31, 2025" },
    { taxpayer: "Taxpayers Under Tax Audit (excluding transfer pricing)", date: "October 31, 2025" },
    { taxpayer: "Taxpayers Covered Under Transfer Pricing", date: "November 30, 2025" },
    { taxpayer: "Revised/Belated Return of Income for FY 2024-25", date: "December 31, 2025" },
];

export default function IncomeTaxReturnFilingPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Tax Filings', href: '/tax-filing' },
            { label: 'Income Tax Return Filing' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-itr">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">Income Tax Return (ITR) Filing</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    An Income Tax Return (ITR) is a form used by taxpayers to report their income details and tax payments to the Income Tax Department. There are seven different ITR forms available for ITR e-filing: ITR 1 through ITR 7. The appropriate form for a taxpayer depends on various factors, including their sources of income, the total amount earned, and the type of taxpayer they are (such as individuals, Hindu Undivided Families (HUFs), companies, etc.). Each taxpayer must accurately complete their income tax filing within the specified deadline to comply with the Income Tax Law.
                </p>
            </section>

            <section id="who-needs-to-file">
                <h2 className="text-3xl font-bold font-headline">Who Needs to e-File an ITR Income Tax Return?</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    Income tax filing is not just a legal obligation but also a financial responsibility. It applies to individuals and entities across various categories and income levels. Below is a clear overview of who must e-file their ITR income tax return in India:
                </p>
                <ol className="mt-4 space-y-4 list-decimal pl-5">
                    {whoNeedsToEFile.map((item, index) => (
                        <li key={index}>
                            {typeof item === 'string' ? (
                                <p className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></p>
                            ) : (
                                <>
                                    <p className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item.title }}></p>
                                    <ul className="mt-2 space-y-2 list-disc pl-5">
                                        {item.items.map((subItem, subIndex) => (
                                            <li key={subIndex} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: subItem }}></li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </li>
                    ))}
                </ol>
            </section>

            <section id="eligibility">
                <h2 className="text-3xl font-bold font-headline">Eligibility for Income Tax e-filing in India</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    In India, the obligation to do ITR online filing arises under certain conditions. Primarily, if your gross total income exceeds the basic exemption limits, you're required to e-file your return - and the limits vary based on your age and the tax regime chosen.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">
                    A tax regime refers to the structure under which your income is taxed. As of the latest updates, taxpayers can opt for either the Old Tax Regime, which allows various deductions and exemptions, or the New Tax Regime, which offers reduced slab rates but restricts most deductions.
                </p>
            </section>
            
            <section id="tax-regimes">
                <h2 className="text-3xl font-bold font-headline">Old Tax Regime</h2>
                <p className="mt-4 text-muted-foreground text-justify">The following criteria apply to the old tax regime:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground">Individuals under 60 years: Rs 2.5 lakh</li>
                    <li className="text-muted-foreground">Individuals between 60 and 80 years: Rs 3.0 lakh</li>
                    <li className="text-muted-foreground">Individuals over 80 years: Rs 5.0 lakh</li>
                </ul>
                <p className="mt-4 text-muted-foreground text-justify">In the table below, we have provided the income tax slab under the old tax regime for income tax filing:</p>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Income range</TableHead>
                            <TableHead>Income Tax Slab Rates</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {oldTaxRegimeSlabs.map((slab, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{slab.range}</TableCell>
                                <TableCell>{slab.rate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <h2 className="mt-8 text-3xl font-bold font-headline">New Tax Regime</h2>
                <p className="mt-4 text-muted-foreground text-justify">The Union Budget 2025 introduced significant changes to the income tax slabs under the New Tax Regime. Below, we have provided the updated income tax slabs for the New Tax Regime for income tax filing.</p>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Income Range (Rs.)</TableHead>
                            <TableHead>Tax Rate (%)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {newTaxRegimeSlabs.map((slab, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{slab.range}</TableCell>
                                <TableCell>{slab.rate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>
            
            <section id="other-filing-conditions">
                <h2 className="text-3xl font-bold font-headline">Other Filing Conditions</h2>
                <p className="mt-4 text-muted-foreground text-justify">However, there are other specific circumstances that require you to file ITR, even if your income is below these thresholds:</p>
                
                <h3 className="mt-6 text-2xl font-bold font-headline">High-value Transactions:</h3>
                <p className="mt-4 text-muted-foreground text-justify">You are required to do Income tax filing if you have:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground"><strong>Deposited Rs 1 crore or more</strong> in one or more current bank accounts.</li>
                    <li className="text-muted-foreground"><strong>Deposited Rs 50 lakh or more</strong> in one or more savings bank accounts.</li>
                    <li className="text-muted-foreground"><strong>Spent over Rs 2 lakh</strong> on foreign travel.</li>
                    <li className="text-muted-foreground"><strong>Incurred electricity expenses exceeding Rs 1 lakh</strong> during the financial year.</li>
                    <li className="text-muted-foreground"><strong>Had TDS (Tax Deducted at Source) or TCS (Tax Collected at Source) exceeding Rs 25,000</strong> (or Rs 50,000 for senior citizens).</li>
                </ul>

                <h3 className="mt-6 text-2xl font-bold font-headline">Business and Professional Income:</h3>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground"><strong>Businesses:</strong> Mandatory if your total sales, turnover, or gross receipts exceed Rs 60 lakh during the financial year.</li>
                    <li className="text-muted-foreground"><strong>Professionals:</strong> Mandatory if gross receipts exceed Rs 10 lakh during the financial year.</li>
                </ul>
            </section>

            <section id="key-updates">
                <h2 className="text-3xl font-bold font-headline">Key Updates for Assessment Year (AY) 2025–26</h2>
                <ol className="mt-4 space-y-4 list-decimal pl-5">
                    <li className="text-muted-foreground text-justify"><strong>Revised ITR Forms Released:</strong> The Income Tax Department has released all seven ITR forms for AY 2025–26, incorporating significant changes to accommodate recent tax reforms. Notably, ITR-1 and ITR-4 now allow reporting of long-term capital gains (LTCG) up to ₹1.25 lakh from listed equity shares and equity mutual funds, aligning with the updated exemption limit under Section 112A.</li>
                    <li className="text-muted-foreground text-justify"><strong>Mandatory Aadhaar Linking:</strong> Filing ITRs now requires mandatory linking of Aadhaar numbers. Taxpayers must ensure their Aadhaar is linked with their PAN to successfully file returns.</li>
                    <li className="text-muted-foreground text-justify"><strong>Enhanced Capital Gains Reporting:</strong> Taxpayers must now provide detailed information on capital gains, including scrip-wise details for listed shares and mutual funds. This aims to improve transparency and accuracy in tax reporting.</li>
                    <li className="text-muted-foreground text-justify"><strong>Digital Form 16 for Salaried Individuals:</strong> Employers are now issuing Digital Form 16, an electronic version generated directly from the TRACES portal. This ensures accurate salary and TDS details, simplifying the tax filing process for salaried individuals.</li>
                    <li className="text-muted-foreground text-justify"><strong>Increased Disclosure for Trusts and Institutions:</strong> The revised ITR-7 form mandates increased disclosure by political parties, charitable trusts, universities, and research institutions regarding foreign contributions, voluntary donations, accumulated income, and the utilization of funds. This move aims to enhance transparency and accountability in financial reporting.</li>
                </ol>
            </section>

            <section id="due-dates">
                <h2 className="text-3xl font-bold font-headline">Due Date for ITR e-Filing</h2>
                <p className="mt-4 text-muted-foreground text-justify">It's important for taxpayers to note that merely paying taxes does not fulfil all obligations; timely income tax e-filing in India is also mandatory to avoid penalties. Here's a summary of the key Income tax e-filing last dates or due dates for various categories of taxpayers for the Financial Year (FY) 2024-25:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {dueDates.map((item, index) => (
                        <li key={index} className="text-muted-foreground"><strong>{item.taxpayer}:</strong> Due by {item.date}.</li>
                    ))}
                </ul>
            </section>
            
            <section id="required-documents">
                <h2 className="text-3xl font-bold font-headline">Required Documents</h2>
                <h3 className="mt-6 text-2xl font-bold font-headline">Income-Related Documents</h3>
                <ul className="mt-4 space-y-3 list-disc pl-5 text-muted-foreground">
                    <li><strong>Salary Slips:</strong> To verify your income from employment.</li>
                    <li><strong>Rent Receipts:</strong> If you are claiming House Rent Allowance (HRA).</li>
                    <li><strong>Form 16:</strong> Issued by your employer, detailing the tax deducted at source on your salary.</li>
                    <li><strong>Form-16A:</strong> For TDS on Income other than salary.</li>
                    <li><strong>Form-16B:</strong> For TDS on the sale of the property.</li>
                    <li><strong>Form-16C:</strong> For TDS on rent.</li>
                    <li><strong>Form 26AS:</strong> Your tax credit statement, which shows all taxes that have been deposited against your PAN.</li>
                </ul>

                <h3 className="mt-6 text-2xl font-bold font-headline">Deductions and Exemptions-Related Documents</h3>
                <ul className="mt-4 space-y-3 list-disc pl-5 text-muted-foreground">
                    <li><strong>Interest Certificates:</strong> These are from banks and post offices for savings accounts and fixed deposits.</li>
                    <li><strong>Home Loan Details:</strong> If you're claiming deductions on home loan interest.</li>
                    <li><strong>Proof of Tax-Saving Instruments:</strong> Includes life insurance, health insurance, Public Provident Fund (PPF), National Savings Certificates (NSC), ELSS mutual funds, etc.</li>
                    <li><strong>Income from Capital Gains:</strong> Documents related to the sale of assets like stocks or property.</li>
                    <li><strong>Rental Income:</strong> Lease agreements and rent receipts if you have rental property.</li>
                    <li><strong>Foreign Income and Dividend Income Proofs:</strong> Documents verifying income from foreign sources and dividends.</li>
                </ul>
            </section>

            <section id="why-choose-us">
                <h2 className="text-3xl font-bold font-headline">Why Choose CACSFinacc Services?</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5 text-muted-foreground">
                    <li><strong>Expertise:</strong> Our team stays updated with the latest tax regulations to provide accurate and timely services.</li>
                    <li><strong>Customized Solutions:</strong> We tailor our services to meet your specific financial needs.</li>
                    <li><strong>Compliance Assurance:</strong> We ensure your filings adhere to all compliance requirements, minimizing risks of penalties.</li>
                    <li><strong>Secure Handling:</strong> We prioritize the confidentiality and security of your financial data.</li>
                </ul>
                <p className="mt-4 text-muted-foreground">Stay ahead in tax compliance with CACSFinacc Services. Contact us today to streamline your ITR filing process.</p>
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

    