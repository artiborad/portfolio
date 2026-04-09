import { useEffect, useState } from 'react';
import { getJson } from './api';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';
import { Education } from './components/Education/Education';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import type { ExperienceItem, Project } from './types';

function App() {
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

  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <div className="mx-auto max-w-screen-2xl">
        <Hero />
        {loadError ? <p className="px-6 text-rose-300">{loadError}</p> : null}
        <Experience items={experience} />
        <Projects projects={projects} />
        <Skills />
        <Education />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

export default App;
