import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Bookkeeping Services',
  description: 'Professional bookkeeping services to maintain accurate financial records, manage cash flow, and ensure your business is compliance-ready.',
};

const bookkeepingServices = [
  'Recording daily financial transactions',
  'Bank and credit card reconciliation',
  'Accounts payable and receivable management',
  'Generating financial statements (P&amp;L, Balance Sheet)',
  'Customized financial reporting',
];

const benefits = [
  'Accurate and up-to-date financial data',
  'Improved decision-making with clear financial insights',
  'Stress-free tax and audit preparation',
  'More time to focus on your core business',
];

export default function BookkeepingPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Compliance Services', href: '/compliance' },
            { label: 'Bookkeeping' },
          ]}
        />
        <div className="mt-8">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">PROFESSIONAL BOOKKEEPING SERVICES</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            The financial backbone of your business. We provide meticulous and reliable bookkeeping to keep your finances in perfect order.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="prose max-w-none">
              <Image
                src="https://placehold.co/800x400.png"
                alt="Accountant working on ledger"
                width={800}
                height={400}
                className="rounded-lg shadow-md mb-8"
                data-ai-hint="accounting bookkeeping"
              />

              <h2 className="font-headline uppercase">Why is Bookkeeping Essential?</h2>
              <p>Accurate bookkeeping is critical for the financial health and success of any business. It provides a clear picture of your financial performance, helps in managing cash flow, and is fundamental for meeting tax and regulatory compliance requirements. Without it, making informed business decisions is nearly impossible.</p>
              
              <h2 className="font-headline uppercase">Our Bookkeeping Services Include</h2>
              <ul className="space-y-2">
                {bookkeepingServices.map((service, index) => (
                   <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>

              <h2 className="font-headline uppercase">Benefits of Our Service</h2>
               <ul className="space-y-2">
                 {benefits.map((benefit, index) => (
                   <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                 ))}
               </ul>
            </div>
          </div>
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="font-headline uppercase">Organize Your Finances</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Let us handle your books so you can focus on what you do best—running your business.
                </p>
                <Button asChild className="w-full" size="lg">
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
