
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';

export const metadata: Metadata = {
  title: 'Import Export Code (IEC) Registration | CACS FinAcc Digital',
  description: 'Get your Import Export Code (IEC) quickly and efficiently. Our expert services ensure you meet all requirements for international trade.',
};

const benefits = [
  "<strong>International market unlocks:</strong> As the DGFT IEC Code is a requirement for the import and export business, it allows the products to reach the global market. IE code makes the entry of the international Indian company smoother and opens doors for growth and expansion.",
  "<strong>Online DGFT IEC registration:</strong> The process to find the import and export code is entirely online and hassle-free with short document submission.",
  "<strong>Less document requirement:</strong> It is not required to submit many documents to for the process of IEC Code apply and obtain an import and export license.",
  "<strong>Lifetime Validity:</strong> IE Code is a lifetime registration valid as long as the business exists. Hence, there are no issues with updating, filing, and renewing Import Export Code registration. The IEC registration is valid until the company exists or the registration is not revoked or surrendered.",
  "<strong>Reduces illegal goods transportation:</strong> The most basic requirement for the import export license is that you need to provide authentic information. Without giving proper information, IE code cannot be obtained. This criterion makes the transportation of illegal goods impossible.",
  "<strong>Availing Several Benefits:</strong> Import and Export code registration has enormous benefits for importers and exporters. The registered business entities can get help through subsidies from the Customs, Export Promotion Council or other authorities. With LUT filing under GST, the exporters can make exports without paying taxes. If the exports are made with tax payment, the exporter can claim the refunds of the paid tax amount.",
  "<strong>Compliances:</strong> Unlike other tax registration, the person carrying import or export does not require to fulfill any specific compliance requirements such as the annual filing or the return filings.",
];

const firmTypes = [
  "Proprietorship Firm",
  "Partnership Firm",
  "Limited Liability Partnership",
  "Limited Company",
  "Trust",
  "Hindu Undivided Family (HUF)",
  "Society",
];

const prerequisites = [
  "Valid DGFT IEC Login Credentials to DGFT Portal (After Registering on DGFT Portal)",
  "IEC may be applied on behalf of a firm which may be a Proprietorship, Partnership, LLP, Limited Company, Trust, HUF, and Society.",
  "The Firm must have an active Firm's Permanent Account Number (PAN) and details like Name as per Pan, Date of Birth, or Incorporation.",
  "The Firm must also have a bank account in the Name of the Firm and a valid address before the procedure of IEC Code apply.",
];

const requiredDocuments = [
    "<strong>Proof of establishment/incorporation/registration:</strong> The following type of Firm needs to submit the establishment/incorporation/registration certificate: Partnership, Registered Society, Trust, HUF, Other.",
    "<strong>Proof of Address:</strong> Can be a Sale Deed, Rent agreement, Lease deed, Electricity bill, Telephone landline bill, Mobile, post-paid bill, MoU, or Partnership deed. For proprietorships, Aadhar card, Passport, or Voter ID are also acceptable.",
    "<strong>Proof of Firm's Bank Account:</strong> A cancelled cheque or a bank certificate.",
    "<strong>DSC or Aadhaar:</strong> User should have an active DSC or Aadhaar of the Firm's member for submission.",
];

const registrationProcess = [
    { step: 1, action: "Visit the DGFT Website", description: "Navigate to the DGFT official website." },
    { step: 2, action: "Register/Login", description: "Create an account or log in using your credentials." },
    { step: 3, action: "Apply for IEC", description: "Under the 'Services' section, select 'IEC Profile Management' and click on 'Apply for IEC'." },
    { step: 4, action: "Fill Application Form (ANF 2A)", description: "Provide details about your business, such as name, address, PAN, and bank details." },
    { step: 5, action: "Upload Required Documents", description: "Ensure all necessary documents are uploaded in the specified format." },
    { step: 6, action: "Pay Application Fee", description: "The application fee is ₹500, payable through the online portal." },
    { step: 7, action: "Submit Application", description: "After verifying all details, submit the application." },
    { step: 8, action: "Receive IEC Certificate", description: "Upon successful verification, the IEC certificate will be issued electronically within 1-2 working days." },
];

export default function IecPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Registrations', href: '/registration' },
            { label: 'Import Export Code (IEC)' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-iec">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">IEC (Importer Exporter Code) Registration</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    The Importer Exporter Code (IEC) is a mandatory 10-digit identification number for businesses and individuals engaged in international trade. Issued by the Directorate General of Foreign Trade (DGFT), it's essential for clearing customs, making foreign bank payments, and receiving money from overseas clients.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">
                    An IEC is a primary requirement for any business looking to expand into global markets. Without it, goods can be stuck at the port, leading to delays and additional charges.
                </p>
            </section>

            <section id="benefits">
                <h2 className="text-3xl font-bold font-headline">Importance of Import Export Code</h2>
                 <ul className="mt-4 space-y-3 list-disc pl-5">
                    {benefits.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>

            <section id="validity">
                <h2 className="text-3xl font-bold font-headline">Validity of DGFT IEC Code</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    IEC Code registration is permanent and valid for a lifetime. There are no hassles with updating, filing, or renewing the import export license. It is valid until the business exists or the registration is not revoked or surrendered. Unlike other tax registrations, there are no additional compliance requirements like annual filings.
                </p>
            </section>

            <section id="firm-types">
                <h2 className="text-3xl font-bold font-headline">Nature of the Firm obtaining an IEC</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {firmTypes.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify">
                          <strong>{item}</strong>
                        </li>
                    ))}
                </ul>
            </section>

            <section id="prerequisites">
                <h2 className="text-3xl font-bold font-headline">Pre-Requisites for Applying for Import Export License</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {prerequisites.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: `<strong>${item}</strong>` }}></li>
                    ))}
                </ul>
                 <p className="mt-4 text-muted-foreground text-justify italic">
                    Note: These details will be validated with the Income Tax Department site.
                </p>
            </section>
            
            <section id="documents-required">
              <h2 className="text-3xl font-bold font-headline">Documents Required for IEC Code Registration</h2>
              <ul className="mt-4 space-y-3 list-disc pl-5">
                {requiredDocuments.map((item, index) => (
                    <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
              </ul>
              <p className="mt-4 text-muted-foreground text-justify italic">
                Note: In case the address proof is not in the name of the applicant firm, a No Objection Certificate (NOC) by the firm premises owner in favor of the firm, along with the address proof, is to be submitted.
              </p>
            </section>
            
            <section id="registration-process">
              <h2 className="text-3xl font-bold font-headline">Process for IEC Registration</h2>
              <div className="mt-6 space-y-6">
                {registrationProcess.map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                     <div className="flex-shrink-0 font-bold text-lg text-black">{item.step}.</div>
                     <div>
                        <h4 className="font-semibold text-lg"><strong>{item.action}</strong></h4>
                        <p className="text-muted-foreground text-justify">{item.description}</p>
                     </div>
                  </div>
                ))}
              </div>
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
