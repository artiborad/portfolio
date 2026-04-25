import { useEffect } from 'react';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';
import { Education } from './components/Education/Education';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { EXPERIENCE, PROJECTS } from './profile.data';

function App() {
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
        <Experience items={EXPERIENCE} />
        <Projects projects={PROJECTS} />
        <Skills />
        <Education />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

export default App;
