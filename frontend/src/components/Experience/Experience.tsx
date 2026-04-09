import type { ExperienceItem } from '../../types';

type ExperienceProps = {
  items: ExperienceItem[];
};

const companyMeta: Record<string, { website: string; logo: string; logoClass: string; badgeClass?: string }> = {
  'Squillion Tech': {
    website: 'https://www.squillion.tech/',
    logo: '/Squillion-Technology.webp',
    logoClass: 'h-8 w-20',
  },
  'Scriptus Solutions Pvt. Ltd': {
    website: 'https://www.scriptussolutions.com/',
    logo: '/sciptus-solutions.png',
    logoClass: 'h-8 w-24',
    badgeClass: 'border-blue-400/60 bg-blue-700 px-2.5',
  },
  'Ciphernutz IT Services': {
    website: 'https://ciphernutz.com/',
    logo: '/ciphernutz.png',
    logoClass: 'h-8 w-20',
  },
};

export function Experience({ items }: ExperienceProps) {
  return (
    <section id="experience" className="reveal mx-auto max-w-6xl px-6 py-14">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
        <h2 className="mb-7 text-center text-3xl font-semibold text-slate-100">
          Professional <span className="text-pink-300">Experience</span>
        </h2>
        <div className="grid gap-4">
        {items.map((item) => {
          const company = companyMeta[item.company];
          return (
          <article
            key={`${item.company}-${item.period}`}
            className="rounded-xl border border-slate-800 bg-slate-950/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-pink-400/40"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                {company ? (
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${item.company} website`}
                    className={`inline-flex items-center rounded-md border px-2 py-1 shadow-sm ${
                      company.badgeClass ?? 'border-slate-700 bg-white/95'
                    }`}
                  >
                    <img
                      src={company.logo}
                      alt={`${item.company} logo`}
                      className={`${company.logoClass} object-contain`}
                      loading="lazy"
                    />
                  </a>
                ) : null}
                {company ? (
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg font-medium text-slate-100 transition hover:text-pink-300"
                  >
                    {item.company}
                  </a>
                ) : (
                  <h3 className="text-lg font-medium text-slate-100">{item.company}</h3>
                )}
              </div>
              <span className="text-sm text-slate-400">{item.period}</span>
            </div>
            <p className="mt-1 text-pink-300">{item.role}</p>
            <p className="mt-3 text-slate-300">{item.highlight}</p>
            {item.details?.length ? (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-300">
                {item.details.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            ) : null}
          </article>
        );
        })}
        </div>
      </div>
    </section>
  );
}
