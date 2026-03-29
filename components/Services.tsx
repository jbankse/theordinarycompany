'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: '01',
    title: 'BRANDING',
    description: 'Developing the core visual identity systems that define market presence.',
    tags: ['STRATEGY', 'LOGOTYPE', 'GUIDELINES'],
  },
  {
    id: '02',
    title: 'MOTION',
    description: 'Dynamic visual infrastructure for digital-first brand experiences.',
    tags: ['ANIMATION', 'VFX', 'SYSTEMS'],
  },
  {
    id: '03',
    title: 'SOCIAL',
    description: 'Fully managed content production pipelines for scale.',
    tags: ['SOCIAL', 'MARKETING', 'PRODUCTION'],
  },
  {
    id: '04',
    title: 'MARKETING',
    description: 'Strategic growth and performance marketing systems.',
    tags: ['GROWTH', 'ADS', 'ANALYTICS'],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;
    if (!section || !trigger) return;

    const totalWidth = section.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollAmount = totalWidth - viewportWidth;

    if (scrollAmount <= 0) return;

    const ctx = gsap.context(() => {
      gsap.to(section, {
        x: -scrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top 100px", // Trigger earlier (closer to top but with offset)
          end: () => `+=${viewportWidth * 1.5}`, // Increase scroll distance for better feel
          scrub: 0.5, // More immediate feedback than scrub: 1
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="bg-[#FFFFFF] overflow-hidden">
      <div ref={triggerRef} className="relative">
        <div 
          ref={sectionRef} 
          className="flex flex-nowrap brutal-border-b brutal-border-t"
        >
          {services.map((service) => (
            <div 
              key={service.id}
              className="flex-shrink-0 w-full md:w-1/3 p-6 lg:p-12 brutal-border-r group hover:bg-[#1a1a1f] hover:text-[#FFFFFF] transition-colors duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="big-number block mb-8 group-hover:text-[#00FF00] transition-colors">
                  {service.id}
                </span>
                <h3 className="font-display text-4xl lg:text-6xl mb-6 uppercase tracking-tighter">
                  {service.title}
                </h3>
                <p className="text-lg font-medium uppercase leading-tight mb-8 opacity-70">
                  {service.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 border-2 border-[#1a1a1f] text-xs font-display tracking-widest group-hover:border-[#00FF00] group-hover:text-[#00FF00] transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
