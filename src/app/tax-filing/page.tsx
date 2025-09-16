import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText } from 'lucide-react';
import { serviceCategories } from '@/lib/services';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export const metadata: Metadata = {
  title: 'Tax Filing Services',
  description: 'Expert tax filing services for individuals and businesses, including ITR, GST, and TDS returns, ensuring compliance and accuracy.',
};

export default function TaxFilingPage() {
  const taxCategory = serviceCategories.find(cat => cat.slug === 'tax-filing');

  if (!taxCategory) {
    return <div>Category not found.</div>;
  }

  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services' },
            { label: 'Tax Filing Services' },
          ]}
        />
        <div className="text-center mt-8">
          <FileText className="mx-auto h-16 w-16 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold font-headline mt-4">{taxCategory.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay on top of your tax obligations with our professional filing services. We handle everything from income tax returns to GST filings, ensuring accuracy and timeliness.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {taxCategory.services.map((service) => (
            <Card key={service.slug} className="flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="font-headline">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex items-end">
                <Button asChild variant="link" className="p-0">
                  <Link href={`/tax-filing/${service.slug}`}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
