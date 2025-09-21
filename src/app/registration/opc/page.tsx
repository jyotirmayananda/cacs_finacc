
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';

export const metadata: Metadata = {
  title: 'One Person Company (OPC) Registration | CACS FinAcc Digital',
  description: 'Start your business as a One Person Company (OPC). Our expert services cover the entire OPC registration process for a seamless setup.',
};

const eligibilityCriteria = [
    "<strong>Natural Person and Indian Citizen:</strong> Only a natural person who is an Indian citizen can establish an OPC. Legal entities like companies or LLPs cannot create an OPC.",
    "<strong>Resident in India:</strong> The promoter must be a resident in India, meaning they should have lived in India for at least 182 days during the previous calendar year.",
    "<strong>Minimum Authorized Capital:</strong> The OPC must have a minimum authorized capital of Rs 1,00,000, the amount stated in the company's capital clause during the OPC Company registration.",
    "<strong>Nominee Appointment:</strong> The promoter must appoint a nominee during the OPC's incorporation. This nominee would become a member of the OPC in the event of the promoter's death or incapacity.",
    "<strong>Restrictions on Certain Businesses:</strong> Businesses involved in financial activities such as banking, insurance, or investments are not eligible for OPC company registration.",
    "<strong>Conversion to Private Limited Company:</strong> If the OPC's paid-up share capital exceeds 50 lakhs or its average annual turnover surpasses 2 Crores, it must be converted into a private limited company to comply with the regulatory requirements for larger companies.",
];

const registrationProcess = [
    { step: 1, action: "Obtain Digital Signature Certificate (DSC)", description: "The sole promoter must acquire a Class 3 DSC to sign electronic documents on the Ministry of Corporate Affairs (MCA) portal. This can be obtained from government-recognized certifying authorities and typically takes 1–2 business days." },
    { step: 2, action: "Apply for Director Identification Number (DIN)", description: "DIN is a unique identification number for directors. For new companies, DIN can be applied for within the SPICe+ form during the incorporation process." },
    { step: 3, action: "Reserve Company Name via SPICe+ Part A", description: "Propose a unique name for your OPC using Part A of the SPICe+ form. Ensure the name complies with the Companies (Incorporation) Rules, 2014. Upon approval, the name is reserved for 20 days." },
    { step: 4, action: "File SPICe+ Part B for Incorporation", description: "Complete Part B of the SPICe+ form, which integrates various services: <ul><li class='ml-4 list-disc'>Company incorporation</li><li class='ml-4 list-disc'>DIN allotment</li><li class='ml-4 list-disc'>PAN and TAN application</li><li class='ml-4 list-disc'>EPFO and ESIC registration</li><li class='ml-4 list-disc'>Professional Tax registration (for applicable states)</li><li class='ml-4 list-disc'>Opening of company bank account</li><li class='ml-4 list-disc'>GSTIN allotment (optional)</li></ul>This consolidated approach simplifies the registration process." },
    { step: 5, action: "Draft e-MoA (INC-33) and e-AoA (INC-34)", description: "Prepare the electronic Memorandum of Association (e-MoA) and Articles of Association (e-AoA), which define the company's constitution and internal rules. These documents must be digitally signed by the sole promoter." },
    { step: 6, action: "Submit Form INC-3 for Nominee Consent", description: "Appoint a nominee who will take over the OPC in case of the promoter's death or incapacity. The nominee must provide consent using Form INC-3, which should be filed along with the incorporation documents." },
    { step: 7, action: "Obtain Certificate of Incorporation (COI)", description: "Upon successful verification, the Registrar of Companies (ROC) issues the COI, which includes the company's Corporate Identification Number (CIN), PAN, and TAN. These documents are sent via email to the registered address." },
];

const documentsRequired = [
    {
        category: "For the Sole Promoter and Nominee:",
        items: [
            "PAN card",
            "Aadhaar card",
            "Passport-sized photograph",
            "Proof of identity (e.g., Voter ID, Passport, Driving License)",
            "Proof of address (e.g., utility bill not older than 2 months)",
        ]
    },
    {
        category: "For Registered Office:",
        items: [
            "Proof of registered office address (e.g., utility bill)",
            "Rent agreement (if applicable)",
            "No Objection Certificate (NOC) from the property owner",
        ]
    }
];

const feesAndTimeline = [
    "<strong>Government Fees:</strong> No minimum capital requirement; fees vary based on authorized capital and state-specific stamp duty.",
    "<strong>Timeline:</strong> The entire registration process typically takes 7–10 working days, subject to document verification and approval.",
];

const recentAmendments = [
    "<strong>NRI Eligibility:</strong> Non-Resident Indians (NRIs) are now permitted to incorporate OPCs in India.",
    "<strong>Residency Requirement:</strong> The residency period for an Indian citizen to incorporate an OPC has been reduced from 182 days to 120 days.",
    "<strong>Conversion Flexibility:</strong> OPCs can now convert into any other type of company (except Section 8 Company) at any time, removing the earlier mandatory two-year waiting period.",
    "<strong>Removal of Capital and Turnover Limits:</strong> The previous restrictions on paid-up capital (₹50 lakhs) and annual turnover (₹2 crores) for OPCs have been removed, allowing for greater scalability.",
];

const whyChooseUs = [
    "<strong>Expert Guidance:</strong> Our experienced professionals ensure compliance with all legal requirements.",
    "<strong>End-to-End Support:</strong> From DSC acquisition to post-incorporation compliance, we handle it all.",
    "<strong>Transparent Pricing:</strong> No hidden charges; clear breakdown of all costs involved.",
    "<strong>Timely Delivery:</strong> We prioritize prompt processing to get your OPC up and running swiftly.",
];

export default function OpcPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Registrations', href: '/registration' },
            { label: 'One Person Company (OPC) Registration' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-opc">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">One-Person Company (OPC) Registration</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    A One Person Company (OPC) is a unique business structure in India that allows a single individual to operate a corporate entity with limited liability and fewer compliance requirements. Introduced under the Companies Act, 2013, OPCs are ideal for solo entrepreneurs, consultants, and small business owners seeking the benefits of a private limited company without the complexities of multiple shareholders.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">
                    At CACSFinacc, we specialize in simplifying the OPC registration process, ensuring that entrepreneurs can smoothly navigate the complexities of legal formalities with reasonable One person company registration fees. Our experienced team is dedicated to assisting you at every step to register one person company, from document preparation to filing, we offer expert guidance to help you make informed decisions regarding your One Person Company Registration.
                </p>
            </section>
            
            <section id="eligibility">
                <h2 className="text-3xl font-bold font-headline">Eligibility Criteria to Register One Person Company</h2>
                 <p className="mt-4 text-muted-foreground text-justify">
                    Before you go ahead and engage in single person company registration process, it's crucial to understand the specific eligibility criteria and limitations that govern its formation. The Companies Act sets out clear requirements that must be met to ensure that the individual promoting the 1-person company is eligible to do so.
                </p>
                 <ul className="mt-4 space-y-3 list-disc pl-5">
                    {eligibilityCriteria.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>
            
            <section id="registration-process">
              <h2 className="text-3xl font-bold font-headline">Step-by-Step Process for OPC Registration</h2>
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
              <h2 className="text-3xl font-bold font-headline">Documents Required for OPC Registration</h2>
                {documentsRequired.map((doc, index) => (
                    <div key={index} className="mt-4">
                        <h3 className="text-lg font-semibold" dangerouslySetInnerHTML={{ __html: doc.category }}></h3>
                        <ul className="mt-2 space-y-2 list-disc pl-5">
                            {doc.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

             <section id="fees-timeline">
                <h2 className="text-3xl font-bold font-headline">Government Fees & Timeline</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {feesAndTimeline.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>

            <section id="amendments">
                <h2 className="text-3xl font-bold font-headline">Recent Amendments Impacting OPCs (Effective April 1, 2021)</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {recentAmendments.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>
            
            <section id="why-choose-us">
              <h2 className="text-3xl font-bold font-headline">Why Choose CACSFinacc Services?</h2>
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

    