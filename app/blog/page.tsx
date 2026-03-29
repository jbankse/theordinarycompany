import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { motion } from 'motion/react';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-[#FFFFFF] pt-16">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-[#F5F5F5] brutal-border-b border-[#121212] p-8 lg:p-16 flex flex-col lg:flex-row justify-between items-end gap-8">
        <div>
          <span className="big-number block">03</span>
          <h1 className="font-display font-black text-6xl lg:text-9xl leading-none uppercase tracking-tighter text-[#121212]">
            Insights
          </h1>
        </div>
        <div className="max-w-md">
          <p className="font-mono font-bold text-xs tracking-widest uppercase opacity-50 mb-4 text-[#121212]">
            Industry Perspectives & Updates
          </p>
          <p className="text-xl font-medium uppercase leading-tight text-[#121212]">
            Defining the future of visual infrastructure through strategic observations and technical expertise.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group brutal-border-b border-[#121212] md:brutal-border-r md:even:border-r-0 lg:brutal-border-r lg:[&:nth-child(3n)]:border-r-0 p-8 lg:p-12 hover:bg-[#121212] transition-colors duration-300 flex flex-col justify-between min-h-[400px]"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <time dateTime={post.date} className="font-mono font-bold text-[10px] tracking-widest opacity-60 uppercase group-hover:text-[#FFFFFF] transition-colors">
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </time>
                  <div className="w-2 h-2 rounded-full bg-[#121212] group-hover:bg-[#FFFFFF] transition-colors" />
                </div>
                <h2 className="font-display font-black text-3xl lg:text-4xl leading-none uppercase tracking-tighter mb-6 group-hover:text-[#FFFFFF] transition-colors text-[#121212]">
                  {post.title}
                </h2>
                <p className="font-sans font-medium text-sm uppercase leading-relaxed opacity-80 group-hover:opacity-100 group-hover:text-[#FFFFFF] transition-all text-[#121212]">
                  {post.excerpt}
                </p>
              </div>
              <div className="mt-12 flex items-center gap-4">
                <span className="font-display text-xs tracking-widest uppercase font-bold group-hover:text-[#FFFFFF] transition-colors text-[#121212]">Read Article</span>
                <div className="h-[2px] flex-1 bg-[#121212] group-hover:bg-[#FFFFFF] transition-colors" />
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full p-24 text-center border-b-2 border-[#121212]">
            <p className="font-display text-4xl tracking-widest uppercase opacity-20">
              No articles found
            </p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
