import "./globals.css";
import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://chivalrytest.me'),
  title:
    'Take the Chivalry Test: Which Classical Virtue Do You Embody? | ChivalryTest.me',
  description:
    'Take our comprehensive free online Chivalry Test to reveal your true character archetype. Are you an unwavering guardian of the Oath, or the embodiment of Valor? Discover the hidden forces that define your noble soul.',
  keywords: [
    'Chivalry Test',
    'archetype assessment',
    'knight personality test',
    'medieval virtues',
  ],
  openGraph: {
    title: 'Chivalry Test: Reveal Your Knight Archetype',
    description:
      'A set of untouchable principles slumbers within us all. Take the test and discover yours.',
    url: 'https://chivalrytest.me',
    siteName: 'Chivalry Test',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Take the Chivalry Test',
    description: 'Which Classical Virtue Do You Embody?',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen flex-col antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-581CTY5RR0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-581CTY5RR0');
  `}
        </Script>
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
