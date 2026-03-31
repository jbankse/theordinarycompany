import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const interDisplay = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.stopbeingordinary.com'),
  title: {
    default: 'Ordinary | Visual Infrastructure as a Service',
    template: '%s | The Ordinary Company',
  },
  description: 'The Ordinary Company is a media and technology firm delivering Visual Infrastructure as a Service (VIaaS). We provide AI-augmented branding, motion design, social media, and marketing content production for modern businesses.',
  keywords: ['VIaaS', 'Visual Infrastructure', 'Visual Infrastructure as a Service', 'AI-augmented design', 'Motion Design', 'Branding', 'Social Media Content', 'Marketing Content', 'The Ordinary Company', 'Ordinary'],
  openGraph: {
    title: 'Ordinary | Visual Infrastructure as a Service',
    description: 'Delivering Visual Infrastructure as a Service (VIaaS) for modern brands.',
    url: 'https://www.stopbeingordinary.com',
    siteName: 'The Ordinary Company',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ordinary | Visual Infrastructure as a Service',
    description: 'We deliver Visual Infrastructure as a Service (VIaaS). Stop being ordinary.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${interDisplay.variable} antialiased`}>
      <body suppressHydrationWarning className="bg-[#FFFFFF] text-[#121212] selection:bg-[#121212] selection:text-[#FFFFFF] overflow-x-hidden w-full max-w-[100vw] box-border min-h-[100dvh]">
        {/* Viewport Borders */}
        <div className="fixed inset-0 border-r-2 border-[#121212] z-[9999] pointer-events-none hidden md:block" />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
