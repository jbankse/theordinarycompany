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
    title: 'WEB SYSTEMS',
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
          start: "top 68px", // Trigger exactly below the navbar (64px + 4px borders)
          end: () => `+=${viewportWidth * 2}`, // Extend scroll distance for a smoother feel
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="bg-[#FFFFFF] overflow-hidden text-[#121212] brutal-border-b border-[#121212]">
      <div ref={triggerRef} className="relative h-[calc(100vh-68px)]">
        <div 
          ref={sectionRef} 
          className="flex flex-nowrap h-full brutal-border-b brutal-border-t border-[#121212] box-border"
        >
          {services.map((service, i) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-shrink-0 w-full md:w-[85vw] h-full group flex flex-col brutal-border-r border-[#121212] last:border-r-0 bg-[#FFFFFF]"
            >
              {/* Top Section */}
              <div className="relative flex-1 p-6 md:p-12 brutal-border-b border-[#121212] bg-[#F5F5F5] group-hover:bg-[#FFFFFF] transition-colors duration-500 flex flex-col justify-center">
                <span className="absolute top-6 left-6 md:top-8 md:left-8 font-display font-bold text-xl md:text-2xl text-[#FFFFFF] bg-[#121212] px-4 py-1 border-2 border-[#121212]">
                  {service.id}
                </span>
                
                <div className="max-w-4xl mx-auto text-center mt-12">
                  <p className="text-[clamp(1.5rem,5vw,3rem)] font-medium uppercase leading-tight opacity-90 break-words">
                    {service.description}
                  </p>
                </div>
              </div>
              
              {/* Bottom Title Section */}
              <div className="h-[25vh] md:h-[30vh] p-6 md:p-12 flex flex-col justify-between bg-[#FFFFFF] group-hover:bg-[#121212] group-hover:text-[#FFFFFF] transition-colors duration-300">
                <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6">
                  <h3 className="font-display font-black text-[clamp(2.5rem,5.5vw,6rem)] uppercase tracking-tighter leading-none">
                    {service.title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 justify-start xl:justify-end w-full xl:w-auto mt-4 xl:mt-0">
                    {service.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 md:px-4 md:py-2 border-2 border-[#121212] group-hover:border-[#FFFFFF] text-xs md:text-sm font-display font-bold tracking-widest bg-[#121212] text-[#FFFFFF] group-hover:bg-[#FFFFFF] group-hover:text-[#121212] transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
