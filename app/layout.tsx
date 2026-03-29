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
  title: 'Ordinary // Precision Architecture',
  description: 'We build structured digital experiences. Bold, direct, and architectural.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${interDisplay.variable} antialiased`}>
      <body suppressHydrationWarning className="bg-[#FFFFFF] text-[#000000] selection:bg-[#000000] selection:text-[#FFFFFF] overflow-x-hidden w-full max-w-[100vw] box-border min-h-screen">
        {/* Viewport Borders */}
        <div className="fixed inset-0 border-2 border-[#000000] z-[9999] pointer-events-none" />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
