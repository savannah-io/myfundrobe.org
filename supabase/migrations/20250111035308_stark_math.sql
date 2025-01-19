DO $$ 
BEGIN
  -- Update authors for existing blog posts
  UPDATE posts
  SET author = 'Coach Maria Ramirez'
  WHERE slug = 'maximizing-school-fundraising-potential-2024';

  UPDATE posts
  SET author = 'TSgt David Chen'
  WHERE slug = 'building-school-spirit-merchandise-2024';

  UPDATE posts
  SET author = 'Ms. Isabella Santos'
  WHERE slug = 'digital-fundraising-strategies-2024';

  UPDATE posts
  SET author = 'Coach Marcus Thompson'
  WHERE slug = 'seasonal-fundraising-guide-2024';

  UPDATE posts
  SET author = 'Sgt James Wilson'
  WHERE slug = 'engaging-community-support-2024';

  UPDATE posts
  SET author = 'Mrs. Sarah Mitchell'
  WHERE slug = 'student-involvement-fundraising-2024';

  UPDATE posts
  SET author = 'Coach Robert Jackson'
  WHERE slug = 'sports-team-fundraising-2024';

  UPDATE posts
  SET author = 'Ms. Elena Torres'
  WHERE slug = 'arts-program-funding-2024';

  UPDATE posts
  SET author = 'Coach Michael Brooks'
  WHERE slug = 'measuring-fundraising-success-2024';

  UPDATE posts
  SET author = 'Mrs. Patricia Kim'
  WHERE slug = 'social-media-fundraising-2024';
END $$;