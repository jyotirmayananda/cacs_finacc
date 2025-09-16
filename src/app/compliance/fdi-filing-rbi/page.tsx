
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export const metadata: Metadata = {
  title: 'FDI Filing with RBI',
};

export default function Page() {
  return (
    <div className="container mx-auto py-12">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Compliances', href: '/compliance' },
          { label: 'FDI Filing with RBI' },
        ]}
      />
      <h1 className="text-4xl font-bold mt-8">FDI Filing with RBI</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        This is a placeholder page for FDI Filing with RBI.
      </p>
    </div>
  );
}
