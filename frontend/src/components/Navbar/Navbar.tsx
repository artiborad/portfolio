const navItems = [
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#cover-letter' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/70 bg-slate-950/85 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#hero" className="text-lg font-semibold tracking-wide text-slate-100">
          Arti Borad
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm text-slate-300 transition hover:text-sky-300">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
