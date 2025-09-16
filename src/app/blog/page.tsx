
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';


export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read the latest articles, insights, and news from the experts at CACS FinAcc Digital on finance, tax, and compliance.',
};

const blogPosts = [
  {
    slug: 'gst-compliance-challenges',
    title: 'Overcoming GST Compliance Challenges for a Fast-Growing E-Commerce...',
    date: 'June 2025 | By Admin',
    excerpt: 'How a fast-growing e-commerce business overcame GST compliance hurdles and ensured smooth operations.',
    image: 'https://picsum.photos/seed/blog1/600/400',
    imageHint: 'tax documents',
  },
  {
    slug: 'streamlining-payroll-hr',
    title: 'Streamlining Payroll & HR Compliance for a Mid-Sized IT Firm',
    date: 'June 2025 | By Admin',
    excerpt: 'How a mid-sized IT company automated payroll and HR compliance, reducing errors and saving time.',
    image: 'https://picsum.photos/seed/blog2/600/400',
    imageHint: 'payroll documents',
  },
  {
    slug: 'handling-section-148-reassessment',
    title: 'Successfully Handling a Section 148 Reassessment Notice under the Income...',
    date: 'June 2025 | By Admin',
    excerpt: 'Step-by-step approach to responding to a Section 148 notice and avoiding penalties.',
    image: 'https://picsum.photos/seed/blog3/600/400',
    imageHint: 'business meeting',
  },
   {
    slug: 'overcoming-tds-mismatch',
    title: 'Overcoming TDS Mismatch and Avoiding Penalty Under Income Tax Scrutiny',
    date: 'June 2025 | By Admin',
    excerpt: 'How to resolve TDS mismatches and avoid scrutiny-related penalties from the Income Tax Department.',
    image: 'https://picsum.photos/seed/blog4/600/400',
    imageHint: 'government law',
  },
  {
    slug: 'timely-intervention-itc-loss',
    title: 'How Timely Intervention Prevented Huge ITC Loss Due to GST Late Filing',
    date: 'June 2025 | By Admin',
    excerpt: 'Case study on saving significant Input Tax Credit by addressing GST late filing concerns promptly.',
    image: 'https://picsum.photos/seed/blog5/600/400',
    imageHint: 'legal gavel stress',
  },
  {
    slug: 'recovering-itc-minimizing-penalties',
    title: 'Recovering ITC and Minimizing Penalties After Multiple GST Late Filings for a...',
    date: 'June 2025 | By Admin',
    excerpt: 'How a wholesale distributor recovered ITC and reduced penalties after repeated GST late filings.',
    image: 'https://picsum.photos/seed/blog6/600/400',
    imageHint: 'calculator finance',
  },
  {
    slug: 'provident-fund-compliance',
    title: 'Provident Fund (PF) compliance: Avoiding Heavy Penalties Due to Delaye...',
    date: 'June 2025 | By Admin',
    excerpt: 'How a manufacturing unit avoided heavy penalties by addressing delayed PF deposits.',
    image: 'https://picsum.photos/seed/blog7/600/400',
    imageHint: 'provident fund',
  },
  {
    slug: 'resolving-pf-audit-discrepancies',
    title: 'Resolving PF Audit Discrepancies for a Construction Company',
    date: 'June 2025 | By Admin',
    excerpt: 'Resolution of PF audit discrepancies for a construction company and ensuring compliance.',
    image: 'https://picsum.photos/seed/blog8/600/400',
    imageHint: 'audit documents',
  },
  {
    slug: 'navigating-pf-settlement-delays',
    title: 'Navigating PF Settlement Delays and Employee Grievances for an IT Firm',
    date: 'June 2025 | By Admin',
    excerpt: 'How an IT firm managed PF settlement delays and resolved employee grievances.',
    image: 'https://picsum.photos/seed/blog9/600/400',
    imageHint: 'office discussion',
  },
   {
    slug: 'understanding-capital-gains-tax',
    title: 'Understanding Capital Gains Tax in India',
    date: 'June 2025 | By Admin',
    excerpt: 'Overview of capital gains tax rules, exemptions, and planning strategies in India.',
    image: 'https://picsum.photos/seed/blog10/600/400',
    imageHint: 'tax calculation',
  },
  {
    slug: 'exemption-denied-residential-property',
    title: 'Exemption Denied on Residential Property Sale Due to Missed CGAS...',
    date: 'June 2025 | By Admin',
    excerpt: 'Real-life case where exemption was denied for missing the CGAS deposit deadline after property sale.',
    image: 'https://picsum.photos/seed/blog11/600/400',
    imageHint: 'house property denied',
  },
  {
    slug: 'ltcg-on-shares-penny-stock',
    title: 'LTCG on Shares Challenged Over Penny Stock Classification',
    date: 'June 2025 | By Admin',
    excerpt: 'Case where LTCG exemption was challenged due to shares being classified as penny stocks.',
    image: 'https://picsum.photos/seed/blog12/600/400',
    imageHint: 'stock market chart',
  },
   {
    slug: 'agricultural-land-sale-section-54b',
    title: 'Agricultural Land Sale and Section 54B Confusion',
    date: 'June 2025 | By Admin',
    excerpt: 'Clarifying the rules and conditions for claiming exemption under Section 54B on the sale of agricultural land.',
    image: 'https://picsum.photos/seed/blog13/600/400',
    imageHint: 'agricultural land',
  },
  {
    slug: 'crypto-to-crypto-ltcg',
    title: 'Crypto-to-Crypto Transactions Misreported as LTCG',
    date: 'June 2025 | By Admin',
    excerpt: 'Understanding the tax implications of crypto-to-crypto transactions and why they may not qualify as LTCG.',
    image: 'https://picsum.photos/seed/blog14/600/400',
    imageHint: 'cryptocurrency coins',
  },
];

const featuredPosts = blogPosts.slice(0, 5);

const faqs = [
    {
      question: "How can I save tax legally in FY 2024-25?",
      answer: "You can save tax legally by utilizing deductions under sections 80C (like EPF, PPF, ELSS), 80D (health insurance), 80G (donations), and HRA. Investing in tax-saving schemes and structuring your salary can also help maximize savings. Consulting a tax advisor is recommended for personalized strategies.",
    },
    {
      question: "What are the latest changes in ITR forms for AY 2025-26?",
      answer: "The latest ITR forms for AY 2025-26 include new schedules for reporting income from virtual digital assets (cryptocurrency) and additional disclosure requirements for certain deductions. It's important to use the correct form based on your income sources to ensure compliance.",
    },
    {
      question: "How do I compute capital gains on inherited property for FY 2024-25?",
      answer: "For inherited property, the 'cost of acquisition' is the price paid by the original owner. The holding period is calculated from the date the original owner acquired it. Long-term or short-term capital gains are then computed based on this period and the sale price, with indexation benefits available for long-term gains.",
    },
    {
        question: "Can I save LTCG tax under Section 54, 54EC, and 54F simultaneously?",
        answer: "Yes, you can claim exemptions under these sections simultaneously, provided you meet the specific conditions for each. For instance, you can invest the capital gains from a house property into another residential property (Sec 54) and also in specified bonds (Sec 54EC) to claim exemptions on the respective amounts.",
    },
    {
        question: "I received a GST notice for mismatch in GSTR-2B and ITC claimed. What should I do?",
        answer: "First, reconcile your purchase records with GSTR-2B to identify the discrepancies. If the mismatch is due to supplier error, contact them to amend their GSTR-1. Prepare a detailed reconciliation statement and file a formal reply to the notice within the stipulated time, providing all necessary supporting documents.",
    },
    {
        question: "Can I avail GST input on blocked credits like office furniture and staff food?",
        answer: "GST law blocks input tax credit (ITC) on certain goods and services. ITC is generally not available for goods or services used for personal consumption, including food and beverages for employees. However, ITC on office furniture is typically allowed as it is used for business purposes.",
    },
     {
        question: "What are the consequences of non-compliance with Section 185 and 186 of Companies Act?",
        answer: "Non-compliance with Section 185 (Loans to Directors) and Section 186 (Loans and Investment by Company) can lead to severe penalties, including fines for the company and imprisonment for the officers in default. It is crucial to adhere to the prescribed limits and procedural requirements.",
    },
    {
        question: "Can a Pvt Ltd company issue shares at premium without valuation report?",
        answer: "No, a private limited company must obtain a valuation report from a registered valuer when issuing shares at a premium. This is a mandatory requirement under the Companies Act and FEMA regulations to justify the premium and ensure fair pricing.",
    },
    {
        question: "What is the process and timeline for filing FLA (Foreign Liabilities and Assets) Return?",
        answer: "The FLA return must be filed annually by all Indian resident companies that have received FDI or made overseas investments. The due date is July 15th of the following financial year. The process involves submitting details of all foreign assets and liabilities through the RBI's online portal.",
    },
    {
        question: "How do I report ECB (External Commercial Borrowing) with RBI?",
        answer: "ECB reporting involves obtaining a Loan Registration Number (LRN) from the RBI before drawing down the loan. Monthly returns (ECB-2) must be filed by the 7th of the following month through an authorized dealer bank. Any changes to the ECB terms require prior RBI approval.",
    },
    {
        question: "Who is liable if a contractor defaults on PF contributions of workers?",
        answer: "The principal employer is ultimately responsible for ensuring that the contractor deposits PF contributions for the engaged workers. In case of a default by the contractor, the principal employer is liable to pay the dues, though they can recover the amount from the contractor later.",
    },
    {
        question: "How can startups automate PF/ESI compliance to avoid human error?",
        answer: "Startups can use modern HR and payroll software that automates PF and ESI calculations, generates challans, and prepares electronic return files (ECR). This minimizes manual errors, ensures timely filings, and helps maintain accurate compliance records.",
    },
    {
        question: "I got a notice under Section 148 for reassessment. What does it mean?",
        answer: "A notice under Section 148 is issued by the Income Tax Department when they have reason to believe that some of your income has escaped assessment in a previous year. You are required to file a return for that assessment year, after which the assessing officer will proceed with the reassessment.",
    },
    {
        question: "How to handle income mismatch in AIS/TIS vs ITR for FY 2024-25?",
        answer: "If there is a mismatch, first verify the entries in your Annual Information Statement (AIS) and Taxpayer Information Summary (TIS). If any information is incorrect, you can submit feedback on the compliance portal. Ensure your ITR correctly reports all income; if the AIS is wrong, you have the grounds to contest any notice.",
    },
    {
        question: "What is the compliance checklist post angel investment round in India?",
        answer: "Post-funding, key compliances include filing Form PAS-3 with the ROC for allotment of shares, issuing share certificates, updating statutory registers, and ensuring compliance with any specific clauses in the shareholders' agreement. Filings under FEMA are also required if the investment is from a foreign angel investor.",
    },
    {
        question: "Is it mandatory for a DPIIT-recognized startup to be GST registered?",
        answer: "GST registration is mandatory if the startup's aggregate turnover exceeds the prescribed threshold limit (₹20 lakhs or ₹40 lakhs, depending on the state and nature of supply). DPIIT recognition does not exempt a startup from this requirement.",
    },
];

export default function BlogPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog' },
          ]}
        />
        
        <section id="featured-posts-slider" className="mt-8">
            <Carousel
                opts={{ align: 'start', loop: true }}
                className="w-full"
            >
                <CarouselContent>
                {featuredPosts.map((post) => (
                    <CarouselItem key={post.slug}>
                    <Link href={`/blog/${post.slug}`}>
                        <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden group">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={post.imageHint}
                        />
                        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-4">
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-headline text-white max-w-4xl">
                            {post.title}
                            </h2>
                            <p className="mt-4 text-sm md:text-lg text-white/90 max-w-3xl">
                            {post.excerpt}
                            </p>
                        </div>
                        </div>
                    </Link>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70 border-none" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70 border-none" />
            </Carousel>
        </section>


        <div className="text-center mt-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-wider">OUR BLOG</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Insights and updates from CACS Finacc
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="flex flex-col overflow-hidden group">
               <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  data-ai-hint={post.imageHint}
                />
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <CardTitle className="font-headline text-lg mb-2 h-14 overflow-hidden">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
                <p className="text-sm text-muted-foreground mb-4">{post.date}</p>
                <p className="text-muted-foreground text-sm flex-grow h-20 overflow-hidden">{post.excerpt}</p>
                <div className="mt-4">
                  <Button asChild variant="link" className="p-0 font-semibold">
                    <Link href={`/blog/${post.slug}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <section id="faq" className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">FREQUENTLY ASKED QUESTIONS</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Find answers to common queries about our services
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
             <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
          </div>
        </section>

      </div>
    </div>
  );
}
