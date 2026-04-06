import React from 'react';
import SimpleNavbar from '@/components/SimpleNavbar';
import SimpleFooter from '@/components/SimpleFooter';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { Metadata } from 'next';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category).toUpperCase();
  
  return {
    title: `${decodedCategory} | The Ordinary Company Insights`,
    description: `Articles and perspectives regarding ${decodedCategory} from The Ordinary Company.`,
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  const categories = Array.from(new Set(posts.map((post) => post.category)));
  
  return categories.map((category) => ({
    category: category.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const allPosts = getAllPosts();
  
  const filteredPosts = allPosts.filter(
    (post) => post.category.toLowerCase().replace(/\s+/g, '-') === category
  );

  const categoryName = filteredPosts[0]?.category || decodeURIComponent(category).toUpperCase();

  return (
    <main className="relative min-h-[100dvh] bg-[#FFFFFF] clip-path-none pt-24 lg:pt-32">
      <SimpleNavbar />
      
      {/* Header Section */}
      <section className="bg-[#F5F5F5] max-w-[1600px] mx-auto brutal-border-b border-[#121212]">
        <div className="p-8 lg:p-16 flex flex-col lg:flex-row justify-between items-end gap-8">
          <div>
            <span className="font-mono font-bold text-xs tracking-widest uppercase opacity-50 mb-4 block text-[#121212]">
              Category
            </span>
            <h1 className="font-display font-black text-6xl lg:text-9xl leading-none uppercase tracking-tighter text-[#121212]">
              {categoryName}
            </h1>
          </div>
          <div className="max-w-md">
            <Link 
              href="/blog"
              className="font-mono font-bold text-xs tracking-widest uppercase text-[#FF0000] hover:text-[#121212] transition-colors"
            >
              ← Back to all insights
            </Link>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="bg-[#FFFFFF]">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group p-8 lg:p-12 hover:bg-[#121212] transition-colors duration-300 flex flex-col justify-between min-h-[400px]"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="flex flex-col gap-1">
                    <time dateTime={post.date} className="font-mono font-bold text-[10px] tracking-widest opacity-60 uppercase group-hover:text-[#FFFFFF] transition-colors">
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </time>
                  </div>
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
          ))}
        </div>
      </section>

      <SimpleFooter />
    </main>
  );
}
