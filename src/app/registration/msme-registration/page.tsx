
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';


export const metadata: Metadata = {
  title: 'MSME/Udyam Registration Services | CACS FinAcc Digital',
  description: 'Register your business under MSME/Udyam to avail a wide range of government benefits. We offer a fast and simple registration process.',
};

const registrationProcess = [
    { step: 1, action: "Visit the Udyam Registration Portal", description: "Begin by accessing the official Udyam Registration Portal at https://udyamregistration.gov.in." },
    { step: 2, action: "Select the Appropriate Registration Option", description: "For new entrepreneurs not registered as MSMEs, click on “For New Entrepreneurs who are not Registered yet as MSME”. For those already having registration as UAM, select the corresponding option." },
    { step: 3, action: "Enter Aadhaar and PAN Details", description: "Provide your Aadhaar number and name, then validate using the OTP sent to your registered mobile number. Subsequently, enter your PAN details and validate them." },
    { step: 4, action: "Fill in Business Information", description: "Input essential details such as business name, address, bank account information, and the National Industry Classification (NIC) code relevant to your business activities." },
    { step: 5, action: "Specify Investment and Turnover Details", description: "Enter the investment in plant and machinery or equipment and the annual turnover figures. Ensure these figures align with the revised MSME classification criteria effective from April 1, 2025." },
    { step: 6, action: "Submit the Application", description: "After reviewing all the information, submit the application. Upon successful submission, you will receive an e-certificate known as the Udyam Registration Certificate, which includes a unique Udyam Registration Number (URN)." },
];

const documentsRequired = [
    "<strong>Aadhaar Card:</strong> Mandatory for the applicant.",
    "<strong>PAN Card:</strong> Required for business verification.",
    "<strong>Business Address Proof:</strong> Utility bill, rent agreement, or property tax receipt.",
    "<strong>Bank Account Details:</strong> Cancelled cheque or bank statement.",
];

const classificationCriteria = [
    { category: "Micro", investment: "Up to ₹2.5 crore", turnover: "Up to ₹10 crore" },
    { category: "Small", investment: "Up to ₹25 crore", turnover: "Up to ₹100 crore" },
    { category: "Medium", investment: "Up to ₹125 crore", turnover: "Up to ₹500 crore" },
];

const benefits = [
    "<strong>Access to Government Schemes:</strong> Eligibility for various subsidies, schemes, and incentives offered by the government.",
    "<strong>Collateral-Free Loans:</strong> Easier access to credit under schemes like the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE).",
    "<strong>Protection Against Delayed Payments:</strong> Legal protection and interest on delayed payments from buyers.",
    "<strong>Concession in Electricity Bills:</strong> Avail concessions on electricity bills by submitting the MSME registration certificate.",
    "<strong>ISO Certification Charges Reimbursement:</strong> Reimbursement of expenses incurred for obtaining ISO certification.",
];

const whyChooseUs = [
    "<strong>Expert Guidance:</strong> Our experienced professionals ensure compliance with all legal requirements.",
    "<strong>End-to-End Support:</strong> From documentation to obtaining necessary licenses, we handle it all.",
    "<strong>Transparent Pricing:</strong> No hidden charges; clear breakdown of all costs involved.",
    "<strong>Timely Delivery:</strong> We prioritize prompt processing to get your business up and running swiftly.",
];

export default function MsmeRegistrationPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Registrations', href: '/registration' },
            { label: 'MSME Registration' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-msme">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">MSME Registration in India</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    Micro, Small, and Medium Enterprises (MSMEs) are the backbone of India's economy, contributing significantly to employment and GDP. Recognizing their importance, the Government of India has streamlined the MSME registration process and revised classification criteria to foster growth and innovation within the sector.
                </p>
            </section>
            
            <section id="registration-process">
              <h2 className="text-3xl font-bold font-headline">Step-by-Step Process for MSME Registration</h2>
              <div className="mt-6 space-y-6">
                {registrationProcess.map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                     <div className="flex-shrink-0 font-bold text-lg text-foreground">{item.step}.</div>
                     <div>
                        <h4 className="font-semibold text-lg" dangerouslySetInnerHTML={{ __html: `<strong>${item.action}</strong>` }}></h4>
                        <p className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                     </div>
                  </div>
                ))}
              </div>
            </section>
            
            <section id="documents-required">
              <h2 className="text-3xl font-bold font-headline">Documents Required for MSME Registration</h2>
              <ul className="mt-4 space-y-3 list-disc pl-5">
                {documentsRequired.map((item, index) => (
                    <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
              </ul>
              <p className="mt-4 text-muted-foreground text-justify italic">
                <strong>Note:</strong> The registration process is paperless and based on self-declaration; no physical documents are required to be uploaded.
              </p>
            </section>
            
            <section id="classification-criteria">
                <h2 className="text-3xl font-bold font-headline">Revised MSME Classification Criteria (Effective April 1, 2025)</h2>
                <Table className="mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Enterprise Category</TableHead>
                            <TableHead>Investment in Plant & Machinery/Equipment</TableHead>
                            <TableHead>Annual Turnover</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {classificationCriteria.map((item) => (
                            <TableRow key={item.category}>
                                <TableCell className="font-medium">{item.category}</TableCell>
                                <TableCell>{item.investment}</TableCell>
                                <TableCell>{item.turnover}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <p className="mt-4 text-muted-foreground text-justify italic">
                    <strong>Note:</strong> An enterprise will be classified in a particular category only if it meets both the investment and turnover limits specified for that category.
                </p>
            </section>

            <section id="benefits">
                <h2 className="text-3xl font-bold font-headline">Benefits of MSME Registration</h2>
                 <ul className="mt-4 space-y-3 list-disc pl-5">
                    {benefits.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>
            
            <section id="why-choose-us">
              <h2 className="text-3xl font-bold font-headline">Why Choose CACSFinacc for Your MSME Registration?</h2>
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

    