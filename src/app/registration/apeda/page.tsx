
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'APEDA Registration Services | CACS FinAcc Digital',
  description: 'Expert guidance on APEDA registration for exporting agricultural and processed food products. Learn the process, documents required, and benefits with CACS FinAcc.',
};

const whoNeedsRegistration = [
    "<strong>Exporters of Scheduled Products:</strong> Such as fruits, vegetables, meat, dairy products, and processed foods.",
    "<strong>Manufacturers and Processors:</strong> Engaged in the production of scheduled products for export.",
    "<strong>Merchant Exporters:</strong> Trading in agricultural and processed food products internationally.",
]

const scheduledProductsFirst = [
    "<strong>Fruits, Vegetables, and their Products</strong>",
    "<strong>Meat and Meat Products</strong>",
    "<strong>Poultry and Poultry Products</strong>",
    "<strong>Dairy Products</strong>",
    "<strong>Chocolates, Cocoa, and its Products</strong>",
    "<strong>Cereals and Cereal Products</strong>",
    "<strong>Groundnuts, Peanuts, and Walnuts</strong>",
    "<strong>Pickles, Chutneys, and Papads</strong>",
    "<strong>De-oiled Rice Bran</strong>",
    "<strong>Alcoholic and Non-Alcoholic Beverages</strong>",
    "<strong>Green Pepper in Brine</strong>",
    "<strong>Guar Gum</strong>",
    "<strong>Floriculture and Floriculture Products</strong>",
    "<strong>Herbal and Medicinal Plants</strong>",
    "<strong>Confectionery, Biscuits, and Bakery Products</strong>",
    "<strong>Honey, Jaggery, and Sugar Products</strong>",
];

const whyRequired = [
    "<strong>Legal Compliance:</strong> Ensures adherence to government regulations for exporting scheduled products.",
    "<strong>Market Access:</strong> Acts as a gateway to international markets, allowing legal export of products.",
    "<strong>Financial Assistance:</strong> Eligibility for APEDA’s financial schemes to reduce costs related to packaging, branding, marketing, and infrastructure development.",
    "<strong>Quality Assurance:</strong> Access to guidelines and training programs to enhance product quality and competitiveness.",
    "<strong>Market Development Support:</strong> Assistance in promoting products globally through trade fairs, buyer-seller meets, and other promotional activities.",
    "<strong>Information Access:</strong> Updates on international trade policies, market intelligence, and emerging opportunities.",
    "<strong>Certification and Accreditation:</strong> Prerequisite for obtaining other necessary certifications for specific markets.",
    "<strong>Export Facilitation:</strong> Streamlines export procedures by providing necessary support and guidance.",
    "<strong>Regulatory Benefits:</strong> Access to government initiatives aimed at boosting exports, including tax exemptions and subsidies.",
    "<strong>Dispute Resolution:</strong> Acts as an intermediary in resolving disputes between exporters and importers.",
];

const documentsForAll = [
    "<strong>Import-Export Code (IEC):</strong> Issued by the Directorate General of Foreign Trade (DGFT).",
    "<strong>Bank Certificate:</strong> Confirming the applicant's account details.",
    "<strong>Bank Account Statement:</strong> For the last two months.",
    "<strong>Cancelled Cheque:</strong> Of the applicant's bank account.",
    "<strong>Business Registration Proof:</strong> Such as partnership deed, incorporation certificate, or registration certificate.",
    "<strong>Address Proof:</strong> Of the business premises.",
    "<strong>Duly Signed APEDA RCMC Registration Form.</strong>",
];

const documentsForManufacturer = [
    "<strong>Central FSSAI Registration (Food Safety and Standards Authority of India)</strong>",
    "<strong>DIS/SIA Certificate issued by the Department of Horticulture for food products listed under the APEDA Act</strong>",
    "<strong>Certificate of Incorporation of the firm (including partnership deed if applicable)</strong>",
    "<strong>No Objection Certificate (NOC) from the Pollution Control Board</strong>",
    "<strong>MSME Certificate (if applicable)</strong>",
    "<strong>Halal Certificate (if required)</strong>",
];

const registrationProcess = [
    { step: 1, action: "Visit the APEDA Website", description: "Navigate to the APEDA official website." },
    { step: 2, action: "Register/Login", description: "Create an account or log in using your credentials." },
    { step: 3, action: "Fill Application Form", description: "Provide details about your business, such as name, address, IEC, and bank details." },
    { step: 4, action: "Upload Required Documents", description: "Ensure all necessary documents are uploaded in the specified format." },
    { step: 5, action: "Pay Application Fee", description: "The application fee is ₹5,000 (excluding GST), payable through the online portal." },
    { step: 6, action: "Submit Application", description: "After verifying all details, submit the application." },
    { step: 7, action: "Receive Registration Certificate", description: "Upon successful verification, the APEDA Registration-Cum-Membership Certificate (RCMC) will be issued electronically within 7 working days." },
];

const penalties = [
    "<strong>Imprisonment:</strong> Up to six months for violating or attempting to breach provisions.",
    "<strong>Fines:</strong> Rs.1,000 for initial offences and an additional Rs.50 per day for repeat offences from the date of the first infringement until conviction.",
    "<strong>Corporate Liability:</strong> If a company commits an offence, every person in charge at the time shall be deemed guilty along with the company and punished accordingly.",
];

const cancellationReasons = [
    "<strong>Non-Activity:</strong> Failure to conduct the export business of scheduled food products for 12 consecutive months.",
    "<strong>Incorrect Information:</strong> Providing false or misleading information during the registration process.",
    "<strong>Regulatory Violations:</strong> Non-compliance with APEDA rules and regulations.",
]

const feesAndTimeline = [
    "<strong>Application Fee:</strong> ₹5,000 (excluding GST).",
    "<strong>Processing Time:</strong> Typically, 7 working days after submission and verification.",
];

const benefitsOfApeda = [
    "<strong>Legal Compliance:</strong> Mandatory for exporting scheduled products from India.",
    "<strong>Market Development Assistance:</strong> Eligibility for financial assistance schemes for market development.",
    "<strong>Export Promotion:</strong> Access to various promotional schemes and events organized by APEDA.",
    "<strong>Quality Assurance:</strong> Guidance on improving product quality and packaging standards.",
    "<strong>Global Market Access:</strong> Facilitates entry into international markets with recognized certification.",
];

const whyChooseUs = [
    "<strong>Expert Guidance:</strong> Our experienced professionals ensure compliance with all legal requirements.",
    "<strong>End-to-End Support:</strong> From documentation to obtaining the APEDA certificate, we handle it all.",
    "<strong>Transparent Pricing:</strong> No hidden charges; clear breakdown of all costs involved.",
    "<strong>Timely Delivery:</strong> We prioritize prompt processing to get your business up and running swiftly.",
];

export default function ApedaPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Registrations', href: '/registration' },
            { label: 'APEDA Registration' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-apeda">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">APEDA Registration</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    The Agricultural and Processed Food Products Export Development Authority (APEDA) registration is mandatory for exporters dealing with scheduled products in India. Established under the APEDA Act, this registration facilitates the export of agricultural and processed food products, ensuring compliance with international standards.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">
                    APEDA Registration is an essential certificate for Indian importers and exporters seeking to access international markets in the agricultural and processed food sectors. It signifies regulatory compliance and provides access to an array of incentives and opportunities designed to propel exports and catalyze growth.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">
                    In a world increasingly valuing organic, authentic, and diverse food products, APEDA Registration has become an indispensable asset for Indian exporters.
                </p>
            </section>

            <section id="who-needs-apeda">
                <h2 className="text-3xl font-bold font-headline">Who Needs APEDA Registration?</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {whoNeedsRegistration.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>
            
            <section id="scheduled-products">
                 <h2 className="text-3xl font-bold font-headline">Scheduled Food Products Under the APEDA Act</h2>
                 <div className="mt-6 grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className='font-headline font-semibold text-lg'><strong>First Schedule</strong></h3>
                        <ul className="mt-2 space-y-3 text-muted-foreground list-disc pl-5">
                        {scheduledProductsFirst.map((product, index) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: product }}></li>
                        ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-headline font-semibold text-lg'><strong>Second Schedule</strong></h3>
                        <ul className="mt-2 space-y-3 text-muted-foreground list-disc pl-5">
                            <li>
                                <strong>Basmati Rice</strong>
                            </li>
                        </ul>
                    </div>
                 </div>
                 <p className="mt-4 text-muted-foreground">By obtaining APEDA Registration, exporters of these scheduled products can ensure compliance with export regulations and gain access to various benefits offered by APEDA.</p>
            </section>
            
            <section id="why-apeda-required">
              <h2 className="text-3xl font-bold font-headline">Why APEDA Registration is Required?</h2>
              <ul className="mt-4 space-y-3 list-disc pl-5">
                {whyRequired.map((item, index) => (
                    <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
              </ul>
            </section>

            <section id="timeframe">
                <h2 className="text-3xl font-bold font-headline">Timeframe for Obtaining APEDA Registration</h2>
                <p className="mt-4 text-muted-foreground">Exporters are expected to acquire APEDA Registration within one month of the incorporation of their business. Timely registration ensures uninterrupted access to APEDA benefits and compliance with export regulations.</p>
            </section>

            <section id="apeda-documents">
                <h2 className="text-3xl font-bold font-headline">APEDA Registration Documents</h2>
                <p className="mt-4 text-muted-foreground">Exporters must submit the following documents when applying for APEDA license Registration:</p>
                <Card className="mt-6">
                    <CardContent className="p-0">
                        <Accordion type="single" collapsible defaultValue="item-1">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="p-6 text-lg font-headline">For All Exporters</AccordionTrigger>
                                <AccordionContent className="px-6 pb-6">
                                    <p className="mb-4 font-semibold">To apply for APEDA registration, the following documents are typically required:</p>
                                    <ul className="space-y-3 list-disc pl-5">
                                    {documentsForAll.map((doc, index) => (
                                        <li key={index} className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: doc }}></li>
                                    ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className="border-b-0">
                                <AccordionTrigger className="p-6 text-lg font-headline">Additional for Manufacturer Exporters</AccordionTrigger>
                                <AccordionContent className="px-6 pb-6">
                                    <ul className="space-y-3 list-disc pl-5">
                                    {documentsForManufacturer.map((doc, index) => (
                                        <li key={index} className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: doc }}></li>
                                    ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>
            </section>
            
            <section id="registration-process">
              <h2 className="text-3xl font-bold font-headline">APEDA Registration Process</h2>
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
            </section>

             <section id="validity-renewal">
                <h2 className="text-3xl font-bold font-headline">Validity and APEDA Registration Renewal Online</h2>
                <p className="mt-4 text-muted-foreground">The Registration-Cum-Membership Certificate (RCMC) issued by APEDA is valid for a period of five years from the date of issuance. After this duration, the RCMC APEDA license is auto-renewed every five years upon the submission of the required renewal fee. Exporters are not required to submit any additional documents or undergo further formalities for the APEDA renewal process once the fee is paid. This APEDA online registration procedure ensures a seamless renewal experience, allowing exporters to maintain their registration without administrative delays.</p>
            </section>

             <section id="penalties">
                <h2 className="text-3xl font-bold font-headline">Penalties for Non-Compliance with the APEDA Act</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {penalties.map((item, index) => (
                        <li key={index} className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>

            <section id="cancellation">
                <h2 className="text-3xl font-bold font-headline">Cancellation of APEDA (RCMC) Registration</h2>
                <p className="mt-4 text-muted-foreground">APEDA License Registration can be cancelled under the following conditions as specified in Section 11 of the APEDA Act:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {cancellationReasons.map((item, index) => (
                        <li key={index} className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
                <p className="mt-4 text-muted-foreground">Maintaining active business operations and adhering to regulatory guidelines are crucial to retaining your APEDA Registration and its associated benefits.</p>
            </section>

            <section id="fees-timeline">
                <h2 className="text-3xl font-bold font-headline">Government Fees & Timeline</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {feesAndTimeline.map((item, index) => (
                        <li key={index} className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>

            <section id="benefits">
                <h2 className="text-3xl font-bold font-headline">Benefits of APEDA Registration</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {benefitsOfApeda.map((item, index) => (
                        <li key={index} className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>
            
            <section id="why-choose-us">
              <h2 className="text-3xl font-bold font-headline">Why Choose CACSFinacc for Your APEDA Registration?</h2>
              <ul className="mt-4 space-y-3 list-disc pl-5">
                    {whyChooseUs.map((item, index) => (
                        <li key={index} className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>

          </div>

          <aside className="lg:col-span-1 space-y-8 sticky top-24">
            <Card className="bg-muted">
              <CardHeader>
                <CardTitle className="font-headline uppercase">Get APEDA Registered</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Let our experts guide you through every step of the APEDA registration process for a hassle-free experience.
                </p>
                <Button asChild className="w-full" size="lg">
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </CardContent>
            </Card>
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
