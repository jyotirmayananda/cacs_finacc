
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export const metadata: Metadata = {
  title: 'Legal Entity Identifier Code',
};

export default function Page() {
  return (
    <div className="container mx-auto py-12">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Registrations', href: '/registration' },
          { label: 'Legal Entity Identifier Code' },
        ]}
      />
      <h1 className="text-4xl font-bold mt-8">Legal Entity Identifier Code</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        This is a placeholder page for Legal Entity Identifier Code.
      </p>
    </div>
  );
}
