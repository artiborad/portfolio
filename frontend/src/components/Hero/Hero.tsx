type HeroProps = {
  onAskAi: () => void;
};

export function Hero({ onAskAi }: HeroProps) {
  return (
    <section id="hero" className="mx-auto max-w-6xl px-6 pb-16 pt-24 md:pt-28">
      <p className="mb-4 text-sm uppercase tracking-[0.2em] text-sky-400">Senior Node.js Backend Developer</p>
      <h1 className="text-4xl font-semibold text-slate-100 md:text-6xl">Arti Borad</h1>
      <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
        Backend engineer with 4+ years building serverless AWS systems, NestJS microservices, and real-time
        platforms across logistics, real-estate, and e-commerce.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a className="rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-medium text-white" href="mailto:artiborad0812@gmail.com">
          Email
        </a>
        <a className="rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200" href="https://github.com/artiborad" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200" href="https://www.linkedin.com/in/arti-borad/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
      <button
        onClick={onAskAi}
        className="mt-10 rounded-lg border border-sky-500/60 bg-sky-500/10 px-4 py-2 text-sm text-sky-300"
      >
        Ask AI about me →
      </button>
    </section>
  );
}
