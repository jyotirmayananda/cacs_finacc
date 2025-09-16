import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Private Limited Company Registration',
  description: 'Learn about the process, benefits, and requirements for registering a Private Limited Company in India with CACS FinAcc Digital.',
};

const benefits = [
  'Limited Liability Protection',
  'Separate Legal Entity',
  'Easier Access to Funding',
  'Enhanced Brand Credibility',
  'Perpetual Succession',
];

const processSteps = [
  'Step 1: Digital Signature Certificate (DSC)',
  'Step 2: Director Identification Number (DIN)',
  'Step 3: Company Name Reservation (RUN)',
  'Step 4: Filing of SPICe+ Form',
  'Step 5: Certificate of Incorporation',
];

export default function PrivateLtdPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Registration Services', href: '/registration' },
            { label: 'Private Limited Company' },
          ]}
        />
        <div className="mt-8">
          <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase">Private Limited Company Registration</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            The most popular and credible business structure for startups and growing businesses in India.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="prose max-w-none">
              <Image
                src="https://placehold.co/800x400.png"
                alt="Business registration documents"
                width={800}
                height={400}
                className="rounded-lg shadow-md mb-8"
                data-ai-hint="business documents"
              />

              <h2 className="font-headline uppercase">What is a Private Limited Company?</h2>
              <p>A Private Limited Company is a privately held business entity, under the Companies Act 2013. It offers limited liability to its owners (shareholders), providing a distinct legal identity separate from them. This structure is ideal for businesses looking to raise funds, scale operations, and build a strong corporate image.</p>
              
              <h2 className="font-headline uppercase">Benefits of Registration</h2>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                   <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <h2 className="font-headline uppercase">Registration Process</h2>
               <ol className="space-y-2">
                 {processSteps.map((step, index) => (
                   <li key={index}><strong>{step.split(':')[0]}:</strong>{step.split(':')[1]}</li>
                 ))}
               </ol>
            </div>
          </div>
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="font-headline uppercase">Ready to Register?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Let our experts guide you through every step of the registration process for a hassle-free experience.
                </p>
                <Button asChild className="w-full" size="lg">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
