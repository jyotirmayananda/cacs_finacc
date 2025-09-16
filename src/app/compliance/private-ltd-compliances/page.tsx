
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export const metadata: Metadata = {
  title: 'Private Limited Compliances',
};

export default function Page() {
  return (
    <div className="container mx-auto py-12">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Compliances', href: '/compliance' },
          { label: 'Private Limited Compliances' },
        ]}
      />
      <h1 className="text-4xl font-bold mt-8">Private Limited Compliances</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        This is a placeholder page for Private Limited Compliances.
      </p>
    </div>
  );
}
