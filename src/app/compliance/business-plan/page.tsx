
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const metadata: Metadata = {
  title: 'Business Plan Compliance Services | CACS FinAcc Digital',
  description: 'Craft a compliant and investor-ready business plan with our expert services. We ensure your business plan aligns with all legal, financial, and regulatory requirements.',
};

const complianceAreas = [
    { area: "Business Model Mapping", details: "Match proposed activities with GST codes, NIC codes, licensing laws" },
    { area: "Entity Structuring", details: "Choose between Proprietorship, LLP, Pvt. Ltd., or OPC" },
    { area: "Startup India/DPIIT Eligibility", details: "Business innovation certification and tax holiday planning" },
    { area: "Income Tax Strategy", details: "Presumptive vs. normal taxation, depreciation planning" },
    { area: "ROC & MCA Mapping", details: "Alignment of authorized capital, shareholder funding, MOA activities" },
    { area: "GST Registration & Mapping", details: "HSN/SAC codes, reverse charge mechanism, e-invoicing thresholds" },
    { area: "FEMA/FDI Alignment", details: "If foreign investment or overseas expansion is involved" },
    { area: "Bankable Financial Forecasts", details: "Projections aligned with RBI, MCA & Income Tax compliance" },
    { area: "TDS/TCS & Payroll Readiness", details: "Applicable sections under 194, 194C, 192, PF, ESI, PT" },
    { area: "Industry-Specific Licenses", details: "FSSAI, IEC, MSME Udyam, Labour Registration, etc." },
];

const complianceMilestones = [
    { stage: "Pre-Incorporation", compliances: "Business plan legal vetting, MCA name reservation, licensing matrix" },
    { stage: "Post-Incorporation", compliances: "PAN, TAN, GST, MSME, ESIC/PF, bank account setup, MCA filings" },
    { stage: "First 6 Months", compliances: "Monthly GST, TDS, accounting, payroll setup, Form 26Q/24Q" },
    { stage: "First Financial Year", compliances: "Audit, ITR filing, Form MGT-7, AOC-4 (if company), SFT/Form 61A if applicable" },
];

const keyComponents = [
    { title: "Entity Structuring & Incorporation Compliance", items: ["Private Limited, LLP, OPC, or Partnership selection based on scalability, taxation, investor readiness", "PAN, TAN, GST, MSME, Shop Act registrations"] },
    { title: "Financial & Tax Compliance", items: ["Forecasts aligned with Section 44AA (Books of Account) and Section 44AB (Audit)", "Capital structure and profit sharing models compliant with Income Tax Act and Companies Act", "Startup plans structured to leverage Section 80 IAC exemption and Angel Tax exemption"] },
    { title: "Regulatory & ROC Filings", items: ["Regular filings like AOC 4, MGT 7, DPT 3, MSME 1, DIR 3 KYC", "Ensuring business models comply with MCA, SEBI (if listed), DPIIT, and RBI"] },
    { title: "GST & Indirect Tax Mapping", items: ["Forecasting GST applicability on projected sales/services", "Determining registration requirements and reverse charge mechanisms", "Preparing for GSTR-1, GSTR-3B, and Annual Returns (GSTR-9)"] },
    { title: "FEMA & FDI Compliance (If Foreign Investment Included)", items: ["FC-GPR/FC-TRS planning within business roadmap", "Mapping timelines for investor onboarding, valuation, and share allotment", "RBI filings and sectoral cap checks"] },
    { title: "Labour, PF, and Payroll Compliance", items: ["Statutory payroll setup with PF, ESI, Gratuity, Bonus compliance", "TDS on salaries (Section 192), Form 24Q, Form 16 issuance"] },
    { title: "Documentation for Due Diligence & Funding", items: ["Valuation reports, cap tables, cash flow analysis", "Legal contracts, NDAs, founders' agreement, ESOP policy", "CA/CFA-vetted financial projections for 3–5 years"] },
];

const complianceSuite = [
    { title: "Entity Structuring & Registration", description: "Choose and register the best-fit business structure (Pvt Ltd, LLP, OPC)" },
    { title: "Startup Business Plan Preparation", description: "3–5 year financials, market research, breakeven analysis, and funding roadmap" },
    { title: "ROC & MCA Compliance", description: "Annual returns, director KYC, statutory registers, and AGM/board meeting guidance" },
    { title: "Tax Forecasting & Registration", description: "PAN, TAN, GST, TDS, PF/ESI registrations with mapped tax outflows" },
    { title: "Investor & FDI Compliance", description: "FC-GPR/FDI reporting via RBI FIRMS, valuation support, and share capital planning" },
    { title: "HR & Payroll Setup", description: "Automated payroll, PF/ESI registration, payslip generation, and Form 24Q" },
    { title: "Compliance Calendar Setup", description: "Auto-reminders for TDS, GST, ROC filings, and advance tax dues" },
];

const howWeEnsureCompliance = [
    "Complete Compliance Mapping across GST, Income Tax, MCA & RBI",
    "Industry-Specific Advisory based on your business model",
    "Forecast Vetting: Legal-proof revenue and cost estimates",
    "Investor-Ready Plans: Align with RBI/FEMA/SEBI expectations",
    "Startup India & Tax Holiday Support: For eligible ventures",
    "Annual & Monthly Compliance Monitoring with timely alerts",
];

export default function BusinessPlanPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Compliances', href: '/compliance' },
            { label: 'Business Plan' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-business-plan">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">Business Plan Compliance</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    A business plan is more than just a document—it’s a strategic tool that outlines your company’s objectives, provides a roadmap for achieving them, and acts as a persuasive document for potential investors and stakeholders. Whether you're a startup seeking your first round of funding or an established business looking to expand, having a well-structured business plan is critical for success.
                </p>
            </section>

            <section id="what-is-business-plan-detailed">
                <h2 className="text-3xl font-bold font-headline">What is a Business Plan?</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    A business plan is a formal document that defines your business objectives, strategies, market research, financial projections, and more. It serves as a guiding document for securing funding and setting internal goals and benchmarks. In simple terms, a business plan offers a complete overview of your business model, from market analysis to long-term vision.
                </p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground">Where is the business now?</li>
                    <li className="text-muted-foreground">Where does the business want to go?</li>
                    <li className="text-muted-foreground">How will it get there?</li>
                </ul>
                <p className="mt-4 text-muted-foreground text-justify">
                    For startups and established businesses alike, this document is invaluable for short-term and long-term decision making. It also helps keep the business on track, ensuring that the team remains aligned with the company’s objectives and growth strategy.
                </p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground">Clarify your business goals</li>
                    <li className="text-muted-foreground">Secure funding from investors or financial institutions</li>
                    <li className="text-muted-foreground">Identify market opportunities and potential pitfalls</li>
                    <li className="text-muted-foreground">Serve as a framework for tracking progress</li>
                </ul>
            </section>

            <section id="compliance-coverage">
                <h2 className="text-3xl font-bold font-headline">What Does Business Plan Compliance Cover?</h2>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Compliance Area</TableHead>
                            <TableHead>Details Included</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {complianceAreas.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.area}</TableCell>
                                <TableCell>{item.details}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>
            
            <section id="compliance-milestones">
                <h2 className="text-3xl font-bold font-headline">Key Compliance Milestones for Early-Stage Businesses</h2>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Stage</TableHead>
                            <TableHead>Key Compliances</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {complianceMilestones.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.stage}</TableCell>
                                <TableCell>{item.compliances}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>
            
            <section id="who-needs-compliance">
                <h2 className="text-3xl font-bold font-headline">Who Needs Business Plan Compliance?</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li>
                        <strong>Startups, MSMEs, and established businesses looking to:</strong>
                        <ul className="mt-2 space-y-2 list-disc pl-5">
                            <li className="text-muted-foreground">raise funds from VCs, angels, or banks</li>
                            <li className="text-muted-foreground">Scale across India or go global</li>
                            <li className="text-muted-foreground">Participate in government tenders or grants</li>
                            <li className="text-muted-foreground">Onboard investors or strategic partners</li>
                            <li className="text-muted-foreground">Get registered under DPIIT/Startup India</li>
                        </ul>
                    </li>
                </ul>
                <p className="mt-4 text-muted-foreground text-justify">
                    Business plan compliance is essential for credibility, regulatory clearance, and long-term scalability.
                </p>
            </section>
            
            <section id="key-components">
                <h2 className="text-3xl font-bold font-headline">Key Components of Business Plan Compliance</h2>
                <ol className="mt-4 space-y-4 list-decimal pl-5">
                    {keyComponents.map((component, index) => (
                        <li key={index}>
                            <strong className="text-muted-foreground">{component.title}</strong>
                            <ul className="mt-2 space-y-2 list-disc pl-5">
                                {component.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="text-muted-foreground text-justify">{item}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
            </section>

            <section id="compliance-suite">
                <h2 className="text-3xl font-bold font-headline">CACSFinacc’s Business Plan Compliance Suite</h2>
                <ol className="mt-4 space-y-4 list-decimal pl-5">
                    {complianceSuite.map((service, index) => (
                        <li key={index}>
                            <strong className="text-muted-foreground">{service.title}:</strong>
                            <p className="text-muted-foreground text-justify">{service.description}</p>
                        </li>
                    ))}
                </ol>
            </section>
            
            <section id="how-we-ensure">
                <h2 className="text-3xl font-bold font-headline">How CACSFinacc Ensures Business Plan Compliance</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {howWeEnsureCompliance.map((item, index) => (
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
