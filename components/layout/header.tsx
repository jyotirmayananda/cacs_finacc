
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { serviceCategories } from '@/lib/services';
import { ThemeToggle } from '@/components/theme-toggle';

const navLinks = [
  { href: '/', label: 'Home' },
  {
    href: '#',
    label: 'Services',
    dropdown: true,
    items: serviceCategories,
  },
  { href: '/about', label: 'Company' },
  { href: '/blog', label: 'Blog' },
  // { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLink = ({
    href,
    label,
  }: {
    href: string;
    label: string;
  }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={cn(
          'font-nav text-base font-medium transition-colors hover:text-primary',
          isActive ? 'text-primary' : 'text-foreground'
        )}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/Image/cacslogonew.png"
              alt="CACS FinAcc Logo" 
              width={240}
              height={80} 
              priority
              style={{ height: '80px', width: 'auto' }}
            />
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-6">
           <nav className="navmenu flex items-center gap-6">
              {navLinks.map((link) => (
                link.dropdown ? (
                  <div key={link.label} className="listing-dropdown relative">
                    <a href="#" className="flex items-center gap-1 font-nav text-base font-medium transition-colors hover:text-primary">
                      <span>{link.label}</span>
                      <ChevronDown className="h-4 w-4" />
                    </a>
                    <ul className="w-max">
                      {link.items?.map(category => (
                        <li key={category.slug}>
                          <h3>{category.title}</h3>
                          {category.services.map(service => (
                             <Link key={service.slug} href={`/${category.slug}/${service.slug}`}>
                               <service.icon />
                               {service.title}
                             </Link>
                          ))}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <NavLink key={link.label} {...link} />
                )
              ))}
            </nav>
            <div className="flex items-center gap-2">
                <ThemeToggle />
                <Button asChild variant="outline">
                    <Link href="/login">Login</Link>
                </Button>
                <Button asChild>
                    <Link href="/signup">Sign Up</Link>
                </Button>
            </div>
        </div>
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
              <div className="p-4">
                <div className="flex justify-between items-center mb-6">
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Image 
                      src="/Image/cacslogonew.png"
                      alt="CACS FinAcc Logo" 
                      width={240}
                      height={80} 
                      priority
                      style={{ height: '80px', width: 'auto' }}
                    />
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-12">
                  {navLinks.map((link) =>
                    link.dropdown ? (
                      <Accordion type="single" collapsible key={link.label}>
                        <AccordionItem value="services" className="border-b-0">
                           <AccordionTrigger className="font-nav text-lg font-medium hover:no-underline hover:text-primary [&[data-state=open]]:text-primary">
                            {link.label}
                          </AccordionTrigger>
                          <AccordionContent>
                             {link.items?.map((category) => (
                                <div key={category.slug} className="mb-4">
                                  <h5 className="font-semibold mb-2 pl-4 text-primary">
                                    {category.title}
                                  </h5>
                                  <div className="flex flex-col gap-3 pl-8">
                                    {category.services.map((item) => (
                                      <Link
                                        key={item.slug}
                                        href={`/${category.slug}/${item.slug}`}
                                        className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                      >
                                        <item.icon className="h-4 w-4" />
                                        <span>{item.title}</span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          'font-nav text-lg font-medium transition-colors hover:text-primary py-2',
                          pathname === link.href
                            ? 'text-primary'
                            : 'text-foreground'
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )
                  )}
                </nav>
                <div className="flex flex-col gap-2 mt-8">
                  <Button asChild>
                    <Link
                      href="/login"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Login
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link
                      href="/signup"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

    