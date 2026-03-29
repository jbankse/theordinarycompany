import type { Metadata } from 'next';
import { Inter, Anton } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const anton = Anton({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Ordinary — Visual Infrastructure™ [v4.0]',
  description: 'A media and technology company that develops and manages visual infrastructure™ for companies and small businesses.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${anton.variable} antialiased`}>
      <body suppressHydrationWarning className="bg-[#FFFFFF] text-[#1a1a1f] selection:bg-[#00FF00] selection:text-black">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
