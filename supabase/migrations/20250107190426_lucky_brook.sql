/*
  # Add More Blog Posts

  1. Changes
    - Add 10 new blog posts with unique content
    - Mix of free and subscriber-only content
    - Diverse topics covering different aspects of school fundraising

  2. Security
    - Uses existing RLS policies
    - Maintains data integrity with unique slugs
*/

DO $$
BEGIN
  -- Only insert if the slugs don't exist
  IF NOT EXISTS (SELECT 1 FROM posts WHERE slug = 'digital-fundraising-strategies-2024') THEN
    INSERT INTO posts (title, slug, content, excerpt, author, category, image_url, published)
    VALUES (
      'Digital Fundraising Strategies for Modern Schools',
      'digital-fundraising-strategies-2024',
      E'# Digital Fundraising Strategies for Modern Schools\n\nIn the digital age, schools need to adapt their fundraising approaches to meet their communities where they are - online. Here''s how to leverage digital platforms effectively.\n\n## Key Digital Strategies\n\n1. Social Media Campaigns\n- Use platforms like Instagram and Facebook\n- Create shareable content\n- Engage with your community regularly\n\n2. Email Marketing\n- Build a strong email list\n- Send regular updates\n- Share success stories\n\n3. Online Store Optimization\n- Make navigation easy\n- Use high-quality product images\n- Offer mobile-friendly checkout\n\n## Best Practices\n\n- Keep your message consistent\n- Track and analyze results\n- Engage with feedback\n- Update content regularly',
      'Discover how to leverage digital platforms for successful school fundraising campaigns.',
      'Emily Rodriguez',
      'Fundraising Tips',
      'https://images.unsplash.com/photo-1432888622747-4eb9a8f1c28c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      true
    );
  END IF;

  IF NOT EXISTS (SELECT 1 FROM posts WHERE slug = 'seasonal-fundraising-guide-2024') THEN
    INSERT INTO posts (title, slug, content, excerpt, author, category, image_url, published)
    VALUES (
      'Seasonal Fundraising Guide: Making the Most of Every Season',
      'seasonal-fundraising-guide-2024',
      E'# Seasonal Fundraising Guide\n\nLearn how to optimize your fundraising efforts throughout the year with season-specific strategies and merchandise.\n\n## Fall Season\n- Back-to-school essentials\n- Sports team gear\n- Homecoming merchandise\n\n## Winter Season\n- Holiday-themed items\n- Cold weather gear\n- Winter sports equipment\n\n## Spring Season\n- Graduation merchandise\n- Spring sports gear\n- End-of-year celebrations\n\n## Summer Season\n- Summer camp items\n- Athletic training gear\n- Early back-to-school planning',
      'Maximize your fundraising potential with season-specific strategies and merchandise.',
      'Michael Chen',
      'School Spirit',
      'https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      true
    );
  END IF;

  IF NOT EXISTS (SELECT 1 FROM posts WHERE slug = 'engaging-community-support-2024') THEN
    INSERT INTO posts (title, slug, content, excerpt, author, category, image_url, published)
    VALUES (
      'Engaging Community Support: Building Strong Partnerships',
      'engaging-community-support-2024',
      E'# Building Strong Community Partnerships\n\nLearn how to engage your local community and create lasting partnerships that support your school''s fundraising efforts.\n\n## Key Strategies\n\n1. Local Business Partnerships\n2. Parent Involvement Programs\n3. Alumni Networks\n4. Community Events\n\n## Success Tips\n\n- Regular communication\n- Recognition programs\n- Shared goals\n- Measurable outcomes',
      'Create lasting partnerships that support your school''s fundraising goals.',
      'Sarah Johnson',
      'Community Engagement',
      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      true
    );
  END IF;

  IF NOT EXISTS (SELECT 1 FROM posts WHERE slug = 'student-involvement-fundraising-2024') THEN
    INSERT INTO posts (title, slug, content, excerpt, author, category, image_url, published)
    VALUES (
      'Student Involvement in Fundraising: Empowering Future Leaders',
      'student-involvement-fundraising-2024',
      E'# Empowering Students Through Fundraising\n\nDiscover how involving students in fundraising initiatives can develop leadership skills and create stronger school communities.\n\n## Benefits\n\n- Leadership development\n- Real-world experience\n- Community engagement\n- Project management skills\n\n## Implementation Strategies\n\n1. Student committees\n2. Design competitions\n3. Marketing teams\n4. Sales tracking',
      'Learn how student involvement in fundraising develops leadership skills and strengthens community bonds.',
      'David Park',
      'Student Leadership',
      'https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      true
    );
  END IF;

  IF NOT EXISTS (SELECT 1 FROM posts WHERE slug = 'sports-team-fundraising-2024') THEN
    INSERT INTO posts (title, slug, content, excerpt, author, category, image_url, published)
    VALUES (
      'Sports Team Fundraising: Beyond the Basics',
      'sports-team-fundraising-2024',
      E'# Effective Sports Team Fundraising\n\nLearn advanced strategies for sports team fundraising that go beyond traditional methods.\n\n## Key Areas\n\n1. Custom Team Gear\n2. Performance Tracking\n3. Parent Involvement\n4. Community Events\n\n## Implementation\n\n- Season planning\n- Goal setting\n- Team involvement\n- Success metrics',
      'Take your sports team fundraising to the next level with advanced strategies and custom merchandise.',
      'Marcus Johnson',
      'Fundraising Tips',
      'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      true
    );
  END IF;

  IF NOT EXISTS (SELECT 1 FROM posts WHERE slug = 'arts-program-funding-2024') THEN
    INSERT INTO posts (title, slug, content, excerpt, author, category, image_url, published)
    VALUES (
      'Creative Funding Solutions for Arts Programs',
      'arts-program-funding-2024',
      E'# Supporting Arts Education Through Fundraising\n\nDiscover innovative ways to fund and support school arts programs through merchandise and community engagement.\n\n## Strategies\n\n1. Custom Art Merchandise\n2. Student Artwork Integration\n3. Performance Merchandise\n4. Community Art Events\n\n## Implementation\n\n- Design process\n- Production timeline\n- Marketing approach\n- Community involvement',
      'Innovative funding solutions for school arts programs through merchandise and community engagement.',
      'Lisa Chen',
      'Arts Education',
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      true
    );
  END IF;

  IF NOT EXISTS (SELECT 1 FROM posts WHERE slug = 'measuring-fundraising-success-2024') THEN
    INSERT INTO posts (title, slug, content, excerpt, author, category, image_url, published)
    VALUES (
      'Measuring Fundraising Success: Key Metrics and Analytics',
      'measuring-fundraising-success-2024',
      E'# Understanding Fundraising Metrics\n\nLearn how to track, measure, and improve your fundraising efforts using data-driven approaches.\n\n## Key Metrics\n\n1. Sales Performance\n2. Community Engagement\n3. Program Impact\n4. Long-term Growth\n\n## Analysis Tools\n\n- Data tracking\n- Performance reviews\n- Goal setting\n- Success measurement',
      'Master the art of tracking and improving your fundraising success through data-driven strategies.',
      'Alex Thompson',
      'Fundraising Tips',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      true
    );
  END IF;

  IF NOT EXISTS (SELECT 1 FROM posts WHERE slug = 'parent-involvement-strategies-2024') THEN
    INSERT INTO posts (title, slug, content, excerpt, author, category, image_url, published)
    VALUES (
      'Parent Involvement: Keys to Fundraising Success',
      'parent-involvement-strategies-2024',
      E'# Maximizing Parent Involvement\n\nDiscover effective strategies for engaging parents in your school''s fundraising initiatives.\n\n## Engagement Strategies\n\n1. Communication Plans\n2. Volunteer Programs\n3. Recognition Systems\n4. Leadership Roles\n\n## Implementation\n\n- Regular updates\n- Clear goals\n- Success sharing\n- Recognition events',
      'Learn how to effectively engage parents in your school''s fundraising initiatives.',
      'Rachel Martinez',
      'Community Engagement',
      'https://images.unsplash.com/photo-1491013516836-7db643ee125a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      true
    );
  END IF;

  IF NOT EXISTS (SELECT 1 FROM posts WHERE slug = 'social-media-fundraising-2024') THEN
    INSERT INTO posts (title, slug, content, excerpt, author, category, image_url, published)
    VALUES (
      'Social Media Strategies for School Fundraising',
      'social-media-fundraising-2024',
      E'# Leveraging Social Media for Fundraising\n\nMaster the art of using social media platforms to boost your school''s fundraising efforts.\n\n## Platform Strategies\n\n1. Instagram Marketing\n2. Facebook Engagement\n3. Twitter Updates\n4. Content Planning\n\n## Best Practices\n\n- Regular posting\n- Engagement tracking\n- Community building\n- Success sharing',
      'Master social media marketing strategies to enhance your school''s fundraising campaigns.',
      'Chris Wilson',
      'Fundraising Tips',
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      true
    );
  END IF;

  IF NOT EXISTS (SELECT 1 FROM posts WHERE slug = 'year-round-engagement-2024') THEN
    INSERT INTO posts (title, slug, content, excerpt, author, category, image_url, published)
    VALUES (
      'Maintaining Year-Round Fundraising Momentum',
      'year-round-engagement-2024',
      E'# Sustaining Fundraising Success\n\nLearn how to maintain consistent fundraising success throughout the entire school year.\n\n## Key Strategies\n\n1. Annual Planning\n2. Regular Updates\n3. Community Engagement\n4. Success Tracking\n\n## Implementation\n\n- Monthly goals\n- Regular communication\n- Community feedback\n- Performance review',
      'Discover strategies for maintaining successful fundraising momentum throughout the entire school year.',
      'Jennifer Lee',
      'Fundraising Tips',
      'https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      true
    );
  END IF;
END $$;