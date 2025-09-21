
'use client';

import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import React from 'react';
import NextTopLoader from 'nextjs-toploader';
import { raleway, roboto, ubuntu } from './fonts';
import { ThemeProvider } from '@/components/theme-provider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${raleway.variable} ${ubuntu.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head />
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader color="#1678fb" showSpinner={false} />
          <div className="bg-background max-w-screen-xl mx-auto px-8 sm:px-12 lg:px-16">
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
