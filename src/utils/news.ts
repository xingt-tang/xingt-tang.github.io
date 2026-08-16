export interface NewsItem {
  date: Date;
  body: string;
  source: string;
}

const rawNewsFiles = import.meta.glob("../content/news/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

function parseNews(source: string, path: string): NewsItem | null {
  const match = source.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!match) return null;

  const dateValue = match[1].match(/^date:\s*(.+)$/m)?.[1]?.trim();
  if (!dateValue) return null;

  const date = new Date(`${dateValue}T00:00:00`);
  if (Number.isNaN(date.getTime())) return null;

  return {
    date,
    body: match[2].trim(),
    source: path,
  };
}

export const news = Object.entries(rawNewsFiles)
  .map(([path, source]) => parseNews(source, path))
  .filter((item): item is NewsItem => item !== null)
  .sort((a, b) => b.date.getTime() - a.date.getTime());
