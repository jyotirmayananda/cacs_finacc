
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const metadata: Metadata = {
  title: 'Partnership Firm Compliance | CACS FinAcc Digital',
  description: 'Ensure your partnership firm meets all legal and tax compliance requirements. Our expert services cover everything from registration to annual filings.',
};

const keyCompliances = [
    { 
        title: "Income Tax Filing (ITR-5)", 
        details: [
            "Partnership firms must file ITR-5 every year, whether they have income or not.",
            "Mandatory e-filing if: turnover exceeds ₹5 crore (with digital compliance) or tax audit is applicable."
        ]
    },
    { 
        title: "Tax Audit (Section 44AB)", 
        details: [
            "Compulsory if: business turnover > ₹1 crore, profession receipts > ₹50 lakhs, or turnover > ₹10 crore with <5% cash transactions (as per Rule 6G).",
            "Form 3CA-3CD or 3CB-3CD to be filed by a Chartered Accountant."
        ]
    },
    { 
        title: "Presumptive Taxation (44AD/44ADA)", 
        details: [
            "Eligible for small firms with turnover ≤ ₹2 crore (business) or ₹50 lakh (profession).",
            "Declare profit @ 8% or 6% (digital) or 50% (profession).",
            "File ITR-4 (not ITR-5) if presumptive scheme is opted."
        ]
    },
    { 
        title: "TDS Compliance", 
        details: [
            "TAN registration is mandatory if the firm pays salary, rent, commission, contractor fees, or professional charges.",
            "File quarterly TDS returns (24Q/26Q) and issue Form 16/16A."
        ]
    },
    { 
        title: "GST Compliance", 
        details: [
            "GST registration required if: turnover exceeds ₹20 lakh (services) or ₹40 lakh (goods), dealing in inter-state trade, e-commerce, or imports/exports.",
            "File monthly/quarterly GSTR-1, GSTR-3B, and GSTR-9 (if applicable)."
        ]
    },
    { 
        title: "Partnership Deed Compliance", 
        details: [
            "Must clearly mention: Partners’ details, Profit-sharing ratio, Capital contributions, Interest on capital/salary clauses.",
            "Should be stamped and registered (optional but recommended)."
        ]
    },
    { 
        title: "Capital Account Maintenance", 
        details: [
            "Each partner must have a capital account showing: Contribution, Salary, Drawings, Interest, Share of profits/losses."
        ]
    },
    { 
        title: "Books of Accounts (Section 44AA)", 
        details: [
            "Mandatory maintenance of books if: business income > ₹2.5 lakh or turnover > ₹10 lakh.",
            "Should include cash book, ledgers, journal, bills, invoices, etc."
        ]
    },
    { 
        title: "Partner’s Remuneration Deduction (Section 40(b))", 
        details: [
            "Allowed only if partnership deed authorizes it.",
            "Deduction limited to: ₹1.5 lakh or 90% of profit for first ₹3 lakh, 60% of profit above ₹3 lakh."
        ]
    },
    { 
        title: "Registration with State Authorities", 
        details: [
            "Professional Tax",
            "Shop & Establishment registration",
            "MSME Udyam registration (optional but useful)"
        ]
    },
];

const registrationSteps = [
    { title: "Draft a Partnership Deed", description: "Include name and address of the firm and partners, nature of business, profit sharing ratio, capital contribution by partners, roles and responsibilities." },
    { title: "Apply for PAN Card", description: "Submit Form 49A online at the NSDL portal." },
    { title: "Partnership Deed Notarization", description: "Get the deed notarized on a non-judicial stamp paper." },
    { title: "Firm Registration (Optional)", description: "Register with the Registrar of Firms (RoF) in the respective state." },
    { title: "Open a Bank Account", description: "Submit the notarized deed, PAN, and registration certificate (if applicable) to open a current account." },
];

const nonCompliancePenalties = [
    { default: "Late ITR Filing", penalty: "₹5,000 under Section 234F" },
    { default: "Failure to Audit", penalty: "₹1,50,000 or 0.5% of turnover (Section 271B)" },
    { default: "Non-registration", penalty: "Loss of legal rights to enforce claims" },
    { default: "Non-maintenance of Books", penalty: "₹25,000 under Section 271A" },
];

const cacsfinaccServices = [
    { title: "End-to-End Tax Filing", description: "ITR-5 preparation, tax computation, e-filing with DSC." },
    { title: "Tax Audit Assistance", description: "Preparation of Form 3CD, audit finalization, and tax planning." },
    { title: "TDS & GST Compliance", description: "Quarterly return filing, reconciliation, and advisory." },
    { title: "Partner Capital & Remuneration Structuring", description: "Optimize tax treatment under Section 40(b)." },
    { title: "Business Registrations", description: "GST, MSME, Professional Tax, Shop Act, etc." },
    { title: "Notices & Representation", description: "Handle income tax notices u/s 139(9), 143(2), 142(1), 148, etc." },
];

const whyChooseUs = [
    "Complete Registration Support – from deed drafting to registration",
    "Audit and Compliance Management – 100% IT and GST compliance",
    "Tax Planning and Filing – optimize tax liability with expert filing",
    "Legal Representation – expert handling of legal notices and disputes",
    "Digital Record-Keeping – secure and organized maintenance of records",
];

export default function PartnershipCompliancePage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Compliances', href: '/compliance' },
            { label: 'Partnership Firm Compliance' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-partnership">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">Partnership Firm Compliances</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    Partnership firms, a prevalent business structure in India, offer an attractive option for small and medium-sized businesses. They combine the ease of setup with the flexibility of shared ownership and management. Here, we’ll delve into what partnership firms are, how to register one, and the essential compliances to navigate.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">
                    A partnership firm is a business entity formed by an agreement between two or more individuals (partners) who come together to carry on a business and share the profits or losses. The key aspects of a partnership firm include:
                </p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify"><strong>Minimum and Maximum Partners:</strong> A minimum of two partners is required to form a partnership firm, and the maximum number of partners cannot exceed 20 (except for banking firms).</li>
                    <li className="text-muted-foreground text-justify"><strong>Shared Ownership and Management:</strong> Partners share ownership of the firm’s assets and liabilities in accordance with the partnership deed, a legal document outlining the rights, responsibilities, profit sharing ratio, and dispute resolution mechanisms between partners.</li>
                    <li className="text-muted-foreground text-justify"><strong>Unlimited Liability:</strong> A crucial characteristic of partnership firms is unlimited liability. This means that partners are personally liable for the firm’s debts and obligations beyond the extent of their capital contribution.</li>
                </ul>
            </section>

            <section id="types-of-partnership">
                <h2 className="text-3xl font-bold font-headline">Types of Partnership Firms</h2>
                <ol className="mt-4 space-y-3 list-decimal pl-5">
                    <li className="text-muted-foreground text-justify"><strong>Registered Partnership Firm:</strong> Registered with the Registrar of Firms, offering legal protection and the right to sue third parties.</li>
                    <li className="text-muted-foreground text-justify"><strong>Unregistered Partnership Firm:</strong> Operates without formal registration, but faces limitations like the inability to enforce rights against partners or third parties.</li>
                </ol>
            </section>
            
            <section id="why-compliance-matters">
                <h2 className="text-3xl font-bold font-headline">Why Are Partnership Compliances Important?</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    A partnership firm, whether registered or unregistered, must comply with various legal, tax, and regulatory requirements under the Indian Partnership Act, 1932, and the Income Tax Act, 1961. These compliances ensure legal recognition, tax benefits, and avoidance of penalties.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">
                    Whether you're a startup, traditional family business, or growing enterprise, non-compliance can result in loss of deductions, scrutiny, and interest/penalties from authorities.
                </p>
            </section>

            <section id="key-compliances">
                <h2 className="text-3xl font-bold font-headline">Key Compliances for Partnership Firms</h2>
                <ol className="mt-4 space-y-4 list-decimal pl-5">
                    {keyCompliances.map((compliance, index) => (
                        <li key={index}>
                            <strong className="text-muted-foreground">{compliance.title}</strong>
                            <ul className="mt-2 space-y-2 list-disc pl-5">
                                {compliance.details.map((detail, detailIndex) => (
                                    <li key={detailIndex} className="text-muted-foreground text-justify">{detail}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
            </section>
            
            <section id="taxation">
                <h2 className="text-3xl font-bold font-headline">Partnership Firm Taxation</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify"><strong>Tax Rate:</strong> Partnership Firms are taxed at a flat rate of 30% on total income.</li>
                    <li className="text-muted-foreground text-justify"><strong>Surcharge:</strong> 12% surcharge if total income exceeds ₹1 crore.</li>
                    <li className="text-muted-foreground text-justify"><strong>Health & Education Cess:</strong> 4% on tax and surcharge.</li>
                    <li className="text-muted-foreground text-justify"><strong>Remuneration to Partners:</strong> Allowed as a deduction under Section 40(b) up to the prescribed limits.</li>
                </ul>
            </section>

            <section id="registration-process">
                <h2 className="text-3xl font-bold font-headline">How to Register a Partnership Firm?</h2>
                <div className="mt-6 space-y-6">
                    {registrationSteps.map((step, index) => (
                      <div key={index} className="flex items-start gap-4">
                         <div className="flex-shrink-0 font-bold text-lg text-foreground">{index + 1}.</div>
                         <div>
                            <h4 className="font-semibold text-lg"><strong>{step.title}</strong></h4>
                            <p className="text-muted-foreground text-justify">{step.description}</p>
                         </div>
                      </div>
                    ))}
                </div>
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
                        {nonCompliancePenalties.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.default}</TableCell>
                                <TableCell>{item.penalty}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>

            <section id="our-services">
                <h2 className="text-3xl font-bold font-headline">CACSFinacc's Compliance Coverage for Partnership Firms</h2>
                <ol className="mt-4 space-y-4 list-decimal pl-5">
                    {cacsfinaccServices.map((service, index) => (
                        <li key={index}>
                            <strong className="text-muted-foreground">{service.title}</strong>
                            <p className="text-muted-foreground text-justify">{service.description}</p>
                        </li>
                    ))}
                </ol>
            </section>

            <section id="why-choose-us">
                <h2 className="text-3xl font-bold font-headline">Why Choose CACSFinacc Services?</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {whyChooseUs.map((reason, index) => (
                        <li key={index} className="text-muted-foreground text-justify">{reason}</li>
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
