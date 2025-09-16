import type { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, BarChart, DollarSign, Target, TrendingUp } from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export const metadata: Metadata = {
  title: 'CFO Services',
  description: 'Strategic CFO services to help your business grow. We offer financial planning, forecasting, and advisory services to guide your success.',
};

const services = [
  {
    icon: TrendingUp,
    title: 'Financial Strategy &amp; Planning',
    description: 'Develop a robust financial roadmap to achieve your long-term business goals and drive sustainable growth.',
  },
  {
    icon: BarChart,
    title: 'Cash Flow Management',
    description: 'Optimize your cash flow with expert forecasting, budgeting, and management to ensure financial stability.',
  },
  {
    icon: DollarSign,
    title: 'Fundraising &amp; Investor Relations',
    description: 'Navigate the complexities of fundraising with strategic guidance and support in investor communications.',
  },
  {
    icon: Target,
    title: 'Performance Analysis &amp; KPIs',
    description: 'Implement key performance indicators (KPIs) to track your business health and make data-driven decisions.',
  },
];

export default function CfoServicesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'CFO Services' },
          ]}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-headline">STRATEGIC CFO SERVICES</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Elevate your business with expert financial leadership without the cost of a full-time executive. Our Virtual CFO services provide the strategic insights you need to scale effectively and profitably.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/contact">
                Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div>
            <Image
              src="https://placehold.co/600x400.png"
              alt="Strategic meeting"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              data-ai-hint="business strategy"
            />
          </div>
        </div>

        <section id="cfo-benefits" className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">HOW WE ADD VALUE</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Our CFO services are designed to integrate seamlessly with your business and deliver tangible results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
