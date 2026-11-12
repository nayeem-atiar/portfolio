import profilePhoto from '../assets/profile.jpg';
import { useState, useEffect } from 'react';

const TITLES = [
  'Senior Software Engineer',
  'Full-Stack Developer',
  'Angular & React Expert',
  'AI-Driven Developer'
];

function useTypingCycle(items, typingSpeed = 60, pauseMs = 1800, deletingSpeed = 35) {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = items[index];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), typingSpeed);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), deletingSpeed);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((index + 1) % items.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, items, typingSpeed, pauseMs, deletingSpeed]);

  return displayed;
}

const AI_TOOLS = [
  {
    name: 'Claude',
    bg: '#f5b46a',
    border: '#f4a261',
    icon: (
      <svg viewBox="0 0 32 32" width="18" height="18" aria-hidden="true">
        <circle cx="16" cy="16" r="13" fill="#f5b46a" />
        <path d="M21 9.5c-1.6-1.4-4.1-1.8-6.4-1.1-1.7.5-3.1 1.7-4 3.1-.8 1.2-1 2.7-.6 4 .4 1.3 1.5 2.5 2.9 3.2.6.3 1.3.6 1.8.8l.8.3-.7 1.4c-.6 1.2-.5 2.5.3 3.5.8 1 2.3 1.5 3.6 1.3 1.5-.2 2.8-1.3 3.4-2.8.4-1 .5-2.1.2-3.2-.3-1.1-1-2-2.1-2.5l-.8-.4 1.4-.9c1.1-.7 1.8-1.9 1.8-3.2 0-1.2-.5-2.4-1.5-3.2Z" fill="#fff" fillOpacity="0.9"/>
      </svg>
    )
  },
  {
    name: 'Cursor',
    bg: '#7c3aed',
    border: '#8b5cf6',
    icon: (
      <svg viewBox="0 0 32 32" width="18" height="18" aria-hidden="true">
        <rect x="5" y="5" width="22" height="22" rx="7" fill="#1f1b3a" />
        <path d="M11 9.5 21.5 16l-6.2 2.2L11 23.5V9.5Z" fill="#fff" />
        <path d="M11 9.5 21.5 16l-6.2 2.2L11 23.5V9.5Z" fill="url(#cursorGlow)" opacity="0.8" />
        <defs>
          <linearGradient id="cursorGlow" x1="11" x2="21.5" y1="9.5" y2="16" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7dd3fc"/>
            <stop offset="1" stopColor="#c084fc"/>
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    name: 'ChatGPT',
    bg: '#10b981',
    border: '#34d399',
    icon: (
      <svg viewBox="0 0 32 32" width="18" height="18" aria-hidden="true">
        <rect x="5" y="7" width="22" height="18" rx="8" fill="#0f172a" />
        <path d="M11 12.5c0-1.7 1.3-3 3-3h4.7c1.7 0 3 1.3 3 3v4.4c0 1.7-1.3 3-3 3H14l-3.7 2.8v-2.8H14c-1.7 0-3-1.3-3-3v-4.4Z" fill="#34d399" />
        <circle cx="14.5" cy="16" r="1.2" fill="#0f172a" />
        <circle cx="17.8" cy="16" r="1.2" fill="#0f172a" />
        <circle cx="21" cy="16" r="1.2" fill="#0f172a" />
      </svg>
    )
  },
  {
    name: 'Gemini',
    bg: '#8b5cf6',
    border: '#a78bfa',
    icon: (
      <svg viewBox="0 0 32 32" width="18" height="18" aria-hidden="true">
        <path d="M16 4.5 21 16l-5 11.5L11 16 16 4.5Z" fill="#8b5cf6" />
        <path d="M4.5 16 16 11l11.5 5L16 21 4.5 16Z" fill="#c084fc" opacity="0.9" />
        <circle cx="16" cy="16" r="3.4" fill="#fff" opacity="0.9" />
      </svg>
    )
  }
];

export default function Hero({ C, R, scrollTo }) {
  const typedTitle = useTypingCycle(TITLES);
  return (
    <section
      id="about"
      className="hero container"
    >
      <div className="hero-grid">

        {/* Left — Text */}
        <div>
          {/* Available badge */}
          <div {...R('hero-tag')} style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', background: C.accentL, border: `1px solid ${C.accent}33`, borderRadius: '99px', padding: '.3rem .9rem', marginBottom: '1.8rem' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: C.accent, display: 'inline-block', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: '.72rem', fontWeight: 600, color: C.accent, letterSpacing: '.08em' }}>AVAILABLE FOR WORK</span>
          </div>

          {/* Name */}
          <h1 {...R('hero-name', .05)} className="serif" style={{ fontSize: 'clamp(2.2rem, 6.5vw, 4.2rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-.02em', marginBottom: '.6rem' }}>
            Atiar Rahman<br />
            <span style={{ color: C.accent, fontStyle: 'normal', fontSize: 'clamp(2.5rem, 7.5vw, 4.8rem)' }}>Nayeem</span>
          </h1>

          {/* Title — typing animation */}
          <p {...R('hero-title', .1)} style={{ fontSize: '1.05rem', fontWeight: 500, color: C.muted, marginBottom: '1.4rem', letterSpacing: '.03em', fontFamily: "'IBM Plex Mono', monospace", minHeight: '1.6em' }}>
            {typedTitle}
            <span style={{ display: 'inline-block', width: '2px', height: '1em', background: C.accent, marginLeft: '2px', verticalAlign: 'text-bottom', animation: 'pulse 1s infinite' }} />
          </p>

          {/* Bio */}
          <p {...R('hero-bio', .15)} style={{ fontSize: '.95rem', color: C.muted, lineHeight: 1.85, maxWidth: '540px', marginBottom: '1.75rem' }}>
            Full-Stack Software Engineer with 5+ years of experience building scalable web applications using Angular, React, and Node.js. Focused on clean architecture, performant user experiences, robust backend services, and AI-driven development.
          </p>

          {/* Buttons */}
          <div {...R('hero-btns', .2)} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <button
              onClick={() => scrollTo('Projects')}
              style={{ background: C.accent, color: '#fff', border: 'none', borderRadius: '10px', padding: '.75rem 1.75rem', fontWeight: 600, cursor: 'pointer', fontSize: '.88rem', fontFamily: "'Outfit', sans-serif", letterSpacing: '.02em' }}
              onMouseOver={e => e.currentTarget.style.opacity = '.85'}
              onMouseOut={e => e.currentTarget.style.opacity = '1'}
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo('Contact')}
              style={{ background: 'transparent', color: C.text, border: `1.5px solid ${C.border}`, borderRadius: '10px', padding: '.75rem 1.75rem', fontWeight: 500, cursor: 'pointer', fontSize: '.88rem', fontFamily: "'Outfit', sans-serif", letterSpacing: '.02em', textDecoration: 'none', transition: 'all .2s ease' }}
              onMouseOver={e => {
                e.currentTarget.style.borderColor = C.accent;
                e.currentTarget.style.color = C.accent;
              }}
              onMouseOut={e => {
                e.currentTarget.style.borderColor = C.border;
                e.currentTarget.style.color = C.text;
              }}
            >
              Get in Touch
            </button>
            <a
              href="/Atiar-Rahman-Nayeem-CV.pdf"
              download="Atiar-Rahman-Nayeem-CV.pdf"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', background: 'transparent', color: C.text, border: `1.5px solid ${C.border}`, borderRadius: '10px', padding: '.75rem 1.75rem', fontWeight: 500, cursor: 'pointer', fontSize: '.88rem', fontFamily: "'Outfit', sans-serif", letterSpacing: '.02em', textDecoration: 'none' }}
              onMouseOver={e => { e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.color = C.accent; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.text; }}
            >
              Download CV
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>

          {/* Links */}
          <div {...R('hero-links', .25)} style={{ display: 'flex', gap: '2rem' }}>
            {[
              { l: 'GitHub', u: 'https://github.com/atiar-gt' },
              { l: 'LinkedIn', u: 'https://www.linkedin.com/in/atiar-rahman-nayeem/' },
              { l: 'Email', u: 'mailto:nayeematiar@gmail.com' },
            ].map(({ l, u }) => (
              <a key={l} href={u}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: C.muted, fontSize: '.82rem', fontWeight: 500, textDecoration: 'none', transition: 'color .2s' }}
                onMouseOver={e => e.currentTarget.style.color = C.accent}
                onMouseOut={e => e.currentTarget.style.color = C.muted}
              >
                {l} ↗
              </a>
            ))}
          </div>
        </div>

        {/* Right — Photo + Stats */}
        <div {...R('hero-right', .1)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          {/* Photo */}
          <div style={{ position: 'relative' }}>
            <div style={{ width: '240px', height: '240px', borderRadius: '30px', border: `2px solid ${C.accent}40`, overflow: 'hidden', position: 'relative' }}>
              <img src={profilePhoto} alt="Atiar Rahman Nayeem" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '48% 18%' }} />
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, transparent 60%, ${C.accent}22)` }} />
            </div>
            <div style={{ position: 'absolute', bottom: '-14px', right: '-14px', background: C.accent, borderRadius: '12px', padding: '.55rem .9rem' }}>
              <p style={{ fontSize: '.62rem', color: '#fff', fontWeight: 700, letterSpacing: '.05em' }}>5+ YRS EXP</p>
            </div>
            <div style={{ position: 'absolute', top: '-14px', left: '-14px', background: C.card, border: `1px solid ${C.border}`, borderRadius: '12px', padding: '.55rem .9rem' }}>
              <p style={{ fontSize: '.62rem', color: C.muted, fontWeight: 500, letterSpacing: '.04em' }}>🇧🇩 Dhaka, BD</p>
            </div>
          </div>

          {/* Mini Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', width: '100%' }}>
            {[
              { v: '5+', l: 'Years' },
              { v: '3', l: 'Companies' },
              { v: '5+', l: 'Projects' },
              { v: '8+', l: 'Technologies' },
            ].map(({ v, l }) => (
              <div key={l} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: '12px', padding: '1rem', textAlign: 'center' }}>
                <p className="serif" style={{ fontSize: '1.6rem', fontWeight: 700, color: C.accent, lineHeight: 1 }}>{v}</p>
                <p style={{ fontSize: '.72rem', color: C.muted, marginTop: '.25rem', fontWeight: 400 }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
