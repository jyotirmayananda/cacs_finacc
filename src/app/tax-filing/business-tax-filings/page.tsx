
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const metadata: Metadata = {
  title: 'Business Tax Filing Services | CACS FinAcc Digital',
  description: 'Expert business tax filing services for proprietorships, partnership firms, LLPs, and companies. Ensure accurate and timely filing to stay compliant and avoid penalties.',
};

const proprietorshipTaxRatesLess60 = [
    { range: "Up to Rs.2,50,000", rate: "-" },
    { range: "Rs.2,50,001 to Rs. 5,00,000", rate: "5%" },
    { range: "Rs. 5,00,001 to Rs. 10,00,000", rate: "20%" },
    { range: "Above Rs. 10,00,000", rate: "30%" },
];

const proprietorshipTaxRates60to80 = [
    { range: "Up to Rs. 3,00,000", rate: "-" },
    { range: "Rs. 3,00,001 to Rs. 5,00,000", rate: "5%" },
    { range: "Rs. 5,00,001 to Rs. 10,00,000", rate: "20%" },
    { range: "Above Rs. 10,00,000", rate: "30%" },
];

const proprietorshipTaxRatesAbove80 = [
    { range: "up to Rs. 5,00,000", rate: "-" },
    { range: "Rs. 5,00,001 to Rs. 10,00,000", rate: "20%" },
    { range: "Above Rs. 10,00,000", rate: "30%" },
];

const surchargeRates = [
    { range: "Rs. 50 Lakhs to Rs. 1 Crore", rate: "10%" },
    { range: "Rs. 1 Crore to Rs. 2 Crores", rate: "15%" },
    { range: "Rs. 2 Crores to Rs. 5 Crores", rate: "25%" },
    { range: "Above Rs. 5 Crore", rate: "37%" },
];

const ourServices = [
    { 
        title: "Income Tax Filing for Businesses", 
        items: [
            "Filing of ITR-5, ITR-6, and ITR-7 for Partnership Firms, LLPs, Companies, Trusts, and NGOs.",
            "Proper classification of business income, deductions, and adjustments for seamless processing.",
            "MAT (Minimum Alternate Tax) Calculation for companies as applicable.",
            "Strategic tax planning to leverage all eligible deductions under Sections 80IA, 80IB, 80JJAA, and more."
        ] 
    },
    { 
        title: "TDS & TCS Compliance", 
        items: [
            "Quarterly TDS/TCS Return Filing (Form 24Q, 26Q, 27Q, and 27EQ).",
            "Generation and submission of Form 16/16A for employee and vendor payments.",
            "Timely deposit of TDS/TCS to avoid interest and penalties."
        ] 
    },
    { 
        title: "Advance Tax & Self-Assessment Tax Planning", 
        items: [
            "Accurate calculation and timely payment of Advance Tax to avoid interest under Sections 234B and 234C.",
            "Strategic planning to optimize cash flow and reduce tax burden throughout the financial year."
        ] 
    },
    { 
        title: "Representation & Litigation Support", 
        items: [
            "Expert representation for Assessments, Appeals, and Tax Notices under Sections 143(2), 148, 154, and 263.",
            "End-to-end support for scrutiny assessments and dispute resolutions.",
            "Assistance in DRT, ITAT, and High Court Proceedings."
        ] 
    },
];

const whyChooseUs = [
    "Expert-Led Compliance: Managed by seasoned Chartered Accountants with expertise in business taxation and ICAI norms.",
    "Minimized Risk: Robust verification processes to eliminate errors and avoid penalties.",
    "Proactive Filing: Early reminders and strategic planning to prevent last-minute rush and fines.",
    "End-to-End Support: From filing to representation, we cover all aspects of business tax compliance.",
    "Data Security and Confidentiality: Your financial information is protected with industry-leading security measures.",
];

export default function BusinessTaxFilingPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Tax Filings', href: '/tax-filing' },
            { label: 'Business Tax Filing' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-business-tax">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">Business Tax Filing Services</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    CACSFinacc provides expert business tax filing services for all types of business entities in India, including proprietorships, partnership firms, LLPs, and companies. We ensure your tax returns are filed accurately and on time, helping you stay compliant and avoid penalties.
                </p>
                <h2 className="mt-8 text-3xl font-bold font-headline">What is a business tax return?</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    A business tax return refers to an income tax return for businesses. A business income tax return is a comprehensive report that outlines a business's income, expenses, and pertinent tax details, all presented in a designated form. It entails the submission of income tax returns for businesses, with the added requirement of reporting Tax Deducted at Source (TDS). This process must be carried out annually.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">
                    This return serves as a financial statement detailing earnings. It outlays and is a documentation of additional financial components like fixed assets, loans obtained, loans extended, debtors, and creditors within the business. It is important to meet the income tax return filing last date for business.
                </p>
            </section>

            <section id="who-should-file">
                <h2 className="text-3xl font-bold font-headline">Who should file a Business Income Tax Return?</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    Filing a business income tax return is mandatory for all eligible businesses operating within the framework of Indian tax regulations. The need to do a business tax return filing is contingent upon the structure of the business:
                </p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground">Sole Proprietorship</li>
                    <li className="text-muted-foreground">Partnership Firm</li>
                    <li className="text-muted-foreground">Limited Liability Partnership (LLP)</li>
                    <li className="text-muted-foreground">Companies – Private Limited Company, One Person Company</li>
                </ul>
            </section>
            
            <section id="types-of-filing">
                <h2 className="text-3xl font-bold font-headline">Types of Business Income Tax Return Filing</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    The different categories for filing business income tax returns are determined based on the types of business entities allowed to submit them. These categories correspond to other business structures and their respective designations. Ensure to follow the guidelines designed for how to file taxes for small business owners.
                </p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground">Partnership Firm Tax Return Filing</li>
                    <li className="text-muted-foreground">Proprietorship Tax Return Filing</li>
                    <li className="text-muted-foreground">Limited Liability Partnership Tax Return Filing</li>
                    <li className="text-muted-foreground">Company Tax Return Filing</li>
                </ul>
            </section>

            <section id="proprietorship-filing">
                <h2 className="text-3xl font-bold font-headline">Proprietorship Tax Return Filing</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    Any individual with business income is said to be operating a proprietorship firm. Proprietorships operating in India are required to file income tax returns each year. Since proprietorships are considered the same as proprietors, a proprietorship's income tax return filing procedure is similar to individual income tax return filing.
                </p>
                <h3 className="mt-6 text-2xl font-bold font-headline">Requirement for Filing Proprietorship Tax Return</h3>
                <p className="mt-4 text-muted-foreground text-justify">
                    All proprietors below 60 years are required to file income tax returns if total income exceeds Rs. 2.5 lakhs. For proprietors over 60 years but below 80 years, income tax filing is mandatory if total income exceeds Rs.3 lakhs. Proprietors over 80 years and above must file income tax returns if the total income exceeds Rs.5 lakhs.
                </p>
                <h3 className="mt-6 text-2xl font-bold font-headline">Income Tax Rate for Proprietorship</h3>
                <p className="mt-4 text-muted-foreground text-justify">
                    The income tax rate for proprietorship is the same as the income tax rate for individuals. Unlike the income tax rate for LLP or Company, which are flat rates, proprietorships are taxed on slab rates. The following is the income tax rate applicable for proprietorships for the assessment year 2023-24, wherein the Proprietor's age is less than 60.
                </p>
                
                <h4 className="mt-4 font-semibold">Proprietorship Tax Rate AY 2024-25| FY 2023-24 under Normal Tax Regime (Proprietor's age is less than 60 years)</h4>
                <Table className="mt-4">
                    <TableHeader><TableRow><TableHead>Net Income Range</TableHead><TableHead>Rate of income-tax (%)</TableHead></TableRow></TableHeader>
                    <TableBody>
                        {proprietorshipTaxRatesLess60.map((item, index) => (<TableRow key={index}><TableCell>{item.range}</TableCell><TableCell>{item.rate}</TableCell></TableRow>))}
                    </TableBody>
                </Table>
                
                <h4 className="mt-4 font-semibold">Proprietor's age is between 60 and 80 years</h4>
                 <Table className="mt-4">
                    <TableHeader><TableRow><TableHead>Net Income Range</TableHead><TableHead>Rate of income-tax (%)</TableHead></TableRow></TableHeader>
                    <TableBody>
                        {proprietorshipTaxRates60to80.map((item, index) => (<TableRow key={index}><TableCell>{item.range}</TableCell><TableCell>{item.rate}</TableCell></TableRow>))}
                    </TableBody>
                </Table>

                <h4 className="mt-4 font-semibold">Proprietor's age is above 80 years</h4>
                 <Table className="mt-4">
                    <TableHeader><TableRow><TableHead>Net Income Range</TableHead><TableHead>Rate of income-tax (%)</TableHead></TableRow></TableHeader>
                    <TableBody>
                        {proprietorshipTaxRatesAbove80.map((item, index) => (<TableRow key={index}><TableCell>{item.range}</TableCell><TableCell>{item.rate}</TableCell></TableRow>))}
                    </TableBody>
                </Table>

                <h3 className="mt-6 text-2xl font-bold font-headline">Rates of surcharge</h3>
                <p className="mt-4 text-muted-foreground text-justify">In respect of a Proprietor, the rate of surcharge for the Assessment Year 2023-24 is tabulated here:</p>
                <Table className="mt-4">
                    <TableHeader><TableRow><TableHead>Range of Income</TableHead><TableHead>Surcharge Rate</TableHead></TableRow></TableHeader>
                    <TableBody>
                        {surchargeRates.map((item, index) => (<TableRow key={index}><TableCell>{item.range}</TableCell><TableCell>{item.rate}</TableCell></TableRow>))}
                    </TableBody>
                </Table>
                <p className="mt-4 text-muted-foreground text-justify">The rate of surcharge in case of the Proprietor opting for an alternate tax regime as per section 115BAC will be 25% instead of 37% for AY 2023-24.</p>

                <h3 className="mt-6 text-2xl font-bold font-headline">Tax Audit, Due Date, and ITR Form for Proprietorship</h3>
                <p className="mt-4 text-muted-foreground text-justify">A proprietorship firm would require an audit if the total sales turnover is over Rs.1 crore during the financial year. The due date for filing is July 31, or September 30 if an audit is required. Proprietorships file ITR-3 or ITR-4-Sugam.</p>
            </section>

            <section id="partnership-filing">
                <h2 className="text-3xl font-bold font-headline">Partnership Firm Tax Return Filing</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    All partnership firms must file ITR for business income, regardless of income or loss. They are taxed at a flat rate of 30%, plus a 12% surcharge if income exceeds Rs.1 crore, and a 4% health and education cess. Partnership firms are also subject to a Minimum Alternate Tax of 18.5%.
                </p>
                <h3 className="mt-6 text-2xl font-bold font-headline">Tax Audit, Due Date, and ITR Form for Partnership</h3>
                <p className="mt-4 text-muted-foreground text-justify">A tax audit is required if turnover exceeds Rs.1 crore. The due date for filing is July 31, or September 30 if an audit is required. Partnership firms file ITR-5.</p>
            </section>
            
            <section id="llp-filing">
                <h2 className="text-3xl font-bold font-headline">LLP Tax Return Filing</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    All LLPs must file an income tax return, irrespective of income or loss. The tax rate is 30% of total income, with a 12% surcharge if income exceeds Rs.1 crore, plus a 4% health and education cess. LLPs are also subject to a Minimum Alternate Tax of 18.5%.
                </p>
                <h3 className="mt-6 text-2xl font-bold font-headline">Tax Audit, Due Date, and ITR Form for LLP</h3>
                <p className="mt-4 text-muted-foreground text-justify">An audit is required if turnover exceeds Rs. 40 Lakh or contribution exceeds Rs. 25 Lakh. The due date for filing is July 31, or September 30 for audited accounts. LLPs must file using Form ITR-5.</p>
            </section>
            
            <section id="company-filing">
                <h2 className="text-3xl font-bold font-headline">Company Tax Return Filing</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    All companies registered in India must file income tax returns annually. For AY 2024-25, the tax rate is 25% for domestic companies with a turnover of less than Rs.400 crores in 2020-21, and 30% for others. A surcharge and cess are also applicable. Companies are subject to a Minimum Alternate Tax of 15%.
                </p>
                 <h3 className="mt-6 text-2xl font-bold font-headline">Tax Audit, Due Date, and ITR Form for Company</h3>
                <p className="mt-4 text-muted-foreground text-justify">A company's accounts must be audited annually. The due date for filing is September 30. Companies must file using Form ITR-6.</p>
            </section>

            <section id="our-services">
                <h2 className="text-3xl font-bold font-headline">Our Business Tax Filing Services Include:</h2>
                <ul className="mt-4 space-y-4 list-disc pl-5">
                    {ourServices.map((service, index) => (
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

            <section id="why-choose-us">
                <h2 className="text-3xl font-bold font-headline">Why Choose CACSFinacc?</h2>
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
