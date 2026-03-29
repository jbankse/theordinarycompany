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
      <section className="border-b-2 border-[#121212] p-8 lg:p-16 flex flex-col lg:flex-row justify-between items-end gap-8">
        <div>
          <span className="big-number block">03</span>
          <h1 className="font-display text-6xl lg:text-9xl leading-none uppercase tracking-tighter">
            Insights
          </h1>
        </div>
        <div className="max-w-md">
          <p className="font-mono text-xs tracking-[0.2em] uppercase opacity-50 mb-4">
            Industry Perspectives & Updates
          </p>
          <p className="text-xl font-medium uppercase leading-tight">
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
              className="group border-b-2 border-[#121212] md:border-r-2 md:even:border-r-0 lg:border-r-2 lg:[&:nth-child(3n)]:border-r-0 p-8 lg:p-12 hover:bg-[#00FF00] transition-colors duration-300 flex flex-col justify-between min-h-[400px]"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <time dateTime={post.date} className="font-mono text-[10px] tracking-widest opacity-40 uppercase">
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </time>
                  <div className="w-2 h-2 rounded-full bg-[#121212] group-hover:bg-white transition-colors" />
                </div>
                <h2 className="font-display text-3xl lg:text-4xl leading-none uppercase tracking-tight mb-6 group-hover:text-white transition-colors">
                  {post.title}
                </h2>
                <p className="font-sans text-sm uppercase leading-relaxed opacity-60 group-hover:opacity-100 group-hover:text-white transition-all">
                  {post.excerpt}
                </p>
              </div>
              <div className="mt-12 flex items-center gap-4">
                <span className="font-display text-xs tracking-[0.3em] uppercase font-bold">Read Article</span>
                <div className="h-px flex-1 bg-[#121212]/10 group-hover:bg-white/30 transition-colors" />
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
