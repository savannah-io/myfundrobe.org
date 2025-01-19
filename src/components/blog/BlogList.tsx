import React from 'react';
import { BlogCard } from './BlogCard';
import type { Database } from '../../types/supabase';

type Post = Database['public']['Tables']['posts']['Row'];

interface BlogListProps {
  posts: Post[];
  onPostClick: (post: Post) => void;
}

export function BlogList({ posts, onPostClick }: BlogListProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogCard 
          key={post.id} 
          post={post} 
          onClick={() => onPostClick(post)}
        />
      ))}
    </div>
  );
}