'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: '01',
    title: 'LUMINA MODULE',
    category: 'BRAND ARCHITECTURE',
    image: 'https://picsum.photos/seed/tech/1200/800',
  },
  {
    id: '02',
    title: 'AURA MOVEMENT',
    category: 'MOTION SYSTEMS',
    image: 'https://picsum.photos/seed/studio/1200/800',
  },
  {
    id: '03',
    title: 'CORE PATTERN',
    category: 'IDENTITY FRAMEWORK',
    image: 'https://picsum.photos/seed/identity/1200/800',
  },
  {
    id: '04',
    title: 'NETWORK STRUCTURE',
    category: 'DIGITAL GRID',
    image: 'https://picsum.photos/seed/network/1200/800',
  },
];

export default function Work() {
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
      gsap.fromTo(section, 
        { x: -scrollAmount },
        {
          x: 0,
          ease: "none",
          scrollTrigger: {
            trigger: trigger,
            start: "top 64px", // Trigger exactly below the navbar (64px)
            end: () => `+=${viewportWidth * 2}`, // Extend scroll distance for a smoother feel
            scrub: 0.5,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" className="bg-[#FFFFFF] overflow-hidden text-[#121212] brutal-border-b border-[#121212]">
      <div ref={triggerRef} className="relative h-[calc(100dvh-64px)]">
        <div 
          ref={sectionRef}
          className="flex flex-nowrap h-full border-[#121212] box-border"
        >
          {projects.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-shrink-0 w-full md:w-[85vw] h-full group flex flex-col brutal-border-r border-[#121212] last:border-r-0 bg-[#FFFFFF]"
            >
              {/* Image Section */}
              <div className="relative flex-1 overflow-hidden brutal-border-b border-[#121212] bg-[#121212]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute top-6 left-6 md:top-8 md:left-8 flex gap-4 pointer-events-none">
                  <span className="font-display font-bold text-xl md:text-2xl text-[#FFFFFF] bg-[#121212] px-4 py-1 border-2 border-[#121212]">
                    {project.id}
                  </span>
                  <span className="font-display font-bold text-xs md:text-sm tracking-widest text-[#121212] bg-[#FFFFFF] px-4 py-2 border-2 border-[#121212] self-center">
                    {project.category}
                  </span>
                </div>
              </div>
              
              {/* Title Section */}
              <div className="h-[25vh] md:h-[30vh] p-6 md:p-12 flex flex-col justify-between bg-[#FFFFFF] group-hover:bg-[#F5F5F5] transition-colors duration-300">
                <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-4">
                  <h3 className="font-display font-black text-[clamp(2.5rem,5.5vw,6rem)] text-[#121212] uppercase tracking-tighter leading-none">
                    {project.title}
                  </h3>
                  
                  <button className="group/btn flex items-center gap-4 w-fit mt-4 xl:mt-0 flex-shrink-0 self-start xl:self-auto">
                    <span className="text-[#121212] text-sm md:text-base font-display font-bold tracking-widest uppercase">
                      View Project
                    </span>
                    <div className="w-12 md:w-24 h-[3px] bg-[#121212] group-hover/btn:w-16 md:group-hover/btn:w-32 transition-all duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
