
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';

export const metadata: Metadata = {
  title: 'LLP Registration Services | CACS FinAcc Digital',
  description: 'Register your Limited Liability Partnership (LLP) with ease. Our services cover the entire LLP registration process, ensuring compliance and a smooth start for your business.',
};

const prerequisites = [
    "<strong>Minimum of Two Partners:</strong> Establishing a Limited Liability Partnership in India necessitates a minimum of two partners, with no upper threshold on the maximum number of partners.",
    "<strong>Designated Partners:</strong> Within the partnership framework, at least two selected partners are obligatory, and they must be natural individuals. At least one of these designated partners must also maintain residency in India for an LLP incorporation.",
    "<strong>Nomination for Body Corporate Partner:</strong> If a body corporate assumes the role of a partner, the designation of a natural person must act as its representative.",
    "<strong>Agreed Contribution:</strong> Each partner is required to contribute the shared capital of the LLP, as stipulated and agreed upon.",
    "<strong>Minimum Authorized Capital:</strong> To register LLP, it is mandated to possess an authorized capital of at least Rs.1 lakh.",
    "<strong>Indian Resident Designated Partner:</strong> At least one designated partner of the LLP must hold a resident status in India.",
];

const registrationProcess = [
    { step: 1, action: "Obtain Digital Signature Certificate (DSC)", description: "All designated partners must acquire a Class 3 DSC to sign electronic documents on the MCA portal. This can be obtained from government-recognized certifying authorities and typically takes 1–2 business days." },
    { step: 2, action: "Apply for Designated Partner Identification Number (DPIN)", description: "Each designated partner must obtain a DPIN by filing Form DIR-3 on the MCA portal, attaching the required identity and address proofs. Upon successful submission, the DPIN will be generated." },
    { step: 3, action: "Reserve LLP Name via RUN-LLP", description: "Propose a unique name for your LLP using the 'Reserve Unique Name – LLP' (RUN-LLP) service on the MCA portal. Ensure the name complies with the naming guidelines and is not identical to existing entities." },
    { step: 4, action: "File Form FiLLiP for Incorporation", description: "Once the name is approved, file the Form for Incorporation of LLP (FiLLiP) on the MCA portal. This form includes details like partner information, registered office address, and the LLP agreement. Upon successful verification, the MCA issues a Certificate of Incorporation, officially recognizing your LLP." },
    { step: 5, action: "Draft and File LLP Agreement", description: "Draft the LLP agreement outlining the rights and duties of partners. This must be filed using Form 3 within 30 days of incorporation. The agreement should be signed and notarized on stamp paper, as per the stamp duty prescribed by the respective state government." },
];

const documentsRequired = [
    {
        category: "For Partners:",
        items: [
            "PAN Card",
            "Aadhaar Card",
            "Address proof (Voter ID, Passport, or Driving License)",
            "Bank statement or utility bill (not older than 2 months)",
        ]
    },
    {
        category: "For LLP:",
        items: [
            "Proof of registered office address (Rent Agreement & NOC from owner)",
            "LLP Agreement",
            "DSC for all designated partners",
        ]
    }
];

const feesAndTimeline = [
    "<strong>Government Fees:</strong> No minimum capital requirement; fees vary based on contribution amount.",
    "<strong>Timeline:</strong> The entire registration process typically takes 10–15 working days, subject to document verification and approval.",
];

const recentAmendments = [
    "<strong>Decriminalization of Offences:</strong> Minor, technical, or compliance-related offences have been moved to the In-house Adjudication Mechanism framework with modified penal provisions.",
    "<strong>Introduction of Small LLPs:</strong> A new category aimed at helping smaller businesses, defined by partner contributions not exceeding ₹25 lakhs and annual turnover not exceeding ₹40 lakhs.",
];

const whyChooseUs = [
    "<strong>Expert Guidance:</strong> Our experienced professionals ensure compliance with all legal requirements.",
    "<strong>End-to-End Support:</strong> From DSC acquisition to post-incorporation compliance, we handle it all.",
    "<strong>Transparent Pricing:</strong> No hidden charges; clear breakdown of all costs involved.",
    "<strong>Timely Delivery:</strong> We prioritize prompt processing to get your LLP up and running swiftly.",
];

export default function LlpPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Registrations', href: '/registration' },
            { label: 'LLP Registration' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-llp">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">Limited Liability Partnership (LLP) Registration</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    Limited Liability Partnership (LLP) is a contemporary and advantageous business structure. Blending the strengths of partnership dynamics and the security of limited liability, an LLP registration in India offers a versatile platform for entrepreneurs to collaborate and innovate confidently.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">
                    Establishing a Limited Liability Partnership (LLP) in India offers entrepreneurs a flexible business structure with benefits like limited liability, separate legal identity, and minimal compliance requirements. The Ministry of Corporate Affairs (MCA) has streamlined the incorporation process, making it more efficient and entirely online.
                </p>
            </section>
            
            <section id="prerequisites">
                <h2 className="text-3xl font-bold font-headline">Prerequisites and Eligibility Conditions for LLP Registration</h2>
                <p className="mt-4 text-muted-foreground text-justify">To qualify for the LLP company registration in India, you must adhere to the subsequent criteria:</p>
                 <ul className="mt-4 space-y-3 list-disc pl-5">
                    {prerequisites.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
                 <p className="mt-4 text-muted-foreground text-justify">By satisfying these prerequisites, you can progress with the LLP registration process in India and avail the advantages bestowed by this business structure.</p>
            </section>
            
            <section id="registration-process">
              <h2 className="text-3xl font-bold font-headline">Step-by-Step Process for LLP Registration</h2>
              <div className="mt-6 space-y-6">
                {registrationProcess.map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                     <div className="flex-shrink-0 font-bold text-lg text-foreground">{item.step}.</div>
                     <div>
                        <h4 className="font-semibold text-lg" dangerouslySetInnerHTML={{ __html: `<strong>${item.action}</strong>` }}></h4>
                        <p className="text-muted-foreground text-justify">{item.description}</p>
                     </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="documents-required">
              <h2 className="text-3xl font-bold font-headline">Documents Required for LLP Registration</h2>
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
                <h2 className="text-3xl font-bold font-headline">Recent Amendments Impacting LLPs (Effective April 1, 2022)</h2>
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
