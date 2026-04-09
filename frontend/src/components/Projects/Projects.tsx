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

const projectLinks: Record<string, string> = {
  Gigalty: 'https://gigalty.in/buy',
  Acumen: 'https://play.google.com/store/apps/details?id=com.app.acumen',
  'Resume Done': 'https://resumedone.co/onboard/start',
};

const projectSlides: Record<string, string[]> = {
  Gigalty: ['/gigalty/1.png', '/gigalty/2.png', '/gigalty/3.png', '/gigalty/4.png'],
  'Cellular Shock': ['/cellulerstock/1.png', '/cellulerstock/2.png', '/cellulerstock/3.png'],
  Acumen: ['/Acumen/1.png', '/Acumen/2.png', '/Acumen/3.png'],
  'Resume Done': ['/ResumeDone/1.png', '/ResumeDone/2.png', '/ResumeDone/3.png'],
  RMS: ['/RMS/1.png', '/RMS/2.png'],
  'Distribution System': ['/distribution/1.png'],
};

export function Projects({ projects }: ProjectsProps) {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SearchResult | null>(null);
  const [error, setError] = useState('');
  const [slideIndexes, setSlideIndexes] = useState<Record<string, number>>({});

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
  const getSlideIndex = (projectTitle: string) => slideIndexes[projectTitle] ?? 0;

  const prevProjectSlide = (projectTitle: string) => {
    const slides = projectSlides[projectTitle];
    if (!slides?.length) return;
    setSlideIndexes((prev) => ({
      ...prev,
      [projectTitle]: ((prev[projectTitle] ?? 0) - 1 + slides.length) % slides.length,
    }));
  };

  const nextProjectSlide = (projectTitle: string) => {
    const slides = projectSlides[projectTitle];
    if (!slides?.length) return;
    setSlideIndexes((prev) => ({
      ...prev,
      [projectTitle]: ((prev[projectTitle] ?? 0) + 1) % slides.length,
    }));
  };

  return (
    <section id="projects" className="reveal mx-auto max-w-6xl px-6 py-14">
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
          <article
            key={project.title}
            className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-500/40"
          >
            {projectLinks[project.title] ? (
              <a
                href={projectLinks[project.title]}
                target="_blank"
                rel="noreferrer"
                className="text-lg font-medium text-slate-100 transition hover:text-sky-300"
              >
                {project.title}
              </a>
            ) : (
              <h3 className="text-lg font-medium text-slate-100">{project.title}</h3>
            )}
            {projectSlides[project.title]?.length ? (
              <div className="relative mt-3">
                <img
                  src={projectSlides[project.title][getSlideIndex(project.title)]}
                  alt={`${project.title} preview`}
                  className="h-56 w-full rounded-lg border border-slate-800 object-cover md:h-64"
                  loading="lazy"
                />
                {projectSlides[project.title].length > 1 ? (
                  <>
                    <button
                      type="button"
                      onClick={() => prevProjectSlide(project.title)}
                      aria-label={`Show previous ${project.title} image`}
                      className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 px-3 py-1 text-xl text-white transition hover:bg-black/60"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      onClick={() => nextProjectSlide(project.title)}
                      aria-label={`Show next ${project.title} image`}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 px-3 py-1 text-xl text-white transition hover:bg-black/60"
                    >
                      →
                    </button>
                    <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/35 px-3 py-1">
                      {projectSlides[project.title].map((_, idx) => (
                        <button
                          key={`${project.title}-dot-${idx}`}
                          type="button"
                          onClick={() =>
                            setSlideIndexes((prev) => ({
                              ...prev,
                              [project.title]: idx,
                            }))
                          }
                          aria-label={`Go to ${project.title} image ${idx + 1}`}
                          className={`h-2.5 w-2.5 rounded-full transition ${
                            getSlideIndex(project.title) === idx ? 'bg-white' : 'bg-white/45 hover:bg-white/70'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
            ) : null}
            <p className="mt-1 text-sm text-sky-300">{project.domain}</p>
            <p className="mt-3 text-slate-300">{project.description}</p>
            {project.details?.length ? (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-300">
                {project.details.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            ) : null}
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
