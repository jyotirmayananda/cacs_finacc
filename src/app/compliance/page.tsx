import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckSquare } from 'lucide-react';
import { serviceCategories } from '@/lib/services';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export const metadata: Metadata = {
  title: 'Compliance Services',
  description: 'Comprehensive compliance services including bookkeeping, payroll, and corporate filings to keep your business running smoothly and legally.',
};

export default function CompliancePage() {
  const complianceCategory = serviceCategories.find(cat => cat.slug === 'compliance');

  if (!complianceCategory) {
    return <div>Category not found.</div>;
  }

  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services' },
            { label: 'Compliance Services' },
          ]}
        />
        <div className="text-center mt-8">
          <CheckSquare className="mx-auto h-16 w-16 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold font-headline mt-4">{complianceCategory.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Navigating the complexities of corporate compliance is crucial for success. Our services ensure your business adheres to all regulatory requirements, mitigating risks and fostering growth.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {complianceCategory.services.map((service) => (
            <Card key={service.slug} className="flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="font-headline">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex items-end">
                <Button asChild variant="link" className="p-0">
                  <Link href={`/compliance/${service.slug}`}>
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
