import { EXP } from '../data';
import SectionHeader from './SectionHeader';

export default function Experience({ C, R }) {
  return (
    <section id="experience" className="section" style={{ background: C.surface }}>
      <div className="container">
        <SectionHeader label="Career" title="Work Experience" R={R} C={C} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {EXP.map((e, i) => (
            <div
              key={i}
              {...R(`exp-${i}`, i * 0.1)}
              className="exp-card"
              style={{
                background: C.card,
                border: `1px solid ${C.border}`,
                borderRadius: '16px',
                padding: '2rem',
                borderLeft: i === 0 ? `3px solid ${C.accent}` : `3px solid ${C.border}`,
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '.5rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '.35rem' }}>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: C.text }}>{e.role}</h3>
                    {i === 0 && (
                      <span style={{ fontSize: '.65rem', fontWeight: 600, letterSpacing: '.07em', background: C.accentL, color: C.accent, padding: '.15rem .55rem', borderRadius: '99px', border: `1px solid ${C.accent}40` }}>
                        CURRENT
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: '.88rem', color: C.accent, fontWeight: 500 }}>{e.co}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', background: C.surface, padding: '.35rem .85rem', borderRadius: '99px', border: `1px solid ${C.border}` }}>
                  <span style={{ fontSize: '.75rem', color: C.muted }}>{e.period}</span>
                  <span style={{ fontSize: '.65rem', color: C.muted, fontWeight: 600 }}>· {e.type}</span>
                </div>
              </div>

              {/* Points */}
              <ul style={{ listStyle: 'none', marginBottom: '1.2rem' }}>
                {e.pts.map((p, j) => (
                  <li key={j} style={{ color: C.muted, fontSize: '.87rem', lineHeight: 1.75, marginBottom: '.3rem', paddingLeft: '1.1rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: C.accent, fontWeight: 700 }}>›</span>
                    {p}
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem' }}>
                {e.tech.map(t => (
                  <span key={t} style={{ fontSize: '.72rem', fontWeight: 500, padding: '.25rem .7rem', borderRadius: '6px', background: C.surface, border: `1px solid ${C.border}`, color: C.muted }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
