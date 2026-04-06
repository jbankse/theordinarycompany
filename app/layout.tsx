import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import CookieBanner from '@/components/CookieBanner';
import Script from 'next/script';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const aileron = localFont({
  src: [
    { path: '../public/Aileron-UltraLight.woff2', weight: '100', style: 'normal' },
    { path: '../public/Aileron-UltraLightItalic.woff2', weight: '100', style: 'italic' },
    { path: '../public/Aileron-Thin.woff2', weight: '200', style: 'normal' },
    { path: '../public/Aileron-ThinItalic.woff2', weight: '200', style: 'italic' },
    { path: '../public/Aileron-Light.woff2', weight: '300', style: 'normal' },
    { path: '../public/Aileron-LightItalic.woff2', weight: '300', style: 'italic' },
    { path: '../public/Aileron-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/Aileron-Italic.woff2', weight: '400', style: 'italic' },
    { path: '../public/Aileron-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: '../public/Aileron-SemiBoldItalic.woff2', weight: '600', style: 'italic' },
    { path: '../public/Aileron-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../public/Aileron-BoldItalic.woff2', weight: '700', style: 'italic' },
    { path: '../public/Aileron-Heavy.woff2', weight: '800', style: 'normal' },
    { path: '../public/Aileron-HeavyItalic.woff2', weight: '800', style: 'italic' },
    { path: '../public/Aileron-Black.woff2', weight: '900', style: 'normal' },
    { path: '../public/Aileron-BlackItalic.woff2', weight: '900', style: 'italic' },
  ],
  variable: '--font-sans',
  display: 'swap',
});

const aileronDisplay = localFont({
  src: [
    { path: '../public/Aileron-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/Aileron-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: '../public/Aileron-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../public/Aileron-Heavy.woff2', weight: '800', style: 'normal' },
    { path: '../public/Aileron-Black.woff2', weight: '900', style: 'normal' },
  ],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.stopbeingordinary.com'),
  title: {
    default: 'The Ordinary Company | Visual Infrastructure™ as a Service',
    template: '%s | The Ordinary Company',
  },
  description: 'The Ordinary Company is a media and technology firm delivering Visual Infrastructure as a Service (VIaaS). We provide AI-augmented branding, motion design, social media, and marketing content production for modern businesses.',
  keywords: ['VIaaS', 'Visual Infrastructure', 'Visual Infrastructure as a Service', 'AI-augmented design', 'Motion Design', 'Branding', 'Social Media Content', 'Marketing Content', 'The Ordinary Company'],
  openGraph: {
    title: 'The Ordinary Company | Visual Infrastructure™ as a Service',
    description: 'Delivering Visual Infrastructure as a Service (VIaaS) for modern brands.',
    url: 'https://www.stopbeingordinary.com',
    siteName: 'The Ordinary Company',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Ordinary Company | Visual Infrastructure™ as a Service',
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
    <html lang="en" className={`${aileron.variable} ${aileronDisplay.variable} antialiased`}>
      <body suppressHydrationWarning className="bg-[#FFFFFF] text-[#121212] selection:bg-[#121212] selection:text-[#FFFFFF] overflow-x-hidden w-full max-w-[100vw] box-border min-h-[100dvh]">
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XLFC45ZXVY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Default consent to denied
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied'
            });

            gtag('config', 'G-XLFC45ZXVY', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Viewport Borders */}
        <div className="fixed inset-0 border-r-2 border-[#121212] z-[9999] pointer-events-none hidden md:block" />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <CookieBanner />
      </body>
    </html>
  );
}
