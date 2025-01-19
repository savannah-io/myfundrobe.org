import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Lock } from 'lucide-react';
import { format } from 'date-fns';
import type { Database } from '../../types/supabase';

type Post = Database['public']['Tables']['posts']['Row'];

interface BlogCardProps {
  post: Post;
  onClick: () => void;
}

export function BlogCard({ post, onClick }: BlogCardProps) {
  const isSubscribeContent = post.category === 'Fundraising Tips';

  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-lg group hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-w-16 aspect-h-9 relative">
        <img
          src={post.image_url}
          alt={post.title}
          className="object-cover w-full h-48"
        />
        {isSubscribeContent && (
          <div className="absolute top-4 right-4 bg-[#5de0e6] text-gray-900 px-3 py-1 rounded-full text-sm font-medium flex items-center">
            <Lock className="w-4 h-4 mr-1" />
            Subscribe
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span className="flex items-center mr-4">
            <User className="w-4 h-4 mr-2" />
            {post.author}
          </span>
          <span className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            {format(new Date(post.created_at), 'MMM d, yyyy')}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-6">
          {post.excerpt}
        </p>
        <div className="inline-flex items-center px-4 py-2 rounded-lg border-2 border-[#5de0e6] text-[#5de0e6] group-hover:bg-[#5de0e6] group-hover:text-white transition-all duration-300">
          Read More
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </div>
    </div>
  );
}