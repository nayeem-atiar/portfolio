import { useEffect, useState } from 'react';

export default function GoToTop({ C }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      type="button"
      aria-label="Go to top"
      title="Go to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        right: 'clamp(1rem, 3.5vw, 2rem)',
        bottom: 'calc(clamp(1rem, 3.5vw, 2rem) + 18px)',
        zIndex: 1000,
        width: '46px',
        height: '46px',
        borderRadius: '14px',
        border: `1px solid ${C.accent}66`,
        background: C.accent,
        color: '#fff',
        cursor: 'pointer',
        display: 'grid',
        placeItems: 'center',
        boxShadow: '0 14px 40px rgba(0,0,0,0.14)',
        transition: 'transform .15s ease, border-color .2s ease, background .2s ease, opacity .2s ease',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.borderColor = '#ffffffaa';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0px)';
        e.currentTarget.style.borderColor = `${C.accent}66`;
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'translateY(0px) scale(0.98)';
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
    >
      <span aria-hidden="true" style={{ fontSize: '1.05rem', lineHeight: 1 }}>
        ↑
      </span>
    </button>
  );
}
