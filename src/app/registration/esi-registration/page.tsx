
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';

export const metadata: Metadata = {
  title: 'ESI Registration Services | CACS FinAcc Digital',
  description: 'Expert ESI registration services ensuring compliance and benefits for your employees. Learn the process, documents required, and benefits with CACS FinAcc.',
};

const whoNeedsRegistration = [
    "<strong>Employee Count:</strong> Employs 10 or more persons (20 in some states).",
    "<strong>Wage Limit:</strong> Employees earning up to ₹21,000 per month (₹25,000 for persons with disabilities).",
    "<strong>Applicable Entities:</strong> Factories, shops, hotels, restaurants, cinemas, road transport businesses, educational institutions, and medical institutions.",
];

const requiredDocuments = [
    "<strong>Certificate:</strong> Under the Shops and Establishment Act or Factories Act.",
    "<strong>PAN Card:</strong> Of the business entity.",
    "<strong>Bank Account Details:</strong> Cancelled cheque or bank statement.",
    "<strong>Address Proof:</strong> Utility bills or rental agreement.",
    "<strong>Employee Details:</strong> List of employees with their salary structure.",
    "<strong>Digital Signature Certificate (DSC):</strong> Of the employer.",
];

const registrationProcess = [
    { step: 1, action: "Visit the ESIC Portal", description: "Navigate to the ESIC official website." },
    { step: 2, action: "Sign Up", description: "Click on 'Sign Up' under the 'Employer Login' section and provide the necessary details." },
    { step: 3, action: "Login", description: "Use the credentials received via email to log in." },
    { step: 4, action: "Fill Employer Registration Form (Form-1)", description: "Provide establishment details, employee information, and other required data." },
    { step: 5, action: "Upload Documents", description: "Attach the necessary documents as specified." },
    { step: 6, action: "Submit Application", description: "Review all information and submit the application." },
    { step: 7, action: "Payment of Advance Contribution", description: "Pay six months of advance contributions through the online portal." },
    { step: 8, action: "Receive Registration Letter (C-11)", description: "Upon successful verification, the ESIC will issue a Registration Letter (C-11) containing the establishment's unique 17-digit registration number." },
];

const contributionRates = [
    "<strong>Employer Contribution:</strong> 3.25% of the employee's wages.",
    "<strong>Employee Contribution:</strong> 0.75% of their wages.",
    "<strong>Employees earning less than ₹176 per day are exempt from contributing.</strong>",
];

const esiBenefits = [
    "<strong>Medical Benefits:</strong> Full medical care for employees and their families.",
    "<strong>Sickness Benefits:</strong> 70% of wages during certified sickness for up to 91 days annually.",
    "<strong>Maternity Benefits:</strong> Full wages for 26 weeks during maternity leave.",
    "<strong>Disability Benefits:</strong> 90% of wages in case of temporary or permanent disability.",
    "<strong>Dependents' Benefits:</strong> Monthly payments to dependents of deceased employees.",
    "<strong>Funeral Expenses:</strong> ₹15,000 provided to the dependents for funeral costs.",
];

const postRegistrationCompliance = [
    "<strong>Maintain Registers:</strong> Attendance, wages, and accident registers.",
    "<strong>Monthly Contributions:</strong> Deposit ESI contributions by the 15th of the following month.",
    "<strong>Filing Returns:</strong> Submit half-yearly returns in Form 5.",
    "<strong>Display ESI Information:</strong> At conspicuous places within the premises.",
];

const whyChooseUs = [
    "<strong>Expert Assistance:</strong> Our team ensures accurate and timely ESI registration and compliance.",
    "<strong>End-to-End Support:</strong> From documentation to obtaining the ESI certificate, we handle it all.",
    "<strong>Transparent Pricing:</strong> No hidden charges; clear breakdown of all costs involved.",
    "<strong>Timely Delivery:</strong> We prioritize prompt processing to get your business compliant swiftly.",
];

export default function EsiRegistrationPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Registrations', href: '/registration' },
            { label: 'ESI Registration' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-esi">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">ESI Registration</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    Employees' State Insurance (ESI) is a social security scheme under the Employees' State Insurance Act, 1948, providing
                    medical, monetary, and other benefits to employees. Managed by the Employees' State Insurance Corporation (ESIC), this scheme
                    ensures workers are protected against financial distress arising from sickness, maternity, disability, or death due to employment
                    injuries.
                </p>
            </section>

            <section id="who-needs-esi">
                <h2 className="text-3xl font-bold font-headline">Who Needs ESI Registration?</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {whoNeedsRegistration.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
                <p className="mt-4 text-muted-foreground text-justify italic">
                    Note: The threshold varies by state; for instance, in Karnataka, the limit is 10 employees.
                </p>
            </section>
            
            <section id="documents-required">
              <h2 className="text-3xl font-bold font-headline">Documents Required for ESI Registration</h2>
              <ul className="mt-4 space-y-3 list-disc pl-5">
                {requiredDocuments.map((item, index) => (
                    <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
              </ul>
              <p className="mt-4 text-muted-foreground text-justify">
                Ensure all documents are clear and legible to avoid delays in processing.
              </p>
            </section>
            
            <section id="registration-process">
              <h2 className="text-3xl font-bold font-headline">ESI Registration Process</h2>
              <div className="mt-6 space-y-6">
                {registrationProcess.map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                     <div className="flex-shrink-0 font-bold text-lg text-foreground">{item.step}.</div>
                     <div>
                        <h4 className="font-semibold text-lg"><strong>{item.action}</strong></h4>
                        <p className="text-muted-foreground text-justify">{item.description}</p>
                     </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-muted-foreground text-justify">
                The registration process typically takes 7-15 working days, depending on the completeness of the application and the response from ESIC authorities.
              </p>
            </section>

            <section id="contribution-rates">
                <h2 className="text-3xl font-bold font-headline">Contribution Rates</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {contributionRates.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>

            <section id="benefits">
                <h2 className="text-3xl font-bold font-headline">Benefits of ESI Registration</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {esiBenefits.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
                 <p className="mt-4 text-muted-foreground text-justify">
                    These benefits ensure social security and financial stability for employees and their families.
                </p>
            </section>

            <section id="post-registration-compliance">
                <h2 className="text-3xl font-bold font-headline">Post-Registration Compliance</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {postRegistrationCompliance.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
                 <p className="mt-4 text-muted-foreground text-justify">
                    Non-compliance can lead to penalties, including interest at 12% per annum and damages up to 25% of the contribution amount.
                </p>
            </section>
            
            <section id="why-choose-us">
              <h2 className="text-3xl font-bold font-headline">Why Choose CACSFinacc for Your ESI Registration?</h2>
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
