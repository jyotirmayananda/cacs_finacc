
'use client';

import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import React, { useEffect } from 'react';
import { MotionDiv } from '@/components/motion-div';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const cursorBall = document.getElementById('cursor-ball');
    if (!cursorBall) return;

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      // The transform with translate centers the ball on the cursor
      cursorBall.style.transform = `translate(${clientX}px, ${clientY}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <div 
          id="cursor-ball" 
          className="pointer-events-none fixed top-0 left-0 w-8 h-8 rounded-full bg-primary/20 backdrop-blur-sm -translate-x-1/2 -translate-y-1/2 z-50 transition-transform duration-150 ease-out"
        ></div>
        <div className="mx-16">
          <Header />
          <main className="min-h-screen">
             <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {children}
              </MotionDiv>
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
