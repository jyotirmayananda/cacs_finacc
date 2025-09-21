
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const metadata: Metadata = {
  title: 'DPT-3 Filing & Compliance | CACS FinAcc Digital',
  description: 'Ensure timely DPT-3 filing with our expert services. We handle annual returns of deposits, loans, and advances to keep your company compliant with MCA regulations.',
};

const whoNeedsToFil = [
    "Private Limited Companies",
    "Public Limited Companies",
    "One Person Companies (OPC)",
];

const exemptions = [
    "Government Companies",
    "Banks",
    "Non Banking Financial Companies (NBFCs) registered with RBI",
    "Housing finance companies",
];

const mustFileIf = [
    "Loans from directors/shareholders",
    "Unsecured borrowings",
    "Advances from customers",
    "Inter-corporate loans",
    "External commercial borrowings (ECBs)",
    "Security deposits or retention money",
];

const returnTypes = [
    { purpose: "One time Return (for prior outstanding as on 31 March 2019)", type: "(No longer active)" },
    { purpose: "Annual Return of Deposits", type: "For amounts classified as deposits under Companies Act" },
    { purpose: "Return of Exempted Borrowings", type: "For non-deposit transactions like loans from directors, inter-corporate borrowings" },
    { purpose: "Combined", type: "If both deposits & exempted borrowings exist" },
];

const legalFramework = [
    "Section 73 to 76 of Companies Act, 2013",
    "Rule 16 of the Companies (Acceptance of Deposits) Rules, 2014",
    "Companies must report whether amounts qualify as deposits or exempt categories",
];

const requiredDocuments = [
    "Latest audited Balance Sheet",
    "Details of all loans/advances/deposits as on 31st March",
    "Loan Agreements or Declarations",
    "Certificate from Statutory Auditor (if deposit included)",
    "CIN (Corporate Identification Number)",
    "Paid-up Capital, Turnover, and Net Worth",
    "Outstanding Loan Details as on 31st March (Secured, Unsecured, ECBs, Related Party Loans, Advances from Customers)",
    "Board Resolution Authorizing Filing",
    "Auditor’s Certificate (if applicable)",
    "Digital Signature Certificate (DSC) of Director",
];

const recentAmendments = [
    "Enhanced data disclosure: Companies must now disclose bifurcated figures of secured, unsecured loans, and non-deposit borrowings.",
    "Mandatory Digital Signatures (DSC): DPT-3 filing requires DSC of Director or Authorized Signatory.",
    "Integration with MCA V3 Portal: Filing is to be done via the new MCA V3 platform, with real-time PAN verification and pre-filled details.",
    "Verification by Practicing Professional: DPT-3 must be certified by a CA, CS, or CMA in practice.",
    "Pre-validation of CIN and auto-fill facility on MCA portal.",
    "Mandatory reporting of ECBs and convertible debentures under 'Particulars of non-deposit transactions'.",
    "Enhanced disclosure of maturity dates and interest components.",
    "Penalties under Section 76A & Rule 21 updated with stricter enforcement via MCA compliance tracker.",
    "ROC compliance grading may now be affected by non-filing of DPT-3.",
];

const penalties = [
    { default: "Non-filing of DPT-3", penalty: "₹5,000 + ₹500 per day of default" },
    { default: "False Information Filed", penalty: "Action under Section 448 – Imprisonment up to 10 years + Fine" },
    { default: "Not Complying with Section 73", penalty: "₹1 crore or twice the amount of deposit, whichever is lower + interest" },
    { default: "Officers in default", penalty: "Up to 7 years imprisonment or fine up to ₹25 lakh" },
    { default: "Additional ROC penalties", penalty: "₹100 per day of delay post due date" },
];

const whyImportant = [
    "Avoid MCA Penalties",
    "Maintain Transparency in Borrowings",
    "Strengthen Corporate Governance",
    "Enhance Investor Confidence",
    "Ensure Legal Standing During Audits, Funding, or Mergers",
];

const howWeHandle = [
    { title: "Pre-Filing Review", description: "Review loan agreements, balance sheet entries, and assess deposit vs. non-deposit categorization" },
    { title: "Documentation Support", description: "Draft Board Resolutions, auditor’s certificate (if deposits exist), and internal summaries" },
    { title: "DPT-3 Form Filing", description: "Prepare and file DPT-3 on MCA portal with DSC of Director/Authorized Signatory" },
    { title: "Post-Filing Acknowledgment", description: "Provide SRN, proof of filing, and compliance summary for your records" },
    { title: "Ongoing Advisory", description: "Guidance on deposit rules, Section 73 to 76 restrictions, and RBI/ROC follow-ups" },
];

const whyChooseUs = [
    "End-to-End Compliance Support",
    "Accurate Classification of Deposit vs. Non-Deposit",
    "Preparation of Required Certificates & Resolutions",
    "Timely DPT-3 Filing with MCA",
    "Post-Filing Acknowledgment & Advisory",
];

export default function Dpt3FilingsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Compliances', href: '/compliance' },
            { label: 'DPT-3 Filings' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-dpt3">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">DPT-3 Filing & Compliance</h1>
                 <p className="mt-4 text-lg text-muted-foreground text-justify">
                    Every company (except government companies) must file Form DPT-3 with the Ministry of Corporate Affairs (MCA) by June 30th each year. This return includes details of all deposits, outstanding loans, and amounts received that do not qualify as deposits as of March 31st. The DPT-3 return must be certified by the company’s auditor to ensure accuracy and compliance.
                </p>
            </section>

            <section id="dpt3-explained">
                <h2 className="text-3xl font-bold font-headline">What is DPT-3?</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    Form DPT-3 is a mandatory annual return filed by companies (other than government companies) to the MCA, reporting:
                </p>
                 <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify">Deposits</li>
                    <li className="text-muted-foreground text-justify">Outstanding loans, advances, or monies not considered deposits</li>
                </ul>
                <p className="mt-4 text-muted-foreground text-justify">
                    DPT-3 is governed by Rule 16 of the Companies (Acceptance of Deposits) Rules, 2014 under the Companies Act, 2013. It must be filed even if the company does not hold public deposits—reporting of loan-type liabilities is compulsory.
                </p>
            </section>

            <section id="who-files-dpt3">
                <h2 className="text-3xl font-bold font-headline">Who is Required to File DPT-3?</h2>
                <p className="mt-4 text-muted-foreground text-justify">The following entities must file DPT-3:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {whoNeedsToFil.map((item, index) => (
                        <li key={index} className="text-muted-foreground">{item}</li>
                    ))}
                </ul>
                <h3 className="text-xl font-bold font-headline mt-6">Exemptions:</h3>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {exemptions.map((item, index) => (
                        <li key={index} className="text-muted-foreground">{item}</li>
                    ))}
                </ul>
                <p className="mt-4 text-muted-foreground text-justify">DPT-3 must be filed if the company has any of the following:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {mustFileIf.map((item, index) => (
                        <li key={index} className="text-muted-foreground">{item}</li>
                    ))}
                </ul>
                <p className="mt-4 text-muted-foreground text-justify">
                    Private Limited, Public Limited, One Person Company (OPC), and Section 8 Companies are all required to file DPT-3 if any such transactions exist.
                </p>
            </section>
            
            <section id="return-types">
                <h2 className="text-3xl font-bold font-headline">Types of Returns under DPT-3</h2>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Purpose</TableHead>
                            <TableHead>DPT-3 Type</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {returnTypes.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.purpose}</TableCell>
                                <TableCell>{item.type}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>
            
             <section id="legal-framework">
                <h2 className="text-3xl font-bold font-headline">Legal Framework</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {legalFramework.map((item, index) => (
                        <li key={index} className="text-muted-foreground">{item}</li>
                    ))}
                </ul>
            </section>
            
            <section id="documents-required">
              <h2 className="text-3xl font-bold font-headline">Documents Required for DPT-3 Filing</h2>
              <ul className="mt-4 space-y-3 list-disc pl-5">
                {requiredDocuments.map((item, index) => (
                    <li key={index} className="text-muted-foreground">{item}</li>
                ))}
              </ul>
            </section>

            <section id="amendments">
                <h2 className="text-3xl font-bold font-headline">Recent Amendments & MCA Updates – FY 2024-25</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {recentAmendments.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{item}</li>
                    ))}
                </ul>
            </section>

             <section id="due-date">
                <h2 className="text-3xl font-bold font-headline">Due Date for AY 2025-26</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    For Financial Year 2024-25 (AY 2025-26), the due date for filing DPT-3 is: <strong>30th June 2025</strong>
                </p>
                <p className="mt-2 text-muted-foreground text-justify italic">
                    Note: Late filing will result in penalties under the Companies Act, 2013.
                </p>
            </section>
            
             <section id="penalties">
                <h2 className="text-3xl font-bold font-headline">Penalty for Non-Compliance As per Section 76A</h2>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nature of Default</TableHead>
                            <TableHead>Penalty as per Companies Act, 2013</TableHead>
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

            <section id="why-important">
                <h2 className="text-3xl font-bold font-headline">Why is DPT-3 Compliance Important?</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {whyImportant.map((item, index) => (
                        <li key={index} className="text-muted-foreground">{item}</li>
                    ))}
                </ul>
            </section>
            
             <section id="how-we-handle">
                <h2 className="text-3xl font-bold font-headline">How CACSFinacc Handles DPT-3 for You</h2>
                <ol className="mt-4 space-y-4 list-decimal pl-5">
                    {howWeHandle.map((item, index) => (
                        <li key={index}>
                            <strong className="text-muted-foreground">{item.title}:</strong>
                            <p className="text-muted-foreground text-justify">{item.description}</p>
                        </li>
                    ))}
                </ol>
            </section>

             <section id="why-choose-us">
              <h2 className="text-3xl font-bold font-headline">Why Choose CACSFinacc?</h2>
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
