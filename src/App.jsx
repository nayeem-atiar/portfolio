import './index.css';
import { useEffect } from 'react';
import { SECTION_IDS, SECTION_PATHS, PATH_TO_SECTION } from './data';
import { useTheme } from './hooks/useTheme';
import { useReveal } from './hooks/useReveal';
import { useActiveNav } from './hooks/useActiveNav';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AITools from './components/AITools';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GoToTop from './components/GoToTop';

export default function App() {
  const { dark, setDark, C } = useTheme();
  const { R } = useReveal();
  const { active, scrolled } = useActiveNav();

  const scrollTo = (name) => {
    const id = SECTION_IDS[name];
    const path = SECTION_PATHS[name] ?? '/';

    if (!id) return;

    window.history.pushState({}, '', path);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname;
      const sectionName = PATH_TO_SECTION[path];

      if (!sectionName) {
        window.history.replaceState({}, '', '/');
        const target = document.getElementById(SECTION_IDS.About);
        if (target) {
          target.scrollIntoView({ behavior: 'auto', block: 'start' });
        }
        return;
      }

      const target = document.getElementById(SECTION_IDS[sectionName]);
      if (target) {
        target.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    };

    handleRouteChange();
    window.addEventListener('popstate', handleRouteChange);

    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  return (
    <div style={{ background: C.bg, color: C.text, minHeight: '100vh', transition: 'background .4s, color .4s' }}>
      {/* Grain texture overlay */}
      <div className="grain" />

      <Navbar
        dark={dark}
        setDark={setDark}
        active={active}
        scrolled={scrolled}
        C={C}
        scrollTo={scrollTo}
      />

      <Hero C={C} R={R} scrollTo={scrollTo} />
      <Experience C={C} R={R} />
      <Projects C={C} R={R} />
      <Skills C={C} R={R} />
      <AITools C={C} R={R} />
      <Testimonials C={C} R={R} />
      <Contact C={C} R={R} />
      <Footer C={C} />
      <GoToTop C={C} />
    </div>
  );
}
