import { SKILLS } from '../data';
import SectionHeader from './SectionHeader';

export default function Skills({ C, R }) {
  return (
    <section id="skills" className="section" style={{ background: C.surface }}>
      <div className="container">
        <SectionHeader label="Expertise" title="Tech Stack" subtitle="The languages, frameworks, databases and design practices I use to build and ship production software." R={R} C={C} />

        {/* Legend */}
        <p {...R('skills-legend')} style={{ ...R('skills-legend').style, display: 'flex', alignItems: 'center', gap: '.5rem', fontSize: '.78rem', color: C.muted, marginTop: '-2rem', marginBottom: '1.75rem' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: C.accent, display: 'inline-block' }} />
          Highlighted skills are the ones I use most day to day
        </p>

        {/* Skill category cards */}
        <div className="skills-grid">
          {SKILLS.map((s, i) => {
            const r = R(`skill-${i}`, i * 0.08);
            return (
              <div
                key={s.cat}
                data-rid={r['data-rid']}
                className={`${r.className}${s.wide ? ' skill-wide' : ''}`}
                style={r.style}
              >
                <div
                  className="skill-card"
                  style={{
                    background: C.card,
                    border: `1px solid ${C.border}`,
                    borderTop: `3px solid ${s.color}`,
                    '--card-glow': `${s.color}26`,
                    '--card-border': `${s.color}80`,
                  }}
                >
                  {/* Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '.9rem', marginBottom: '.85rem' }}>
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
                      background: `${s.color}1F`, border: `1px solid ${s.color}40`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.1rem', fontWeight: 700, color: s.color,
                      fontFamily: "'Outfit', sans-serif",
                    }}>
                      {s.icon}
                    </div>
                    <h3 className="serif" style={{ fontSize: '1.25rem', fontWeight: 700, color: C.text, letterSpacing: '-.01em' }}>
                      {s.cat}
                    </h3>
                  </div>

                  <p style={{ fontSize: '.88rem', color: C.muted, lineHeight: 1.7, marginBottom: '1.25rem' }}>
                    {s.desc}
                  </p>

                  {/* Chips */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.6rem' }}>
                    {s.items.map(item => {
                      const isCore = (s.core || []).includes(item);
                      return (
                        <span
                          key={item}
                          className="skill-chip skill-chip--lg"
                          style={{
                            background: isCore ? `${s.color}1F` : C.surface,
                            border: `1px solid ${isCore ? `${s.color}80` : C.border}`,
                            color: C.text,
                            fontWeight: isCore ? 600 : 500,
                          }}
                        >
                          {isCore && (
                            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: s.color, display: 'inline-block', marginRight: '.5rem' }} />
                          )}
                          {item}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Languages + Education */}
        <div {...R('misc', 0.1)} className="misc-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
          <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: '16px', padding: '1.5rem' }}>
            <p style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.12em', color: C.accent, marginBottom: '.5rem' }}>LANGUAGES</p>
            <p style={{ fontSize: '.88rem', fontWeight: 500, marginBottom: '.2rem', color: C.text }}>
              English <span style={{ color: C.muted, fontSize: '.78rem' }}>Professional</span>
            </p>
            <p style={{ fontSize: '.88rem', fontWeight: 500, color: C.text }}>
              Bengali <span style={{ color: C.muted, fontSize: '.78rem' }}>Native</span>
            </p>
          </div>
          <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: '16px', padding: '1.5rem' }}>
            <p style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.12em', color: C.accent, marginBottom: '.5rem' }}>EDUCATION</p>
            <p style={{ fontSize: '.9rem', fontWeight: 600, marginBottom: '.2rem', color: C.text }}>B.Sc. in Computer Science & Engineering</p>
            <p style={{ fontSize: '.82rem', color: C.muted }}>Southeast University</p>
          </div>
        </div>
      </div>
    </section>
  );
}
