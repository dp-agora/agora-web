export interface InsightFrontmatter {
  title: string;
  seoTitle: string;
  excerpt: string;
  seoDescription: string;
  date: string;
  lastUpdated: string;
  lang: 'en' | 'es';
  slug: string;
  translationSlug: string;
  author: string;
  authorTitle: string;
  authorUrl?: string;
  category: string;
  tags: string[];
  readingTime: string;
  ogImage: string;
}

export interface Insight extends InsightFrontmatter {
  content: string;
}
