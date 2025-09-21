
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';

export const metadata: Metadata = {
  title: 'Legal Entity Identifier (LEI) Registration | CACS FinAcc Digital',
  description: 'Secure your Legal Entity Identifier (LEI) for financial transactions. Our services ensure quick and compliant LEI registration and renewal.',
};

const whoNeedsLEI = [
    "<strong>Large Borrowers:</strong> Entities with fund and non-fund-based credit exposure of ₹5 crore and above from banks and financial institutions.",
    "<strong>Participants in Derivative Markets:</strong> Entities dealing in Over-the-Counter (OTC) derivatives, including interest rate, forex, and credit derivatives.",
    "<strong>Entities in Non-Derivative Markets:</strong> Participants in government securities, money markets, and non-derivative forex markets.",
    "<strong>Large Value Transactions:</strong> Entities undertaking single payment transactions of ₹50 crore and above through Real Time Gross Settlement (RTGS) and National Electronic Funds Transfer (NEFT) systems.",
    "<strong>Listed Companies and Their Subsidiaries:</strong> All companies listed on Indian stock exchanges and their subsidiaries.",
    "<strong>Regulated Entities:</strong> Banks, Non-Banking Financial Companies (NBFCs), insurance companies, and pension funds.",
    "<strong>Entities Engaged in Cross-Border Transactions:</strong> Businesses involved in international trade and cross-border financial transactions.",
];

const documentsRequired = [
    "<strong>Proof of Legal Existence:</strong> Certificate of Incorporation, Partnership Deed, or Registration Certificate.",
    "<strong>PAN Card:</strong> Permanent Account Number of the entity.",
    "<strong>Proof of Address:</strong> Utility bills, lease agreements, or bank statements not older than three months.",
    "<strong>Authorized Signatory Details:</strong> Identity proof (Aadhaar, PAN, or Passport) and authorization letter or board resolution.",
    "<strong>Ownership Structure:</strong> Details of parent and ultimate parent entities, if applicable.",
];

const registrationProcess = [
    { step: 1, action: "Choose an Accredited Local Operating Unit (LOU):", description: "In India, LEIL is the authorized LOU for issuing LEIs." },
    { step: 2, action: "Submit Application:", description: "Fill out the LEI application form available on the LEIL website." },
    { step: 3, action: "Upload Documents:", description: "Provide the necessary documents as listed above." },
    { step: 4, action: "Pay Fees:", description: "The application fee is typically between ₹3,000 and ₹5,000, depending on the service provider." },
    { step: 5, action: "Verification and Issuance:", description: "Upon successful verification, the LEI is issued, usually within 1 to 2 working days." },
];

const benefits = [
    "<strong>Regulatory Compliance:</strong> Meets RBI and global regulatory requirements for financial transactions.",
    "<strong>Enhanced Transparency:</strong> Provides clear identification of legal entities, reducing financial fraud.",
    "<strong>Global Recognition:</strong> Facilitates international trade and cross-border transactions.",
    "<strong>Improved Risk Management:</strong> Assists in assessing counterparty risks in financial dealings.",
];

const whyChooseUs = [
    "<strong>Expert Assistance:</strong> Our team ensures accurate and timely LEI registration and renewal.",
    "<strong>End-to-End Support:</strong> From document preparation to application submission, we handle the entire process.",
    "<strong>Transparent Pricing:</strong> No hidden charges; clear breakdown of all costs involved.",
    "<strong>Timely Delivery:</strong> We prioritize prompt processing to get your LEI issued swiftly.",
];

export default function LeiRegistrationPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Registrations', href: '/registration' },
            { label: 'LEI Registration' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-lei">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">Legal Entity Identifier (LEI) Registration</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    The Legal Entity Identifier (LEI) is a unique 20-character alphanumeric code based on the ISO 17442 standard, designed to uniquely identify legal entities participating in financial transactions worldwide. In India, the LEI system is overseen by the Legal Entity Identifier India Ltd. (LEIL), a wholly-owned subsidiary of the Clearing Corporation of India Ltd. (CCIL), and is accredited by the Global Legal Entity Identifier Foundation (GLEIF).
                </p>
            </section>
            
            <section id="applicability">
                <h2 className="text-3xl font-bold font-headline">Who Needs an LEI in India?</h2>
                <ul className="mt-4 space-y-3">
                    {whoNeedsLEI.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
                <p className="mt-4 text-muted-foreground text-justify italic">
                    Note: Entities with exposure above ₹5 crore and up to ₹10 crore need to obtain an LEI by April 30, 2025.
                </p>
            </section>
            
            <section id="documents-required">
              <h2 className="text-3xl font-bold font-headline">Documents Required for LEI Registration</h2>
              <ul className="mt-4 space-y-3">
                {documentsRequired.map((item, index) => (
                    <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
              </ul>
               <p className="mt-4 text-muted-foreground text-justify italic">
                Additional documents may be required based on the entity type and specific circumstances.
              </p>
            </section>
            
            <section id="registration-process">
              <h2 className="text-3xl font-bold font-headline">LEI Registration Process</h2>
              <div className="mt-6 space-y-6">
                {registrationProcess.map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                     <div className="flex-shrink-0 font-bold text-lg text-black">{item.step}.</div>
                     <div>
                        <h4 className="font-semibold text-lg" dangerouslySetInnerHTML={{ __html: item.action }}></h4>
                        <p className="text-muted-foreground text-justify">{item.description}</p>
                     </div>
                  </div>
                ))}
              </div>
               <p className="mt-4 text-muted-foreground text-justify italic">
                Note: The LEI is valid for one year and must be renewed annually.
              </p>
            </section>

             <section id="renewal-process">
                <h2 className="text-3xl font-bold font-headline">LEI Renewal Process</h2>
                <ul className="mt-4 space-y-3">
                    <li className="text-muted-foreground text-justify"><strong>Annual Renewal:</strong> LEIs must be renewed every year to maintain their active status.</li>
                    <li className="text-muted-foreground text-justify"><strong>Update Information:</strong> Any changes in the entity's legal structure, ownership, or address must be updated during renewal.</li>
                    <li className="text-muted-foreground text-justify"><strong>Avoid Lapse:</strong> Failure to renew the LEI can lead to its status becoming 'Lapsed,' which may hinder financial transactions.</li>
                </ul>
                <p className="mt-4 text-muted-foreground">Renewal fees are similar to the initial registration fees and vary based on the service provider.</p>
            </section>
            
             <section id="benefits">
                <h2 className="text-3xl font-bold font-headline">Benefits of Obtaining an LEI</h2>
                 <ul className="mt-4 space-y-3">
                    {benefits.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>

            <section id="why-choose-us">
              <h2 className="text-3xl font-bold font-headline">Why Choose CACSFinacc for Your LEI Registration?</h2>
              <ul className="mt-4 space-y-3">
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
