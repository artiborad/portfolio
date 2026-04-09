import { useEffect, useState } from 'react';
import { getJson } from './api';
import { Hero } from './components/Hero/Hero';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';
import { CoverLetter } from './components/CoverLetter/CoverLetter';
import { Contact } from './components/Contact/Contact';
import { AiChat } from './components/AiChat/AiChat';
import type { ExperienceItem, Project } from './types';

function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [experience, setExperience] = useState<ExperienceItem[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loadError, setLoadError] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        const [experienceData, projectsData] = await Promise.all([
          getJson<ExperienceItem[]>('/experience'),
          getJson<Project[]>('/projects'),
        ]);
        setExperience(experienceData);
        setProjects(projectsData);
      } catch (error) {
        setLoadError(error instanceof Error ? error.message : 'Failed to load portfolio data');
      }
    };
    void load();
  }, []);

  return (
    <main className="min-h-screen bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <Hero onAskAi={() => setChatOpen(true)} />
        {loadError ? <p className="px-6 text-rose-300">{loadError}</p> : null}
        <Experience items={experience} />
        <Projects projects={projects} />
        <Skills />
        <CoverLetter />
        <Contact />
      </div>
      <AiChat open={chatOpen} onToggle={() => setChatOpen((prev) => !prev)} />
    </main>
  );
}

export default App;
