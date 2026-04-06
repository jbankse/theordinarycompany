'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [hasAccepted, setHasAccepted] = useState(true); // Default true to prevent hydration mismatch, then check in useEffect

  useEffect(() => {
    // Check local storage to see if they already accepted
    const accepted = localStorage.getItem('cookiesAccepted');
    
    // If we have a choice, update GA consent state on load
    if (accepted === 'true') {
      window.gtag?.('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted'
      });
      setHasAccepted(true);
      return;
    } else if (accepted === 'false') {
      setHasAccepted(true);
      return;
    }

    setHasAccepted(false);

    // Handle scroll to show banner after 5% scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate percentage of the scrollable area
      const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
      
      // Changed to 5% to ensure it shows up almost immediately upon interaction
      if (scrollPercentage > 5 && !showBanner) {
        setShowBanner(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showBanner]);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    window.gtag?.('consent', 'update', {
      'analytics_storage': 'granted',
      'ad_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted'
    });
    setShowBanner(false);
    setHasAccepted(true);
  };

  const declineCookies = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    // Explicitly keep denied (though it's the default)
    window.gtag?.('consent', 'update', {
      'analytics_storage': 'denied',
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied'
    });
    setShowBanner(false);
    setHasAccepted(true);
  };

  if (hasAccepted && !showBanner) return null;

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 w-full z-50"
        >
          <div className="w-full bg-[#FF0000] flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 gap-6 md:gap-12">
            
            <div className="max-w-4xl">
              <h3 className="font-display font-bold text-[#121212] text-xl md:text-3xl tracking-tighter uppercase mb-3">
                WE VALUE YOUR PRIVACY
              </h3>
              <p className="font-mono text-[#121212]/90 text-xs md:text-sm tracking-widest uppercase leading-relaxed">
                WE USE COOKIES TO ENHANCE YOUR BROWSING EXPERIENCE, SERVE PERSONALIZED CONTENT, AND ANALYZE OUR TRAFFIC. BY CLICKING "ACCEPT ALL", YOU CONSENT TO OUR USE OF COOKIES. <a href="/privacy" className="underline decoration-2 underline-offset-4 hover:text-white transition-colors">READ PRIVACY POLICY</a>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
              <button 
                onClick={declineCookies}
                className="px-8 py-4 bg-transparent border-[3px] border-[#121212] text-[#121212] font-display font-bold text-lg tracking-tighter hover:bg-[#121212] hover:text-[#FFFFFF] transition-colors duration-300 uppercase leading-none whitespace-nowrap"
              >
                DECLINE
              </button>
              <button 
                onClick={acceptCookies}
                className="px-8 py-4 bg-[#121212] border-[3px] border-[#121212] text-[#FFFFFF] font-display font-bold text-lg tracking-tighter hover:bg-transparent hover:text-[#121212] transition-colors duration-300 uppercase leading-none whitespace-nowrap"
              >
                ACCEPT ALL
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
