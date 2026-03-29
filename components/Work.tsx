'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

const projects = [
  {
    id: '01',
    title: 'LUMINA_SYSTEMS',
    category: 'INFRASTRUCTURE',
    image: 'https://picsum.photos/seed/tech/1200/800',
  },
  {
    id: '02',
    title: 'AURA_MOTION',
    category: 'VISUAL_SYSTEMS',
    image: 'https://picsum.photos/seed/studio/1200/800',
  },
  {
    id: '03',
    title: 'CORE_IDENTITY',
    category: 'BRANDING',
    image: 'https://picsum.photos/seed/identity/1200/800',
  },
  {
    id: '04',
    title: 'NETWORK_MEDIA',
    category: 'MANAGED_SERVICES',
    image: 'https://picsum.photos/seed/network/1200/800',
  },
];

export default function Work() {
  return (
    <section id="work" className="bg-[#FFFFFF]">
      <div className="grid grid-cols-1 lg:grid-cols-2 brutal-border-b">
        {projects.map((project, i) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative aspect-[16/10] overflow-hidden brutal-border-r last:border-r-0 lg:even:border-r-0 bg-[#1a1a1f]"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover opacity-80 md:opacity-50 group-hover:opacity-100 md:group-hover:scale-105 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
              <div className="flex justify-between items-start">
                <span className="font-display text-xl md:text-2xl text-[#00FF00] bg-[#1a1a1f] px-3 md:px-4 py-1">
                  {project.id}
                </span>
                <span className="font-display text-[10px] md:text-xs tracking-widest text-[#FFFFFF] bg-[#1a1a1f] px-3 md:px-4 py-1">
                  {project.category}
                </span>
              </div>
              
              <div className="bg-[#1a1a1f] p-4 md:p-6 brutal-border border-[#00FF00] translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-display text-2xl md:text-4xl text-[#FFFFFF] uppercase tracking-tighter">
                  {project.title}
                </h3>
                <div className="mt-4 flex items-center gap-4">
                  <span className="text-[#00FF00] text-xs font-display">VIEW_PROJECT</span>
                  <div className="flex-1 h-[1px] bg-[#00FF00]" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
