
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export const metadata: Metadata = {
  title: 'Trade License',
};

export default function Page() {
  return (
    <div className="container mx-auto py-12">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Registrations', href: '/registration' },
          { label: 'Trade License' },
        ]}
      />
      <h1 className="text-4xl font-bold mt-8">Trade License</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        This is a placeholder page for Trade License.
      </p>
    </div>
  );
}
