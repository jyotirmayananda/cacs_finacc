
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export const metadata: Metadata = {
  title: 'Partnership Compliance',
};

export default function Page() {
  return (
    <div className="container mx-auto py-12">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Compliances', href: '/compliance' },
          { label: 'Partnership Compliance' },
        ]}
      />
      <h1 className="text-4xl font-bold mt-8">Partnership Compliance</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        This is a placeholder page for Partnership Compliance.
      </p>
    </div>
  );
}
