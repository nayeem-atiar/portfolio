import { useState, useEffect } from 'react';
import { NAV, SECTION_IDS, SECTION_PATHS } from '../data';

export function useActiveNav() {
  const [active, setActive] = useState('About');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateActiveSection = (syncRoute = true) => {
      setScrolled(window.scrollY > 40);

      const mid = window.innerHeight * 0.4;
      let visibleSection = 'About';

      for (const name of [...NAV].reverse()) {
        const el = document.getElementById(SECTION_IDS[name]);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= mid) {
          visibleSection = name;
          break;
        }
      }

      setActive(visibleSection);

      if (syncRoute) {
        const path = SECTION_PATHS[visibleSection];
        if (path && window.location.pathname !== path) {
          window.history.replaceState(window.history.state, '', path);
        }
      }
    };

    const onRouteChange = () => {
      updateActiveSection(false);
    };

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('popstate', onRouteChange);
    onRouteChange();

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('popstate', onRouteChange);
    };
  }, []);

  return { active, scrolled };
}
