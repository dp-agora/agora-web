import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Insight, InsightFrontmatter } from '@/types/insight';

const insightsDirectory = path.join(process.cwd(), 'content/insights');

export function getInsightSlugs(): string[] {
  if (!fs.existsSync(insightsDirectory)) return [];
  return fs.readdirSync(insightsDirectory)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));
}

export function getInsightBySlug(slug: string): Insight | null {
  const fullPath = path.join(insightsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { ...(data as InsightFrontmatter), content };
}

export function getAllInsights(lang?: 'en' | 'es'): Insight[] {
  const slugs = getInsightSlugs();
  const insights = slugs
    .map((slug) => getInsightBySlug(slug))
    .filter((insight): insight is Insight => insight !== null);

  const filtered = lang ? insights.filter((i) => i.lang === lang) : insights;

  return filtered.sort((a, b) => (a.date < b.date ? 1 : -1));
}
