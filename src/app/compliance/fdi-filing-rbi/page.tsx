
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const metadata: Metadata = {
  title: 'FDI Filing with RBI & FEMA Compliance | CACS FinAcc Digital',
  description: 'Ensure timely and compliant FDI filings with the RBI under FEMA. Our expert services cover FC-GPR, FC-TRS, and FLA returns to avoid penalties.',
};

const fdiForms = [
    { form: "FC-GPR", purpose: "Issue of shares by Indian company to foreign investor", timeline: "Within 30 days from issue" },
    { form: "FC-TRS", purpose: "Transfer of shares between resident and non-resident", timeline: "Within 60 days of transfer" },
    { form: "LLP(I)", purpose: "Receipt of capital contribution from non-resident into LLP", timeline: "Within 30 days from receipt" },
    { form: "LLP(II)", purpose: "Disinvestment or transfer of capital in LLP", timeline: "Within 60 days of transfer" },
    { form: "CN (Convertible Notes)", purpose: "Issue or transfer of convertible notes to foreign investors", timeline: "Within 30 days" },
    { form: "ESOP Reporting", purpose: "Allotment of ESOPs to non-resident employees/directors", timeline: "Within 30 days of allotment" },
    { form: "DRR Reporting", purpose: "Downstream investment by Indian entity having FDI", timeline: "Within 30 days of investment" },
];

const fdiPenalties = [
    { default: "Delay in filing FC-GPR/FC-TRS", penalty: "Up to ₹5,000 per day and prosecution under compounding" },
    { default: "Wrong/incomplete filings", penalty: "Summon from RBI, compounding fee, inspection of books" },
    { default: "Non-reporting of ESOP/Bonus", penalty: "₹10,000 + ₹1,000 per day thereafter" },
];

const whoMustFile = [
    "FC-GPR (Form for allotment of shares)",
    "FC-TRS (Transfer of shares between resident and non-resident)",
    "FDI Reporting for LLPs (Form LLP I and LLP II)",
    "Annual Return on Foreign Liabilities and Assets (FLA Return)",
];

const filingAppliesTo = [
    "Startups raising foreign equity capital",
    "Companies with foreign shareholders",
    "Firms receiving convertible notes, debentures, or share premium",
    "LLPs receiving capital contributions from non-residents",
];

const fcgprDocs = [
    "Board resolution for share allotment",
    "FIRC (Foreign Inward Remittance Certificate) from AD bank",
    "KYC from remitter’s overseas bank",
    "Valuation certificate by CA/merchant banker",
    "MOA & AOA, shareholding pattern post-issue",
    "Declaration by authorised signatory",
    "CS Certificate (Form ESOP if applicable)",
];

const fctrsDocs = [
    "Transfer agreement",
    "Consent letter from buyer and seller",
    "FIRC/Outward Remittance Certificate",
    "Valuation report",
    "PAN and passport copies of foreign investor",
];

const whyTimelyFilingMatters = [
    "Prevents legal exposure under FEMA & RBI",
    "Avoids penalties and delays in future funding rounds",
    "Mandatory for due diligence in M&A and VC investments",
    "Keeps company compliant with sectoral caps and automatic route thresholds",
    "Necessary for seamless remittance processing through AD Banks",
];

const ourServices = [
    { title: "End-to-End FDI Structuring & Advisory", description: "We help structure the investment to remain FEMA & Income Tax compliant" },
    { title: "FIRMS Portal Registration & Entity Setup", description: "Register Business User, link entity, and manage DSC-based login for filing" },
    { title: "Preparation & Filing of FC-GPR / FC-TRS / CN / LLP Forms", description: "Draft, validate, and submit forms through RBI FIRMS portal with tracking" },
    { title: "Valuation Report and KYC Coordination", description: "Liaise with SEBI merchant banker or CA for compliance-ready valuation" },
    { title: "FLA Return Filing", description: "Annual reporting of foreign liabilities to RBI, even if no new investment" },
    { title: "Penalty Resolution and FEMA Compounding Support", description: "If forms were missed, we handle penalty waivers or compounding applications with RBI" },
];

const whyChooseUs = [
    "100% adherence to RBI, FEMA, and DIPP guidelines",
    "Experience with startups, tech firms, VC-funded companies, and cross-border M&A",
    "One-stop solution for valuation, documentation, and RBI portal filings",
    "Ongoing support for TDS on FDI, share certificates, and ROC updates",
];


export default function FdiFilingPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Compliances', href: '/compliance' },
            { label: 'FDI Filing with RBI' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-fdi-filing">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">FDI Filing with RBI & FEMA Compliance</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    <strong>Foreign Direct Investment (FDI)</strong> is the capital investment made by a foreign individual or entity into an Indian company. While FDI is permitted under both automatic and approval routes, all investments must be reported to the Reserve Bank of India (RBI) within prescribed timelines.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">
                    Under the <strong>Foreign Exchange Management Act (FEMA), 1999</strong> and RBI's Foreign Investment Reporting and Management System (FIRMS), companies receiving FDI are required to file multiple forms depending on the nature and stage of the investment. Failure to file FDI returns accurately or within time may lead to penalties under FEMA and can delay further foreign investments.
                </p>
            </section>

            <section id="who-must-file">
                <h2 className="text-3xl font-bold font-headline">Who Must File FDI Returns?</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    Any Indian entity (Private Ltd, Public Ltd, LLP) that receives foreign investment under the automatic or government route must file:
                </p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {whoMustFile.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
                 <p className="mt-4 text-muted-foreground text-justify">These filings apply to:</p>
                 <ul className="mt-4 space-y-3 list-disc pl-5">
                    {filingAppliesTo.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{item}</li>
                    ))}
                </ul>
            </section>
            
            <section id="fdi-forms">
                <h2 className="text-3xl font-bold font-headline">Types of FDI Filing & Applicable Forms</h2>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Form</TableHead>
                            <TableHead>Purpose</TableHead>
                            <TableHead>Timeline</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {fdiForms.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.form}</TableCell>
                                <TableCell>{item.purpose}</TableCell>
                                <TableCell>{item.timeline}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>
            
            <section id="documents-required">
              <h2 className="text-3xl font-bold font-headline">Documents Required for FDI Filing</h2>
              <div className="mt-4 space-y-4">
                  <div>
                      <h3 className="text-xl font-semibold">For FC-GPR:</h3>
                      <ul className="mt-2 space-y-2 list-disc pl-5">
                          {fcgprDocs.map((item, index) => (
                              <li key={index} className="text-muted-foreground text-justify">{item}</li>
                          ))}
                      </ul>
                  </div>
                  <div>
                      <h3 className="text-xl font-semibold">For FC-TRS:</h3>
                      <ul className="mt-2 space-y-2 list-disc pl-5">
                          {fctrsDocs.map((item, index) => (
                              <li key={index} className="text-muted-foreground text-justify">{item}</li>
                          ))}
                      </ul>
                  </div>
              </div>
            </section>

             <section id="penalties">
                <h2 className="text-3xl font-bold font-headline">Penalty for Non-Compliance under FEMA</h2>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nature of Default</TableHead>
                            <TableHead>Penalty under FEMA</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {fdiPenalties.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.default}</TableCell>
                                <TableCell>{item.penalty}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                 <p className="mt-4 text-muted-foreground text-justify">
                    <strong>Compounding under FEMA</strong> is now mandatory in case of reporting delays.
                </p>
            </section>

             <section id="why-timely-filing">
                <h2 className="text-3xl font-bold font-headline">Why Timely FDI Filing Matters</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {whyTimelyFilingMatters.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{item}</li>
                    ))}
                </ul>
            </section>

             <section id="our-services">
                <h2 className="text-3xl font-bold font-headline">CACSFinacc’s FDI Filing Services</h2>
                <ul className="mt-4 space-y-4 list-disc pl-5">
                    {ourServices.map((service, index) => (
                        <li key={index}>
                            <strong className="text-muted-foreground">{service.title}:</strong>
                            <p className="text-muted-foreground text-justify">{service.description}</p>
                        </li>
                    ))}
                </ul>
            </section>

             <section id="why-choose-us">
                <h2 className="text-3xl font-bold font-headline">Why Choose CACSFinacc for FDI Filing?</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {whyChooseUs.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
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
