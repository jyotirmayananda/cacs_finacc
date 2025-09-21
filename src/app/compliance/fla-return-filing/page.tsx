
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const metadata: Metadata = {
  title: 'FLA Return Filing | CACS FinAcc Digital',
  description: 'Ensure timely FLA return filing with our expert services. We handle the annual return of Foreign Liabilities and Assets to keep your company compliant with RBI and FEMA regulations.',
};

const whoMustFile = [
    "Companies that have received FDI and/or made ODI",
    "LLPs with foreign investments",
    "Startups, Joint Ventures (JVs), and Wholly Owned Subsidiaries (WOS) abroad",
    "Alternative Investment Funds (AIFs) with foreign contributions",
    "Private Limited Companies with foreign shareholders",
];

const filingTimeline = [
    { event: "FLA Return (annual)", dueDate: "15th July 2025 (for FY ending 31st March 2025)" },
    { event: "Revised Return (if filed with unaudited figures)", dueDate: "Within 1 month of finalization of audited accounts" },
];

const requiredInfo = [
    "Company Identification Details (PAN, CIN, LLPIN, Contact Info)",
    "Entity Identification Number (EIN) from RBI",
    "FDI Details: Equity capital, reinvested earnings, other capital received from non-residents",
    "ODI Details: Investments made in overseas JVs/WOS",
    "Financials as on 31st March 2025: Total assets/liabilities, profit/loss, reserves",
    "Shareholding Pattern (foreign vs resident)",
    "Disaggregated Debt/Loan Data: ECB, trade credit, inter-company loans",
    "Previous year’s FLA Reference Number (for tracking continuity)",
];

const penalties = [
    { default: "Non-filing of FLA Return", penalty: "₹10,000 + up to 3x the amount involved in contravention" },
    { default: "Repetitive Default", penalty: "Additional penalties and possible compounding under RBI review" },
    { default: "Legal Risk", penalty: "Risk of regulatory audit, show-cause notices, and blacklisting" },
];

const filingProcess = [
    { step: 1, action: "Register Entity on FLAIR Portal", description: "– https://flair.rbi.org.in" },
    { step: 2, action: "Get Login Credentials from RBI", description: "" },
    { step: 3, action: "Login and Update Entity Master Details", description: "" },
    { step: 4, action: "Enter FDI/ODI Data in FLA Form", description: "" },
    { step: 5, action: "Validate and Submit before 15th July 2025", description: "" },
    { step: 6, action: "Save Acknowledgment for future reference", description: "" },
];

const whyEssential = [
    "Maintains regulatory credibility with RBI",
    "Avoids FEMA violations and future compliance blocks",
    "Ensures smooth approval of future FDI/ODI or ECB",
    "Required during company due diligence, audits, funding rounds, and IPOs",
    "Supports transparent disclosure of India's foreign asset positions",
];

const nonFilingPenalties = [
    "Monetary penalty up to ₹2 lakh under Section 13 of FEMA, 1999",
    "Further penalty of ₹5,000 per day for continuing default",
    "Ineligibility to receive future foreign investments until FLA is filed",
];

const howWeSupport = [
    { title: "Initial Eligibility Assessment", description: "We identify your FDI/ODI position and whether FLA applies" },
    { title: "EIN Generation & Portal Access", description: "Help in obtaining Entity Identification Number (if first-time filer)" },
    { title: "Data Compilation", description: "We extract and validate data from your audited/un-audited balance sheet and foreign transaction reports" },
    { title: "Return Preparation & Filing", description: "Draft the FLA in RBI format and file online through FLAIR portal" },
    { title: "Revised Filing (if required)", description: "File revised return after audit finalization to ensure RBI record accuracy" },
];

const whyChooseUs = [
    "Accurate RBI Compliant Return Preparation",
    "Assistance in FLAIR Portal Registration",
    "Timely Filing with No Penalty Risk",
    "Validation of Financial Data with FEMA Regulations",
    "Support for FDI, ODI, ECB and FEMA Compliance",
    "Affordable Pricing Plans for Startups & SMEs",
];


export default function FlaReturnFilingPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Compliances', href: '/compliance' },
            { label: 'FLA Return Filing' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-fla-return">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">FLA Return Filing</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    The FLA Return is a mandatory annual filing for Indian companies, LLPs, and other entities engaged in receiving or making foreign direct investments. This includes entities involved in Foreign Direct Investment (FDI) within India or Overseas Direct Investment (ODI). Under the regulations of the Reserve Bank of India (RBI) and the Foreign Exchange Management Act, 1999 (FEMA), the FLA Return is designed to gather information on foreign liabilities and assets that are reflected in the financial statements of these entities.
                </p>
            </section>

            <section id="what-is-fla-return-detailed">
                <h2 className="text-3xl font-bold font-headline">What is FLA Return?</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    The Foreign Liabilities and Assets (FLA) Return is an annual compliance prescribed by RBI under FEMA, 1999. It is required for all Indian entities that have:
                </p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify">Received Foreign Direct Investment (FDI)</li>
                    <li className="text-muted-foreground text-justify">Made Overseas Direct Investment (ODI) in the previous or current financial year</li>
                </ul>
                <p className="mt-4 text-muted-foreground text-justify">
                    FLA filing helps RBI track India’s external financial assets and liabilities and is crucial for compiling the country's Balance of Payments (BoP) statistics.
                </p>
            </section>

            <section id="who-must-file">
                <h2 className="text-3xl font-bold font-headline">Who Must File the FLA Return?</h2>
                <p className="mt-4 text-muted-foreground text-justify">The following Indian resident entities are required to file FLA:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {whoMustFile.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{item}</li>
                    ))}
                </ul>
                <p className="mt-4 text-muted-foreground text-justify italic">
                    <strong>Note:</strong> Entities with only external commercial borrowings (ECBs) and no foreign equity participation are not required to file FLA.
                </p>
            </section>
            
            <section id="filing-timeline">
                <h2 className="text-3xl font-bold font-headline">FLA Return Filing Timeline – AY 2025-26</h2>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Event</TableHead>
                            <TableHead>Due Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filingTimeline.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.event}</TableCell>
                                <TableCell>{item.dueDate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <p className="mt-4 text-muted-foreground text-justify">
                    Filing is mandatory even if there is no change in foreign investment during the year.
                </p>
            </section>
            
            <section id="required-info">
              <h2 className="text-3xl font-bold font-headline">Information Required for Filing FLA Return</h2>
              <ul className="mt-4 space-y-3 list-disc pl-5">
                {requiredInfo.map((item, index) => (
                    <li key={index} className="text-muted-foreground">{item}</li>
                ))}
              </ul>
            </section>

            <section id="consequences">
                <h2 className="text-3xl font-bold font-headline">Consequences of Non-Filing</h2>
                <p className="mt-4 text-muted-foreground text-justify">Non compliance with FLA filing under FEMA invites severe penalties:</p>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Default</TableHead>
                            <TableHead>Penalty (as per FEMA)</TableHead>
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
                <p className="mt-4 text-muted-foreground text-justify italic">
                    <strong>Note:</strong> RBI may freeze future FDI approvals or ODI permissions for repeat non-filers.
                </p>
            </section>

             <section id="how-to-file">
                <h2 className="text-3xl font-bold font-headline">How to File FLA Return (via FLAIR Portal)</h2>
                <p className="mt-4 text-muted-foreground font-semibold">Step by Step Process:</p>
                <ol className="mt-4 space-y-3 list-decimal pl-5">
                    {filingProcess.map((item) => (
                        <li key={item.step} className="text-muted-foreground">
                            {item.action}
                            {item.description && 
                                item.action === "Register Entity on FLAIR Portal" ? 
                                <a href="https://flair.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline"> {item.description}</a> : 
                                <span> {item.description}</span>
                            }
                        </li>
                    ))}
                </ol>
                <p className="mt-4 text-muted-foreground text-justify">
                    The return can only be filed using the FLA Utility provided by RBI—no physical submission is accepted.
                </p>
            </section>

             <section id="why-essential">
                <h2 className="text-3xl font-bold font-headline">Why FLA Filing is Essential</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {whyEssential.map((item, index) => (
                        <li key={index} className="text-muted-foreground">{item}</li>
                    ))}
                </ul>
            </section>
            
            <section id="penalties-non-filing">
                <h2 className="text-3xl font-bold font-headline">Penalties for Non-Filing of FLA</h2>
                <p className="mt-4 text-muted-foreground text-justify">Under Section 13 of FEMA, 1999, non-filing or delay in FLA return may result in:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {nonFilingPenalties.map((item, index) => (
                        <li key={index} className="text-muted-foreground">{item}</li>
                    ))}
                </ul>
            </section>
            
             <section id="how-we-support">
                <h2 className="text-3xl font-bold font-headline">How CACSFinacc Supports FLA Return Filing</h2>
                <ul className="mt-4 space-y-4 list-disc pl-5">
                    {howWeSupport.map((item, index) => (
                        <li key={index}>
                            <strong className="text-muted-foreground">{item.title}:</strong>
                            <p className="text-muted-foreground text-justify">{item.description}</p>
                        </li>
                    ))}
                </ol>
            </section>

             <section id="why-choose-us">
              <h2 className="text-3xl font-bold font-headline">Why Choose CACSFinacc for FLA Return Compliance?</h2>
              <ul className="mt-4 space-y-3 list-disc pl-5">
                    {whyChooseUs.map((item, index) => (
                        <li key={index} className="text-muted-foreground">{item}</li>
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
