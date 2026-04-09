import { useState } from 'react';
import type { Project } from '../../types';

type ProjectsProps = {
  projects: Project[];
};

const projectLinks: Record<string, string> = {
  Gigalty: 'https://gigalty.in/buy',
  Acumen: 'https://play.google.com/store/apps/details?id=com.app.acumen',
  'Resume Done': 'https://resumedone.co/onboard/start',
  SportEco: 'https://admin-panel-psi-tan.vercel.app/login',
  Appie: 'https://play.google.com/store/apps/details?id=com.appie.getappie&pli=1',
};

const projectSlides: Record<string, string[]> = {
  Gigalty: ['/gigalty/1.png', '/gigalty/2.png', '/gigalty/3.png', '/gigalty/4.png'],
  'Cellular Shock': ['/cellulerstock/1.png', '/cellulerstock/2.png', '/cellulerstock/3.png'],
  Acumen: ['/Acumen/1.png', '/Acumen/2.png', '/Acumen/3.png'],
  'Resume Done': ['/ResumeDone/1.png', '/ResumeDone/2.png', '/ResumeDone/3.png'],
  RMS: ['/RMS/1.png', '/RMS/2.png'],
  'Distribution System': ['/distribution/1.png', '/distribution/2.png'],
  SportEco: ['/SportEco/1.png', '/SportEco/2.png', '/SportEco/3.png', '/SportEco/4.png'],
  Appie: ['/appie/1.png', '/appie/2.png'],
};

export function Projects({ projects }: ProjectsProps) {
  const [slideIndexes, setSlideIndexes] = useState<Record<string, number>>({});
  const cards = projects;
  const getSlideIndex = (projectTitle: string) => slideIndexes[projectTitle] ?? 0;
  const isMobileScreenshotProject = (projectTitle: string) => ['Appie', 'Acumen'].includes(projectTitle);

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
      <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
        <h2 className="mb-7 text-center text-3xl font-semibold text-slate-100">
          <span className="text-pink-300">Projects</span>
        </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {cards.map((project) => (
          <article
            key={project.title}
            className="rounded-xl border border-slate-800 bg-slate-950/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-pink-400/40"
          >
            {projectLinks[project.title] ? (
              <a
                href={projectLinks[project.title]}
                target="_blank"
                rel="noreferrer"
                className="text-lg font-medium text-slate-100 transition hover:text-pink-300"
              >
                {project.title}
              </a>
            ) : (
              <h3 className="text-lg font-medium text-slate-100">{project.title}</h3>
            )}
            {projectSlides[project.title]?.length ? (
              <div className="relative mt-3">
                <div
                  className={`rounded-lg border border-slate-800 ${
                    isMobileScreenshotProject(project.title)
                      ? 'flex h-56 items-center justify-center bg-slate-900/60 p-2 md:h-64'
                      : ''
                  }`}
                >
                  <img
                    src={projectSlides[project.title][getSlideIndex(project.title)]}
                    alt={`${project.title} preview`}
                    className={`rounded-lg ${
                      isMobileScreenshotProject(project.title)
                        ? 'h-full w-auto max-w-full object-contain'
                        : 'h-56 w-full object-cover md:h-64'
                    }`}
                    loading="lazy"
                  />
                </div>
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
            <p className="mt-1 text-sm text-pink-300">{project.domain}</p>
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
            <p className="mt-4 text-sm text-pink-300">{project.metric}</p>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}
