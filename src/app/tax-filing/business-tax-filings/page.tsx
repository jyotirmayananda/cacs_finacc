
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export const metadata: Metadata = {
  title: 'Business Tax Filings',
};

export default function Page() {
  return (
    <div className="container mx-auto py-12">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Tax Filings', href: '/tax-filing' },
          { label: 'Business Tax Filings' },
        ]}
      />
      <h1 className="text-4xl font-bold mt-8">Business Tax Filings</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        This is a placeholder page for Business Tax Filings.
      </p>
    </div>
  );
}
