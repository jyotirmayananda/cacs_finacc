
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'PF & PT Return Filing Services | CACS FinAcc Digital',
  description: 'Reliable and efficient Provident Fund (PF) and Professional Tax (PT) return filing solutions to ensure compliance and avoid penalties.',
};

const pfServices = [
    { 
        title: "PF Registration and Compliance Setup", 
        items: [
            "Assistance with PF Registration for new establishments.",
            "Generation of Universal Account Number (UAN) for employees.",
            "Guidance on documentation and eligibility criteria."
        ] 
    },
    { 
        title: "Monthly PF Contribution Filing", 
        items: [
            "Calculation of monthly contributions (Employer 12%, Employee 12%).",
            "Preparation and submission of Electronic Challan cum Return (ECR).",
            "Online payment facilitation through the EPFO portal."
        ] 
    },
    { 
        title: "Annual PF Return Filing", 
        items: [
            "Filing of Form 3A (Employee-wise annual contribution) and Form 6A (Annual return of contributions).",
            "Compliance with statutory due dates and updates as per EPFO norms."
        ] 
    },
    { 
        title: "Maintenance of Statutory Records", 
        items: [
            "Accurate maintenance of employee records, Form 11, and Form 5A.",
            "Timely updates for employee additions, exits, and KYC details."
        ] 
    },
    { 
        title: "Employee Services", 
        items: [
            "Support for PF withdrawal, transfer, and correction of UAN details.",
            "Generation of Member Passbook for employee reference."
        ] 
    },
    { 
        title: "Compliance with Latest Amendments", 
        items: [
            "Adoption of changes in the EPF wage ceiling, digital KYC norms, and contribution structures.",
            "Ensuring compliance with the latest EPFO notifications and circulars."
        ] 
    },
];

const ptServices = [
    { 
        title: "PT Registration", 
        items: [
            "Assistance with PT Registration for businesses across states.",
            "Issuance of PT Registration Certificate (PTRC) and PT Enrollment Certificate (PTEC)."
        ] 
    },
    { 
        title: "Monthly & Annual PT Return Filing", 
        items: [
            "Calculation of professional tax based on salary slabs.",
            "Timely filing of monthly and annual returns with the relevant state government portal.",
            "Reconciliation of payments and rectification of discrepancies."
        ] 
    },
    { 
        title: "Payment of PT Dues", 
        items: [
            "Secure and hassle-free online payment of PT liabilities.",
            "Generation of payment challans and acknowledgment receipts."
        ] 
    },
    { 
        title: "Maintenance of Records", 
        items: [
            "Accurate maintenance of Form 2 (Employee Declaration), Form 5 (Return Form), and Form 8A (Amendment Form).",
            "Digital storage of records for easy retrieval during assessments and audits."
        ] 
    },
    { 
        title: "Compliance with State-specific Laws", 
        items: [
            "Ensuring adherence to state-specific PT rules and regulations.",
            "Updates on any changes in rates or filing procedures."
        ] 
    },
];

export default function PfPtReturnFilingPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Tax Filings', href: '/tax-filing' },
            { label: 'PF & PT Return Filings' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="intro">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">PF & PT Return Filing</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    At CACSFinacc Services, we simplify the complexities of Provident Fund (PF) and Professional Tax (PT) Return Filing by offering reliable and efficient solutions. We ensure complete compliance with the latest regulations, reducing risks of penalties and legal challenges for your business.
                </p>
            </section>

            <section id="pf-filing">
                <h2 className="text-3xl font-bold font-headline">Provident Fund (PF) Return Filing</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    Provident Fund is a crucial part of an employee's financial security, regulated under the Employees' Provident Fund and Miscellaneous Provisions Act, 1952. Employers with 20 or more employees are required to register for PF and contribute towards the retirement savings of their workforce.
                </p>
                <h3 className="mt-6 text-2xl font-bold font-headline">Our PF Services Include:</h3>
                <ol className="mt-4 space-y-4 list-decimal pl-5">
                    {pfServices.map((service, index) => (
                        <li key={index}>
                            <strong className="text-muted-foreground">{service.title}</strong>
                            <ul className="mt-2 space-y-2 list-disc pl-5">
                                {service.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="text-muted-foreground text-justify">{item}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
            </section>

            <section id="pt-filing">
                <h2 className="text-3xl font-bold font-headline">Professional Tax (PT) Return Filing</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    Professional Tax (PT) is a state-level tax applicable to salaried employees, professionals, and business owners. The tax rates and regulations vary across different states in India.
                </p>
                <h3 className="mt-6 text-2xl font-bold font-headline">Our PT Services Include:</h3>
                <ol className="mt-4 space-y-4 list-decimal pl-5">
                    {ptServices.map((service, index) => (
                        <li key={index}>
                            <strong className="text-muted-foreground">{service.title}</strong>
                            <ul className="mt-2 space-y-2 list-disc pl-5">
                                {service.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="text-muted-foreground text-justify">{item}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
            </section>

            <section id="pf-compliance">
                <h2 className="text-3xl font-bold font-headline">Provident Fund (PF) Compliance</h2>
                <h3 className="mt-6 text-2xl font-bold font-headline">Key Updates for FY 2025–26</h3>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify"><strong>Monthly PF Contribution Payment & ECR Filing:</strong> Employers are required to deposit PF contributions and file the Electronic Challan cum Return (ECR) on or before the 15th of every month.</li>
                    <li className="text-muted-foreground text-justify"><strong>Annual PF Return Filing:</strong> Submission of Form 3A and Form 6A is due by 30th April each year, detailing individual and consolidated annual PF contributions.</li>
                </ul>
                <h3 className="mt-6 text-2xl font-bold font-headline">Penalties for Non-Compliance</h3>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify"><strong>Delayed Payment:</strong> Interest at 12% per annum for each day of delay.</li>
                    <li className="text-muted-foreground text-justify"><strong>Default in Payment:</strong> Damages ranging from 5% to 25% per annum, depending on the period of default.</li>
                </ul>
            </section>

            <section id="pt-compliance">
                <h2 className="text-3xl font-bold font-headline">Professional Tax (PT) Compliance</h2>
                <h3 className="mt-6 text-2xl font-bold font-headline">Key Updates for FY 2025–26</h3>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify"><strong>Monthly PT Payment:</strong> In Karnataka, employers must remit PT on salaries by the 10th of the following month.</li>
                    <li className="text-muted-foreground text-justify"><strong>Annual PT Return Filing:</strong> Form 4A must be filed annually by 30th April, summarizing the PT deductions and payments for the previous financial year.</li>
                </ul>
                <h3 className="mt-6 text-2xl font-bold font-headline">Penalties for Non-Compliance</h3>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify"><strong>Late Payment:</strong> Interest and penalties as prescribed under the Karnataka PT Act.</li>
                </ul>
            </section>

            <section id="why-choose-us">
                <h2 className="text-3xl font-bold font-headline">Why Choose CACSFinacc Services?</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify"><strong>Expert Compliance Handling:</strong> We manage every aspect of PF and PT compliance professionally.</li>
                    <li className="text-muted-foreground text-justify"><strong>Timely Submissions:</strong> Prevent penalties and notices with our proactive filing approach.</li>
                    <li className="text-muted-foreground text-justify"><strong>Data Security:</strong> Secure management of employee and payroll data.</li>
                    <li className="text-muted-foreground text-justify"><strong>End-to-End Support:</strong> From registration to filing, we cover all your compliance needs.</li>
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
