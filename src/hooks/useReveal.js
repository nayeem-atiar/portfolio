import { useState, useEffect } from 'react';

export function useReveal() {
  const [revealed, setRevealed] = useState({});

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setRevealed(v => ({ ...v, [e.target.dataset.rid]: true }));
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('[data-rid]').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Helper: returns props to spread onto any element for reveal animation
  const R = (id, delay = 0) => ({
    'data-rid': id,
    className: `reveal${revealed[id] ? ' in' : ''}`,
    style: { transitionDelay: `${delay}s` },
  });

  return { revealed, R };
}
