export type Project = {
  title: string;
  domain: string;
  description: string;
  techStack: string[];
  metric: string;
};

export const PROFILE_CONTEXT = `
Name: Arti Borad
Title: Senior Node.js Backend Developer
Email: artiborad0812@gmail.com
Phone: +91 7874509801
Experience: 4+ years specializing in serverless AWS architectures, NestJS microservices, and real-time systems across logistics, real-estate, and e-commerce domains.

Experience:
1) Squillion Tech (2025–Present): Led backend for a logistics platform handling 10K+ daily shipments across 100+ RBAC users, achieving 99.9% uptime.
2) Scriptus Solutions Pvt. Ltd (2022–2025): Built 15+ microservices in NestJS/AWS Lambda, cutting API response time by 25% and reducing infra costs by 20%.
3) Ciphernutz IT Services (2021–2022): Built 20+ REST APIs and automated 5 third-party integrations, saving 10 hrs/week in manual ops.
4) Glory Autotech (2020–2021): Built scalable backend APIs for automation and chatbot platforms, reducing manual task handling by 15% via scheduled jobs and notification pipelines.

Projects:
1) Gigalty (Real Estate): Serverless AWS Lambda + API Gateway + WebSocket real-time chat for 1,000+ users with 40% lower backend costs.
2) Cellular Shock (Bulk Electronics): High-throughput backend for 50,000+ product listings; PostgreSQL optimization handled 3x transaction spike with sub-200ms responses.
3) Acumen (Vehicle Management): Multi-role vehicle lifecycle management with 5+ RBAC roles; reduced processing time per vehicle by 2 hours.
4) Distribution (Transport): Event-driven consignment tracking with real-time logistics APIs across 500+ daily operations; cut ops query load by 40%.

Technical Skills:
Languages & Frameworks: JavaScript, TypeScript, Node.js, Express.js, NestJS, GraphQL, WebSockets
Cloud & Infrastructure: AWS (Lambda, S3, SNS, Cognito), Docker, Microservices, System Design, REST APIs
Databases & ORMs: MongoDB, PostgreSQL, MySQL, TypeORM
Tools: Git, Swagger, Postman, Jira, Puppeteer, RBAC, Authentication, API Optimization

Education:
B.Tech in Computer Engineering, Uka Tarsadiya University, CGPA 9.01 (2019–2022)
`.trim();

export const EXPERIENCE = [
  {
    company: 'Squillion Tech',
    period: '2025–Present',
    role: 'Senior Backend Developer',
    highlight:
      'Led backend for a logistics platform handling 10K+ daily shipments across 100+ RBAC users, achieving 99.9% uptime.',
  },
  {
    company: 'Scriptus Solutions Pvt. Ltd',
    period: '2022–2025',
    role: 'Backend Developer',
    highlight:
      'Built 15+ microservices in NestJS/AWS Lambda, cutting API response time by 25% and reducing infra costs by 20%.',
  },
  {
    company: 'Ciphernutz IT Services',
    period: '2021–2022',
    role: 'Backend Developer',
    highlight:
      'Built 20+ REST APIs and automated 5 third-party integrations, saving 10 hrs/week in manual operations.',
  },
  {
    company: 'Glory Autotech',
    period: '2020–2021',
    role: 'Backend Developer',
    highlight:
      'Built scalable backend APIs for automation and chatbot platforms, reducing manual task handling by 15%.',
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Gigalty',
    domain: 'Real Estate Platform',
    description:
      'Designed a serverless real-estate platform on AWS Lambda + API Gateway with WebSocket-based real-time chat.',
    techStack: ['NestJS', 'AWS Lambda', 'API Gateway', 'WebSockets', 'PostgreSQL'],
    metric: '1,000+ users served with 40% lower backend costs',
  },
  {
    title: 'Cellular Shock',
    domain: 'Bulk Electronics',
    description:
      'Engineered a high-throughput backend managing 50,000+ product listings with PostgreSQL query and indexing optimization.',
    techStack: ['Node.js', 'PostgreSQL', 'TypeORM', 'REST APIs', 'Docker'],
    metric: 'Handled 3x transaction spike with sub-200ms responses',
  },
  {
    title: 'Acumen',
    domain: 'Vehicle Management',
    description:
      'Built a multi-role vehicle lifecycle management system with granular RBAC from procurement to disposal.',
    techStack: ['NestJS', 'RBAC', 'MySQL', 'JWT Auth', 'Microservices'],
    metric: 'Cut processing time per vehicle by 2 hours',
  },
  {
    title: 'Distribution',
    domain: 'Transport Platform',
    description:
      'Built an event-driven consignment tracking system on real-time logistics APIs for end-to-end shipment visibility.',
    techStack: ['NestJS', 'Event-driven architecture', 'WebSockets', 'AWS SNS', 'PostgreSQL'],
    metric: 'Reduced ops query load by 40% across 500+ daily operations',
  },
];

export const SKILLS = {
  languagesAndFrameworks: ['JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'NestJS', 'GraphQL', 'WebSockets'],
  cloudAndInfrastructure: ['AWS Lambda', 'S3', 'SNS', 'Cognito', 'Docker', 'Microservices', 'System Design', 'REST APIs'],
  databasesAndOrms: ['MongoDB', 'PostgreSQL', 'MySQL', 'TypeORM'],
  tools: ['Git', 'Swagger', 'Postman', 'Jira', 'Puppeteer', 'RBAC', 'Authentication', 'API Optimization'],
};
