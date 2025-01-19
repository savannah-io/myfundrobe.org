DO $$ 
BEGIN
  -- Update authors for blog posts to bland names
  UPDATE posts
  SET author = 'John Smith'
  WHERE slug = 'maximizing-school-fundraising-potential-2024';

  UPDATE posts
  SET author = 'Mary Johnson'
  WHERE slug = 'building-school-spirit-merchandise-2024';

  UPDATE posts
  SET author = 'Robert Williams'
  WHERE slug = 'digital-fundraising-strategies-2024';

  UPDATE posts
  SET author = 'Susan Brown'
  WHERE slug IN (
    'seasonal-fundraising-guide-2024',
    'engaging-community-support-2024',
    'student-involvement-fundraising-2024',
    'sports-team-fundraising-2024',
    'arts-program-funding-2024',
    'measuring-fundraising-success-2024',
    'social-media-fundraising-2024'
  );
END $$;