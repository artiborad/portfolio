export function Contact() {
  return (
    <section id="contact" className="reveal mx-auto max-w-6xl px-6 py-14">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
        <h2 className="mb-7 text-center text-3xl font-semibold text-slate-100">
          <span className="text-pink-300">Contact Me</span>
        </h2>
        <div className="grid overflow-hidden rounded-xl border border-slate-800 bg-slate-950/70 md:grid-cols-2">
        <div className="border-b border-slate-800 bg-gradient-to-b from-[#1a1026] to-slate-950 p-6 md:border-b-0 md:border-r">
          <h3 className="text-4xl font-semibold text-pink-300">Let&apos;s work together!</h3>
          <p className="mt-3 text-slate-300">I design and build clean, scalable backend systems that deliver measurable results.</p>

          <form className="mt-6 space-y-3">
            <div className="grid gap-3 md:grid-cols-2">
              <input
                type="text"
                placeholder="First name"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-pink-400"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-pink-400"
              />
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-pink-400"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-pink-400"
              />
            </div>
            <select className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-pink-400">
              <option>Choose service</option>
              <option>Backend API Development</option>
              <option>NestJS Microservices</option>
              <option>AWS Serverless Architecture</option>
              <option>Performance Optimization</option>
            </select>
            <textarea
              rows={5}
              placeholder="Message"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-pink-400"
            />
            <a
              href="mailto:artiborad0812@gmail.com?subject=Project%20Inquiry"
              className="inline-block rounded-full bg-gradient-to-r from-pink-500 to-violet-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Send Message
            </a>
          </form>
        </div>

        <div className="p-6 text-slate-200">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-pink-500/20 p-2 text-pink-300">📞</div>
              <div>
                <p className="text-sm text-slate-400">Phone</p>
                <a href="tel:+917874509801" className="text-lg font-semibold text-slate-100 hover:text-pink-300">
                  +91 7874509801
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-pink-500/20 p-2 text-pink-300">✉️</div>
              <div>
                <p className="text-sm text-slate-400">Email</p>
                <a href="mailto:artiborad0812@gmail.com" className="text-lg font-semibold text-slate-100 hover:text-pink-300">
                  artiborad0812@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-pink-500/20 p-2 text-pink-300">📍</div>
              <div>
                <p className="text-sm text-slate-400">Location</p>
                <p className="text-lg font-semibold text-slate-100">Surat, Gujarat, India</p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-800 pt-5">
            <p className="text-sm text-slate-400">Profiles</p>
            <div className="mt-2 flex gap-3">
              <a href="https://github.com/artiborad" target="_blank" rel="noreferrer" className="text-pink-300 hover:text-pink-200">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/arti-borad/" target="_blank" rel="noreferrer" className="text-pink-300 hover:text-pink-200">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
