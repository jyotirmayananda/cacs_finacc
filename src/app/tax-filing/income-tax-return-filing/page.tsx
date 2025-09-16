
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export const metadata: Metadata = {
  title: 'Income Tax Return Filing',
};

export default function Page() {
  return (
    <div className="container mx-auto py-12">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Tax Filings', href: '/tax-filing' },
          { label: 'Income Tax Return Filing' },
        ]}
      />
      <h1 className="text-4xl font-bold mt-8">Income Tax Return Filing</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        This is a placeholder page for Income Tax Return Filing.
      </p>
    </div>
  );
}
