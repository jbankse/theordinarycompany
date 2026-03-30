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
    <main className="min-h-[100dvh] bg-[#FFFFFF] pt-16">
      <Navbar />
      
      {/* Post Header */}
      <article>
        <header className="brutal-border-b border-[#121212] p-8 lg:p-24 bg-[#F5F5F5] text-[#121212]">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8 text-sm font-mono font-bold uppercase tracking-widest opacity-80">
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
              <span>•</span>
              <span>By {post.author}</span>
            </div>
            <h1 className="font-display font-black text-5xl lg:text-7xl leading-[1.1] uppercase tracking-tighter mb-8">
              {post.title}
            </h1>
            <p className="text-xl lg:text-2xl font-medium leading-relaxed max-w-3xl opacity-90 uppercase">
              {post.excerpt}
            </p>
          </div>
        </header>

        {/* Post Content */}
        <section className="p-8 lg:p-24 brutal-border-b border-[#121212] bg-[#FFFFFF]">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-xl max-w-none prose-headings:font-display prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-headings:text-[#121212] prose-p:font-medium prose-p:text-[#121212]/90 prose-a:text-[#FF0000] prose-a:no-underline hover:prose-a:underline prose-strong:font-black prose-strong:text-[#121212]">
              <div className="font-sans text-lg lg:text-xl leading-relaxed space-y-8 text-[#121212]/90">
                <Markdown>{post.content}</Markdown>
              </div>
            </div>
            
            <div className="mt-24 pt-12 border-t-[3px] border-[#121212]">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
                <h3 className="font-display font-black text-3xl uppercase tracking-tighter text-[#121212]">Continue Reading</h3>
                <Link 
                  href="/blog"
                  className="font-display text-sm tracking-widest uppercase hover:text-[#FF0000] transition-colors font-bold border-b-[3px] border-[#121212] hover:border-[#FF0000] pb-1 text-[#121212]"
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
                      className="group block p-6 md:p-8 border-[3px] border-[#121212] hover:bg-[#121212] transition-colors duration-300 bg-[#FFFFFF]"
                    >
                      <time dateTime={otherPost.date} className="font-mono font-bold text-[10px] tracking-widest opacity-60 uppercase block mb-4 group-hover:text-[#FFFFFF] transition-colors">
                        {new Date(otherPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </time>
                      <h4 className="font-display font-black text-2xl uppercase tracking-tighter leading-tight mb-4 group-hover:text-[#FFFFFF] transition-colors text-[#121212]">
                        {otherPost.title}
                      </h4>
                      <p className="text-sm font-medium uppercase opacity-80 group-hover:opacity-100 group-hover:text-[#FFFFFF] transition-all line-clamp-2 text-[#121212]">
                        {otherPost.excerpt}
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </article>

      <Footer hideSubmit={true} />
    </main>
  );
}
