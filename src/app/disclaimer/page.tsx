
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Disclaimer for CACS FinAcc Services. Information provided on this website is for general purposes only.',
};

export default function DisclaimerPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Disclaimer' },
          ]}
        />
        <div className="prose max-w-4xl mx-auto mt-8">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">DISCLAIMER</h1>
          <p className="text-muted-foreground">Effective Date: 14 August 2025</p>
          
          <h2 className="font-headline uppercase">General Disclaimer</h2>
          <p>The information contained on www.cacsfinaccservices.com is for general informational purposes only. CACS FinAcc Services™ strives to ensure that the information is accurate and up-to-date, but makes no warranties or representations regarding the completeness, accuracy, or reliability of the content. Any reliance you place on such information is strictly at your own risk. CACS FinAcc Services™ will not be liable for any loss or damage arising from the use of this Website.</p>
          
          <h2 className="font-headline uppercase">Professional Advice Disclaimer</h2>
          <p>The content is not intended to replace professional advice. Please consult us for advice specific to your circumstances.</p>

          <h2 className="font-headline uppercase">Intellectual Property & Trademark Policy</h2>
          
          <h3 className="uppercase">1. Trademarks</h3>
          <p>"CACS FinAcc Services" and the CACS FinAcc logo are trademarks/™ of CACS FinAcc. Use of our trademarks without permission is prohibited.</p>

          <h3 className="uppercase">2. Copyright</h3>
          <p>Copyright © 2025 CACS FinAcc Services™. All rights reserved. Unauthorised copying, reproduction, distribution, or modification of any Website content, including downloadable materials, is prohibited without prior written consent.</p>

          <h3 className="uppercase">3. Fair Use</h3>
          <p>Limited fair use of content for personal, non-commercial purposes is permitted, provided proper attribution is given to CACS FinAcc Services™.</p>

          <h3 className="uppercase">4. Reporting Infringements</h3>
          <p>If you believe your rights have been infringed by content on this Website, send an email to info@cacsfinaccservices.com with the following:</p>
          <ul>
            <li>Your name and contact details</li>
            <li>The URL(s) of the infringing material</li>
            <li>A description of the alleged infringement</li>
            <li>A statement of good-faith belief that the use is unauthorised</li>
            <li>A declaration that the information provided is accurate and that you are the rights holder or authorised to act on their behalf</li>
          </ul>

        </div>
      </div>
    </div>
  );
}
