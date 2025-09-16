
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use for CACS FinAcc Services. By using our website, you agree to these terms.',
};

export default function TermsOfUsePage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Terms of Use' },
          ]}
        />
        <div className="prose max-w-4xl mx-auto mt-8">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-center">TERMS OF USE</h1>
          <p className="text-center text-muted-foreground">Effective Date: 14 August 2025</p>

          <h2 className="font-headline uppercase">1. Introduction</h2>
          <p>Welcome to www.cacsfinaccservices.com (the "Website"). By accessing or using this Website, you agree to be bound by these Terms of Use (“Terms”). If you do not agree to these Terms, you must not use the Website.</p>

          <h2 className="font-headline uppercase">2. Intellectual Property Rights</h2>
          <p>All content on this Website—including, but not limited to, text, images, graphics, logos, icons, audio clips, video clips, digital downloads, and software—is the property of <strong>CACS FinAcc Services™</strong> or its content suppliers and is protected under the Copyright Act, 1957 (India) and applicable international copyright laws.</p>
          <p>"CACS FinAcc Services" and the CACS FinAcc logo are trademarks/™ of CACS FinAcc. You may not use our trademarks without prior written consent. All other trademarks appearing on this Website are the property of their respective owners.</p>

          <h2 className="font-headline uppercase">3. License and Permitted Use</h2>
          <p>We grant you a limited, non-exclusive, non-transferable, revocable license to access and use this Website for personal, non-commercial purposes. You may not:</p>
          <ul>
            <li>Reproduce, duplicate, copy, sell, resell, or exploit any part of this Website without written permission;</li>
            <li>Use any automated system, including robots, spiders, or offline readers, to access the Website;</li>
            <li>Frame or mirror any part of the Website without prior written consent;</li>
            <li>Use any content for unlawful, defamatory, or infringing purposes.</li>
          </ul>

          <h2 className="font-headline uppercase">4. No Professional Advice</h2>
          <p>The information on this Website is for general informational purposes only and does not constitute financial, tax, legal, or professional advice. You should obtain professional advice tailored to your situation before acting on any content.</p>

          <h2 className="font-headline uppercase">5. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, <strong>CACS FinAcc Services™</strong> will not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the Website.</p>

          <h2 className="font-headline uppercase">6. Governing Law</h2>
          <p>These Terms are governed by and construed in accordance with the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts of Bengaluru, Karnataka.</p>

          <h2 className="font-headline uppercase">7. Contact Us</h2>
          <p>For permissions, licensing requests, or IP concerns, email: info@cacsfinaccservices.com</p>
        </div>
      </div>
    </div>
  );
}
