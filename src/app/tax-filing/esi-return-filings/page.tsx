
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'ESI Return Filing Services | CACS FinAcc Digital',
  description: 'Timely and accurate ESI return filing services to ensure compliance and employee welfare. Learn about our ESI services, key updates, and filing deadlines.',
};

const esiServices = [
    {
        title: "ESI Registration and Compliance Setup",
        items: [
            "Quick and seamless ESI registration for your business.",
            "Generation of Employer Code Number.",
            "Guidance on documentation and eligibility criteria."
        ]
    },
    {
        title: "Monthly ESI Contribution Filing",
        items: [
            "Calculation of ESI contributions at 4% of gross wages (3.25% by employer and 0.75% by employee).",
            "Preparation and submission of Challan Form (Form 5) through the ESIC portal.",
            "Generation of payment receipts and confirmation of compliance."
        ]
    },
    {
        title: "Half-Yearly ESI Return Filing",
        items: [
            "Filing of Form 6 Return by November 11th and May 11th for the respective half-years.",
            "Inclusion of employee attendance, monthly contributions, and wage details."
        ]
    },
    {
        title: "Maintenance of Records",
        items: [
            "Accurate maintenance of Form 3 (Accident Register), Form 7 (Wage Register), and employee records.",
            "Digital storage and easy retrieval of records to avoid discrepancies."
        ]
    },
    {
        title: "Employee Updates and Amendments",
        items: [
            "Addition and removal of employees in the ESI portal.",
            "Support for updating salary changes and demographic details."
        ]
    },
    {
        title: "Support for ESI Inspections and Assessments",
        items: [
            "Assistance during ESIC audits and inspections.",
            "Preparation of required documentation and reconciliation of records."
        ]
    },
    {
        title: "Online Access and Reporting",
        items: [
            "Access to real-time reports for ESI payments and returns.",
            "Simplified dashboards for easy compliance tracking."
        ]
    }
];

export default function EsiReturnFilingPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Tax Filings', href: '/tax-filing' },
            { label: 'ESI Return Filings' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-esi-filing">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">ESI Return Filing – Timely & Accurate Compliance</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    At CACSFinacc Services, we understand the importance of timely and accurate filing of Employees' State Insurance (ESI) Returns. ESI is a self-financed social security scheme under the Employees' State Insurance Act, 1948, providing medical, disability, maternity, and unemployment benefits to employees earning ₹21,000 or less per month (₹25,000 for disabled employees). Compliance with ESI regulations is crucial for businesses to avoid legal penalties and ensure employee welfare.
                </p>
                <h2 className="mt-8 text-3xl font-bold font-headline">What is ESI Return Filing?</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    ESI Return Filing is a mandatory requirement for employers registered under the ESI Act. It involves the submission of monthly and half-yearly returns that detail:
                </p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground">Employee contributions.</li>
                    <li className="text-muted-foreground">Employer contributions.</li>
                    <li className="text-muted-foreground">Employee wages and employment details.</li>
                    <li className="text-muted-foreground">Any updates regarding employee additions or exits.</li>
                </ul>
            </section>

            <section id="our-services">
                <h2 className="text-3xl font-bold font-headline">Our ESI Return Filing Services Include:</h2>
                <ol className="mt-4 space-y-4 list-decimal pl-5">
                    {esiServices.map((service, index) => (
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

            <section id="key-updates">
                <h2 className="text-3xl font-bold font-headline">Key Updates for Financial Year (FY) 2025–26</h2>
                
                <h3 className="mt-6 text-2xl font-bold font-headline">1. Revised ESI Contribution Rates</h3>
                <p className="mt-4 text-muted-foreground text-justify">The ESI contribution rates remain unchanged for FY 2025–26:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground"><strong>Employer's Contribution:</strong> 3.25% of the employee's wages</li>
                    <li className="text-muted-foreground"><strong>Employee's Contribution:</strong> 0.75% of the wages</li>
                </ul>
                <p className="mt-4 text-muted-foreground text-justify">These contributions are mandatory for establishments employing 10 or more persons earning wages up to ₹21,000 per month.</p>

                <h3 className="mt-6 text-2xl font-bold font-headline">2. Updated Filing Deadlines</h3>
                <p className="mt-4 text-muted-foreground text-justify">Timely filing of ESI returns is essential to maintain compliance. The due dates are as follows:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground"><strong>Monthly ESI Contribution Payment:</strong> 15th of the following month. For instance, contributions for April 2025 are due by 15th May 2025.</li>
                    <li className="text-muted-foreground"><strong>Half-Yearly ESI Return Filing:</strong> Due by 11th May and 11th November each year.</li>
                </ul>

                <h3 className="mt-6 text-2xl font-bold font-headline">3. Penalties for Non-Compliance</h3>
                <p className="mt-4 text-muted-foreground text-justify">Failure to adhere to ESI payment and filing deadlines can result in:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground"><strong>Interest:</strong> 12% per annum for each day of delay in payment.</li>
                    <li className="text-muted-foreground"><strong>Damages:</strong> Ranging from 5% to 25% per annum, depending on the duration of the default.</li>
                </ul>
                <p className="mt-4 text-muted-foreground text-justify">These penalties underscore the importance of timely compliance to avoid financial and legal repercussions.</p>
            </section>

            <section id="why-choose-us">
                <h2 className="text-3xl font-bold font-headline">Why Choose CACSFinacc Services?</h2>
                 <p className="mt-4 text-muted-foreground text-justify">At CACSFinacc Services, we offer comprehensive solutions to manage your ESI obligations:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground"><strong>Accurate Calculation:</strong> Ensuring precise computation of contributions based on current wage structures.</li>
                    <li className="text-muted-foreground"><strong>Timely Filing:</strong> Adhering to all statutory deadlines to prevent penalties.</li>
                    <li className="text-muted-foreground"><strong>Documentation Management:</strong> Maintaining essential records such as attendance registers, wage registers, and accident registers.</li>
                    <li className="text-muted-foreground"><strong>Compliance Advisory:</strong> Providing guidance on ESI regulations and updates to keep your business compliant.</li>
                </ul>
                <p className="mt-4 text-muted-foreground text-justify">Ensure seamless ESI compliance with CACSFinacc Services. Contact us today to streamline your ESI return filing process.</p>
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
