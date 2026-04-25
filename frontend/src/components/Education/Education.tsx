import { EDUCATION } from '../../profile.data';

export function Education() {
  return (
    <section id="education" className="reveal mx-auto max-w-6xl px-6 py-14">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-slate-200">
        <h2 className="mb-7 text-center text-3xl font-semibold text-slate-100">
          <span className="text-pink-300">Education</span>
        </h2>
        <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-start">
          <img
            src={EDUCATION.logo}
            alt={EDUCATION.institution}
            className="h-24 w-40 rounded-lg border border-slate-700 bg-white object-contain p-2"
            loading="lazy"
          />
          <div>
            <p className="text-lg font-medium text-slate-100">{EDUCATION.degree}</p>
            <a
              href={EDUCATION.institutionUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-slate-300 transition hover:text-pink-300"
            >
              {EDUCATION.institution}
            </a>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-3 text-sm text-pink-300">
          <span className="rounded-full border border-pink-400/40 px-3 py-1">CGPA: {EDUCATION.cgpa}</span>
          <span className="rounded-full border border-pink-400/40 px-3 py-1">{EDUCATION.period}</span>
        </div>
        </div>
      </div>
    </section>
  );
}
