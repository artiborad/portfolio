import { Cloud, Database, Wrench, Workflow } from 'lucide-react';

const skillGroups = [
  {
    title: 'Languages & Frameworks',
    icon: Workflow,
    items: ['JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'NestJS', 'GraphQL', 'WebSockets'],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    items: ['AWS Lambda', 'S3', 'SNS', 'Cognito', 'Docker', 'Microservices', 'System Design', 'REST APIs'],
  },
  {
    title: 'Databases & ORMs',
    icon: Database,
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'TypeORM'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    items: ['Git', 'Swagger', 'Postman', 'Jira', 'Puppeteer', 'RBAC', 'Authentication', 'API Optimization'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="mb-8 text-2xl font-semibold text-slate-100">Technical Skills</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <article key={group.title} className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
              <div className="mb-3 flex items-center gap-2 text-sky-300">
                <Icon size={18} />
                <h3 className="font-medium text-slate-100">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
