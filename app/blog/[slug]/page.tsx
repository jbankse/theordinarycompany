import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';
import Link from 'next/link';
import { Metadata } from 'next';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Ordinary Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FFFFFF] pt-16">
      <Navbar />
      
      {/* Post Header */}
      <article>
        <header className="border-b-2 border-[#121212] p-8 lg:p-24 bg-white text-[#121212]">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8 text-sm font-medium uppercase tracking-widest opacity-60">
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
              <span>•</span>
              <span>By {post.author}</span>
            </div>
            <h1 className="font-display text-5xl lg:text-7xl leading-[1.1] uppercase tracking-tight mb-8">
              {post.title}
            </h1>
            <p className="text-xl lg:text-2xl font-medium leading-relaxed max-w-3xl opacity-80">
              {post.excerpt}
            </p>
          </div>
        </header>

        {/* Post Content */}
        <section className="p-8 lg:p-24 border-b-2 border-[#121212]">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-xl max-w-none">
              <div className="font-sans text-lg lg:text-xl leading-relaxed space-y-8 text-[#121212]/90">
                <Markdown>{post.content}</Markdown>
              </div>
            </div>
            
            <div className="mt-24 pt-12 border-t-2 border-[#121212]/10">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
                <h3 className="font-display text-2xl uppercase tracking-tight">Continue Reading</h3>
                <Link 
                  href="/blog"
                  className="font-display text-sm tracking-[0.2em] uppercase hover:text-[#00FF00] transition-colors font-bold border-b-2 border-[#121212] pb-1"
                >
                  View All Insights
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {getAllPosts()
                  .filter((p) => p.slug !== post.slug)
                  .slice(0, 2)
                  .map((otherPost) => (
                    <Link 
                      key={otherPost.slug} 
                      href={`/blog/${otherPost.slug}`}
                      className="group block p-6 border-2 border-[#121212] hover:bg-[#00FF00] transition-colors"
                    >
                      <time dateTime={otherPost.date} className="font-mono text-[10px] tracking-widest opacity-40 uppercase block mb-4">
                        {new Date(otherPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </time>
                      <h4 className="font-display text-xl uppercase leading-tight mb-4 group-hover:text-white transition-colors">
                        {otherPost.title}
                      </h4>
                      <p className="text-sm uppercase opacity-60 group-hover:opacity-100 group-hover:text-white transition-all line-clamp-2">
                        {otherPost.excerpt}
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
