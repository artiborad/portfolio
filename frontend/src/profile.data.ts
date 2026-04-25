import type { EducationItem, ExperienceItem, Project, SkillGroup } from './types';

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Squillion Tech',
    period: '03/2025–Present',
    role: 'Senior Backend Developer',
    highlight: 'Building and maintaining scalable backend APIs for enterprise logistics and vehicle management platforms.',
    details: [
      'Implemented role-based access control (RBAC) with fine-grained permissions across multiple modules.',
      'Designed and integrated AWS S3 image uploads with private and public bucket access.',
      'Supported logistics workloads handling 10K+ daily shipments across 100+ RBAC users with 99.9% uptime.',
    ],
  },
  {
    company: 'Scriptus Solutions Pvt. Ltd',
    period: '08/2022–02/2025',
    role: 'Backend Developer',
    highlight: 'Designed and developed scalable backend APIs using Node.js, NestJS, and AWS Lambda.',
    details: [
      'Implemented real-time communication using WebSockets and Socket.IO.',
      'Built secure authentication and role-based access using JWT and AWS Cognito.',
      'Optimized database queries, improving API performance and response time.',
      'Reviewed and refactored team code to improve maintainability.',
    ],
  },
  {
    company: 'Ciphernutz IT Services',
    period: '12/2021–07/2022',
    role: 'Backend Developer',
    highlight: 'Developed REST APIs using Node.js and Express.js.',
    details: [
      'Integrated third-party APIs and added Swagger documentation.',
      'Implemented cron jobs and automated email notifications.',
      'Delivered 20+ REST APIs and automated 5 integrations, saving ~10 hours/week in manual operations.',
    ],
  },
  {
    company: 'Glory Autotech',
    period: '2020–2021',
    role: 'Backend Developer',
    highlight: 'Built backend APIs for automation and chatbot platforms.',
    details: [
      'Implemented scheduled tasks and notification workflows.',
      'Reduced manual task handling by approximately 15% through automation.',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Gigalty',
    domain: 'Real Estate Platform',
    description: 'Designed database and APIs using AWS Lambda for a modern real-estate platform.',
    techStack: ['NestJS', 'AWS Lambda', 'API Gateway', 'WebSockets', 'PostgreSQL'],
    metric: '1,000+ users served with 40% lower backend costs',
    details: [
      'Implemented real-time buyer-owner chat using WebSockets.',
      'Built scalable APIs to support property workflows and listing interactions.',
    ],
  },
  {
    title: 'Cellular Shock',
    domain: 'Bulk Electronics Platform',
    description: 'Built backend from scratch for product listings and bulk order workflows.',
    techStack: ['Node.js', 'PostgreSQL', 'TypeORM', 'REST APIs', 'Docker'],
    metric: 'Handled 3x transaction spike with sub-200ms responses',
    details: [
      'Optimized PostgreSQL queries and indexing for high-volume transactions.',
      'Improved system reliability for peak order throughput scenarios.',
    ],
  },
  {
    title: 'Resume Done',
    domain: 'Automated Job Search Platform',
    description: 'Built automation pipelines for job discovery and matching workflows.',
    techStack: ['Node.js', 'Puppeteer', 'Third-party APIs', 'REST APIs'],
    metric: 'Reduced manual job-search effort via end-to-end automation',
    details: ['Integrated third-party APIs and implemented web scraping using Puppeteer.'],
  },
  {
    title: 'Acumen',
    domain: 'Vehicle and Compound Management System',
    description:
      'Acumen VISTA is a logistics and vehicle management platform built to streamline operations at Long Bennington through real-time tracking, allocation, scheduling, and reporting.',
    techStack: ['NestJS', 'RBAC', 'MySQL', 'JWT Auth', 'Microservices'],
    metric: 'Cut processing time per vehicle by 2 hours',
    details: [
      'Real-Time Tracking: Monitored vehicles across the supply chain with live GPS and status updates.',
      'Optimized Scheduling: Implemented intelligent planning tools for efficient resource allocation.',
      'Vehicle Management: Covered comprehensive PDI, storage, and distribution tracking.',
      'Automated Reporting: Generated performance reports and operational insights.',
      'User-Friendly Interface: Enabled access across desktop and mobile workflows.',
      'Security: Enforced role-based permissions to ensure secure access and data isolation.',
    ],
  },
  {
    title: 'RMS',
    domain: 'Resource Management System',
    description: 'Integrated Apex RMS with internal systems to manage vehicle-related operations.',
    techStack: ['Node.js', 'NestJS', 'Apex RMS Integration', 'REST APIs'],
    metric: 'Improved job assignment and status visibility across lifecycle stages',
    details: [
      'Managed vehicle-related jobs and workflows by integrating Apex RMS with the internal platform.',
      'Built and maintained APIs for job status updates, assignments, and lifecycle tracking.',
    ],
  },
  {
    title: 'Distribution System',
    domain: 'Transport Management System',
    description: 'Built APIs to track and manage consignments across the full distribution lifecycle.',
    techStack: ['NestJS', 'Event-driven architecture', 'WebSockets', 'AWS SNS', 'PostgreSQL'],
    metric: 'Reduced ops query load by 40% across 500+ daily operations',
    details: ['Designed logistics workflows similar to large-scale transport platforms.'],
  },
  {
    title: 'SportEco',
    domain: 'Sports Management Web App',
    description:
      'Built backend capabilities for a sports community platform enabling player workflows, communication, and operations.',
    techStack: ['Node.js', 'React Native Support APIs', 'Razorpay', 'Push Notifications', 'Event Management'],
    metric: 'Improved player and organizer collaboration through a unified web-first experience',
    details: [
      'Supported player management, profile workflows, and app-level operations.',
      'Integrated payment and communication flows for practical day-to-day use.',
    ],
  },
  {
    title: 'Appie',
    domain: 'Job Portal with Chat and Filtering',
    description: 'Developed job application APIs and WebSocket messaging to support real-time hiring conversations.',
    techStack: ['Node.js', 'WebSockets', 'REST APIs', 'Advanced Filtering', 'Geo-based Matching'],
    metric: 'Improved candidate discovery and recruiter response speed with real-time communication',
    details: [
      'Developed job application APIs and WebSocket channels for recruiter-candidate messaging.',
      'Implemented advanced filtering and nearby candidate matching to improve relevant results.',
    ],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
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

export const EDUCATION: EducationItem = {
  degree: 'B.Tech in Computer Engineering',
  institution: 'Uka Tarsadiya University',
  institutionUrl: 'https://utu.ac.in/',
  logo: '/Education/image.png',
  cgpa: '9.01',
  period: '2019–2022',
};
