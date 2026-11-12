import { SKILLS } from '../data';
import SectionHeader from './SectionHeader';

export default function Skills({ C, R }) {
  return (
    <section id="skills" className="section" style={{ background: C.surface }}>
      <div className="container">
        <SectionHeader label="Expertise" title="Tech Stack" R={R} C={C} />

        {/* Skill category cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {SKILLS.map((s, i) => (
            <div
              key={s.cat}
              {...R(`skill-${i}`, i * 0.08)}
              style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: '16px', padding: '1.5rem' }}
            >
              <p style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.12em', color: C.accent, marginBottom: '1rem' }}>
                {s.cat.toUpperCase()}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
                {s.items.map(item => (
                  <span
                    key={item}
                    className="skill-chip"
                    style={{ background: C.surface, border: `1px solid ${C.border}`, color: C.text }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
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
