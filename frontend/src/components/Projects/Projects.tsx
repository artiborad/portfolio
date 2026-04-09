import { useState } from 'react';
import { apiBase } from '../../api';
import type { Project } from '../../types';

type SearchResult = {
  explanation: string;
  matches: Project[];
};

type ProjectsProps = {
  projects: Project[];
};

export function Projects({ projects }: ProjectsProps) {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SearchResult | null>(null);
  const [error, setError] = useState('');

  const runSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`${apiBase}/ai/search`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });
      const data = (await response.json()) as SearchResult;
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Search failed');
    } finally {
      setLoading(false);
    }
  };

  const cards = result?.matches?.length ? result.matches : projects;

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="mb-3 text-2xl font-semibold text-slate-100">Notable Projects</h2>
      <div className="mb-8 flex flex-col gap-3 rounded-xl border border-slate-800 bg-slate-900/40 p-4 md:flex-row">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="show me projects involving real-time systems"
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none"
        />
        <button onClick={runSearch} className="rounded-lg bg-sky-500 px-5 py-2 text-sm font-medium text-white">
          {loading ? 'Searching...' : 'Smart Search'}
        </button>
      </div>
      {error && <p className="mb-5 text-sm text-rose-300">{error}</p>}
      {result?.explanation && <p className="mb-6 rounded-lg border border-slate-800 p-4 text-slate-300">{result.explanation}</p>}
      <div className="grid gap-4 md:grid-cols-2">
        {cards.map((project) => (
          <article key={project.title} className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
            <h3 className="text-lg font-medium text-slate-100">{project.title}</h3>
            <p className="mt-1 text-sm text-sky-300">{project.domain}</p>
            <p className="mt-3 text-slate-300">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-teal-300">{project.metric}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
