import type { Metadata } from 'next';
import { Outfit as FontSans } from 'next/font/google';

import { cn } from '@/_lib/utils';

import '@/globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Resume Portfolio | Arsalan Ansari',
  description: 'Created by Arsalan Ansari'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
