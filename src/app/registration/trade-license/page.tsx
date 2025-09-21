
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';

export const metadata: Metadata = {
  title: 'Trade License Registration Services | CACS FinAcc Digital',
  description: 'Obtain your Trade License from the local municipal corporation with our expert assistance. We handle the entire application process for a hassle-free experience.',
};

const requiredBusinesses = [
    "<strong>Shops and Establishments:</strong> Retail stores, restaurants, hotels, theatres, amusement parks, and similar establishments engaged in trading or commercial activities typically need a trading license in India from the local municipal corporation.",
    "<strong>Food Establishments:</strong> Restaurants, cafes, food stalls, food processing units, and catering services that prepare, sell, or distribute food and beverages often require a online trading license along with an FSSAI license.",
    "<strong>Manufacturing Units:</strong> Factories, workshops, and industrial plants involved in manufacturing and production are usually required to obtain a trade license to ensure safety and environmental regulations compliance.",
    "<strong>Healthcare Facilities:</strong> Hospitals, clinics, nursing homes, and diagnostic centres need a trade license to ensure they meet the necessary standards for providing healthcare services.",
    "<strong>Entertainment and Leisure Activities:</strong> Cinema halls, multiplexes, video game parlours, gyms, spas, and health clubs involved in entertainment and leisure activities typically require a online trading license for public safety and regulatory compliance.",
    "<strong>Transport Services:</strong> Auto rickshaws, taxis, cab aggregators, and goods carriers offering transportation services may need a trade license for legal operation.",
    "<strong>Construction and Real Estate:</strong>Real estate developers, construction companies, and contractors may require a trade license to conduct their activities within specific municipal limits.",
    "<strong>Fireworks and Explosives:</strong> Businesses engaged in the manufacturing, storage, sale, or use of fireworks and explosive materials are subject to strict regulations and usually need a online trading license.",
    "<strong>Liquor Establishments:</strong> Liquor shops, bars, and pubs that sell and distribute alcoholic beverages require a trade license and permits from relevant authorities.",
    "<strong>Street Vendors and Hawkers:</strong> Individuals or groups engaged in street vending or hawking activities may need a trade license or specific vendor license from local authorities.",
];

const licenseTypes = [
    "<strong>Type A:</strong> Required for all food service establishments.",
    "<strong>Type B:</strong> Issued to units in manufacturing and processing that utilize machinery and electricity, such as milling units.",
    "<strong>Type C:</strong> Provided for high-risk activities, including producing fireworks and wood and timber structures.",
];

const registrationProcess = [
    { 
        step: 1, 
        action: "Determine the Type of License Required", 
        description: "Identify the appropriate license category based on your business activity and location." 
    },
    { 
        step: 2, 
        action: "Gather Necessary Documents", 
        description: "Ensure all required documents are prepared and up-to-date." 
    },
    { 
        step: 3, 
        action: "Apply Online via the Municipal Corporation Portal", 
        description: "<ul class='list-disc pl-5 mt-2'><li>Visit the official portal of your local municipal corporation.</li><li>Register and fill out the application form.</li><li>Upload the necessary documents.</li><li>Pay the applicable fees online.</li></ul>" 
    },
    { 
        step: 4, 
        action: "Inspection and Approval", 
        description: "<ul class='list-disc pl-5 mt-2'><li>The application is reviewed by municipal officials.</li><li>An inspection may be conducted to verify the premises.</li><li>Upon approval, the Trade License certificate is issued.</li></ul>" 
    },
];

const documentsRequired = [
    "<strong>Identity Proof:</strong> Aadhaar Card, PAN Card, or Voter ID of the proprietor/partners/directors.",
    "<strong>Address Proof:</strong> Utility bills, rental agreement, or property tax receipt of the business premises.",
    "<strong>Business Constitution Certificate:</strong> Partnership deed, Certificate of Incorporation, or other relevant documents.",
    "<strong>No Objection Certificate (NOC):</strong> From the property owner or neighbors, if applicable.",
    "<strong>Occupancy Certificate:</strong> If available.",
    "<strong>Photographs:</strong> Recent passport-sized photographs of the applicant.",
];

const recentAmendments = [
    "<strong>Mandatory Online Renewal:</strong> The Bruhat Bengaluru Mahanagara Palike (BBMP) has mandated online renewal of Trade Licenses for the year 2025-26. Traders must renew their licenses through the official BBMP portal. Late renewals post-February 2025 will attract penalties ranging from 25% to 100%.",
    "<strong>Separate License for Tobacco Sales:</strong> BBMP plans to implement a separate Trade License for tobacco product sales to regulate and monitor tobacco usage in the city. Traders can apply for this license through the BBMP website.",
    "<strong>Flexible Renewal Periods:</strong> Traders now have the option to renew their Trade Licenses for a period ranging from one to five years, based on their preference. The renewal fee will be calculated accordingly.",
];

const feesAndTimeline = [
    "<strong>Fees:</strong> The Trade License fee varies depending on the nature and size of the business and the local municipal corporation's regulations.",
    "<strong>Timeline:</strong> The processing time for a Trade License application typically ranges from 7 to 15 days, depending on the efficiency of the municipal corporation.",
];

const benefits = [
    "<strong>Legal Compliance:</strong> Ensures adherence to municipal laws and regulations.",
    "<strong>Business Credibility:</strong> Enhances trust among customers and stakeholders.",
    "<strong>Operational Legitimacy:</strong> Provides legal authorization to conduct business activities.",
    "<strong>Avoidance of Penalties:</strong> Prevents legal actions and fines due to non-compliance.",
];

const whyChooseUs = [
    "<strong>Expert Guidance:</strong> Our experienced professionals ensure compliance with all legal requirements.",
    "<strong>End-to-End Support:</strong> From documentation to obtaining necessary licenses, we handle it all.",
    "<strong>Transparent Pricing:</strong> No hidden charges; clear breakdown of all costs involved.",
    "<strong>Timely Delivery:</strong> We prioritize prompt processing to get your business up and running swiftly.",
];

export default function TradeLicensePage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Registrations', href: '/registration' },
            { label: 'Trade License' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-trade-license">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">Trade License Registration in India (2025)</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    Obtaining a Trade License is a legal requirement for businesses operating in India. It ensures that your business complies with local municipal laws and regulations. This guide provides an updated overview of the Trade License registration process, recent amendments, and essential documentation required in 2025.
                </p>
            </section>

            <section id="who-can-issue">
                <h2 className="text-3xl font-bold font-headline">Who Can Issue a Trade License?</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    Trade licenses are typically issued by the licensing department of the Municipal Corporation, which encompasses various departments such as industries, engineering, and health. These departments grant permission through a formal document or trade license certificate, allowing businesses to operate within their jurisdiction. The issuance process may vary from state to state, depending on the rules and regulations of local government agencies, specifically the Municipal Corporation.
                </p>
            </section>
            
            <section id="businesses-requiring-license">
                <h2 className="text-3xl font-bold font-headline">Businesses Requiring Trade License Registration</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {requiredBusinesses.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>
            
            <section id="license-types">
                <h2 className="text-3xl font-bold font-headline">Types of Trade Licenses Issued by the Municipality</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {licenseTypes.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>

            <section id="registration-process">
              <h2 className="text-3xl font-bold font-headline">Steps for Trade License Registration</h2>
              <div className="mt-6 space-y-6">
                {registrationProcess.map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                     <div className="flex-shrink-0 font-bold text-lg text-foreground">{item.step}.</div>
                     <div>
                        <h4 className="font-semibold text-lg"><strong>{item.action}</strong></h4>
                        <div className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item.description }}></div>
                     </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="documents-required">
              <h2 className="text-3xl font-bold font-headline">Documents Required for Trade License Registration</h2>
              <ul className="mt-4 space-y-3 list-disc pl-5">
                {documentsRequired.map((item, index) => (
                    <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
              </ul>
              <p className="mt-4 text-muted-foreground text-justify italic">
                <strong>Note:</strong> Additional documents may be required based on the type of business and local municipal regulations.
              </p>
            </section>

            <section id="amendments">
                <h2 className="text-3xl font-bold font-headline">Recent Amendments in Trade License Regulations (2025)</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {recentAmendments.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>
            
            <section id="fees-timeline">
                <h2 className="text-3xl font-bold font-headline">Government Fees & Timeline</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {feesAndTimeline.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>

            <section id="benefits">
                <h2 className="text-3xl font-bold font-headline">Benefits of Obtaining a Trade License</h2>
                 <ul className="mt-4 space-y-3 list-disc pl-5">
                    {benefits.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>
            
            <section id="why-choose-us">
              <h2 className="text-3xl font-bold font-headline">Why Choose CACSFinacc?</h2>
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
