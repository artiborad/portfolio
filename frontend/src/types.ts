export type ExperienceItem = {
  company: string;
  period: string;
  role: string;
  highlight: string;
  details?: string[];
};

export type Project = {
  title: string;
  domain: string;
  description: string;
  techStack: string[];
  metric: string;
  details?: string[];
};

export type SkillGroup = {
  title: string;
  icon: string;
  items: string[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  institutionUrl: string;
  logo: string;
  cgpa: string;
  period: string;
};
