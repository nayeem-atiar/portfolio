import { AI_TOOLS, METRICS } from '../data';
import SectionHeader from './SectionHeader';
import { useState, useEffect, useRef } from 'react';

// Icons that don't exist in the Simple Icons library are drawn locally here
// (stroke = currentColor, so they follow the card colour in dark and light mode).
const LOCAL_LOGOS = {
  codex: (
    <>
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      <path d="m8.6 10.9 2.6 2.4-2.6 2.4" />
      <path d="M13 15.9h3" />
    </>
  ),
};

const toHex6 = (c) => {
  const h = c.replace('#', '');
  return (h.length === 3 ? h.split('').map(x => x + x).join('') : h).toUpperCase();
};

// Relative luminance (0 = black, 1 = white) — used to detect the current theme
const luminance = (c) => {
  const h = toHex6(c);
  const [r, g, b] = [0, 2, 4].map(i => parseInt(h.slice(i, i + 2), 16) / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

function AILogo({ logo, name, color, size = 32 }) {
  const [failed, setFailed] = useState(false);

  if (LOCAL_LOGOS[logo]) {
    return (
      <svg
        viewBox="0 0 24 24" width={size} height={size} role="img" aria-label={name}
        fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
        style={{ display: 'block' }}
      >
        {LOCAL_LOGOS[logo]}
      </svg>
    );
  }

  if (failed) {
    return (
      <div style={{
        width: size, height: size, borderRadius: '8px',
        background: color + '22', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        fontSize: size * 0.5, fontWeight: 700, color,
        fontFamily: "'Outfit', sans-serif",
      }}>
        {name.charAt(0)}
      </div>
    );
  }

  // simpleicons CDN: /slug/HEX returns the logo already coloured, so it is always visible
  return (
    <img
      src={`https://cdn.simpleicons.org/${logo}/${toHex6(color)}`}
      alt={name}
      width={size}
      height={size}
      style={{ display: 'block' }}
      onError={() => setFailed(true)}
    />
  );
}

function TerminalLine({ text, delay = 0, color }) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 28);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '.78rem', lineHeight: 1.7, color: color || '#B09888' }}>
      {displayed}
      {started && displayed.length < text.length && (
        <span style={{ display: 'inline-block', width: '2px', height: '1em', background: '#F07040', marginLeft: '2px', animation: 'pulse 1s infinite', verticalAlign: 'text-bottom' }} />
      )}
    </div>
  );
}

function NeuralDots({ C }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width = canvas.offsetWidth;
    const H = canvas.height = canvas.offsetHeight;

    const nodes = Array.from({ length: 28 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2.5 + 1,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      });
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(240,112,64,${0.12 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      nodes.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(240,112,64,0.35)';
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', borderRadius: '16px', pointerEvents: 'none' }} />
  );
}

export default function AITools({ C, R, dark: darkProp }) {
  // App.jsx doesn't pass `dark`, so fall back to reading it from the background colour
  const dark = darkProp ?? luminance(C.bg) < 0.4;
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.2 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <section id="aitools" className="section" style={{ background: C.surface }} ref={sectionRef}>
        <div className="container">
          <SectionHeader
            label="Workflow"
            title="AI-Powered Development"
            subtitle="AI isn't just a tool in my workflow — it's a core part of how I architect, build, debug, and ship production software every day."
            R={R}
            C={C}
          />

          {/* Terminal header card */}
          <div {...R('ai-terminal', 0)} style={{ position: 'relative', background: C.card, border: `1px solid ${C.border}`, borderRadius: '16px', padding: '1.5rem 1.75rem', marginBottom: '1.5rem', overflow: 'hidden' }}>
            <NeuralDots C={C} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Traffic lights */}
              <div style={{ display: 'flex', gap: '.45rem', marginBottom: '1.1rem' }}>
                {['#FF5F57', '#FFBD2E', '#28C840'].map(c => (
                  <div key={c} style={{ width: '12px', height: '12px', borderRadius: '50%', background: c }} />
                ))}
                <span style={{ marginLeft: '.75rem', fontFamily: "'IBM Plex Mono', monospace", fontSize: '.7rem', color: C.muted }}>atiar@ai-workflow ~ $</span>
              </div>
              {visible && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.15rem' }}>
                  <TerminalLine text="$ echo $AI_APPROACH" delay={0} color={C.muted} />
                  <TerminalLine text="  → Using AI tools to architect, build, debug and ship — not just autocomplete." delay={400} color={C.accent} />
                  <TerminalLine text="$ claude --mode professional --course completed" delay={1400} color={C.muted} />
                  <TerminalLine text="  ✓ Claude Code for Professionals — certified & active" delay={2200} color="#48BFA0" />
                  <TerminalLine text="$ status" delay={3200} color={C.muted} />
                  <TerminalLine text="  → AI-driven development: ENABLED" delay={3800} color="#9B8AF5" />
                </div>
              )}
            </div>
          </div>

          {/* Tool cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
          {AI_TOOLS.map((tool, i) => {
            const tone = dark ? (tool.colorDark || tool.color) : tool.color;
            return (
            <div
              key={i}
              {...R(`ai-${i}`, i * 0.08)}
              style={{
                background: C.card,
                border: `1px solid ${C.border}`,
                borderRadius: '16px',
                padding: '1.5rem',
                borderTop: `3px solid ${tone}`,
                transition: 'transform .25s ease, box-shadow .25s ease',
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = `0 8px 28px ${tone}18`;
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Header: logo + name + badge */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                  <div style={{
                    width: '42px', height: '42px', borderRadius: '10px',
                    background: tone + '15',
                    border: `1px solid ${tone}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <AILogo logo={tool.logo} name={tool.name} color={tone} size={22} />
                  </div>
                  <span style={{ fontWeight: 700, fontSize: '1rem', color: C.text }}>{tool.name}</span>
                </div>
                {tool.badge && (
                  <span style={{
                    fontSize: '.6rem', fontWeight: 700, letterSpacing: '.05em',
                    background: tone + '15', color: tone,
                    padding: '.2rem .6rem', borderRadius: '99px',
                    border: `1px solid ${tone}30`,
                    whiteSpace: 'nowrap', flexShrink: 0,
                  }}>
                    {tool.badge}
                  </span>
                )}
              </div>

              <p style={{ fontSize: '.85rem', color: C.muted, lineHeight: 1.75 }}>{tool.desc}</p>
            </div>
          );
          })}
        </div>

          {/* Metrics strip */}
          <div {...R('metrics-strip', 0.1)} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            {METRICS.map((m, i) => (
              <div key={i} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: '14px', padding: '1.2rem', textAlign: 'center' }}>
                <p className="serif" style={{ fontSize: '1.7rem', fontWeight: 700, color: C.accent, lineHeight: 1, marginBottom: '.35rem' }}>{m.value}</p>
                <p style={{ fontSize: '.8rem', fontWeight: 600, marginBottom: '.2rem', color: C.text }}>{m.label}</p>
                <p style={{ fontSize: '.7rem', color: C.muted }}>{m.sub}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
