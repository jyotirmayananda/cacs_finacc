
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';
import { Barcode } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Barcode Registration Services | CACS FinAcc Digital',
  description: 'Streamline your inventory and meet retail standards with expert barcode registration services from CACS FinAcc. Get globally recognized GS1 barcodes for your products.',
};

const businessUses = [
    "<strong>Inventory management:</strong> Large departmental stores with extensive product lines use barcode systems to track all aspects of the product cycle, from manufacturing to sales.",
    "<strong>Asset tracking:</strong> With the significant amount of IT assets businesses holds today, barcodes are used to tag and track assets in asset software.",
    "<strong>Returns tracking:</strong> In online shopping, barcodes can be used to track returns. They can also be attached to invoices to facilitate the tracking of payments from customers.",
];

const whoNeedsRegistration = [
    "<strong>Manufacturers:</strong> To uniquely identify products and manage inventory efficiently.",
    "<strong>Exporters:</strong> To comply with international trade requirements.",
    "<strong>Retailers:</strong> To facilitate quick billing and stock management.",
    "<strong>E-commerce Sellers:</strong> Platforms like Amazon and Flipkart mandate barcodes for product listings.",
];

const requiredDocuments = [
    "<strong>Business Registration Proof:</strong> Such as GST certificate, Udyam/MSME registration, or company incorporation certificate.",
    "<strong>PAN Card:</strong> Of the business entity.",
    "<strong>Cancelled Cheque:</strong> For bank account verification.",
    "<strong>Product Details:</strong> Including product name, category, and packaging information.",
    "<strong>Letter of Request:</strong> On company letterhead requesting barcode allotment.",
];

const registrationProcess = [
    { step: 1, action: "Visit GS1 India Website", description: "Navigate to GS1 India and select 'Register for Barcodes'." },
    { step: 2, action: "Choose Barcode Plan", description: "Select between individual GTINs or a company prefix based on the number of products." },
    { step: 3, action: "Fill Application Form", description: "Provide business and product details." },
    { step: 4, action: "Upload Documents", description: "Submit the required documents as specified." },
    { step: 5, action: "Make Payment", description: "Pay the applicable fees based on your business turnover and barcode plan." },
    { step: 6, action: "Verification and Allotment", description: "After verification, GS1 India will issue the barcode numbers and provide access to the DataKart portal for barcode management." },
];

const barcodeBenefits = [
    "<strong>Global Recognition:</strong> GS1 barcodes are accepted in over 100 countries, facilitating international trade.",
    "<strong>Efficient Inventory Management:</strong> Automates stock tracking and reduces errors.",
    "<strong>Enhanced Retail Operations:</strong> Speeds up billing and checkout processes.",
    "<strong>E-commerce Compliance:</strong> Mandatory for listing products on major online marketplaces.",
    "<strong>Improved Product Traceability:</strong> Enables tracking of products throughout the supply chain.",
];

const whyChooseUs = [
    "<strong>Expert Guidance:</strong> Our team provides end-to-end assistance, ensuring accurate and timely registration.",
    "<strong>Customized Solutions:</strong> Tailored services to meet your specific business needs.",
    "<strong>Transparent Pricing:</strong> No hidden charges; clear breakdown of all costs involved.",
    "<strong>Timely Delivery:</strong> We prioritize prompt processing to get your business compliant swiftly.",
];

export default function BarcodeRegistrationPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Registrations', href: '/registration' },
            { label: 'Barcode Registration' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-barcode">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">Barcode Registration</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    A barcode is a pattern of parallel lines of varying width and spacing, along with digits; a machine can read that. It quickly
                    encodes and identifies important product details such as product numbers, serial numbers, and batch numbers.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">
                    Barcodes are widely used for efficient product identification in various industries, including supermarkets, clothing stores, and
                    malls. They offer many advantages, such as reducing errors, cost-effectiveness, time-saving, and simplified inventory
                    management. This global identification system benefits all parties in the supply chain, from manufacturers to logistics and
                    wholesalers, by providing an easy and accurate way to identify products.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">
                    Barcode registration is essential for businesses aiming to streamline inventory management, enhance product traceability,
                    and comply with retail and e-commerce standards. In India, GS1 India is the authorized body responsible for issuing globally
                    recognized barcodes.
                </p>
            </section>

            <section id="how-businesses-use">
                <h2 className="text-3xl font-bold font-headline">How Do Businesses Use Barcodes?</h2>
                 <p className="mt-4 text-muted-foreground text-justify">
                    Barcodes are a widely used technology that provides a unique symbol, typically consisting of parallel lines and a number,
                    which can be scanned to retrieve product information from a database. Businesses utilize barcodes in several ways, including:
                </p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {businessUses.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>

             <section id="types-of-barcodes">
                <h2 className="text-3xl font-bold font-headline">Types of Barcodes</h2>
                 <p className="mt-4 text-muted-foreground text-justify">
                    Below, we explore various types of barcodes commonly used in different industries and applications:
                </p>
                 <ul className="mt-4 space-y-4 list-disc pl-5">
                    <li className='flex items-start gap-4'>
                         <div>
                            <h4 className='font-semibold text-lg'><strong>EAN-13:</strong></h4>
                            <p className="text-muted-foreground text-justify">Known as the International Article Number, which was formerly referred to as the European Article Number, the EAN-13 is a 13-digit barcode extensively used in Europe, India, and other countries. It plays a crucial role in the global retail supply chain, facilitating efficient product tracking and identification.</p>
                        </div>
                    </li>
                     <li className='flex items-start gap-4'>
                         <div>
                            <h4 className='font-semibold text-lg'><strong>UPC-A:</strong></h4>
                            <p className="text-muted-foreground text-justify">The Universal Product Code (UPC-A) is a 12-digit barcode widely used in the United States, Canada, the United Kingdom, Australia, and New Zealand. It is essential for standardizing and tracking retail products across these nations.</p>
                        </div>
                    </li>
                </ul>
            </section>
            
            <section id="who-needs-barcode">
                <h2 className="text-3xl font-bold font-headline">Who Needs Barcode Registration?</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    Barcode registration is crucial for:
                </p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {whoNeedsRegistration.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>
            
            <section id="documents-required">
              <h2 className="text-3xl font-bold font-headline">Documents Required for Barcode Registration</h2>
               <p className="mt-4 text-muted-foreground text-justify">
                To apply for barcode registration, the following documents are typically required:
              </p>
              <ul className="mt-4 space-y-3 list-disc pl-5">
                {requiredDocuments.map((item, index) => (
                    <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
              </ul>
            </section>
            
            <section id="registration-process">
              <h2 className="text-3xl font-bold font-headline">Barcode Registration Process</h2>
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
                <p className="mt-6 text-muted-foreground text-justify">
                The registration process typically takes 7-10 working days after submitting the application and necessary documents.
              </p>
            </section>

             <section id="fees">
                <h2 className="text-3xl font-bold font-headline">Barcode Registration Fees</h2>
                <p className="mt-4 text-muted-foreground text-justify">Please note that the barcode registration fees may vary depending on the specific registration authority and the type of barcode being registered. However, in general, the fees are usually determined based on the following factors:</p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    <li className="text-muted-foreground text-justify"><strong>Turnover of the company:</strong> Companies with a higher turnover may be required to pay higher barcode registration fees.</li>
                     <li className="text-muted-foreground text-justify"><strong>Number of barcodes required:</strong> The fees may also depend on the number of barcodes that must be registered.</li>
                     <li className="text-muted-foreground text-justify"><strong>Subscription period:</strong> The fees may vary based on the subscription period for which the barcodes are being registered.</li>
                </ul>
                 <p className="mt-4 text-muted-foreground text-justify">
                Based on these factors, the fees for barcode registration in India can vary.
              </p>
            </section>

            <section id="benefits">
                <h2 className="text-3xl font-bold font-headline">Benefits of Barcode Registration</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {barcodeBenefits.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>
            
            <section id="why-choose-us">
              <h2 className="text-3xl font-bold font-headline">Why Choose CACSFinacc for Your Barcode Registration?</h2>
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
