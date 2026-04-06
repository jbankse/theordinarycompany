'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    information: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // HubSpot Integration
    // Replace these with your actual HubSpot Portal ID and Form ID
    const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || 'YOUR_PORTAL_ID';
    const formId = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID || 'YOUR_FORM_ID';
    const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    // Get HubSpot tracking cookie
    const hubspotCookie = document.cookie.split('; ').find(row => row.startsWith('hubspotutk='))?.split('=')[1];

    const data = {
      fields: [
        { name: 'firstname', value: formData.name },
        { name: 'email', value: formData.email },
        { name: 'message', value: formData.information }
      ],
      context: {
        hutk: hubspotCookie,
        pageUri: window.location.href,
        pageName: document.title
      }
    };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', information: '' });
        // Clear checkbox in Footer if possible, or just let the success state handle it
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('HubSpot submission error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="bg-[#FFFFFF]">
      <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr]">
        {/* Left: Headline */}
        <div className="p-6 lg:p-16 bg-[#F5F5F5] brutal-border-r border-[#121212] flex flex-col justify-between">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="block font-display font-extrabold text-[clamp(2rem,4vw,4rem)] leading-[0.6] tracking-[-0.1em] text-[#121212] md:mb-6">02</span>
            <h2 className="font-display font-normal text-[clamp(2.5rem,4vw,5.5rem)] mt-4 leading-none uppercase tracking-tighter">
              PROJECT<br />INQUIRY<span className="ml-[0.1em]">.</span>
            </h2>
          </motion.div>
          
          <div className="mt-12">
            <p className="text-xl font-medium uppercase leading-tight max-w-md text-[#121212]">
              Ready to upgrade your visual infrastructure? Enter the information below and we'll contact you.
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="p-6 lg:p-16 bg-[#F5F5F5] text-[#121212]">
          <form id="contact-form" className="space-y-8 flex flex-col justify-center h-full" onSubmit={handleSubmit}>
            <div className="mb-8 lg:mb-12">
              <span className="block font-display font-extrabold text-[clamp(2rem,4vw,4rem)] leading-[0.6] tracking-[-0.1em] text-[#FF0000] md:mb-6">03</span>
              <h3 className="font-display font-normal text-[clamp(2.5rem,4vw,5.5rem)] uppercase tracking-tighter leading-none text-[#121212] max-w-2xl mt-4">
                WE'RE EXCITED TO HEAR FROM YOU.
              </h3>
            </div>
            <div className="space-y-2">
              <label className="font-display font-bold text-xs tracking-widest text-[#121212] uppercase">NAME</label>
              <input 
                name="name"
                type="text" 
                value={formData.name}
                onChange={handleChange}
                placeholder="ENTER NAME"
                required
                className="w-full bg-transparent border-[3px] border-[#121212] p-3 md:p-4 font-display font-bold text-lg md:text-xl focus:border-[#121212] focus:bg-[#FFFFFF] outline-none transition-all placeholder:text-[#121212]/40"
              />
            </div>
            <div className="space-y-2">
              <label className="font-display font-bold text-xs tracking-widest text-[#121212] uppercase">EMAIL</label>
              <input 
                name="email"
                type="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="MAIL@DOMAIN.COM"
                required
                className="w-full bg-transparent border-[3px] border-[#121212] p-3 md:p-4 font-display font-bold text-lg md:text-xl focus:border-[#121212] focus:bg-[#FFFFFF] outline-none transition-all placeholder:text-[#121212]/40"
              />
            </div>
            <div className="space-y-2">
              <label className="font-display font-bold text-xs tracking-widest text-[#121212] uppercase">ADDITIONAL INFORMATION</label>
              <textarea 
                name="information"
                rows={4}
                value={formData.information}
                onChange={handleChange}
                placeholder="DEFINE SCOPE..."
                required
                className="w-full bg-transparent border-[3px] border-[#121212] p-3 md:p-4 font-display font-bold text-lg md:text-xl focus:border-[#121212] focus:bg-[#FFFFFF] outline-none transition-all placeholder:text-[#121212]/40 resize-none"
              />
            </div>

            {status === 'success' && (
              <p className="font-display font-bold text-[#0000FF] uppercase tracking-widest text-sm">
                Inquiry received. We'll be in touch.
              </p>
            )}
            {status === 'error' && (
              <p className="font-display font-bold text-[#FF0000] uppercase tracking-widest text-sm">
                System error. Please try again or email us directly.
              </p>
            )}
            {status === 'loading' && (
              <p className="font-display font-bold text-[#121212] uppercase tracking-widest text-sm animate-pulse">
                Transmitting data...
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

