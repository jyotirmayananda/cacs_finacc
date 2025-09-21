
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';

export const metadata: Metadata = {
  title: 'GST, PF & PT Registration Services | CACS FinAcc Digital',
  description: 'Comprehensive registration services for GST, Provident Fund (PF), and Professional Tax (PT). Ensure your business is fully compliant with all mandatory registrations.',
};

const gstDocuments = [
    "PAN Card of the business or applicant.",
    "Proof of business registration or incorporation certificate.",
    "Identity and address proof of promoters/directors.",
    "Address proof of the business place.",
    "Bank account statement or cancelled cheque.",
];

const ptDocuments = [
    "PAN Card and Aadhaar Card of the applicant.",
    "Proof of business address.",
    "Salary details of employees.",
    "Employee attendance register.",
];

const pfDocuments = [
    "PAN Card of the establishment.",
    "Certificate of incorporation or partnership deed.",
    "Address proof of the establishment.",
    "Details of employees, including Aadhaar and salary information.",
];


const whyChooseUs = [
    "<strong>Expert Guidance:</strong> Our experienced professionals ensure compliance with all legal requirements.",
    "<strong>End-to-End Support:</strong> From documentation to obtaining necessary licenses, we handle it all.",
    "<strong>Transparent Pricing:</strong> No hidden charges; clear breakdown of all costs involved.",
    "<strong>Timely Delivery:</strong> We prioritize prompt processing to get your business up and running swiftly.",
];

export default function GstPfPtRegistrationPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Registrations', href: '/registration' },
            { label: 'GST, PF, PT Registration' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-gst-pf-pt">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">GST, PF & PT Registration Guide (2025)</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    Navigating the regulatory landscape is crucial for businesses in India. Ensuring compliance with Goods and Services Tax (GST), Professional Tax (PT), and Provident Fund (PF) regulations not only legitimizes your operations but also unlocks various benefits. Here's an updated guide to help you understand the registration processes and recent amendments.
                </p>
            </section>

            <section id="gst-registration">
                <h2 className="text-3xl font-bold font-headline">Goods and Services Tax (GST) Registration</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    GST is a comprehensive indirect tax levied on the manufacture, sale, and consumption of goods and services across India.
                </p>
                <h3 className="text-2xl font-bold font-headline mt-6">Who Needs to Register?</h3>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify"><strong>Businesses with an annual turnover exceeding ₹20 lakh</strong> (₹10 lakh for special category states).</li>
                    <li className="text-muted-foreground text-justify"><strong>E-commerce operators and aggregators.</strong></li>
                    <li className="text-muted-foreground text-justify"><strong>Inter-state suppliers of goods and services.</strong></li>
                </ul>

                <h3 className="text-2xl font-bold font-headline mt-6">Key Amendments in 2025</h3>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify"><strong>Simplified Documentation:</strong> As per Instruction No. 03/2025-GST issued on April 17, 2025, the Central Board of Indirect Taxes and Customs (CBIC) mandates strict adherence to the list of documents prescribed in FORM GST REG-01, reducing unnecessary paperwork.</li>
                    <li className="text-muted-foreground text-justify"><strong>Aadhaar Authentication:</strong> Applicants not opting for Aadhaar authentication must undergo physical verification at designated GST Suvidha Kendras. This change, effective from February 11, 2025, aims to enhance the security and authenticity of GST registrations.</li>
                    <li className="text-muted-foreground text-justify"><strong>GST Waiver Scheme:</strong> Businesses that have settled all tax dues up to March 31, 2025, may be eligible for a GST waiver under schemes SPL01 or SPL02, provided they apply within three months of the new fiscal year.</li>
                </ul>

                <h3 className="text-2xl font-bold font-headline mt-6">Documents Required</h3>
                 <ul className="mt-4 space-y-3 list-disc pl-5">
                    {gstDocuments.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>

             <section id="pt-registration">
                <h2 className="text-3xl font-bold font-headline">Professional Tax (PT) Registration</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    Professional Tax is a state-level tax levied on professions, trades, and employment.
                </p>
                <h3 className="text-2xl font-bold font-headline mt-6">Applicability</h3>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify"><strong>Employers must deduct PT from employees' salaries</strong> and remit it to the state government.</li>
                    <li className="text-muted-foreground text-justify"><strong>Self-employed professionals</strong> like doctors, lawyers, and chartered accountants are also liable.</li>
                </ul>
                <h3 className="text-2xl font-bold font-headline mt-6">Karnataka PT Amendments (Effective April 1, 2025)</h3>
                 <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify"><strong>Revised Tax Rates:</strong> The Karnataka State Legislature has amended the professional tax rates, with ₹200 payable monthly and ₹300 in February, effective from April 1, 2025.</li>
                </ul>
                <h3 className="text-2xl font-bold font-headline mt-6">Documents Required</h3>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {ptDocuments.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>

             <section id="pf-registration">
                <h2 className="text-3xl font-bold font-headline">Provident Fund (PF) Registration</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    The Employees' Provident Fund (EPF) is a retirement benefits scheme for salaried employees, managed by the Employees' Provident Fund Organization (EPFO).
                </p>
                <h3 className="text-2xl font-bold font-headline mt-6">Applicability</h3>
                 <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify"><strong>Mandatory for establishments employing 20 or more employees.</strong></li>
                    <li className="text-muted-foreground text-justify"><strong>Voluntary registration is available</strong> for establishments with fewer employees.</li>
                </ul>
                <h3 className="text-2xl font-bold font-headline mt-6">EPFO Updates in 2025</h3>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify"><strong>Simplified Member Profile Updates:</strong> EPFO has introduced simplified member profile updates, allowing for easier corrections and updates to member information.</li>
                    <li className="text-muted-foreground text-justify"><strong>Easier PF Account Transfers:</strong> The process for transferring PF accounts has been streamlined, enabling faster and more efficient transfers for employees changing jobs.</li>
                    <li className="text-muted-foreground text-justify"><strong>New Joint Declaration Procedure:</strong> A new joint declaration procedure has been implemented, simplifying the process for updating member details jointly by the employer and employee.</li>
                </ul>
                 <h3 className="text-2xl font-bold font-headline mt-6">Documents Required</h3>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {pfDocuments.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>
            
            <section id="why-choose-us">
              <h2 className="text-3xl font-bold font-headline">Why Choose CACSFinacc for Your Registrations?</h2>
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
