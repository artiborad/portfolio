const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-8">
      <section className="border-y border-slate-800/80 bg-gradient-to-r from-[#11081a] via-[#1a1026] to-[#11081a] py-10">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-3xl font-medium text-pink-200 md:text-4xl">
            &quot;Strive to build things that make a difference!&quot;
          </p>
          <p className="mt-2 text-xl text-pink-300">- Arti Borad</p>
        </div>
      </section>

      <section className="border-t border-slate-800/80 bg-[#0a0614] py-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-sm text-slate-300 md:flex-row">
          <p>Designed and Developed by Arti Borad</p>
          <p>Copyright © {year} AB</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/artiborad" target="_blank" rel="noreferrer" className="hover:text-pink-300">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/arti-borad/" target="_blank" rel="noreferrer" className="hover:text-pink-300">
              LinkedIn
            </a>
            <a href="mailto:artiborad0812@gmail.com" className="hover:text-pink-300">
              Email
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}
