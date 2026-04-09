export function Skills() {
  const skillGroups = [
    {
      title: 'Languages & Frameworks',
      icon: '</>',
      items: ['JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'NestJS', 'GraphQL', 'WebSockets'],
    },
    {
      title: 'Cloud & Infrastructure',
      icon: '🌐',
      items: ['AWS (Lambda, S3, SNS, Cognito)', 'Docker', 'Microservices', 'System Design', 'REST APIs'],
    },
    {
      title: 'Databases & ORMs',
      icon: '🗄️',
      items: ['MongoDB', 'PostgreSQL', 'MySQL', 'TypeORM'],
    },
    {
      title: 'Tools',
      icon: '🛠️',
      items: ['Git', 'Swagger', 'Postman', 'Jira', 'Puppeteer', 'RBAC', 'Authentication', 'API Optimization'],
    },
  ];

  return (
    <section id="skills" className="reveal mx-auto max-w-6xl px-6 py-14">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
        <h2 className="mb-7 text-center text-3xl font-semibold text-slate-100">
          Technical <span className="text-pink-300">Skills</span>
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-pink-500/10 text-pink-300">
                  {group.icon}
                </span>
                <h3 className="font-medium text-slate-100">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
