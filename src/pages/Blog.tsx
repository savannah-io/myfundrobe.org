import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionBackground } from '../components/common/SectionBackground';
import { Footer } from '../components/Footer/Footer';
import { BlogList } from '../components/blog/BlogList';
import { PremiumContentTimer } from '../components/auth/PremiumContentTimer';
import { DonateSection } from '../components/DonateSection';
import { PremiumContentPopup } from '../components/blog/PremiumContentPopup';
import { supabase } from '../lib/supabase';
import type { Database } from '../types/supabase';

type Post = Database['public']['Tables']['posts']['Row'];

export function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showPremiumPopup, setShowPremiumPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPosts() {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .eq('published', true)
          .order('created_at', { ascending: false });

        if (error) throw error;
        setPosts(data || []);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError('Unable to load posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const handlePostClick = async (post: Post) => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (post.category === 'Fundraising Tips' && !session) {
        setShowPremiumPopup(true);
      } else {
        navigate(`/blog/${post.slug}`);
      }
    } catch (error) {
      console.error('Auth error:', error);
      setShowPremiumPopup(true);
    }
  };

  return (
    <>
      <div className="relative min-h-screen">
        <SectionBackground className="pt-32 pb-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative mb-16">
              {/* Enhanced background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#5de0e6] via-[#4bc5cb] to-[#5de0e6] blur-lg opacity-50 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#5de0e6]/30 via-[#4bc5cb]/20 to-[#5de0e6]/30 blur-xl" />
              <div className="absolute inset-0 bg-gradient-to-tl from-[#5de0e6]/20 via-white/30 to-[#5de0e6]/20 blur-2xl" />
              
              <div className="relative bg-gradient-to-r from-[#5de0e6] via-[#4bc5cb] to-[#5de0e6] p-1 rounded-2xl">
                <div className="bg-white px-8 py-4 rounded-xl">
                  <div className="flex items-center justify-center space-x-6">
                    <div className="relative">
                      <img 
                        src="https://i.ibb.co/hKRkZ6s/Untitled-design-11.png"
                        alt="Fundy Mascot"
                        className="w-24 h-24 object-contain animate-bounce-slow relative z-10"
                      />
                      <div className="absolute -bottom-4 left-4 w-16 h-4 bg-black/20 rounded-full blur-sm animate-bounce-slow transform -skew-x-12"></div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold relative">
                      {/* Base text with gradient */}
                      <span className="bg-gradient-to-r from-[#5de0e6] via-[#4bc5cb] to-[#5de0e6] bg-clip-text text-transparent relative">
                        Fundy's Tips & News
                      </span>

                      {/* Static shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-30 blur-sm" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-20 blur-md" />

                      {/* Neon underline */}
                      <span className="absolute -bottom-2 left-0 right-0 h-[4px] bg-gradient-to-r from-[#5de0e6] via-[#4bc5cb] to-[#5de0e6] animate-pulse shadow-[0_0_15px_#5de0e6,0_0_30px_#5de0e6,0_0_45px_#5de0e6]" />
                      <span className="absolute -bottom-2 left-0 right-0 h-[4px] bg-gradient-to-r from-[#5de0e6] via-[#4bc5cb] to-[#5de0e6] blur-[3px] animate-pulse opacity-95" />
                      <span className="absolute -bottom-2 left-0 right-0 h-[4px] bg-gradient-to-r from-[#5de0e6] via-[#4bc5cb] to-[#5de0e6] blur-[6px] animate-pulse opacity-90" />
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-16">
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the latest <strong>fundraising news</strong> through our <strong>learning platform</strong>
              </p>
            </div>

            {loading ? (
              <div className="text-center">
                <div className="inline-block p-4 bg-white/10 backdrop-blur-md rounded-lg">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#5de0e6]" />
                </div>
              </div>
            ) : error ? (
              <div className="text-center mb-8">
                <div className="inline-block bg-amber-50 text-amber-800 px-4 py-2 rounded-lg">
                  {error}
                </div>
              </div>
            ) : null}

            <BlogList posts={posts} onPostClick={handlePostClick} />
          </div>
        </SectionBackground>
      </div>
      <DonateSection />
      <PremiumContentTimer />
      {showPremiumPopup && <PremiumContentPopup onClose={() => setShowPremiumPopup(false)} />}
      <Footer />
    </>
  );
}