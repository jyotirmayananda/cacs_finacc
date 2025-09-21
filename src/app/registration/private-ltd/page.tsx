
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';

export const metadata: Metadata = {
  title: 'Private Limited Company Registration | CACS FinAcc Digital',
  description: 'Register your Private Limited Company with our expert services. We handle the entire process, from name approval to receiving your Certificate of Incorporation.',
};

const characteristics = [
    "<strong>Limited Liability Protection:</strong> Shareholders of a private limited company are liable only to the extent of their shareholding. Their assets remain safeguarded, even in cases of financial setbacks incurred by the company.",
    "<strong>Separate Legal Entity:</strong> A private company possesses its own distinct legal identity. It can own property, engage in contracts, and initiate or defend legal actions under its unique name.",
    "<strong>Minimum Number of Shareholders:</strong> A private company must have a minimum of two shareholders and cannot exceed 200 shareholders.",
    "<strong>Minimum Number of Directors:</strong> A private limited company necessitates a minimum of two directors. At least one of these directors must be an Indian citizen.",
    "<strong>Minimum Share Capital:</strong> The company must maintain a minimum paid-up capital of Rs. 1 lakh or a higher amount as specified.",
    "<strong>Name of the Firm:</strong> The private limited company's name must conclude with the words 'Private Limited.'",
    "<strong>Restrictions on Share Transfer:</strong> The right to transfer shares within a private limited company is restricted. Shares can only be transferred with the approval of the Board of Directors or following the company's Articles of Association.",
    "<strong>Prohibition on Public Invitation:</strong> Private limited companies are prohibited from inviting the public to subscribe to their shares or debentures.",
    "<strong>Compliance Requirements:</strong> Private limited companies are obligated to adhere to various legal and regulatory obligations, including maintaining proper financial records, conducting annual general meetings, and filing annual returns with the ROC.",
];

const companyTypes = [
    "<strong>Company Limited by Shares:</strong> Shareholders' liability is limited to the nominal share amount mentioned in the Memorandum of Association.",
    "<strong>Company Limited by Guarantee:</strong> Member liability is limited to the amount of guarantee specified in the Memorandum of Association. This guarantee is invoked only during winding up.",
    "<strong>Unlimited Companies:</strong> Members of unlimited companies have unlimited personal liability for the company's debts and liabilities. However, they are still considered a separate legal entity, and individual members cannot be sued.",
];

const documentsRequired = [
    {
        category: "For Indian Nationals:",
        items: [
            "PAN card",
            "Aadhaar card",
            "Passport-sized photograph",
            "Proof of address (e.g., utility bill not older than 2 months)",
            "Proof of registered office address (e.g., rental agreement, NOC from owner)",
        ]
    },
    {
        category: "For Foreign Nationals:",
        items: [
            "Passport",
            "Proof of address (e.g., bank statement, utility bill)",
            "Photograph",
            "All documents must be notarized and apostilled",
        ]
    }
];

const registrationProcess = [
    { step: 1, action: "Obtain Digital Signature Certificate (DSC)", description: "All proposed directors and subscribers must acquire a Class 3 DSC to sign electronic documents on the MCA portal. This can be obtained from government-recognized certifying authorities and typically takes 1–2 business days." },
    { step: 2, action: "Apply for Director Identification Number (DIN)", description: "DIN is a unique identification number for directors. For new companies, DINs for up to three directors can be applied for within the SPICe+ form. If there are more than three directors, additional DINs must be obtained separately using Form DIR-3 after incorporation." },
    { step: 3, action: "Reserve Company Name via SPICe+ Part A", description: "Propose up to two unique names for your company using Part A of the SPICe+ form. Ensure the names comply with the Companies (Incorporation) Rules, 2014. Upon approval, the name is reserved for 20 days." },
    { step: 4, action: "File SPICe+ Part B for Incorporation", description: "Complete Part B of the SPICe+ form, which integrates various services: <ul><li class='ml-4 list-disc'>Company incorporation</li><li class='ml-4 list-disc'>DIN allotment</li><li class='ml-4 list-disc'>PAN and TAN application</li><li class='ml-4 list-disc'>EPFO and ESIC registration</li><li class='ml-4 list-disc'>Professional Tax registration (for Maharashtra)</li><li class='ml-4 list-disc'>Opening of company bank account</li><li class='ml-4 list-disc'>GSTIN allotment (optional)</li></ul>This consolidated approach simplifies the registration process." },
    { step: 5, action: "Draft e-MoA (INC-33) and e-AoA (INC-34)", description: "Prepare the electronic Memorandum of Association (e-MoA) and Articles of Association (e-AoA), which define the company's constitution and internal rules. These documents must be digitally signed by all subscribers." },
    { step: 6, action: "Submit Form AGILE-PRO (INC-35)", description: "<p>This form facilitates the application for:</p><ul class='list-disc pl-5 mt-2'><li>GSTIN (if applicable)</li><li>EPFO registration</li><li>ESIC registration</li><li>Professional Tax registration (for Maharashtra)</li><li>Opening of a bank account</li></ul>AGILE-PRO is submitted alongside the SPICe+ form." },
    { step: 7, action: "Obtain Certificate of Incorporation (COI)", description: "Upon successful verification, the Registrar of Companies (ROC) issues the COI, which includes the company's Corporate Identification Number (CIN), PAN, and TAN. These documents are sent via email to the registered address." },
];

const whyChooseUs = [
    "<strong>Expert Guidance:</strong> Our experienced professionals ensure compliance with all legal requirements.",
    "<strong>End-to-End Support:</strong> From DSC acquisition to post-incorporation compliance, we handle it all.",
    "<strong>Transparent Pricing:</strong> No hidden charges; clear breakdown of all costs involved.",
    "<strong>Timely Delivery:</strong> We prioritize prompt processing to get your company up and running swiftly.",
];

export default function PrivateLtdPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Registration Services', href: '/registration' },
            { label: 'Private Limited Company' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-pvt-ltd">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">Private Limited Company Registration in India</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    Establishing a Private Limited Company (Pvt Ltd) in India offers entrepreneurs a structured business model with benefits like limited liability, separate legal identity, and ease of fundraising. The Ministry of Corporate Affairs (MCA) has streamlined the incorporation process, making it more efficient and entirely online.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">
                    At CACSFinacc, we offer a cost-effective service to register new company, registration of startup in India and facilitate seamless private limited company registration in India. We handle all legal formalities for online PVT LTD company registration in India, ensuring strict compliance with the Ministry of Corporate Affairs (MCA) regulations.
                </p>
            </section>

            <section id="what-is-pvt-ltd-detailed">
                <h2 className="text-3xl font-bold font-headline">What is a Private Limited Company?</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    In India, a private limited company is a privately held entity with limited liability, and it ranks among the nation's most favored business structures. This popularity is primarily attributed to its numerous advantages, including limited liability protection, ease of formation and maintenance, and its status as a distinct legal entity. This encourages a prospective businessman to engage in the incorporation of private limited company. A private limited company enjoys legal separation from its owners and necessitates a minimum of two members and two directors for its operation. Here are the key characteristics of a private limited company in India, which justify the PVT LTD company registration:
                </p>
                <ul className="mt-4 space-y-3">
                    {characteristics.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>

             <section id="types-of-pvt-ltd">
                <h2 className="text-3xl font-bold font-headline">Types of Private Limited Companies</h2>
                 <ul className="mt-4 space-y-3">
                    {companyTypes.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>
            
            <section id="registration-process">
              <h2 className="text-3xl font-bold font-headline">Step-by-Step Process for Private Limited Company Registration</h2>
              <div className="mt-6 space-y-6">
                {registrationProcess.map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                     <div className="flex-shrink-0 font-bold text-lg text-black">{item.step}.</div>
                     <div>
                        <h4 className="font-semibold text-lg" dangerouslySetInnerHTML={{ __html: `<strong>${item.action}</strong>` }}></h4>
                        <div className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item.description }}></div>
                     </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="documents-required">
              <h2 className="text-3xl font-bold font-headline">Documents Required for Registration</h2>
                {documentsRequired.map((doc, index) => (
                    <div key={index} className="mt-4">
                        <h3 className="text-lg font-semibold" dangerouslySetInnerHTML={{ __html: doc.category }}></h3>
                        <ul className="mt-2 space-y-2">
                            {doc.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
            
            <section id="why-choose-us">
              <h2 className="text-3xl font-bold font-headline">Why Choose CACSFinacc Services?</h2>
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
