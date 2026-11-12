import { NAV } from '../data';
import { useEffect, useState } from 'react';

export default function Navbar({ dark, setDark, active, scrolled, C, scrollTo }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [active]);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, height: '64px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 2rem',
      background: scrolled
        ? (dark ? 'rgba(12,10,9,0.92)' : 'rgba(250,247,242,0.92)')
        : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? `1px solid ${C.border}` : '1px solid transparent',
      transition: 'background .4s, border .4s',
    }} className="nav">
      {/* Logo */}
      <a
        className="nav-logo"
        href="#"
        onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        style={{ textDecoration: 'none' }}
      >
        <span className="serif" style={{ fontSize: '1.35rem', fontWeight: 700, fontStyle: 'italic', color: C.accent }}>
          Atiar<span style={{ color: C.text }}>.</span>
        </span>
      </a>

      {/* Nav Links */}
      <div className="nav-links">
        {NAV.map(n => (
          <button
            key={n}
            onClick={() => scrollTo(n)}
            className={`nav-link${active === n ? ' active' : ''}`}
            style={{ color: active === n ? C.text : C.muted }}
          >
            {n}
          </button>
        ))}
      </div>

      {/* Mobile menu button */}
      <button
        className="nav-menu-btn"
        onClick={() => setOpen(v => !v)}
        aria-label="Toggle navigation"
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: '40px',
          height: '40px',
          borderRadius: '10px',
          background: C.surface,
          border: `1px solid ${C.border}`,
          color: C.text,
          cursor: 'pointer',
        }}
      >
        {open ? '✕' : '☰'}
      </button>

      {/* Theme Toggle */}
      <button
        className="nav-theme-btn"
        onClick={() => setDark(!dark)}
        style={{
          display: 'flex', alignItems: 'center', gap: '.5rem',
          background: C.surface, border: `1px solid ${C.border}`,
          borderRadius: '99px', padding: '.35rem .9rem',
          cursor: 'pointer', fontSize: '.75rem', fontWeight: 500,
          color: C.muted, fontFamily: "'Outfit', sans-serif",
          transition: 'background .3s',
        }}
      >
        <span style={{ fontSize: '.85rem' }}>{dark ? '☀' : '☾'}</span>
        {dark ? 'Light' : 'Dark'}
      </button>

      {/* Mobile nav panel */}
      {open && (
        <div
          className="nav-mobile-panel"
          style={{
            position: 'absolute',
            top: 'calc(64px + 10px)',
            left: 'var(--container-pad)',
            right: 'var(--container-pad)',
            background: C.card,
            border: `1px solid ${C.border}`,
            borderRadius: '14px',
            padding: '.75rem',
            boxShadow: dark ? '0 16px 60px rgba(0,0,0,0.55)' : '0 16px 60px rgba(0,0,0,0.12)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {NAV.map(n => (
              <button
                key={n}
                onClick={() => scrollTo(n)}
                style={{
                  textAlign: 'left',
                  background: 'transparent',
                  border: 'none',
                  padding: '.8rem .7rem',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  color: active === n ? C.text : C.muted,
                  fontWeight: active === n ? 600 : 500,
                  fontFamily: "'Outfit', sans-serif",
                }}
                onMouseOver={e => e.currentTarget.style.background = C.surface}
                onMouseOut={e => e.currentTarget.style.background = 'transparent'}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
