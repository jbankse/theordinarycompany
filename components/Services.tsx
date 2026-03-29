'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: '01',
    title: 'PRECISION BRANDING',
    description: 'Constructing the fundamental core of visual identity through systematic design.',
    tags: ['STRATEGY', 'LOGOTYPE', 'SYSTEMS'],
  },
  {
    id: '02',
    title: 'MOTION ARCHITECTURE',
    description: 'Precision engineered motion graphics & 3D sequences.',
    tags: ['ANIMATION', 'VFX', 'RENDER'],
  },
  {
    id: '03',
    title: 'DIGITAL INFRASTRUCTURE',
    description: 'Robust web platforms built to scale. Form meets function.',
    tags: ['WEB', 'PLATFORMS', 'DEPLOY'],
  },
  {
    id: '04',
    title: 'SYSTEMATIC GROWTH',
    description: 'Data-driven growth and systematic market infiltration.',
    tags: ['GROWTH', 'METRICS', 'CAMPAIGNS'],
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
    <section id="services" className="bg-[#FFFFFF] overflow-hidden text-[#000000]">
      <div ref={triggerRef} className="relative">
        <div 
          ref={sectionRef} 
          className="flex flex-nowrap brutal-border-b brutal-border-t border-[#000000] box-border"
        >
          {services.map((service) => (
            <div 
              key={service.id}
              className="flex-shrink-0 w-full md:w-1/3 p-6 lg:p-12 brutal-border-r border-[#000000] group hover:bg-[#F5F5F5] transition-colors duration-300 flex flex-col justify-between box-border"
            >
              <div>
                <span className="big-number block mb-8 group-hover:text-[#000000] transition-colors">
                  {service.id}
                </span>
                <h3 className="font-display font-black text-4xl lg:text-7xl mb-6 uppercase tracking-tighter">
                  {service.title}
                </h3>
                <p className="text-lg font-medium uppercase leading-tight mb-8 opacity-90">
                  {service.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 border-2 border-[#000000] text-xs font-display font-bold tracking-widest group-hover:bg-[#000000] group-hover:text-[#FFFFFF] transition-colors">
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
