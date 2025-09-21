
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import aboutus from '../../../public/Image/company-hero-img.jpg';
import aboutus2 from '../../../public/Image/about-us-img.jpg';

export const metadata: Metadata = {
  title: 'About Us | CACS FinAcc Digital',
  description:
    'CACSFinacc offers expert Chartered Accountants and Company Secretaries services in Bengaluru. We provide accounting, tax, audit, compliance, and business advisory solutions for startups, SMEs, and corporates.',
};

const servicesList = [
  'Full-Spectrum Financial and Tax Advisory From income tax planning and ITR filing to GST registration, GST returns, TDS compliance, and strategic tax optimization, we ensure you meet all tax obligations while maximizing savings under applicable laws.',
  'Internal and Statutory Audits Our internal audits help identify operational inefficiencies and improve internal controls, while our statutory audits ensure full compliance with the Companies Act, 2013 and other regulatory standards.',
  'Company Formation & Corporate Secretarial Services We handle Private Limited Company registration, LLP incorporation, ROC filings, and MCA compliance, ensuring your business is structured right from day one.',
  'Compliance with the Companies Act, 2013 & Other Statutory Regulations We manage complete corporate compliance including annual returns, board meeting documentation, FEMA filings, and labour law compliance, keeping your company penalty-free and audit-ready.',
  'Our goal is to ensure that your business stays compliant, efficient, and profitable, while we handle the complexities of financial and legal matters. Trust us to be your dedicated partners in navigating today’s dynamic business world.',
];

export default function AboutPage() {
  return (
    <>
      <section id="hero" className="bg-secondary py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight text-[#5f687b]">
                TURN YOUR EARNINGS INTO LASTING WEALTH
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Smart Business Solutions &amp; Tax Planning for Lasting
                Financial Growth – All in One Place
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <Image
                src={aboutus}
                alt="Business meeting"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                data-ai-hint="business meeting team"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about-details" className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              ABOUT US
            </h2>
            <div className="mt-4">
              <p className="text-justify mb-2">
                At CACS FinAcc Services, we are more than just accountants — we
                are your strategic partner for all accounting, taxation,
                compliance, and corporate governance needs. With a strong
                foundation built on the expertise of Chartered Accountants,
                Company Secretaries, and finance professionals, we provide a
                holistic approach that blends accuracy, compliance, and business
                strategy.
              </p>
              <p className="text-justify">
                With 10+ years of experience serving individuals, startups,
                SMEs, and established corporations, we understand the unique
                challenges businesses face in today’s highly regulated
                environment. Our mission is simple — to keep your business
                compliant, financially strong, and growth-ready while we handle
                the complexities of finance, law, and governance with precision.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src={aboutus2}
                alt="Financial documents review"
                width={500}
                height={700}
                className="rounded-2xl object-cover shadow-lg"
                data-ai-hint="financial documents review"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold font-headline">
                OUR SERVICES INCLUDE
              </h3>
              <p className="text-muted-foreground text-justify">
                We provide end-to-end solutions across multiple domains so you
                can focus on running your business while we ensure compliance
                and efficiency.
              </p>
              <ul className="space-y-4">
                {servicesList.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground text-justify">{service}</p>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-justify">
                Financial & Business Restructuring Solutions Our experts assist
                with mergers, acquisitions, debt restructuring, and capital
                optimization, ensuring smooth transitions while protecting
                business value.
              </p>
            </div>
          </div>
           <div className="mt-12 text-center">
             <p className=" text-justify">
               At CACS FinAcc Services, we don’t just provide services — we build
               lasting partnerships based on trust, transparency, and results.
               Whether you’re looking to streamline your accounting, improve
               compliance, or restructure your business, we are here to guide you
               every step of the way.
             </p>
           </div>
        </div>
      </section>
    </>
  );
}
