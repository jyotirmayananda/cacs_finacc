
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export const metadata: Metadata = {
  title: 'ESI Return Filings',
};

export default function Page() {
  return (
    <div className="container mx-auto py-12">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Tax Filings', href: '/tax-filing' },
          { label: 'ESI Return Filings' },
        ]}
      />
      <h1 className="text-4xl font-bold mt-8">ESI Return Filings</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        This is a placeholder page for ESI Return Filings.
      </p>
    </div>
  );
}
