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

function getInsightByFileSlug(fileSlug: string): Insight | null {
  const fullPath = path.join(insightsDirectory, `${fileSlug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { ...(data as InsightFrontmatter), content };
}

/**
 * Look up an insight by its URL slug.
 *
 * Backwards compatible behavior:
 * - If a file named `${slug}.md` exists, that file wins.
 * - Otherwise, we scan all insight files and match by frontmatter `slug`
 *   and (if provided) `lang`.
 *
 * This allows bilingual insights to be stored as e.g. `my-article.en.md` +
 * `my-article.es.md` while keeping the same URL slug in both locales.
 */
export function getInsightBySlug(
  slug: string,
  lang?: 'en' | 'es'
): Insight | null {
  const direct = getInsightByFileSlug(slug);
  if (direct && (!lang || direct.lang === lang)) return direct;

  const slugs = getInsightSlugs();
  const insights = slugs
    .map((fileSlug) => getInsightByFileSlug(fileSlug))
    .filter((insight): insight is Insight => insight !== null);

  return (
    insights.find((i) => i.slug === slug && (!lang || i.lang === lang)) ?? null
  );
}

export function getAllInsights(lang?: 'en' | 'es'): Insight[] {
  const slugs = getInsightSlugs();
  const insights = slugs
    .map((fileSlug) => getInsightByFileSlug(fileSlug))
    .filter((insight): insight is Insight => insight !== null);

  const filtered = lang ? insights.filter((i) => i.lang === lang) : insights;

  return filtered.sort((a, b) => (a.date < b.date ? 1 : -1));
}
