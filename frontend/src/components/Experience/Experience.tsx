import type { ExperienceItem } from '../../types';

type ExperienceProps = {
  items: ExperienceItem[];
};

export function Experience({ items }: ExperienceProps) {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="mb-8 text-2xl font-semibold text-slate-100">Experience</h2>
      <div className="space-y-5">
        {items.map((item) => (
          <article key={`${item.company}-${item.period}`} className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-medium text-slate-100">{item.company}</h3>
              <span className="text-sm text-slate-400">{item.period}</span>
            </div>
            <p className="mt-1 text-sky-300">{item.role}</p>
            <p className="mt-3 text-slate-300">{item.highlight}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
