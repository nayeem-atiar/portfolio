import { PROJECTS } from '../data';
import SectionHeader from './SectionHeader';

export default function Projects({ C, R }) {
  return (
    <section id="projects" className="section container">
      <SectionHeader label="Portfolio" title="Selected Projects" R={R} C={C} />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {PROJECTS.map((p, i) => (
          <div
            key={i}
            {...R(`proj-${i}`, i * 0.07)}
            className="proj-card"
            style={{ background: C.card, border: `1px solid ${C.border}`, display: 'flex', flexDirection: 'column' }}
          >
            {/* Color bar */}
            <div style={{ height: '5px', background: p.color }} />

            <div style={{ padding: '1.6rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              {/* Top row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: p.color + '18', border: `1px solid ${p.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '.85rem', fontWeight: 700, color: p.color }}>{p.n}</span>
                </div>
                <span style={{ fontSize: '.7rem', color: C.muted }}>{p.period}</span>
              </div>

              <h3 style={{ fontSize: '.98rem', fontWeight: 600, marginBottom: '.3rem', lineHeight: 1.3, color: C.text }}>{p.name}</h3>
              <p style={{ fontSize: '.75rem', color: p.color, fontWeight: 500, marginBottom: '.9rem', letterSpacing: '.03em' }}>{p.client}</p>
              <p style={{ fontSize: '.84rem', color: C.muted, lineHeight: 1.7, flex: 1, marginBottom: '1.2rem' }}>{p.desc}</p>

              {/* Tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.35rem' }}>
                {p.tech.map(t => (
                  <span key={t} style={{ fontSize: '.68rem', fontWeight: 500, padding: '.2rem .6rem', borderRadius: '5px', background: p.color + '15', color: p.color }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
