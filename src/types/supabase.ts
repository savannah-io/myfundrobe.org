export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          id: string
          created_at: string
          title: string
          slug: string
          content: string
          excerpt: string
          author: string
          category: string
          image_url: string
          published: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          slug: string
          content: string
          excerpt: string
          author: string
          category: string
          image_url: string
          published?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          slug?: string
          content?: string
          excerpt?: string
          author?: string
          category?: string
          image_url?: string
          published?: boolean
        }
      }
    }
  }
}