
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { ContactForm } from './_components/contact-form';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with CACS FinAcc Digital for expert financial and accounting services. Reach out via our contact form, email, or phone.',
};

const contactDetails = [
  { icon: MapPin, label: 'Address', text: 'Bengaluru, Karnataka, India' },
  { icon: Phone, label: 'Call Us', text: '+91 9591633648', href: 'tel:+919591633648' },
  { icon: Mail, label: 'Email Us', text: 'info@cacsfinaccservices.com', href: 'mailto:info@cacsfinaccservices.com' },
];

export default function ContactPage() {
  return (
    <div className="bg-background">
      <section id="hero" className="bg-secondary py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight uppercase">
                Connect with us — let&apos;s strategize your next move.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Smart Business Solutions & Tax Planning for Lasting Financial Growth – All in One Place
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://picsum.photos/seed/contactHero/600/400"
                alt="Business meeting handshake"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                data-ai-hint="business handshake meeting"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact-details" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline tracking-wider">CONTACT</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Connect with us — let&apos;s strategize your next move.
            </p>
          </div>
          <Card className="mt-12 shadow-lg">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 sm:p-10">
                   <div className="space-y-8">
                    {contactDetails.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <item.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-headline font-semibold text-lg">{item.label}</h3>
                          {item.href ? (
                            <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">{item.text}</a>
                          ) : (
                            <p className="text-muted-foreground">{item.text}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                     <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.5665853241!2d77.4661248434079!3d12.954294572235223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1620229532953!5m2!1sen!2sus"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Google Map of Bengaluru"
                    ></iframe>
                  </div>
                </div>
                <div className="bg-muted p-8 sm:p-10 lg:rounded-r-lg">
                  <ContactForm />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
