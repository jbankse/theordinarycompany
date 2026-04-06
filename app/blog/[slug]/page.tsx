import React from 'react';
import SimpleNavbar from '@/components/SimpleNavbar';
import SimpleFooter from '@/components/SimpleFooter';
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
    title: `${post.title} | The Ordinary Company Blog`,
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
    <main className="relative min-h-[100dvh] bg-[#FFFFFF] clip-path-none pt-24 lg:pt-32">
      <SimpleNavbar />
      
      {/* Post Header */}
      <article>
        <header className="w-full bg-[#FFFFFF] text-[#121212]">
          <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 pt-16 pb-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8 text-xs font-mono font-bold tracking-widest uppercase">
                <Link 
                  href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-[#FF0000] hover:text-[#121212] transition-colors"
                >
                  {post.category}
                </Link>
                <span className="opacity-40">•</span>
                <time dateTime={post.date} className="opacity-80">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                <span className="opacity-40">•</span>
                <span className="opacity-80">By {post.author}</span>
              </div>
              <h1 className="font-display font-black text-[clamp(3rem,5vw,5rem)] leading-[1.1] tracking-tight mb-8 text-[#121212]">
                {post.title}
              </h1>
              <p className="text-lg lg:text-xl font-medium leading-relaxed max-w-3xl opacity-80 text-[#121212]">
                {post.excerpt}
              </p>
            </div>
          </div>
        </header>

        {/* Post Content */}
        <section className="w-full bg-[#FFFFFF]">
          <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 py-16">
            <div className="max-w-4xl mx-auto pt-16 border-t border-[#121212]/10">
            <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-[#121212] prose-p:font-sans prose-p:font-medium prose-p:text-[#121212]/80 prose-a:text-[#FF0000] prose-a:no-underline hover:prose-a:underline prose-strong:font-black prose-strong:text-[#121212]">
              <div className="font-sans text-lg leading-relaxed space-y-8 text-[#121212]/80">
                <Markdown>{post.content}</Markdown>
              </div>
            </div>
            
            {/* Continue Reading Section */}
            {getAllPosts().filter((p) => p.slug !== post.slug).length > 0 && (
              <div className="mt-24 pt-12 border-t border-[#121212]/10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
                  <h3 className="font-sans font-bold text-2xl tracking-tight text-[#121212]">Continue Reading</h3>
                  <Link 
                    href="/blog"
                    className="font-sans text-sm font-bold tracking-widest hover:text-[#FF0000] transition-colors text-[#121212]"
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
                        className="group block p-6 md:p-8 border border-[#121212]/10 hover:border-[#121212] transition-colors duration-300 bg-[#FFFFFF]"
                      >
                        <time dateTime={otherPost.date} className="font-mono font-bold text-[10px] tracking-widest opacity-60 block mb-4 group-hover:text-[#121212] transition-colors">
                          {new Date(otherPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </time>
                        <h4 className="font-sans font-bold text-xl tracking-tight leading-tight mb-4 group-hover:text-[#FF0000] transition-colors text-[#121212]">
                          {otherPost.title}
                        </h4>
                        <p className="text-sm font-sans font-medium opacity-80 transition-all line-clamp-2 text-[#121212]">
                          {otherPost.excerpt}
                        </p>
                      </Link>
                    ))}
                </div>
              </div>
            )}
            </div>
          </div>
        </section>
      </article>

      <SimpleFooter />
    </main>
  );
}
