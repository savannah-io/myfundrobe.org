import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import { SectionBackground } from '../components/common/SectionBackground';
import { Footer } from '../components/Footer/Footer';
import { PremiumContentTimer } from '../components/auth/PremiumContentTimer';
import { supabase } from '../lib/supabase';
import type { Database } from '../types/supabase';

type Post = Database['public']['Tables']['posts']['Row'];

export function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .eq('slug', slug)
          .eq('published', true)
          .single();

        if (error) throw error;
        setPost(data);

        // Show subscribe modal for premium content after 20 seconds
        if (data?.category === 'Fundraising Tips' && window.showSubscribeModal) {
          const timer = setTimeout(() => {
            window.showSubscribeModal();
          }, 20000);
          return () => clearTimeout(timer);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        navigate('/blog');
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug, navigate]);

  const handleShare = async () => {
    try {
      await navigator.share({
        title: post?.title,
        text: post?.excerpt,
        url: window.location.href,
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  if (loading) {
    return (
      <SectionBackground className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center text-gray-600">Loading post...</div>
        </div>
      </SectionBackground>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <>
      <SectionBackground className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          {/* Navigation */}
          <div className="mb-12">
            <button
              onClick={() => navigate('/blog')}
              className="flex items-center text-[#5de0e6] hover:text-[#4bc5cb] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tips
            </button>
          </div>

          <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Featured Image */}
            <div className="relative h-[400px]">
              <img
                src={post.image_url}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Article Header */}
            <div className="px-8 -mt-20 relative">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                {/* Category */}
                <div className="text-[#5de0e6] text-sm font-medium mb-4">
                  {post.category}
                </div>

                {/* Title */}
                <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {post.title}
                </h1>

                {/* Meta Info */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-6 mb-6">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center text-gray-600">
                      <User className="w-4 h-4 mr-2" />
                      <span className="text-sm">{post.author}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">
                        {format(new Date(post.created_at), 'MMMM d, yyyy')}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={handleShare}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    title="Share article"
                  >
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Excerpt */}
                <div className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {post.excerpt}
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="px-8 py-12">
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => (
                      <h1 className="text-3xl font-bold text-gray-900 mb-6">{children}</h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">{children}</h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">{children}</h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-gray-600 leading-relaxed mb-6">{children}</p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc pl-6 mb-6 text-gray-600">{children}</ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal pl-6 mb-6 text-gray-600">{children}</ol>
                    ),
                    li: ({ children }) => (
                      <li className="mb-2">{children}</li>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-[#5de0e6] pl-4 italic text-gray-700 my-6">
                        {children}
                      </blockquote>
                    ),
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>
            </div>
          </article>
        </div>
      </SectionBackground>
      <PremiumContentTimer />
      <Footer />
    </>
  );
}