
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { QuoteForm } from '@/components/quote-form';

export const metadata: Metadata = {
  title: 'Sole Proprietorship Registration Services | CACS FinAcc Digital',
  description: 'Start your business as a Sole Proprietor with our simple and affordable registration services. Ideal for individual entrepreneurs and small businesses.',
};

const requiredDocuments = [
    "<strong>Identity Proof:</strong> Aadhaar Card, PAN Card",
    "<strong>Address Proof:</strong> Utility bills, rental agreement",
    "<strong>Passport-size Photographs:</strong> 2-3 recent photographs",
    "<strong>Business Address Proof:</strong> Utility bill, rent agreement, or property tax receipt",
    "<strong>No Objection Certificate (NOC):</strong> From the property owner if the premises are rented",
    "<strong>Bank Account Details:</strong> Recent bank statement or a cancelled cheque",
];

const licensesAndRegistrations = [
    { 
        title: "Choose a Business Name", 
        description: "Select a unique and meaningful name for your business that isn't already trademarked or registered. This helps in establishing a distinct brand identity." 
    },
    { 
        title: "Obtain a PAN Card", 
        description: "A Permanent Account Number (PAN) is essential for taxation and financial transactions. If you don't have one, apply through the Income Tax Department." 
    },
    { 
        title: "Link PAN with Aadhaar", 
        description: "Ensure your PAN is linked with your Aadhaar for seamless verification and compliance with government regulations." 
    },
    { 
        title: "Register under Udyam (MSME)", 
        description: "Registering under the Ministry of Micro, Small & Medium Enterprises (MSME) through the Udyam portal provides official recognition and access to various benefits like easier loan approvals and tax advantages." 
    },
    { 
        title: "Obtain GST Registration (If Applicable)", 
        description: "If your annual turnover exceeds ₹20 lakh (₹10 lakh for special category states), GST registration becomes mandatory. It enables tax collection, input credit claims, and is essential for interstate and B2B transactions." 
    },
    { 
        title: "Acquire Shop & Establishment License", 
        description: "Depending on your state regulations, obtain a Shop & Establishment license from the local authority. This is mandatory in many states and is essential for opening a business bank account." 
    },
    { 
        title: "Open a Business Bank Account", 
        description: "With the above documents, open a current account in your business name to manage financial transactions professionally." 
    },
];

const feesAndTimeline = [
    "<strong>Government Fees:</strong> Minimal; varies based on the registrations required.",
    "<strong>Timeline:</strong> The entire registration process typically takes 7–10 working days, subject to document verification and approval.",
];

const recentAmendments = [
    "<strong>Digital MSME Registration:</strong> The Udyam registration process has been made entirely online, simplifying the procedure for entrepreneurs.",
    "<strong>GST Threshold Updates:</strong> The GST registration threshold remains at ₹20 lakh for most states and ₹10 lakh for special category states.",
    "<strong>Easier Bank Account Opening:</strong> Banks now accept Udyam registration as valid proof for opening current accounts, streamlining the process for sole proprietors.",
];

const whyChooseUs = [
    "<strong>Expert Guidance:</strong> Our experienced professionals ensure compliance with all legal requirements.",
    "<strong>End-to-End Support:</strong> From documentation to obtaining necessary licenses, we handle it all.",
    "<strong>Transparent Pricing:</strong> No hidden charges; clear breakdown of all costs involved.",
    "<strong>Timely Delivery:</strong> We prioritize prompt processing to get your business up and running swiftly.",
];

export default function SoleProprietorshipPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Registrations', href: '/registration' },
            { label: 'Sole Proprietorship' },
          ]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            
            <section id="what-is-sole-proprietorship">
                <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">Sole Proprietorship Registration in India</h1>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                    A Sole Proprietorship is the simplest and most common form of business structure in India, ideal for individual entrepreneurs starting small businesses. While it doesn't require mandatory central registration, obtaining specific operational registrations is essential for legal recognition and smooth operations. One pivotal tax registration is the GST (Goods and Services Tax) Registration, which must be secured under the proprietor's name to formalize the business's proprietorship status. CACSFinacc helps you to register proprietorship firm online easily and effortlessly.
                </p>
            </section>
            
            <section id="essential-licenses">
                <h2 className="text-3xl font-bold font-headline">Essential Licenses and Registrations for Proprietorships</h2>
                <p className="mt-4 text-muted-foreground">To register proprietorship firm online and run in India, you need important licenses and registrations, including:</p>
                <div className="mt-6 space-y-6">
                    {licensesAndRegistrations.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                         <div className="flex-shrink-0 font-bold text-lg text-black">{index + 1}.</div>
                         <div>
                            <h4 className="font-semibold text-lg" dangerouslySetInnerHTML={{ __html: `<strong>${item.title}</strong>` }}></h4>
                            <p className="text-muted-foreground text-justify">{item.description}</p>
                         </div>
                      </div>
                    ))}
                </div>
            </section>
            
            <section id="documents-required">
              <h2 className="text-3xl font-bold font-headline">Documents Required for Sole Proprietorship Registration</h2>
              <ul className="mt-4 space-y-3 list-disc pl-5">
                {requiredDocuments.map((item, index) => (
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
            
            <section id="amendments">
                <h2 className="text-3xl font-bold font-headline">Recent Amendments Impacting Sole Proprietorships (Effective 2025)</h2>
                <ul className="mt-4 space-y-3 list-disc pl-5">
                    {recentAmendments.map((item, index) => (
                        <li key={index} className="text-muted-foreground text-justify" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ul>
            </section>

            <section id="why-choose-us">
              <h2 className="text-3xl font-bold font-headline">Why Choose CACSFinacc for Your Sole Proprietorship Registration?</h2>
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
