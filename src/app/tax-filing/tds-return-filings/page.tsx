
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'TDS Return Filing Services | CACS FinAcc Digital',
  description: 'Timely and accurate TDS return filing to ensure compliance and avoid penalties. Learn about our services and key updates for FY 2025–26.',
};

const tdsServices = [
    { 
        title: "TDS Registration and Compliance:", 
        items: [
            "Assistance with TAN registration.",
            "Guidance on TDS applicability for various transactions.",
            "Ensuring compliance with Section 192, 194C, 194J, and other relevant sections."
        ] 
    },
    { 
        title: "Preparation and Filing of TDS Returns:", 
        items: [
            "Quarterly filing of TDS returns (24Q, 26Q, 27Q, and 27EQ).",
            "Generation and validation of Form 27A.",
            "Online submission of returns to the TIN-NSDL portal."
        ] 
    },
    { 
        title: "Correction and Revision of Returns:", 
        items: [
            "Support for revising TDS returns in case of discrepancies.",
            "Correction of PAN details, challan mismatches, and other errors."
        ] 
    },
    { 
        title: "Generation of TDS Certificates:", 
        items: [
            "Issuance of Form 16 and Form 16A to employees and vendors.",
            "Ensuring timely download and distribution as per statutory deadlines."
        ] 
    },
    { 
        title: "Form 26AS Reconciliation:", 
        items: [
            "Cross-checking the TDS deposited with the figures appearing in Form 26AS.",
            "Identification and rectification of mismatches."
        ] 
    },
    { 
        title: "Penalty Management and Compliance Advisory:", 
        items: [
            "Advisory on avoiding common errors that lead to interest and late filing penalties.",
            "Assistance in responding to TDS notices from the Income Tax Department."
        ] 
    },
];

export default function TdsReturnFilingPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Tax Filings', href: '/tax-filing' },
            { label: 'TDS Return Filings' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-tds-filing">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">TDS Return Filing</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    At CACSFinacc Services, we understand that compliance with the Tax Deducted at Source (TDS) regulations is crucial for the smooth functioning of your business. With frequent changes in tax laws and stringent compliance requirements, staying updated and filing timely returns is essential to avoid penalties and ensure seamless financial operations.
                </p>
            </section>

            <section id="why-tds-important">
                <h2 className="text-3xl font-bold font-headline">Why TDS Return Filing is Important?</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    TDS is a mechanism by which tax is collected at the source of income. It applies to various payments, such as:
                </p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground">Salaries</li>
                    <li className="text-muted-foreground">Rent</li>
                    <li className="text-muted-foreground">Interest</li>
                    <li className="text-muted-foreground">Professional Fees</li>
                    <li className="text-muted-foreground">Commission Payments</li>
                    <li className="text-muted-foreground">Contractual Payments</li>
                </ul>
                <p className="mt-4 text-muted-foreground text-justify">Filing TDS returns accurately and on time:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground">Ensures compliance with the Income Tax Act, 1961.</li>
                    <li className="text-muted-foreground">Prevents penalties and interest charges.</li>
                    <li className="text-muted-foreground">Facilitates timely issuance of Form 16 and Form 16A.</li>
                    <li className="text-muted-foreground">Allows smooth processing of tax credits for the deductee.</li>
                </ul>
            </section>
            
            <section id="our-services">
                <h2 className="text-3xl font-bold font-headline">Our TDS Return Filing Services Include:</h2>
                <ol className="mt-4 space-y-4 list-decimal pl-5">
                    {tdsServices.map((service, index) => (
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
                <ol className="mt-4 space-y-4 list-decimal pl-5">
                    <li>
                        <strong className="text-muted-foreground">Revised TDS Threshold Limits</strong>
                        <p className="mt-2 text-muted-foreground text-justify">
                            The Budget 2025 has introduced enhanced threshold limits for TDS, ensuring that smaller transactions remain exempt from tax deduction, thereby reducing the compliance burden. These revised limits, effective from April 1, 2025, apply to various sections of the Income Tax Act, 1961.
                        </p>
                    </li>
                    <li>
                        <strong className="text-muted-foreground">Updated TDS Return Filing Due Dates</strong>
                        <p className="mt-2 text-muted-foreground text-justify">For FY 2025–26, the due dates for filing quarterly TDS returns are as follows:</p>
                        <ul className="mt-2 space-y-2 list-disc pl-5">
                            <li className="text-muted-foreground"><strong>Q1 (April–June):</strong> 31st July 2025</li>
                            <li className="text-muted-foreground"><strong>Q2 (July–September):</strong> 31st October 2025</li>
                            <li className="text-muted-foreground"><strong>Q3 (October–December):</strong> 31st January 2026</li>
                            <li className="text-muted-foreground"><strong>Q4 (January–March):</strong> 31st May 2026</li>
                        </ul>
                        <p className="mt-2 text-muted-foreground text-justify">Timely filing is essential to avoid penalties and ensure compliance.</p>
                    </li>
                    <li>
                        <strong className="text-muted-foreground">Penalties for Non-Compliance</strong>
                        <p className="mt-2 text-muted-foreground text-justify">Failure to file TDS returns on time or providing incorrect information can lead to penalties:</p>
                         <ul className="mt-2 space-y-2 list-disc pl-5">
                            <li className="text-muted-foreground"><strong>Late Filing Fee (Section 234E):</strong> ₹200 per day until the return is filed, subject to a maximum of the TDS amount.</li>
                            <li className="text-muted-foreground"><strong>Penalty (Section 271H):</strong> Ranging from ₹10,000 to ₹1,00,000 for incorrect details or non-filing.</li>
                            <li className="text-muted-foreground"><strong>Interest (Section 201(1A)):</strong> 1.5% per month for delayed payment of TDS.</li>
                        </ul>
                    </li>
                </ol>
            </section>

            <section id="why-choose-us">
                <h2 className="text-3xl font-bold font-headline">Why Choose CACSFinacc Services?</h2>
                <p className="mt-4 text-muted-foreground text-justify">At CACSFinacc Services, we provide comprehensive TDS return filing solutions:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground"><strong>Accurate Preparation:</strong> Ensuring all TDS details are correctly captured and reported.</li>
                    <li className="text-muted-foreground"><strong>Timely Filing:</strong> Adhering to all statutory deadlines to avoid penalties.</li>
                    <li className="text-muted-foreground"><strong>Compliance Management:</strong> Keeping you updated with the latest TDS regulations and ensuring adherence.</li>
                    <li className="text-muted-foreground"><strong>Error Rectification:</strong> Assisting in correcting any discrepancies or errors in TDS returns.</li>
                </ul>
                 <p className="mt-4 text-muted-foreground text-justify">Stay ahead in TDS compliance with CACSFinacc Services. Contact us today to streamline your TDS return filing process.</p>
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
