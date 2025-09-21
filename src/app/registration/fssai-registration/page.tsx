
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BadgeCheck, FileText, ShieldCheck, Star, ThumbsUp, Building2, UserCheck, Utensils, Warehouse, Truck, Users, Hotel, ShoppingCart, Globe, FileUp, FileSignature } from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';

export const metadata: Metadata = {
  title: 'FSSAI Registration Services | CACS FinAcc Digital',
  description: 'Comprehensive FSSAI registration services for food business operators in India. Ensure compliance and build consumer trust with expert guidance from CACS FinAcc.',
};

const keyFeatures = [
    "<strong>14-Digit Registration Number:</strong> Every FSSAI Registration or License comes with a 14-digit number that must be displayed on all food packages. This number provides vital information about the food product’s origin, including the state where it was assembled and the producer’s permit details.",
    "<strong>Quality Assurance:</strong> By compelling Food Business Operators (FBOs) to display their registration details, FSSAI ensures that accountability for quality and safety rests squarely on the entity handling the food.",
    "<strong>Applicability:</strong> FSSAI Registration is compulsory for all FBOs, from small-scale vendors to large manufacturing units, though the specific requirement—Registration vs. License—depends on the size and nature of the business.",
];

const whoNeedsRegistration = [
    "Petty retailers, Retail Shops, Snack shops, Confectionery or Bakery shops, etc",
    "Temporary stalls, fixed stalls, or food premises involved in preparing, storing, distributing, and selling food products.",
    "Hawkers selling packaged or freshly prepared food by traveling from one location to another.",
    "Dairy Units, including Milk Chilling Units, Petty Milkmen, and Milk Vendors",
    "Slaughtering house",
    "Fish Processing, Meat Processing, and units",
    "All Food Manufacturing units that include Repacking food",
    "Vegetable Oil Processing Units",
    "Proprietary food and Novel food",
    "Cold/refrigerated storage facility",
    "Transporter of food products, having several specialised vehicles like insulated refrigerated vans/wagons, milk tankers, food wagons, food trucks, etc",
    "Wholesalers, suppliers, distributors, and marketers of food products",
    "Hotels, Restaurants, and Bars",
    "Canteens and Cafeteria, including mid-day meal canteens",
    "Food Vending Agencies and Caterers",
    "Dhaba, PG provides food, Banquet hall with food catering arrangements, Home-based canteen, and Food stalls at fairs or religious institutions.",
    "Importers and Exporters of food items and food ingredients",
    "E-Commerce food suppliers, including cloud kitchens",
];

const registrationTypes = [
    { title: "FSSAI Basic Registration", turnover: "less than INR 12 lakh", form: "Form A", description: "This registration is generally for small-scale or startup food ventures, such as small retailers or home-based food producers." },
    { title: "FSSAI State License", turnover: "between INR 12 lakh and INR 20 crore", form: "Form B", description: "Medium-sized ventures—like mid-level restaurants, small to mid-scale manufacturers, and distributors—typically require the State License." },
    { title: "FSSAI Central License", turnover: "exceeding INR 20 crore", form: "Form B", description: "Large-scale food businesses—such as major manufacturers, major retailers, and large distributors—must apply for the Central License." },
];

const requiredDocuments = [
    "<strong>Proof:</strong> PAN Card, Aadhaar Card, or Voter ID of the proprietor/partners/directors.",
    "<strong>Address Proof:</strong> Utility bills, rental agreement, or property tax receipt of the business premises.",
    "<strong>Business Constitution Certificate:</strong> Partnership deed, Certificate of Incorporation, or other relevant documents.",
    "<strong>Food Safety Management Plan:</strong> Detailed plan outlining safety measures.",
    "<strong>List of Food Products:</strong> Items to be manufactured or sold.",
    "<strong>Form B:</strong> Duly completed and signed.",
    "<strong>NOC from Municipality or Local Body:</strong> If applicable.",
];

const benefits = [
    "<strong>Legal Compliance:</strong> Ensures adherence to food safety laws.",
    "<strong>Consumer Trust:</strong> Enhances brand credibility and consumer confidence.",
    "<strong>Business Expansion:</strong> Facilitates smooth expansion and access to new markets.",
    "<strong>Government Support:</strong> Eligibility for government schemes and subsidies.",
];

const whyChooseUs = [
    "<strong>Expert Guidance:</strong> Our experienced professionals ensure compliance with all legal requirements.",
    "<strong>End-to-End Support:</strong> From documentation to obtaining necessary licenses, we handle it all.",
    "<strong>Transparent Pricing:</strong> No hidden charges; clear breakdown of all costs involved.",
    "<strong>Timely Delivery:</strong> We prioritize prompt processing to get your business up and running swiftly.",
];

export default function FssaiRegistrationPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Registrations', href: '/registration' },
            { label: 'FSSAI Registration' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-fssai">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">FSSAI Registration in India</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    FSSAI Registration is a compulsory authorisation for individuals or entities involved in the manufacturing, processing, storage, distribution, or sale of food products in India. It is governed by the Food Safety & Standards (Licensing and Registration of Food Business) Regulations, 2011. This registration differs from an FSSAI License based on the size and nature of the business.
                </p>
                <p className="mt-4 text-muted-foreground text-justify">
                    Ensuring food safety and compliance is paramount for any food business operator (FBO) in India. The Food Safety and Standards Authority of India (FSSAI) mandates registration or licensing for all entities involved in the food sector. This guide provides an updated overview of the FSSAI registration process, recent amendments, and essential documentation required in 2025.
                </p>
            </section>

            <section id="key-features">
                <h2 className="text-3xl font-bold font-headline">Key Features of FSSAI Registration</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {keyFeatures.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>
            
            <section id="who-needs-fssai">
                <h2 className="text-3xl font-bold font-headline">Food Business Operators Who Require FSSAI Registration</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    The Food Business Operators (FBOs) carrying on the following kinds of food business must have an FSSAI License/Registration:
                </p>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {whoNeedsRegistration.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify"><strong>{item}</strong></li>
                    ))}
                </ul>
            </section>
            
            <section id="types-of-registration">
                <h2 className="text-3xl font-bold font-headline">Types of FSSAI Registration</h2>
                <p className="mt-4 text-muted-foreground text-justify">
                    FSSAI registrations are categorized based on a food business’s turnover, production capacity, and other operational details. Businesses must choose from three main types of registrations/licenses—Basic, State, or Central—depending on their turnover and production scope.
                </p>
                <div className="mt-6 grid md:grid-cols-3 gap-6">
                    {registrationTypes.map((type) => (
                        <Card key={type.title}>
                            <CardHeader>
                                <CardTitle className="font-headline">{type.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm"><strong>Who Needs It:</strong> FBOs with an annual turnover of {type.turnover}.</p>
                                <p className="text-muted-foreground text-sm mt-2"><strong>Registration Form:</strong> {type.form}</p>
                                <p className="text-muted-foreground text-sm mt-2"><strong>Key Point:</strong> {type.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <section id="documents-required">
              <h2 className="text-3xl font-bold font-headline">Documents Required for FSSAI Registration</h2>
              <ul className="mt-4 space-y-3 list-disc pl-5">
                {requiredDocuments.map((item, index) => (
                    <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
              </ul>
              <p className="mt-4 text-muted-foreground text-justify italic">
                <strong>Note:</strong> Additional documents may be required based on the type of license and nature of the business.
              </p>
            </section>

            <section id="benefits">
                <h2 className="text-3xl font-bold font-headline">Benefits of FSSAI Registration</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {benefits.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>
            
            <section id="why-choose-us">
              <h2 className="text-3xl font-bold font-headline">Why Choose CACSFinacc for Your FSSAI Registration?</h2>
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
