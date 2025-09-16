import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'GST Returns Filing Services',
  description: 'Ensure timely and accurate GST return filings with our expert services. We handle all types of GST returns to keep your business compliant.',
};

const gstReturnTypes = [
  'GSTR-1: For outward supplies',
  'GSTR-3B: Monthly summary return',
  'GSTR-4: For composition scheme dealers',
  'GSTR-9: Annual return',
];

const whyChooseUs = [
  'Expert assistance from qualified professionals',
  'Timely filing to avoid penalties',
  'Accurate data reconciliation',
  'Comprehensive compliance support',
];

export default function GstReturnsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Tax Filing Services', href: '/tax-filing' },
            { label: 'GST Returns' },
          ]}
        />
        <div className="mt-8">
          <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">GST Returns Filing Services</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            Stay compliant and avoid penalties with our professional and timely GST return filing services.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="prose max-w-none">
              <Image
                src="https://placehold.co/800x400.png"
                alt="GST form and calculator"
                width={800}
                height={400}
                className="rounded-lg shadow-md mb-8"
                data-ai-hint="tax calculation"
              />

              <h2 className="font-headline uppercase">Understanding GST Returns</h2>
              <p>Filing GST returns is a mandatory requirement for all businesses registered under the Goods and Services Tax (GST) regime in India. It is a document containing details of income which a taxpayer is required to file with the tax administrative authorities. This is used by tax authorities to calculate tax liability.</p>
              
              <h2 className="font-headline uppercase">Types of GST Returns</h2>
              <p>Different types of returns are required to be filed based on the nature of the business and registration type. Key returns include:</p>
              <ul className="space-y-2">
                {gstReturnTypes.map((returnType, index) => (
                   <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{returnType}</span>
                  </li>
                ))}
              </ul>

              <h2 className="font-headline uppercase">Why Choose Us for GST Filings?</h2>
               <ul className="space-y-2">
                 {whyChooseUs.map((reason, index) => (
                   <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{reason}</span>
                  </li>
                 ))}
               </ul>
            </div>
          </div>
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="font-headline uppercase">Need Help with GST?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Our experts are here to simplify your GST compliance. Contact us today for a consultation.
                </p>
                <Button asChild className="w-full" size="lg">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
