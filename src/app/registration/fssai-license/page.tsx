
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';

export const metadata: Metadata = {
  title: 'FSSAI License Services | CACS FinAcc Digital',
  description: 'Obtain your FSSAI State or Central License with expert guidance. Ensure your food business is fully compliant with all food safety regulations.',
};

const benefits = [
    "<strong>Compliance:</strong> Ensures adherence to food safety laws.",
    "<strong>Consumer Trust:</strong> Enhances brand credibility and consumer confidence.",
    "<strong>Business Expansion:</strong> Facilitates smooth expansion and access to new markets.",
    "<strong>Government Support:</strong> Eligibility for government schemes and subsidies.",
];

const documentsRequired = [
    "<strong>A list of Directors, Partners, Proprietor, and Executive members of Society/Trust,</strong> including full addresses and contact details, along with the nomination of the authorized Signatory.",
    "<strong>Photo ID and address proof issued by a government authority</strong> for the Proprietor, Partner, Directors, and Authorized Signatory.",
    "<strong>Proof of possession of premises,</strong> which can include a Sale Deed, Rent Agreement, or Electricity Bill.",
    "<strong>Partnership Deed or Self Declaration for Proprietorship,</strong> Memorandum, and Article of Association related to the constitution of the firm.",
    "<strong>Copy of the Certificate obtained under the Coop Act, 1861.</strong>",
    "<strong>Form IX - Nomination of a Person.</strong>",
];

const whyChooseUs = [
    "<strong>Expert Guidance:</strong> Our experienced professionals ensure compliance with all legal requirements.",
    "<strong>End-to-End Support:</strong> From documentation to obtaining necessary licenses, we handle it all.",
    "<strong>Transparent Pricing:</strong> No hidden charges; clear breakdown of all costs involved.",
    "<strong>Timely Delivery:</strong> We prioritize prompt processing to get your business up and running swiftly.",
];

const penalties = [
  "<strong>Imprisonment:</strong> The offender may face imprisonment for a period that has the potential to extend up to six months.",
  "<strong>Monetary Fine:</strong> In addition to imprisonment, the offender can be imposed with a fine, potentially extending up to five lakh rupees.",
]


export default function FssaiLicensePage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Registrations', href: '/registration' },
            { label: 'FSSAI License' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-fssai-license">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">FSSAI License Registration: State & Central</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    If your business sells food or edible items, adhering to the FSSAI (Food Safety and Standards Authority of India) Act regulations is crucial. This legal framework requires your business to be officially registered with the government and obtain a license from the Food Safety Department. Whether you are a small-scale or large-scale food business engaged in manufacturing, storing, transporting, or distributing food, obtaining FSSAI registration or a license, depending on your business's size and nature, is essential.
                </p>
                 <p className="mt-4 text-muted-foreground text-justify">
                    According to Section 31(1) of the Food Safety and Standards Act, 2006, all Food Business Operators in India must obtain an FSSAI license from the Food Safety & Standards Authority of India.
                </p>
            </section>

            <section id="who-needs-license">
                <h2 className="text-3xl font-bold font-headline">Who Requires an FSSAI License?</h2>
                 <p className="mt-4 text-muted-foreground text-justify">
                    In India, any business engaged in activities such as making, storing, distributing, selling, or importing food products is obligated to secure an FSSAI license. This encompasses restaurants, catering services, food processing factories, food delivery ventures, and online food sellers. Both individuals and companies participating in these operations must obtain an FSSAI license online to operate lawfully within India.
                 </p>
            </section>

             <section id="license-types">
                <h2 className="text-3xl font-bold font-headline">FSSAI License Types</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    An FSSAI License is crucial for enterprises with a turnover exceeding Rs. 12 lakhs and for Food Business Operators (FBOs) engaged in food processing and manufacturing. This license is divided into two primary types: Central FSSAI License and State FSSAI License. The FSSAI license is identified by a 14-digit code with the initial digit 1.
                </p>
                <div className="mt-6 space-y-4">
                    <div>
                        <h3 className="text-2xl font-bold font-headline">State License</h3>
                        <p className="mt-2 text-muted-foreground text-justify">
                            FBOs such as medium-scale processors, manufacturers, traders, marketers, or transporters fall within the jurisdiction of the FSSAI state license, which the respective state government grants. Medium-sized FBOs with an annual turnover surpassing Rs. 12 lakhs but not exceeding Rs. 20 Crores are required to obtain a state license.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold font-headline">Central License</h3>
                        <p className="mt-2 text-muted-foreground text-justify">
                            Large-scale enterprises involved in food processing, transportation, manufacturing, and international trade of food products are obligated to obtain the FSSAI central license. An FBO is classified as a large business if its annual turnover exceeds Rs. 20 Crores, necessitating acquiring the FSSAI central license from the Central Government.
                        </p>
                    </div>
                </div>
            </section>
            
            <section id="benefits">
                <h2 className="text-3xl font-bold font-headline">Benefits of Obtaining an FSSAI License</h2>
                 <ul className="mt-4 space-y-3">
                    {benefits.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>
            
            <section id="documents-required">
              <h2 className="text-3xl font-bold font-headline">Documents Required for FSSAI License</h2>
              <p className="mt-4 text-muted-foreground text-justify">The following documents are mandatory for FSSAI license application:</p>
              <ul className="mt-4 space-y-3">
                {documentsRequired.map((item, index) => (
                    <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
              </ul>
            </section>

             <section id="validity-renewal">
                <h2 className="text-3xl font-bold font-headline">Validity & FSSAI License Renewal</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    The FSSAI License / Registration is issued for 1 to 5 years, as the Food Business Operator chooses. This validity period begins from the date of issuance. The Food Business Operator (FBO) must initiate the renewal process for the license or registration at least 30 days before the current authorization is set to expire.
                </p>
            </section>
            
            <section id="penalties">
                <h2 className="text-3xl font-bold font-headline">Penalties for Non-Compliance</h2>
                <ul className="mt-4 space-y-3">
                    {penalties.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
                <p className="mt-4 text-muted-foreground text-justify">
                    It is important to note that carrying out food-related business activities without the appropriate FSSAI license can lead to legal consequences, including imprisonment and significant financial penalties.
                </p>
            </section>

            <section id="why-choose-us">
              <h2 className="text-3xl font-bold font-headline">Why Choose CACSFinacc for FSSAI Licensing?</h2>
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
