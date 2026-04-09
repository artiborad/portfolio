export function Hero() {
  return (
    <section id="hero" className="reveal mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-20 md:grid-cols-2 md:items-center md:pt-24">
      <div>
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-sky-400">Senior Node.js Backend Developer</p>
        <h1 className="text-4xl font-semibold text-slate-100 md:text-6xl">Hi all, I&apos;m Arti 👋</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-xl">
          I build scalable backend products with Node.js, NestJS, serverless AWS architecture, and real-time systems.
          I focus on performance, clean APIs, and measurable business impact.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            aria-label="GitHub"
            href="https://github.com/artiborad"
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-200 transition hover:border-sky-400 hover:text-sky-300"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.5-.7 1.7-1.1.1-.7.4-1.1.7-1.4-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
            </svg>
          </a>
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/arti-borad/"
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-200 transition hover:border-sky-400 hover:text-sky-300"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.5v1.6h.1c.5-.9 1.7-1.8 3.4-1.8 3.7 0 4.3 2.3 4.3 5.4v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.3 2.1 2.1 0 0 1 0 4.3Zm1.8 13H3.5V9h3.6v11.4ZM22.2 0H1.8C.8 0 0 .8 0 1.8v20.4C0 23.2.8 24 1.8 24h20.4c1 0 1.8-.8 1.8-1.8V1.8C24 .8 23.2 0 22.2 0Z" />
            </svg>
          </a>
          <a
            aria-label="Email"
            href="mailto:artiborad0812@gmail.com"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-200 transition hover:border-sky-400 hover:text-sky-300"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M2 4.5A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-15Zm2.8.5L12 10l7.2-5H4.8Zm14.7 2.2L12.4 12a.8.8 0 0 1-.8 0L4.5 7.2V19h15V7.2Z" />
            </svg>
          </a>
          <a
            aria-label="Phone"
            href="tel:+917874509801"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-200 transition hover:border-sky-400 hover:text-sky-300"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M6.6 2h2.6a1 1 0 0 1 1 .8l.5 2.8a1 1 0 0 1-.3.9L8.8 8a15.3 15.3 0 0 0 7.2 7.2l1.5-1.6a1 1 0 0 1 .9-.3l2.8.5a1 1 0 0 1 .8 1v2.6a1 1 0 0 1-.9 1A17.5 17.5 0 0 1 4 3a1 1 0 0 1 1-.9h1.6Z" />
            </svg>
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a className="rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-400" href="#contact">
            Contact Me
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-sky-500/60 bg-sky-500/10 px-5 py-2.5 text-sm font-semibold text-sky-300 transition hover:-translate-y-0.5 hover:bg-sky-500/20"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="relative flex min-h-[320px] items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/40">
        <div className="absolute h-56 w-56 rounded-full bg-sky-500/20 blur-2xl" />
        <div className="absolute -right-6 top-10 h-28 w-28 rounded-full bg-violet-500/30 blur-xl" />
        <div className="relative z-10">
          <img
            src="/profile_arti.jpg"
            alt="Arti Borad"
            className="mx-auto h-40 w-40 rounded-full border-4 border-slate-700 object-cover shadow-xl"
          />
          <p className="mt-5 text-center text-xl font-medium text-slate-200">Building Backend Systems</p>
          <p className="mt-2 text-center text-sm text-slate-400">NestJS • AWS • WebSockets • PostgreSQL</p>
        </div>
      </div>
    </section>
  );
}
